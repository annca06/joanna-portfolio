import { site } from '../content/site.js';
import './Brand.css';

/* ==========================================================================
   BRAND — the logo area
   ==========================================================================

   ┌────────────────────────────────────────────────────────────────────┐
   │  TO USE YOUR OWN LOGO                                              │
   │                                                                    │
   │  1. Put the file in `public/`      →  public/logo.svg              │
   │  2. Set LOGO_SRC below             →  const LOGO_SRC = '/logo.svg' │
   │  3. Adjust LOGO_WIDTH to taste                                     │
   │                                                                    │
   │  That is the only change needed. Every place the brand appears     │
   │  (header and footer) picks it up automatically.                    │
   │                                                                    │
   │  While LOGO_SRC is empty the typeset wordmark below is used, so    │
   │  the site never shows a gap or a broken image.                     │
   └────────────────────────────────────────────────────────────────────┘

   SVG is preferred — it stays crisp at any size and inherits no colour
   surprises. A PNG at 2× the displayed width also works.
   ========================================================================== */

const LOGO_SRC = '';
const LOGO_WIDTH = 140; // px, at desktop

export default function Brand({ as: Tag = 'span', tone = 'ink', className = '', ...rest }) {
  const classes = ['brand', `brand--${tone}`, className].filter(Boolean).join(' ');

  return (
    <Tag className={classes} {...rest}>
      {LOGO_SRC ? (
        <img
          className="brand__asset"
          src={LOGO_SRC}
          alt={site.name}
          style={{ width: `${LOGO_WIDTH}px` }}
        />
      ) : (
        <span className="brand__wordmark">{site.name}</span>
      )}
    </Tag>
  );
}
