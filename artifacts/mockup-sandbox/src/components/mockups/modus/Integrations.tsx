import './_group.css';
import { RefreshCw, Plus, Shield, Zap, BarChart2, ShoppingBag, Mail, Package, Globe, Tag, TrendingUp } from 'lucide-react';
import { useState } from 'react';

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

const INTEGRATIONS = [
  { id: 'shopify', name: 'Shopify', icon: ShoppingBag, type: 'Primary Platform', synced: '3 min ago', points: ['Orders', 'Products', 'Customers', 'Inventory'], required: true },
  { id: 'klaviyo', name: 'Klaviyo', icon: Mail, type: 'Marketing', synced: '14 min ago', points: ['Segments', 'Campaigns', 'Open rates', 'Revenue attr.'], required: false },
  { id: 'invplanner', name: 'Inventory Planner', icon: Package, type: 'Inventory', synced: '31 min ago', points: ['Lead times', 'POs', 'Reorder rules', 'Forecasts'], required: false },
  { id: 'gorgias', name: 'Gorgias', icon: Globe, type: 'Support', synced: '1 hr ago', points: ['Tickets', 'CSAT', 'Response time'], required: false },
];

type FeatureKey = 'rec_engine' | 'bundle_ai' | 'seasonal_model' | 'velocity_alerts' | 'auto_reorder';

const AI_FEATURES: Array<{ id: FeatureKey; label: string; desc: string; tier: 'Free' | 'Growth' | 'Pro' }> = [
  { id: 'rec_engine',      label: 'AI Recommendation Engine', desc: 'Generates product rec signals from behaviour & co-purchase data', tier: 'Growth' },
  { id: 'bundle_ai',       label: 'Bundle Intelligence',        desc: 'Detects bundle opportunities from multi-product cart patterns', tier: 'Pro' },
  { id: 'seasonal_model',  label: 'Seasonal Demand Model',      desc: 'Adjusts velocity forecasts for seasonal uplift/depression', tier: 'Pro' },
  { id: 'velocity_alerts', label: 'Velocity Alerts',            desc: 'Notifies you when sell-through drops or spikes unexpectedly', tier: 'Growth' },
  { id: 'auto_reorder',    label: 'Auto-Reorder Suggestions',   desc: 'Generates PO drafts when stock crosses reorder threshold', tier: 'Pro' },
];

const PLAN = {
  name: 'Pro',
  price: '$99',
  period: '/month',
  skus: '2,000 SKUs max',
  next: 'Jul 6, 2026',
  features: ['AI Recommendation Engine', 'Bundle Intelligence', 'Seasonal Model', 'Velocity Alerts', 'Auto-Reorder', 'Priority support'],
};

