import { motion } from 'motion/react';
import { Facebook, Quote, Star, ArrowRight } from 'lucide-react';
import { FACEBOOK_REVIEWS, FACEBOOK_REVIEWS_URL } from '../data';

export function ReviewsSection() {
  return (
    <section id="opinie" className="py-20 md:py-24 bg-gradient-to-br from-amber-700 via-gold-dark to-yellow-700 text-white relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/25">
            <Facebook size={14} className="text-blue-300 fill-blue-300" /> Autentyczne Opinie
          </div>
          <h3 className="text-3xl md:text-5xl font-serif font-bold">Opinie naszych gości z Facebooka</h3>
          <p className="text-base sm:text-lg opacity-95 max-w-2xl mx-auto font-light leading-relaxed">
            Przeczytaj autentyczne recenzje naszych Klientów z profilu Facebook i zobacz, dlaczego warto zorganizować przyjęcie właśnie u nas.
          </p>
        </motion.div>

        {/* Facebook Reviews Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {FACEBOOK_REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-xl text-left hover:bg-white/20 transition-all group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-1 text-amber-200">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-300 text-amber-300" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/90 bg-white/15 px-3 py-1 rounded-full font-semibold">
                    <Facebook size={12} className="text-blue-300 fill-blue-300" /> Facebook
                  </div>
                </div>
                
                <Quote size={28} className="text-white/40 mb-3 group-hover:text-amber-200 transition-colors" />
                
                <p className="text-white text-base font-serif leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/90">
                <span className="font-bold tracking-wide">{review.author}</span>
                <span className="text-amber-200 font-semibold">Poleca na FB</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.a 
            href={FACEBOOK_REVIEWS_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 bg-white text-gray-950 px-10 py-4 rounded-full font-bold shadow-2xl hover:bg-amber-50 transition-all text-sm uppercase tracking-wider group"
          >
            <span>Zobacz Wszystkie Opinie na Facebooku</span>
            <Facebook size={18} className="text-blue-600 group-hover:scale-110 transition-transform fill-blue-600" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
