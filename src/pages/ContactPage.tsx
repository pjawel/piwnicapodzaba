import { ContactSection } from '../components/ContactSection';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { CONTACT_PHONE_FORMATTED, HIT_FIT_ADDRESS, PIWNICA_ADDRESS } from '../data';
import { SeoHead } from '../components/SeoHead';

export function ContactPage() {
  return (
    <div className="bg-stone-50 text-gray-900 min-h-screen pt-24 pb-20">
      <SeoHead
        title="Kontakt i Rezerwacja Sali Lubin | Piwnica pod Żabą & Hit Fit"
        description="Skontaktuj się z nami, aby zarezerwować termin na wesele, 18-stkę, chrzciny lub imprezę firmową w Lubinie. Tel: 661 637 770. Adresy: ul. Parkowa 1 oraz ul. Odrodzenia 28b."
        keywords={['kontakt Piwnica pod Żabą', 'rezerwacja sali Lubin', 'telefon sala weselna Lubin', 'Piotr Jaworski kontakt']}
        canonicalPath="/kontakt"
      />
      {/* Top Banner */}
      <section className="bg-stone-950 text-white py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
            Rezerwacje & Informacje
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Kontakt i Rezerwacja Terminu
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Chętnie odpowiemy na wszystkie pytania, sprawdzimy dostępność terminu w kalendarzu i umówimy się na spotkanie w lokalu w Lubinie.
          </p>

          <div className="pt-2">
            <a
              href="tel:661637770"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-amber-400 text-white font-serif font-bold text-lg shadow-xl shadow-amber-900/30 transition-all hover:scale-105"
            >
              <Phone size={22} /> Zadzwoń: {CONTACT_PHONE_FORMATTED}
            </a>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <ContactSection />
    </div>
  );
}
