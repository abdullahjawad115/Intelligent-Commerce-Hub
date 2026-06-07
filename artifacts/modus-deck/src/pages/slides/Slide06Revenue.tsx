export default function Slide06Revenue() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: "#FDF8F0", fontFamily: "'Space Grotesk', system-ui, sans-serif", color: "#1B5E5A" }}>
      <div style={{ position: "absolute", top: "-10vw", right: "-10vw", width: "42vw", height: "42vw", borderRadius: "50%", backgroundColor: "#1B5E5A", opacity: 0.04 }} />
      <div style={{ position: "absolute", bottom: "-6vw", left: "-6vw", width: "32vw", height: "32vw", borderRadius: "50%", backgroundColor: "#C4654A", opacity: 0.04 }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", border: "2px solid #C4654A", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#C4654A" }} />
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Modus</div>
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.08em", color: "#C4654A", textTransform: "uppercase" }}>Revenue Projections</div>
      </div>

      <div style={{ flex: 1, display: "flex", padding: "0 6vw", position: "relative", zIndex: 10, gap: "6vw" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "3.8vw", margin: "0 0 1.5vh 0", fontWeight: 400, lineHeight: 1.1, textWrap: "balance" }}>
            Path to Break-Even
          </h2>
          <div style={{ width: "5vw", height: "3px", backgroundColor: "#C4654A", marginBottom: "3.5vh" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5vh" }}>
            <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
              <div style={{ width: "8vw", fontSize: "1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.65, flexShrink: 0 }}>Year 1</div>
              <div style={{ flex: 1, backgroundColor: "rgba(27, 94, 90, 0.15)", borderRadius: "0.4vw", height: "3.5vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
                <div style={{ width: "20%", height: "100%", backgroundColor: "#1B5E5A", borderRadius: "0.4vw", display: "flex", alignItems: "center", paddingLeft: "1vw" }}>
                </div>
              </div>
              <div style={{ width: "12vw", textAlign: "right" }}>
                <div style={{ fontSize: "1.4vw", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif" }}>$156K ARR</div>
                <div style={{ fontSize: "0.95vw", opacity: 0.65 }}>200 paying merchants</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
              <div style={{ width: "8vw", fontSize: "1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.65, flexShrink: 0 }}>Year 2</div>
              <div style={{ flex: 1, backgroundColor: "rgba(27, 94, 90, 0.15)", borderRadius: "0.4vw", height: "3.5vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
                <div style={{ width: "55%", height: "100%", backgroundColor: "#1B5E5A", borderRadius: "0.4vw" }}>
                </div>
              </div>
              <div style={{ width: "12vw", textAlign: "right" }}>
                <div style={{ fontSize: "1.4vw", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif" }}>$691K ARR</div>
                <div style={{ fontSize: "0.95vw", opacity: 0.65 }}>800 paying merchants</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
              <div style={{ width: "8vw", fontSize: "1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.65, flexShrink: 0 }}>Year 3</div>
              <div style={{ flex: 1, backgroundColor: "rgba(27, 94, 90, 0.15)", borderRadius: "0.4vw", height: "3.5vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
                <div style={{ width: "100%", height: "100%", backgroundColor: "#C4654A", borderRadius: "0.4vw" }}>
                </div>
              </div>
              <div style={{ width: "12vw", textAlign: "right" }}>
                <div style={{ fontSize: "1.4vw", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif" }}>$2.4M ARR</div>
                <div style={{ fontSize: "0.95vw", opacity: 0.65 }}>2,500 paying merchants</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "3.5vh", fontSize: "1.2vw", fontWeight: 300, lineHeight: 1.6, opacity: 0.78, maxWidth: "38vw" }}>
            Path to 200 paying merchants: capturing 0.05% of Shopify's 1.7M active stores requires 850 installs at a 25% conversion rate — achievable within 6–9 months of launch.
          </div>
        </div>

        <div style={{ flex: "0 0 26vw", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2.5vh" }}>
          <div style={{ width: "22vw", height: "22vw", borderRadius: "50%", border: "1px solid rgba(27, 94, 90, 0.2)", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", margin: "0 auto" }}>
            <div style={{ width: "19vw", height: "19vw", borderRadius: "50%", backgroundColor: "#1B5E5A", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "#FDF8F0", textAlign: "center", padding: "2vw" }}>
              <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.75, marginBottom: "1vh" }}>Avg MRR/Merchant</div>
              <div style={{ fontSize: "4vw", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}>$72</div>
              <div style={{ width: "3vw", height: "2px", backgroundColor: "#C4654A", margin: "1.5vh 0" }} />
              <div style={{ fontSize: "0.95vw", lineHeight: 1.4, opacity: 0.8, fontWeight: 300 }}>
                Base-case Year 2 blended across Starter, Growth, and Pro
              </div>
            </div>
            <div style={{ position: "absolute", top: "-0.8vw", left: "10vw", width: "0.5vw", height: "0.5vw", borderRadius: "50%", backgroundColor: "#C4654A" }} />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", padding: "0 6vw 4vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.18 }} />
        <div style={{ padding: "0 2vw", fontSize: "0.9vw", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5 }}>06</div>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.18 }} />
      </div>
    </div>
  );
}
