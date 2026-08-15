import { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Sparkles, TreePine, Flame, Car, Utensils, ArrowRight, Maximize2, Video, MapPin, Image as ImageIcon } from 'lucide-react';
import { VENUES, HIT_FIT_IMAGES, PIWNICA_IMAGES, PIWNICA_VIDEO_URL, HIT_FIT_ADDRESS, PIWNICA_ADDRESS } from '../data';
import { LazyVideo } from './LazyVideo';

interface VenuesSectionProps {
  onOpenGalleryTab: (tab: 'all' | 'hit-fit' | 'piwnica') => void;
  onOpenImage: (imageSrc: string, venue: 'hit-fit' | 'piwnica') => void;
}

export function VenuesSection({ onOpenGalleryTab, onOpenImage }: VenuesSectionProps) {
  return (
    <section id="lokale" className="py-20 md:py-28 bg-gray-50 border-t border-b border-gray-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-24">
        
        {/* VENUE 1: Hit Fit */}
        <motion.div 
          id="hit-fit" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 overflow-hidden scroll-mt-24 relative"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs tracking-wider uppercase border border-emerald-200/60">
                  <Users size={14} /> Sala do 90 osób
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-700 font-medium text-xs border border-gray-200">
                  <MapPin size={13} className="text-emerald-700" /> {HIT_FIT_ADDRESS}
                </div>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
                Sala Bankietowa <span className="text-emerald-700">Hit Fit</span>
              </h3>
              
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-light">
                Zapraszamy do naszej sali bankietowej dla 90 osób przy ul. Konstytucji 3 Maja 3! Oferujemy wyśmienitą kuchnię, eleganckie wnętrza oraz przestronny taras, duży grill i bezpłatny parking. Zadbamy o pyszne menu i wyjątkową atmosferę.
              </p>

              <div className="pt-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-3">
                  Organizujemy przyjęcia:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {VENUES[0].events.map((event) => (
                    <motion.span 
                      key={event}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="bg-emerald-50/90 text-emerald-900 border border-emerald-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs cursor-default"
                    >
                      {event}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="pt-2 grid sm:grid-cols-2 gap-3.5 text-sm text-gray-700 font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <TreePine size={16} />
                  </div>
                  <span>Przestronny taras</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Flame size={16} />
                  </div>
                  <span>Duży grill plenerowy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Car size={16} />
                  </div>
                  <span>Bezpłatny duży parking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Utensils size={16} />
                  </div>
                  <span>Wyśmienita kuchnia</span>
                </div>
              </div>

              <div className="pt-4">
                <motion.button 
                  onClick={() => onOpenGalleryTab('hit-fit')}
                  whileHover={{ scale: 1.04, x: 2 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-lg hover:shadow-emerald-900/30"
                >
                  <span>Zobacz Galerię Hit Fit ({HIT_FIT_IMAGES.length} Zdjęć)</span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3.5">
              {HIT_FIT_IMAGES.slice(0, 4).map((img, idx) => (
                <VenuePhotoPreview
                  key={idx}
                  img={img}
                  alt={`Hit Fit ${idx + 1}`}
                  onClick={() => onOpenImage(img, 'hit-fit')}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* VENUE 2: Piwnica pod Żabą */}
        <motion.div 
          id="piwnica-pod-zaba" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 overflow-hidden scroll-mt-24 relative"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Photo Grid */}
            <div className="lg:col-span-6 order-2 lg:order-1 grid grid-cols-2 gap-3.5">
              {PIWNICA_IMAGES.slice(0, 4).map((img, idx) => (
                <VenuePhotoPreview
                  key={idx}
                  img={img}
                  alt={`Piwnica pod Żabą ${idx + 1}`}
                  onClick={() => onOpenImage(img, 'piwnica')}
                />
              ))}
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 font-bold text-xs tracking-wider uppercase border border-amber-200/60">
                  <Sparkles size={14} className="text-gold" /> Tradycja & Klimat
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-700 font-medium text-xs border border-gray-200">
                  <MapPin size={13} className="text-gold-dark" /> {PIWNICA_ADDRESS}
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
                Sala Bankietowa <span className="text-gold-dark">Piwnica pod Żabą</span>
              </h3>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-light">
                Piwnica pod Żabą przy ul. Orlej 39a to miejsce o niezwykłym uroku i niepowtarzalnym klimacie. Specjalizujemy się w przygotowywaniu uroczystości rodzinnych oraz jubileuszy, dbając o pyszne menu, elegancką oprawę i niezapomnianą atmosferę.
              </p>

              <div className="pt-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-3">
                  Organizujemy przyjęcia:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {VENUES[1].events.map((event) => (
                    <motion.span 
                      key={event}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="bg-amber-50/90 text-amber-900 border border-amber-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs cursor-default"
                    >
                      {event}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <motion.button 
                  onClick={() => onOpenGalleryTab('piwnica')}
                  whileHover={{ scale: 1.04, x: 2 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-600 to-gold hover:from-amber-500 hover:to-gold text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-lg hover:shadow-gold/30"
                >
                  <span>Zobacz Galerię Piwnica pod Żabą ({PIWNICA_IMAGES.length} Zdjęć)</span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>

              {/* Piwnica Pod Żabą Video Player */}
              <div className="pt-6 border-t border-gray-100 space-y-3">
                <div className="flex items-center gap-2 text-gold-dark font-bold text-xs uppercase tracking-widest">
                  <Video size={16} /> Wideo z lokalu Piwnica pod Żabą
                </div>
                <LazyVideo 
                  src={PIWNICA_VIDEO_URL}
                  poster={PIWNICA_IMAGES[0]}
                  title="Prezentacja wideo lokalu Piwnica pod Żabą"
                  className="w-full h-auto max-h-[350px] object-cover"
                />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

function VenuePhotoPreview({ img, alt, onClick }: { key?: string | number; img: string; alt: string; onClick: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-md bg-stone-200"
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-stone-200 animate-pulse flex items-center justify-center text-stone-400">
          <ImageIcon size={20} className="opacity-40" />
        </div>
      )}
      <img 
        src={img} 
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-xs">
        <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center scale-75 group-hover:scale-100 transition-transform">
          <Maximize2 size={20} />
        </div>
      </div>
    </motion.div>
  );
}
