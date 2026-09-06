import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Heart, Sparkles, CheckCircle2, Phone, Calendar, Users, 
  Wine, Music, UtensilsCrossed, ArrowRight, ShieldCheck, Car, Flame, FileText, Download, ChefHat
} from 'lucide-react';
import { HIT_FIT_IMAGES, HIT_FIT_ADDRESS, CONTACT_PHONE_FORMATTED } from '../data';
import { downloadMenuPdf } from '../utils/generateMenuPdf';
import { SeoHead } from '../components/SeoHead';

export function WeddingsPage() {
  const weddingPhotos = [
    HIT_FIT_IMAGES[0],
    HIT_FIT_IMAGES[1],
    HIT_FIT_IMAGES[2],
    HIT_FIT_IMAGES[3],
    HIT_FIT_IMAGES[4],
    HIT_FIT_IMAGES[5],
  ];

  return (
    <div className="bg-stone-50 text-gray-900 min-h-screen pt-24 pb-20">
      <SeoHead
        title="Sala Weselna Lubin | Wesela i Przyjęcia Ślubne - Sala Hit Fit"
        description="Organizacja wesel i przyjęć weselnych w Lubinie na Sali Hit Fit (do 80-90 osób). Duży parkiet taneczny, pyszne menu weselne, klimatyzacja, brak korkowego i pełna oprawa."
        keywords={['sala weselna Lubin', 'wesele Lubin', 'przyjęcie weselne Lubin', 'wynajem sali na wesele Lubin', 'Hit Fit Lubin wesela', 'katering weselny Lubin']}
        canonicalPath="/wesela"
      />
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HIT_FIT_IMAGES[0]} 
            alt="Wesele w Sali Bankietowej Hit Fit Lubin" 
            className="w-full h-full object-cover opacity-35 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
            <Heart size={14} className="fill-amber-400 text-amber-400" /> Wymarzone Przyjęcie Weselne
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Wesela w Sali Bankietowej Hit Fit
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed">
            Niezapomniana noc z przestronnym parkietem do tańca, wyśmienitym menu i serdeczną obsługą dla przyjęć do 90 osób w Lubinie.
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
              <FileText size={18} /> Zobacz Pełne Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Important Venue Distinction Note */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-stone-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm uppercase tracking-wider">
              <ShieldCheck size={18} className="text-emerald-600" /> Ważna Informacja o Lokalu
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Przyjęcia weselne organizujemy wyłącznie w lokalu Hit Fit (do 90 osób)
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed max-w-2xl">
              Nasz drugi lokal, <strong>Piwnica pod Żabą</strong>, ze względu na swój kameralny charakter (do 40 gości), nie realizuje wesel. Sala <strong>Hit Fit</strong> przy ul. Konstytucji 3 Maja 3 zapewnia idealne warunki: parkiet, stół prezydialny, taras oraz duży bezpłatny parking.
            </p>
          </div>
          <Link
            to="/sale"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
          >
            Poznaj Salę Hit Fit <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Wedding Key Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-amber-700 uppercase tracking-widest text-xs font-bold block">
            Dlaczego Warto Nam Zaufać
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Wszystko, czego potrzebujesz w tym wyjątkowym dniu
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
              <Users size={24} />
            </div>
            <h4 className="text-lg font-serif font-bold text-stone-900">Komfort do 90 Gości</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Optymalne rozstawienie stołów prostokątnych, honorowy stół Pary Młodej oraz zachowanie pełnej swobody poruszania się i tańca.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
              <Music size={24} />
            </div>
            <h4 className="text-lg font-serif font-bold text-stone-900">Przestronny Parkiet</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Dedykowane miejsce dla zespołu muzycznego lub DJ-a z odpowiednim oświetleniem imprezowym i akustyką.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
              <Wine size={24} />
            </div>
            <h4 className="text-lg font-serif font-bold text-stone-900">Własny Alkohol bez Korkowego</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Możliwość wniesienia własnego alkoholu bez opłaty korkowej (przy zakupie 10 sztuk Coca-Cola 1L w lokalu).
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
              <Flame size={24} />
            </div>
            <h4 className="text-lg font-serif font-bold text-stone-900">Taras i Grill</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Taras wypoczynkowy, na którym goście mogą zaczerpnąć świeżego powietrza. Dostęp do grilla.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
              <Car size={24} />
            </div>
            <h4 className="text-lg font-serif font-bold text-stone-900">Duży Bezpłatny Parking</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Wygodny, bezpłatny parking bezpośrednio przed budynkiem dla wszystkich przybyłych gości weselnych.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
              <UtensilsCrossed size={24} />
            </div>
            <h4 className="text-lg font-serif font-bold text-stone-900">Doświadczenie Kulinarne</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Wieloletnie doświadczenie w sztuce kulinarnej i obsłudze przyjęć weselnych.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding Menu Showcase & Button */}
      <section className="bg-stone-100 py-16 border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl space-y-8 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mx-auto">
              <UtensilsCrossed size={15} className="text-amber-700" /> Kulinarna Oprawa Wesela
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-snug">
                Wyśmienita Tradycyjna Kuchnia na Twoim Weselu
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                Oferujemy bogaty wybór zup, 4 rodzaje mięs obiadowych, surówki, zimny stół oraz aż <strong>14 propozycji gorących kolacji</strong> (m.in. płonący udziec wieprzowy, tradycyjny barszcz z krokietem, flaczki).
              </p>
            </div>

            {/* Culinary highlights pills */}
            <div className="flex flex-wrap justify-center gap-3 text-xs text-stone-700 font-medium pt-2">
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <CheckCircle2 size={14} className="text-emerald-600" /> Własny alkohol bez opłaty korkowej
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <CheckCircle2 size={14} className="text-emerald-600" /> Kawa z ekspresu & herbata bez limitu
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <CheckCircle2 size={14} className="text-emerald-600" /> 14 gorących kolacji do wyboru
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <CheckCircle2 size={14} className="text-emerald-600" /> Indywidualne dopasowanie dań
              </span>
            </div>

            {/* Propozycje menu weselnego */}
            <div className="pt-4 text-left border-t border-stone-200/80 space-y-4">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block text-center">
                Wybierz propozycję z menu:
              </span>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link
                  to="/menu?uroczystosc=wesela&pakiet=hit-fit-prop-1"
                  className="bg-stone-50 hover:bg-amber-50/70 p-4 rounded-2xl border border-stone-200 hover:border-amber-400 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900 inline-block">
                      Propozycja nr 1
                    </span>
                    <h4 className="font-serif font-bold text-stone-900 text-sm group-hover:text-amber-900">
                      Schab z camembertem & finger food
                    </h4>
                    <p className="text-stone-500 text-xs line-clamp-2">
                      Schab z żurawiną, drób w panierce serowej, karczek w sosie, kluski śląskie, półmisek finger food.
                    </p>
                  </div>
                  <span className="pt-3 text-amber-800 font-bold text-xs inline-flex items-center gap-1">
                    Zobacz to menu <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/menu?uroczystosc=wesela&pakiet=hit-fit-prop-3"
                  className="bg-stone-50 hover:bg-amber-50/70 p-4 rounded-2xl border border-stone-200 hover:border-amber-400 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 inline-block">
                      Propozycja nr 3
                    </span>
                    <h4 className="font-serif font-bold text-stone-900 text-sm group-hover:text-amber-900">
                      De Volay, Szwajcar & Schabowy
                    </h4>
                    <p className="text-stone-500 text-xs line-clamp-2">
                      Krokiety ziemniaczane, warzywa w sosie holenderskim, pieczone mięsa z ćwikłą i tortille tzatziki.
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
                      Gorące kolacje
                    </h4>
                    <p className="text-stone-500 text-xs line-clamp-2">
                      Sprawdź pełen wybór ciepłych kolacji serwowanych gościom weselnym po północy.
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
                to="/menu?uroczystosc=wesela"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-white font-bold text-sm tracking-wide shadow-xl shadow-amber-900/20 transition-all hover:scale-105"
              >
                <span>Otwórz Menu Weselne w Karcie Dań</span>
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

      {/* Wedding Photo Showcase */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="text-amber-800 uppercase tracking-widest text-xs font-bold block">
              Galeria Wnętrz Weselnych
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              Aranżacje w Sali Hit Fit
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
          {weddingPhotos.map((src, index) => (
            <div key={index} className="aspect-4/3 rounded-xl overflow-hidden shadow-sm bg-stone-200 group">
              <img 
                src={src} 
                alt={`Wesele w Sali Hit Fit zdjęcie ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 text-white rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
              Zapytaj o Wolny Termin Wesela
            </h3>
            <p className="text-stone-300 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
              Zapraszamy na spotkanie w lokalu Hit Fit (ul. Konstytucji 3 Maja 3, Lubin). Chętnie pokażemy salę, omówimy szczegóły i przygotujemy indywidualną kalkulację.
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
                Przejdź do Formularza Kontaktu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
