import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

const SCROLL_KEY = "scroll_positions";

function saveScrollPosition(path: string) {
  try {
    const positions = JSON.parse(sessionStorage.getItem(SCROLL_KEY) || "{}");
    positions[path] = window.scrollY;
    sessionStorage.setItem(SCROLL_KEY, JSON.stringify(positions));
  } catch {}
}

function restoreScrollPosition(path: string) {
  try {
    const positions = JSON.parse(sessionStorage.getItem(SCROLL_KEY) || "{}");
    return positions[path] ?? 0;
  } catch {
    return 0;
  }
}

export function ScrollToTop() {
  const [pathname] = useLocation();
  const prevPath = useRef<string>("");
  const isBack = useRef<boolean>(false);

  useEffect(() => {
    const onPopState = () => { isBack.current = true; };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    // Save previous page scroll before leaving
    if (prevPath.current && prevPath.current !== pathname) {
      saveScrollPosition(prevPath.current);
    }

    if (isBack.current) {
      const y = restoreScrollPosition(pathname);
      window.scrollTo({ top: y, behavior: "instant" });
      isBack.current = false;
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    prevPath.current = pathname;
  }, [pathname]);

  return null;
}
