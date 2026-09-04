import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ScrollToTop } from './components/ScrollToTop';

// Multi-Page Architecture Components
import { HomePage } from './pages/HomePage';
import { WeddingsPage } from './pages/WeddingsPage';
import { EighteenthBirthdayPage } from './pages/EighteenthBirthdayPage';
import { BaptismCommunionPage } from './pages/BaptismCommunionPage';
import { FuneralPage } from './pages/FuneralPage';
import { FamilyEventsPage } from './pages/FamilyEventsPage';
import { CorporateEventsPage } from './pages/CorporateEventsPage';
import { VenuesPage } from './pages/VenuesPage';
import { MenuPage } from './pages/MenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamically support GitHub Pages base /piwnicapodzaba or root /
  const basename = window.location.pathname.startsWith('/piwnicapodzaba') 
    ? '/piwnicapodzaba' 
    : '';

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-stone-50 text-gray-900 font-sans antialiased selection:bg-amber-500 selection:text-white">
        {/* Navigation Bar */}
        <Navbar isScrolled={isScrolled} />

        {/* Multi-Page Route Views */}
        <main className="flex-1">
          <Routes>
            {/* Strona Główna (Hub & Katalog Uroczystości) */}
            <Route path="/" element={<HomePage />} />

            {/* Dedykowane Podstrony Uroczystości z URL */}
            <Route path="/wesela" element={<WeddingsPage />} />
            <Route path="/18-urodziny" element={<EighteenthBirthdayPage />} />
            <Route path="/chrzciny-komunie" element={<BaptismCommunionPage />} />
            <Route path="/stypy" element={<FuneralPage />} />
            <Route path="/uroczystosci-rodzinne" element={<FamilyEventsPage />} />
            <Route path="/imprezy-firmowe" element={<CorporateEventsPage />} />

            {/* Podstrony Tematyczne */}
            <Route path="/sale" element={<VenuesPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/o-nas" element={<AboutPage />} />
            <Route path="/kontakt" element={<ContactPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer & Quick Actions */}
        <Footer />
        <FloatingActions />
      </div>
    </BrowserRouter>
  );
}
