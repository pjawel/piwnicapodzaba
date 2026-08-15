import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChefHat, Coffee, Wine, Sparkles, CheckCircle2, Search, HeartHandshake, Info, X,
  FileText, Printer, ChevronRight, Eye, LayoutGrid
} from 'lucide-react';
import { 
  MENU_WELCOME_TITLE, MENU_WELCOME_TEXT, MENU_WELCOME_SUBTEXT, MENU_CATEGORIES,
  MENU_DOCUMENT_PAGES 
} from '../data';
import { MenuDocumentModal } from './MenuDocumentModal';

export function MenuSection() {
  const [activeMenuCategory, setActiveMenuCategory] = useState<string>('obiad');
  const [menuSearchQuery, setMenuSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'interactive' | 'document'>('interactive');
  const [docCurrentPage, setDocCurrentPage] = useState<number>(1);
  const [isDocModalOpen, setIsDocModalOpen] = useState<boolean>(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const activeDocPage = MENU_DOCUMENT_PAGES.find(p => p.pageNumber === docCurrentPage) || MENU_DOCUMENT_PAGES[0];

  return (
    <section id="oferta" className="py-20 md:py-28 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/30 scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-gold-dark border border-gold/30 text-xs font-bold uppercase tracking-widest">
            <ChefHat size={16} /> Bogata Oferta Bankietowa
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Oferta i Menu okolicznościowe
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Poznaj nasze propozycje dań obiadowych, przekąsek, wykwintnych słodkości oraz gorących kolacji dostępnych w sali <strong className="font-semibold text-gray-900">Hit Fit</strong> i <strong className="font-semibold text-gray-900">Piwnica pod Żabą</strong>.
          </p>
        </motion.div>

        {/* Welcome Card requested by User */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-r from-amber-800 via-gold-dark to-amber-700 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden border border-amber-500/30"
        >
          <div className="absolute top-0 right-0 translate-x-12 -translate-y-12 opacity-10 pointer-events-none">
            <ChefHat size={320} />
          </div>

          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-100 border border-white/20">
              <HeartHandshake size={14} /> Wiadomość od Właścicieli
            </div>

            <h3 className="text-2xl md:text-4xl font-serif font-bold tracking-tight">
              {MENU_WELCOME_TITLE}
            </h3>

            <p className="text-lg md:text-xl font-serif leading-relaxed text-amber-50 italic">
              "{MENU_WELCOME_TEXT}"
            </p>

            <p className="text-sm md:text-base text-amber-100 font-light">
              {MENU_WELCOME_SUBTEXT}
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 text-xs sm:text-sm text-amber-100 font-medium">
              <span className="tracking-wide">
                Dla Gości sali <strong className="text-white font-bold">Hit Fit</strong> oraz <strong className="text-white font-bold">Piwnica pod Żabą</strong>
              </span>
              <span className="bg-white/20 px-3.5 py-1 rounded-full font-bold text-white shadow-sm">
                Możliwość pełnej personalizacji menu
              </span>
            </div>
          </div>
        </motion.div>

        {/* Dedicated PDF Menu Document Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-gold flex items-center justify-center text-white shrink-0 shadow-lg">
              <FileText size={28} />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-gold/20 text-gold-light border border-gold/30 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Oryginalny Dokument
                </span>
                <span className="text-xs text-stone-400 font-medium">4 Strony • PDF</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Oficjalna Karta Menu Lokali Hit Fit & Piwnica pod Żabą
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light max-w-2xl">
                Obejrzyj pełny dokument karty dań w oryginalnym układzie stron z możliwością wygodnego wydrukowania lub zapisu do pliku PDF.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0">
            <button
              type="button"
              onClick={() => setIsDocModalOpen(true)}
              className="flex-1 sm:flex-initial px-4 sm:px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-gold hover:from-amber-400 hover:to-gold text-stone-950 font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-gold/30 flex items-center justify-center gap-2"
            >
              <Eye size={18} />
              <span>Otwórz Czytnik PDF</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsDocModalOpen(true);
                setTimeout(() => window.print(), 350);
              }}
              className="flex-1 sm:flex-initial px-4 py-3 rounded-2xl bg-amber-700/80 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm transition-all border border-amber-500/40 flex items-center justify-center gap-2 shadow-md"
            >
              <Printer size={16} />
              <span>Drukuj / PDF</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setViewMode('document');
                const el = document.getElementById('menu-view-container');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-4 py-3 rounded-2xl bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white text-xs sm:text-sm font-semibold border border-stone-700 transition-all flex items-center justify-center gap-2"
            >
              <FileText size={16} />
              <span>Pokaż na stronie</span>
            </button>
          </div>
        </motion.div>

        {/* Key Organizational Perks with hover and scroll animations */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-3xl p-6 shadow-md border border-amber-100/80 flex gap-4 items-start hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-gold-dark flex items-center justify-center shrink-0 border border-amber-200/50">
              <Coffee size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-gray-900 text-base">Napoje bez ograniczeń</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Kawa, herbata, woda i soki serwowane bez limitu czasowego przez cały czas trwania przyjęcia.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-3xl p-6 shadow-md border border-amber-100/80 flex gap-4 items-start hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-gold-dark flex items-center justify-center shrink-0 border border-amber-200/50">
              <Wine size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-gray-900 text-base">Własny alkohol (brak korkowego)</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Możliwość przyniesienia własnego alkoholu &gt;18% bez opłat korkowego przy zakupie 10x 1L Coca-Coli w lokalu.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-3xl p-6 shadow-md border border-amber-100/80 flex gap-4 items-start sm:col-span-2 lg:col-span-1 hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-gold-dark flex items-center justify-center shrink-0 border border-amber-200/50">
              <Sparkles size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-gray-900 text-base">Słodkości & Desery</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Możliwość zamówienia domowych wypieków (sernik, szarlotka, zielony mech, Raffaello) podawanych na ciepło z lodami.
              </p>
            </div>
          </motion.div>
        </div>

        {/* View Mode Switcher: Interactive Categories vs Full Document View */}
        <div id="menu-view-container" className="pt-2">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-stone-200/80 rounded-2xl max-w-md mx-auto mb-8 border border-stone-300">
            <button
              type="button"
              onClick={() => setViewMode('interactive')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                viewMode === 'interactive'
                  ? 'bg-amber-700 text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <LayoutGrid size={16} />
              <span>Kategorie Dań</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('document')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                viewMode === 'document'
                  ? 'bg-amber-700 text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <FileText size={16} />
              <span>Karta Menu (Dokument PDF)</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Interactive Category Cards */}
        {viewMode === 'interactive' ? (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-gray-200 pb-4">
              
              {/* Animated Tabs */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {MENU_CATEGORIES.map((cat) => {
                  const isActive = activeMenuCategory === cat.id && !menuSearchQuery;
                  return (
                    <motion.button
                      key={cat.id}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        setActiveMenuCategory(cat.id);
                        setMenuSearchQuery('');
                      }}
                      className={`relative px-5 py-2.5 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${
                        isActive
                          ? 'text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80 shadow-xs'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeMenuCategoryIndicator"
                          className="absolute inset-0 bg-gradient-to-r from-amber-600 via-gold to-yellow-600 rounded-2xl shadow-md"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{cat.title}</span>
                      {cat.badge && (
                        <span className={`relative z-10 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                          isActive
                            ? 'bg-white/25 text-white'
                            : 'bg-amber-100 text-amber-900'
                        }`}>
                          {cat.badge}
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Search Bar with glowing focus */}
              <div className="relative w-full md:w-80">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Szukaj dania (np. schab, barszcz)..."
                  value={menuSearchQuery}
                  onChange={(e) => setMenuSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-2.5 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-white shadow-xs"
                />
                {menuSearchQuery && (
                  <button 
                    onClick={() => setMenuSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 p-1"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Menu Content Display */}
            {menuSearchQuery ? (
              /* Search Mode */
              <div className="space-y-6">
                <div className="text-sm text-gray-600 font-medium">
                  Wyniki wyszukiwania dla: <strong className="text-gray-900">"{menuSearchQuery}"</strong>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {MENU_CATEGORIES.map((cat) => {
                    const matchingDirectItems = (cat.items || []).filter(item => 
                      item.toLowerCase().includes(menuSearchQuery.toLowerCase())
                    );

                    const matchingSubsections = (cat.subsections || []).map(sub => ({
                      ...sub,
                      items: sub.items.filter(item => item.toLowerCase().includes(menuSearchQuery.toLowerCase()))
                    })).filter(sub => sub.items.length > 0);

                    if (matchingDirectItems.length === 0 && matchingSubsections.length === 0) return null;

                    return (
                      <motion.div 
                        key={cat.id} 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-3xl p-6 shadow-md border border-amber-200/60 space-y-4"
                      >
                        <div className="flex items-center justify-between border-b pb-3 border-gray-100">
                          <h4 className="font-serif font-bold text-gray-900 text-xl">{cat.title}</h4>
                          <span className="text-xs bg-amber-100 text-amber-900 font-bold px-2.5 py-1 rounded-full">
                            {cat.badge}
                          </span>
                        </div>

                        {matchingDirectItems.length > 0 && (
                          <ul className="space-y-2.5">
                            {matchingDirectItems.map((item, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-800 font-medium">
                                <CheckCircle2 size={16} className="text-gold-dark shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {matchingSubsections.map((sub, idx) => (
                          <div key={idx} className="space-y-2 pt-2">
                            <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                              {sub.subtitle}
                            </div>
                            <ul className="space-y-2.5">
                              {sub.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-800 font-medium">
                                  <CheckCircle2 size={16} className="text-gold-dark shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Tab Category Display with Smooth Transition */
              <AnimatePresence mode="wait">
                {MENU_CATEGORIES.filter(cat => cat.id === activeMenuCategory).map((category) => (
                  <motion.div 
                    key={category.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {category.note && (
                      <div className="bg-amber-50/90 border border-amber-200/80 rounded-2xl p-4 flex items-center gap-3 text-amber-950 text-sm shadow-xs font-medium">
                        <Info size={20} className="text-gold-dark shrink-0" />
                        <span>{category.note}</span>
                      </div>
                    )}

                    {/* Subsections */}
                    {category.subsections && (
                      <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid md:grid-cols-2 gap-6"
                      >
                        {category.subsections.map((sub, idx) => (
                          <motion.div 
                            key={idx} 
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 hover:border-amber-200/90 transition-all flex flex-col justify-between"
                          >
                            <div className="space-y-4">
                              <div className="border-b border-gray-100 pb-3 flex items-center justify-between">
                                <h4 className="font-serif font-bold text-2xl text-gray-900">
                                  {sub.subtitle}
                                </h4>
                                {sub.note && (
                                  <span className="text-xs bg-amber-100 text-amber-900 font-bold px-2.5 py-1 rounded-full">
                                    {sub.note}
                                  </span>
                                )}
                              </div>

                              <ul className="space-y-3">
                                {sub.items.map((item, i) => (
                                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-medium">
                                    <CheckCircle2 size={16} className="text-gold-dark shrink-0 mt-1" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}

                    {/* Direct Items Grid */}
                    {category.items && (
                      <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                      >
                        {category.items.map((item, idx) => (
                          <motion.div 
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -2 }}
                            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-gold/50 transition-all flex items-start gap-3.5"
                          >
                            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                              {idx + 1}
                            </div>
                            <p className="text-sm font-medium text-gray-800 leading-snug">
                              {item.replace(/^\d+\.\s*/, '')}
                            </p>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        ) : (
          /* View Mode 2: In-Page Full Document (PDF Paper View) */
          <div className="space-y-6">
            {/* Document Page Tabs Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-stone-100 rounded-3xl border border-stone-200">
              <div className="flex flex-wrap items-center gap-2">
                {MENU_DOCUMENT_PAGES.map((page) => (
                  <button
                    key={page.pageNumber}
                    type="button"
                    onClick={() => setDocCurrentPage(page.pageNumber)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      docCurrentPage === page.pageNumber
                        ? 'bg-amber-700 text-white shadow-md'
                        : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                    }`}
                  >
                    <span>Strona {page.pageNumber}</span>
                    <span className="hidden sm:inline text-[10px] opacity-80">
                      ({page.title.split(',')[0].slice(0, 16)}...)
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsDocModalOpen(true);
                    setTimeout(() => window.print(), 350);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-amber-700 hover:bg-amber-600 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
                  title="Drukuj lub zapisz jako PDF"
                >
                  <Printer size={14} />
                  <span>Drukuj / PDF</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsDocModalOpen(true)}
                  className="px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                >
                  <Eye size={14} />
                  <span className="hidden sm:inline">Czytnik Pełnoekranowy</span>
                  <span className="sm:hidden">Pełny ekran</span>
                </button>
              </div>
            </div>

            {/* Document Paper Layout */}
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-stone-200 relative overflow-hidden font-sans">
              <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-stone-800">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-stone-500 font-bold block">
                    Karta Menu Okolicznościowego
                  </span>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900">
                    {activeDocPage.title}
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-300 text-stone-700">
                  Strona {activeDocPage.pageNumber} z {MENU_DOCUMENT_PAGES.length}
                </span>
              </div>

              {/* Page 1 Welcome Header */}
              {activeDocPage.pageNumber === 1 && activeDocPage.content.greeting && (
                <div className="mb-6 space-y-3 pb-6 border-b border-stone-200">
                  <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                    {activeDocPage.content.greeting}
                  </h4>
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-serif italic">
                    {activeDocPage.content.intro}
                  </p>
                  <div className="text-center py-2">
                    <span className="text-lg sm:text-xl font-bold tracking-tight">
                      w <span className="text-amber-700">HiT FiT</span> i <span className="text-emerald-700">Piwnicy pod Żabą</span>
                    </span>
                  </div>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    {activeDocPage.content.tagline}
                  </p>
                </div>
              )}

              {/* Document Sections */}
              <div className="space-y-6 text-sm sm:text-base leading-relaxed text-stone-800">
                {activeDocPage.content.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex items-baseline justify-between gap-2">
                      <h5 className="font-bold text-stone-900 text-base sm:text-lg tracking-tight font-serif flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-600 inline-block" />
                        {section.heading}
                      </h5>
                      {'note' in section && section.note && (
                        <span className="text-[11px] bg-amber-50 text-amber-900 font-bold px-2.5 py-0.5 rounded border border-amber-200 shrink-0">
                          {section.note}
                        </span>
                      )}
                    </div>

                    {'text' in section && section.text && (
                      <p className="text-stone-700 text-xs sm:text-sm pl-4 border-l-2 border-amber-200 leading-relaxed">
                        {section.text}
                      </p>
                    )}

                    {'items' in section && section.items && (
                      <ul className="space-y-2 pl-4 border-l-2 border-amber-200 text-xs sm:text-sm text-stone-700">
                        {section.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2">
                            <span className="text-amber-600 shrink-0 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Page Nav Footer */}
              <div className="mt-10 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {docCurrentPage > 1 && (
                    <button
                      type="button"
                      onClick={() => setDocCurrentPage(p => p - 1)}
                      className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold border border-stone-300 transition-all"
                    >
                      ← Poprzednia strona ({docCurrentPage - 1})
                    </button>
                  )}
                  {docCurrentPage < MENU_DOCUMENT_PAGES.length && (
                    <button
                      type="button"
                      onClick={() => setDocCurrentPage(p => p + 1)}
                      className="px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold shadow-sm transition-all"
                    >
                      Następna strona ({docCurrentPage + 1}) →
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setIsDocModalOpen(true)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 hover:text-amber-950 underline"
                >
                  <Printer size={14} />
                  <span>Drukuj / Pobierz całe 4 strony</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Full Document Reader Modal */}
      <MenuDocumentModal 
        isOpen={isDocModalOpen}
        onClose={() => setIsDocModalOpen(false)}
      />
    </section>
  );
}
