import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Baby, Sparkles, CheckCircle2, Phone, Calendar, Users, 
  Heart, UtensilsCrossed, ArrowRight, ShieldCheck, Cake, FileText, Download, ChefHat
} from 'lucide-react';
import { HIT_FIT_IMAGES, PIWNICA_IMAGES, CONTACT_PHONE_FORMATTED } from '../data';
import { downloadMenuPdf } from '../utils/generateMenuPdf';
import { SeoHead } from '../components/SeoHead';

export function BaptismCommunionPage() {
  const familyPhotos = [
    HIT_FIT_IMAGES[1],
    HIT_FIT_IMAGES[3],
    HIT_FIT_IMAGES[5],
    PIWNICA_IMAGES[1],
    PIWNICA_IMAGES[4],
    PIWNICA_IMAGES[5],
  ];

  return (
    <div className="bg-stone-50 text-gray-900 min-h-screen pt-24 pb-20">
      <SeoHead
        title="Chrzciny i Komunie Lubin | Sala na Chrzest i Komunię Świętą"
        description="Przyjęcia komunijne i chrzciny w Lubinie. Sprawdzona oferta menu, kącik dla dzieci, kameralna atmosfera w Piwnicy pod Żabą lub duża przestrzeń w Sali Hit Fit. Sprawdź wolne niedziele!"
        keywords={['chrzciny Lubin', 'komunia Lubin', 'sala na chrzciny Lubin', 'sala na komunię Lubin', 'przyjęcie komunijne Lubin', 'obiad komunijny Lubin']}
        canonicalPath="/chrzciny-komunie"
      />
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HIT_FIT_IMAGES[1]} 
            alt="Chrzciny i Komunie w Lubinie - Piwnica pod Żabą i Hit Fit" 
            className="w-full h-full object-cover opacity-35 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
            <Baby size={15} className="text-amber-400" /> Uroczystości Rodzinne
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Chrzciny i Komunie Święte w Lubinie
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed">
            Sprawdzona oferta menu, tradycyjny smak dań, bezpieczna przestrzeń dla dzieci i serdeczna atmosfera dla całej rodziny.
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
              <FileText size={18} /> Zobacz Menu na Chrzciny
            </Link>
          </div>
        </div>
      </section>

      {/* Venues for Baptism & Communion */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-amber-700 uppercase tracking-widest text-xs font-bold block">
            Dwa Miejsca do Wyboru
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Dopasuj Salę do Wielkości Swojego Przyjęcia
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-emerald-800 font-bold text-xs uppercase tracking-wider">Hit Fit (do 90 osób)</span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">Duże Przyjęcia</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900">Sala Bankietowa Hit Fit</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Świetna na Pierwsze Komunie Święte oraz większe przyjęcia chrzcielne łączące obie rodziny. Taras umożliwia dzieciom bezpieczne wyjście na świeże powietrze, a przestronne wnętrze zapewnia swobodę wszystkim pokoleniom.
            </p>
            <ul className="space-y-2 text-sm text-stone-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Przestronny taras ze strefą wypoczynku</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Duży bezpłatny parking pod samą salą</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Lokalizacja: ul. Konstytucji 3 Maja 3, Lubin</span>
              </li>
            </ul>
            <Link to="/sale" className="text-emerald-800 hover:text-emerald-950 font-bold text-sm inline-flex items-center gap-1.5">
              Więcej o sali Hit Fit <ArrowRight size={15} />
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-amber-800 font-bold text-xs uppercase tracking-wider">Piwnica pod Żabą (do 40 osób)</span>
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-semibold">Kameralny Klimat</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900">Piwnica pod Żabą</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Wyjątkowo ciepła, kameralna przestrzeń z klimatyczną czerwoną cegłą. Idealna na spokojne chrzciny w gronie rodziców, chrzestnych i dziadków. Prywatność i pełna uwaga obsługi tylko dla Waszej rodziny.
            </p>
            <ul className="space-y-2 text-sm text-stone-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Kameralna sala na wyłączność dla 15–40 osób</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Niepowtarzalny, przytulny domowy nastrój</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Lokalizacja: ul. Orla 39a, Lubin</span>
              </li>
            </ul>
            <Link to="/sale" className="text-amber-800 hover:text-amber-950 font-bold text-sm inline-flex items-center gap-1.5">
              Więcej o Piwnicy pod Żabą <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Showcase & Button */}
      <section className="bg-stone-100 py-16 border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl space-y-8 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mx-auto">
              <ChefHat size={15} className="text-amber-700" /> Kulinarna Oprawa Chrzcin i Komunii
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-snug">
                Tradycyjny Obiad Rodzinny i Domowe Ciasta
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                Przyjęcia z okazji Chrzcin i Pierwszej Komunii Świętej wymagają wyjątkowego menu, w którym zasmakują wszyscy goście – od dziadków po najmłodsze pociechy. Proponujemy tradycyjny dwudaniowy obiad (aromatyczny rosół, 4 rodzaje mięs, kluski śląskie), świeże surówki oraz zimny stół.
              </p>
            </div>

            {/* Highlights pills */}
            <div className="flex flex-wrap justify-center gap-3 text-xs text-stone-700 font-medium pt-2">
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <Cake size={14} className="text-amber-700" /> Własny tort i ciasta bez opłat (0 zł)
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <CheckCircle2 size={14} className="text-emerald-600" /> Dania uwielbiane przez dzieci (nuggetsy, frytki)
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <CheckCircle2 size={14} className="text-emerald-600" /> Kawa z ekspresu, herbata i woda bez limitu
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                <CheckCircle2 size={14} className="text-emerald-600" /> Zestawy mięs serwowane na półmiskach
              </span>
            </div>

            {/* Karta Menu na Chrzciny i Komunie */}
            <div className="pt-4 text-left border-t border-stone-200/80 space-y-4">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block text-center">
                Menu z oficjalnej karty dań:
              </span>
              <div className="bg-rose-50/60 rounded-2xl p-6 border border-rose-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-[11px] font-bold uppercase tracking-wider">
                    Oferta menu na chrzciny
                  </div>
                  <h4 className="text-xl font-serif font-bold text-stone-900">
                    Oferta menu na chrzciny
                  </h4>
                  <p className="text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
                    W zestawie: aromatyczny rosół z makaronem, tradycyjny kotlet schabowy, rolada drobiowa ze szpinakiem, rolada z pieczarkami w sosie, nuggetsy dla dzieci, kluski śląskie, bukiet 3 surówek, polędwiczki po warszawsku, sałatka Fit z granatem, przekładaniec koronkowo-serowy oraz nielimitowana kawa i herbata.
                  </p>
                </div>
                <Link
                  to="/menu?uroczystosc=chrzciny&pakiet=chrzciny-menu"
                  className="shrink-0 px-5 py-3 rounded-xl bg-rose-900 hover:bg-rose-950 text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Otwórz To Menu</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Action Buttons to View Menu and Download PDF */}
            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <Link
                to="/menu?uroczystosc=chrzciny&pakiet=chrzciny-menu"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-white font-bold text-sm tracking-wide shadow-xl shadow-amber-900/20 transition-all hover:scale-105"
              >
                <span>Oferta menu na chrzciny w Karcie Dań</span>
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
              Galeria Zdjęć
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              Przyjęcia Rodzinne w Naszych Salach
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
            Sprawdź Dostępność Terminu na Chrzciny lub Komunię
          </h3>
          <p className="text-stone-300 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Chętnie odpowiemy na wszystkie pytania dotyczące menu, ilości miejsc oraz dekoracji stołów.
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
              Formularz Rezerwacji
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
