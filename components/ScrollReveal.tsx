"use client";

import React, { ElementType } from "react";
import { useScrollReveal } from "./useScrollReveal";

type AnimationType =
  | "fade-up"
  | "fade-in"
  | "scale-in"
  | "blur-in"
  | "slide-in-left"
  | "slide-in-right";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  threshold?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  className = "",
  as: Component = "div",
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold, once });

  // CSS classes defined in globals.css for these specific animation strings
  // We use inline styles for dynamic variables like delay and duration
  const style = {
    "--animation-delay": `${delay}s`,
    "--animation-duration": `${duration}s`,
  } as React.CSSProperties;

  return (
    <Component
      ref={ref}
      className={`scroll-reveal ${animation} ${className}`}
      data-visible={isVisible}
      style={style}
    >
      {children}
    </Component>
  );
}
