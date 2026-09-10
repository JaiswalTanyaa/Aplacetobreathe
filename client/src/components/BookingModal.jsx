import React, { useState } from 'react';
import { X, Calendar, Clock, Video, CheckCircle2, AlertCircle } from 'lucide-react';
import { api } from '../services/api';

export default function BookingModal({ therapist, isOpen, onClose, onBookingSuccess }) {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    sessionType: 'Video Call',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: therapist?.availability?.[0] || '2:00 PM',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  if (!isOpen || !therapist) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await api.createBooking({
        ...formData,
        therapistId: therapist._id,
        therapistName: therapist.name,
      });
      setSuccess(true);
      if (onBookingSuccess) onBookingSuccess();
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      setError(err.message || 'Failed to complete booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-surface-container-high relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-primary-container/30 text-primary rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-surface">
              Session Confirmed!
            </h3>
            <p className="text-sm text-on-surface-variant max-w-xs mx-auto">
              Your confidential session with <strong>{therapist.name}</strong> is scheduled. A confirmation email and calendar invite have been prepared.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={therapist.avatar}
                alt={therapist.name}
                className="w-14 h-14 rounded-2xl object-cover"
              />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Book a Sanctuary Session
                </span>
                <h3 className="font-headline font-bold text-xl text-on-surface">
                  {therapist.name}
                </h3>
                <p className="text-xs text-on-surface-variant">{therapist.title}</p>
              </div>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-coral/15 border border-coral/30 text-coral-dark text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Miller"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 focus:outline-none focus:border-primary bg-[#fbf9f5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="jordan@example.com"
                  value={formData.clientEmail}
                  onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 focus:outline-none focus:border-primary bg-[#fbf9f5]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 focus:outline-none focus:border-primary bg-[#fbf9f5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1">
                    Session Format
                  </label>
                  <select
                    value={formData.sessionType}
                    onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 focus:outline-none focus:border-primary bg-[#fbf9f5]"
                  >
                    <option value="Video Call">Video Call (Secure WebRTC)</option>
                    <option value="Voice Session">Voice Only Session</option>
                    <option value="Chat Support">Guided Chat Therapy</option>
                    <option value="In-Person Sanctuary">In-Person Sanctuary</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1">
                  Available Time Slot
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 focus:outline-none focus:border-primary bg-[#fbf9f5]"
                >
                  {therapist.availability?.map((slot, idx) => (
                    <option key={idx} value={slot}>
                      {slot}
                    </option>
                  ))}
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="4:30 PM">4:30 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1">
                  What would you like to focus on? (Optional & Confidential)
                </label>
                <textarea
                  rows="3"
                  placeholder="e.g. Managing workplace stress, sleep anxiety, life transitions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 focus:outline-none focus:border-primary bg-[#fbf9f5] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-coral text-white font-bold hover:bg-coral-dark transition-colors shadow-md disabled:opacity-50"
                >
                  {loading ? 'Confirming Session...' : `Confirm Booking • $${therapist.hourlyRate}/hr`}
                </button>
                <p className="text-[11px] text-center text-on-surface-variant mt-2">
                  🔒 HIPAA Compliant & 100% Encrypted. Free cancellation up to 24 hours prior.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
