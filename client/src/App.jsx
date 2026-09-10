import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import AdminDashboard from './pages/AdminDashboard';

// Additional Specialized Stitch Screens
import DailyRecommendations from './pages/DailyRecommendations';
import GuidedSupport from './pages/GuidedSupport';
import MoodBoostFacts from './pages/MoodBoostFacts';
import HowCanWeHelp from './pages/HowCanWeHelp';
import ConsultationSettings from './pages/ConsultationSettings';
import JoinSanctuary from './pages/JoinSanctuary';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#1b1c1a]">
        {/* Top Crisis Notification Ribbon */}
        <CrisisBanner />

        {/* Global Glassmorphic Navigation */}
        <Navbar />

        {/* Main Content Canvas */}
        <main className="flex-grow pt-20 md:pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/therapists" element={<Therapists />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/community" element={<Community />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/crisis" element={<CrisisSupport />} />
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Specialized Stitch Pages */}
            <Route path="/daily-recommendations" element={<DailyRecommendations />} />
            <Route path="/guided-support" element={<GuidedSupport />} />
            <Route path="/mood-boost" element={<MoodBoostFacts />} />
            <Route path="/help" element={<HowCanWeHelp />} />
            <Route path="/consultation" element={<ConsultationSettings />} />
            <Route path="/settings" element={<ConsultationSettings />} />
            <Route path="/join" element={<JoinSanctuary />} />
            <Route path="/login" element={<JoinSanctuary />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Sanctuary Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
