export default function Slide04WhoItServes() {
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
        <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.08em", color: "#C4654A", textTransform: "uppercase" }}>Market</div>
      </div>

      <div style={{ display: "flex", padding: "0 6vw", flex: 1, position: "relative", zIndex: 10, gap: "6vw" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "4vw", margin: "0 0 1.5vh 0", fontWeight: 400, lineHeight: 1.1, textWrap: "balance" }}>
            Any business with inventory, logistics, and sales
          </h2>
          <div style={{ width: "5vw", height: "3px", backgroundColor: "#C4654A", marginBottom: "3.5vh" }} />
          <div style={{ fontSize: "1.25vw", fontWeight: 300, lineHeight: 1.65, opacity: 0.82, marginBottom: "4vh", maxWidth: "40vw" }}>
            E-commerce merchants, wholesale distributors, omnichannel retailers, and operators in food, pharma, electronics, and fashion. Platform-agnostic by architecture.
          </div>
          <div style={{ padding: "2.5vh 2.5vw", backgroundColor: "rgba(196, 101, 74, 0.08)", borderRadius: "0.8vw" }}>
            <div style={{ fontSize: "1.1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#C4654A", marginBottom: "1vh" }}>Primary Segment</div>
            <div style={{ fontSize: "1.3vw", fontWeight: 400, lineHeight: 1.5 }}>Established mid-size businesses generating $10,000–$500,000/month with sufficient transactional history for AI synthesis.</div>
          </div>
        </div>

        <div style={{ flex: "0 0 32vw", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2.5vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2vw", padding: "2vh 2vw", backgroundColor: "rgba(27, 94, 90, 0.06)", borderRadius: "0.8vw" }}>
            <div style={{ width: "3.5vw", height: "3.5vw", borderRadius: "50%", backgroundColor: "#1B5E5A", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FDF8F0", fontSize: "1.3vw", fontWeight: 600 }}>A</div>
            <div>
              <div style={{ fontSize: "1.3vw", fontWeight: 600, marginBottom: "0.3vh" }}>E-commerce</div>
              <div style={{ fontSize: "1.1vw", fontWeight: 300, opacity: 0.75 }}>Shopify, WooCommerce, BigCommerce merchants</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "2vw", padding: "2vh 2vw", backgroundColor: "rgba(27, 94, 90, 0.06)", borderRadius: "0.8vw" }}>
            <div style={{ width: "3.5vw", height: "3.5vw", borderRadius: "50%", backgroundColor: "#1B5E5A", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FDF8F0", fontSize: "1.3vw", fontWeight: 600 }}>B</div>
            <div>
              <div style={{ fontSize: "1.3vw", fontWeight: 600, marginBottom: "0.3vh" }}>Wholesale & Distribution</div>
              <div style={{ fontSize: "1.1vw", fontWeight: 300, opacity: 0.75 }}>Multi-channel operators with complex fulfilment</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "2vw", padding: "2vh 2vw", backgroundColor: "rgba(27, 94, 90, 0.06)", borderRadius: "0.8vw" }}>
            <div style={{ width: "3.5vw", height: "3.5vw", borderRadius: "50%", backgroundColor: "#C4654A", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FDF8F0", fontSize: "1.3vw", fontWeight: 600 }}>C</div>
            <div>
              <div style={{ fontSize: "1.3vw", fontWeight: 600, marginBottom: "0.3vh" }}>Specialist Verticals</div>
              <div style={{ fontSize: "1.1vw", fontWeight: 300, opacity: 0.75 }}>Food & beverage, pharma, fashion, electronics</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "2vw", padding: "2vh 2vw", backgroundColor: "rgba(27, 94, 90, 0.06)", borderRadius: "0.8vw" }}>
            <div style={{ width: "3.5vw", height: "3.5vw", borderRadius: "50%", backgroundColor: "#1B5E5A", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FDF8F0", fontSize: "1.3vw", fontWeight: 600 }}>D</div>
            <div>
              <div style={{ fontSize: "1.3vw", fontWeight: 600, marginBottom: "0.3vh" }}>New Operators</div>
              <div style={{ fontSize: "1.1vw", fontWeight: 300, opacity: 0.75 }}>Starter tier: rule-based logic that graduates to full AI synthesis as data matures</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", padding: "0 6vw 4vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.18 }} />
        <div style={{ padding: "0 2vw", fontSize: "0.9vw", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5 }}>04</div>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.18 }} />
      </div>
    </div>
  );
}
