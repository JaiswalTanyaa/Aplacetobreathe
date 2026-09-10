const express = require('express');
const router = express.Router();
const CommunityPost = require('../models/CommunityPost');
const { isDbConnected } = require('../config/db');
const { initialCommunityPosts } = require('../seed/seedData');

let fallbackPosts = [
  ...initialCommunityPosts.map((p, idx) => ({
    ...p,
    _id: `post-${idx + 1}`,
    createdAt: new Date(Date.now() - idx * 3600000).toISOString(),
  })),
];

// GET community posts
router.get('/', async (req, res) => {
  try {
    const category = req.query.category;
    if (isDbConnected()) {
      const filter = category && category !== 'All' ? { category } : {};
      const posts = await CommunityPost.find(filter).sort({ createdAt: -1 });
      return res.json(posts);
    }
    if (category && category !== 'All') {
      return res.json(fallbackPosts.filter((p) => p.category === category));
    }
    return res.json(fallbackPosts);
  } catch (error) {
    res.status(500).json({ error: error.message, fallback: fallbackPosts });
  }
});

// POST new community post
router.post('/', async (req, res) => {
  try {
    const { title, content, category, author } = req.body;
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required.' });
    }

    if (isDbConnected()) {
      const post = new CommunityPost({
        title,
        content,
        category: category || 'Stories of Hope',
        author: author || 'Kind Soul',
        likes: 0,
        commentsCount: 0,
      });
      const saved = await post.save();
      return res.status(201).json(saved);
    }

    const newPost = {
      _id: `post-${Date.now()}`,
      title,
      content,
      category: category || 'Stories of Hope',
      author: author || 'Kind Soul',
      likes: 0,
      commentsCount: 0,
      badge: 'Member',
      createdAt: new Date().toISOString(),
    };
    fallbackPosts.unshift(newPost);
    return res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// POST like a post
router.post('/:id/like', async (req, res) => {
  try {
    if (isDbConnected()) {
      const post = await CommunityPost.findById(req.params.id);
      if (!post) return res.status(404).json({ message: 'Post not found' });
      post.likes += 1;
      await post.save();
      return res.json({ likes: post.likes });
    }

    const post = fallbackPosts.find((p) => p._id === req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    post.likes += 1;
    return res.json({ likes: post.likes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
