import './_group.css';
import { useState } from 'react';
import { Check, ChevronRight, Store, ShoppingBag, Package, Globe, ArrowRight, Lock } from 'lucide-react';

const NAV = ['Onboarding', 'Dashboard', 'Recommendations', 'Inventory', 'Integrations'];

function TopBar({ active }: { active: string }) {
  return (
    <div style={{ borderBottom: '0.5px solid var(--border-strong)', background: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', height: 48, flexShrink: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 500, letterSpacing: '-0.3px' }}>Modus</span>
        <span style={{ width: 1, height: 16, background: 'var(--border-strong)', margin: '0 4px' }} />
        <span style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>AI Commerce Intelligence</span>
      </div>
      <nav style={{ display: 'flex', gap: 0 }}>
        {NAV.map(n => (
          <button key={n} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '0 16px', height: 48, background: 'none', border: 'none', borderBottom: n === active ? '1.5px solid var(--ink)' : '1.5px solid transparent', cursor: 'pointer', color: n === active ? 'var(--ink)' : 'var(--ink-3)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            {n}
          </button>
        ))}
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>Step 1 of 3</span>
        <div style={{ width: 80, height: 2, background: 'var(--paper-3)', borderRadius: 1 }}>
          <div style={{ width: '33%', height: '100%', background: 'var(--ink)', borderRadius: 1 }} />
        </div>
      </div>
    </div>
  );
}

const PLATFORMS = [
  { id: 'shopify', name: 'Shopify', desc: 'Orders, products, customers', icon: ShoppingBag, status: 'connected' },
  { id: 'woo', name: 'WooCommerce', desc: 'Products & order history', icon: Store, status: 'idle' },
  { id: 'bigcommerce', name: 'BigCommerce', desc: 'Catalog & transaction data', icon: Globe, status: 'idle' },
  { id: 'custom', name: 'Custom API', desc: 'Connect any REST/GraphQL source', icon: Package, status: 'idle' },
];

const ENRICHMENT = [
  { id: 'klaviyo', name: 'Klaviyo', desc: 'Email segments · campaign data', tag: 'Marketing' },
  { id: 'gorgias', name: 'Gorgias', desc: 'Support tickets · CSAT signals', tag: 'Support' },
  { id: 'recharge', name: 'Recharge', desc: 'Subscription metrics · LTV', tag: 'Subscriptions' },
  { id: 'gads', name: 'Google Ads', desc: 'Ad spend · ROAS attribution', tag: 'Paid' },
];

export function Onboarding() {
  const [connected, setConnected] = useState<Record<string, boolean>>({ shopify: true });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--paper)' }}>
      <TopBar active="Onboarding" />
      <div style={{ flex: 1, padding: '48px 64px', maxWidth: 1000, width: '100%', margin: '0 auto' }}>

        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Step 1 — Store Setup</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 30, fontWeight: 400, lineHeight: 1.2, marginBottom: 10 }}>Connect your commerce platform</h1>
          <p style={{ color: 'var(--ink-2)', fontSize: 13, maxWidth: 480, lineHeight: 1.6 }}>Modus pulls live data from your store. Connect one platform to start — you can add more sources later.</p>
        </div>

        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Required — Primary Platform</span>
            <span style={{ borderLeft: '0.5px solid var(--border-strong)', paddingLeft: 8, fontSize: 11, color: 'var(--ink-3)' }}>Connect at least one</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {PLATFORMS.map(p => {
              const isConnected = connected[p.id];
              const Icon = p.icon;
              return (
                <div key={p.id} onClick={() => !isConnected && setConnected(c => ({ ...c, [p.id]: true }))}
                  style={{ border: `0.5px solid ${isConnected ? 'var(--ink)' : 'var(--border-strong)'}`, background: isConnected ? 'var(--paper-2)' : 'var(--paper)', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: isConnected ? 'default' : 'pointer', transition: 'background 0.15s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 36, height: 36, border: '0.5px solid var(--border-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--paper)' }}>
                      <Icon size={15} color="var(--ink-2)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 500, fontSize: 13, marginBottom: 2 }}>{p.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>{p.desc}</div>
                    </div>
                  </div>
                  {isConnected ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--green)', fontWeight: 500 }}>
                      <Check size={13} /> Connected
                    </div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--blue)', border: '0.5px solid var(--blue)', padding: '5px 12px' }}>
                      Connect <ArrowRight size={11} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Optional — Enrichment Sources</span>
            <span style={{ borderLeft: '0.5px solid var(--border-strong)', paddingLeft: 8, fontSize: 11, color: 'var(--ink-3)' }}>Improves AI accuracy</span>
          </div>
          <div style={{ border: '0.5px solid var(--border)', background: 'var(--paper)' }}>
            {ENRICHMENT.map((e, i) => (
              <div key={e.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: i < ENRICHMENT.length - 1 ? '0.5px solid var(--border)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontSize: 11, padding: '2px 8px', border: '0.5px solid var(--border-strong)', color: 'var(--ink-2)', background: 'var(--paper-2)' }}>{e.tag}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{e.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>{e.desc}</div>
                  </div>
                </div>
                <button onClick={() => setConnected(c => ({ ...c, [e.id]: !c[e.id] }))}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '5px 14px', border: '0.5px solid var(--border-strong)', background: connected[e.id] ? 'var(--ink)' : 'transparent', color: connected[e.id] ? 'var(--paper)' : 'var(--ink)', cursor: 'pointer' }}>
                  {connected[e.id] ? '✓ Added' : 'Add source'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '0.5px solid var(--border)', paddingTop: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--ink-3)' }}>
            <Lock size={11} /> All connections use OAuth 2.0 — no stored credentials
          </div>
          <button style={{ fontFamily: 'var(--font-mono)', fontSize: 12, padding: '10px 28px', background: 'var(--ink)', color: 'var(--paper)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            Continue to AI Setup <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
