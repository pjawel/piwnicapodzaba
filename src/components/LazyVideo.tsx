import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Film } from 'lucide-react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
}

export function LazyVideo({
  src,
  poster,
  title,
  className = "w-full h-auto max-h-[500px] object-cover"
}: LazyVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/20 ring-4 ring-gold/20"
      >
        <video 
          src={src} 
          controls 
          autoPlay 
          playsInline
          preload="metadata"
          className={className}
        >
          Twoja przeglądarka nie obsługuje odtwarzacza wideo.
        </video>
      </motion.div>
    );
  }

  return (
    <motion.div 
      whileHover={{ scale: 1.015, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onClick={() => setIsPlaying(true)}
      className="relative rounded-3xl overflow-hidden shadow-xl bg-black border border-white/15 cursor-pointer group flex items-center justify-center transition-colors duration-300 hover:border-gold/60 ring-1 ring-white/10 hover:ring-4 hover:ring-gold/30"
    >
      {poster ? (
        <img 
          src={poster} 
          alt={title || "Odtwórz wideo"} 
          className="w-full h-auto max-h-[500px] object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center" />
      )}
      
      {/* Dark overlay & radial glow */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
        
        {/* Animated Radar Pulse Rings */}
        <div className="relative flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.4, 1.8], opacity: [0.6, 0.3, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut" }}
            className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold/40"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1.6], opacity: [0.8, 0.4, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, delay: 0.4, ease: "easeOut" }}
            className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold/50"
          />
          
          <motion.div 
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-amber-400 via-gold to-yellow-600 text-white flex items-center justify-center shadow-2xl border-2 border-white/80 backdrop-blur-md z-10"
          >
            <Play size={32} className="ml-1 fill-white text-white drop-shadow-md" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-2xl text-xs sm:text-sm text-white/95 font-medium border border-white/15 flex items-center justify-between shadow-lg">
        <span className="flex items-center gap-2 truncate">
          <Film size={16} className="text-gold shrink-0 animate-pulse" /> 
          <span className="truncate">{title || "Kliknij, aby odtworzyć wideo"}</span>
        </span>
        <span className="text-[11px] bg-gradient-to-r from-amber-500 to-gold text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider shrink-0 ml-2 shadow-sm">
          Odtwórz wideo
        </span>
      </div>
    </motion.div>
  );
}
