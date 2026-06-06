import './_group.css';
import { AlertTriangle, TrendingDown, CheckCircle, ChevronRight, ArrowRight } from 'lucide-react';

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

const CRITICAL = [
  { name: 'Heavyweight Hoodie — Charcoal XL', sku: 'HH-CHR-XL', units: 28, velocity: '14.3 u/day', days: 2, exposure: '$4,480' },
  { name: 'Merino Sock 3-Pack — Navy', sku: 'MS3-NVY-M', units: 14, velocity: '8.1 u/day', days: 2, exposure: '$840' },
  { name: 'Quilted Vest — Olive M', sku: 'QV-OLV-M', units: 6, velocity: '5.2 u/day', days: 1, exposure: '$1,200' },
];

const AT_RISK = [
  { name: 'Linen Overshirt — Sand L', sku: 'LO-SND-L', units: 94, velocity: '4.2 u/day', days: 22, exposure: '$7,520' },
  { name: 'Leather Card Sleeve — Tan', sku: 'LCS-TAN-OS', units: 210, velocity: '1.8 u/day', days: 117, exposure: '$4,100' },
  { name: 'Canvas Backpack — Stone', sku: 'CB-STN-OS', units: 48, velocity: '2.3 u/day', days: 21, exposure: '$6,720' },
  { name: 'Ribbed Beanie — Cream', sku: 'RB-CRM-OS', units: 72, velocity: '3.1 u/day', days: 23, exposure: '$2,160' },
];

const HEALTHY = [
  { name: 'Waxed Canvas Tote — Forest', sku: 'WCT-FOR-OS', units: 134, velocity: '9.8 u/day', days: 14 },
  { name: 'Merino Crew — Slate M', sku: 'MC-SLT-M', units: 88, velocity: '6.2 u/day', days: 14 },
  { name: 'Utility Belt — Black', sku: 'UB-BLK-OS', units: 56, velocity: '4.0 u/day', days: 14 },
  { name: 'Denim Work Shirt — Indigo L', sku: 'DWS-IND-L', units: 112, velocity: '7.3 u/day', days: 15 },
  { name: 'Corduroy Cap — Burgundy', sku: 'CC-BUR-OS', units: 93, velocity: '5.8 u/day', days: 16 },
];

