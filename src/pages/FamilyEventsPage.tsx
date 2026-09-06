import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Users, Sparkles, CheckCircle2, Phone, Calendar, Heart, 
  UtensilsCrossed, ArrowRight, ShieldCheck, Wine, Cake, FileText, Download, ChefHat
} from 'lucide-react';
import { HIT_FIT_IMAGES, PIWNICA_IMAGES, CONTACT_PHONE_FORMATTED } from '../data';
import { downloadMenuPdf } from '../utils/generateMenuPdf';
import { SeoHead } from '../components/SeoHead';

export function FamilyEventsPage() {
  const familyPhotos = [
    HIT_FIT_IMAGES[2],
    HIT_FIT_IMAGES[4],
    HIT_FIT_IMAGES[7],
    PIWNICA_IMAGES[2],
    PIWNICA_IMAGES[3],
    PIWNICA_IMAGES[6],
  ];

  return (
    <div className="bg-stone-50 text-gray-900 min-h-screen pt-24 pb-20">
      <SeoHead
        title="Imprezy Rodzinne i Jubileusze Lubin | Złote Gody, Urodziny"
        description="Przyjęcia rodzinne, rocznice ślubu, jubileusze i urodziny w Lubinie. Wybierz salę do 40 osób (Piwnica pod Żabą) lub do 80 osób (Hit Fit). Bogate menu, oprawa muzyczna i rodzinna atmosfera."
        keywords={['imprezy rodzinne Lubin', 'jubileusz Lubin', 'urodziny Lubin', 'rocznica ślubu Lubin', 'sala na imprezę rodzinną Lubin']}
        canonicalPath="/uroczystosci-rodzinne"
      />
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HIT_FIT_IMAGES[2]} 
            alt="Uroczystości rodzinne i jubileusze Lubin" 
            className="w-full h-full object-cover opacity-35 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
            <Heart size={14} className="text-amber-400" /> Razem z Najbliższymi
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Uroczystości Rodzinne i Jubileusze
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed">
            30, 40, 50, 60 i 70-te urodziny, rocznice ślubu, obiady i spotkania w ciepłym rodzinnym gronie. Wybierz salę Hit Fit (do 90 os.) lub przytulną Piwnicę pod Żabą (do 40 os.).
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href="tel:661637770"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-amber-900/30 transition-all hover:scale-105"
            >
              <Phone size={18} /> Zarezerwuj Termin: {CONTACT_PHONE_FORMATTED}
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-sm border border-white/20 transition-all"
            >
              <FileText size={18} /> Zobacz Menu Okolicznościowe
            </Link>
          </div>
        </div>
      </section>

      {/* Occasions Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-amber-700 uppercase tracking-widest text-xs font-bold block">
            Świętuj z Nami Każdy Sukces
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Jakie Uroczystości Organizujemy?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 font-bold">
              🎂
            </div>
            <h4 className="text-lg font-serif font-bold text-stone-900">Okrągłe Urodziny</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              30-tki, 40-tki, 50-tki, 60-tki, 70-tki i 80-tki. Zapewniamy parkiet, smaczne jedzenie i wspaniałą atmosferę do świętowania z przyjaciółmi i rodziną.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 font-bold">
              💍
            </div>
            <h4 className="text-lg font-serif font-bold text-stone-900">Rocznice Ślubu</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Złote, Srebrne i Rubinowe Gody. Uroczyste obiady z odnowieniem wspomnień, toastem szampańskim i ulubionymi tradycyjnymi potrawami.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 font-bold">
              👨‍👩‍👧‍👦
            </div>
            <h4 className="text-lg font-serif font-bold text-stone-900">Zjazdy Rodzinne</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Spotkania wielopokoleniowe, gdzie wszyscy mogą usiąść przy jednym wspólnym stole, porozmawiać i zjeść wyśmienity domowy posiłek.
            </p>
          </div>
        </div>
      </section>

      {/* Venues Comparison */}
      <section className="bg-stone-100 py-16 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-amber-800 uppercase tracking-widest text-xs font-bold block">
              Dopasowanie do Gości
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Wybierz Salę pod Styl Swojego Przyjęcia
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-serif font-bold text-stone-900">Piwnica pod Żabą</h3>
                <span className="text-xs px-3 py-1 bg-amber-100 text-amber-900 rounded-full font-bold">15–40 osób</span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                Klimatyczna, ceglana sala z intymnym klimatem. Doskonała na uroczystości, gdzie liczy się ciepła, kameralna atmosfera i swoboda rozmów.
              </p>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  <span>Ceglane ściany, klimatyczne ciepłe oświetlenie</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  <span>Klimatyzacja, parkiet do tańca</span>
                </li>
              </ul>
              <Link to="/sale" className="text-amber-800 hover:text-amber-900 font-bold text-sm inline-flex items-center gap-1.5">
                Zobacz Piwnicę <ArrowRight size={15} />
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-serif font-bold text-stone-900">Sala Hit Fit</h3>
                <span className="text-xs px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full font-bold">30–90 osób</span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                Duża, jasna przestrzeń bankietowa z tarasem i grillem. Idealna, gdy planujesz biesiadę z tańcami dla szerszego grona.
              </p>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  <span>Szeroki parkiet taneczny i taras z grillem</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  <span>Duży parking bezpośrednio pod drzwiami</span>
                </li>
              </ul>
              <Link to="/sale" className="text-emerald-800 hover:text-emerald-900 font-bold text-sm inline-flex items-center gap-1.5">
                Zobacz Hit Fit <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Family Events Menu Showcase & Button */}
      <section className="bg-stone-100 py-16 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl space-y-8 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mx-auto">
              <UtensilsCrossed size={15} className="text-amber-700" /> Kulinarna Oprawa Jubileuszy
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-snug">
                Domowa Kuchnia i Sprawdzone Smaki na Twoje Święto
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                Każdy jubileusz i spotkanie rodzinne zasługuje na wyjątkowy stół. Przygotowujemy tradycyjne zestawy obiadowe, wykwintne przekąski zimnego stołu oraz gorące dania serwowane w trakcie biesiady. Menu dopasowujemy do Państwa preferencji i budżetu.
              </p>
            </div>

            {/* Highlights pills */}
            <div className="flex flex-wrap justify-center gap-3 text-xs text-stone-700 font-medium pt-2">
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <Wine size={14} className="text-amber-700" /> Własny alkohol bez opłaty korkowej
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <Cake size={14} className="text-amber-700" /> Własny tort bez żadnych opłat (0 zł)
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <CheckCircle2 size={14} className="text-emerald-600" /> Kawa z ekspresu & herbata bez ograniczeń
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <CheckCircle2 size={14} className="text-emerald-600" /> Bogaty wybór dań obiadowych
              </span>
            </div>

            {/* Konkretne propozycje menu na uroczystości rodzinne */}
            <div className="pt-4 text-left border-t border-stone-200/80 space-y-4">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block text-center">
                Wybierz propozycję z menu:
              </span>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link
                  to="/menu?uroczystosc=urodziny&pakiet=hit-fit-prop-1"
                  className="bg-stone-50 hover:bg-amber-50/70 p-4 rounded-2xl border border-stone-200 hover:border-amber-400 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900 inline-block">
                      Propozycja nr 1
                    </span>
                    <h4 className="font-serif font-bold text-stone-900 text-sm group-hover:text-amber-900">
                      Schab z camembertem & Finger Food
                    </h4>
                    <p className="text-stone-500 text-xs line-clamp-2">
                      Schab z żurawiną, drób w panierce serowej, karczek w sosie, kluski śląskie, półmisek rozmaitości.
                    </p>
                  </div>
                  <span className="pt-3 text-amber-800 font-bold text-xs inline-flex items-center gap-1">
                    Zobacz to menu <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/menu?uroczystosc=urodziny&pakiet=hit-fit-prop-3"
                  className="bg-stone-50 hover:bg-amber-50/70 p-4 rounded-2xl border border-stone-200 hover:border-amber-400 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 inline-block">
                      Propozycja nr 3
                    </span>
                    <h4 className="font-serif font-bold text-stone-900 text-sm group-hover:text-amber-900">
                      Szwajcar, De Volay & Krokiety
                    </h4>
                    <p className="text-stone-500 text-xs line-clamp-2">
                      Warzywa w sosie holenderskim, tortille tzatziki, sałatka brokułowa i placuszki ogrodowe.
                    </p>
                  </div>
                  <span className="pt-3 text-amber-800 font-bold text-xs inline-flex items-center gap-1">
                    Zobacz to menu <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/menu?kategoria=gorace-kolacje"
                  className="bg-stone-50 hover:bg-amber-50/70 p-4 rounded-2xl border border-stone-200 hover:border-amber-400 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-200 text-amber-950 inline-block">
                      Gorące kolacje
                    </span>
                    <h4 className="font-serif font-bold text-stone-900 text-sm group-hover:text-amber-900">
                      Barszczyk z krokietem, flaczki, gulasz
                    </h4>
                    <p className="text-stone-500 text-xs line-clamp-2">
                      14 ciepłych pozycji nocnych i biesiadnych serwowanych w trakcie trwania przyjęcia.
                    </p>
                  </div>
                  <span className="pt-3 text-amber-800 font-bold text-xs inline-flex items-center gap-1">
                    Zobacz kolacje gorące <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Action Buttons to View Menu and Download PDF */}
            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <Link
                to="/menu?uroczystosc=urodziny"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-white font-bold text-sm tracking-wide shadow-xl shadow-amber-900/20 transition-all hover:scale-105"
              >
                <span>Otwórz Menu Przyjęć Rodzinnych</span>
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

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="text-amber-800 uppercase tracking-widest text-xs font-bold block">
              Fotorelacja
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              Nasze Sale Podczas Przyjęć
            </h2>
          </div>
          <Link
            to="/galeria"
            className="text-amber-800 hover:text-amber-900 font-bold text-sm inline-flex items-center gap-1.5"
          >
            Pełna galeria zdjęć <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {familyPhotos.map((src, index) => (
            <div key={index} className="aspect-4/3 rounded-xl overflow-hidden shadow-sm bg-stone-200 group">
              <img 
                src={src} 
                alt={`Przyjęcie rodzinne zdjęcie ${index + 1}`} 
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
            Zaplanuj Niezapomniany Jubileusz
          </h3>
          <p className="text-stone-300 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Zadzwoń do nas i opowiedz o swoim pomyśle na uroczystość. Dobierzemy salę, menu i zadbamy o każdy szczegół przyjęcia.
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
              Napisz Wiadomość
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
