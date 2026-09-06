import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Building2, Sparkles, CheckCircle2, XCircle, Phone, MapPin, 
  Users, Car, Flame, Wine, Music, TreePine, ArrowRight, ShieldCheck, FileText
} from 'lucide-react';
import { 
  HIT_FIT_IMAGES, PIWNICA_IMAGES, HIT_FIT_ADDRESS, PIWNICA_ADDRESS, 
  DRONE_VIDEO_URL, PIWNICA_VIDEO_URL, CONTACT_PHONE_FORMATTED 
} from '../data';
import { LazyVideo } from '../components/LazyVideo';
import { SeoHead } from '../components/SeoHead';

export function VenuesPage() {
  const [activeVenue, setActiveVenue] = useState<'both' | 'hit-fit' | 'piwnica'>('both');

  return (
    <div className="bg-stone-50 text-gray-900 min-h-screen pt-24 pb-20">
      <SeoHead
        title="Sale Bankietowe Lubin | Porównaj: Piwnica pod Żabą vs Sala Hit Fit"
        description="Porównaj dwie sale bankietowe w Lubinie: klimatyczna Piwnica pod Żabą (do 40 osób, ceglane sklepienia, ogród grillowy) oraz przestronna Sala Hit Fit (do 80-90 osób, parkiet taneczny, taras). Zobacz zdjęcia i wirtualne spacery!"
        keywords={['sale bankietowe Lubin', 'lokale na imprezy Lubin', 'Piwnica pod Żabą Lubin', 'Sala Hit Fit Lubin', 'wynajem lokalu Lubin']}
        canonicalPath="/sale"
      />
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HIT_FIT_IMAGES[0]} 
            alt="Nasze Sale Bankietowe w Lubinie" 
            className="w-full h-full object-cover opacity-35 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
            <Building2 size={14} className="text-amber-400" /> Dwie Wyjątkowe Przestrzenie
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Nasze Sale Bankietowe w Lubinie
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed">
            Przestronna <strong>Sala Hit Fit</strong> do 90 osób z tarasem i parkietem oraz klimatyczna <strong>Piwnica pod Żabą</strong> do 40 osób z unikalnym ceglanym charakterem.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href="tel:661637770"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-amber-900/30 transition-all hover:scale-105"
            >
              <Phone size={18} /> Zadzwoń: {CONTACT_PHONE_FORMATTED}
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-sm border border-white/20 transition-all"
            >
              Umów się na Oglądanie Sali
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl p-2 shadow-lg border border-stone-200 flex flex-wrap justify-center gap-2 max-w-md mx-auto">
          <button
            onClick={() => setActiveVenue('both')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeVenue === 'both' ? 'bg-stone-900 text-white shadow-sm' : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            Obie Sale
          </button>
          <button
            onClick={() => setActiveVenue('hit-fit')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeVenue === 'hit-fit' ? 'bg-emerald-700 text-white shadow-sm' : 'text-stone-600 hover:text-emerald-700 hover:bg-emerald-50'
            }`}
          >
            Hit Fit (do 90 os.)
          </button>
          <button
            onClick={() => setActiveVenue('piwnica')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeVenue === 'piwnica' ? 'bg-amber-700 text-white shadow-sm' : 'text-stone-600 hover:text-amber-700 hover:bg-amber-50'
            }`}
          >
            Piwnica pod Żabą (do 40 os.)
          </button>
        </div>
      </div>

      {/* VENUE 1: Hit Fit */}
      {(activeVenue === 'both' || activeVenue === 'hit-fit') && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 space-y-10">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-xl space-y-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-stone-100 pb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                  Główny Obiekt Bankietowy • Do 90 osób
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
                  Sala Bankietowa Hit Fit
                </h2>
                <p className="text-stone-500 text-sm flex items-center gap-2">
                  <MapPin size={16} className="text-emerald-700" /> {HIT_FIT_ADDRESS}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-stone-100 text-stone-800 text-xs font-bold">
                  💍 Wesela
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-stone-100 text-stone-800 text-xs font-bold">
                  🕊️ Komunie
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-stone-100 text-stone-800 text-xs font-bold">
                  🎂 18-stki
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-stone-100 text-stone-800 text-xs font-bold">
                  🏢 Bankiety
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <p className="text-stone-700 text-base leading-relaxed">
                  Sala Bankietowa <strong>Hit Fit</strong> przy ul. Konstytucji 3 Maja 3 to nasz reprezentacyjny, przestronny obiekt stworzony z myślą o uroczystościach dla grup od 30 do 90 osób. Doskonale sprawdza się na przyjęcia weselne, pierwsze komunie, 18-stki oraz bankiety firmowe.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                      <Music size={18} /> Duży Parkiet Taneczny
                    </div>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      Szeroka strefa do tańca z profesjonalnym oświetleniem imprezowym i miejscem dla zespołu lub DJ-a.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                      <Flame size={18} /> Taras i Grill
                    </div>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      Relaks na świeżym powietrzu oraz grill na biesiady i integracje.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                      <Car size={18} /> Bezpłatny Parking
                    </div>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      Wygodny, bezpieczny parking bezpośrednio przed drzwiami lokalu dla wszystkich gości.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                      <Wine size={18} /> Zero Opłaty Korkowej
                    </div>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      Możliwość wniesienia własnego alkoholu (warunek: zakup 10 sztuk Coca-Cola 1L w lokalu).
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    to="/wesela"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Zobacz Ofertę Weselną w Hit Fit →
                  </Link>
                  <Link
                    to="/menu?uroczystosc=wesela"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Menu Bankietowe & Weselne Hit Fit →
                  </Link>
                  <Link
                    to="/galeria"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Zdjęcia Sali w Galerii
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200">
                  <LazyVideo
                    src={DRONE_VIDEO_URL}
                    poster={HIT_FIT_IMAGES[0]}
                    title="Prezentacja Sali Hit Fit w Lubinie z drona"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <img 
                    src={HIT_FIT_IMAGES[1]} 
                    alt="Wnętrze Hit Fit" 
                    className="rounded-xl aspect-4/3 object-cover shadow-sm"
                  />
                  <img 
                    src={HIT_FIT_IMAGES[2]} 
                    alt="Stół w Hit Fit" 
                    className="rounded-xl aspect-4/3 object-cover shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* VENUE 2: Piwnica pod Żabą */}
      {(activeVenue === 'both' || activeVenue === 'piwnica') && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 space-y-10">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-xl space-y-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-stone-100 pb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  Klimatyczna Przestrzeń Ceglana • Do 40 osób
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
                  Sala Bankietowa Piwnica pod Żabą
                </h2>
                <p className="text-stone-500 text-sm flex items-center gap-2">
                  <MapPin size={16} className="text-amber-700" /> {PIWNICA_ADDRESS}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
                  🔥 Hit na 18-stki
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-stone-100 text-stone-800 text-xs font-bold">
                  🎂 Urodziny
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-stone-100 text-stone-800 text-xs font-bold">
                  🕊️ Chrzciny
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-stone-100 text-stone-800 text-xs font-bold">
                  🕯️ Stypy
                </span>
              </div>
            </div>

            {/* Wedding Alert Note */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
              <ShieldCheck size={20} className="text-amber-700 shrink-0 mt-0.5" />
              <p className="text-amber-900 text-sm leading-relaxed">
                <strong>Ważna uwaga:</strong> W lokalu Piwnica pod Żabą <strong>nie organizujemy przyjęć weselnych</strong> ze względu na kameralny metraż (do 40 gości). Wesela z radością realizujemy w naszej przestronnej sali Hit Fit przy ul. Konstytucji 3 Maja 3.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <p className="text-stone-700 text-base leading-relaxed">
                  <strong>Piwnica pod Żabą</strong> przy ul. Orlej 39a to miejsce z duszą. Wnętrze z naturalnej czerwonej cegły, przytulne ciepłe światło i niepowtarzalny nastrój sprawiają, że to absolutny faworyt lubinian na 18-stki, imprezy młodzieżowe, jubileusze oraz kameralne obiady rodzinne.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                      <Building2 size={18} /> Ceglany, Ciepły Klimat
                    </div>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      Niepowtarzalne wnętrze, które samo w sobie tworzy dekorację imprezy i doskonałe tło do pamiątkowych zdjęć.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                      <Music size={18} /> Sprzęt & Parkiet do Tańca
                    </div>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      Nagłośnienie z możliwością podłączenia własnej playlisty lub DJ-a, oświetlenie klubowe, klimatyzacja.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                      <Users size={18} /> Całkowita Prywatność
                    </div>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      Lokal na wyłączność dla Waszych gości (15–40 osób). Nikt postronny nie ma wstępu.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                      <Wine size={18} /> Własny Alkohol bez Korkowego
                    </div>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      Brak opłat korkowych przy zakupie 10 sztuk napojów Coca-Cola 1L w lokalu.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    to="/18-urodziny"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Zobacz Ofertę na 18-stki w Piwnicy →
                  </Link>
                  <Link
                    to="/menu?uroczystosc=urodziny"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Menu dla Piwnicy pod Żabą →
                  </Link>
                  <Link
                    to="/galeria"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Zdjęcia Piwnicy w Galerii
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200">
                  <LazyVideo
                    src={PIWNICA_VIDEO_URL}
                    poster={PIWNICA_IMAGES[0]}
                    title="Prezentacja wnętrza Piwnica pod Żabą"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <img 
                    src={PIWNICA_IMAGES[1]} 
                    alt="Ceglane wnętrze Piwnica pod Żabą" 
                    className="rounded-xl aspect-4/3 object-cover shadow-sm"
                  />
                  <img 
                    src={PIWNICA_IMAGES[2]} 
                    alt="Stoły w Piwnicy" 
                    className="rounded-xl aspect-4/3 object-cover shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200 shadow-lg space-y-6">
          <div className="text-center space-y-2">
            <span className="text-amber-800 uppercase tracking-widest text-xs font-bold block">
              Zestawienie Porównawcze
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Szybkie Porównanie Parametrów Obu Sal
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-stone-200 text-stone-400 font-semibold text-xs uppercase tracking-wider">
                  <th className="py-3 px-4">Cecha / Parametr</th>
                  <th className="py-3 px-4 text-emerald-800">Hit Fit (Lubin)</th>
                  <th className="py-3 px-4 text-amber-800">Piwnica pod Żabą (Lubin)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Adres</td>
                  <td className="py-3 px-4">ul. Konstytucji 3 Maja 3</td>
                  <td className="py-3 px-4">ul. Orla 39a</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Pojemność maksymalna</td>
                  <td className="py-3 px-4 font-semibold text-emerald-800">Do 90 osób</td>
                  <td className="py-3 px-4 font-semibold text-amber-800">Do 40 osób (kameralna)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Organizacja Wesel</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold flex items-center gap-1.5">
                    <CheckCircle2 size={16} /> TAK (główny obiekt weselny)
                  </td>
                  <td className="py-3 px-4 text-rose-700 font-bold">
                    <span className="flex items-center gap-1.5"><XCircle size={16} /> NIE organizujemy</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">18-stki i Urodziny</td>
                  <td className="py-3 px-4">TAK (dla większych grup)</td>
                  <td className="py-3 px-4 font-bold text-amber-800">TAK (absolutny bestseller!)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Parkiet Taneczny</td>
                  <td className="py-3 px-4">Bardzo duży parkiet</td>
                  <td className="py-3 px-4">Kameralna strefa do tańca</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Taras Wypoczynkowy</td>
                  <td className="py-3 px-4">TAK (taras + grill)</td>
                  <td className="py-3 px-4">Strefa zewnętrzna</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Parking dla gości</td>
                  <td className="py-3 px-4">Duży bezpłatny parking na posesji</td>
                  <td className="py-3 px-4">Parking ogólnodostępny</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Własny alkohol</td>
                  <td className="py-3 px-4">Bez korkowego (zakup 10x Coca-Cola)</td>
                  <td className="py-3 px-4">Bez korkowego (zakup 10x Coca-Cola)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Culinary Menus for Both Venues */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-xl space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-amber-800 uppercase tracking-widest text-xs font-bold block">
              Oferta Kulinarna
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Karty Menu Dostępne w Naszych Salach
            </h3>
            <p className="text-stone-600 text-sm">
              Niezależnie od wybranej sali, oferujemy bogaty wybór tradycyjnych dań i zestawów bankietowych.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <Link
              to="/menu?uroczystosc=wesela"
              className="bg-stone-50 hover:bg-amber-50/70 p-5 rounded-2xl border border-stone-200 hover:border-amber-400 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 inline-block">
                  Propozycja nr 1
                </span>
                <h4 className="font-serif font-bold text-stone-900 text-base group-hover:text-amber-900">
                  Oferta menu na przyjęcie (Hit Fit)
                </h4>
                <p className="text-stone-500 text-xs leading-relaxed">
                  3 bogate propozycje dań obiadowych, pieczone mięsa, półmiski finger food oraz 14 gorących kolacji.
                </p>
              </div>
              <span className="pt-4 text-amber-800 font-bold text-xs inline-flex items-center gap-1">
                Zobacz to menu →
              </span>
            </Link>

            <Link
              to="/menu?uroczystosc=urodziny&pakiet=hit-fit-prop-3"
              className="bg-stone-50 hover:bg-amber-50/70 p-5 rounded-2xl border border-stone-200 hover:border-amber-400 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 text-blue-900 inline-block">
                  Propozycja nr 3
                </span>
                <h4 className="font-serif font-bold text-stone-900 text-base group-hover:text-amber-900">
                  Oferta menu na przyjęcie (Propozycja nr 3)
                </h4>
                <p className="text-stone-500 text-xs leading-relaxed">
                  Szwajcar, de volay, tortille z dipem tzatziki, sałatka brokułowa oraz ciepłe kolacje i nuggetsy.
                </p>
              </div>
              <span className="pt-4 text-amber-800 font-bold text-xs inline-flex items-center gap-1">
                Zobacz to menu →
              </span>
            </Link>

            <Link
              to="/menu?uroczystosc=chrzciny&pakiet=chrzciny-menu"
              className="bg-stone-50 hover:bg-amber-50/70 p-5 rounded-2xl border border-stone-200 hover:border-amber-400 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-100 text-rose-900 inline-block">
                  Oferta menu na chrzciny
                </span>
                <h4 className="font-serif font-bold text-stone-900 text-base group-hover:text-amber-900">
                  Oferta menu na chrzciny
                </h4>
                <p className="text-stone-500 text-xs leading-relaxed">
                  Rosół, 4 rodzaje mięs, kluski śląskie, polędwiczki po warszawsku, nielimitowana kawa i herbata.
                </p>
              </div>
              <span className="pt-4 text-amber-800 font-bold text-xs inline-flex items-center gap-1">
                Zobacz to menu →
              </span>
            </Link>

            <Link
              to="/menu?kategoria=gorace-kolacje"
              className="bg-stone-50 hover:bg-amber-50/70 p-5 rounded-2xl border border-stone-200 hover:border-amber-400 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-200 text-amber-950 inline-block">
                  Gorące kolacje
                </span>
                <h4 className="font-serif font-bold text-stone-900 text-base group-hover:text-amber-900">
                  Gorące kolacje
                </h4>
                <p className="text-stone-500 text-xs leading-relaxed">
                  14 propozycji gorących dań nocnych: barszcz z krokietem, flaczki, strogonow, gulasz węgierski.
                </p>
              </div>
              <span className="pt-4 text-amber-800 font-bold text-xs inline-flex items-center gap-1">
                Zobacz to menu →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        <div className="bg-stone-900 text-white rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
            Chcesz Obejrzeć Obie Sale na Żywo?
          </h3>
          <p className="text-stone-300 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Zadzwoń do nas i umów się na dogodną godzinę. Chętnie zaprezentujemy przestrzenie, odpowiemy na pytania i przygotujemy niezobowiązującą wycenę.
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
              Przejdź do Kontaktu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
