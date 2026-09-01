"use client";

import { useEffect, useState } from "react";

export function DhakaClock() {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    const update = () =>
      setTime(
        `Dhaka ${new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })}`,
      );
    update();
    const interval = window.setInterval(update, 30000);
    return () => window.clearInterval(interval);
  }, []);

  return <span className="abt-hero-time">{time ?? "—"}</span>;
}
