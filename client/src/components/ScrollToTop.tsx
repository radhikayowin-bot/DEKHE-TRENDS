import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

// Store scroll positions per route in sessionStorage
const SCROLL_KEY = "scroll_positions";

function getScrollPositions(): Record<string, number> {
  try {
    return JSON.parse(sessionStorage.getItem(SCROLL_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveScrollPosition(path: string, y: number) {
  try {
    const positions = getScrollPositions();
    positions[path] = y;
    sessionStorage.setItem(SCROLL_KEY, JSON.stringify(positions));
  } catch {
    // sessionStorage not available
  }
}

function getScrollPosition(path: string): number {
  return getScrollPositions()[path] ?? 0;
}

export function ScrollToTop() {
  const [pathname] = useLocation();
  const prevPathname = useRef<string>(pathname);
  const isPopState = useRef<boolean>(false);

  // Detect browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      isPopState.current = true;
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Save scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      saveScrollPosition(pathname, window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Handle route changes
  useEffect(() => {
    if (prevPathname.current === pathname) return;

    if (isPopState.current) {
      // Back/forward: restore saved position
      const savedY = getScrollPosition(pathname);
      requestAnimationFrame(() => {
        window.scrollTo({ top: savedY, behavior: "instant" });
      });
      isPopState.current = false;
    } else {
      // New navigation: scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    prevPathname.current = pathname;
  }, [pathname]);

  return null;
}
