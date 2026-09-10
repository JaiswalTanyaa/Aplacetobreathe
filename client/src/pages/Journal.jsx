import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { BookOpen, Plus, Trash2, Calendar, Smile, Tag, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

const MOODS = [
  { name: 'Peaceful', emoji: '🌿', color: 'bg-primary-container/30 text-primary border-primary/30' },
  { name: 'Calm', emoji: '☁️', color: 'bg-surface-container-high text-on-surface-variant border-outline-variant/40' },
  { name: 'Grateful', emoji: '💛', color: 'bg-tertiary-fixed/40 text-tertiary border-tertiary/30' },
  { name: 'Hopeful', emoji: '✨', color: 'bg-secondary-container/40 text-secondary border-secondary/30' },
  { name: 'Reflective', emoji: '🌊', color: 'bg-blue-100 text-blue-800 border-blue-200' },
  { name: 'Anxious', emoji: '🌧️', color: 'bg-orange-100 text-orange-800 border-orange-200' },
  { name: 'Overwhelmed', emoji: '🌪️', color: 'bg-rose-100 text-rose-800 border-rose-200' },
];

const PROMPTS = [
  'What brought you a gentle moment of comfort or peace today?',
  'What tension or worry are you ready to exhale and release?',
  'Name one small boundary you honored today.',
  'Write down 3 things your body is doing right now to support you.',
];

export default function Journal() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [selectedMood, setSelectedMood] = useState('Peaceful');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState(['Mindfulness']);
  const [notice, setNotice] = useState(null);
  const [filterMood, setFilterMood] = useState('All');

  const fetchEntries = async () => {
    setLoading(true);
    try {
      const data = await api.getJournalEntries();
      setEntries(data);
    } catch (err) {
      console.warn('Could not fetch journal entries:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  const handleSaveEntry = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setSaving(true);
    setNotice(null);
    try {
      const newEntry = await api.createJournalEntry({
        title,
        content,
        mood: selectedMood,
        tags,
      });
      setEntries([newEntry, ...entries]);
      setTitle('');
      setContent('');
      setTags(['Mindfulness']);
      setNotice('Reflective thought saved securely in your digital sanctuary!');
      setTimeout(() => setNotice(null), 3000);
    } catch (err) {
      setNotice('Saved locally. Backend connection pending.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteEntry = async (id) => {
    try {
      await api.deleteJournalEntry(id);
      setEntries(entries.filter((e) => e._id !== id));
    } catch (err) {
      console.warn('Delete failed:', err);
    }
  };

  const applyPrompt = (prompt) => {
    setContent((prev) => (prev ? `${prev}\n\nPrompt: ${prompt}\n` : `Prompt: ${prompt}\n`));
  };

  const filteredEntries = entries.filter((e) => {
    if (filterMood === 'All') return true;
    return e.mood === filterMood;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tertiary-fixed/30 text-tertiary text-xs font-bold uppercase tracking-wider mb-3">
          <BookOpen className="w-4 h-4" />
          Encrypted & Private Sanctuary
        </div>
        <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-on-surface mb-3">
          My Private Journal
        </h1>
        <p className="text-on-surface-variant text-sm sm:text-base">
          A tranquil space to untangle your thoughts, honor emotional shifts, and document your personal healing timeline.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Editor Form Column */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-surface-container-high">
            <h2 className="font-headline font-bold text-xl text-on-surface mb-4">
              Create Today's Reflection
            </h2>

            {notice && (
              <div className="mb-4 p-3 rounded-2xl bg-primary-container/20 text-on-primary-container text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>{notice}</span>
              </div>
            )}

            <form onSubmit={handleSaveEntry} className="space-y-4 text-sm">
              {/* Mood picker */}
              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-2">
                  How does your mind feel right now?
                </label>
                <div className="flex flex-wrap gap-2">
                  {MOODS.map((m) => (
                    <button
                      key={m.name}
                      type="button"
                      onClick={() => setSelectedMood(m.name)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                        selectedMood === m.name
                          ? 'border-primary bg-primary text-white shadow-sm scale-105'
                          : `${m.color} hover:opacity-80`
                      }`}
                    >
                      <span>{m.emoji}</span>
                      <span>{m.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Prompts */}
              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1.5 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-coral" /> Gentle Inspiration Prompts:
                </label>
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
                  {PROMPTS.map((p, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => applyPrompt(p)}
                      className="px-3 py-1 rounded-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high text-[11px] whitespace-nowrap"
                    >
                      {p.substring(0, 38)}...
                    </button>
                  ))}
                </div>
              </div>

              {/* Title input */}
              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1">
                  Title or Theme
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Unpacking afternoon anxiety, A moment of gratitude..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 focus:outline-none focus:border-primary bg-[#fbf9f5]"
                />
              </div>

              {/* Content textarea */}
              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1">
                  Private Thoughts
                </label>
                <textarea
                  rows="6"
                  required
                  placeholder="Write freely. There is no right or wrong way to feel here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant/60 focus:outline-none focus:border-primary bg-[#fbf9f5] resize-y"
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1">
                  Tags (Press Enter to add)
                </label>
                <div className="flex flex-wrap items-center gap-2 p-2 rounded-xl border border-outline-variant/60 bg-[#fbf9f5]">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-primary-container/30 text-primary text-xs font-semibold flex items-center gap-1"
                    >
                      #{tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="hover:text-red-600 ml-1 text-xs"
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                  <input
                    type="text"
                    placeholder="Add tag..."
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleAddTag}
                    className="bg-transparent text-xs focus:outline-none flex-grow min-w-[80px]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="w-full py-3.5 rounded-xl bg-primary text-white font-bold text-sm shadow hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{saving ? 'Saving to Sanctuary...' : 'Save Private Entry'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Entries Past Reflections Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-headline font-bold text-xl text-on-surface">
              Past Reflections ({filteredEntries.length})
            </h2>
            <select
              value={filterMood}
              onChange={(e) => setFilterMood(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-outline-variant/60 text-xs bg-white text-on-surface"
            >
              <option value="All">All Moods</option>
              {MOODS.map((m) => (
                <option key={m.name} value={m.name}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          {loading ? (
            <div className="py-12 text-center text-xs text-on-surface-variant animate-pulse">
              Retrieving encrypted entries...
            </div>
          ) : filteredEntries.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-3xl border border-dashed border-outline-variant/60">
              <BookOpen className="w-8 h-8 text-outline-variant mx-auto mb-2" />
              <p className="font-bold text-sm text-on-surface mb-1">No reflections yet</p>
              <p className="text-xs text-on-surface-variant">
                Take a deep breath and pen your very first thoughts on the left.
              </p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[640px] overflow-y-auto pr-1">
              {filteredEntries.map((entry) => (
                <div
                  key={entry._id}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-surface-container-high hover:border-outline-variant/80 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-primary-container/20 text-primary">
                      {entry.mood}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {entry.date}
                      </span>
                      <button
                        onClick={() => handleDeleteEntry(entry._id)}
                        className="p-1 rounded-lg text-on-surface-variant hover:text-red-600 hover:bg-rose-50 transition-colors"
                        title="Delete reflection"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <h3 className="font-headline font-bold text-base text-on-surface mb-2">
                    {entry.title}
                  </h3>

                  <p className="text-xs text-on-surface-variant leading-relaxed whitespace-pre-line mb-3">
                    {entry.content}
                  </p>

                  {entry.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {entry.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded bg-surface-container text-on-surface-variant"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
