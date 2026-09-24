import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Wind, ShieldAlert, ChevronDown, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// ─── Shared hover-safe dropdown ──────────────────────────────────────────────
function DropdownMenu({ label, items, isActive }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const ref = useRef(null);

  const cancelClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  const scheduleClose = () => { cancelClose(); closeTimer.current = setTimeout(() => setOpen(false), 300); };

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => { document.removeEventListener('mousedown', handler); cancelClose(); };
  }, []);

  return (
    <div ref={ref} className="relative"
      onMouseEnter={() => { cancelClose(); setOpen(true); }}
      onMouseLeave={scheduleClose}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`text-xs font-semibold transition-colors relative py-1 flex items-center gap-0.5 ${
          isActive ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        {label}
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in fade-in" />}
      </button>

      {open && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-[180px] z-50"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="bg-[#fbf9f5]/95 backdrop-blur-md border border-surface-container-high rounded-2xl shadow-xl py-2 animate-in fade-in slide-in-from-top-1 duration-150">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-xs font-semibold text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors mx-1 rounded-xl"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── User Profile Avatar Dropdown (logged-in state) ───────────────────────────
function UserProfileDropdown({ user }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const ref = useRef(null);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const cancelClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  const scheduleClose = () => { cancelClose(); closeTimer.current = setTimeout(() => setOpen(false), 300); };

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => { document.removeEventListener('mousedown', handler); cancelClose(); };
  }, []);

  const handleSignOut = () => {
    setOpen(false);
    logout();
    navigate('/');
  };

  return (
    <div ref={ref} className="relative"
      onMouseEnter={() => { cancelClose(); setOpen(true); }}
      onMouseLeave={scheduleClose}
    >
      {/* Avatar trigger — uses existing primary color token */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="User profile"
        className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold hover:opacity-90 transition-opacity shadow-sm ring-2 ring-primary/20 hover:ring-primary/40"
      >
        {user.initials}
      </button>

      {open && (
        <div
          className="absolute top-full right-0 pt-2 min-w-[200px] z-50"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="bg-[#fbf9f5]/95 backdrop-blur-md border border-surface-container-high rounded-2xl shadow-xl py-2 animate-in fade-in slide-in-from-top-1 duration-150">
            {/* User name header */}
            <div className="px-4 py-2 border-b border-surface-container-high mb-1">
              <p className="text-xs font-bold text-on-surface truncate">{user.name}</p>
              {user.email && <p className="text-[10px] text-on-surface-variant truncate">{user.email}</p>}
            </div>

            {/* Progress */}
            <Link
              to="/progress"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors mx-1 rounded-xl"
            >
              <span className="material-symbols-outlined text-[16px]">analytics</span>
              Progress
            </Link>

            {/* My Bookings */}
            <Link
              to="/my-bookings"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors mx-1 rounded-xl"
            >
              <span className="material-symbols-outlined text-[16px]">calendar_month</span>
              My Bookings
            </Link>

            {/* Divider */}
            <div className="border-t border-surface-container-high my-1 mx-4" />

            {/* Sign Out */}
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-2 px-4 py-2 text-xs font-semibold text-on-surface-variant hover:text-error hover:bg-error/5 transition-colors mx-1 rounded-xl text-left"
              style={{ width: 'calc(100% - 8px)' }}
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 20); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const activitiesPaths = ['/workshops', '/community'];
  const resourcesPaths  = ['/journal', '/blog', '/about'];
  // Dashboard dropdown only shown when logged OUT (logged in → those links live in profile dropdown)
  const dashboardPaths  = ['/my-bookings', '/progress'];

  const isActivitiesActive = activitiesPaths.includes(location.pathname);
  const isResourcesActive  = resourcesPaths.includes(location.pathname);
  const isDashboardActive  = dashboardPaths.includes(location.pathname);

  // Mobile drawer links — auth-aware
  const mobileLinks = [
    { name: 'Explore',     path: '/explore' },
    { name: 'Therapists',  path: '/therapists' },
    { name: 'Workshops',   path: '/workshops' },
    { name: 'Community',   path: '/community' },
    { name: 'Journal',     path: '/journal' },
    { name: 'Blog',        path: '/blog' },
    { name: 'About',       path: '/about' },
    ...(user
      ? [
          { name: 'Progress',    path: '/progress' },
          { name: 'My Bookings', path: '/my-bookings' },
        ]
      : [
          { name: 'My Bookings', path: '/my-bookings' },
          { name: 'Progress',    path: '/progress' },
          { name: 'Login / Sign Up', path: '/login' },
        ]),
  ];

  const handleMobileSignOut = () => {
    setIsOpen(false);
    logout();
    navigate('/');
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fbf9f5]/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-[#fbf9f5]/85 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            <Wind className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <span className="font-headline font-bold text-lg md:text-xl text-primary tracking-tight block leading-tight">
              A Place to Breathe
            </span>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium block">
              Digital Sanctuary
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center gap-5">

          <Link
            to="/explore"
            className={`text-xs font-semibold transition-colors relative py-1 ${
              location.pathname === '/explore' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Explore
            {location.pathname === '/explore' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in fade-in" />}
          </Link>

          <Link
            to="/therapists"
            className={`text-xs font-semibold transition-colors relative py-1 ${
              location.pathname === '/therapists' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Therapists
            {location.pathname === '/therapists' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in fade-in" />}
          </Link>

          {/* Activities dropdown */}
          <DropdownMenu
            label="Activities"
            isActive={isActivitiesActive}
            items={[
              { name: 'Workshops', path: '/workshops' },
              { name: 'Community', path: '/community' },
            ]}
          />

          {/* Resources dropdown */}
          <DropdownMenu
            label="Resources"
            isActive={isResourcesActive}
            items={[
              { name: 'Journal', path: '/journal' },
              { name: 'Blog',    path: '/blog' },
              { name: 'About',   path: '/about' },
            ]}
          />

          {/* Dashboard dropdown — only when logged OUT (logged in: these live in profile dropdown) */}
          {!user && (
            <DropdownMenu
              label="Dashboard"
              isActive={isDashboardActive}
              items={[
                { name: 'My Bookings', path: '/my-bookings' },
                { name: 'Progress',    path: '/progress' },
              ]}
            />
          )}

          {/* Auth: Login link (logged out) — hidden when logged in */}
          {!user && (
            <Link
              to="/login"
              className={`text-xs font-semibold transition-colors relative py-1 ${
                location.pathname === '/login' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Login / Sign Up
              {location.pathname === '/login' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in fade-in" />}
            </Link>
          )}
        </div>

        {/* Tablet / Compact Nav for medium screens */}
        <div className="hidden md:flex xl:hidden items-center gap-3">
          <Link
            to="/explore"
            className={`text-xs font-semibold ${location.pathname === '/explore' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
          >
            Explore
          </Link>
          <Link
            to="/therapists"
            className={`text-xs font-semibold ${location.pathname === '/therapists' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
          >
            Therapists
          </Link>
          <DropdownMenu
            label="Activities"
            isActive={isActivitiesActive}
            items={[
              { name: 'Workshops', path: '/workshops' },
              { name: 'Community', path: '/community' },
            ]}
          />
          {!user && (
            <Link
              to="/login"
              className={`text-xs font-semibold ${location.pathname === '/login' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
            >
              Login
            </Link>
          )}
        </div>

        {/* Right side: Avatar OR Login + Crisis */}
        <div className="hidden sm:flex items-center gap-3">

          {user ? (
            /* ── LOGGED IN: Avatar dropdown ── */
            <UserProfileDropdown user={user} />
          ) : (
            /* ── LOGGED OUT: Login link (sm–lg only; xl has it in the inline nav above) */
            <Link
              to="/login"
              className="xl:hidden text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors"
            >
              Login / Sign Up
            </Link>
          )}

          {/* Crisis Support — visually untouched */}
          <Link
            to="/crisis"
            className="flex items-center gap-1.5 text-coral border-2 border-coral px-4 py-1.5 rounded-full font-bold text-xs hover:bg-coral hover:text-white transition-all shadow-sm duration-300"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Crisis Support</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-primary hover:bg-surface-container rounded-xl transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile / Tablet Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-[#fbf9f5] border-b border-surface-container-high px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200 max-h-[80vh] overflow-y-auto">
          {/* User greeting when logged in */}
          {user && (
            <div className="flex items-center gap-3 mb-4 px-3 py-2 bg-surface-container rounded-xl">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                {user.initials}
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface">{user.name}</p>
                <p className="text-[10px] text-on-surface-variant">Logged in</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 mb-4">
            {mobileLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-surface-container-high flex flex-col gap-2">
            {/* Sign Out button — only when logged in */}
            {user && (
              <button
                onClick={handleMobileSignOut}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-outline-variant text-on-surface-variant font-bold text-xs hover:bg-error/5 hover:text-error hover:border-error/20 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            )}
            <Link
              to="/crisis"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-coral text-white font-bold text-xs shadow"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Crisis Support Center (988)</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
