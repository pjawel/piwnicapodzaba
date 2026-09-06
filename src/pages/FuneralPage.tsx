import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  HeartHandshake, Coffee, Phone, Calendar, Users, 
  CheckCircle2, UtensilsCrossed, ArrowRight, ShieldCheck, Clock, FileText, Download, ChefHat
} from 'lucide-react';
import { PIWNICA_IMAGES, HIT_FIT_IMAGES, CONTACT_PHONE_FORMATTED } from '../data';
import { downloadMenuPdf } from '../utils/generateMenuPdf';
import { SeoHead } from '../components/SeoHead';

export function FuneralPage() {
  const funeralPhotos = [
    PIWNICA_IMAGES[1],
    PIWNICA_IMAGES[2],
    PIWNICA_IMAGES[4],
    HIT_FIT_IMAGES[1],
    HIT_FIT_IMAGES[4],
    HIT_FIT_IMAGES[7],
  ];

  return (
    <div className="bg-stone-50 text-gray-900 min-h-screen pt-24 pb-20">
      <SeoHead
        title="Stypy i Konsolacje Lubin | Organizacja Poczęstunku Pożegnalnego"
        description="Organizacja styp i konsolacji w Lubinie w godnej, spokojnej atmosferze. Szybka rezerwacja terminu, tradycyjne ciepłe dania obiadowe, ciasto, kawa i herbata bez limitu."
        keywords={['stypa Lubin', 'stypy Lubin', 'konsolacja Lubin', 'obiad po pogrzebie Lubin', 'organizacja stypy Lubin']}
        canonicalPath="/stypy"
      />
      {/* Hero Banner */}
      <section className="relative py-20 md:py-24 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={PIWNICA_IMAGES[1]} 
            alt="Organizacja styp w Lubinie - Piwnica pod Żabą i Hit Fit" 
            className="w-full h-full object-cover opacity-20 filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-900/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-800 text-stone-300 border border-stone-700 text-xs font-semibold uppercase tracking-widest">
            <HeartHandshake size={14} className="text-amber-400" /> Spokój, Szacunek i Dyskrecja
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Organizacja Styp i Konsolacji w Lubinie
          </h1>

          <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            Zdejmujemy z Państwa ciężar organizacyjny w tych trudnych chwilach. Zapewniamy spokojną atmosferę, smaczny dwudaniowy obiad oraz dyskretną, życzliwą obsługę.
          </p>

          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <a
              href="tel:661637770"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm tracking-wide shadow-lg transition-transform hover:scale-105"
            >
              <Phone size={18} /> Szybki Kontakt: {CONTACT_PHONE_FORMATTED}
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-sm border border-white/20 transition-all"
            >
              <FileText size={18} /> Zobacz Menu Konsolacyjne
            </Link>
          </div>
        </div>
      </section>

      {/* Speed of Organization Note */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider">
              <Clock size={16} /> Szybka Organizacja
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Możliwość organizacji konsolacji nawet z dnia na dzień
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed max-w-xl">
              Rozumiemy specyfikę sytuacji. Wystarczy jeden telefon pod numer <strong>661 637 770</strong>, aby ustalić liczbę gości, godzinę oraz menu.
            </p>
          </div>
          <a
            href="tel:661637770"
            className="shrink-0 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Zadzwoń teraz
          </a>
        </div>
      </section>

      {/* Venues Selection for Funerals */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 space-y-12">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-stone-500 uppercase tracking-widest text-xs font-bold block">
            Dwa Miejsca do Wyboru
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Dopasowanie do Liczby Uczestników
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-serif font-bold text-stone-900">Piwnica pod Żabą</h3>
              <span className="text-xs px-2.5 py-1 bg-amber-50 text-amber-900 rounded-full font-semibold">Do 40 osób</span>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed">
              Ciepłe, przytulne wnętrze przy ul. Orlej 39a. Zapewnia całkowitą prywatność i kameralną atmosferę w gronie najbliższej rodziny i przyjaciół.
            </p>
            <ul className="space-y-2 text-xs text-stone-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600" />
                <span>Odizolowana, cicha przestrzeń na wyłączność</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600" />
                <span>Przyjazna obsługa kelnerska</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-serif font-bold text-stone-900">Sala Bankietowa Hit Fit</h3>
              <span className="text-xs px-2.5 py-1 bg-emerald-50 text-emerald-900 rounded-full font-semibold">Do 90 osób</span>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed">
              Przestronny obiekt przy ul. Konstytucji 3 Maja 3. Polecany w przypadku większych pożegnań. Duży bezpłatny parking bezpośrednio pod budynkiem.
            </p>
            <ul className="space-y-2 text-xs text-stone-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600" />
                <span>Pojemność od 30 do 90 osób</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600" />
                <span>Wygodny dojazd i obszerny parking dla wszystkich gości</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Menu Showcase & Button */}
      <section className="bg-stone-100 py-16 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl space-y-8 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mx-auto">
              <ChefHat size={15} className="text-amber-700" /> Kulinarna Oprawa Konsolacji
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-snug">
                Ciepły Tradycyjny Obiad i Słodki Poczęstunek
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                Przygotowujemy pożywny dwudaniowy obiad: gorący domowy rosół, wybór tradycyjnych mięs z dodatkami (kluski śląskie, ziemniaki) i bukietem surówek, a także patery domowych ciast oraz nieograniczoną kawę i herbatę. Szczegółowe propozycje dań znajdą Państwo w pełnej karcie menu.
              </p>
            </div>

            {/* Highlights pills */}
            <div className="flex flex-wrap justify-center gap-3 text-xs text-stone-700 font-medium pt-2">
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <CheckCircle2 size={14} className="text-emerald-600" /> Tradycyjny dwudaniowy obiad
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <CheckCircle2 size={14} className="text-emerald-600" /> Kawa z ekspresu & herbata bez ograniczeń
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <CheckCircle2 size={14} className="text-emerald-600" /> Patery domowych ciast
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <CheckCircle2 size={14} className="text-emerald-600" /> Organizacja z dnia na dzień
              </span>
            </div>

            {/* Konkretne propozycje menu obiadowego na konsolację */}
            <div className="pt-4 text-left border-t border-stone-200/80 space-y-4">
              <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block text-center">
                Propozycje z karty dań:
              </span>
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-[11px] font-bold uppercase tracking-wider">
                    Dania obiadowe
                  </div>
                  <h4 className="text-xl font-serif font-bold text-stone-900">
                    Dania obiadowe
                  </h4>
                  <p className="text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
                    Wybór zup (domowy rosół z makaronem, żurek z jajkiem lub krem pomidorowy), soczyste mięsa (kotlet schabowy, de volay, rolada wieprzowa w sosie), ziemniaki, kluski śląskie, 3 świeże surówki oraz patera ciast z kawą i herbatą bez ograniczeń.
                  </p>
                </div>
                <Link
                  to="/menu?kategoria=obiad"
                  className="shrink-0 px-5 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Zobacz Dania Obiadowe</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Action Buttons to View Menu and Download PDF */}
            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <Link
                to="/menu?kategoria=obiad"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-white font-bold text-sm tracking-wide shadow-xl shadow-amber-900/20 transition-all hover:scale-105"
              >
                <span>Otwórz Menu Obiadowe w Karcie Dań</span>
                <ArrowRight size={17} />
              </Link>

              <button
                type="button"
                onClick={downloadMenuPdf}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
              >
                <Download size={16} className="text-amber-400" />
                <span>Pobierz menu w PDF</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Showcase */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="text-stone-500 uppercase tracking-widest text-xs font-bold block">
              Nasze Wnętrza
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Spokojne, Kameralne Przestrzenie
            </h2>
          </div>
          <Link
            to="/galeria"
            className="text-amber-800 hover:text-amber-900 font-bold text-sm inline-flex items-center gap-1.5 transition-colors"
          >
            Zobacz wszystkie zdjęcia w galerii <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {funeralPhotos.map((src, index) => (
            <div key={index} className="aspect-4/3 rounded-xl overflow-hidden shadow-sm bg-stone-200 group">
              <img
                src={src}
                alt={`Sala na konsolację zdjęcie ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-16 text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900">
          Jesteśmy do Państwa Dyspozycji
        </h3>
        <p className="text-stone-600 text-sm leading-relaxed max-w-xl mx-auto">
          Zadzwoń do nas w dowolnej chwili. Ustalimy wszystkie szczegóły tak, aby uroczystość przebiegła godnie i bez zbędnego stresu dla rodziny.
        </p>
        <div className="pt-2">
          <a
            href="tel:661637770"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-serif font-bold text-lg shadow-md transition-all hover:scale-105"
          >
            <Phone size={20} /> Zadzwoń: {CONTACT_PHONE_FORMATTED}
          </a>
        </div>
      </section>
    </div>
  );
}
