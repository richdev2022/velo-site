"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Cursor ambient glow — the "mouse attraction" layer.
 * A soft luminous field that trails the cursor across the whole site
 * with spring physics (slight lag feels magnetic and premium).
 */
export function MouseGlow() {
  const mx = useMotionValue(-800);
  const my = useMotionValue(-800);
  const gx = useSpring(mx, { stiffness: 120, damping: 22, mass: 0.6 });
  const gy = useSpring(my, { stiffness: 120, damping: 22, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 hidden lg:block"
      style={{ x: gx, y: gy }}
    >
      <div className="cursor-glow -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
}
