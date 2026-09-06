import { Link } from 'react-router-dom';
import { MenuSection } from '../components/MenuSection';
import { Wine, Coffee, Download, Phone, ShieldCheck } from 'lucide-react';
import { CONTACT_PHONE_FORMATTED } from '../data';
import { downloadMenuPdf } from '../utils/generateMenuPdf';
import { SeoHead } from '../components/SeoHead';

export function MenuPage() {
  return (
    <div className="bg-stone-50 text-gray-900 min-h-screen pt-24 pb-20">
      <SeoHead
        title="Karta Menu i Pakiety Bankietowe | Piwnica pod Żabą & Hit Fit Lubin"
        description="Pełne menu bankietowe sal Piwnica pod Żabą i Hit Fit w Lubinie: autorskie obiady, dania gorące, zimne przekąski, pakiety na chrzciny, wesela i urodziny oraz pobieranie oficjalnego PDF."
        keywords={['menu bankietowe Lubin', 'karta dań Lubin', 'catering weselny Lubin', 'obiad bankietowy Lubin', 'menu chrzciny Lubin', 'menu pdf']}
        canonicalPath="/menu"
      />
      {/* Top Welcome Banner */}
      <section className="bg-stone-950 text-white py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
            Autorska Kuchnia Bankietowa
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Karta Menu i Pakiety Przyjęć
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Wybierz gotowy pakiet na uroczystość (chrzciny, wesele, 18-stka, jubileusz) lub skomponuj własny zestaw z naszej bogatej karty dań gorących, obiadów i zimnych przystawek.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={downloadMenuPdf}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
            >
              <Download size={16} /> Pobierz menu w PDF
            </button>
            <a
              href="tel:661637770"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 transition-all"
            >
              <Phone size={16} /> Zadzwoń: {CONTACT_PHONE_FORMATTED}
            </a>
          </div>
        </div>
      </section>

      {/* Alcohol & Coffee Policy Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-stone-200 grid sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 shrink-0">
              <Wine size={20} />
            </div>
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-base">Własny Alkohol bez Korkowego</h4>
              <p className="text-stone-600 text-xs leading-relaxed mt-0.5">
                Nie pobieramy opłaty korkowej przy zakupie 10 sztuk napoju Coca-Cola 1L w lokalu.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 shrink-0">
              <Coffee size={20} />
            </div>
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-base">Kawa i Herbata bez Limitu</h4>
              <p className="text-stone-600 text-xs leading-relaxed mt-0.5">
                Świeżo mielona kawa z ekspresu, selekcja herbat i woda mineralna z cytryną dostępne przez całe przyjęcie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Interactive Menu Section */}
      <MenuSection />

      {/* Footer Navigation Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 text-center space-y-6">
        <h3 className="text-2xl font-serif font-bold text-stone-900">
          Chcesz Ułożyć Własny Zestaw Potraw?
        </h3>
        <p className="text-stone-600 text-sm max-w-xl mx-auto">
          Zadzwoń do Piotra Jaworskiego – wspólnie ustalimy menu idealnie trafiające w gusta Państwa gości.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:661637770"
            className="px-8 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            Zadzwoń: {CONTACT_PHONE_FORMATTED}
          </a>
          <Link
            to="/kontakt"
            className="px-8 py-3.5 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            Formularz Kontaktu
          </Link>
        </div>
      </section>
    </div>
  );
}
