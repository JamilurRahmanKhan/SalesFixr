"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

/** Pointer-driven 3D tilt, matching the original `.ai-card` hover behavior. */
export function TiltCard({
  className,
  children,
  ...rest
}: {
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const onEnter = () => {
    const el = ref.current;
    if (!el) return;
    rectRef.current = el.getBoundingClientRect();
    el.classList.add("tilting");
  };

  const onMove = (event: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    if (!rectRef.current) rectRef.current = el.getBoundingClientRect();
    const rect = rectRef.current;
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    el.style.setProperty("--rx", `${(px - 0.5) * 14}deg`);
    el.style.setProperty("--ry", `${(0.5 - py) * 10}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("tilting");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    rectRef.current = null;
  };

  return (
    <article
      ref={ref}
      className={className}
      onPointerEnter={onEnter}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...rest}
    >
      {children}
    </article>
  );
}
