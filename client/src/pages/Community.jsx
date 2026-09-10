import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import {
  MessageSquareHeart, Heart, Send, Sparkles, ShieldCheck, Plus,
  CheckCircle2, Users, TrendingUp, Filter, X
} from 'lucide-react';

const CATEGORIES = [
  'All',
  'Stories of Hope',
  'Anxiety & Grounding',
  'Gratitude Circle',
  'Daily Reflections',
  'Mindful Living',
];

const CATEGORY_META = {
  'All':                { emoji: '🌿', desc: 'Browse all shared reflections' },
  'Stories of Hope':    { emoji: '🌻', desc: 'Moments of light and resilience' },
  'Anxiety & Grounding':{ emoji: '🌊', desc: 'Techniques and shared calm' },
  'Gratitude Circle':   { emoji: '💛', desc: 'Tiny things worth celebrating' },
  'Daily Reflections':  { emoji: '📓', desc: 'End-of-day thoughts and insights' },
  'Mindful Living':     { emoji: '🍃', desc: 'Slow down & live with intention' },
};

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showPostForm, setShowPostForm] = useState(false);
  const [newPost, setNewPost] = useState({
    author: 'Gentle Soul',
    category: 'Stories of Hope',
    title: '',
    content: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState(null);

  const fetchPosts = async (cat = selectedCategory) => {
    setLoading(true);
    try {
      const data = await api.getCommunityPosts(cat);
      setPosts(data);
    } catch (err) {
      console.warn('Could not fetch community posts:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(selectedCategory);
  }, [selectedCategory]);

  const handleLike = async (postId) => {
    try {
      const res = await api.likePost(postId);
      setPosts(
        posts.map((p) => (p._id === postId ? { ...p, likes: res.likes || p.likes + 1 } : p))
      );
    } catch (err) {
      console.warn('Like failed:', err.message);
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.content.trim()) return;
    setSubmitting(true);
    setNotice(null);
    try {
      const created = await api.createCommunityPost(newPost);
      setPosts([created, ...posts]);
      setNewPost({ author: 'Gentle Soul', category: 'Stories of Hope', title: '', content: '' });
      setShowPostForm(false);
      setNotice('Your supportive thought has been shared with the sanctuary community!');
      setTimeout(() => setNotice(null), 3500);
    } catch (err) {
      setNotice('Could not post to server. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fbf9f5' }}>

      {/* ── Hero Banner ─────────────────────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(135deg, #4a654e 0%, #3d5441 60%, #2e4032 100%)',
        padding: '56px 32px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-60px', right: '-60px',
          width: 220, height: 220,
          background: 'rgba(255,255,255,0.05)', borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '-40px', left: '20%',
          width: 160, height: 160,
          background: 'rgba(244,162,97,0.12)', borderRadius: '50%',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.12)', borderRadius: 9999,
            padding: '6px 16px', marginBottom: 16,
            backdropFilter: 'blur(8px)',
          }}>
            <MessageSquareHeart size={14} color="#F4A261" />
            <span style={{ color: '#F4A261', fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Safe Community Spaces
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800, color: '#fff',
            margin: '0 0 12px', lineHeight: 1.2,
          }}>
            Stories of Hope &amp; Community
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, maxWidth: 560, margin: 0, lineHeight: 1.6 }}>
            A kind, moderated gathering space to share your journey, offer gentle encouragement,
            and remind one another that no one walks alone.
          </p>

          <div style={{ display: 'flex', gap: 32, marginTop: 28, flexWrap: 'wrap' }}>
            {[
              { icon: <Users size={14} />, label: 'Community Members', val: '2.4k+' },
              { icon: <Heart size={14} />, label: 'Warmth Shared', val: '18k+' },
              { icon: <TrendingUp size={14} />, label: 'Stories This Month', val: posts.length },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: '#F4A261' }}>{s.icon}</span>
                <span style={{ color: '#fff', fontWeight: 800, fontSize: 15 }}>{s.val}</span>
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content Area ────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px', display: 'flex', gap: 28, alignItems: 'flex-start' }}>

        {/* ── LEFT SIDEBAR ── */}
        <aside className="community-sidebar" style={{
          width: 260, flexShrink: 0,
          position: 'sticky', top: 96,
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          <button
            id="share-thought-btn"
            onClick={() => setShowPostForm(!showPostForm)}
            style={{
              width: '100%', padding: '13px 20px',
              borderRadius: 16, border: 'none', cursor: 'pointer',
              background: showPostForm
                ? 'linear-gradient(135deg, #e76f51, #c9593e)'
                : 'linear-gradient(135deg, #F4A261, #e76f51)',
              color: '#fff', fontWeight: 800, fontSize: 13,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              boxShadow: '0 4px 18px rgba(244,162,97,0.35)',
              transition: 'all 0.25s ease',
            }}
          >
            {showPostForm ? <X size={16} /> : <Plus size={16} />}
            {showPostForm ? 'Close Editor' : 'Share Your Thoughts'}
          </button>

          <div style={{
            background: '#fff', borderRadius: 20,
            padding: '18px 0',
            boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
            border: '1px solid #eae8e4',
          }}>
            <p style={{
              fontSize: 11, fontWeight: 800, color: '#737972',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '0 18px 12px', margin: 0,
              borderBottom: '1px solid #f0eeea',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <Filter size={11} />
              Filter by Topic
            </p>
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              const meta = CATEGORY_META[cat];
              return (
                <button
                  key={cat}
                  id={`cat-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '11px 18px',
                    background: isActive ? '#f0f6f1' : 'transparent',
                    border: 'none', cursor: 'pointer',
                    borderLeft: isActive ? '3px solid #4a654e' : '3px solid transparent',
                    transition: 'all 0.18s ease',
                    display: 'flex', alignItems: 'center', gap: 10,
                  }}
                >
                  <span style={{ fontSize: 16, lineHeight: 1 }}>{meta.emoji}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: isActive ? 800 : 600, color: isActive ? '#4a654e' : '#1b1c1a', marginBottom: 1 }}>{cat}</div>
                    <div style={{ fontSize: 11, color: '#737972' }}>{meta.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #4a654e08, #8ba88e15)',
            borderRadius: 16, padding: '16px 18px',
            border: '1px solid #c2c8c040',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <ShieldCheck size={16} color="#4a654e" />
              <span style={{ fontSize: 12, fontWeight: 800, color: '#4a654e' }}>Zero Judgment Zone</span>
            </div>
            <p style={{ fontSize: 11, color: '#424842', lineHeight: 1.55, margin: 0 }}>
              Community Sanctuary Pledge: Kindness, confidentiality, and respect for every healing pace.
            </p>
          </div>
        </aside>

        {/* ── MAIN FEED ── */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {notice && (
            <div style={{
              marginBottom: 20, padding: '14px 18px', borderRadius: 14,
              background: '#f0f6f1', color: '#334d38', fontSize: 13,
              display: 'flex', alignItems: 'center', gap: 10,
              border: '1px solid #4a654e30',
            }}>
              <CheckCircle2 size={16} color="#4a654e" style={{ flexShrink: 0 }} />
              {notice}
            </div>
          )}

          {showPostForm && (
            <div style={{
              marginBottom: 24, background: '#fff',
              borderRadius: 24, padding: '28px 28px 24px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              border: '1px solid #4a654e30',
              animation: 'slideDown 0.25s ease',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                <Sparkles size={16} color="#F4A261" />
                <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', fontSize: 17, fontWeight: 800, color: '#1b1c1a', margin: 0 }}>
                  Share a Reflection or Story
                </h2>
              </div>

              <form onSubmit={handleCreatePost}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#424842', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Display Nickname</label>
                    <input type="text" required placeholder="e.g. Kind Soul..." value={newPost.author}
                      onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid #c2c8c0', outline: 'none', background: '#fbf9f5', fontSize: 13, color: '#1b1c1a', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#424842', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Category</label>
                    <select value={newPost.category} onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid #c2c8c0', outline: 'none', background: '#fbf9f5', fontSize: 13, color: '#1b1c1a', boxSizing: 'border-box' }}>
                      {CATEGORIES.filter((c) => c !== 'All').map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#424842', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Post Title</label>
                  <input type="text" required placeholder="e.g. A small milestone with morning meditation..." value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid #c2c8c0', outline: 'none', background: '#fbf9f5', fontSize: 13, color: '#1b1c1a', boxSizing: 'border-box' }} />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#424842', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Reflection &amp; Encouragement</label>
                  <textarea rows={4} required placeholder="Express what feels real to you. Your words might be the lighthouse someone else needed to see today."
                    value={newPost.content} onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid #c2c8c0', outline: 'none', background: '#fbf9f5', fontSize: 13, color: '#1b1c1a', resize: 'none', boxSizing: 'border-box', lineHeight: 1.6 }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                  <button type="button" onClick={() => setShowPostForm(false)}
                    style={{ padding: '10px 20px', borderRadius: 12, border: 'none', background: '#efeeea', color: '#424842', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
                    Cancel
                  </button>
                  <button type="submit" disabled={submitting}
                    style={{ padding: '10px 24px', borderRadius: 12, border: 'none', background: 'linear-gradient(135deg, #4a654e, #3d5441)', color: '#fff', fontSize: 13, fontWeight: 800, cursor: submitting ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: 8, opacity: submitting ? 0.7 : 1, boxShadow: '0 3px 12px rgba(74,101,78,0.3)' }}>
                    <Send size={14} />
                    {submitting ? 'Sharing...' : 'Publish to Forum'}
                  </button>
                </div>
              </form>
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <div>
              <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', fontSize: 20, fontWeight: 800, color: '#1b1c1a', margin: '0 0 2px' }}>
                {CATEGORY_META[selectedCategory].emoji} {selectedCategory === 'All' ? 'All Community Posts' : selectedCategory}
              </h2>
              <p style={{ fontSize: 12, color: '#737972', margin: 0 }}>{CATEGORY_META[selectedCategory].desc}</p>
            </div>
            {!loading && (
              <span style={{ background: '#4a654e15', color: '#4a654e', fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 9999 }}>
                {posts.length} {posts.length === 1 ? 'post' : 'posts'}
              </span>
            )}
          </div>

          {loading ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
              {[1,2,3,4,5,6].map(i => (
                <div key={i} style={{ background: '#fff', borderRadius: 20, padding: 24, border: '1px solid #eae8e4' }}>
                  <div style={{ height: 14, background: '#efeeea', borderRadius: 8, marginBottom: 10, width: '60%' }} />
                  <div style={{ height: 20, background: '#efeeea', borderRadius: 8, marginBottom: 12 }} />
                  <div style={{ height: 12, background: '#efeeea', borderRadius: 8, marginBottom: 6 }} />
                  <div style={{ height: 12, background: '#efeeea', borderRadius: 8, marginBottom: 6, width: '80%' }} />
                  <div style={{ height: 12, background: '#efeeea', borderRadius: 8, width: '70%' }} />
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div style={{ padding: '60px 24px', textAlign: 'center', background: '#fff', borderRadius: 24, border: '2px dashed #c2c8c0' }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🌱</div>
              <p style={{ fontWeight: 800, fontSize: 16, color: '#1b1c1a', marginBottom: 6 }}>No discussions in this category yet</p>
              <p style={{ fontSize: 13, color: '#737972', margin: 0 }}>Be the first to share an encouraging word above.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
              {posts.map((post) => (
                <article
                  key={post._id}
                  style={{ background: '#fff', borderRadius: 20, padding: 22, border: '1px solid #eae8e4', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'transform 0.22s ease, box-shadow 0.22s ease', cursor: 'default' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.09)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                      <span style={{ padding: '3px 10px', borderRadius: 9999, background: '#ecdcfd50', color: '#655974', fontSize: 11, fontWeight: 700 }}>{post.category}</span>
                      <span style={{ fontSize: 10, color: '#c2c8c0', fontWeight: 600 }}>{post.badge || 'Member'}</span>
                    </div>

                    <h3 style={{ fontFamily: 'Nunito Sans, sans-serif', fontSize: 16, fontWeight: 800, color: '#1b1c1a', margin: '0 0 10px', lineHeight: 1.3 }}>{post.title}</h3>

                    <p style={{ fontSize: 13, color: '#424842', lineHeight: 1.65, margin: '0 0 20px', display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {post.content}
                    </p>
                  </div>

                  <div style={{ paddingTop: 14, borderTop: '1px solid #eae8e4', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#cceace50', color: '#4a654e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800 }}>
                        {post.author?.[0]?.toUpperCase() || 'K'}
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#1b1c1a' }}>{post.author}</span>
                    </div>

                    <button
                      id={`like-btn-${post._id}`}
                      onClick={() => handleLike(post._id)}
                      title="Send warmth"
                      style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#F4A261', background: 'transparent', border: 'none', cursor: 'pointer', padding: '5px 10px', borderRadius: 9999, fontSize: 12, fontWeight: 700, transition: 'background 0.18s ease' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#F4A26115'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <Heart size={15} fill="#F4A26130" />
                      {post.likes || 0}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .community-sidebar { display: none !important; }
        }
      `}</style>
    </div>
  );
}
