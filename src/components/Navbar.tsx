import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, ChevronDown, Heart, PartyPopper, 
  Baby, HeartHandshake, Users, Building2, ChefHat, 
  Camera, Info, Facebook, ArrowRight 
} from 'lucide-react';
import { FACEBOOK_URL, CONTACT_PHONE_FORMATTED } from '../data';

interface NavbarProps {
  isScrolled: boolean;
}

export function Navbar({ isScrolled }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsEventsDropdownOpen(false);
  }, [location.pathname]);

  const eventSubLinks = [
    { name: 'Wesela (Hit Fit do 90 os.)', path: '/wesela', icon: Heart, desc: 'Tylko w lokalu Hit Fit' },
    { name: '18. Urodziny', path: '/18-urodziny', icon: PartyPopper, desc: 'Klimatyczna Piwnica lub Hit Fit' },
    { name: 'Chrzciny i Komunie', path: '/chrzciny-komunie', icon: Baby, desc: 'Rodzinne przyjęcia z tradycyjnym menu' },
    { name: 'Stypy i Konsolacje', path: '/stypy', icon: HeartHandshake, desc: 'Spokojna, szybka organizacja' },
    { name: 'Uroczystości Rodzinne', path: '/uroczystosci-rodzinne', icon: Users, desc: 'Jubileusze, 30/40/50/60-tki' },
    { name: 'Imprezy Firmowe', path: '/imprezy-firmowe', icon: Building2, desc: 'Wigilie, bankiety, faktury VAT' },
  ];

  const isEventActive = eventSubLinks.some(link => location.pathname === link.path);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || location.pathname !== '/'
        ? 'bg-stone-900/95 backdrop-blur-md shadow-lg py-3 border-b border-stone-800' 
        : 'bg-gradient-to-b from-stone-950/90 via-stone-950/60 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <Link 
          to="/"
          className="flex items-center gap-3 group"
        >
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors leading-none">
              Piwnica pod Żabą <span className="text-amber-400">&</span> Hit Fit
            </span>
            <span className="text-[10px] tracking-widest uppercase mt-1 font-semibold text-stone-300">
              Sale Bankietowe • Lubin
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Link 
            to="/"
            className={`font-semibold text-xs uppercase tracking-wider py-1.5 transition-colors ${
              location.pathname === '/' ? 'text-amber-400' : 'text-stone-200 hover:text-white'
            }`}
          >
            Strona Główna
          </Link>

          <Link 
            to="/o-nas"
            className={`font-semibold text-xs uppercase tracking-wider py-1.5 transition-colors ${
              location.pathname === '/o-nas' ? 'text-amber-400' : 'text-stone-200 hover:text-white'
            }`}
          >
            O Nas
          </Link>

          <Link 
            to="/sale"
            className={`font-semibold text-xs uppercase tracking-wider py-1.5 transition-colors ${
              location.pathname === '/sale' ? 'text-amber-400' : 'text-stone-200 hover:text-white'
            }`}
          >
            Nasze Sale
          </Link>

          {/* Events Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsEventsDropdownOpen(true)}
            onMouseLeave={() => setIsEventsDropdownOpen(false)}
          >
            <button
              onClick={() => setIsEventsDropdownOpen(!isEventsDropdownOpen)}
              className={`flex items-center gap-1 font-semibold text-xs uppercase tracking-wider py-1.5 transition-colors cursor-pointer ${
                isEventActive ? 'text-amber-400' : 'text-stone-200 hover:text-white'
              }`}
            >
              <span>Przyjęcia</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isEventsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isEventsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-stone-900 border border-stone-800 shadow-2xl p-2.5 space-y-1 z-50 backdrop-blur-xl"
                >
                  {eventSubLinks.map((sub, idx) => {
                    const Icon = sub.icon;
                    const isActive = location.pathname === sub.path;
                    return (
                      <Link
                        key={idx}
                        to={sub.path}
                        className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                          isActive ? 'bg-amber-500/20 text-amber-300' : 'hover:bg-stone-800/80 text-stone-200'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-lg bg-stone-800 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                          <Icon size={15} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold font-serif leading-tight">{sub.name}</span>
                          <span className="text-[10px] text-stone-400 font-light mt-0.5">{sub.desc}</span>
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/menu"
            className={`font-semibold text-xs uppercase tracking-wider py-1.5 transition-colors ${
              location.pathname === '/menu' ? 'text-amber-400' : 'text-stone-200 hover:text-white'
            }`}
          >
            Menu
          </Link>

          <Link 
            to="/galeria"
            className={`font-semibold text-xs uppercase tracking-wider py-1.5 transition-colors ${
              location.pathname === '/galeria' ? 'text-amber-400' : 'text-stone-200 hover:text-white'
            }`}
          >
            Galeria
          </Link>

          <Link 
            to="/kontakt"
            className={`font-semibold text-xs uppercase tracking-wider py-1.5 transition-colors ${
              location.pathname === '/kontakt' ? 'text-amber-400' : 'text-stone-200 hover:text-white'
            }`}
          >
            Kontakt
          </Link>

          {/* Facebook Link */}
          <a 
            href={FACEBOOK_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-stone-700 text-stone-300 hover:text-blue-400 hover:border-blue-400 transition-colors"
            title="Profil na Facebooku"
          >
            <Facebook size={16} />
          </a>

          {/* Direct Booking CTA */}
          <Link
            to="/kontakt"
            className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-stone-950 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105"
          >
            Rezerwacja
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a 
            href="tel:661637770"
            className="p-2 rounded-full bg-amber-500 text-stone-950 shadow-sm"
            title="Zadzwoń: 661 637 770"
          >
            <Phone size={18} />
          </a>

          <button 
            className="p-2 rounded-xl text-white bg-stone-800 hover:bg-stone-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Otwórz menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Full Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-stone-900 border-b border-stone-800 lg:hidden overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
              
              {/* Primary Pages */}
              <div className="flex flex-col gap-1 pb-3 border-b border-stone-800">
                <Link
                  to="/"
                  className={`text-base font-serif font-bold py-2 flex items-center justify-between ${
                    location.pathname === '/' ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  <span>Strona Główna</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  to="/o-nas"
                  className={`text-base font-serif font-bold py-2 flex items-center justify-between ${
                    location.pathname === '/o-nas' ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  <span>O Nas</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  to="/sale"
                  className={`text-base font-serif font-bold py-2 flex items-center justify-between ${
                    location.pathname === '/sale' ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  <span>Nasze Sale (Hit Fit & Piwnica)</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Subpages / Events */}
              <div className="space-y-2 pb-3 border-b border-stone-800">
                <span className="text-[11px] uppercase tracking-widest text-amber-400 font-bold block">
                  Podstrony Uroczystości:
                </span>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {eventSubLinks.map((sub, idx) => (
                    <Link
                      key={idx}
                      to={sub.path}
                      className={`text-sm py-2 flex items-center justify-between ${
                        location.pathname === sub.path ? 'text-amber-400 font-bold' : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      <span>{sub.name}</span>
                      <ArrowRight size={14} className="opacity-50" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Menu, Gallery, Contact */}
              <div className="flex flex-col gap-1">
                <Link
                  to="/menu"
                  className={`text-base font-serif font-bold py-2 flex items-center justify-between ${
                    location.pathname === '/menu' ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  <span>Karta Menu & Pakiety</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  to="/galeria"
                  className={`text-base font-serif font-bold py-2 flex items-center justify-between ${
                    location.pathname === '/galeria' ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  <span>Galeria Zdjęć</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  to="/kontakt"
                  className={`text-base font-serif font-bold py-2 flex items-center justify-between ${
                    location.pathname === '/kontakt' ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  <span>Kontakt & Rezerwacje</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="tel:661637770"
                  className="flex-1 py-3 text-center rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-md"
                >
                  Zadzwoń: {CONTACT_PHONE_FORMATTED}
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-stone-800 text-blue-400 border border-stone-700"
                  title="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
