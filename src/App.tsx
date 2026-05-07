import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, Star, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';

const IMAGES = [
  "https://iili.io/BZtnTLx.md.jpg",
  "https://iili.io/BZtnIXj.md.jpg",
  "https://iili.io/BZtnzzb.md.jpg",
  "https://iili.io/BZtnomu.md.jpg",
  "https://iili.io/BZtnR1V.md.jpg",
  "https://iili.io/BZtn5rB.md.jpg",
  "https://iili.io/BZtnYdP.md.jpg",
  "https://iili.io/BZtna71.md.jpg",
];

const FAVICON_URL = "https://iili.io/BZtxBDu.md.jpg";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O nas', href: '#o-nas' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={FAVICON_URL} 
              alt="Logo" 
              className="w-10 h-10 rounded-full object-cover border-2 border-gold shadow-sm"
              referrerPolicy="no-referrer"
            />
            <span className={`font-serif text-xl font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Piwnica pod Żabą
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`font-medium transition-colors hover:text-gold ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://www.facebook.com/profile.php?id=100083928829726&locale=pl_PL" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full border transition-all ${isScrolled ? 'border-gray-200 text-blue-600 hover:bg-blue-50' : 'border-white/30 text-white hover:bg-white/10'}`}
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-gray-100" />
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=100083928829726&locale=pl_PL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 font-medium"
                >
                  <Facebook size={20} /> Facebook
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES[0]} 
            alt="Hall" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 drop-shadow-lg">
              Sala Bankietowa <br />
              <span className="text-gold-light italic italic">Piwnica pod Żabą</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto opacity-90 drop-shadow-md">
              Wyjątkowe miejsce na Twoje wyjątkowe okazje. Wesela, komunie, chrzciny i imprezy firmowe w sercu Lubina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#kontakt" 
                className="bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Rezerwuj termin <ArrowRight size={18} />
              </a>
              <a 
                href="#galeria" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
              >
                Zobacz galerię
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section id="o-nas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Elegancja i Tradycja</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Miejsce pełne atmosfery, <br />
                które pokochasz
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                <p>
                  Sala Bankietowa Piwnica pod Żabą to miejsce, gdzie spotykają się elegancja, doskonała kuchnia i profesjonalna obsługa. Nasze wnętrza zostały zaprojektowane tak, aby stworzyć niepowtarzalny klimat dla każdego wydarzenia.
                </p>
                <p>
                  Specjalizujemy się w organizacji przyjęć okolicznościowych, dbając o każdy, nawet najmniejszy szczegół. Niezależnie od tego, czy planujesz kameralny obiad rodzinny, czy huczne wesele, jesteśmy tu, aby Twoje wydarzenie było niezapomniane.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-serif text-gold mb-1">Lubin</div>
                  <div className="text-sm uppercase tracking-wider text-gray-400">Lokalizacja</div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <div className="text-3xl font-serif text-gold mb-1">Top</div>
                  <div className="text-sm uppercase tracking-wider text-gray-400">Standard</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={IMAGES[1]} 
                alt="Wnętrze" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[16px] border-white/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-off-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Nasze Klimaty</span>
            <h2 className="text-4xl md:text-6xl font-serif">Galeria Zdjęć</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {IMAGES.slice(1).map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg
                  ${idx === 0 || idx === 3 ? 'md:col-span-2 md:row-span-2' : ''}
                `}
              >
                <img 
                  src={img} 
                  alt={`Galeria ${idx + 1}`} 
                  className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Star className="text-white fill-white" size={32} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews CTA */}
      <section className="py-20 bg-gold text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-white" />)}
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-8">Zaufaj opiniom naszych gości</h3>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed italic">
              Nasza praca to nasza pasja. Zobacz, co o nas piszą na Facebooku i dlaczego Piwnica pod Żabą to świetny wybór na Twoją imprezę.
            </p>
            <a 
              href="https://www.facebook.com/profile.php?id=100083928829726&sk=reviews&locale=pl_PL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-gold px-10 py-4 rounded-full font-bold shadow-xl hover:bg-gold-light transition-colors"
            >
              Zobacz opinie <Facebook size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="kontakt" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-gold uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Bądźmy w kontakcie</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-12">Kontakt i Lokalizacja</h2>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-off-white rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-gray-400 uppercase tracking-widest text-xs">Telefon</h4>
                    <p className="text-2xl font-serif">661 637 770</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-off-white rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-gray-400 uppercase tracking-widest text-xs">Email</h4>
                    <p className="text-2xl font-serif">pod.zaba39a@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-off-white rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300 shadow-sm">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-gray-400 uppercase tracking-widest text-xs">Adres</h4>
                    <p className="text-2xl font-serif">Orla 39a, Lubin 59-300</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-off-white rounded-3xl border border-gray-100 italic text-gray-500">
                "Zorganizujemy dla Państwa każdą uroczystość w niepowtarzalnym stylu. Zapraszamy do kontaktu telefonicznego w celu rezerwacji terminów na rok 2026 i 2027."
              </div>
            </div>

            <div className="h-[500px] lg:h-auto min-h-[500px] map-container relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.968877438826!2d16.2102424980144!3d51.38525004522297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f6f7380e3d6ab%3A0xb3b06d2a4a3161fe!2sOrla%2039A%2C%2059-300%20Lubin!5e0!3m2!1spl!2spl!4v1776764939210!5m2!1spl!2spl" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-6 right-6 p-4 bg-white shadow-xl rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="font-bold text-sm">Tu nas znajdziesz</div>
                  <div className="text-xs text-gray-400">Orla 39a, Lubin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src={FAVICON_URL} 
                  alt="Logo" 
                  className="w-12 h-12 rounded-full border-2 border-gold object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="font-serif text-2xl font-bold tracking-tight">Piwnica pod Żabą</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Twoje wymarzone przyjęcie w wyjątkowych wnętrzach. Elegancja, styl i smak w sercu Lubina.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-xl mb-6">Szybki dostęp</h4>
              <ul className="space-y-4 text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-gold flex items-center gap-2 group transition-colors">
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-xl mb-6">Kontakt bezpośredni</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3 underline underline-offset-4 decoration-gold/50">
                  <Phone size={18} /> 661 637 770
                </li>
                <li className="flex items-center gap-3 opacity-80">
                  <Mail size={18} /> pod.zaba39a@gmail.com
                </li>
                <li className="flex items-center gap-3 opacity-80">
                  <MapPin size={18} /> Orla 39a, 59-300 Lubin
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Sala Bankietowa Piwnica pod Żabą. Wszelkie prawa zastrzeżone.</p>
            <div className="flex items-center gap-6">
              <a href="https://www.facebook.com/profile.php?id=100083928829726&locale=pl_PL" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
