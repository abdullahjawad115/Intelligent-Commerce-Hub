export default function Slide05Pricing() {
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
        <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.08em", color: "#C4654A", textTransform: "uppercase" }}>Business Model</div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ marginBottom: "3.5vh" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "3.8vw", margin: "0 0 1.5vh 0", fontWeight: 400, lineHeight: 1.1 }}>Pricing Tiers</h2>
          <div style={{ width: "5vw", height: "3px", backgroundColor: "#C4654A" }} />
        </div>

        <div style={{ display: "flex", gap: "2vw", flex: 1 }}>
          <div style={{ flex: 1, backgroundColor: "rgba(27, 94, 90, 0.06)", borderRadius: "1vw", padding: "2.5vh 2vw", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#1B5E5A", marginBottom: "0.8vh" }}>Starter</div>
            <div style={{ fontSize: "2.8vw", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#1B5E5A", lineHeight: 1, marginBottom: "0.5vh" }}>Free</div>
            <div style={{ fontSize: "1vw", opacity: 0.65, marginBottom: "2vh" }}>Under $10k/mo revenue</div>
            <div style={{ fontSize: "1.1vw", fontWeight: 300, lineHeight: 1.55, opacity: 0.8 }}>Native data, 5 AI recommendations per week. Rule-based logic that graduates to full synthesis as data matures.</div>
          </div>

          <div style={{ flex: 1, backgroundColor: "rgba(27, 94, 90, 0.06)", borderRadius: "1vw", padding: "2.5vh 2vw", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#1B5E5A", marginBottom: "0.8vh" }}>Growth</div>
            <div style={{ fontSize: "2.8vw", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#1B5E5A", lineHeight: 1, marginBottom: "0.5vh" }}>$49<span style={{ fontSize: "1.3vw", fontWeight: 400 }}>/mo</span></div>
            <div style={{ fontSize: "1vw", opacity: 0.65, marginBottom: "2vh" }}>$10k–$80k/mo revenue</div>
            <div style={{ fontSize: "1.1vw", fontWeight: 300, lineHeight: 1.55, opacity: 0.8 }}>Up to 3 integrations, unlimited AI recommendations, full LLM synthesis pipeline.</div>
          </div>

          <div style={{ flex: 1, backgroundColor: "#1B5E5A", borderRadius: "1vw", padding: "2.5vh 2vw", display: "flex", flexDirection: "column", position: "relative" }}>
            <div style={{ position: "absolute", top: "1.5vh", right: "1.5vw", fontSize: "0.85vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#C4654A", backgroundColor: "rgba(196,101,74,0.15)", padding: "0.4vh 0.8vw", borderRadius: "0.4vw" }}>Popular</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#C4654A", marginBottom: "0.8vh" }}>Pro</div>
            <div style={{ fontSize: "2.8vw", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#FDF8F0", lineHeight: 1, marginBottom: "0.5vh" }}>$99<span style={{ fontSize: "1.3vw", fontWeight: 400 }}>/mo</span></div>
            <div style={{ fontSize: "1vw", opacity: 0.65, color: "#FDF8F0", marginBottom: "2vh" }}>$80k–$500k/mo revenue</div>
            <div style={{ fontSize: "1.1vw", fontWeight: 300, lineHeight: 1.55, opacity: 0.85, color: "#FDF8F0" }}>Full integration stack, advanced analytics, priority support, and custom reporting.</div>
          </div>

          <div style={{ flex: 1, backgroundColor: "rgba(27, 94, 90, 0.06)", borderRadius: "1vw", padding: "2.5vh 2vw", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#1B5E5A", marginBottom: "0.8vh" }}>Enterprise</div>
            <div style={{ fontSize: "2.8vw", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#1B5E5A", lineHeight: 1, marginBottom: "0.5vh" }}>Custom</div>
            <div style={{ fontSize: "1vw", opacity: 0.65, marginBottom: "2vh" }}>$500k+/mo revenue</div>
            <div style={{ fontSize: "1.1vw", fontWeight: 300, lineHeight: 1.55, opacity: 0.8 }}>Custom integrations, dedicated SLAs, white-glove onboarding, and dedicated support.</div>
          </div>
        </div>

        <div style={{ marginTop: "2.5vh", padding: "2vh 2.5vw", backgroundColor: "rgba(196, 101, 74, 0.1)", borderRadius: "0.8vw", display: "flex", alignItems: "center", gap: "2vw" }}>
          <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#C4654A", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FDF8F0", fontSize: "1.2vw", fontWeight: 700 }}>+</div>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#C4654A", marginBottom: "0.3vh" }}>Manufacturing Add-on — $79/mo</div>
            <div style={{ fontSize: "1.1vw", fontWeight: 300, opacity: 0.8 }}>Available on Growth or Pro. BOM tracking, WIP status, batch traceability, and production run recommendations. Phase 2.</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", padding: "0 6vw 4vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.18 }} />
        <div style={{ padding: "0 2vw", fontSize: "0.9vw", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5 }}>05</div>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.18 }} />
      </div>
    </div>
  );
}
