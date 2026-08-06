import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, MapPin, Facebook, Star, ChevronRight, Menu, X, ArrowRight,
  Users, Utensils, Car, TreePine, Flame, Sparkles, ChevronLeft, Maximize2, Filter, Quote, Video, Play, Film,
  ChefHat, Wine, Coffee, GlassWater, CheckCircle2, Search, HeartHandshake, Info
} from 'lucide-react';
import { 
  HERO_BG_IMAGE, FAVICON_URL, VENUES, HIT_FIT_IMAGES, PIWNICA_IMAGES, 
  FACEBOOK_URL, FACEBOOK_REVIEWS_URL, FACEBOOK_REVIEWS,
  DRONE_VIDEO_URL, PREPARATION_VIDEO_URL, PIWNICA_VIDEO_URL,
  MENU_WELCOME_TITLE, MENU_WELCOME_TEXT, MENU_WELCOME_SUBTEXT, MENU_CATEGORIES
} from './data';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState<'all' | 'hit-fit' | 'piwnica'>('all');
  const [visiblePhotosCount, setVisiblePhotosCount] = useState(16);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const [activeMenuCategory, setActiveMenuCategory] = useState<string>('obiad');
  const [menuSearchQuery, setMenuSearchQuery] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtered gallery items
  const galleryItems = (() => {
    if (activeGalleryTab === 'hit-fit') {
      return HIT_FIT_IMAGES.map((src) => ({ src, venue: 'Hit Fit' }));
    }
    if (activeGalleryTab === 'piwnica') {
      return PIWNICA_IMAGES.map((src) => ({ src, venue: 'Piwnica pod Żabą' }));
    }
    // All photos
    return [
      ...HIT_FIT_IMAGES.map((src) => ({ src, venue: 'Hit Fit' })),
      ...PIWNICA_IMAGES.map((src) => ({ src, venue: 'Piwnica pod Żabą' }))
    ];
  })();

  const currentVisiblePhotos = galleryItems.slice(0, visiblePhotosCount);

  // Keyboard controls for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, galleryItems.length]);

  const navLinks = [
    { name: 'O nas', href: '#o-nas' },
    { name: 'Nasze Lokale', href: '#lokale' },
    { name: 'Oferta i Menu', href: '#oferta' },
    { name: 'Prezentacje Wideo', href: '#wideo' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-off-white text-gray-900 font-sans antialiased">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className={`font-serif text-lg font-bold tracking-tight leading-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Piwnica pod Żabą <span className="text-gold">&</span> Hit Fit
              </span>
              <span className={`text-[10px] tracking-widest uppercase mt-1 ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>
                Sale Bankietowe Lubin
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`font-medium text-sm tracking-wide transition-colors hover:text-gold ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={FACEBOOK_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full border transition-all ${isScrolled ? 'border-gray-200 text-blue-600 hover:bg-blue-50' : 'border-white/30 text-white hover:bg-white/10'}`}
              title="Odwiedź nasz Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="#kontakt" 
              className="bg-gold hover:bg-gold/90 text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
            >
              Rezerwacja
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white shadow-xl border-b border-gray-100 md:hidden overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-lg font-serif font-semibold text-gray-800 hover:text-gold transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <hr className="border-gray-100 my-2" />
                <div className="flex items-center justify-between">
                  <a 
                    href={FACEBOOK_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 font-medium text-sm"
                  >
                    <Facebook size={18} /> Facebook
                  </a>
                  <a 
                    href="#kontakt" 
                    className="bg-gold text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Skontaktuj się
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_BG_IMAGE} 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white my-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold-light text-xs uppercase tracking-widest mb-6 font-medium">
              <Sparkles size={14} className="text-gold" /> Dwa Wyjątkowe Lokale w Lubinie
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight drop-shadow-xl">
              Sale Bankietowe <br />
              <span className="text-gold-light italic">Piwnica pod Żabą & Hit Fit</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed drop-shadow-md">
              Miejsca stwożone z myślą o Twoich najważniejszych chwilach. Wesela, komunie, chrzciny, urodziny oraz imprezy firmowe w eleganckim wydaniu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#lokale" 
                className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-xl flex items-center justify-center gap-3 text-sm uppercase tracking-wider"
              >
                Poznaj Nasze Lokale <ArrowRight size={18} />
              </a>
              <a 
                href="#galeria" 
                className="w-full sm:w-auto bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
              >
                Zobacz Galerie Zdjęć
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hidden sm:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section id="o-nas" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
              Organizujemy Niezapomniane Przyjęcia
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-gray-900">
              Dwie Unikalne Sale Bankietowe na Każdą Okazję
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Piwnica Pod Żabą Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-off-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gold font-bold">Lokal #1</span>
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mt-1">Piwnica pod Żabą</h3>
                  </div>
                  <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1.5 rounded-full">
                    Niezwykły Klimat
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed font-light mb-6">
                  Piwnica pod Żabą słynie z unikalnego charakteru, ciepłej atmosfery i wyśmienitej tradycyjnej kuchni. Dbam o estetykę, domową oprawę kulinarną oraz dopracowany w każdym detalu wystrój.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Utensils className="text-gold shrink-0" size={18} />
                    <span>Bogate i wykwintne menu przyjęć</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Sparkles className="text-gold shrink-0" size={18} />
                    <span>Eleganckie aranżacje stołów i wnętrza</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <MapPin className="text-gold shrink-0" size={18} />
                    <span>Lubin, ul. Orla 39a</span>
                  </div>
                </div>
              </div>

              <a 
                href="#piwnica-pod-zaba" 
                className="inline-flex items-center justify-between w-full bg-white hover:bg-gold hover:text-white text-gray-900 border border-gray-200 rounded-2xl px-6 py-4 font-semibold text-sm transition-all group"
              >
                <span>Szczegóły Piwnicy pod Żabą</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Hit Fit Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-off-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-emerald-600 font-bold">Lokal #2</span>
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mt-1">Hit Fit</h3>
                  </div>
                  <span className="bg-emerald-100 text-emerald-900 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <Users size={14} /> Dla 90 osób
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed font-light mb-6">
                  Nowoczesna sala bankietowa przystosowana do przyjęć do 90 osób. Posiada przestronny taras z dużym grillem oraz bezpłatny parking dla wszystkich gości.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <TreePine className="text-emerald-600 shrink-0" size={18} />
                    <span>Przestronny taras & duży strefowy grill</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Car className="text-emerald-600 shrink-0" size={18} />
                    <span>Bezpłatny wygodny parking dla gości</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Utensils className="text-emerald-600 shrink-0" size={18} />
                    <span>Wyśmienita kuchnia & profesjonalna obsługa</span>
                  </div>
                </div>
              </div>

              <a 
                href="#hit-fit" 
                className="inline-flex items-center justify-between w-full bg-white hover:bg-emerald-600 hover:text-white text-gray-900 border border-gray-200 rounded-2xl px-6 py-4 font-semibold text-sm transition-all group"
              >
                <span>Szczegóły Sali Hit Fit</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Venues Detail Section */}
      <section id="lokale" className="py-20 md:py-28 bg-gray-50 border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-24">
          
          {/* VENUE 1: Hit Fit */}
          <div id="hit-fit" className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 overflow-hidden scroll-mt-24">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-xs tracking-wider uppercase">
                  <Users size={14} /> Sala do 90 osób
                </div>
                
                <h3 className="text-4xl font-serif font-bold text-gray-900">
                  Sala Bankietowa <span className="text-emerald-600">Hit Fit</span>
                </h3>
                
                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  Zapraszamy do naszej sali bankietowej dla 90 osób! Oferujemy wyśmienitą kuchnię, eleganckie wnętrza oraz przestronny taras, duży grill i bezpłatny parking. Zadbamy o pyszne menu i wyjątkową atmosferę.
                </p>

                <div className="pt-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-3">
                    Organizujemy:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {VENUES[0].events.map((event) => (
                      <span 
                        key={event}
                        className="bg-emerald-50/80 text-emerald-900 border border-emerald-200/60 px-3.5 py-1.5 rounded-full text-xs font-medium"
                      >
                        {event}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2.5">
                    <TreePine className="text-emerald-600" size={18} />
                    <span>Przestronny taras</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Flame className="text-emerald-600" size={18} />
                    <span>Duży grill plenerowy</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Car className="text-emerald-600" size={18} />
                    <span>Bezpłatny parking</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Utensils className="text-emerald-600" size={18} />
                    <span>Wyśmienita kuchnia</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => {
                      setActiveGalleryTab('hit-fit');
                      const el = document.getElementById('galeria');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-full text-sm transition-all shadow-md"
                  >
                    <span>Zobacz Galerię Hit Fit</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-2 gap-3">
                {HIT_FIT_IMAGES.slice(0, 4).map((img, idx) => (
                  <div 
                    key={idx}
                    onClick={() => {
                      setActiveGalleryTab('hit-fit');
                      const globalIdx = galleryItems.findIndex(item => item.src === img);
                      setSelectedImageIndex(globalIdx >= 0 ? globalIdx : 0);
                    }}
                    className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm"
                  >
                    <img 
                      src={img} 
                      alt={`Hit Fit ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <Maximize2 size={22} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VENUE 2: Piwnica pod Żabą */}
          <div id="piwnica-pod-zaba" className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 overflow-hidden scroll-mt-24">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 grid grid-cols-2 gap-3">
                {PIWNICA_IMAGES.slice(0, 4).map((img, idx) => (
                  <div 
                    key={idx}
                    onClick={() => {
                      setActiveGalleryTab('piwnica');
                      const globalIdx = galleryItems.findIndex(item => item.src === img);
                      setSelectedImageIndex(globalIdx >= 0 ? globalIdx : 0);
                    }}
                    className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm"
                  >
                    <img 
                      src={img} 
                      alt={`Piwnica pod Żabą ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <Maximize2 size={22} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 font-semibold text-xs tracking-wider uppercase">
                  <Sparkles size={14} className="text-gold" /> Tradycja & Elegancja
                </div>

                <h3 className="text-4xl font-serif font-bold text-gray-900">
                  Sala Bankietowa <span className="text-gold">Piwnica pod Żabą</span>
                </h3>

                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  Piwnica pod Żabą to miejsce o niezwykłym uroku i niepowtarzalnym klimacie. Specjalizujemy się w przygotowywaniu uroczystości rodzinnych oraz jubileuszy, dbając o pyszne menu, elegancką oprawę i niezapomnianą atmosferę.
                </p>

                <div className="pt-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-3">
                    Organizujemy:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {VENUES[1].events.map((event) => (
                      <span 
                        key={event}
                        className="bg-amber-50/80 text-amber-900 border border-amber-200/60 px-3.5 py-1.5 rounded-full text-xs font-medium"
                      >
                        {event}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => {
                      setActiveGalleryTab('piwnica');
                      const el = document.getElementById('galeria');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white font-medium px-6 py-3 rounded-full text-sm transition-all shadow-md"
                  >
                    <span>Zobacz Pełną Galerię (64 Zdjęcia)</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* Piwnica Pod Żabą Video Player */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest mb-3">
                    <Video size={16} /> Zobacz wideo z lokalu Piwnica pod Żabą
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-md bg-black border border-amber-200/50">
                    <video 
                      src={PIWNICA_VIDEO_URL} 
                      controls 
                      playsInline
                      preload="metadata"
                      className="w-full h-auto max-h-[400px] object-cover"
                      poster={PIWNICA_IMAGES[0]}
                    >
                      Twoja przeglądarka nie obsługuje odtwarzacza wideo.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Menu & Offer Section */}
      <section id="oferta" className="py-20 md:py-28 bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-gold-dark border border-gold/30 text-xs font-bold uppercase tracking-widest">
              <ChefHat size={16} /> Bogata Oferta Bankietowa
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Oferta i Menu okolicznościowe
            </h2>
            <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
              Poznaj nasze propozycje dań obiadowych, przekąsek, wykwintnych słodkości oraz gorących kolacji dostępnych w sali <strong className="font-semibold text-gray-900">Hit Fit</strong> i <strong className="font-semibold text-gray-900">Piwnica pod Żabą</strong>.
            </p>
          </div>

          {/* Welcome Card requested by User */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-700 via-gold-dark to-amber-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 translate-x-12 -translate-y-12 opacity-10 pointer-events-none">
              <ChefHat size={320} />
            </div>

            <div className="relative z-10 max-w-4xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-100 border border-white/20">
                <HeartHandshake size={14} /> Wiadomość od Właścicieli
              </div>

              <h3 className="text-2xl md:text-4xl font-serif font-bold tracking-tight">
                {MENU_WELCOME_TITLE}
              </h3>

              <p className="text-lg md:text-xl font-serif leading-relaxed text-amber-50 italic">
                "{MENU_WELCOME_TEXT}"
              </p>

              <p className="text-sm md:text-base text-amber-100 font-light">
                {MENU_WELCOME_SUBTEXT}
              </p>

              <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 text-xs sm:text-sm text-amber-100">
                <span className="font-semibold tracking-wide">
                  Dla Gości sali <strong className="text-white">Hit Fit</strong> oraz <strong className="text-white">Piwnica pod Żabą</strong>
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full font-medium text-white">
                  Możliwość pełnej personalizacji menu
                </span>
              </div>
            </div>
          </motion.div>

          {/* Key Organizational Perks */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100/80 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-gold flex items-center justify-center shrink-0 border border-amber-200/50">
                <Coffee size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900 text-base">Napoje bez ograniczeń</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Kawa, herbata, woda i soki serwowane bez limitu czasowego przez cały czas trwania przyjęcia.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100/80 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-gold flex items-center justify-center shrink-0 border border-amber-200/50">
                <Wine size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900 text-base">Własny alkohol (brak korkowego)</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Możliwość przyniesienia własnego alkoholu &gt;18% bez opłat korkowego przy zakupie 10x 1L Coca-Coli w lokalu.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100/80 flex gap-4 items-start sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-gold flex items-center justify-center shrink-0 border border-amber-200/50">
                <Sparkles size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900 text-base">Słodkości & Desery</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Możliwość zamówienia domowych wypieków (sernik, szarlotka, zielony mech, Raffaello) podawanych na ciepło z lodami.
                </p>
              </div>
            </div>
          </div>

          {/* Category Selector Tabs & Search Filter */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-gray-200 pb-4">
              
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {MENU_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveMenuCategory(cat.id);
                      setMenuSearchQuery('');
                    }}
                    className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
                      activeMenuCategory === cat.id && !menuSearchQuery
                        ? 'bg-gold text-white shadow-md font-bold'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span>{cat.title}</span>
                    {cat.badge && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                        activeMenuCategory === cat.id && !menuSearchQuery
                          ? 'bg-white/20 text-white'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {cat.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Szukaj dania (np. schab, barszcz)..."
                  value={menuSearchQuery}
                  onChange={(e) => setMenuSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-white"
                />
                {menuSearchQuery && (
                  <button 
                    onClick={() => setMenuSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded"
                  >
                    Wyczyść
                  </button>
                )}
              </div>
            </div>

            {/* Menu Content Display */}
            {menuSearchQuery ? (
              /* Search Mode */
              <div className="space-y-6">
                <div className="text-sm text-gray-600">
                  Wyniki wyszukiwania dla: <strong className="text-gray-900">"{menuSearchQuery}"</strong>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {MENU_CATEGORIES.map((cat) => {
                    const matchingDirectItems = (cat.items || []).filter(item => 
                      item.toLowerCase().includes(menuSearchQuery.toLowerCase())
                    );

                    const matchingSubsections = (cat.subsections || []).map(sub => ({
                      ...sub,
                      items: sub.items.filter(item => item.toLowerCase().includes(menuSearchQuery.toLowerCase()))
                    })).filter(sub => sub.items.length > 0);

                    if (matchingDirectItems.length === 0 && matchingSubsections.length === 0) return null;

                    return (
                      <div key={cat.id} className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 space-y-4">
                        <div className="flex items-center justify-between border-b pb-3 border-gray-100">
                          <h4 className="font-serif font-bold text-gray-900 text-lg">{cat.title}</h4>
                          <span className="text-xs bg-amber-100 text-amber-800 font-semibold px-2.5 py-1 rounded-full">
                            {cat.badge}
                          </span>
                        </div>

                        {matchingDirectItems.length > 0 && (
                          <ul className="space-y-2">
                            {matchingDirectItems.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
                                <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {matchingSubsections.map((sub, idx) => (
                          <div key={idx} className="space-y-2 pt-2">
                            <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                              {sub.subtitle}
                            </div>
                            <ul className="space-y-2">
                              {sub.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
                                  <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Tab Category Display */
              <div>
                {MENU_CATEGORIES.filter(cat => cat.id === activeMenuCategory).map((category) => (
                  <motion.div 
                    key={category.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {category.note && (
                      <div className="bg-amber-50/80 border border-amber-200/70 rounded-2xl p-4 flex items-center gap-3 text-amber-900 text-sm">
                        <Info size={18} className="text-gold shrink-0" />
                        <span>{category.note}</span>
                      </div>
                    )}

                    {/* Subsections (e.g. Obiad, Zimne Przekąski, Premium, Napoje) */}
                    {category.subsections && (
                      <div className="grid md:grid-cols-2 gap-6">
                        {category.subsections.map((sub, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 hover:border-amber-200/80 transition-all flex flex-col justify-between"
                          >
                            <div className="space-y-4">
                              <div className="border-b border-gray-100 pb-3 flex items-center justify-between">
                                <h4 className="font-serif font-bold text-xl text-gray-900">
                                  {sub.subtitle}
                                </h4>
                                {sub.note && (
                                  <span className="text-xs bg-amber-100 text-amber-800 font-semibold px-2.5 py-1 rounded-full">
                                    {sub.note}
                                  </span>
                                )}
                              </div>

                              <ul className="space-y-2.5">
                                {sub.items.map((item, i) => (
                                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-1" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Direct Items Grid (e.g. Gorące Kolacje 14 propozycji) */}
                    {category.items && (
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.items.map((item, idx) => (
                          <div 
                            key={idx}
                            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-gold/50 transition-all flex items-start gap-3"
                          >
                            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </div>
                            <p className="text-sm font-medium text-gray-800 leading-snug">
                              {item.replace(/^\d+\.\s*/, '')}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Video Showcase Section */}
      <section id="wideo" className="py-20 md:py-28 bg-gray-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-20">
          
          {/* Drone Video */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/20 text-gold-light border border-gold/30 text-xs font-semibold uppercase tracking-wider">
                <Film size={14} /> Widok z Góry
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                Nasze Lokale z Lotu Ptaka
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                Obejrzyj wyjątkowe ujęcia z drona prezentujące przestrzeń wokół naszych sal bankietowych w Lubinie. Zobacz dogodny dojazd, duży bezpłatny parking oraz otoczenie.
              </p>
              <div className="flex items-center gap-2 text-xs text-gold/90 font-medium">
                <Video size={14} /> Nagranie wideo z drona
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black">
                <video 
                  src={DRONE_VIDEO_URL} 
                  controls 
                  playsInline
                  preload="metadata"
                  className="w-full h-auto max-h-[500px] object-cover"
                >
                  Twoja przeglądarka nie obsługuje wideo.
                </video>
              </div>
            </div>
          </motion.div>

          <hr className="border-white/10" />

          {/* Preparation Process Video */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black">
                <video 
                  src={PREPARATION_VIDEO_URL} 
                  controls 
                  playsInline
                  preload="metadata"
                  className="w-full h-auto max-h-[500px] object-cover"
                >
                  Twoja przeglądarka nie obsługuje wideo.
                </video>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider">
                <Sparkles size={14} /> Kulisy Przygotowań
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                Proces Przygotowania do Przyjęcia
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                Zobacz, jak krok po kroku przygotowujemy salę na przyjęcie okolicznościowe. Dbamy o najmniejszy detal — od aranżacji stołów i dekoracji, po perfekcyjne serwowanie potraw.
              </p>
              <div className="flex items-center gap-2 text-xs text-amber-200/90 font-medium">
                <Utensils size={14} /> Dbałość o każdy szczegół Twojej uroczystości
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
              Fotorelacja z naszych uroczystości
            </span>
            <h2 className="text-4xl md:text-5xl font-serif">Galeria Zdjęć</h2>
            <p className="text-gray-500 text-sm mt-3 font-light">
              Przeglądaj zdjęcia naszych dwóch lokali bankietowych w Lubinie.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-12">
            <button
              onClick={() => {
                setActiveGalleryTab('all');
                setVisiblePhotosCount(16);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeGalleryTab === 'all'
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Wszystkie ({HIT_FIT_IMAGES.length + PIWNICA_IMAGES.length})
            </button>

            <button
              onClick={() => {
                setActiveGalleryTab('hit-fit');
                setVisiblePhotosCount(16);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeGalleryTab === 'hit-fit'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
              }`}
            >
              <span>Hit Fit</span>
              <span className="opacity-70 text-[10px]">({HIT_FIT_IMAGES.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveGalleryTab('piwnica');
                setVisiblePhotosCount(16);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeGalleryTab === 'piwnica'
                  ? 'bg-gold text-white shadow-md'
                  : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
              }`}
            >
              <span>Piwnica pod Żabą</span>
              <span className="opacity-70 text-[10px]">({PIWNICA_IMAGES.length})</span>
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {currentVisiblePhotos.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImageIndex(idx)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all"
              >
                <img 
                  src={item.src} 
                  alt={`Zdjęcie ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white">
                  <div className="self-end">
                    <Maximize2 size={18} className="drop-shadow" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md self-start">
                    {item.venue}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {visiblePhotosCount < galleryItems.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisiblePhotosCount((prev) => prev + 16)}
                className="bg-gray-900 hover:bg-gold text-white px-8 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                Pokaż Więcej Zdjęć ({galleryItems.length - visiblePhotosCount} pozostało)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8 text-white select-none"
          >
            {/* Lightbox Header */}
            <div className="flex justify-between items-center z-10">
              <div className="flex items-center gap-3">
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium">
                  {galleryItems[selectedImageIndex]?.venue}
                </span>
                <span className="text-xs text-gray-400">
                  {selectedImageIndex + 1} / {galleryItems.length}
                </span>
              </div>
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Zamknij"
              >
                <X size={22} />
              </button>
            </div>

            {/* Main Lightbox Image & Navigation */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <button
                onClick={() => setSelectedImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1))}
                className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition-all backdrop-blur-sm"
                aria-label="Poprzednie zdjęcie"
              >
                <ChevronLeft size={28} />
              </button>

              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                src={galleryItems[selectedImageIndex]?.src}
                alt="Enlarged gallery view"
                className="max-h-[82vh] max-w-[92vw] object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />

              <button
                onClick={() => setSelectedImageIndex((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0))}
                className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition-all backdrop-blur-sm"
                aria-label="Następne zdjęcie"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Lightbox Footer */}
            <div className="text-center text-xs text-gray-400 z-10">
              Użyj strzałek na klawiaturze lub przycisków, aby nawigować
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reviews CTA & Cards Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 via-gold to-yellow-600 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
              <Facebook size={14} className="text-blue-300" /> Autentyczne Opinie
            </div>
            <h3 className="text-3xl md:text-5xl font-serif mb-4">Opinie naszych gości z Facebooka</h3>
            <p className="text-lg opacity-95 max-w-2xl mx-auto font-light">
              Przeczytaj autentyczne recenzje naszych Klientów z profilu Facebook i zobacz, dlaczego warto zorganizować przyjęcie właśnie u nas.
            </p>
          </motion.div>

          {/* Facebook Reviews Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {FACEBOOK_REVIEWS.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl text-left hover:bg-white/15 transition-all"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold text-amber-200 tracking-wide uppercase">
                      Opinia Klienta
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-white/90 bg-white/10 px-2.5 py-1 rounded-full font-medium">
                      <Facebook size={12} className="text-blue-300" /> Facebook
                    </div>
                  </div>
                  
                  <Quote size={28} className="text-white/30 mb-3" />
                  
                  <p className="text-white text-base sm:text-lg font-serif leading-relaxed italic mb-6">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/90">
                  <span className="font-semibold tracking-wide">{review.author}</span>
                  <span className="text-amber-200 font-medium">Poleca na FB</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href={FACEBOOK_REVIEWS_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-4 rounded-full font-bold shadow-2xl hover:bg-gray-100 transition-all text-sm uppercase tracking-wider group"
            >
              <span>Zobacz Wszystkie Opinie na Facebooku</span>
              <Facebook size={18} className="text-blue-600 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="kontakt" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
                Rezerwacje & Informacje
              </span>
              <h2 className="text-4xl md:text-5xl font-serif mb-10 text-gray-900">
                Skontaktuj się z Nami
              </h2>
              
              <div className="space-y-8">
                <a 
                  href="tel:661637770"
                  className="flex items-start gap-6 group p-4 rounded-2xl hover:bg-off-white transition-colors"
                >
                  <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                    <Phone size={26} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Telefon kontaktowy</h4>
                    <p className="text-2xl font-serif font-bold text-gray-900 group-hover:text-gold transition-colors">661 637 770</p>
                    <span className="text-xs text-gray-500">Zadzwoń, aby dopytać o wolne terminy</span>
                  </div>
                </a>

                <a 
                  href="mailto:pod.zaba39a@gmail.com"
                  className="flex items-start gap-6 group p-4 rounded-2xl hover:bg-off-white transition-colors"
                >
                  <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                    <Mail size={26} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Adres e-mail</h4>
                    <p className="text-xl font-serif font-bold text-gray-900 group-hover:text-gold transition-colors">pod.zaba39a@gmail.com</p>
                    <span className="text-xs text-gray-500">Napisz do nas w sprawie wyceny</span>
                  </div>
                </a>

                <div className="flex items-start gap-6 p-4 rounded-2xl">
                  <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-gold shadow-sm shrink-0">
                    <MapPin size={26} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Lokalizacja</h4>
                    <p className="text-xl font-serif font-bold text-gray-900">Orla 39a, 59-300 Lubin</p>
                    <span className="text-xs text-gray-500">Dwa lokale w jednej wygodnej lokalizacji</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-3xl bg-amber-50/50 border border-amber-200/50 text-gray-700 text-sm italic leading-relaxed">
                "Zapraszamy do kontaktu telefonicznego w celu zarezerwowania dogodnego terminu oraz omówienia szczegółów Państwa przyjęcia na rok 2026 oraz 2027!"
              </div>
            </div>

            <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.968877438826!2d16.2102424980144!3d51.38525004522297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f6f7380e3d6ab%3A0xb3b06d2a4a3161fe!2sOrla%2039A%2C%2059-300%20Lubin!5e0!3m2!1spl!2spl!4v1776764939210!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md shadow-xl rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-900">Piwnica pod Żabą & Hit Fit</div>
                    <div className="text-xs text-gray-500">Orla 39a, 59-300 Lubin</div>
                  </div>
                </div>
                <a 
                  href="https://maps.google.com/?q=Orla+39a,+59-300+Lubin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 hover:bg-gold text-white text-xs px-3.5 py-2 rounded-xl transition-colors font-medium"
                >
                  Nawiguj
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl font-bold tracking-tight">Piwnica pod Żabą & Hit Fit</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
                Dwa lokale bankietowe w Lubinie na przyjęcia okolicznościowe, wesela, chrzciny, komunie oraz imprezy firmowe.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-4 text-gold">Nasze Lokale</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>
                  <a href="#lokale" className="hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-gold" /> Sala Bankietowa Hit Fit (do 90 osób)
                  </a>
                </li>
                <li>
                  <a href="#lokale" className="hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-gold" /> Sala Bankietowa Piwnica pod Żabą
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-gold" /> Galeria Zdjęć
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-4 text-gold">Kontakt</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-gold" />
                  <a href="tel:661637770" className="hover:text-white">661 637 770</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-gold" />
                  <a href="mailto:pod.zaba39a@gmail.com" className="hover:text-white">pod.zaba39a@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-gold" />
                  <span>Orla 39a, 59-300 Lubin</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Piwnica pod Żabą & Hit Fit Lubin. Wszelkie prawa zastrzeżone.</p>
            <div className="flex items-center gap-4">
              <a 
                href={FACEBOOK_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Facebook size={16} /> Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

