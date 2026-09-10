const Therapist = require('../models/Therapist');
const CommunityPost = require('../models/CommunityPost');
const JournalEntry = require('../models/JournalEntry');

const initialTherapists = [
  {
    name: 'Dr. Elena Vance, PsyD',
    title: 'Clinical Psychologist & Mindfulness Practitioner',
    specialties: ['Anxiety & Panic', 'Burnout Recovery', 'Somatic Experiencing'],
    experienceYears: 12,
    rating: 4.98,
    reviewsCount: 84,
    bio: 'Dedicated to helping individuals rebuild peace and neural resilience through mindfulness-based cognitive therapy and gentle body-awareness techniques.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    hourlyRate: 110,
    availability: ['Today 2:00 PM', 'Tomorrow 10:00 AM', 'Friday 4:00 PM'],
    isVerified: true,
  },
  {
    name: 'Marcus Holloway, LMFT',
    title: 'Licensed Marriage & Family Therapist',
    specialties: ['Relationship Dynamics', 'Emotional Regulation', 'Life Transitions'],
    experienceYears: 9,
    rating: 4.92,
    reviewsCount: 61,
    bio: 'Fosters safe, empathetic conversations designed to restore harmony within personal boundaries and meaningful relationships.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    hourlyRate: 95,
    availability: ['Tomorrow 1:00 PM', 'Thursday 11:00 AM', 'Saturday 2:00 PM'],
    isVerified: true,
  },
  {
    name: 'Amina Nour, LPC',
    title: 'Trauma-Informed Holistic Counselor',
    specialties: ['Holistic Healing', 'Breathwork Integration', 'Self-Compassion'],
    experienceYears: 7,
    rating: 4.95,
    reviewsCount: 47,
    bio: 'Combines modern psychological science with ancient grounding practices, nurturing self-acceptance and emotional release.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    hourlyRate: 85,
    availability: ['Today 5:00 PM', 'Wednesday 3:00 PM', 'Friday 11:00 AM'],
    isVerified: true,
  },
  {
    name: 'David Zhao, LCSW',
    title: 'Cognitive Behavioral Specialist',
    specialties: ['Stress Management', 'Depression Relief', 'Habit Transformation'],
    experienceYears: 11,
    rating: 4.91,
    reviewsCount: 73,
    bio: 'Practical, compassionate goal-oriented support to quiet negative thought loops and cultivate daily mental clarity.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    hourlyRate: 100,
    availability: ['Thursday 9:00 AM', 'Friday 1:00 PM', 'Next Monday 10:00 AM'],
    isVerified: true,
  }
];

const initialCommunityPosts = [
  {
    author: 'Sarah J.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    category: 'Stories of Hope',
    title: 'Finding quiet in the middle of panic: My 3-month milestone',
    content: 'Three months ago, leaving my apartment felt like climbing Everest. Practicing the 4-7-8 breathing circle twice every morning and having a kind therapist here gave me my breath back. Take it one inhalation at a time.',
    likes: 42,
    commentsCount: 9,
    badge: 'Member',
  },
  {
    author: 'Liam Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    category: 'Anxiety & Grounding',
    title: 'The 5-4-3-2-1 technique saved my presentation today',
    content: 'Before stepping into a high-stakes meeting, my heart was racing. I grounded myself: 5 things I can see (wooden table, water bottle...), 4 I can touch, 3 I can hear. It pulled me right back to reality.',
    likes: 38,
    commentsCount: 6,
    badge: 'Guide',
  },
  {
    author: 'Maya Patel',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
    category: 'Gratitude Circle',
    title: 'Grateful for morning sunlight and warm tea',
    content: 'Healing does not have to be loud. Today my sanctuary was sitting in silence with herbal tea for 10 unhurried minutes without checking emails.',
    likes: 56,
    commentsCount: 14,
    badge: 'Member',
  }
];

const seedDatabase = async () => {
  try {
    const therapistCount = await Therapist.countDocuments();
    if (therapistCount === 0) {
      await Therapist.insertMany(initialTherapists);
      console.log('🌱 Seeded default Therapists');
    }

    const postCount = await CommunityPost.countDocuments();
    if (postCount === 0) {
      await CommunityPost.insertMany(initialCommunityPosts);
      console.log('🌱 Seeded initial Community discussions');
    }
  } catch (err) {
    console.warn('Seed database note:', err.message);
  }
};

module.exports = {
  seedDatabase,
  initialTherapists,
  initialCommunityPosts,
};
