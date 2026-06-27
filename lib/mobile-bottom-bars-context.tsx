"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useScrollAwareBottomBar } from "@/lib/use-scroll-aware-bottom-bar";

const SCROLL_DOWN_THRESHOLD = 10;

interface MobileBottomBarsContextValue {
  scrollVisible: boolean;
  mobileRevealed: boolean;
  revealMobile: () => void;
  /** Scroll-up or mobile chevron tap — shared by TOC + ask input */
  barsVisible: boolean;
}

const MobileBottomBarsContext =
  createContext<MobileBottomBarsContextValue | null>(null);

export function MobileBottomBarsProvider({ children }: { children: ReactNode }) {
  const scrollVisible = useScrollAwareBottomBar();
  const [mobileRevealed, setMobileRevealed] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    lastYRef.current = window.scrollY;

    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastYRef.current;

        if (delta > SCROLL_DOWN_THRESHOLD) {
          setMobileRevealed(false);
        }

        lastYRef.current = y;
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const revealMobile = useCallback(() => setMobileRevealed(true), []);

  const barsVisible = scrollVisible || mobileRevealed;

  return (
    <MobileBottomBarsContext.Provider
      value={{ scrollVisible, mobileRevealed, revealMobile, barsVisible }}
    >
      {children}
    </MobileBottomBarsContext.Provider>
  );
}

export function useMobileBottomBars() {
  const context = useContext(MobileBottomBarsContext);
  if (!context) {
    throw new Error(
      "useMobileBottomBars must be used within MobileBottomBarsProvider"
    );
  }
  return context;
}
