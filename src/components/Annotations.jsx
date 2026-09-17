/* ==========================================================================
   HANDWRITTEN ANNOTATIONS
   Drawn marks, used sparingly. They are decorative only and are hidden from
   assistive technology — the meaning always lives in the text beside them.
   ========================================================================== */

/** A soft pen arrow, curving down and to the right. */
export function HandArrow({ className = '', flip = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 104 72"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M6 9c14-6 33-4 45 4 9 6 14 15 16 26 1 6 1 12 0 19" />
      <path d="M60 46c2.5 6.5 5 10.5 7 12.5" />
      <path d="M75 44c-3.5 6-6 10.5-8 14.5" />
    </svg>
  );
}

/** An open pen circle with a slight overshoot, drawn around a word. */
export function HandCircle({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 62"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M158 9C120 2 62 3 30 12 8 18 2 33 14 43c14 12 62 16 106 12 34-3 62-11 66-22 2-7-6-13-20-17"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** A short rule, drawn by hand rather than set by a ruler. */
export function HandRule({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 6c26-3 54-4 82-3 25 1 48 2 72 4" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
