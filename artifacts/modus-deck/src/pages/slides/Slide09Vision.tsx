export default function Slide09Vision() {
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
        <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.08em", color: "#C4654A", textTransform: "uppercase" }}>Long-Term Vision</div>
      </div>

      <div style={{ flex: 1, display: "flex", padding: "0 6vw", position: "relative", zIndex: 10, gap: "6vw", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "4vw", margin: "0 0 1.5vh 0", fontWeight: 400, lineHeight: 1.1, textWrap: "balance" }}>
            The Intelligence Operating System for Product-Based Business
          </h2>
          <div style={{ width: "5vw", height: "3px", backgroundColor: "#C4654A", marginBottom: "3.5vh" }} />
          <div style={{ fontSize: "1.3vw", fontWeight: 300, lineHeight: 1.65, opacity: 0.82, marginBottom: "3vh" }}>
            Modus is platform-agnostic and vertical-agnostic by architecture. As the user base scales, anonymised aggregate signals create compounding model improvement — strongest in verticals with complex inventory dynamics.
          </div>
          <div style={{ fontSize: "1.3vw", fontWeight: 300, lineHeight: 1.65, opacity: 0.82 }}>
            At full scale: a single platform where any operator, on any stack, gets a unified view of inventory health, customer behaviour, and commercial opportunity — with AI-reasoned actions to improve all three simultaneously.
          </div>
        </div>

        <div style={{ flex: "0 0 30vw", display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <div style={{ fontSize: "1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4654A", marginBottom: "0.5vh" }}>Structural Advantages</div>
          <div style={{ padding: "2vh 2vw", backgroundColor: "rgba(27, 94, 90, 0.07)", borderRadius: "0.8vw" }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 600, marginBottom: "0.4vh" }}>First-mover position</div>
            <div style={{ fontSize: "1.1vw", fontWeight: 300, opacity: 0.78, lineHeight: 1.45 }}>No existing platform occupies the intelligence synthesis layer. Inventory tools and recommendation engines cannot close this gap without becoming fundamentally different products.</div>
          </div>
          <div style={{ padding: "2vh 2vw", backgroundColor: "rgba(27, 94, 90, 0.07)", borderRadius: "0.8vw" }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 600, marginBottom: "0.4vh" }}>Data moat</div>
            <div style={{ fontSize: "1.1vw", fontWeight: 300, opacity: 0.78, lineHeight: 1.45 }}>Recommendation quality improves with platform scale — strongest in food, pharma, and fashion where stock type intelligence creates barriers generic tools cannot match.</div>
          </div>
          <div style={{ padding: "2vh 2vw", backgroundColor: "rgba(196, 101, 74, 0.09)", borderRadius: "0.8vw" }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 600, marginBottom: "0.4vh" }}>Complementary positioning</div>
            <div style={{ fontSize: "1.1vw", fontWeight: 300, opacity: 0.78, lineHeight: 1.45 }}>Sits above existing tools when present, partially substitutes their reporting functions when absent. Delivers value across the full spectrum of merchant sophistication.</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", padding: "0 6vw 4vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.18 }} />
        <div style={{ padding: "0 2vw", fontSize: "0.9vw", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5 }}>09</div>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.18 }} />
      </div>
    </div>
  );
}
