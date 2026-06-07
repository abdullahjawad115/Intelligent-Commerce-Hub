export default function Slide10Closing() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: "#1B5E5A", fontFamily: "'Space Grotesk', system-ui, sans-serif", color: "#FDF8F0" }}>
      <div style={{ position: "absolute", top: "-10vw", left: "-10vw", width: "55vw", height: "55vw", borderRadius: "50%", backgroundColor: "#FDF8F0", opacity: 0.04 }} />
      <div style={{ position: "absolute", bottom: "-15vw", right: "-10vw", width: "45vw", height: "45vw", borderRadius: "50%", backgroundColor: "#C4654A", opacity: 0.1 }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", border: "2px solid #C4654A", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#C4654A" }} />
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Modus</div>
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.08em", color: "#C4654A", textTransform: "uppercase" }}>Concept Proposal</div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0 6vw", position: "relative", zIndex: 10, textAlign: "center" }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4654A", marginBottom: "3vh" }}>
          Intelligent Commerce
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "7vw", margin: "0 0 3.5vh 0", fontWeight: 400, lineHeight: 1.05, color: "#FDF8F0", textWrap: "balance" }}>
          Modus
        </h2>
        <div style={{ width: "5vw", height: "3px", backgroundColor: "#C4654A", margin: "0 auto 3.5vh auto" }} />
        <p style={{ fontSize: "1.7vw", margin: "0 0 6vh 0", fontWeight: 300, lineHeight: 1.6, maxWidth: "52vw", opacity: 0.85, textWrap: "pretty" }}>
          An intelligence layer above existing commerce infrastructure. Connecting inventory health, customer behaviour, and commercial opportunity into a single, AI-reasoned view.
        </p>

        <div style={{ display: "flex", gap: "6vw", borderTop: "1px solid rgba(253, 248, 240, 0.18)", paddingTop: "4vh", marginTop: "2vh" }}>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.12em", opacity: 0.55, marginBottom: "1vh" }}>Category</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 500 }}>Commerce Technology / AI SaaS</div>
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.12em", opacity: 0.55, marginBottom: "1vh" }}>Launch Platform</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 500 }}>Shopify App Store</div>
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.12em", opacity: 0.55, marginBottom: "1vh" }}>MVP Timeline</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 500 }}>4–6 months</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", padding: "0 6vw 5vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ height: "1px", backgroundColor: "#FDF8F0", flex: 1, opacity: 0.18 }} />
        <div style={{ padding: "0 2vw", fontSize: "0.9vw", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5 }}>Modus — Intelligent Commerce. Unified.</div>
        <div style={{ height: "1px", backgroundColor: "#FDF8F0", flex: 1, opacity: 0.18 }} />
      </div>
    </div>
  );
}
