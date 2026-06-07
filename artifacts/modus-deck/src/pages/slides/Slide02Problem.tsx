export default function Slide02Problem() {
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
        <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.08em", color: "#C4654A", textTransform: "uppercase" }}>The Problem</div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ marginBottom: "4vh" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "4vw", margin: "0 0 1.5vh 0", fontWeight: 400, lineHeight: 1.1, color: "#1B5E5A", textWrap: "balance" }}>
            The Inventory Intelligence Gap
          </h2>
          <div style={{ width: "5vw", height: "3px", backgroundColor: "#C4654A" }} />
        </div>

        <div style={{ display: "flex", gap: "6vw", flex: 1 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3.5vh" }}>
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", backgroundColor: "#1B5E5A", display: "flex", justifyContent: "center", alignItems: "center", color: "#FDF8F0", fontSize: "1.4vw", fontWeight: 600, flexShrink: 0 }}>
                01
              </div>
              <div>
                <div style={{ fontSize: "1.5vw", fontWeight: 600, marginBottom: "0.8vh", color: "#1B5E5A" }}>Data abundance, insight scarcity</div>
                <div style={{ fontSize: "1.2vw", fontWeight: 300, lineHeight: 1.55, opacity: 0.8 }}>The average mid-size operator uses 3–7 separate tools — each producing siloed reports with no shared intelligence.</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", backgroundColor: "#1B5E5A", display: "flex", justifyContent: "center", alignItems: "center", color: "#FDF8F0", fontSize: "1.4vw", fontWeight: 600, flexShrink: 0 }}>
                02
              </div>
              <div>
                <div style={{ fontSize: "1.5vw", fontWeight: 600, marginBottom: "0.8vh", color: "#1B5E5A" }}>Carrying costs compound</div>
                <div style={{ fontSize: "1.2vw", fontWeight: 300, lineHeight: 1.55, opacity: 0.8 }}>Inventory carrying costs account for 20–30% of total inventory value annually. Up to 30% qualifies as dead or slow-moving stock at any given time.</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", backgroundColor: "#C4654A", display: "flex", justifyContent: "center", alignItems: "center", color: "#FDF8F0", fontSize: "1.4vw", fontWeight: 600, flexShrink: 0 }}>
                03
              </div>
              <div>
                <div style={{ fontSize: "1.5vw", fontWeight: 600, marginBottom: "0.8vh", color: "#1B5E5A" }}>The gap between inventory and customer data</div>
                <div style={{ fontSize: "1.2vw", fontWeight: 300, lineHeight: 1.55, opacity: 0.8 }}>No platform synthesises inventory health signals with customer behaviour to produce unified, actionable merchandising decisions.</div>
              </div>
            </div>
          </div>

          <div style={{ flex: "0 0 26vw", display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ backgroundColor: "#1B5E5A", borderRadius: "1vw", padding: "3vh 2.5vw", color: "#FDF8F0", textAlign: "center" }}>
              <div style={{ fontSize: "3.8vw", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}>7.2%</div>
              <div style={{ width: "3vw", height: "2px", backgroundColor: "#C4654A", margin: "1.5vh auto" }} />
              <div style={{ fontSize: "1.1vw", fontWeight: 300, lineHeight: 1.4, opacity: 0.85 }}>of all retail sales lost to inventory distortion globally each year</div>
            </div>
            <div style={{ backgroundColor: "rgba(27, 94, 90, 0.06)", borderRadius: "1vw", padding: "2.5vh 2.5vw", textAlign: "center" }}>
              <div style={{ fontSize: "3vw", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1, color: "#C4654A" }}>Aug 2025</div>
              <div style={{ width: "3vw", height: "2px", backgroundColor: "#1B5E5A", margin: "1.5vh auto", opacity: 0.3 }} />
              <div style={{ fontSize: "1.1vw", fontWeight: 300, lineHeight: 1.4, opacity: 0.8 }}>Shopify Stocky discontinuation — a significant market opening</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", padding: "0 6vw 4vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.18 }} />
        <div style={{ padding: "0 2vw", fontSize: "0.9vw", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5 }}>02</div>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.18 }} />
      </div>
    </div>
  );
}
