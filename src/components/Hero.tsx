import { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Video, Calendar, ChefHat } from 'lucide-react';
import { HERO_BG_IMAGE } from '../data';

export function Hero() {
  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = window.innerWidth < 1024 ? 65 : 75;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Zoom & Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={HERO_BG_IMAGE} 
          alt="Hero Background" 
          initial={{ scale: 1.12 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 3.5, ease: "easeOut" }}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-black/60 to-black/45" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/80" />
      </div>

      {/* Floating Animated Golden Glow Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, 15, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full bg-gold/15 blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 35, 0], x: [0, -20, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ repeat: Infinity, duration: 10, delay: 1, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/6 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl"
        />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-gold-light text-xs sm:text-sm uppercase tracking-widest font-semibold shadow-lg"
            >
              <motion.span 
                animate={{ rotate: [0, 15, -15, 0] }} 
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <Sparkles size={16} className="text-gold" />
              </motion.span>
              Dwa Wyjątkowe Lokale Bankietowe w Lubinie
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-tight tracking-tight drop-shadow-2xl"
          >
            Sale Bankietowe <br />
            <span className="bg-gradient-to-r from-amber-200 via-gold-light to-amber-300 bg-clip-text text-transparent italic font-normal">
              Piwnica pod Żabą & Hit Fit
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-95 leading-relaxed text-gray-200 drop-shadow-md"
          >
            Miejsca stworzone z myślą o Twoich najważniejszych chwilach. Wesela, komunie, chrzciny, urodziny oraz imprezy firmowe w niezapomnianym, eleganckim wydaniu.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a 
              href="#lokale" 
              onClick={(e) => scrollToSection(e, 'lokale')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-full sm:w-auto relative group overflow-hidden bg-gradient-to-r from-amber-600 via-gold to-yellow-600 hover:from-amber-500 hover:to-gold text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-gold/40 flex items-center justify-center gap-3 text-sm uppercase tracking-wider border border-white/20 cursor-pointer"
            >
              <span>Poznaj Nasze Lokale</span>
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </motion.a>

            <motion.a 
              href="#oferta" 
              onClick={(e) => scrollToSection(e, 'oferta')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-full sm:w-auto bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/30 hover:border-gold/60 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2.5 text-sm uppercase tracking-wider shadow-lg cursor-pointer"
            >
              <ChefHat size={18} className="text-gold-light" />
              <span>Zobacz Menu & Ofertę</span>
            </motion.a>
          </motion.div>

          {/* Quick Features Highlight */}
          <motion.div 
            variants={itemVariants}
            className="pt-8 flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-gray-300 font-medium"
          >
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Sala Hit Fit do 90 osób
            </div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" /> Piwnica pod Żabą - ciepły klimat
            </div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" /> Bezpłatny parking & Taras
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.a 
        href="#o-nas"
        onClick={(e) => scrollToSection(e, 'o-nas')}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-1.5 z-10 cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-widest text-gold-light font-bold">Przewiń</span>
        <div className="w-5 h-8 sm:h-9 border-2 border-white/40 rounded-full flex justify-center p-1 backdrop-blur-sm">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-2 bg-gold rounded-full" 
          />
        </div>
      </motion.a>
    </section>
  );
}
