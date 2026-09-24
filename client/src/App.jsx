import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CrisisBanner from './components/CrisisBanner';

// Main Pages
import Home from './pages/Home';
import Explore from './pages/Explore';
import Therapists from './pages/Therapists';
import MyBookings from './pages/MyBookings';
import Workshops from './pages/Workshops';
import Journal from './pages/Journal';
import Community from './pages/Community';
import Blog from './pages/Blog';
import Progress from './pages/Progress';
import About from './pages/About';
import Privacy from './pages/Privacy';
import CrisisSupport from './pages/CrisisSupport';

// Admin Pages (separate protected route — no Navbar/Footer)
import AdminDashboard from './pages/AdminDashboard';
import ManageBookings from './pages/ManageBookings';
import ManageContentEvents from './pages/ManageContentEvents';
import ManageSubmissions from './pages/ManageSubmissions';
import ManageTherapists from './pages/ManageTherapists';

// Scroll position memory
import ScrollMemory from './components/ScrollMemory';

// Additional Specialized Stitch Screens
import DailyRecommendations from './pages/DailyRecommendations';
import GuidedSupport from './pages/GuidedSupport';
import GuidedSupportGuest from './pages/GuidedSupportGuest';
import MoodBoostFacts from './pages/MoodBoostFacts';
import HowCanWeHelp from './pages/HowCanWeHelp';
import ConsultationSettings from './pages/ConsultationSettings';
import JoinSanctuary from './pages/JoinSanctuary';
import ReadyToConnect from './pages/ReadyToConnect';
import SaveYourProgress from './pages/SaveYourProgress';
import SereneSanctuary from './pages/SereneSanctuary';
import ShareYourThoughts from './pages/ShareYourThoughts';
import StoriesOfHope from './pages/StoriesOfHope';
import CommunityHub from './pages/CommunityHub';

// Admin layout wrapper — renders children WITHOUT the site Navbar/Footer
function AdminLayout({ children }) {
  return <>{children}</>;
}

// Site layout wrapper — renders children WITH Navbar, CrisisBanner, Footer
function SiteLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#1b1c1a]">
      {/* Remembers and restores scroll position per route — no visual output */}
      <ScrollMemory />
      <CrisisBanner />
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
        {/* ── Admin Routes (no Navbar / Footer) ────────────────────────── */}
        <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/admin/bookings" element={<AdminLayout><ManageBookings /></AdminLayout>} />
        <Route path="/admin/content" element={<AdminLayout><ManageContentEvents /></AdminLayout>} />
        <Route path="/admin/submissions" element={<AdminLayout><ManageSubmissions /></AdminLayout>} />
        <Route path="/admin/therapists" element={<AdminLayout><ManageTherapists /></AdminLayout>} />

        {/* ── Public Site Routes (with Navbar / Footer) ─────────────────── */}
        <Route path="/" element={<SiteLayout><Home /></SiteLayout>} />
        <Route path="/explore" element={<SiteLayout><Explore /></SiteLayout>} />
        <Route path="/therapists" element={<SiteLayout><Therapists /></SiteLayout>} />
        <Route path="/my-bookings" element={<SiteLayout><MyBookings /></SiteLayout>} />
        <Route path="/workshops" element={<SiteLayout><Workshops /></SiteLayout>} />
        <Route path="/journal" element={<SiteLayout><Journal /></SiteLayout>} />
        <Route path="/community" element={<SiteLayout><Community /></SiteLayout>} />
        <Route path="/blog" element={<SiteLayout><Blog /></SiteLayout>} />
        <Route path="/progress" element={<SiteLayout><Progress /></SiteLayout>} />
        <Route path="/about" element={<SiteLayout><About /></SiteLayout>} />
        <Route path="/privacy" element={<SiteLayout><Privacy /></SiteLayout>} />
        <Route path="/crisis" element={<SiteLayout><CrisisSupport /></SiteLayout>} />

        {/* Auth */}
        <Route path="/join"  element={<SiteLayout><JoinSanctuary /></SiteLayout>} />
        <Route path="/login" element={<SiteLayout><JoinSanctuary /></SiteLayout>} />

        {/* Specialized Stitch Screens */}
        <Route path="/daily-recommendations" element={<SiteLayout><DailyRecommendations /></SiteLayout>} />
        <Route path="/guided-support"        element={<SiteLayout><GuidedSupport /></SiteLayout>} />
        <Route path="/guided-support-guest"  element={<SiteLayout><GuidedSupportGuest /></SiteLayout>} />
        <Route path="/mood-boost"            element={<SiteLayout><MoodBoostFacts /></SiteLayout>} />
        <Route path="/help"                  element={<SiteLayout><HowCanWeHelp /></SiteLayout>} />
        <Route path="/consultation"          element={<SiteLayout><ConsultationSettings /></SiteLayout>} />
        <Route path="/settings"              element={<SiteLayout><ConsultationSettings /></SiteLayout>} />
        <Route path="/ready-to-connect"      element={<SiteLayout><ReadyToConnect /></SiteLayout>} />
        <Route path="/save-progress"         element={<SiteLayout><SaveYourProgress /></SiteLayout>} />
        <Route path="/sanctuary"             element={<SiteLayout><SereneSanctuary /></SiteLayout>} />
        <Route path="/share-thoughts"        element={<SiteLayout><ShareYourThoughts /></SiteLayout>} />
        <Route path="/stories"               element={<SiteLayout><StoriesOfHope /></SiteLayout>} />
        <Route path="/community-hub"         element={<SiteLayout><CommunityHub /></SiteLayout>} />

        {/* Fallback */}
        <Route path="*" element={<SiteLayout><Home /></SiteLayout>} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
