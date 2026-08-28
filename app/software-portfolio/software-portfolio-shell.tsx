"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function SoftwarePortfolioShell({
  mode = "game",
}: {
  mode?: "preview" | "game";
}) {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    document.body.classList.add("journey-mode");
    return () => document.body.classList.remove("journey-mode");
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const markLoaded = () => setLoaded(true);
    frame.addEventListener("load", markLoaded);

    // A prefetched static iframe can finish before React hydrates and attaches
    // its synthetic onLoad handler. Check the same-origin document once here
    // so the loading veil can never strand users over a ready WebGL scene.
    if (frame.contentDocument?.readyState === "complete") markLoaded();

    return () => frame.removeEventListener("load", markLoaded);
  }, []);

  useEffect(() => {
    if (mode !== "preview") return;
    function onMessage(event: MessageEvent) {
      if (event.origin !== window.location.origin) return;
      if (event.data === "enter-journey" || event.data === "go-to-software-portfolio") {
        router.push("/software-portfolio");
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [mode, router]);

  return (
    <section
      className="fixed inset-0 z-[70] grid min-h-[100dvh] grid-rows-[minmax(0,1fr)] bg-[#111315] text-[#f4ead6]"
      aria-label="CompassNCrew software portfolio journey"
    >
      <div className="relative min-h-0 overflow-hidden">
        {mode === "game" && (
          <div
            className={`pointer-events-none absolute inset-0 z-10 grid place-items-center bg-[#111315] transition-opacity duration-300 ${
              loaded ? "opacity-0" : "opacity-100"
            }`}
            role="status"
            aria-live="polite"
            aria-hidden={loaded}
          >
            <div className="grid justify-items-center gap-3">
              <span className="grid size-12 place-items-center rounded-[0.875rem] border border-white/12 font-display text-2xl text-[#dc7431]">
                C
              </span>
              <span className="text-sm text-[#b7afa2]">Preparing the project road</span>
            </div>
          </div>
        )}

        <iframe
          ref={frameRef}
          title="Interactive CompassNCrew software portfolio"
          src={
            mode === "preview"
              ? "/software-portfolio-app/huly-landing/index.html"
              : `/software-portfolio-app/index.html?mode=${mode}`
          }
          className="block h-full w-full border-0 bg-[#111315]"
          onLoad={() => setLoaded(true)}
          allow="autoplay; fullscreen"
        />
      </div>
    </section>
  );
}
