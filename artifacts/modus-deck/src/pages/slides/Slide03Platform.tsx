export default function Slide03Platform() {
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
        <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.08em", color: "#C4654A", textTransform: "uppercase" }}>The Platform</div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ marginBottom: "4vh" }}>
          <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4654A", marginBottom: "1.5vh" }}>What Modus Is</div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "3.8vw", margin: "0 0 1.5vh 0", fontWeight: 400, lineHeight: 1.1, color: "#FDF8F0", textWrap: "balance", maxWidth: "70vw" }}>
            An intelligence layer above your existing commerce stack
          </h2>
          <div style={{ width: "5vw", height: "3px", backgroundColor: "#C4654A" }} />
        </div>

        <div style={{ display: "flex", gap: "2.5vw", flex: 1 }}>
          <div style={{ flex: 1, backgroundColor: "rgba(253, 248, 240, 0.07)", borderRadius: "1vw", padding: "2.5vh 2vw" }}>
            <div style={{ fontSize: "1.8vw", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#C4654A", marginBottom: "1vh" }}>01 — Ingest</div>
            <div style={{ fontSize: "1.15vw", fontWeight: 300, lineHeight: 1.55, opacity: 0.85 }}>Connects to Shopify, WooCommerce, BigCommerce, or direct import. Normalises all inputs into a unified schema.</div>
          </div>
          <div style={{ flex: 1, backgroundColor: "rgba(253, 248, 240, 0.07)", borderRadius: "1vw", padding: "2.5vh 2vw" }}>
            <div style={{ fontSize: "1.8vw", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#C4654A", marginBottom: "1vh" }}>02 — Process</div>
            <div style={{ fontSize: "1.15vw", fontWeight: 300, lineHeight: 1.55, opacity: 0.85 }}>Computes inventory health scores, customer segment affinity, seasonal indices, and logistics efficiency signals.</div>
          </div>
          <div style={{ flex: 1, backgroundColor: "rgba(253, 248, 240, 0.07)", borderRadius: "1vw", padding: "2.5vh 2vw" }}>
            <div style={{ fontSize: "1.8vw", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#C4654A", marginBottom: "1vh" }}>03 — Synthesise</div>
            <div style={{ fontSize: "1.15vw", fontWeight: 300, lineHeight: 1.55, opacity: 0.85 }}>Passes structured signals to Google Gemini or Anthropic Claude for contextual reasoning with auditable chains.</div>
          </div>
          <div style={{ flex: 1, backgroundColor: "rgba(253, 248, 240, 0.07)", borderRadius: "1vw", padding: "2.5vh 2vw" }}>
            <div style={{ fontSize: "1.8vw", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#C4654A", marginBottom: "1vh" }}>04 — Deliver</div>
            <div style={{ fontSize: "1.15vw", fontWeight: 300, lineHeight: 1.55, opacity: 0.85 }}>Prioritised action cards in the Modus dashboard — product, action, target segment, projected impact, and reasoning.</div>
          </div>
        </div>

        <div style={{ marginTop: "3vh", padding: "2vh 2.5vw", backgroundColor: "rgba(196, 101, 74, 0.15)", borderRadius: "0.8vw", borderLeft: "3px solid #C4654A" }}>
          <div style={{ fontSize: "1.25vw", fontWeight: 400, lineHeight: 1.5, opacity: 0.9, fontStyle: "italic", fontFamily: "'Playfair Display', Georgia, serif" }}>
            "Modus is not dependent on any external platform to deliver value. Integrations are enrichment layers — they improve quality when present and degrade gracefully when absent."
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", padding: "0 6vw 4vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ height: "1px", backgroundColor: "#FDF8F0", flex: 1, opacity: 0.18 }} />
        <div style={{ padding: "0 2vw", fontSize: "0.9vw", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5 }}>03</div>
        <div style={{ height: "1px", backgroundColor: "#FDF8F0", flex: 1, opacity: 0.18 }} />
      </div>
    </div>
  );
}
