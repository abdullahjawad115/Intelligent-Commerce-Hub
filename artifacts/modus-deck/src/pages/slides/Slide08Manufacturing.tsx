export default function Slide08Manufacturing() {
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
        <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.08em", color: "#C4654A", textTransform: "uppercase" }}>Manufacturing Add-on — Phase 2</div>
      </div>

      <div style={{ display: "flex", padding: "0 6vw", position: "relative", zIndex: 10, gap: "5vw", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4654A", marginBottom: "1.5vh" }}>Production Intelligence</div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "3.8vw", margin: "0 0 1.5vh 0", fontWeight: 400, lineHeight: 1.1, textWrap: "balance" }}>
            Beyond the merchant. Into the factory.
          </h2>
          <div style={{ width: "5vw", height: "3px", backgroundColor: "#C4654A", marginBottom: "3.5vh" }} />
          <div style={{ fontSize: "1.25vw", fontWeight: 300, lineHeight: 1.65, opacity: 0.8, marginBottom: "3.5vh", maxWidth: "40vw" }}>
            Targets brands with in-house or outsourced production — cosmetics, supplements, food, electronics, furniture, and any vertical with FDA or compliance-driven batch tracking requirements.
          </div>
          <div style={{ padding: "2vh 2.5vw", backgroundColor: "rgba(196, 101, 74, 0.09)", borderRadius: "0.8vw", display: "inline-flex", gap: "2vw", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "2.5vw", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: "#C4654A", lineHeight: 1 }}>$79<span style={{ fontSize: "1.2vw", fontWeight: 400 }}>/mo</span></div>
              <div style={{ fontSize: "1vw", opacity: 0.65 }}>on top of Growth or Pro</div>
            </div>
            <div style={{ width: "1px", height: "4vh", backgroundColor: "#C4654A", opacity: 0.3 }} />
            <div style={{ fontSize: "1.15vw", fontWeight: 300, lineHeight: 1.5, opacity: 0.8 }}>
              Includes structured concierge onboarding for BOM configuration and traceability setup
            </div>
          </div>
        </div>

        <div style={{ flex: "0 0 32vw", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2vh" }}>
          <div style={{ backgroundColor: "rgba(27, 94, 90, 0.07)", borderRadius: "0.8vw", padding: "2vh 2vw", display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#1B5E5A", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FDF8F0", fontSize: "1.1vw", fontWeight: 600 }}>I</div>
            <div>
              <div style={{ fontSize: "1.3vw", fontWeight: 600, marginBottom: "0.4vh" }}>BOM Tracking</div>
              <div style={{ fontSize: "1.1vw", fontWeight: 300, opacity: 0.78, lineHeight: 1.45 }}>Every component, supplier, lot number, and COGS tracked per finished good.</div>
            </div>
          </div>
          <div style={{ backgroundColor: "rgba(27, 94, 90, 0.07)", borderRadius: "0.8vw", padding: "2vh 2vw", display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#1B5E5A", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FDF8F0", fontSize: "1.1vw", fontWeight: 600 }}>II</div>
            <div>
              <div style={{ fontSize: "1.3vw", fontWeight: 600, marginBottom: "0.4vh" }}>WIP Status Board</div>
              <div style={{ fontSize: "1.1vw", fontWeight: 300, opacity: 0.78, lineHeight: 1.45 }}>Live view across Planned → Cutting → Assembly → QC → Ready stages.</div>
            </div>
          </div>
          <div style={{ backgroundColor: "rgba(27, 94, 90, 0.07)", borderRadius: "0.8vw", padding: "2vh 2vw", display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#1B5E5A", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FDF8F0", fontSize: "1.1vw", fontWeight: 600 }}>III</div>
            <div>
              <div style={{ fontSize: "1.3vw", fontWeight: 600, marginBottom: "0.4vh" }}>Batch Traceability</div>
              <div style={{ fontSize: "1.1vw", fontWeight: 300, opacity: 0.78, lineHeight: 1.45 }}>Full lot tracking with certifications — GOTS, RWS, LWG Gold — for compliance-driven verticals.</div>
            </div>
          </div>
          <div style={{ backgroundColor: "rgba(196, 101, 74, 0.09)", borderRadius: "0.8vw", padding: "2vh 2vw", display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#C4654A", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FDF8F0", fontSize: "1.1vw", fontWeight: 600 }}>IV</div>
            <div>
              <div style={{ fontSize: "1.3vw", fontWeight: 600, marginBottom: "0.4vh" }}>Production Run Recommendations</div>
              <div style={{ fontSize: "1.1vw", fontWeight: 300, opacity: 0.78, lineHeight: 1.45 }}>AI-generated schedules with revenue-at-risk estimates to prioritise urgent runs.</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", padding: "0 6vw 4vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.18 }} />
        <div style={{ padding: "0 2vw", fontSize: "0.9vw", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5 }}>08</div>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.18 }} />
      </div>
    </div>
  );
}
