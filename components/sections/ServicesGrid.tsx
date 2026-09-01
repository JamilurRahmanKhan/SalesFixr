import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { CheckItem } from "@/components/ui/CheckItem";

function CardHeading({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="service-heading">
      <span className="icon-box">
        <MaterialIcon name={icon} />
      </span>
      <h2>{title}</h2>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <section className="services-grid" aria-label="Our services">
      <article className="service-card service-custom">
        <CardHeading icon="code" title="Custom Software Development" />
        <p className="service-description">From MVPs to enterprise platforms, we engineer software around the way your business works.</p>
        <div className="visual custom-visual">
          <div className="system-core"><MaterialIcon name="code" /></div>
          <div className="system-line" />
          <div className="system-nodes">
            <span className="mini-box"><MaterialIcon name="database" /></span>
            <span className="mini-box"><MaterialIcon name="hub" /></span>
            <span className="mini-box"><MaterialIcon name="dashboard" /></span>
            <span className="mini-box"><MaterialIcon name="bolt" /></span>
          </div>
        </div>
        <ul>
          <CheckItem>Custom Business Software</CheckItem>
          <CheckItem>SaaS &amp; MVP Development</CheckItem>
          <CheckItem>Internal Business Tools</CheckItem>
          <CheckItem>Legacy Modernization</CheckItem>
        </ul>
      </article>

      <article className="service-card service-web">
        <CardHeading icon="language" title="Web Application Development" />
        <p className="service-description">Scalable, high-performance web products built with the right modern stack for your roadmap.</p>
        <div className="visual chat-visual web-visual">
          <div className="web-avatar"><MaterialIcon name="chat" /></div>
          <div className="typing">•••</div>
          <div className="bubble dark">Can you tell me more about pricing?</div>
          <div className="bubble light">Good day John, how can I help?</div>
        </div>
        <ul>
          <CheckItem>React &amp; Next.js Development</CheckItem>
          <CheckItem>Vue &amp; Angular Development</CheckItem>
          <CheckItem>Node.js &amp; Python Backends</CheckItem>
          <CheckItem>Progressive Web Apps</CheckItem>
        </ul>
      </article>

      <article className="service-card service-mobile">
        <CardHeading icon="smartphone" title="Mobile App Development" />
        <p className="service-description">Native-quality mobile experiences that make your product useful wherever your customers are.</p>
        <div className="visual mobile-visual">
          <div className="phone-frame">
            <div className="phone-notch" />
            <div className="phone-line short" />
            <div className="phone-card">
              <MaterialIcon name="trending_up" />
              <b>Weekly growth</b>
              <strong>+28.4%</strong>
            </div>
            <div className="phone-line" />
            <div className="phone-line short" />
          </div>
          <div className="mobile-badge">iOS</div>
          <div className="mobile-badge right">Android</div>
        </div>
        <ul>
          <CheckItem>React Native Development</CheckItem>
          <CheckItem>iOS &amp; Android Experiences</CheckItem>
          <CheckItem>Mobile API Integration</CheckItem>
          <CheckItem>App Store Readiness</CheckItem>
        </ul>
      </article>

      <article className="service-card service-ai">
        <CardHeading icon="smart_toy" title="AI & Intelligent Software" />
        <p className="service-description">Bring practical intelligence into your product with assistants, search, automation, and document AI.</p>
        <div className="visual people-visual">
          <div className="person-card faded"><MaterialIcon name="person" /></div>
          <div className="person-card"><MaterialIcon name="person" /><small>AI Assistant</small></div>
          <div className="person-card featured"><MaterialIcon name="smart_toy" /><strong>Smart Agent</strong><em>Trained</em></div>
          <div className="person-card"><MaterialIcon name="dashboard" /><small>Voice Agent</small></div>
        </div>
        <ul>
          <CheckItem>AI Chatbots &amp; Sales Assistants</CheckItem>
          <CheckItem>RAG &amp; AI Search Systems</CheckItem>
          <CheckItem>OCR &amp; Document AI</CheckItem>
          <CheckItem>Voice Agents &amp; LLM Integration</CheckItem>
        </ul>
      </article>

      <article className="service-card service-crm">
        <CardHeading icon="groups" title="CRM & ERP Solutions" />
        <p className="service-description">Connected systems that give teams clarity across sales, operations, people, and customer relationships.</p>
        <div className="visual marketing-visual">
          <div className="rings"><span /><span /><span /></div>
          <div className="orbit-icon one"><MaterialIcon name="groups" /></div>
          <div className="orbit-icon two"><MaterialIcon name="database" /></div>
          <div className="orbit-icon three"><MaterialIcon name="bolt" /></div>
        </div>
        <ul>
          <CheckItem>Custom CRM &amp; ERP Development</CheckItem>
          <CheckItem>Sales &amp; Inventory Management</CheckItem>
          <CheckItem>HR &amp; Payroll Systems</CheckItem>
          <CheckItem>Client &amp; Vendor Portals</CheckItem>
        </ul>
      </article>

      <article className="service-card service-api">
        <CardHeading icon="api" title="API Development & Integration" />
        <p className="service-description">Reliable APIs and integrations that connect your products to the tools your business already uses.</p>
        <div className="visual support-visual">
          <div><b>Request</b><small>POST /orders</small></div>
          <MaterialIcon name="chevron_right" />
          <div><b>API Layer</b><small>200 Success</small></div>
          <MaterialIcon name="chevron_right" />
          <div className="resolved"><b>Connected</b><MaterialIcon name="check" /></div>
        </div>
        <ul>
          <CheckItem>REST &amp; GraphQL APIs</CheckItem>
          <CheckItem>Payment &amp; Banking Integrations</CheckItem>
          <CheckItem>SMS &amp; WhatsApp APIs</CheckItem>
          <CheckItem>Google &amp; Microsoft APIs</CheckItem>
        </ul>
      </article>

      <article className="service-card service-cloud">
        <CardHeading icon="cloud" title="Cloud Development" />
        <p className="service-description">Cloud-native foundations that make your software secure, observable, portable, and ready to scale.</p>
        <div className="visual custom-visual">
          <div className="system-core"><MaterialIcon name="cloud" /></div>
          <div className="system-line" />
          <div className="system-nodes">
            <span className="mini-box"><MaterialIcon name="database" /></span>
            <span className="mini-box"><MaterialIcon name="api" /></span>
            <span className="mini-box"><MaterialIcon name="verified" /></span>
            <span className="mini-box"><MaterialIcon name="bolt" /></span>
          </div>
        </div>
        <ul>
          <CheckItem>Google Cloud Architecture</CheckItem>
          <CheckItem>Docker &amp; Containerization</CheckItem>
          <CheckItem>Deployment Automation</CheckItem>
          <CheckItem>Scalable Infrastructure</CheckItem>
        </ul>
      </article>

      <article className="service-card service-commerce">
        <CardHeading icon="shopping_cart" title="E-commerce Development" />
        <p className="service-description">Commerce experiences designed to sell across subscriptions, marketplaces, B2B, and headless channels.</p>
        <div className="visual commerce-visual">
          <MaterialIcon name="shopping_cart" />
          <MaterialIcon name="chevron_right" />
          <MaterialIcon name="inventory_2" />
          <MaterialIcon name="chevron_right" />
          <MaterialIcon name="local_shipping" />
          <MaterialIcon name="chevron_right" />
          <div className="done"><MaterialIcon name="check" /></div>
        </div>
        <ul>
          <CheckItem>Custom E-commerce Stores</CheckItem>
          <CheckItem>Marketplace Development</CheckItem>
          <CheckItem>Subscription Platforms</CheckItem>
          <CheckItem>Headless Commerce</CheckItem>
        </ul>
      </article>

      <article className="service-card service-industry">
        <CardHeading icon="apartment" title="Industry-Specific Software" />
        <p className="service-description">Purpose-built platforms for complex industries where generic tools cannot keep up with the workflow.</p>
        <div className="visual integration-visual">
          <span className="slack">✣</span>
          <span className="shopify">S</span>
          <span className="hubspot">●</span>
          <span className="salesforce">☁</span>
          <span className="plus"><MaterialIcon name="add" /></span>
        </div>
        <ul>
          <CheckItem>Healthcare &amp; Fintech Software</CheckItem>
          <CheckItem>Recruitment &amp; Staffing Platforms</CheckItem>
          <CheckItem>Real Estate &amp; Logistics</CheckItem>
          <CheckItem>EdTech, Legal &amp; Hospitality</CheckItem>
        </ul>
      </article>

      <article className="service-card service-product">
        <CardHeading icon="design_services" title="Product Design & Engineering" />
        <p className="service-description">Turn promising ideas into focused, technically sound products with a clear path to launch.</p>
        <div className="visual product-visual">
          <div className="product-flow">
            <span className="mini-box">Discover</span>
            <MaterialIcon name="chevron_right" />
            <span className="mini-box">Design</span>
            <MaterialIcon name="chevron_right" />
            <span className="mini-box">Build</span>
            <MaterialIcon name="chevron_right" />
            <span className="mini-box"><MaterialIcon name="verified" /></span>
          </div>
          <div className="product-progress"><span /><span /><span /><span /></div>
        </div>
        <ul>
          <CheckItem>Product Discovery &amp; Strategy</CheckItem>
          <CheckItem>MVP Planning</CheckItem>
          <CheckItem>Feature Prioritization</CheckItem>
          <CheckItem>Software Architecture</CheckItem>
        </ul>
      </article>

      <article className="service-card service-qa">
        <CardHeading icon="task_alt" title="QA & Testing" />
        <p className="service-description">Protect the experience and the business with disciplined testing across every important release.</p>
        <div className="visual qa-visual">
          <div className="qa-head"><b>Release quality</b><strong>98.7%</strong></div>
          <div className="qa-bars"><span /><span /><span /><span /><span /><span /></div>
          <div className="qa-status"><MaterialIcon name="check" /> 142 tests passed <em>2 monitored</em></div>
        </div>
        <ul>
          <CheckItem>Manual &amp; Automated Testing</CheckItem>
          <CheckItem>Performance Testing</CheckItem>
          <CheckItem>Security Testing</CheckItem>
          <CheckItem>Regression &amp; QA Automation</CheckItem>
        </ul>
      </article>

      <article className="service-card service-support">
        <CardHeading icon="build" title="Maintenance & Support" />
        <p className="service-description">Keep your software healthy, secure, and improving with dependable long-term engineering care.</p>
        <div className="visual support-visual">
          <div><b>New Ticket</b><small>Issue reported</small></div>
          <MaterialIcon name="chevron_right" />
          <div><b>In Progress</b><small>Engineer assigned</small></div>
          <MaterialIcon name="chevron_right" />
          <div className="resolved"><b>Resolved</b><MaterialIcon name="check" /></div>
        </div>
        <ul>
          <CheckItem>Bug Fixes &amp; Enhancements</CheckItem>
          <CheckItem>Performance Monitoring</CheckItem>
          <CheckItem>Security Updates</CheckItem>
          <CheckItem>Dedicated Development Teams</CheckItem>
        </ul>
      </article>
    </section>
  );
}
