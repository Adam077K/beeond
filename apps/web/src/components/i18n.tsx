/**
 * Bilingual pair — both languages are SSR'd; html[lang] picks one via CSS
 * (globals.css). Hebrew is authored, not translated word-for-word: same
 * voice canon (direct, warm, anti-generic), numerals/Latin stay LTR.
 */
export function I18n({
  en,
  he,
  block = false,
}: {
  en: React.ReactNode;
  he: React.ReactNode;
  block?: boolean;
}) {
  return (
    <>
      <span className={`i18n-en ${block ? "block" : ""}`}>{en}</span>
      <span className={`i18n-he ${block ? "block" : ""}`} lang="he">
        {he}
      </span>
    </>
  );
}
