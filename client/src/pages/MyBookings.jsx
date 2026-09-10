import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState(null);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const data = await api.getBookings();
      setBookings(data);
    } catch (err) {
      console.warn('Could not fetch bookings:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCancel = async (id) => {
    try {
      await api.cancelBooking(id);
      setBookings(bookings.filter((b) => b._id !== id));
      setNotice('Session cancelled gently. Take all the time you need.');
      setTimeout(() => setNotice(null), 3500);
    } catch (err) {
      console.warn('Cancel failed:', err);
    }
  };

  return (
    <div className="pt-8 md:pt-16 pb-section-padding-mobile md:pb-section-padding-desktop px-gutter max-w-container-max mx-auto min-h-screen flex flex-col gap-16 font-body-md text-body-md">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-4">
        <div>
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface mb-2">
            My Bookings
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Take your time reviewing your schedule. This space is designed to help you manage your journey at your own pace.
          </p>
        </div>
        <Link
          to="/therapists"
          className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-full hover:bg-primary/90 transition-all shadow-sm flex items-center gap-2 shrink-0"
        >
          <span className="material-symbols-outlined">add</span>
          Book New Session
        </Link>
      </header>

      {/* Gentle Policy Note */}
      <section aria-label="Cancellation Policy" className="bg-surface-container-low rounded-xl p-6 border border-surface-variant/50 flex items-start gap-4">
        <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
          favorite
        </span>
        <div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            <strong className="font-semibold text-on-surface">We understand plans change.</strong> Please let us know 24 hours in advance if you can, so we can adjust our schedule gently. There are no penalties for taking the time you need.
          </p>
        </div>
      </section>

      {notice && (
        <div className="p-4 rounded-xl bg-primary-container/25 text-on-primary-container text-xs flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">check_circle</span>
          <span>{notice}</span>
        </div>
      )}

      {/* Upcoming Sessions */}
      <section aria-labelledby="upcoming-heading">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 flex items-center gap-3" id="upcoming-heading">
          <span className="material-symbols-outlined text-primary-container">event</span>
          Upcoming Sessions
        </h2>

        {loading ? (
          <div className="py-16 text-center text-on-surface-variant animate-pulse">
            Loading your schedule...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Real Bookings from API */}
            {bookings.map((booking) => (
              <article
                key={booking._id}
                className="bg-surface-container-lowest rounded-xl p-8 border border-surface-variant/30 ambient-shadow hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Decorative subtle accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container to-secondary-container opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        {booking.date}, {booking.timeSlot}
                      </div>
                      <h3 className="font-headline-md text-headline-md text-on-surface">
                        {booking.sessionType || 'Individual Therapy'}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        with {booking.therapistName}
                      </p>
                    </div>
                    {/* Profile Image */}
                    <div
                      className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-surface shrink-0"
                      style={{
                        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuALgWPigkaqj_WmY0ZOqWzZYBB6Vai94XhSzE_9o3pbF1nv9UIBOavzd-FzFbzieyxhpwVeRBONvcO2qBEvjLmNVZ0u9jiXEsXpsZJONNcNTarvFNMRrRJxMSyP-UmoJjCCZJDFfL4CH8jcuB_M5pkxEPHx9KFLKXbr7yzTTmpaviDa6Gyj2ak2-iRn4RHyTgsrV9NJP8NCfNcAE-UeYZbfaPaOgl3ieb8Hh78YMQ40ilmAW-pC4Da1eA')`
                      }}
                    ></div>
                  </div>

                  {booking.notes && (
                    <p className="text-sm text-on-surface-variant italic mb-4 bg-surface-container-low p-3 rounded-xl border border-surface-variant/40">
                      Focus: "{booking.notes}"
                    </p>
                  )}

                  {/* Security Cue */}
                  <div className="bg-inverse-on-surface/50 rounded-lg p-3 mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">lock</span>
                    <span className="font-body-md text-body-md text-on-surface-variant text-sm">End-to-end encrypted video session</span>
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <button
                    onClick={() => alert(`Reschedule request initiated for session with ${booking.therapistName}. Our sanctuary team will reach out gently.`)}
                    className="flex-1 bg-surface-container-high text-on-surface font-label-md text-label-md py-3 rounded-full hover:bg-surface-dim transition-colors text-center border border-outline-variant/30"
                  >
                    Reschedule
                  </button>
                  <button
                    onClick={() => handleCancel(booking._id)}
                    className="flex-1 text-on-surface-variant font-label-md text-label-md py-3 rounded-full hover:text-error transition-colors text-center"
                  >
                    Cancel
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
