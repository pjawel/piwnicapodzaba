import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, PartyPopper, Baby, HeartHandshake, Users, Building2, 
  ChefHat, Camera, Phone, MapPin, ArrowRight, Sparkles, Wine, 
  CheckCircle2, Download, ShieldCheck, Car, Flame, Music, Info,
  Volume2, VolumeX, Maximize2, Video, X, TreePine, Play
} from 'lucide-react';
import { 
  HIT_FIT_IMAGES, PIWNICA_IMAGES, CONTACT_PHONE_FORMATTED, 
  HIT_FIT_ADDRESS, PIWNICA_ADDRESS, HERO_BG_IMAGE, FACEBOOK_URL,
  DRONE_VIDEO_URL 
} from '../data';
import { ReviewsSection } from '../components/ReviewsSection';
import { downloadMenuPdf } from '../utils/generateMenuPdf';
import { SeoHead } from '../components/SeoHead';

interface CategoryCard {
  title: string;
  subtitle: string;
  path: string;
  icon: any;
  image: string;
  badge?: string;
  accent: string;
}

export function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const categories: CategoryCard[] = [
    {
      title: "Wesela i Przyjęcia Ślubne",
      subtitle: "Tylko Sala Hit Fit (do 90 osób) • Parkiet taneczny, taras wypoczynkowy, dedykowane menu",
      path: "/wesela",
      icon: Heart,
      image: HIT_FIT_IMAGES[0],
      badge: "Tylko Hit Fit do 90 os.",
      accent: "from-amber-900/80 to-stone-900/90"
    },
    {
      title: "18. Urodziny",
      subtitle: "Klimatyczna Piwnica (do 40 os.) lub Hit Fit (do 90 os.) • DJ, nagłośnienie, menu młodzieżowe",
      path: "/18-urodziny",
      icon: PartyPopper,
      image: PIWNICA_IMAGES[0],
      badge: "Bestseller Piwnicy",
      accent: "from-amber-950/80 to-stone-900/90"
    },
    {
      title: "Chrzciny i Komunie",
      subtitle: "Rodzinna atmosfera, tradycyjny rosół, 4 rodzaje mięs, kącik i menu dla dzieci",
      path: "/chrzciny-komunie",
      icon: Baby,
      image: HIT_FIT_IMAGES[1],
      badge: "Pakiety Rodzinne",
      accent: "from-stone-900/80 to-stone-950/90"
    },
    {
      title: "Stypy i Konsolacje",
      subtitle: "Godna, spokojna organizacja w krótkim terminie • Ciepły dwudaniowy obiad i ciasta",
      path: "/stypy",
      icon: HeartHandshake,
      image: PIWNICA_IMAGES[1],
      badge: "Szybka Organizacja",
      accent: "from-stone-950/90 to-stone-900/90"
    },
    {
      title: "Uroczystości Rodzinne",
      subtitle: "30, 40, 50, 60-tki, rocznice ślubu, jubileusze i obiady okolicznościowe w gronie najbliższych",
      path: "/uroczystosci-rodzinne",
      icon: Users,
      image: HIT_FIT_IMAGES[2],
      accent: "from-amber-900/80 to-stone-900/90"
    },
    {
      title: "Imprezy Firmowe & Bankiety",
      subtitle: "Spotkania integracyjne, wigilie pracownicze, biesiady z grillem na tarasie, faktury VAT",
      path: "/imprezy-firmowe",
      icon: Building2,
      image: HIT_FIT_IMAGES[3],
      accent: "from-stone-900/80 to-stone-950/90"
    }
  ];

  const exploreLinks = [
    {
      title: "Nasze Sale i Przestrzenie",
      desc: "Poznaj szczegóły Sali Hit Fit (do 90 os.) oraz Piwnicy pod Żabą (do 40 os.)",
      path: "/sale",
      icon: Building2,
      tag: "Prezentacja Sal",
    },
    {
      title: "Karta Menu & Pakiety",
      desc: "Autorska kuchnia Piotra Jaworskiego, dania gorące, zimny stół oraz PDF",
      path: "/menu",
      icon: ChefHat,
      tag: "Kuchnia & Cennik",
    },
    {
      title: "Galeria Zdjęć",
      desc: "Fotografie wnętrz, wystroju stołów i aranżacji przyjęć w obu lokalach",
      path: "/galeria",
      icon: Camera,
      tag: "Fotorelacje",
    },
    {
      title: "O Nas i Nasza Kuchnia",
      desc: "Historia lokali, doświadczenie kulinarne i filozofia domowego smaku",
      path: "/o-nas",
      icon: Info,
      tag: "Tradycja",
    }
  ];

  return (
    <div className="bg-stone-50 text-gray-900 min-h-screen">
      <SeoHead
        title="Sale Bankietowe Lubin | Piwnica pod Żabą & Hit Fit"
        description="Wynajem sal na wesela, 18-stki, chrzciny, komunie, stypy i imprezy firmowe w Lubinie. Klimatyczna Piwnica pod Żabą (do 40 os.) i nowoczesna Sala Hit Fit (do 80 os.). Zobacz menu i wolne terminy!"
        keywords={['sala bankietowa Lubin', 'wynajem sali Lubin', 'wesela Lubin', '18 urodziny Lubin', 'chrzciny Lubin', 'komunie Lubin', 'stypy Lubin', 'Piwnica pod Żabą', 'Hit Fit']}
        canonicalPath="/"
      />
      {/* 1. HERO SECTION WITH DRONE VIDEO SHOWCASE */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-stone-950 text-white overflow-hidden pt-24 pb-16">
        {/* Ambient Backdrop */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_BG_IMAGE} 
            alt="Piwnica pod Żabą & Hit Fit Lubin" 
            className="w-full h-full object-cover opacity-25 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/90" />
          <div className="absolute inset-0 bg-radial from-transparent via-stone-950/40 to-stone-950/90" />
        </div>

        {/* Ambient Subtle Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-amber-500/10 blur-[130px]" />
          <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-yellow-500/10 blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Proposition & Quick Navigation */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
                <Sparkles size={14} className="text-amber-400" /> Dwa Lokale Bankietowe w Lubinie
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                Piwnica pod Żabą <span className="text-amber-400">&</span> Hit Fit
              </h1>

              <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                Organizacja wesel, 18-stek, komunii, chrzcin, jubileuszy i imprez okolicznościowych w Lubinie. 
                Dwa wyjątkowe lokale z autorską kuchnią, elegancką oprawą stołów, tarasem i brakiem opłaty korkowej.
              </p>

              {/* Venue Quick Comparison Badges */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-xs pt-1">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-emerald-400/30 text-stone-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span><strong>Hit Fit</strong> (do 90 os. • wesela, parkiet, taras, grill, parking)</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-amber-400/30 text-stone-200">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span><strong>Piwnica pod Żabą</strong> (do 40 os. • 18-stki, bez wesel)</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap gap-3.5 justify-center lg:justify-start items-center">
                <a
                  href="#kategorie"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-900/30 transition-all hover:scale-105"
                >
                  <span>Wybierz Uroczystość ↓</span>
                </a>
                
                <Link
                  to="/sale"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all"
                >
                  <Building2 size={16} className="text-amber-400" />
                  <span>Zobacz Sale</span>
                </Link>

                <a
                  href="tel:661637770"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-stone-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Phone size={16} className="text-amber-400" />
                  <span>Zadzwoń: <strong>{CONTACT_PHONE_FORMATTED}</strong></span>
                </a>
              </div>

              {/* Zero Corkage & Feature Badges */}
              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-3 text-xs text-stone-300 font-medium">
                <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                  <Wine size={13} className="text-amber-400" /> Własny alkohol bez opłaty korkowej
                </span>
                <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                  <CheckCircle2 size={13} className="text-amber-400" /> Autorska kuchnia na miejscu
                </span>
              </div>
            </div>

            {/* Right Column: Prominent Drone Video Showcase */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-stone-900">
                {/* Drone Video Player */}
                <div className="relative aspect-video sm:aspect-[4/3] w-full overflow-hidden bg-black">
                  <video
                    ref={videoRef}
                    src={DRONE_VIDEO_URL}
                    poster={HIT_FIT_IMAGES[0]}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Hit Fit z lotu ptaka (dron)</span>
                  </div>

                  {/* Sound and Fullscreen Controls */}
                  <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsMuted(!isMuted);
                        if (videoRef.current) {
                          videoRef.current.muted = !isMuted;
                        }
                      }}
                      className="p-2 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all text-xs"
                      title={isMuted ? "Włącz dźwięk" : "Wycisz dźwięk"}
                      aria-label={isMuted ? "Włącz dźwięk" : "Wycisz dźwięk"}
                    >
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsVideoModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-bold text-xs backdrop-blur-md transition-all shadow-md cursor-pointer"
                      title="Otwórz pełny ekran"
                    >
                      <Maximize2 size={14} />
                      <span className="hidden sm:inline">Pełny Ekran</span>
                    </button>
                  </div>
                </div>

                {/* Video Caption & Venue Highlights */}
                <div className="p-4 bg-stone-900/95 border-t border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-amber-400 font-bold uppercase tracking-wider">Hit Fit • Lubin</span>
                    <span className="text-stone-400">ul. Konstytucji 3 Maja 3</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed font-light">
                    Zobacz przestrzeń wokół lokalu: bezpieczny dojazd, bezpłatny duży parking, zadaszony taras i zielone otoczenie.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-lg text-stone-300 flex items-center gap-1">
                      <Car size={12} className="text-emerald-400" /> Duży parking
                    </span>
                    <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-lg text-stone-300 flex items-center gap-1">
                      <TreePine size={12} className="text-emerald-400" /> Taras & Grill
                    </span>
                    <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-lg text-stone-300 flex items-center gap-1">
                      <Users size={12} className="text-emerald-400" /> Do 90 osób
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE MAIN CATEGORY DIRECTORY / HUB */}
      <section id="kategorie" className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-amber-800 uppercase tracking-widest text-xs font-bold block">
            Katalog Uroczystości
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900">
            Wybierz Rodzaj Przyjęcia
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light">
            Kliknij w interesującą Cię uroczystość, aby przejść do dedykowanej podstrony z dokładnym opisem, zdjęciami i proponowanym menu:
          </p>
        </div>

        {/* 6 High-Impact Category Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                to={cat.path}
                className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[320px] p-7 border border-stone-200/80 bg-stone-900"
              >
                {/* Background Photo */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40 filter brightness-90"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.accent}`} />
                </div>

                {/* Top Badge & Icon */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 backdrop-blur-md border border-amber-400/30 flex items-center justify-center text-amber-300 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                    <Icon size={24} />
                  </div>
                  {cat.badge && (
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-[11px] uppercase tracking-wider border border-white/20">
                      {cat.badge}
                    </span>
                  )}
                </div>

                {/* Bottom Content & CTA */}
                <div className="relative z-10 space-y-3 pt-12">
                  <h3 className="text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm line-clamp-2 leading-relaxed font-light">
                    {cat.subtitle}
                  </p>
                  <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider pt-2 group-hover:text-white transition-colors">
                    <span>Zobacz Dedykowaną Ofertę</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. QUICK VENUE SUMMARY (Snapshot directing to /sale) */}
      <section className="bg-stone-100 py-16 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-amber-800 uppercase tracking-widest text-xs font-bold block">
              Nasze Dwie Przestrzenie
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Sale Dopasowane do Liczby Gości
            </h2>
            <p className="text-stone-600 text-sm">
              Zapewniamy pełną prywatność – podczas Twojego przyjęcia sala jest wyłącznie do dyspozycji Twoich gości.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hit Fit Snapshot */}
            <div className="bg-white rounded-3xl p-7 border border-stone-200 shadow-md space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="aspect-16/9 rounded-2xl overflow-hidden shadow-sm">
                  <img 
                    src={HIT_FIT_IMAGES[0]} 
                    alt="Sala Bankietowa Hit Fit Lubin" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-800 font-bold text-xs uppercase tracking-wider">Hit Fit • do 90 osób</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold">
                    Wesela & Bankiety
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  Sala Bankietowa Hit Fit
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Ul. Konstytucji 3 Maja 3, Lubin. Przestronny obiekt z dużym parkietem do tańca, stołem prezydialnym, zadaszonym tarasem z grillem plenerowym oraz dużym bezpłatnym parkingiem.
                </p>
              </div>
              <Link
                to="/sale"
                className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-stone-100 hover:bg-emerald-700 hover:text-white text-stone-900 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Szczegóły Sali Hit Fit</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Piwnica Snapshot */}
            <div className="bg-white rounded-3xl p-7 border border-stone-200 shadow-md space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="aspect-16/9 rounded-2xl overflow-hidden shadow-sm">
                  <img 
                    src={PIWNICA_IMAGES[0]} 
                    alt="Sala Piwnica pod Żabą Lubin" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-800 font-bold text-xs uppercase tracking-wider">Piwnica pod Żabą • do 40 osób</span>
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold">
                    Hit na 18-stki
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  Sala Bankietowa Piwnica pod Żabą
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Ul. Orla 39a, Lubin. Wyjątkowy ceglany klimat, kameralny i ciepły wystrój, klubowe oświetlenie, nagłośnienie i strefa do tańca. Idealna na 18-stki, urodziny i chrzciny (brak wesel).
                </p>
              </div>
              <Link
                to="/sale"
                className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-stone-100 hover:bg-amber-700 hover:text-white text-stone-900 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Szczegóły Piwnicy pod Żabą</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPLORE FURTHER (Menu, Galeria, O nas, Kontakt) */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-amber-800 uppercase tracking-widest text-xs font-bold block">
            Więcej Informacji
          </span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            Poznaj Nas Bliżej
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {exploreLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                to={item.path}
                className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-800 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                    {item.tag}
                  </span>
                  <h4 className="font-serif font-bold text-stone-900 text-base group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="text-amber-800 font-bold text-xs flex items-center gap-1 pt-2">
                  <span>Przejdź</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 5. MENU SHORTCUT BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pb-16">
        <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block">
              Kulinaria Piotra Jaworskiego
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
              Zobacz Pełną Kartę Menu & Dania Gorące
            </h3>
            <p className="text-stone-300 text-sm max-w-xl font-light">
              Gotowe pakiety okolicznościowe, katalog mięs, dodatków, surówek i 14 gorących kolacji. Własny alkohol bez opłaty korkowej!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/menu"
              className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md text-center"
            >
              Zobacz Menu Online →
            </Link>
            <button
              onClick={downloadMenuPdf}
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 transition-all"
            >
              <Download size={15} /> Pobierz PDF
            </button>
          </div>
        </div>
      </section>

      {/* 6. VERIFIED FACEBOOK REVIEWS */}
      <ReviewsSection />

      {/* 7. QUICK CALL / BOOKING BANNER */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
            Planujesz Przyjęcie w Lubinie?
          </h3>
          <p className="text-stone-300 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Zadzwoń do nas, aby sprawdzić wolny termin w kalendarzu, zadać pytania i umówić się na spotkanie w lokalu.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="tel:661637770"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-serif font-bold text-lg shadow-xl transition-all hover:scale-105"
            >
              <Phone size={20} /> Zadzwoń: {CONTACT_PHONE_FORMATTED}
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
            >
              Formularz Rezerwacji
            </Link>
          </div>
        </div>
      </section>
      {/* Fullscreen Video Modal for Drone Footage */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <div 
              className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 bg-stone-900 border-b border-white/10 text-white">
                <div className="flex items-center gap-2">
                  <Video size={18} className="text-amber-400" />
                  <span className="font-bold text-sm">Hit Fit w Lubinie – Prezentacja Lokalu i Terenu z Drona</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Zamknij"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="aspect-video w-full bg-black">
                <video
                  src={DRONE_VIDEO_URL}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-4 bg-stone-900 text-stone-300 text-xs flex flex-wrap justify-between items-center gap-2">
                <span>Lubin, ul. Konstytucji 3 Maja 3 (bezpłatny parking, taras, sala do 90 osób)</span>
                <a
                  href="tel:661637770"
                  className="text-amber-400 hover:underline font-semibold"
                >
                  Zadzwoń: {CONTACT_PHONE_FORMATTED}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
