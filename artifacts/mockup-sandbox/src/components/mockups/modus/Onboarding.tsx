import './_group.css';
import { useState } from 'react';
import { Check, ArrowRight, Lock, ChevronRight, ShoppingBag, Globe, Package, Zap, Mail, BarChart2 } from 'lucide-react';

const NAV = ['Onboarding','Dashboard','Sales','Recommendations','Inventory','Integrations'];

function TopBar() {
  return (
    <div style={{ height:52, borderBottom:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 32px', background:'var(--surface)', flexShrink:0 }}>
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <span style={{ fontSize:18, fontWeight:700, letterSpacing:'-0.5px', color:'var(--text)' }}>MODUS</span>
        <span style={{ width:1, height:14, background:'var(--border-m)' }} />
        <span style={{ fontSize:11, color:'var(--text-3)', letterSpacing:'0.06em', textTransform:'uppercase' }}>AI Commerce Intelligence</span>
      </div>
      <nav style={{ display:'flex' }}>
        {NAV.map(n => (
          <button key={n} style={{ fontSize:11, fontWeight:500, padding:'0 14px', height:52, background:'none', border:'none', borderBottom: n==='Onboarding' ? '2px solid var(--accent)' : '2px solid transparent', color: n==='Onboarding' ? 'var(--text)' : 'var(--text-3)', letterSpacing:'0.04em', textTransform:'uppercase' }}>{n}</button>
        ))}
      </nav>
      <div style={{ display:'flex', alignItems:'center', gap:8, fontSize:12, color:'var(--text-2)' }}>
        <span>Step 1 of 3</span>
        <div style={{ width:64, height:2, background:'var(--surface-3)', borderRadius:2 }}>
          <div style={{ width:'33%', height:'100%', background:'var(--accent)', borderRadius:2 }} />
        </div>
      </div>
    </div>
  );
}

const PLATFORMS = [
  { id:'shopify',     name:'Shopify',       desc:'Orders, products, customers, inventory', icon:ShoppingBag, badge:'Most popular' },
  { id:'woo',         name:'WooCommerce',   desc:'Product catalog & order history',          icon:Package,    badge:null },
  { id:'bigcommerce', name:'BigCommerce',   desc:'Catalog, transactions, customers',         icon:Globe,      badge:null },
  { id:'custom',      name:'Custom API',    desc:'Connect any REST or GraphQL source',       icon:Zap,        badge:'Advanced' },
];

const ENRICHMENT = [
  { id:'klaviyo',  name:'Klaviyo',       desc:'Email segments · Campaign performance · Revenue attribution', tag:'Marketing' },
  { id:'gorgias',  name:'Gorgias',       desc:'Support tickets · CSAT scores · Resolution time',            tag:'Support' },
  { id:'recharge', name:'Recharge',      desc:'Subscription metrics · Churn signals · LTV',                 tag:'Subscriptions' },
  { id:'gads',     name:'Google Ads',    desc:'Ad spend · ROAS · Attribution windows',                      tag:'Paid Media' },
];

export function Onboarding() {
  const [connected, setConnected] = useState<Record<string,boolean>>({ shopify:true });

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100vh', background:'var(--bg)', overflow:'hidden' }}>
      <TopBar />
      <div style={{ flex:1, overflowY:'auto', padding:'44px 64px' }}>
        <div style={{ maxWidth:860, margin:'0 auto' }}>

          <div style={{ marginBottom:44 }}>
            <p style={{ fontSize:11, fontWeight:600, color:'var(--accent)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:10 }}>Step 1 — Store Setup</p>
            <h1 style={{ fontSize:32, fontWeight:600, letterSpacing:'-0.8px', marginBottom:12, lineHeight:1.15 }}>Connect your commerce platform</h1>
            <p style={{ color:'var(--text-2)', fontSize:14, maxWidth:500, lineHeight:1.7 }}>Modus becomes your intelligence layer. Connect one platform to get started — everything else follows from your live data.</p>
          </div>

          <div style={{ marginBottom:36 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <span style={{ fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', color:'var(--text)' }}>Primary Platform</span>
              <span style={{ fontSize:11, color:'var(--red)', fontWeight:500 }}>Required</span>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
              {PLATFORMS.map(p => {
                const isOn = connected[p.id];
                const Icon = p.icon;
                return (
                  <div key={p.id} onClick={() => !isOn && setConnected(c=>({...c,[p.id]:true}))}
                    style={{ border:`1px solid ${isOn ? 'var(--accent)' : 'var(--border-m)'}`, background: isOn ? 'var(--accent-dark)' : 'var(--surface)', padding:'18px 20px', display:'flex', alignItems:'center', justifyContent:'space-between', cursor: isOn ? 'default' : 'pointer', transition:'all 0.15s' }}>
                    <div style={{ display:'flex', alignItems:'center', gap:14 }}>
                      <div style={{ width:38, height:38, border:'1px solid var(--border-m)', background:'var(--surface-2)', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:6 }}>
                        <Icon size={16} color="var(--text-2)" />
                      </div>
                      <div>
                        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:2 }}>
                          <span style={{ fontWeight:600, fontSize:13 }}>{p.name}</span>
                          {p.badge && <span style={{ fontSize:10, padding:'1px 6px', background:'var(--surface-3)', color:'var(--text-2)', borderRadius:3 }}>{p.badge}</span>}
                        </div>
                        <div style={{ fontSize:11, color:'var(--text-2)' }}>{p.desc}</div>
                      </div>
                    </div>
                    {isOn ? (
                      <div style={{ display:'flex', alignItems:'center', gap:6, fontSize:12, color:'var(--green)', fontWeight:600 }}><Check size={13} /> Connected</div>
                    ) : (
                      <div style={{ display:'flex', alignItems:'center', gap:4, fontSize:11, color:'var(--accent)', fontWeight:500, border:'1px solid var(--accent)', padding:'5px 12px', borderRadius:4 }}>Connect <ArrowRight size={11} /></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ marginBottom:44 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <span style={{ fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', color:'var(--text)' }}>Enrichment Sources</span>
              <span style={{ fontSize:11, color:'var(--text-2)' }}>Optional — improves AI signal quality</span>
            </div>
            <div style={{ border:'1px solid var(--border)', borderRadius:6, overflow:'hidden' }}>
              {ENRICHMENT.map((e,i) => (
                <div key={e.id} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 18px', borderBottom: i<ENRICHMENT.length-1 ? '1px solid var(--border)' : 'none', background:'var(--surface)' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:14 }}>
                    <span style={{ fontSize:10, fontWeight:600, padding:'2px 8px', background:'var(--surface-2)', color:'var(--text-2)', borderRadius:3, letterSpacing:'0.04em' }}>{e.tag}</span>
                    <div>
                      <div style={{ fontSize:13, fontWeight:500, marginBottom:1 }}>{e.name}</div>
                      <div style={{ fontSize:11, color:'var(--text-2)' }}>{e.desc}</div>
                    </div>
                  </div>
                  <button onClick={() => setConnected(c=>({...c,[e.id]:!c[e.id]}))}
                    style={{ fontSize:11, fontWeight:500, padding:'6px 14px', borderRadius:4, border: connected[e.id] ? 'none' : '1px solid var(--border-m)', background: connected[e.id] ? 'var(--green)' : 'transparent', color: connected[e.id] ? '#fff' : 'var(--text-2)', transition:'all 0.15s' }}>
                    {connected[e.id] ? '✓ Added' : 'Add source'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid var(--border)', paddingTop:24 }}>
            <div style={{ display:'flex', alignItems:'center', gap:6, fontSize:11, color:'var(--text-3)' }}>
              <Lock size={11} /> OAuth 2.0 · No credentials stored · Revoke anytime
            </div>
            <button style={{ fontSize:13, fontWeight:600, padding:'11px 28px', background:'var(--accent)', color:'#0B0A08', border:'none', borderRadius:5, display:'flex', alignItems:'center', gap:8 }}>
              Continue to AI Setup <ChevronRight size={14} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
