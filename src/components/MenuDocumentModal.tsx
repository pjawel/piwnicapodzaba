import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Printer, Download, ChevronLeft, ChevronRight, FileText, 
  Search, ChefHat, CheckCircle2, Sparkles, Phone, Wine, Coffee
} from 'lucide-react';
import { MENU_DOCUMENT_PAGES } from '../data';

interface MenuDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuDocumentModal({ isOpen, onClose }: MenuDocumentModalProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewAll, setViewAll] = useState<boolean>(false);
  const [searchDoc, setSearchDoc] = useState<string>('');

  if (!isOpen) return null;

  const activePageData = MENU_DOCUMENT_PAGES.find(p => p.pageNumber === currentPage) || MENU_DOCUMENT_PAGES[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-stone-100 rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden border border-amber-300/40 max-h-[92vh] flex flex-col my-auto"
        >
          {/* Header Bar */}
          <div className="bg-stone-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-gold flex items-center justify-center text-white shadow-md">
                <FileText size={20} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white flex items-center gap-2">
                  Oficjalna Karta Menu
                  <span className="text-xs bg-gold/20 text-gold-light border border-gold/40 px-2 py-0.5 rounded-full font-sans font-semibold">
                    Hit Fit & Piwnica pod Żabą
                  </span>
                </h3>
                <p className="text-xs text-stone-400">
                  Dokument oferty bankietowej (4 strony) • Możliwość druku / zapisu PDF
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 via-gold to-yellow-600 hover:from-amber-500 hover:to-gold text-stone-950 font-bold text-xs transition-all shadow-md active:scale-95 shrink-0"
                title="Wydrukuj lub zapisz jako PDF"
              >
                <Printer size={15} className="shrink-0" />
                <span className="whitespace-nowrap">Drukuj / Pobierz PDF</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-stone-800 hover:bg-red-900/40 text-stone-300 hover:text-white flex items-center justify-center transition-all border border-stone-700 shrink-0"
                aria-label="Zamknij"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Subheader Toolbar: Page Tabs & Search */}
          <div className="bg-stone-200/90 px-5 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-stone-300 shrink-0">
            {/* View Mode & Page Selector */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
              {MENU_DOCUMENT_PAGES.map((page) => (
                <button
                  key={page.pageNumber}
                  type="button"
                  onClick={() => {
                    setViewAll(false);
                    setCurrentPage(page.pageNumber);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    !viewAll && currentPage === page.pageNumber
                      ? 'bg-amber-700 text-white shadow-sm'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
                  }`}
                >
                  <span>Strona {page.pageNumber}</span>
                  <span className="hidden md:inline text-[10px] opacity-75 font-normal">
                    ({page.title.split(',')[0].slice(0, 18)}...)
                  </span>
                </button>
              ))}

              <button
                type="button"
                onClick={() => setViewAll(true)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  viewAll
                    ? 'bg-amber-700 text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
                }`}
              >
                Wszystkie 4 Strony
              </button>
            </div>

            {/* Quick Search inside document */}
            <div className="relative w-full sm:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Szukaj w dokumencie..."
                value={searchDoc}
                onChange={(e) => setSearchDoc(e.target.value)}
                className="w-full pl-8 pr-7 py-1.5 bg-white rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-gold text-stone-800"
              />
              {searchDoc && (
                <button
                  type="button"
                  onClick={() => setSearchDoc('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Document Content Paper Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-stone-300/60 print:bg-white print:p-0">
            <div className="max-w-3xl mx-auto space-y-8 print:max-w-full">
              {viewAll ? (
                /* All Pages View */
                MENU_DOCUMENT_PAGES.map((page) => (
                  <DocumentPagePaper key={page.pageNumber} page={page} search={searchDoc} />
                ))
              ) : (
                /* Single Page View */
                <DocumentPagePaper page={activePageData} search={searchDoc} />
              )}
            </div>
          </div>

          {/* Footer Bar with Pagination & Booking CTA */}
          <div className="bg-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 shrink-0">
            {!viewAll ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="p-2 rounded-xl border border-stone-300 disabled:opacity-30 hover:bg-stone-100 transition-colors text-stone-700"
                  title="Poprzednia strona"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-xs font-bold text-stone-700">
                  Strona {currentPage} z {MENU_DOCUMENT_PAGES.length}
                </span>
                <button
                  type="button"
                  disabled={currentPage === MENU_DOCUMENT_PAGES.length}
                  onClick={() => setCurrentPage((p) => Math.min(MENU_DOCUMENT_PAGES.length, p + 1))}
                  className="p-2 rounded-xl border border-stone-300 disabled:opacity-30 hover:bg-stone-100 transition-colors text-stone-700"
                  title="Następna strona"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            ) : (
              <span className="text-xs font-bold text-stone-600">
                Widok wszystkich 4 stron dokumentu
              </span>
            )}

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold border border-stone-300 transition-all active:scale-95 shadow-xs"
                title="Wydrukuj lub zapisz jako PDF"
              >
                <Printer size={14} className="text-amber-700" />
                <span>Drukuj / PDF</span>
              </button>

              <a
                href="tel:661637770"
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-gold hover:from-amber-500 hover:to-gold text-white text-xs font-bold shadow-md transition-all whitespace-nowrap"
              >
                <Phone size={14} />
                <span>Rezerwacja: 661 637 770</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

interface MenuDocPageType {
  pageNumber: number;
  title: string;
  content: {
    greeting?: string;
    intro?: string;
    brand?: string;
    tagline?: string;
    sections: {
      heading: string;
      text?: string;
      note?: string;
      items?: string[];
    }[];
  };
}

function DocumentPagePaper({ page, search }: { page: MenuDocPageType; search: string; key?: React.Key }) {
  const highlight = (text: string) => {
    if (!search || !search.trim()) return text;
    const parts = text.split(new RegExp(`(${search})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 text-amber-950 font-bold px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-stone-200 font-sans text-stone-900 relative print:shadow-none print:border-none print:p-8 print:my-0 page-break-after">
      {/* Page Header Indicator */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-stone-800/80">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-stone-500 font-bold block">
            Karta Menu Okolicznościowego
          </span>
          <h4 className="font-serif font-bold text-lg text-stone-900">
            {page.title}
          </h4>
        </div>
        <div className="text-right">
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-stone-100 border border-stone-300 text-stone-700">
            Strona {page.pageNumber} / {MENU_DOCUMENT_PAGES.length}
          </span>
        </div>
      </div>

      {/* Page 1 Special Greeting */}
      {page.pageNumber === 1 && page.content.greeting && (
        <div className="mb-6 space-y-3 pb-6 border-b border-stone-200">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
            {page.content.greeting}
          </h3>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-serif italic">
            {page.content.intro}
          </p>
          <div className="text-center py-2">
            <span className="text-lg sm:text-xl font-bold tracking-tight">
              w <span className="text-amber-700">HiT FiT</span> i <span className="text-emerald-700">Piwnicy pod Żabą</span>
            </span>
          </div>
          <p className="text-stone-600 text-xs sm:text-sm">
            {page.content.tagline}
          </p>
        </div>
      )}

      {/* Sections Content */}
      <div className="space-y-5 text-sm sm:text-base leading-relaxed text-stone-800">
        {page.content.sections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-2">
            <div className="flex items-baseline justify-between gap-2">
              <h5 className="font-bold text-stone-900 text-sm sm:text-base tracking-tight font-serif flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 inline-block" />
                {section.heading}
              </h5>
              {'note' in section && section.note && (
                <span className="text-[11px] bg-amber-50 text-amber-900 font-bold px-2 py-0.5 rounded border border-amber-200 shrink-0">
                  {section.note}
                </span>
              )}
            </div>

            {'text' in section && section.text && (
              <p className="text-stone-700 text-xs sm:text-sm pl-3.5 border-l-2 border-amber-200">
                {highlight(section.text)}
              </p>
            )}

            {'items' in section && section.items && (
              <ul className="space-y-1.5 pl-3.5 border-l-2 border-amber-200 text-xs sm:text-sm text-stone-700">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2">
                    <span className="text-amber-600 shrink-0 mt-0.5">•</span>
                    <span>{highlight(item)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Page Footer */}
      <div className="mt-8 pt-4 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500 font-medium">
        <span>Hit Fit & Piwnica pod Żabą • Lubin</span>
        <span>Rezerwacje: 661 637 770</span>
      </div>
    </div>
  );
}