function ColHeader({ label, count, color, Icon }: { label: string; count: number; color: string; Icon: any }) {
  return (
    <div style={{ display: 'flex', justify: 'space-between', alignItems: 'center', padding: '14px 16px', borderBottom: '0.5px solid var(--border)', background: 'var(--paper-2)', gap: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Icon size={13} color={color} />
        <span style={{ fontSize: 12, fontWeight: 500, color }}>{label}</span>
      </div>
      <span style={{ fontSize: 11, padding: '2px 8px', background: color === 'var(--red)' ? 'var(--red-bg)' : color === 'var(--amber)' ? 'var(--amber-bg)' : 'var(--green-bg)', color, border: `0.5px solid ${color}` }}>{count} SKUs</span>
    </div>
  );
}

export function Inventory() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--paper)' }}>
      <TopBar active="Inventory" />
      <div style={{ flex: 1, padding: '32px 40px' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 400, marginBottom: 4 }}>Inventory Intelligence</h1>
            <p style={{ fontSize: 11, color: 'var(--ink-3)' }}>1,284 SKUs tracked · Velocity model recalculated every 6h · Last sync 3 min ago</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['All', 'Apparel', 'Accessories', 'Footwear'].map((c, i) => (
              <button key={c} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '5px 12px', border: '0.5px solid var(--border-strong)', background: i === 0 ? 'var(--ink)' : 'transparent', color: i === 0 ? 'var(--paper)' : 'var(--ink)', cursor: 'pointer' }}>{c}</button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '3fr 4fr 4fr', gap: 12, marginBottom: 20 }}>

          <div style={{ border: '0.5px solid var(--red)', background: 'var(--paper)' }}>
            <ColHeader label="Critical" count={CRITICAL.length} color="var(--red)" Icon={AlertTriangle} />
            <div>
              {CRITICAL.map((item, i) => (
                <div key={item.sku} style={{ padding: '14px 16px', borderBottom: i < CRITICAL.length - 1 ? '0.5px solid var(--border)' : 'none' }}>
                  <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 3 }}>{item.name}</div>
                  <div style={{ fontSize: 10, color: 'var(--ink-3)', marginBottom: 8 }}>{item.sku}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 10 }}>
                    <div style={{ background: 'var(--paper-2)', padding: '6px 10px', border: '0.5px solid var(--border)' }}>
                      <div style={{ fontSize: 10, color: 'var(--ink-3)', marginBottom: 2 }}>Velocity</div>
                      <div style={{ fontSize: 12, fontWeight: 500 }}>{item.velocity}</div>
                    </div>
                    <div style={{ background: 'var(--red-bg)', padding: '6px 10px', border: '0.5px solid var(--red)' }}>
                      <div style={{ fontSize: 10, color: 'var(--red)', marginBottom: 2 }}>Days left</div>
                      <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--red)' }}>~{item.days}d</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 10, color: 'var(--ink-3)' }}>{item.units} units · {item.exposure} at risk</span>
                    <button style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '4px 10px', background: 'var(--red)', color: 'var(--paper)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                      Get rec <ArrowRight size={9} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ border: '0.5px solid var(--amber)', background: 'var(--paper)' }}>
            <ColHeader label="At Risk" count={AT_RISK.length} color="var(--amber)" Icon={TrendingDown} />
            <div>
              {AT_RISK.map((item, i) => (
                <div key={item.sku} style={{ padding: '14px 16px', borderBottom: i < AT_RISK.length - 1 ? '0.5px solid var(--border)' : 'none' }}>
                  <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 3 }}>{item.name}</div>
                  <div style={{ fontSize: 10, color: 'var(--ink-3)', marginBottom: 8 }}>{item.sku}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, marginBottom: 10 }}>
                    <div style={{ background: 'var(--paper-2)', padding: '6px 8px', border: '0.5px solid var(--border)' }}>
                      <div style={{ fontSize: 9, color: 'var(--ink-3)', marginBottom: 2 }}>Units</div>
                      <div style={{ fontSize: 11, fontWeight: 500 }}>{item.units}</div>
                    </div>
                    <div style={{ background: 'var(--paper-2)', padding: '6px 8px', border: '0.5px solid var(--border)' }}>
                      <div style={{ fontSize: 9, color: 'var(--ink-3)', marginBottom: 2 }}>Velocity</div>
                      <div style={{ fontSize: 11 }}>{item.velocity}</div>
                    </div>
                    <div style={{ background: 'var(--amber-bg)', padding: '6px 8px', border: '0.5px solid var(--amber)' }}>
                      <div style={{ fontSize: 9, color: 'var(--amber)', marginBottom: 2 }}>Days sup.</div>
                      <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--amber)' }}>{item.days}d</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 10, color: 'var(--ink-3)' }}>{item.exposure} exposure</span>
                    <button style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '4px 10px', background: 'transparent', color: 'var(--amber)', border: '0.5px solid var(--amber)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                      Get rec <ArrowRight size={9} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ border: '0.5px solid var(--green)', background: 'var(--paper)' }}>
            <ColHeader label="Healthy" count={HEALTHY.length} color="var(--green)" Icon={CheckCircle} />
            <div>
              {HEALTHY.map((item, i) => (
                <div key={item.sku} style={{ padding: '12px 16px', borderBottom: i < HEALTHY.length - 1 ? '0.5px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 2 }}>{item.name}</div>
                    <div style={{ fontSize: 10, color: 'var(--ink-3)' }}>{item.sku}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 10, color: 'var(--ink-3)' }}>{item.velocity}</div>
                      <div style={{ fontSize: 11, color: 'var(--green)', fontWeight: 500 }}>{item.days}d supply</div>
                    </div>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green)' }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: '12px 16px', borderTop: '0.5px solid var(--border)', fontSize: 11, color: 'var(--ink-3)' }}>
              +{1284 - CRITICAL.length - AT_RISK.length - HEALTHY.length} more SKUs healthy
            </div>
          </div>

        </div>

        <div style={{ border: '0.5px solid var(--border)', padding: '12px 16px', background: 'var(--paper-2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 11, color: 'var(--ink-2)' }}>
            <span style={{ fontWeight: 500 }}>Velocity model:</span> Recalculates using a 28-day weighted rolling window, with Q4 seasonal adjustment applied from Oct–Dec. Lead times pulled from Inventory Planner.
          </div>
          <button style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '5px 14px', border: '0.5px solid var(--ink)', background: 'transparent', cursor: 'pointer', whiteSpace: 'nowrap' }}>Export report</button>
        </div>

      </div>
    </div>
  );
}
