import './_group.css';
import { Filter, Zap, ChevronRight, TrendingUp, Tag, Layers, ArrowUpRight } from 'lucide-react';

const NAV = ['Onboarding', 'Dashboard', 'Recommendations', 'Inventory', 'Integrations'];

function TopBar({ active }: { active: string }) {
  return (
    <div style={{ borderBottom: '0.5px solid var(--border-strong)', background: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', height: 48, flexShrink: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 500, letterSpacing: '-0.3px' }}>Modus</span>
        <span style={{ width: 1, height: 16, background: 'var(--border-strong)', margin: '0 4px' }} />
        <span style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Northbound Co. — Pro</span>
      </div>
      <nav style={{ display: 'flex', gap: 0 }}>
        {NAV.map(n => (
          <button key={n} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '0 16px', height: 48, background: 'none', border: 'none', borderBottom: n === active ? '1.5px solid var(--ink)' : '1.5px solid transparent', cursor: 'pointer', color: n === active ? 'var(--ink)' : 'var(--ink-3)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            {n}
          </button>
        ))}
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 28, height: 28, border: '0.5px solid var(--border-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, background: 'var(--paper-2)' }}>JK</div>
        <span style={{ fontSize: 12 }}>Jordan K.</span>
      </div>
    </div>
  );
}

type ActionType = 'PROMOTE' | 'BUNDLE' | 'DISCOUNT' | 'REORDER' | 'CLEARANCE';

const RECS: Array<{
  id: number;
  name: string;
  sku: string;
  action: ActionType;
  confidence: number;
  impact: string;
  impactValue: string;
  reason: string;
  signals: string[];
  category: string;
}> = [
  {
    id: 1, name: 'Merino Crew — Slate', sku: 'MC-SLT-M', action: 'BUNDLE', confidence: 94,
    impact: 'Revenue uplift', impactValue: '+$3,200',
    reason: 'Frequently co-purchased with Merino Turtleneck (SKU: MT-SLT-M). 68% of buyers purchase both within 7 days — surfacing as a bundle increases average order value with zero markdown cost.',
    signals: ['Co-purchase data', 'Email segment overlap', 'Browse affinity'], category: 'Apparel'
  },
  {
    id: 2, name: 'Linen Overshirt — Sand', sku: 'LO-SND-L', action: 'DISCOUNT', confidence: 88,
    impact: 'Holding cost saved', impactValue: '−$890',
    reason: '94 units on hand. Sell-through velocity has dropped to 4.2 units/day from 11.8 last month — excess supply now 38 days above optimal. A 15% markdown clears stock before season close.',
    signals: ['Velocity drop', 'Days of supply', 'Seasonal curve'], category: 'Apparel'
  },
  {
    id: 3, name: 'Waxed Canvas Tote — Forest', sku: 'WCT-FOR-OS', action: 'PROMOTE', confidence: 91,
    impact: 'Missed revenue potential', impactValue: '+$2,800',
    reason: 'High wishlist addition rate (3.4× category avg) with below-average conversion — likely low discovery. Customers who own the Utility Belt have 2.1× likelihood of purchasing this.',
    signals: ['Wishlist rate', 'Conversion gap', 'Cross-product affinity'], category: 'Accessories'
  },
  {
    id: 4, name: 'Heavyweight Hoodie — Charcoal', sku: 'HH-CHR-XL', action: 'REORDER', confidence: 97,
    impact: 'Stockout prevention', impactValue: '< 11 days',
    reason: 'Current stock: 28 units. At Q4 velocity (14.3 units/day), you hit zero in 11 days. Lead time from supplier is 18 days. Reorder immediately to avoid a complete stockout in peak season.',
    signals: ['Velocity model', 'Lead time data', 'Seasonal uplift'], category: 'Apparel'
  },
  {
    id: 5, name: 'Leather Card Sleeve — Tan', sku: 'LCS-TAN-OS', action: 'CLEARANCE', confidence: 82,
    impact: 'Capital recovery', impactValue: '$4,100',
    reason: 'Minimal reorder history and declining category interest based on search trends. 210 units aged 90+ days. Clearance pricing at −35% recovers $4,100 capital and frees warehouse space.',
    signals: ['Age analysis', 'Category trend', 'Search signal'], category: 'Accessories'
  },
];

const ACTION_STYLE: Record<ActionType, { bg: string; color: string; border: string }> = {
  PROMOTE:   { bg: 'var(--blue-bg)',  color: 'var(--blue)',  border: 'var(--blue)' },
  BUNDLE:    { bg: 'var(--green-bg)', color: 'var(--green)', border: 'var(--green)' },
  DISCOUNT:  { bg: 'var(--amber-bg)', color: 'var(--amber)', border: 'var(--amber)' },
  REORDER:   { bg: 'var(--red-bg)',   color: 'var(--red)',   border: 'var(--red)' },
  CLEARANCE: { bg: 'var(--paper-3)',  color: 'var(--ink-2)', border: 'var(--border-strong)' },
};

export function Recommendations() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--paper)' }}>
      <TopBar active="Recommendations" />
      <div style={{ flex: 1, padding: '32px 40px' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 400, marginBottom: 4 }}>AI Recommendations</h1>
            <p style={{ fontSize: 11, color: 'var(--ink-3)' }}>14 active signals · Model updated 3 hrs ago · Confidence threshold: 80%</p>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '6px 14px', border: '0.5px solid var(--border-strong)', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, color: 'var(--ink)' }}>
              <Filter size={11} /> Filter
            </button>
            {(['ALL', 'BUNDLE', 'REORDER', 'DISCOUNT', 'PROMOTE'] as const).map(f => (
              <button key={f} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '5px 12px', border: '0.5px solid var(--border-strong)', background: f === 'ALL' ? 'var(--ink)' : 'transparent', color: f === 'ALL' ? 'var(--paper)' : 'var(--ink)', cursor: 'pointer' }}>{f}</button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {RECS.map(rec => {
            const s = ACTION_STYLE[rec.action];
            return (
              <div key={rec.id} style={{ border: '0.5px solid var(--border-strong)', background: 'var(--paper)', padding: '20px 24px', display: 'grid', gridTemplateColumns: '1fr 200px', gap: 24 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <span style={{ fontSize: 10, padding: '3px 9px', background: s.bg, color: s.color, border: `0.5px solid ${s.border}`, fontWeight: 500, letterSpacing: '0.06em' }}>{rec.action}</span>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 400 }}>{rec.name}</span>
                    <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>· {rec.sku}</span>
                    <span style={{ fontSize: 10, color: 'var(--ink-3)', marginLeft: 4, padding: '2px 7px', border: '0.5px solid var(--border)', background: 'var(--paper-2)' }}>{rec.category}</span>
                  </div>

                  <p style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: 12, maxWidth: 640 }}>{rec.reason}</p>

                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {rec.signals.map(sig => (
                      <span key={sig} style={{ fontSize: 10, padding: '2px 8px', border: '0.5px solid var(--border)', color: 'var(--ink-3)', background: 'var(--paper-2)' }}>{sig}</span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '0.5px solid var(--border)', paddingLeft: 24 }}>
                  <div>
                    <div style={{ fontSize: 10, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 4 }}>{rec.impact}</div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 400, color: rec.action === 'CLEARANCE' ? 'var(--ink)' : rec.action === 'REORDER' ? 'var(--red)' : 'var(--green)', letterSpacing: '-0.3px', marginBottom: 6 }}>{rec.impactValue}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--ink-3)' }}>
                      <Zap size={10} />
                      {rec.confidence}% confidence
                    </div>
                  </div>
                  <button style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '8px 0', border: '0.5px solid var(--ink)', background: 'var(--ink)', color: 'var(--paper)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 16 }}>
                    Apply action <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '0.5px solid var(--border)', paddingTop: 16 }}>
          <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>Showing 5 of 14 recommendations</span>
          <button style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '5px 14px', border: '0.5px solid var(--border-strong)', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
            Load more <ArrowUpRight size={11} />
          </button>
        </div>
      </div>
    </div>
  );
}
