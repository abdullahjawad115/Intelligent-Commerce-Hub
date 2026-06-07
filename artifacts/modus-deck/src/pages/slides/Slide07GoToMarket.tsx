export default function Slide07GoToMarket() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: "#1B5E5A", fontFamily: "'Space Grotesk', system-ui, sans-serif", color: "#FDF8F0" }}>
      <div style={{ position: "absolute", top: "-10vw", left: "-10vw", width: "50vw", height: "50vw", borderRadius: "50%", backgroundColor: "#FDF8F0", opacity: 0.04 }} />
      <div style={{ position: "absolute", bottom: "-15vw", right: "-10vw", width: "40vw", height: "40vw", borderRadius: "50%", backgroundColor: "#C4654A", opacity: 0.08 }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", border: "2px solid #C4654A", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#C4654A" }} />
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Modus</div>
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.08em", color: "#C4654A", textTransform: "uppercase" }}>Go-To-Market</div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ marginBottom: "3.5vh" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "3.8vw", margin: "0 0 1.5vh 0", fontWeight: 400, lineHeight: 1.1, textWrap: "balance" }}>First 200 Merchants</h2>
          <div style={{ width: "5vw", height: "3px", backgroundColor: "#C4654A" }} />
        </div>

        <div style={{ display: "flex", gap: "2.5vw", flex: 1 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ fontSize: "1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4654A", marginBottom: "0.5vh" }}>First 10 — Direct Outreach</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 300, lineHeight: 1.6, opacity: 0.85 }}>
              Hand-selected from Shopify merchant communities on Reddit and Facebook Groups. Framed as beta access — not a sales pitch. These are proof of concept and case-study material.
            </div>
          </div>
          <div style={{ width: "1px", backgroundColor: "rgba(253,248,240,0.15)" }} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ fontSize: "1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4654A", marginBottom: "0.5vh" }}>10 to 50 — Beta Programme</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 300, lineHeight: 1.6, opacity: 0.85 }}>
              Three months free for onboarding calls, weekly check-ins, and testimonials. Product Hunt launch targeting e-commerce operators. Outreach to Shopify-adjacent newsletters and podcasters.
            </div>
          </div>
          <div style={{ width: "1px", backgroundColor: "rgba(253,248,240,0.15)" }} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ fontSize: "1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4654A", marginBottom: "0.5vh" }}>50 to 200 — App Store</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 300, lineHeight: 1.6, opacity: 0.85 }}>
              Shopify App Store listing optimisation and organic ranking. Co-marketing with integration partners — Klaviyo, LimeSpot — for reach into established merchant bases.
            </div>
          </div>
        </div>

        <div style={{ marginTop: "3vh", display: "flex", gap: "2vw" }}>
          <div style={{ flex: 1, padding: "2vh 2vw", backgroundColor: "rgba(253, 248, 240, 0.07)", borderRadius: "0.8vw" }}>
            <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#C4654A", marginBottom: "0.8vh", fontWeight: 600 }}>Phase 1 Funding</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 300, lineHeight: 1.5, opacity: 0.85 }}>Non-dilutive grants and competition prizes. Pre-launch, no equity sacrifice.</div>
          </div>
          <div style={{ flex: 1, padding: "2vh 2vw", backgroundColor: "rgba(253, 248, 240, 0.07)", borderRadius: "0.8vw" }}>
            <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#C4654A", marginBottom: "0.8vh", fontWeight: 600 }}>Phase 2 Funding</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 300, lineHeight: 1.5, opacity: 0.85 }}>Y Combinator target: $500K for 7% equity. Seedcamp and EF as parallel European targets.</div>
          </div>
          <div style={{ flex: 1, padding: "2vh 2vw", backgroundColor: "rgba(253, 248, 240, 0.07)", borderRadius: "0.8vw" }}>
            <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#C4654A", marginBottom: "0.8vh", fontWeight: 600 }}>Phase 3 Funding</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 300, lineHeight: 1.5, opacity: 0.85 }}>Seed round post-traction: $1M–$5M from AI and commerce-focused VCs.</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", padding: "0 6vw 4vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ height: "1px", backgroundColor: "#FDF8F0", flex: 1, opacity: 0.18 }} />
        <div style={{ padding: "0 2vw", fontSize: "0.9vw", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5 }}>07</div>
        <div style={{ height: "1px", backgroundColor: "#FDF8F0", flex: 1, opacity: 0.18 }} />
      </div>
    </div>
  );
}
