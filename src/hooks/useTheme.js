import { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

const KEY = 'tis-theme';
const isDarkNow = () => document.documentElement.classList.contains('dark');

/**
 * Theme state. The initial class is applied by the inline script in index.html,
 * so state is read from the DOM (no flash). toggle() plays a circular reveal
 * from the clicked point using the View Transitions API, with a plain fallback.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => (isDarkNow() ? 'dark' : 'light'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem(KEY, theme);
    } catch {
      /* storage can be blocked (private mode); the theme still works */
    }
  }, [theme]);

  const toggle = useCallback(
    (origin) => {
      const next = theme === 'dark' ? 'light' : 'dark';
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!document.startViewTransition || reduced) {
        setTheme(next);
        return;
      }
      const x = origin?.x ?? window.innerWidth / 2;
      const y = origin?.y ?? 0;
      const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
      const transition = document.startViewTransition(() => {
        flushSync(() => setTheme(next));
        document.documentElement.classList.toggle('dark', next === 'dark');
      });
      transition.ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 650, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
        );
      });
    },
    [theme]
  );

  return { theme, toggle };
}
