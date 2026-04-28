import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const [pathname] = useLocation();
  const lastPath = useRef<string | null>(null);

  // Disable browser scroll restoration once on mount
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Always scroll to top when pathname changes, even same-depth routes
    if (lastPath.current !== pathname) {
      lastPath.current = pathname;
      // Use instant to avoid fighting with CSS smooth scroll
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}
