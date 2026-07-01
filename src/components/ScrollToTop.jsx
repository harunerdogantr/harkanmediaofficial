import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  // Disable the browser's native scroll restoration so it doesn't race
  // lazy-loaded route content: on reload it otherwise tries to restore the
  // previous scroll offset before/while the chunk is still loading, then
  // re-corrects again once the real height lands, causing a visible jump.
  // This makes the effect below the sole authority over scroll position.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop; 