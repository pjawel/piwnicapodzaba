import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, ChevronRight, Heart } from 'lucide-react';
import { FACEBOOK_URL, CONTACT_PHONE_FORMATTED, HIT_FIT_ADDRESS, PIWNICA_ADDRESS } from '../data';

export function Footer() {
  return (
    <footer className="bg-stone-950 text-white py-16 border-t border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                Piwnica pod Żabą <span className="text-amber-400">&</span> Hit Fit
              </span>
              <span className="text-xs text-stone-400 uppercase tracking-widest mt-1 block">
                Sale Bankietowe w Lubinie
              </span>
            </Link>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm font-light">
              Klasyczna oferta przyjęć okolicznościowych. Dwie wyjątkowe przestrzenie – Sala Hit Fit (do 90 osób) oraz klimatyczna Piwnica pod Żabą (do 40 osób).
            </p>
            <div className="pt-2">
              <a 
                href={FACEBOOK_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 border border-stone-800 text-stone-300 hover:text-blue-400 hover:border-blue-400 text-xs font-semibold transition-colors"
              >
                <Facebook size={14} /> Odwiedź nasz profil na Facebooku
              </a>
            </div>
          </div>
          
          {/* Uroczystości (Subpages) */}
          <div>
            <h4 className="font-serif text-base mb-4 text-amber-300 font-bold">Oferta Przyjęć</h4>
            <ul className="space-y-2 text-xs text-stone-400 font-medium">
              <li>
                <Link to="/wesela" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-amber-400" /> Wesela (Hit Fit do 90 os.)
                </Link>
              </li>
              <li>
                <Link to="/18-urodziny" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-amber-400" /> 18. Urodziny (Piwnica / Hit Fit)
                </Link>
              </li>
              <li>
                <Link to="/chrzciny-komunie" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-amber-400" /> Chrzciny i Komunie
                </Link>
              </li>
              <li>
                <Link to="/stypy" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-amber-400" /> Stypy i Konsolacje
                </Link>
              </li>
              <li>
                <Link to="/uroczystosci-rodzinne" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-amber-400" /> Uroczystości Rodzinne & Jubileusze
                </Link>
              </li>
              <li>
                <Link to="/imprezy-firmowe" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-amber-400" /> Imprezy Firmowe & Bankiety
                </Link>
              </li>
            </ul>
          </div>

          {/* Lokale i Menu */}
          <div>
            <h4 className="font-serif text-base mb-4 text-amber-300 font-bold">Przestrzenie & Menu</h4>
            <ul className="space-y-2 text-xs text-stone-400 font-medium">
              <li>
                <Link to="/sale" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-amber-400" /> Sala Hit Fit (do 90 osób)
                </Link>
              </li>
              <li>
                <Link to="/sale" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-amber-400" /> Sala Piwnica pod Żabą (do 40 osób)
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-amber-400" /> Karta Menu & Dania Gorące
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-amber-400" /> Galeria Zdjęć
                </Link>
              </li>
              <li>
                <Link to="/o-nas" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-amber-400" /> O Nas & Nasza Kuchnia
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Col */}
          <div>
            <h4 className="font-serif text-base mb-4 text-amber-300 font-bold">Kontakt & Rezerwacje</h4>
            <ul className="space-y-3 text-xs text-stone-400 font-medium">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone size={14} />
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider block">Telefon (Piotr Jaworski)</span>
                  <a href="tel:661637770" className="hover:text-white font-bold text-white transition-colors text-sm">
                    {CONTACT_PHONE_FORMATTED}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail size={14} />
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider block">E-mail</span>
                  <a href="mailto:pod.zaba39a@gmail.com" className="hover:text-white transition-colors">
                    pod.zaba39a@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider block">Adresy w Lubinie</span>
                  <p className="text-stone-300">1. {HIT_FIT_ADDRESS}</p>
                  <p className="text-stone-300">2. {PIWNICA_ADDRESS}</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
        
        <div className="border-t border-stone-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Piwnica pod Żabą & Sala Bankietowa Hit Fit. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-6">
            <Link to="/menu" className="hover:text-stone-400 transition-colors">Menu</Link>
            <Link to="/sale" className="hover:text-stone-400 transition-colors">Sale</Link>
            <Link to="/kontakt" className="hover:text-stone-400 transition-colors">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