export function Integrations() {
  const [enabled, setEnabled] = useState<Record<FeatureKey, boolean>>({
    rec_engine: true, bundle_ai: true, seasonal_model: true, velocity_alerts: true, auto_reorder: false,
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--paper)' }}>
      <TopBar active="Integrations" />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 340px', gap: 0 }}>

        <div style={{ borderRight: '0.5px solid var(--border-strong)', padding: '32px 36px', overflowY: 'auto' }}>
          <div style={{ marginBottom: 28 }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 400, marginBottom: 4 }}>Live Data Sources</h1>
            <p style={{ fontSize: 11, color: 'var(--ink-3)' }}>4 connected · All syncing normally · OAuth 2.0 secured</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
            {INTEGRATIONS.map(intg => {
              const Icon = intg.icon;
              return (
                <div key={intg.id} style={{ border: '0.5px solid var(--border-strong)', background: 'var(--paper)', padding: '18px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 36, height: 36, border: '0.5px solid var(--border-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--paper-2)' }}>
                        <Icon size={15} color="var(--ink-2)" />
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                          <span style={{ fontSize: 13, fontWeight: 500 }}>{intg.name}</span>
                          <span style={{ fontSize: 10, padding: '1px 6px', border: '0.5px solid var(--border)', color: 'var(--ink-3)', background: 'var(--paper-2)' }}>{intg.type}</span>
                          {intg.required && <span style={{ fontSize: 10, padding: '1px 6px', border: '0.5px solid var(--green)', color: 'var(--green)', background: 'var(--green-bg)' }}>Required</span>}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--ink-3)' }}>
                          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)' }} />
                          Synced {intg.synced}
                        </div>
                      </div>
                    </div>
                    <button style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '5px 12px', border: '0.5px solid var(--border-strong)', background: 'transparent', cursor: 'pointer', color: 'var(--ink)' }}>Manage</button>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {intg.points.map(pt => (
                      <span key={pt} style={{ fontSize: 10, padding: '2px 8px', border: '0.5px solid var(--border)', background: 'var(--paper-2)', color: 'var(--ink-2)' }}>{pt}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <button style={{ fontFamily: 'var(--font-mono)', fontSize: 12, padding: '14px 20px', border: '0.5px dashed var(--border-strong)', background: 'transparent', cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'var(--ink-2)' }}>
            <Plus size={13} /> Add integration
          </button>
        </div>

        <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 24, overflowY: 'auto' }}>

          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 400, marginBottom: 4 }}>AI Feature Controls</h2>
            <p style={{ fontSize: 11, color: 'var(--ink-3)', marginBottom: 16 }}>Pro tier · 5 features available</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {AI_FEATURES.map(f => (
                <div key={f.id} style={{ border: '0.5px solid var(--border)', padding: '14px 16px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, background: enabled[f.id] ? 'var(--paper)' : 'var(--paper-2)' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                      <span style={{ fontSize: 12, fontWeight: 500 }}>{f.label}</span>
                      <span style={{ fontSize: 10, padding: '1px 6px', border: '0.5px solid var(--border)', color: 'var(--ink-3)', background: 'var(--paper-2)', flexShrink: 0 }}>{f.tier}</span>
                    </div>
                    <p style={{ fontSize: 11, color: 'var(--ink-3)', lineHeight: 1.5 }}>{f.desc}</p>
                  </div>
                  <button
                    onClick={() => setEnabled(s => ({ ...s, [f.id]: !s[f.id] }))}
                    style={{ flexShrink: 0, width: 38, height: 22, background: enabled[f.id] ? 'var(--ink)' : 'var(--paper-3)', border: '0.5px solid var(--border-strong)', cursor: 'pointer', position: 'relative', transition: 'background 0.15s' }}
                  >
                    <div style={{ position: 'absolute', top: 3, left: enabled[f.id] ? 18 : 3, width: 14, height: 14, background: enabled[f.id] ? 'var(--paper)' : 'var(--ink-3)', transition: 'left 0.15s' }} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div style={{ border: '0.5px solid var(--border-strong)', padding: '20px 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 400, marginBottom: 2 }}>Current Plan</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 400 }}>{PLAN.price}</span>
                  <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>{PLAN.period}</span>
                </div>
              </div>
              <span style={{ fontSize: 11, padding: '3px 10px', background: 'var(--ink)', color: 'var(--paper)' }}>{PLAN.name}</span>
            </div>
            <div style={{ fontSize: 11, color: 'var(--ink-3)', marginBottom: 14 }}>
              {PLAN.skus} · Renews {PLAN.next}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 16 }}>
              {PLAN.features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: 'var(--ink-2)' }}>
                  <div style={{ width: 3, height: 3, background: 'var(--ink)' }} />
                  {f}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '7px 0', border: '0.5px solid var(--border-strong)', background: 'transparent', cursor: 'pointer', flex: 1, color: 'var(--ink)' }}>Manage billing</button>
              <button style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '7px 0', border: '0.5px solid var(--ink)', background: 'var(--ink)', cursor: 'pointer', flex: 1, color: 'var(--paper)' }}>→ Enterprise</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
