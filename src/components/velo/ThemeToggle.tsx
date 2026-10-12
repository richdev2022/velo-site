"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

/* hydration-safe "mounted" without effects */
const emptySubscribe = () => () => {};
const useMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`group relative inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/8 text-white backdrop-blur-md transition-all hover:border-velo-400/60 hover:bg-white/14 ${className}`}
    >
      {/* glow ring */}
      <span
        className={`pointer-events-none absolute inset-0 rounded-full transition-opacity duration-500 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
        style={{ boxShadow: "inset 0 0 14px rgba(77,176,247,0.35)" }}
        aria-hidden="true"
      />
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ y: 14, opacity: 0, rotate: -70 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -14, opacity: 0, rotate: 70 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex"
          >
            {isDark ? (
              <Moon className="h-[17px] w-[17px] text-velo-200" />
            ) : (
              <Sun className="h-[17px] w-[17px] text-gold-400" />
            )}
          </motion.span>
        )}
      </AnimatePresence>
      {!mounted && <span className="h-[17px] w-[17px]" aria-hidden="true" />}
    </button>
  );
}
