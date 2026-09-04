import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GallerySection } from '../components/GallerySection';
import { Camera, Facebook, ArrowRight, Phone } from 'lucide-react';
import { FACEBOOK_URL, CONTACT_PHONE_FORMATTED } from '../data';
import { SeoHead } from '../components/SeoHead';

export function GalleryPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'hit-fit' | 'piwnica'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <div className="bg-stone-50 text-gray-900 min-h-screen pt-24 pb-20">
      <SeoHead
        title="Galeria Zdjęć Sal Bankietowych Lubin | Piwnica pod Żabą & Hit Fit"
        description="Galeria zdjęć sal bankietowych w Lubinie. Zobacz dekoracje weselne, aranżacje stołów, oświetlenie imprezowe, strefy taneczne i kąciki wypoczynkowe."
        keywords={['zdjęcia sala weselna Lubin', 'galeria Piwnica pod Żabą', 'galeria Hit Fit Lubin', 'wystrój stołów Lubin']}
        canonicalPath="/galeria"
      />
      {/* Header Banner */}
      <section className="bg-stone-950 text-white py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
            <Camera size={14} className="text-amber-400" /> Galeria Wnętrz i Stołów
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Zdjęcia z Naszych Lokali w Lubinie
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Zobacz aranżacje stołów, oświetlenie, dekoracje oraz atmosferę przyjęć w Sali Bankietowej Hit Fit i klimatycznej Piwnicy pod Żabą.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
            >
              <Facebook size={16} /> Zobacz Więcej Zdjęć na Facebooku
            </a>
            <a
              href="tel:661637770"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 transition-all"
            >
              <Phone size={16} /> Zadzwoń: {CONTACT_PHONE_FORMATTED}
            </a>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <GallerySection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedImageIndex={selectedImageIndex}
        setSelectedImageIndex={setSelectedImageIndex}
      />

      {/* Footer Navigation */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 text-center space-y-6">
        <h3 className="text-2xl font-serif font-bold text-stone-900">
          Podoba Ci się Wystrój?
        </h3>
        <p className="text-stone-600 text-sm max-w-xl mx-auto">
          Umów się na bezpłatne spotkanie w lokalu, aby obejrzeć sale na żywo i ustalić szczegóły dekoracji.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/sale"
            className="px-8 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            Poznaj Szczegóły Sal →
          </Link>
          <Link
            to="/kontakt"
            className="px-8 py-3.5 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            Zarezerwuj Termin
          </Link>
        </div>
      </section>
    </div>
  );
}
