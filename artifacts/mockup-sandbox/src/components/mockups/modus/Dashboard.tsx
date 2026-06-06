import './_group.css';
import { TrendingUp, Package, Zap, AlertTriangle, ArrowUpRight, ArrowDownRight, ChevronRight } from 'lucide-react';

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

const MONTHS = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const VALS = [68, 74, 82, 71, 96, 112, 88, 79, 91, 104, 118, 137];
const MAX_VAL = 145;

const RECS = [
  { id: 1, name: 'Merino Crew — Slate', action: 'BUNDLE', impact: '+$3,200 est. revenue', reason: 'Frequently co-purchased with Merino Turtleneck. 68% of buyers purchase both within 7 days.' },
  { id: 2, name: 'Linen Overshirt — Sand', action: 'DISCOUNT', impact: '−$890 holding cost', reason: '94 units · 4.2 days sell-through. 38 days excess supply at current velocity.' },
];

export function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--paper)' }}>
      <TopBar active="Dashboard" />
      <div style={{ flex: 1, padding: '36px 40px' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 400, marginBottom: 4 }}>Overview</h1>
            <p style={{ fontSize: 11, color: 'var(--ink-3)' }}>Last synced 3 minutes ago · Shopify + Klaviyo + Inventory Planner</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['7d', '30d', '90d', '12m'].map((r, i) => (
              <button key={r} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '5px 12px', border: '0.5px solid var(--border-strong)', background: i === 1 ? 'var(--ink)' : 'transparent', color: i === 1 ? 'var(--paper)' : 'var(--ink)', cursor: 'pointer' }}>{r}</button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
          {[
            { label: 'Monthly Revenue', value: '$137,420', delta: '+12.4%', up: true, icon: TrendingUp },
            { label: 'Active SKUs', value: '1,284', delta: '+38 this month', up: true, icon: Package },
            { label: 'Pending AI Recs', value: '14', delta: '3 high-priority', up: null, icon: Zap },
            { label: 'At-Risk Stock', value: '23 SKUs', delta: '$18,200 exposure', up: false, icon: AlertTriangle },
          ].map(({ label, value, delta, up, icon: Icon }) => (
            <div key={label} style={{ border: '0.5px solid var(--border-strong)', padding: '20px 22px', background: 'var(--paper)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <span style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{label}</span>
                <Icon size={14} color="var(--ink-3)" />
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 400, marginBottom: 6, letterSpacing: '-0.5px' }}>{value}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: up === true ? 'var(--green)' : up === false ? 'var(--red)' : 'var(--amber)' }}>
                {up === true ? <ArrowUpRight size={11} /> : up === false ? <ArrowDownRight size={11} /> : null}
                {delta}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 16, marginBottom: 28 }}>
          <div style={{ border: '0.5px solid var(--border-strong)', padding: '24px 28px', background: 'var(--paper)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 400, marginBottom: 2 }}>Revenue — 12 Months</div>
                <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>Jul 2025 – Jun 2026</div>
              </div>
              <div style={{ fontSize: 11, color: 'var(--ink-3)', alignSelf: 'flex-end' }}>+24.6% YoY</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 120 }}>
              {MONTHS.map((m, i) => {
                const h = Math.round((VALS[i] / MAX_VAL) * 120);
                const isRecent = i >= 9;
                return (
                  <div key={m} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: '100%', height: h, background: isRecent ? 'var(--ink)' : 'var(--paper-3)', border: '0.5px solid var(--border)' }} />
                    <span style={{ fontSize: 10, color: isRecent ? 'var(--ink)' : 'var(--ink-3)' }}>{m}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ border: '0.5px solid var(--border-strong)', padding: '24px 24px', background: 'var(--paper)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 400, marginBottom: 2 }}>AI Signals</div>
                <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>14 pending · 3 urgent</div>
              </div>
              <button style={{ fontSize: 11, color: 'var(--blue)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 3 }}>View all <ChevronRight size={11} /></button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
              {RECS.map(r => (
                <div key={r.id} style={{ border: '0.5px solid var(--border)', padding: '14px 16px', background: 'var(--paper-2)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                    <span style={{ fontSize: 12, fontWeight: 500 }}>{r.name}</span>
                    <span style={{ fontSize: 10, padding: '2px 7px', background: r.action === 'BUNDLE' ? 'var(--blue-bg)' : 'var(--amber-bg)', color: r.action === 'BUNDLE' ? 'var(--blue)' : 'var(--amber)', border: `0.5px solid ${r.action === 'BUNDLE' ? 'var(--blue)' : 'var(--amber)'}`, whiteSpace: 'nowrap' }}>{r.action}</span>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--ink-3)', fontStyle: 'italic', lineHeight: 1.5, marginBottom: 6 }}>{r.reason}</div>
                  <div style={{ fontSize: 11, fontWeight: 500, color: r.action === 'BUNDLE' ? 'var(--green)' : 'var(--amber)' }}>{r.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ border: '0.5px solid var(--border)', padding: '12px 16px', background: 'var(--paper-2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 11, color: 'var(--ink-2)' }}>
            <span style={{ fontWeight: 500 }}>AI Notice:</span> Modus detected a new seasonal pattern — Q4 velocity for outerwear is trending 18% above baseline. 6 preorder recommendations ready.
          </div>
          <button style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '5px 14px', border: '0.5px solid var(--ink)', background: 'transparent', cursor: 'pointer', whiteSpace: 'nowrap' }}>Review</button>
        </div>

      </div>
    </div>
  );
}
