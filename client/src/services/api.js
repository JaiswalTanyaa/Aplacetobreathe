const API_BASE = import.meta.env.VITE_API_URL || 'https://aplacetobreathe.onrender.com/api';

export const api = {
  // Health
  async getHealth() {
    const res = await fetch(`${API_BASE}/health`);
    return res.json();
  },

  // Therapists
  async getTherapists() {
    const res = await fetch(`${API_BASE}/therapists`);
    if (!res.ok) throw new Error('Failed to fetch therapists');
    return res.json();
  },

  async createTherapist(data) {
    const res = await fetch(`${API_BASE}/therapists`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to create therapist');
    return res.json();
  },

  // Bookings
  async getBookings() {
    const res = await fetch(`${API_BASE}/bookings`);
    if (!res.ok) throw new Error('Failed to fetch bookings');
    return res.json();
  },

  async createBooking(bookingData) {
    const res = await fetch(`${API_BASE}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    });
    if (!res.ok) throw new Error('Failed to create booking');
    return res.json();
  },

  async cancelBooking(id) {
    const res = await fetch(`${API_BASE}/bookings/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to cancel booking');
    return res.json();
  },

  // Journal
  async getJournalEntries() {
    const res = await fetch(`${API_BASE}/journal`);
    if (!res.ok) throw new Error('Failed to fetch journal entries');
    return res.json();
  },

  async createJournalEntry(entryData) {
    const res = await fetch(`${API_BASE}/journal`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entryData),
    });
    if (!res.ok) throw new Error('Failed to save journal entry');
    return res.json();
  },

  async deleteJournalEntry(id) {
    const res = await fetch(`${API_BASE}/journal/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete journal entry');
    return res.json();
  },

  // Community
  async getCommunityPosts(category = 'All') {
    const query = category && category !== 'All' ? `?category=${encodeURIComponent(category)}` : '';
    const res = await fetch(`${API_BASE}/community${query}`);
    if (!res.ok) throw new Error('Failed to fetch community posts');
    return res.json();
  },

  async createCommunityPost(postData) {
    const res = await fetch(`${API_BASE}/community`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });
    if (!res.ok) throw new Error('Failed to post community thought');
    return res.json();
  },

  async likePost(id) {
    const res = await fetch(`${API_BASE}/community/${id}/like`, {
      method: 'POST',
    });
    if (!res.ok) throw new Error('Failed to like post');
    return res.json();
  },
};
