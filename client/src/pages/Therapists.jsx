import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import BookingModal from '../components/BookingModal';
import { Search, Star, ShieldCheck, Calendar, Clock, Filter, AlertCircle, Heart } from 'lucide-react';

export default function Therapists() {
  const [therapists, setTherapists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const specialties = [
    'All',
    'Anxiety & Panic',
    'Burnout Recovery',
    'Somatic Experiencing',
    'Relationship Dynamics',
    'Breathwork Integration',
    'Self-Compassion',
  ];

  const fetchTherapists = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getTherapists();
      setTherapists(data);
    } catch (err) {
      setError('Could not connect to backend server. Using local directory.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTherapists();
  }, []);

  const handleBookClick = (therapist) => {
    setSelectedTherapist(therapist);
    setIsModalOpen(true);
  };

  const filteredTherapists = therapists.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.bio.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialty =
      selectedSpecialty === 'All' ||
      t.specialties?.some((s) => s.toLowerCase() === selectedSpecialty.toLowerCase());

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/40 text-secondary text-xs font-bold uppercase tracking-wider mb-3">
          <ShieldCheck className="w-4 h-4" />
          Vetted & Licensed Care
        </div>
        <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-on-surface mb-3">
          Find Your Sanctuary Guide
        </h1>
        <p className="text-on-surface-variant text-sm sm:text-base">
          Connect with warm, credentialed therapists specializing in anxiety, stress reduction, relationship harmony, and trauma-informed healing.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-surface-container-high mb-10 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <input
              type="text"
              placeholder="Search by therapist name, expertise, or approach..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-outline-variant/60 focus:outline-none focus:border-primary text-sm bg-[#fbf9f5]"
            />
          </div>
        </div>

        {/* Specialty Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          <span className="text-xs font-bold text-on-surface-variant flex items-center gap-1 mr-1 flex-shrink-0">
            <Filter className="w-3.5 h-3.5" /> Specialties:
          </span>
          {specialties.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedSpecialty === spec
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>
      </div>

      {/* Error / Offline Alert */}
      {error && (
        <div className="mb-6 p-4 rounded-2xl bg-surface-container-low border border-outline-variant text-xs text-on-surface flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-tertiary flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Therapist List Grid */}
      {loading ? (
        <div className="py-20 text-center text-sm text-on-surface-variant animate-pulse">
          Loading sanctuary therapists...
        </div>
      ) : filteredTherapists.length === 0 ? (
        <div className="py-16 text-center bg-white rounded-3xl border border-dashed border-outline-variant">
          <p className="text-base font-bold text-on-surface mb-1">No therapists found</p>
          <p className="text-xs text-on-surface-variant">Try adjusting your search criteria or specialty filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTherapists.map((therapist) => (
            <div
              key={therapist._id}
              className="bg-white rounded-3xl p-8 shadow-sm border border-surface-container-high flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={therapist.avatar}
                      alt={therapist.name}
                      className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover"
                    />
                    {therapist.isVerified && (
                      <span className="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-full shadow-sm" title="Verified License">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="font-headline font-bold text-xl text-on-surface">
                        {therapist.name}
                      </h3>
                      <div className="flex items-center gap-1 text-tertiary text-xs font-bold bg-tertiary-fixed/30 px-2.5 py-1 rounded-full">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{therapist.rating}</span>
                        <span className="text-on-surface-variant text-[10px]">({therapist.reviewsCount})</span>
                      </div>
                    </div>
                    <p className="text-xs font-semibold text-primary mb-2">
                      {therapist.title}
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      {therapist.experienceYears}+ years experience in mindful mental health
                    </p>
                  </div>
                </div>

                <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3 mb-4">
                  {therapist.bio}
                </p>

                {/* Specialties Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {therapist.specialties?.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant text-[11px] font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer row with pricing & booking */}
              <div className="pt-4 border-t border-surface-container-high flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-on-surface">
                    ${therapist.hourlyRate}
                  </span>
                  <span className="text-xs text-on-surface-variant"> / 50-min session</span>
                </div>

                <button
                  onClick={() => handleBookClick(therapist)}
                  className="bg-coral hover:bg-coral-dark text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Session</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal
        therapist={selectedTherapist}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBookingSuccess={() => {
          fetchTherapists();
        }}
      />
    </div>
  );
}
