import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const STORAGE_KEY = (path) => `scroll_pos:${path}`;

/**
 * ScrollMemory
 * ─────────────
 * Placed once inside SiteLayout. On every route change:
 *   • Effect CLEANUP  → saves current window.scrollY for the path we're leaving.
 *   • Effect BODY     → restores the saved scrollY for the path we're entering
 *                       (or scrolls to top if no saved position exists).
 *
 * Uses sessionStorage so positions are cleared when the tab/session ends.
 * No CSS, Tailwind, or visual changes whatsoever.
 */
export default function ScrollMemory() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // ── RESTORE ────────────────────────────────────────────────────────────
    const saved = sessionStorage.getItem(STORAGE_KEY(path));
    if (saved !== null) {
      // requestAnimationFrame ensures the new page content has painted
      // before we jump — prevents a visible flash to 0 then jump.
      requestAnimationFrame(() => {
        window.scrollTo({ top: parseInt(saved, 10), behavior: 'instant' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // ── SAVE (runs on path change before next effect fires) ────────────────
    return () => {
      sessionStorage.setItem(STORAGE_KEY(path), String(Math.round(window.scrollY)));
    };
  }, [location.pathname]);

  return null; // purely behavioural — renders nothing
}
