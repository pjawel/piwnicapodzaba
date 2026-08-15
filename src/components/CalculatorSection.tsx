import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, Users, Calendar, Sparkles, Check, Phone, ArrowRight, PartyPopper, CheckCircle2 
} from 'lucide-react';

export function CalculatorSection() {
  const [eventType, setEventType] = useState('Urodziny / Jubileusz');
  const [guestCount, setGuestCount] = useState(40);
  const [preferredVenue, setPreferredVenue] = useState<'hit-fit' | 'piwnica' | 'any'>('any');
  const [selectedSeason, setSelectedSeason] = useState('Weekend 2026/2027');

  const eventTypes = [
    'Urodziny / Jubileusz',
    'Chrzciny / Komunia',
    'Wesele / Przyjęcie Weselne',
    'Spotkanie Firmowe / Bankiet',
    'Inna uroczystość rodzinna',
  ];

  const seasons = [
    'Wiosna 2026',
    'Lato 2026',
    'Jesień 2026',
    'Zima 2026 / 2027',
    'Rok 2027',
  ];

  // Recommendation logic
  const recommendedVenue = guestCount > 55 ? 'Hit Fit (do 90 osób)' : (preferredVenue === 'hit-fit' ? 'Hit Fit' : preferredVenue === 'piwnica' ? 'Piwnica pod Żabą' : 'Hit Fit lub Piwnica pod Żabą');

  return (
    <section id="kalkulator" className="py-20 md:py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/20 text-gold-light border border-gold/30 text-xs font-bold uppercase tracking-wider">
            <Calculator size={14} className="text-gold" /> Wycena & Dobór Sali
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            Zaplanuj Swoje Przyjęcie
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-light">
            Wybierz rodzaj imprezy oraz liczbę gości, a my podpowiemy najlepszą salę i przygotujemy wstępne szczegóły oferty.
          </p>
        </motion.div>

        {/* Interactive Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8"
        >
          {/* Step 1: Event Type */}
          <div className="space-y-3">
            <label className="text-xs uppercase font-bold tracking-widest text-gold-light flex items-center gap-2">
              <PartyPopper size={16} /> 1. Wybierz rodzaj uroczystości:
            </label>
            <div className="grid sm:grid-cols-3 gap-2.5">
              {eventTypes.map((type) => (
                <motion.button
                  key={type}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setEventType(type)}
                  className={`p-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-left transition-all border ${
                    eventType === type 
                      ? 'bg-gradient-to-r from-amber-600 to-gold text-white border-white/40 shadow-lg' 
                      : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{type}</span>
                    {eventType === type && <Check size={14} className="shrink-0" />}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Step 2: Guest Count Slider */}
          <div className="space-y-4 pt-2">
            <div className="flex justify-between items-center">
              <label className="text-xs uppercase font-bold tracking-widest text-gold-light flex items-center gap-2">
                <Users size={16} /> 2. Szacowana liczba gości:
              </label>
              <div className="px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold-light font-serif font-bold text-lg">
                {guestCount} osób
              </div>
            </div>

            <input 
              type="range" 
              min={15} 
              max={90} 
              step={5} 
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="w-full accent-gold h-2 bg-white/20 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-gray-400 font-medium">
              <span>15 osób (kameralne)</span>
              <span>45 osób</span>
              <span>90 osób (maksymalna pojemność)</span>
            </div>
          </div>

          {/* Step 3: Preferred Season / Date */}
          <div className="space-y-3 pt-2">
            <label className="text-xs uppercase font-bold tracking-widest text-gold-light flex items-center gap-2">
              <Calendar size={16} /> 3. Planowany okres:
            </label>
            <div className="flex flex-wrap gap-2">
              {seasons.map((season) => (
                <button
                  key={season}
                  type="button"
                  onClick={() => setSelectedSeason(season)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    selectedSeason === season
                      ? 'bg-gold text-white border-gold shadow-md'
                      : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                  }`}
                >
                  {season}
                </button>
              ))}
            </div>
          </div>

          {/* Result Box */}
          <div className="pt-4 border-t border-white/15">
            <div className="bg-gradient-to-r from-amber-500/20 via-gold/20 to-amber-600/20 border border-gold/40 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-left w-full md:w-auto">
                <div className="text-xs uppercase tracking-widest font-bold text-amber-300 flex items-center gap-1.5">
                  <Sparkles size={14} /> Rekomendowany wybór:
                </div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Sala: <span className="text-gold-light">{recommendedVenue}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300">
                  Przyjęcie: <strong className="text-white">{eventType}</strong> dla <strong className="text-white">{guestCount} osób</strong> ({selectedSeason})
                </p>
              </div>

              <motion.a
                href={`tel:661637770`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto shrink-0 bg-gradient-to-r from-amber-600 via-gold to-yellow-600 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider shadow-2xl flex items-center justify-center gap-2.5 border border-white/30"
              >
                <Phone size={16} />
                <span>Zadzwoń po wycenę: 661 637 770</span>
              </motion.a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
