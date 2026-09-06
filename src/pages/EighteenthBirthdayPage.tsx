import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  PartyPopper, Sparkles, Music, Wine, CheckCircle2, Phone, 
  Flame, Users, ArrowRight, ShieldCheck, Pizza, UtensilsCrossed, FileText, Download, ChefHat
} from 'lucide-react';
import { PIWNICA_IMAGES, HIT_FIT_IMAGES, CONTACT_PHONE_FORMATTED } from '../data';
import { downloadMenuPdf } from '../utils/generateMenuPdf';
import { SeoHead } from '../components/SeoHead';

export function EighteenthBirthdayPage() {
  const birthdayPhotos = [
    PIWNICA_IMAGES[0],
    PIWNICA_IMAGES[1],
    PIWNICA_IMAGES[2],
    PIWNICA_IMAGES[3],
    HIT_FIT_IMAGES[6],
    HIT_FIT_IMAGES[8],
  ];

  return (
    <div className="bg-stone-50 text-gray-900 min-h-screen pt-24 pb-20">
      <SeoHead
        title="Sala na 18 Urodziny Lubin | Osiemnastki - Piwnica pod Żabą & Hit Fit"
        description="Najlepsza sala na osiemnastkę w Lubinie! Klimatyczna Piwnica pod Żabą (do 40 os.) lub Sala Hit Fit (do 80 os.). DJ, nagłośnienie imprezowe, strefa chillout, menu młodzieżowe i brak korkowego."
        keywords={['sala na 18 Lubin', 'osiemnastka Lubin', '18 urodziny Lubin', 'wynajem sali na 18 Lubin', 'impreza 18 Lubin', 'Piwnica pod Żabą']}
        canonicalPath="/18-urodziny"
      />
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={PIWNICA_IMAGES[0]} 
            alt="18. urodziny w lokalu Piwnica pod Żabą Lubin" 
            className="w-full h-full object-cover opacity-35 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
            <PartyPopper size={15} className="text-amber-400" /> Najlepsze 18-stki w Lubinie
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            18. Urodziny i Imprezy Młodzieżowe
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed">
            Wybierz legendarną, klimatyczną <strong>Piwnicę pod Żabą</strong> (do 40 osób) lub przestronną salę <strong>Hit Fit</strong> (do 90 osób). Nagłośnienie, parkiet, przekąski finger-food i zero opłaty korkowej!
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
              <FileText size={18} /> Zobacz Menu Imprezowe
            </Link>
          </div>
        </div>
      </section>

      {/* Choose Your Venue Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-amber-700 uppercase tracking-widest text-xs font-bold block">
            Wybór Przestrzeni
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Dwa Lokale Dopasowane do Twojej Ekipy
          </h2>
          <p className="text-stone-600 text-sm">
            W zależności od liczby zaproszonych gości możesz wybrać salę na wyłączność:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Piwnica Card */}
          <div className="bg-white rounded-3xl p-8 border-2 border-amber-300 shadow-lg space-y-6 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-amber-100 text-amber-900 font-bold text-xs uppercase px-3 py-1 rounded-full">
              Bestseller na 18-stki
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-stone-900">Piwnica pod Żabą</h3>
              <p className="text-amber-800 text-xs font-bold uppercase tracking-wider">
                Do 40 osób • ul. Orla 39a, Lubin
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                Niezwykle klimatyczne wnętrze ze ścianami z czerwonej cegły, ciepłym oświetleniem i atmosferą prywatnego klubu. Lokal tylko dla Was – nikt obcy nie wchodzi!
              </p>
            </div>

            <ul className="space-y-2.5 text-sm text-stone-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Pojemność do 40 osób – idealna na imprezę ze znajomymi</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Klimatyzowana sala z wydzieloną strefą do tańca</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Nagłośnienie, możliwość podłączenia własnej playlisty lub DJ-a</span>
              </li>
            </ul>

            <Link
              to="/sale"
              className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-sm"
            >
              Zobacz szczegóły i zdjęcia Piwnicy <ArrowRight size={16} />
            </Link>
          </div>

          {/* Hit Fit Card */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-stone-900">Sala Bankietowa Hit Fit</h3>
              <p className="text-emerald-800 text-xs font-bold uppercase tracking-wider">
                Do 90 osób • ul. Konstytucji 3 Maja 3, Lubin
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                Jeśli planujesz naprawdę dużą osiemnastkę z szerokim gronem znajomych i rodziny. Przestronny parkiet taneczny oraz dostęp do tarasu z grillem.
              </p>
            </div>

            <ul className="space-y-2.5 text-sm text-stone-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Miejsca siedzące i parkiet dla grup 40–90 osób</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Taras wypoczynkowy z grillem</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Duży, bezpłatny parking pod samym lokalem</span>
              </li>
            </ul>

            <Link
              to="/sale"
              className="inline-flex items-center gap-2 text-stone-800 hover:text-amber-800 font-bold text-sm"
            >
              Zobacz szczegóły i zdjęcia Hit Fit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Alcohol Rule Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-amber-900 text-amber-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-widest">
              <Wine size={16} /> Własny Alkohol bez Korkowego
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white">
              Przynieś własny alkohol – nie pobieramy opłaty korkowej!
            </h3>
            <p className="text-amber-200 text-sm max-w-xl font-light">
              Warunek jest prosty i przejrzysty: zakup 10 sztuk napoju Coca-Cola (1L) w lokalu. Piwo i wino są również dostępne na miejscu.
            </p>
          </div>
          <a
            href="tel:661637770"
            className="shrink-0 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Zadzwoń i dopytaj: {CONTACT_PHONE_FORMATTED}
          </a>
        </div>
      </section>

      {/* Party Menu Showcase & Button */}
      <section className="bg-stone-100 py-16 border-y border-stone-200 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl space-y-8 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mx-auto">
              <ChefHat size={15} className="text-amber-700" /> Kulinarna Oprawa 18-stki
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-snug">
                Menu Młodzieżowe i Imprezowe Dania Gorące
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                Sprawdzone zestawy dań stworzone z myślą o młodzieży i uczestnikach osiemnastki. W naszej ofercie znajdziesz sycące obiady (kotlety Szwajcar, de volay, nuggetsy, frytki), chrupiące przekąski finger-food (tortille, deski serów i wędlin) oraz gorące dania po północy (barszcz z krokietem, mini hamburgery, pizza).
              </p>
            </div>

            {/* Highlights pills */}
            <div className="flex flex-wrap justify-center gap-3 text-xs text-stone-700 font-medium pt-2">
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <CheckCircle2 size={14} className="text-emerald-600" /> Własny alkohol bez korkowego (kup 10 szt. Coca-Cola 1L)
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <CheckCircle2 size={14} className="text-emerald-600" /> Dania obiadowe i przekąski finger-food
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <CheckCircle2 size={14} className="text-emerald-600" /> Ciepłe posiłki po północy
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <CheckCircle2 size={14} className="text-emerald-600" /> Kawa, herbata i woda bez limitu
              </span>
            </div>

            {/* Propozycje menu na 18-stkę */}
            <div className="pt-4 text-left border-t border-stone-200/80 space-y-4">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block text-center">
                Wybierz propozycję z menu:
              </span>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link
                  to="/menu?uroczystosc=urodziny&pakiet=hit-fit-prop-3"
                  className="bg-stone-50 hover:bg-amber-50/70 p-4 rounded-2xl border border-stone-200 hover:border-amber-400 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 inline-block">
                      Propozycja nr 3
                    </span>
                    <h4 className="font-serif font-bold text-stone-900 text-sm group-hover:text-amber-900">
                      Szwajcar, De Volay & Tortille Tzatziki
                    </h4>
                    <p className="text-stone-500 text-xs line-clamp-2">
                      Krokiety ziemniaczane, sałatka brokułowa, placuszki ogrodowe, pieczone mięsa z ćwikłą.
                    </p>
                  </div>
                  <span className="pt-3 text-amber-800 font-bold text-xs inline-flex items-center gap-1">
                    Zobacz to menu <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

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
                      Panierka serowa, karczek w sosie, kluski śląskie, półmisek rozmaitości przekąsek, sałatka Cezar.
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
                      Pizza, Mini Hamburgery & Barszcz
                    </h4>
                    <p className="text-stone-500 text-xs line-clamp-2">
                      Gorące posiłki serwowane po północy, nuggetsy z dipami i ciepłe kolacje dla młodzieży.
                    </p>
                  </div>
                  <span className="pt-3 text-amber-800 font-bold text-xs inline-flex items-center gap-1">
                    Zobacz gorące kolacje <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
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
                <span>Otwórz Menu Osiemnastkowe w Karcie Dań</span>
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

      {/* Birthday Photos */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="text-amber-800 uppercase tracking-widest text-xs font-bold block">
              Zdjęcia z Lokali
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              Klimat do Zabawy w Piwnicy i Hit Fit
            </h2>
          </div>
          <Link
            to="/galeria"
            className="text-amber-800 hover:text-amber-900 font-bold text-sm inline-flex items-center gap-1.5 transition-colors"
          >
            Przejdź do pełnej galerii zdjęć <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {birthdayPhotos.map((src, index) => (
            <div key={index} className="aspect-4/3 rounded-xl overflow-hidden shadow-sm bg-stone-200 group">
              <img 
                src={src} 
                alt={`18. urodziny zdjęcie ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="bg-stone-900 text-white rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
            Planujesz 18-stkę? Zarezerwuj Swój Weekend!
          </h3>
          <p className="text-stone-300 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Terminy na osiemnastki, szczególnie w klimatycznej Piwnicy pod Żabą, rezerwowane są z wyprzedzeniem. Zadzwoń do nas i sprawdź dostępność terminu!
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
              Napisz do Nas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
