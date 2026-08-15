import { useState, useMemo, useEffect, Dispatch, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, ChevronLeft, ChevronRight, X, Sparkles, Image as ImageIcon } from 'lucide-react';
import { HIT_FIT_IMAGES, PIWNICA_IMAGES } from '../data';

interface GallerySectionProps {
  activeTab: 'all' | 'hit-fit' | 'piwnica';
  setActiveTab: (tab: 'all' | 'hit-fit' | 'piwnica') => void;
  selectedImageIndex: number | null;
  setSelectedImageIndex: Dispatch<SetStateAction<number | null>>;
}

export function GallerySection({
  activeTab,
  setActiveTab,
  selectedImageIndex,
  setSelectedImageIndex,
}: GallerySectionProps) {
  const [visiblePhotosCount, setVisiblePhotosCount] = useState(16);

  const galleryItems = useMemo(() => {
    if (activeTab === 'hit-fit') {
      return HIT_FIT_IMAGES.map((src) => ({ src, venue: 'Hit Fit' }));
    }
    if (activeTab === 'piwnica') {
      return PIWNICA_IMAGES.map((src) => ({ src, venue: 'Piwnica pod Żabą' }));
    }
    return [
      ...HIT_FIT_IMAGES.map((src) => ({ src, venue: 'Hit Fit' })),
      ...PIWNICA_IMAGES.map((src) => ({ src, venue: 'Piwnica pod Żabą' }))
    ];
  }, [activeTab]);

  const currentVisiblePhotos = useMemo(() => {
    return galleryItems.slice(0, visiblePhotosCount);
  }, [galleryItems, visiblePhotosCount]);

  // Reset or adjust count on tab change
  const handleTabChange = (tab: 'all' | 'hit-fit' | 'piwnica') => {
    setActiveTab(tab);
    setVisiblePhotosCount(16);
  };

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
  }, [selectedImageIndex, galleryItems.length, setSelectedImageIndex]);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-white scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <span className="text-gold-dark uppercase tracking-[0.25em] text-xs font-bold block">
            Fotorelacja z naszych uroczystości
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Galeria Zdjęć</h2>
          <p className="text-gray-500 text-sm sm:text-base font-light">
            Przeglądaj zdjęcia naszych dwóch lokali bankietowych w Lubinie.
          </p>
        </motion.div>

        {/* Filter Tabs with animated layout pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-12"
        >
          
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => handleTabChange('all')}
            className={`relative px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'all'
                ? 'text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {activeTab === 'all' && (
              <motion.div
                layoutId="galleryTabIndicator"
                className="absolute inset-0 bg-gray-900 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">Wszystkie ({HIT_FIT_IMAGES.length + PIWNICA_IMAGES.length})</span>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => handleTabChange('hit-fit')}
            className={`relative px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'hit-fit'
                ? 'text-white shadow-lg'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
            }`}
          >
            {activeTab === 'hit-fit' && (
              <motion.div
                layoutId="galleryTabIndicator"
                className="absolute inset-0 bg-emerald-700 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">Hit Fit ({HIT_FIT_IMAGES.length})</span>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => handleTabChange('piwnica')}
            className={`relative px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'piwnica'
                ? 'text-white shadow-lg'
                : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
            }`}
          >
            {activeTab === 'piwnica' && (
              <motion.div
                layoutId="galleryTabIndicator"
                className="absolute inset-0 bg-gradient-to-r from-amber-600 to-gold rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">Piwnica pod Żabą ({PIWNICA_IMAGES.length})</span>
          </motion.button>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {currentVisiblePhotos.map((item, idx) => (
              <GalleryPhotoCard
                key={item.src + idx}
                src={item.src}
                venue={item.venue}
                index={idx}
                onClick={() => setSelectedImageIndex(idx)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visiblePhotosCount < galleryItems.length && (
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisiblePhotosCount((prev) => prev + 16)}
              className="bg-gray-900 hover:bg-gradient-to-r hover:from-amber-600 hover:to-gold text-white px-9 py-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-xl"
            >
              Pokaż Więcej Zdjęć ({galleryItems.length - visiblePhotosCount} pozostało)
            </motion.button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 text-white select-none"
          >
            {/* Lightbox Header */}
            <div className="flex justify-between items-center z-10">
              <div className="flex items-center gap-3">
                <span className="bg-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
                  {galleryItems[selectedImageIndex]?.venue}
                </span>
                <span className="text-xs text-gray-300 font-medium">
                  {selectedImageIndex + 1} / {galleryItems.length}
                </span>
              </div>
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Zamknij"
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Lightbox Image & Navigation */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1))}
                className="absolute left-2 sm:left-6 z-10 p-3.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all backdrop-blur-md border border-white/20 shadow-xl"
                aria-label="Poprzednie zdjęcie"
              >
                <ChevronLeft size={28} />
              </motion.button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  src={galleryItems[selectedImageIndex]?.src}
                  alt="Enlarged gallery view"
                  className="max-h-[82vh] max-w-[92vw] object-contain rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImageIndex((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0))}
                className="absolute right-2 sm:right-6 z-10 p-3.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all backdrop-blur-md border border-white/20 shadow-xl"
                aria-label="Następne zdjęcie"
              >
                <ChevronRight size={28} />
              </motion.button>
            </div>

            {/* Lightbox Footer */}
            <div className="text-center text-xs text-gray-400 z-10 font-medium">
              Użyj strzałek na klawiaturze lub przycisków, aby płynnie nawigować
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

interface GalleryPhotoCardProps {
  key?: string | number;
  src: string;
  venue: string;
  index: number;
  onClick: () => void;
}

function GalleryPhotoCard({ src, venue, index, onClick }: GalleryPhotoCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={onClick}
      className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow bg-stone-200"
    >
      {/* Lightweight skeleton pulse while image is downloading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-stone-200 animate-pulse flex items-center justify-center text-stone-400">
          <ImageIcon size={24} className="opacity-40" />
        </div>
      )}

      <img 
        src={src} 
        alt={`Zdjęcie ${index + 1} - ${venue}`}
        className={`w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white">
        <div className="self-end">
          <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center">
            <Maximize2 size={16} className="drop-shadow" />
          </div>
        </div>
        <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md self-start border border-white/20">
          {venue}
        </span>
      </div>
    </motion.div>
  );
}
