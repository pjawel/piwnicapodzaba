import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Building2, Sparkles, CheckCircle2, Phone, Calendar, Users, 
  UtensilsCrossed, ArrowRight, ShieldCheck, Flame, FileText, Briefcase, Download, ChefHat
} from 'lucide-react';
import { HIT_FIT_IMAGES, PIWNICA_IMAGES, CONTACT_PHONE_FORMATTED } from '../data';
import { downloadMenuPdf } from '../utils/generateMenuPdf';
import { SeoHead } from '../components/SeoHead';

export function CorporateEventsPage() {
  const corporatePhotos = [
    HIT_FIT_IMAGES[3],
    HIT_FIT_IMAGES[6],
    HIT_FIT_IMAGES[8],
    PIWNICA_IMAGES[1],
    PIWNICA_IMAGES[3],
    PIWNICA_IMAGES[5],
  ];

  return (
    <div className="bg-stone-50 text-gray-900 min-h-screen pt-24 pb-20">
      <SeoHead
        title="Imprezy Firmowe i Bankiety Lubin | Wigilie, Integracje"
        description="Spotkania biznesowe, bankiety firmowe, wigilie pracownicze i imprezy integracyjne w Lubinie. Projektor, nagłośnienie, strefa networkingowa, faktura VAT oraz dedykowany catering."
        keywords={['imprezy firmowe Lubin', 'bankiety firmowe Lubin', 'wigilia firmowa Lubin', 'sala konferencyjna Lubin', 'integracja firmowa Lubin']}
        canonicalPath="/imprezy-firmowe"
      />
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HIT_FIT_IMAGES[3]} 
            alt="Imprezy firmowe i bankiety w Lubinie" 
            className="w-full h-full object-cover opacity-35 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
            <Building2 size={14} className="text-amber-400" /> Dla Biznesu i Zespołów
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Imprezy Firmowe i Bankiety w Lubinie
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed">
            Spotkania integracyjne, wigilie pracownicze, jubileusze przedsiębiorstw i biesiady z grillem. Pełna oprawa kulinarna, faktury VAT i profesjonalny serwis.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href="tel:661637770"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-amber-900/30 transition-all hover:scale-105"
            >
              <Phone size={18} /> Zadzwoń: {CONTACT_PHONE_FORMATTED}
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-sm border border-white/20 transition-all"
            >
              <FileText size={18} /> Zobacz Ofertę Gastronomiczną
            </Link>
          </div>
        </div>
      </section>

      {/* Formats of Events */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-amber-700 uppercase tracking-widest text-xs font-bold block">
            Formaty Wydarzeń
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Co Możemy Zorganizować dla Twojej Firmy?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 font-bold">
              🎄
            </div>
            <h4 className="text-lg font-serif font-bold text-stone-900">Wigilie i Spotkania Świąteczne</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Tradycyjne polskie menu wigilijne: barszcz z uszkami, karp, ryba po grecku, pierogi z kapustą i grzybami, kutia oraz ciasta domowe.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 font-bold">
              🥩
            </div>
            <h4 className="text-lg font-serif font-bold text-stone-900">Integracje z Grillem (Hit Fit)</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Biesiady na zadaszonym tarasie z karkówką z grilla, kiełbaskami, szaszłykami, pieczonymi ziemniaczkami i zimnymi napojami.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 font-bold">
              🏆
            </div>
            <h4 className="text-lg font-serif font-bold text-stone-900">Jubileusze & Bankiety</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Oficjalne uroczystości firmowe z parkietem, nagłośnieniem pod przemówienia, wykwintnym menu i płonącym udźcem wieprzowym.
            </p>
          </div>
        </div>
      </section>

      {/* Business Perks */}
      <section className="bg-stone-100 py-16 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-amber-800 uppercase tracking-widest text-xs font-bold block">
              Korzyści dla Firm
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Dlaczego Przedsiębiorcy z Lubina Wybierają Nas?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-2.5">
              <ShieldCheck size={28} className="text-emerald-700" />
              <h4 className="font-serif font-bold text-stone-900 text-base">Faktury VAT</h4>
              <p className="text-stone-600 text-xs leading-relaxed">
                Przejrzyste rozliczenia, legalna działalność i szybkie wystawienie faktury VAT na firmę.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-2.5">
              <Users size={28} className="text-amber-700" />
              <h4 className="font-serif font-bold text-stone-900 text-base">Sala na Wyłączność</h4>
              <p className="text-stone-600 text-xs leading-relaxed">
                Żadnych innych gości w lokalu podczas Waszej imprezy. Dyskrecja i komfort rozmów w zespole.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-2.5">
              <UtensilsCrossed size={28} className="text-amber-700" />
              <h4 className="font-serif font-bold text-stone-900 text-base">Elastyczne Menu</h4>
              <p className="text-stone-600 text-xs leading-relaxed">
                Bufet szwedzki, obiad serwowany, stół wiejski lub potrawy z grilla dopasowane do budżetu.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-2.5">
              <Calendar size={28} className="text-emerald-700" />
              <h4 className="font-serif font-bold text-stone-900 text-base">Dedykowany Opiekun</h4>
              <p className="text-stone-600 text-xs leading-relaxed">
                Pomoc w doborze sali, godzin i harmonogramu imprezy. Bezstresowa realizacja wydarzenia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Menu Showcase & Button */}
      <section className="bg-white py-16 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-stone-100 rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl space-y-8 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mx-auto">
              <ChefHat size={15} className="text-amber-700" /> Kulinarna Oprawa dla Biznesu
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-snug">
                Elastyczne Menu Bankietowe i Catering Firmowy
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                Dopasowujemy formę podania do specyfiki Waszego wydarzenia: uroczysty obiad serwowany, bogaty bufet szwedzki typu finger-food, stół wiejski z tradycyjnymi wyrobami lub biesiada grillowa na zadaszonym tarasie sali Hit Fit.
              </p>
            </div>

            {/* Highlights pills */}
            <div className="flex flex-wrap justify-center gap-3 text-xs text-stone-700 font-medium pt-2">
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-stone-200 shadow-sm">
                <ShieldCheck size={14} className="text-emerald-600" /> Faktura VAT na firmę
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-stone-200 shadow-sm">
                <CheckCircle2 size={14} className="text-emerald-600" /> Sala na wyłączność bez obcych gości
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-stone-200 shadow-sm">
                <CheckCircle2 size={14} className="text-emerald-600" /> Kawa z ekspresu & bufet napojów bez limitu
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-stone-200 shadow-sm">
                <CheckCircle2 size={14} className="text-emerald-600" /> Zróżnicowane opcje dań (w tym wege)
              </span>
            </div>

            {/* Action Buttons to View Menu and Download PDF */}
            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-white font-bold text-sm tracking-wide shadow-xl shadow-amber-900/20 transition-all hover:scale-105"
              >
                <span>Zobacz Pełną Kartę Menu & Pakiety</span>
                <ArrowRight size={17} />
              </Link>

              <button
                type="button"
                onClick={downloadMenuPdf}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
              >
                <Download size={16} className="text-amber-400" />
                <span>Pobierz Ofertę Menu w PDF</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="text-amber-800 uppercase tracking-widest text-xs font-bold block">
              Galeria Wnętrz
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              Przestrzenie Bankietowe
            </h2>
          </div>
          <Link
            to="/galeria"
            className="text-amber-800 hover:text-amber-900 font-bold text-sm inline-flex items-center gap-1.5"
          >
            Zobacz pełną galerię <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {corporatePhotos.map((src, index) => (
            <div key={index} className="aspect-4/3 rounded-xl overflow-hidden shadow-sm bg-stone-200 group">
              <img 
                src={src} 
                alt={`Impreza firmowa zdjęcie ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="bg-stone-900 text-white rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
            Skontaktuj się w Sprawie Imprezy Firmowej
          </h3>
          <p className="text-stone-300 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Przygotujemy dla Państwa indywidualną ofertę cenową i propozycję menu dopasowaną do budżetu i liczby pracowników.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href="tel:661637770"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-bold text-sm tracking-wide shadow-lg transition-transform hover:scale-105"
            >
              <Phone size={18} /> Zadzwoń: {CONTACT_PHONE_FORMATTED}
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
            >
              Formularz Kontaktu B2B
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
