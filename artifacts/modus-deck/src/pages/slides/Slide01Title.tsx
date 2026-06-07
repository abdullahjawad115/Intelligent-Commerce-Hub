export default function Slide01Title() {
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
        <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.08em", color: "#C4654A", textTransform: "uppercase" }}>Concept Proposal</div>
      </div>

      <div style={{ flex: 1, display: "flex", padding: "0 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4654A", marginBottom: "2.5vh" }}>
            Commerce Technology / AI SaaS
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "6.5vw", margin: "0 0 3vh 0", fontWeight: 400, lineHeight: 1.08, color: "#1B5E5A", maxWidth: "56vw", textWrap: "balance" }}>
            Intelligent Commerce. Unified.
          </h1>
          <p style={{ fontSize: "1.6vw", margin: 0, fontWeight: 300, lineHeight: 1.65, maxWidth: "44vw", opacity: 0.82, textWrap: "pretty" }}>
            AI-powered inventory intelligence and personalised recommendations — one platform for any business that makes, holds, and sells physical products.
          </p>

          <div style={{ marginTop: "6vh", display: "flex", gap: "4vw", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.12em", opacity: 0.55, marginBottom: "0.5vh" }}>Target Market</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 500 }}>SMB to Enterprise</div>
            </div>
            <div style={{ width: "1px", height: "4vh", backgroundColor: "#1B5E5A", opacity: 0.2 }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.12em", opacity: 0.55, marginBottom: "0.5vh" }}>Core Technology</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 500 }}>LLM Synthesis + Multi-Source Data</div>
            </div>
          </div>
        </div>

        <div style={{ flex: "0 0 30vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: "22vw", height: "22vw", borderRadius: "50%", border: "1px solid rgba(27, 94, 90, 0.2)", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <div style={{ width: "19vw", height: "19vw", borderRadius: "50%", backgroundColor: "#1B5E5A", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "#FDF8F0", textAlign: "center", padding: "2vw" }}>
              <div style={{ fontSize: "4vw", fontWeight: 600, fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}>$1.77T</div>
              <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: "1vh", opacity: 0.9 }}>Inventory Distortion</div>
              <div style={{ width: "3vw", height: "2px", backgroundColor: "#C4654A", margin: "1.5vh 0" }} />
              <div style={{ fontSize: "0.9vw", lineHeight: 1.4, opacity: 0.8, fontWeight: 300 }}>
                Global annual cost of overstock and stockouts (IHL Group, 2023)
              </div>
            </div>
            <div style={{ position: "absolute", top: "-0.8vw", left: "10vw", width: "0.5vw", height: "0.5vw", borderRadius: "50%", backgroundColor: "#C4654A" }} />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", padding: "0 6vw 5vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.18 }} />
        <div style={{ padding: "0 2vw", fontSize: "0.9vw", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5 }}>Confidential</div>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.18 }} />
      </div>
    </div>
  );
}
