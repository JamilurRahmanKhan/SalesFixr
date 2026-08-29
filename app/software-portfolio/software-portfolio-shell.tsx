"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function SoftwarePortfolioShell({
  mode = "game",
  page = "index",
}: {
  mode?: "preview" | "game";
  page?: "index" | "services";
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
      } else if (event.data === "go-to-services") {
        router.push("/services");
      } else if (event.data === "go-to-home") {
        router.push("/software");
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
            className={`pointer-events-none absolute inset-0 z-10 grid place-items-center bg-[#111315] transition-opacity duration-500 ${
              loaded ? "opacity-0" : "opacity-100"
            }`}
            role="status"
            aria-live="polite"
            aria-hidden={loaded}
          >
            <div
              className="grid justify-items-center gap-6"
              style={{ animation: "walker-fade-in 0.6s ease-out both" }}
            >
              <svg
                viewBox="0 0 100 130"
                className="walker-figure h-28 w-auto"
                fill="none"
                stroke="#f4ead6"
                strokeWidth="3.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="50" cy="16" r="9.5" />
                <line x1="50" y1="26" x2="50" y2="70" />
                <line className="walker-arm-l" x1="50" y1="35" x2="34" y2="55" />
                <line className="walker-arm-r" x1="50" y1="35" x2="66" y2="55" />
                <line className="walker-leg-l" x1="50" y1="70" x2="33" y2="105" />
                <line className="walker-leg-r" x1="50" y1="70" x2="67" y2="105" />
                <line x1="12" y1="112" x2="88" y2="112" stroke="#dc7431" strokeWidth="2.4" opacity="0.55" />
              </svg>
              <div className="grid justify-items-center gap-2">
                <span className="font-display text-lg tracking-wide text-[#f4ead6]">Entering the journey</span>
                <span className="text-xs uppercase tracking-[0.28em] text-[#8a8479]">Preparing the project road</span>
              </div>
            </div>
          </div>
        )}

        <iframe
          ref={frameRef}
          title="Interactive CompassNCrew software portfolio"
          src={
            mode === "preview"
              ? `/software-portfolio-app/huly-landing/${page}.html`
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
