import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ChefHat, Sparkles, Heart, Award, Users, CheckCircle2, 
  Phone, ArrowRight, ShieldCheck, UtensilsCrossed, Calendar
} from 'lucide-react';
import { 
  HIT_FIT_IMAGES, PIWNICA_IMAGES, PREPARATION_VIDEO_URL, CONTACT_PHONE_FORMATTED 
} from '../data';
import { LazyVideo } from '../components/LazyVideo';
import { SeoHead } from '../components/SeoHead';

export function AboutPage() {
  return (
    <div className="bg-stone-50 text-gray-900 min-h-screen pt-24 pb-20">
      <SeoHead
        title="O Nas | Doświadczenie, Pasja i Domowa Kuchnia - Lubin"
        description="Poznaj historię sal bankietowych Piwnica pod Żabą i Hit Fit w Lubinie oraz naszą pasję kulinarną. Ponad 15 lat doświadczenia w organizacji przyjęć."
        keywords={['o nas Piwnica pod Żabą', 'kuchnia bankietowa Lubin', 'historia lokalu Lubin']}
        canonicalPath="/o-nas"
      />
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HIT_FIT_IMAGES[4]} 
            alt="O nas - Piwnica pod Żabą i Hit Fit Lubin" 
            className="w-full h-full object-cover opacity-35 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
            <UtensilsCrossed size={15} className="text-amber-400" /> Tradycja i Gościnność
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            O Nas – Pasja do Dobrego Smaku
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            Poznaj historię naszych lokali w Lubinie, zespół doświadczonych kucharzy oraz naszą filozofię tworzenia niezapomnianych przyjęć.
          </p>

          <div className="pt-2">
            <a
              href="tel:661637770"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-amber-900/30 transition-all hover:scale-105"
            >
              <Phone size={18} /> Skontaktuj się z Nami: {CONTACT_PHONE_FORMATTED}
            </a>
          </div>
        </div>
      </section>

      {/* Main Story & Philosophy */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 space-y-16">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-5">
            <span className="text-amber-800 uppercase tracking-widest text-xs font-bold block">
              Nasza Misja
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
              „Dołożymy wszelkich starań, aby Wasze przyjęcie było smaczną i niezapomnianą uroczystością”
            </h2>
            <p className="text-stone-700 text-base leading-relaxed">
              Od lat tworzymy w Lubinie przestrzeń dla najważniejszych chwil w życiu naszych Gości. Pod kierunkiem <strong>Piotra Jaworskiego</strong> łączymy miłość do tradycyjnej, uczciwej kuchni polskiej z dbałością o nowoczesny standard obsługi bankietowej.
            </p>
            <p className="text-stone-700 text-base leading-relaxed">
              Stawiamy na sprawdzoną, tradycyjną kuchnię oraz staranność przygotowania każdego dania. Dbamy zarówno o wyrazisty smak, jak i estetyczną oprawę każdego stołu.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-md space-y-4">
              <h3 className="font-serif font-bold text-stone-900 text-xl">W Liczbach</h3>
              <div className="space-y-4 text-sm text-stone-700">
                <div className="border-b border-stone-100 pb-3">
                  <span className="text-3xl font-serif font-bold text-amber-800 block">Dwa</span>
                  <span className="text-stone-500 text-xs">Unikalne lokale bankietowe w Lubinie</span>
                </div>
                <div className="border-b border-stone-100 pb-3">
                  <span className="text-3xl font-serif font-bold text-amber-800 block">90 & 40</span>
                  <span className="text-stone-500 text-xs">Maksymalna pojemność gości (Hit Fit & Piwnica)</span>
                </div>
                <div>
                  <span className="text-3xl font-serif font-bold text-amber-800 block">Setki</span>
                  <span className="text-stone-500 text-xs">Zorganizowanych wesel, komunii, 18-stek i jubileuszy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kitchen Video */}
        <div className="space-y-6">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-amber-800 uppercase tracking-widest text-xs font-bold block">
              Zajrzyj Za Kulisy
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Przygotowania Kulinarne
            </h3>
            <p className="text-stone-600 text-sm">
              Zobacz, z jaką starannością i pasją nasz zespół komponuje dania na uroczystości.
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-stone-200">
            <LazyVideo
              src={PREPARATION_VIDEO_URL}
              poster={HIT_FIT_IMAGES[4]}
              title="Przygotowania w kuchni lokalu bankietowego"
            />
          </div>
        </div>

        {/* Key Pillars */}
        <div className="grid sm:grid-cols-3 gap-6 pt-6">
          <div className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
              <UtensilsCrossed size={24} />
            </div>
            <h4 className="text-lg font-serif font-bold text-stone-900">Domowy Smak</h4>
            <p className="text-stone-600 text-xs leading-relaxed">
              Tradycyjne receptury, pieczone mięsa, sałatki oraz zupy.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
              <Users size={24} />
            </div>
            <h4 className="text-lg font-serif font-bold text-stone-900">Serdeczna Obsługa</h4>
            <p className="text-stone-600 text-xs leading-relaxed">
              Kelnerzy dbający o komfort każdego gościa – z uśmiechem, dyskrecją i pełnym zaangażowaniem.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
              <ShieldCheck size={24} />
            </div>
            <h4 className="text-lg font-serif font-bold text-stone-900">Uczciwe Zasady</h4>
            <p className="text-stone-600 text-xs leading-relaxed">
              Brak ukrytych opłat, brak opłaty korkowej na własny alkohol, przejrzyste warunki i doradztwo na każdym etapie.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation to Other Sections & Specific Menus */}
      <section className="bg-stone-100 py-16 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-8">
          <div className="space-y-2 max-w-xl mx-auto">
            <span className="text-amber-800 uppercase tracking-widest text-xs font-bold block">
              Poznaj Naszą Kuchnię
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Karty Menu i Oferta Sal w Lubinie
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm">
              Wybierz rodzaj planowanego przyjęcia, aby przejść bezpośrednio do dopasowanego zestawu dań.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-left">
            <Link
              to="/menu?uroczystosc=wesela"
              className="p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all group"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">Propozycja nr 1</span>
              <h5 className="font-serif font-bold text-stone-900 text-sm group-hover:text-amber-900">Oferta menu na przyjęcie</h5>
              <p className="text-stone-500 text-xs mt-1">3 propozycje obiadów i 14 ciepłych kolacji.</p>
            </Link>

            <Link
              to="/menu?uroczystosc=urodziny&pakiet=hit-fit-prop-3"
              className="p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all group"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 block">Propozycja nr 3</span>
              <h5 className="font-serif font-bold text-stone-900 text-sm group-hover:text-amber-900">Oferta menu na przyjęcie</h5>
              <p className="text-stone-500 text-xs mt-1">Szwajcar, de volay, tortille i przekąski.</p>
            </Link>

            <Link
              to="/menu?uroczystosc=chrzciny&pakiet=chrzciny-menu"
              className="p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all group"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-800 block">Oferta na chrzciny</span>
              <h5 className="font-serif font-bold text-stone-900 text-sm group-hover:text-amber-900">Oferta menu na chrzciny</h5>
              <p className="text-stone-500 text-xs mt-1">4 rodzaje mięs, zimny stół i domowe ciasta.</p>
            </Link>

            <Link
              to="/menu?kategoria=gorace-kolacje"
              className="p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all group"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 block">Kolacje</span>
              <h5 className="font-serif font-bold text-stone-900 text-sm group-hover:text-amber-900">Gorące kolacje</h5>
              <p className="text-stone-500 text-xs mt-1">Barszczyk z krokietem, flaczki i ciepłe dania nocne.</p>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/sale"
              className="px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              Zobacz Nasze Sale →
            </Link>
            <Link
              to="/menu"
              className="px-6 py-3 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              Karta menu & Pobierz menu w PDF →
            </Link>
            <Link
              to="/kontakt"
              className="px-6 py-3 rounded-full bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              Skontaktuj się z Nami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
