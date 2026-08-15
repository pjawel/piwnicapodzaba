import { motion } from 'motion/react';
import { Film, Video, Sparkles, Utensils } from 'lucide-react';
import { DRONE_VIDEO_URL, PREPARATION_VIDEO_URL, HIT_FIT_IMAGES, PIWNICA_IMAGES } from '../data';
import { LazyVideo } from './LazyVideo';

export function VideoSection() {
  return (
    <section id="wideo" className="py-20 md:py-28 bg-gray-950 text-white scroll-mt-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-20 relative z-10">
        
        {/* Drone Video */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
              <Film size={14} className="text-emerald-400" /> Sala Hit Fit z Lotu Ptaka
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
              Lokal Hit Fit z Lotu Ptaka
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
              Obejrzyj wyjątkowe ujęcia z drona prezentujące przestrzeń wokół sali bankietowej Hit Fit w Lubinie (ul. Konstytucji 3 Maja 3). Zobacz dogodny dojazd, duży bezpłatny parking, zielone otoczenie oraz przestronny taras do dyspozycji Twoich gości.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-300 font-semibold">
              <Video size={14} /> Nagranie wideo z drona – Sala Hit Fit (Konstytucji 3 Maja 3)
            </div>
          </div>

          <div className="lg:col-span-7">
            <LazyVideo 
              src={DRONE_VIDEO_URL}
              poster={HIT_FIT_IMAGES[0]}
              title="Lokal Hit Fit z Lotu Ptaka - Nagranie z Drona"
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        </motion.div>

        <hr className="border-white/10" />

        {/* Preparation Process Video */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 order-2 lg:order-1">
            <LazyVideo 
              src={PREPARATION_VIDEO_URL}
              poster={PIWNICA_IMAGES[1] || HIT_FIT_IMAGES[1]}
              title="Proces Przygotowania do Przyjęcia"
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} className="text-gold" /> Kulisy Przygotowań
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
              Proces Przygotowania do Przyjęcia
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
              Zobacz, jak krok po kroku przygotowujemy salę na przyjęcie okolicznościowe. Dbamy o najmniejszy detal — od aranżacji stołów i dekoracji, po perfekcyjne serwowanie potraw.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-200 font-semibold">
              <Utensils size={14} /> Dbałość o każdy szczegół Twojej uroczystości
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
