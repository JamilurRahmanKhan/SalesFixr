"use client";

import { useRouter } from "next/navigation";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const SECURITY_ITEMS = [
  { icon: "verified", label: "End-to-End\nEncryption" },
  { icon: "api", label: "Secure API\nIntegrations" },
  { icon: "admin_panel_settings", label: "Role-Based\nAccess Control" },
  { icon: "storage", label: "Data\nMinimization" },
];

export function ServicesBottomRow() {
  const router = useRouter();

  return (
    <section className="bottom-row">
      <div className="consultation">
        <div className="portrait">JD</div>
        <div className="phone">
          <MaterialIcon name="call" />
        </div>
        <div className="consultation-copy">
          <h2>Not sure which service is right for you?</h2>
          <p>
            Book a free 30-minute software strategy session. We&rsquo;ll understand your goals and recommend the
            right path from product to platform.
          </p>
          <button type="button" onClick={() => router.push("/contact")}>
            Book a Demo <MaterialIcon name="chevron_right" />
          </button>
        </div>
      </div>
      <div className="security">
        <h2>Enterprise-Grade Security You Can Trust</h2>
        <div className="security-items">
          {SECURITY_ITEMS.map((item) => (
            <div key={item.label}>
              <MaterialIcon name={item.icon} />
              <span>
                {item.label.split("\n").map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
