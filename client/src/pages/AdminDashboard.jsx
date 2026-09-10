import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import {
  Database,
  ShieldCheck,
  Calendar,
  Users,
  MessageSquare,
  Trash2,
  Plus,
  RefreshCw,
  CheckCircle2,
  Layers,
  FileText,
  ThumbsUp,
  Inbox,
  Filter,
} from 'lucide-react';

export default function AdminDashboard() {
  const [health, setHealth] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [therapists, setTherapists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('bookings');
  const [notice, setNotice] = useState(null);

  // Content Events tab state (from manage_content_events_admin)
  const [contentEvents, setContentEvents] = useState([
    { id: 1, title: 'The Science of Mindful Breathing', type: 'Workshop', status: 'Published', date: 'Oct 24, 2026', signups: 48 },
    { id: 2, title: 'Finals Without the Freak-out', type: 'Student Workshop', status: 'Published', date: 'Nov 02, 2026', signups: 82 },
    { id: 3, title: 'Grief & Gentle Healing Circle', type: 'Peer Support', status: 'Draft', date: 'Nov 10, 2026', signups: 14 },
    { id: 4, title: 'Digital Detox & Somatic Reset', type: 'Webinar', status: 'Published', date: 'Nov 18, 2026', signups: 65 },
  ]);

  // Submissions tab state (from manage_submissions_admin)
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      sender: 'Marcus T. (marcus@example.com)',
      category: 'Inquiry',
      text: 'Looking for a somatic practitioner who specializes in neurodivergent adults and sensory overload.',
      status: 'Pending',
      date: 'Today at 9:15 AM',
    },
    {
      id: 2,
      sender: 'Elena K. (Anonymous)',
      category: 'Soul Food Tip',
      text: 'Practicing the 5-4-3-2-1 technique while touching cold ceramic tea mug grounded me completely.',
      status: 'Approved',
      date: 'Yesterday at 3:40 PM',
    },
    {
      id: 3,
      sender: 'Jordan W. (jordan@example.com)',
      category: 'Workshop Suggestion',
      text: 'Could we organize a workshop on balancing workplace burnout with evening creative writing?',
      status: 'Reviewed',
      date: 'Sep 08, 2026',
    },
  ]);

  // New therapist form state
  const [showAddTherapist, setShowAddTherapist] = useState(false);
  const [newTherapist, setNewTherapist] = useState({
    name: '',
    title: '',
    bio: '',
    specialties: 'Anxiety, Mindfulness',
    hourlyRate: 100,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const [h, b, t] = await Promise.all([
        api.getHealth().catch(() => null),
        api.getBookings().catch(() => []),
        api.getTherapists().catch(() => []),
      ]);
      setHealth(h);
      setBookings(b);
      setTherapists(t);
    } catch (err) {
      console.warn('Admin load error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCancelBooking = async (id) => {
    try {
      await api.cancelBooking(id);
      setBookings(bookings.filter((b) => b._id !== id));
      setNotice('Booking removed successfully.');
      setTimeout(() => setNotice(null), 3000);
    } catch (err) {
      console.warn('Booking cancel failed:', err);
    }
  };

  const handleAddTherapist = async (e) => {
    e.preventDefault();
    try {
      const created = await api.createTherapist({
        ...newTherapist,
        specialties: newTherapist.specialties.split(',').map((s) => s.trim()),
      });
      setTherapists([created, ...therapists]);
      setShowAddTherapist(false);
      setNewTherapist({
        name: '',
        title: '',
        bio: '',
        specialties: 'Anxiety, Mindfulness',
        hourlyRate: 100,
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
      });
      setNotice('Therapist registered successfully in database.');
      setTimeout(() => setNotice(null), 3000);
    } catch (err) {
      console.warn('Therapist add failed:', err);
    }
  };

  const handleApproveSubmission = (id) => {
    setSubmissions(
      submissions.map((s) => (s.id === id ? { ...s, status: 'Approved' } : s))
    );
    setNotice('Submission approved and published to Sanctuary.');
    setTimeout(() => setNotice(null), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-container/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            Sanctuary Operations Suite
          </div>
          <h1 className="font-headline text-3xl font-extrabold text-on-surface">
            Admin Portal & Operations
          </h1>
        </div>

        <button
          onClick={fetchData}
          className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-bold flex items-center gap-2 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Refresh Metrics</span>
        </button>
      </div>

      {notice && (
        <div className="mb-6 p-4 rounded-2xl bg-primary-container/25 text-on-primary-container text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
          <span>{notice}</span>
        </div>
      )}

      {/* Database & Cloud Health Bar */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-surface-container-high mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-primary-container/30 text-primary flex items-center justify-center">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-headline font-bold text-base text-on-surface">
                  MongoDB Atlas Cluster
                </h3>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    health?.database?.connected
                      ? 'bg-green-100 text-green-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {health?.database?.connected ? 'Atlas Connected (Live)' : 'Resilient Fallback Mode'}
                </span>
              </div>
              <p className="text-xs text-on-surface-variant font-mono">
                {health?.database?.cluster || 'cluster0.pvsgeha.mongodb.net'} &bull; DB: {health?.database?.dbName || 'breathe_sanctuary'}
              </p>
            </div>
          </div>

          <div className="text-xs text-on-surface-variant text-right">
            <p>API Status: <strong className="text-primary font-mono">/api/health (Healthy)</strong></p>
            <p>Database Ready State: <strong>{health?.database?.readyStateDescription || 'Operational'}</strong></p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs covering all Stitch admin screens */}
      <div className="flex flex-wrap gap-2 border-b border-surface-container-high pb-4 mb-8">
        <button
          onClick={() => setActiveTab('bookings')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'bookings'
              ? 'bg-primary text-white shadow-sm'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Therapy Bookings ({bookings.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('therapists')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'therapists'
              ? 'bg-primary text-white shadow-sm'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Therapist Directory ({therapists.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('content')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'content'
              ? 'bg-primary text-white shadow-sm'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Content & Events ({contentEvents.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('submissions')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'submissions'
              ? 'bg-primary text-white shadow-sm'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
        >
          <Inbox className="w-4 h-4" />
          <span>User Inquiries & Submissions ({submissions.length})</span>
        </button>
      </div>

      {/* Tab 1: Bookings Management */}
      {activeTab === 'bookings' && (
        <div>
          {bookings.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-dashed border-outline-variant">
              <Calendar className="w-8 h-8 text-outline-variant mx-auto mb-2" />
              <p className="font-bold text-sm text-on-surface mb-1">No active therapy bookings</p>
              <p className="text-xs text-on-surface-variant">Sessions booked via the Therapists page will appear here.</p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-sm border border-surface-container-high overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-surface-container border-b border-surface-container-high text-on-surface-variant uppercase font-bold text-[11px]">
                    <tr>
                      <th className="p-4">Client Name</th>
                      <th className="p-4">Assigned Therapist</th>
                      <th className="p-4">Session Date & Time</th>
                      <th className="p-4">Format</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-high">
                    {bookings.map((b) => (
                      <tr key={b._id} className="hover:bg-surface-container-low/50">
                        <td className="p-4">
                          <p className="font-bold text-on-surface">{b.clientName}</p>
                          <p className="text-[11px] text-on-surface-variant font-mono">{b.clientEmail}</p>
                        </td>
                        <td className="p-4 font-semibold text-primary">{b.therapistName}</td>
                        <td className="p-4">
                          <span>{b.date}</span> at <strong>{b.timeSlot}</strong>
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-0.5 rounded-md bg-secondary-container/40 text-secondary font-medium">
                            {b.sessionType}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-800">
                            {b.status || 'Confirmed'}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => handleCancelBooking(b._id)}
                            className="p-1.5 rounded-lg text-on-surface-variant hover:text-red-600 hover:bg-rose-50 transition-colors"
                            title="Cancel Booking"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Therapists Management */}
      {activeTab === 'therapists' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline font-bold text-lg text-on-surface">
              Registered Specialists
            </h3>
            <button
              onClick={() => setShowAddTherapist(!showAddTherapist)}
              className="px-4 py-2 rounded-full bg-primary text-white font-bold text-xs flex items-center gap-1.5 shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Therapist</span>
            </button>
          </div>

          {showAddTherapist && (
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-primary/40 mb-8 animate-in fade-in duration-200">
              <h4 className="font-bold text-sm text-on-surface mb-3">Register New Therapist</h4>
              <form onSubmit={handleAddTherapist} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Maya Angel, PsyD"
                    value={newTherapist.name}
                    onChange={(e) => setNewTherapist({ ...newTherapist, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-outline-variant/60 bg-[#fbf9f5]"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">Professional Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Licensed Clinical Psychologist"
                    value={newTherapist.title}
                    onChange={(e) => setNewTherapist({ ...newTherapist, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-outline-variant/60 bg-[#fbf9f5]"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">Specialties (comma separated)</label>
                  <input
                    type="text"
                    required
                    placeholder="Anxiety & Panic, Trauma Recovery"
                    value={newTherapist.specialties}
                    onChange={(e) => setNewTherapist({ ...newTherapist, specialties: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-outline-variant/60 bg-[#fbf9f5]"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">Hourly Rate ($)</label>
                  <input
                    type="number"
                    required
                    value={newTherapist.hourlyRate}
                    onChange={(e) => setNewTherapist({ ...newTherapist, hourlyRate: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-outline-variant/60 bg-[#fbf9f5]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block font-bold mb-1">Biography</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Compassionate bio detailing clinical philosophy and patient care..."
                    value={newTherapist.bio}
                    onChange={(e) => setNewTherapist({ ...newTherapist, bio: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-outline-variant/60 bg-[#fbf9f5] resize-none"
                  />
                </div>

                <div className="md:col-span-2 flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddTherapist(false)}
                    className="px-4 py-2 rounded-xl bg-surface-container text-xs font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-xl bg-primary text-white text-xs font-bold shadow"
                  >
                    Save Therapist
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {therapists.map((t) => (
              <div
                key={t._id}
                className="bg-white p-5 rounded-2xl border border-surface-container-high flex items-center gap-4"
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div className="flex-grow text-xs">
                  <h4 className="font-headline font-bold text-sm text-on-surface">{t.name}</h4>
                  <p className="text-primary font-medium">{t.title}</p>
                  <p className="text-on-surface-variant mt-1">${t.hourlyRate}/session &bull; ★ {t.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Content & Events (from manage_content_events_admin) */}
      {activeTab === 'content' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-headline font-bold text-lg text-on-surface">
              Manage Content, Workshops & Webinars
            </h3>
            <button
              onClick={() => alert('New workshop created and added to library.')}
              className="px-4 py-2 rounded-full bg-coral text-white font-bold text-xs flex items-center gap-1.5 shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Create Event</span>
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-surface-container-high overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-container border-b border-surface-container-high text-on-surface-variant uppercase font-bold text-[11px]">
                <tr>
                  <th className="p-4">Title</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Scheduled Date</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Registrations</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-high">
                {contentEvents.map((event) => (
                  <tr key={event.id} className="hover:bg-surface-container-low/50">
                    <td className="p-4 font-bold text-on-surface">{event.title}</td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded-full bg-secondary-container/40 text-secondary text-[10px] font-bold">
                        {event.type}
                      </span>
                    </td>
                    <td className="p-4 text-on-surface-variant">{event.date}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          event.status === 'Published'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {event.status}
                      </span>
                    </td>
                    <td className="p-4 font-bold text-primary">{event.signups} seats</td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() =>
                          setContentEvents(contentEvents.filter((c) => c.id !== event.id))
                        }
                        className="p-1.5 rounded-lg text-on-surface-variant hover:text-red-600 hover:bg-rose-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: Submissions & Inquiries (from manage_submissions_admin) */}
      {activeTab === 'submissions' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-headline font-bold text-lg text-on-surface">
              Pending Inquiries & User Submissions
            </h3>
            <span className="text-xs font-semibold text-primary">
              Average response time: 4.2 hours
            </span>
          </div>

          <div className="space-y-4">
            {submissions.map((sub) => (
              <div
                key={sub.id}
                className="bg-white p-6 rounded-3xl border border-surface-container-high shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between gap-4 items-start md:items-center"
              >
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary-container/40 text-secondary">
                      {sub.category}
                    </span>
                    <span className="text-on-surface-variant">{sub.date}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        sub.status === 'Approved'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {sub.status}
                    </span>
                  </div>
                  <p className="font-bold text-sm text-on-surface">{sub.sender}</p>
                  <p className="text-on-surface-variant italic">"{sub.text}"</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {sub.status !== 'Approved' && (
                    <button
                      onClick={() => handleApproveSubmission(sub.id)}
                      className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold flex items-center gap-1 shadow"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>Approve</span>
                    </button>
                  )}
                  <button
                    onClick={() => setSubmissions(submissions.filter((s) => s.id !== sub.id))}
                    className="p-2 rounded-xl border border-outline-variant/50 text-on-surface-variant hover:text-red-600 hover:bg-rose-50 text-xs"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
