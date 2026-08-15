import { motion } from 'motion/react';
import { Utensils, Sparkles, MapPin, ChevronRight, Users, TreePine, Car, Heart } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="o-nas" className="py-20 md:py-28 bg-white relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 text-gold-dark font-bold text-xs uppercase tracking-[0.2em] border border-gold/20"
          >
            <Heart size={14} className="text-gold fill-gold/20" /> Organizujemy Niezapomniane Przyjęcia
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-gray-900 font-bold">
            Dwie Unikalne Sale Bankietowe na Każdą Okazję
          </h2>
          
          {/* Animated Gold Line */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-amber-500 to-gold mx-auto rounded-full mt-4" 
          />
        </motion.div>

        {/* 2 Main Venue Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Piwnica Pod Żabą Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-gradient-to-b from-amber-50/40 via-off-white to-white rounded-3xl p-8 lg:p-10 border border-amber-200/60 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-gold animate-ping" /> Lokal #1
                  </span>
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mt-1.5 group-hover:text-gold-dark transition-colors">
                    Piwnica pod Żabą
                  </h3>
                </div>
                <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm">
                  Niezwykły Klimat
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed font-light mb-6 text-base sm:text-lg">
                Piwnica pod Żabą słynie z unikalnego charakteru, ciepłej atmosfery i wyśmienitej tradycyjnej kuchni. Dbamy o estetykę, domową oprawę kulinarną oraz dopracowany w każdym detalu wystrój.
              </p>

              <div className="space-y-3.5 mb-8">
                <motion.div 
                  whileHover={{ x: 5 }} 
                  className="flex items-center gap-3.5 text-sm text-gray-700 font-medium"
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-gold-dark flex items-center justify-center shrink-0">
                    <Utensils size={16} />
                  </div>
                  <span>Bogate i wykwintne menu przyjęć okolicznościowych</span>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }} 
                  className="flex items-center gap-3.5 text-sm text-gray-700 font-medium"
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-gold-dark flex items-center justify-center shrink-0">
                    <Sparkles size={16} />
                  </div>
                  <span>Eleganckie aranżacje stołów, oświetlenie i wystrój</span>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }} 
                  className="flex items-center gap-3.5 text-sm text-gray-700 font-medium"
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-gold-dark flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <span>Lubin, ul. Orla 39a (wygodny dojazd i parking)</span>
                </motion.div>
              </div>
            </div>

            <motion.a 
              href="#piwnica-pod-zaba" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-between w-full bg-white group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-gold group-hover:text-white text-gray-900 border border-gray-200 group-hover:border-gold rounded-2xl px-6 py-4 font-bold text-sm transition-all shadow-md group-hover:shadow-xl"
            >
              <span>Szczegóły & Prezentacja Piwnicy</span>
              <ChevronRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Hit Fit Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-gradient-to-b from-emerald-50/40 via-off-white to-white rounded-3xl p-8 lg:p-10 border border-emerald-200/60 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> Lokal #2
                  </span>
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mt-1.5 group-hover:text-emerald-700 transition-colors">
                    Hit Fit
                  </h3>
                </div>
                <span className="bg-emerald-100 text-emerald-900 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                  <Users size={14} /> Dla 90 osób
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed font-light mb-6 text-base sm:text-lg">
                Nowoczesna i przestronna sala bankietowa przystosowana do przyjęć do 90 osób. Posiada duży taras wypoczynkowy z grillem oraz bezpłatny parking dla wszystkich gości.
              </p>

              <div className="space-y-3.5 mb-8">
                <motion.div 
                  whileHover={{ x: 5 }} 
                  className="flex items-center gap-3.5 text-sm text-gray-700 font-medium"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <TreePine size={16} />
                  </div>
                  <span>Przestronny taras & duży strefowy grill plenerowy</span>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }} 
                  className="flex items-center gap-3.5 text-sm text-gray-700 font-medium"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Car size={16} />
                  </div>
                  <span>Bezpłatny wygodny parking bezpośrednio przy lokalu</span>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }} 
                  className="flex items-center gap-3.5 text-sm text-gray-700 font-medium"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <span>Lubin, ul. Konstytucji 3 Maja 3 (duży parking & taras)</span>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }} 
                  className="flex items-center gap-3.5 text-sm text-gray-700 font-medium"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Utensils size={16} />
                  </div>
                  <span>Wyśmienita kuchnia, pyszne gorące kolacje i desery</span>
                </motion.div>
              </div>
            </div>

            <motion.a 
              href="#hit-fit" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-between w-full bg-white group-hover:bg-gradient-to-r group-hover:from-emerald-700 group-hover:to-emerald-600 group-hover:text-white text-gray-900 border border-gray-200 group-hover:border-emerald-600 rounded-2xl px-6 py-4 font-bold text-sm transition-all shadow-md group-hover:shadow-xl"
            >
              <span>Szczegóły & Prezentacja Hit Fit</span>
              <ChevronRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
