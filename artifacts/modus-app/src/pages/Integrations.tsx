import { useState } from 'react';
import { Plus, ShoppingBag, Mail, Package, Globe, Factory, Check, ChevronRight, ExternalLink } from 'lucide-react';
import { TopBar } from '@/components/TopBar';
import { useLocation } from 'wouter';

const INTEGRATIONS = [
  { id:'shopify',    name:'Shopify',           icon:ShoppingBag, type:'Primary Platform', synced:'3 min ago',   points:['Orders','Products','Customers','Inventory'], required:true },
  { id:'klaviyo',    name:'Klaviyo',           icon:Mail,        type:'Marketing',        synced:'14 min ago',  points:['Segments','Campaigns','Revenue attr.'],      required:false },
  { id:'invplanner', name:'Inventory Planner', icon:Package,     type:'Inventory',        synced:'31 min ago',  points:['Lead times','POs','Reorder rules'],         required:false },
  { id:'gorgias',    name:'Gorgias',           icon:Globe,       type:'Support',          synced:'1 hr ago',    points:['Tickets','CSAT','Response time'],            required:false },
];

type FeatureKey = 'rec_engine'|'bundle_ai'|'seasonal_model'|'velocity_alerts'|'auto_reorder';

const AI_FEATURES: Array<{ id:FeatureKey; label:string; desc:string; tier:string }> = [
  { id:'rec_engine',      label:'AI Recommendation Engine', desc:'Generates product signals from behaviour and co-purchase data.',     tier:'Growth' },
  { id:'bundle_ai',       label:'Bundle Intelligence',       desc:'Detects bundle opportunities from multi-product cart patterns.',    tier:'Pro' },
  { id:'seasonal_model',  label:'Seasonal Demand Model',     desc:'Adjusts velocity forecasts with seasonal uplift and depression.',  tier:'Pro' },
  { id:'velocity_alerts', label:'Velocity Alerts',           desc:'Notifies when sell-through drops or spikes unexpectedly.',         tier:'Growth' },
  { id:'auto_reorder',    label:'Auto-Reorder Suggestions',  desc:'Generates PO drafts when stock crosses reorder threshold.',       tier:'Pro' },
];

const PLAN = {
  name:'Pro', price:'$99', period:'/month', skus:'2,000 SKUs max', next:'Jul 6, 2026',
  features:['AI Recommendation Engine','Bundle Intelligence','Seasonal Demand Model','Velocity Alerts','Auto-Reorder Suggestions','Priority support','API access'],
};

const MFG_CAPABILITIES = [
  'BOM tracking & component costing',
  'WIP status across production stages',
  'Batch & lot traceability',
  'AI production run recommendations',
  'Guided onboarding',
];

export function Integrations() {
  const [enabled, setEnabled] = useState<Record<FeatureKey,boolean>>({
    rec_engine:true, bundle_ai:true, seasonal_model:true, velocity_alerts:true, auto_reorder:false,
  });
  const [, navigate] = useLocation();

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100vh', background:'var(--bg)', overflow:'hidden' }}>
      <TopBar />
      <div style={{ flex:1, display:'grid', gridTemplateColumns:'1fr 320px', overflow:'hidden' }}>

        {/* Left — connected integrations */}
        <div style={{ borderRight:'1px solid var(--border)', padding:'28px 32px', overflowY:'auto' }}>
          <div style={{ marginBottom:24 }}>
            <h1 style={{ fontSize:22, fontWeight:600, letterSpacing:'-0.4px', marginBottom:3 }}>Integrations</h1>
            <p style={{ fontSize:12, color:'var(--text-2)' }}>4 connected · All syncing normally · OAuth 2.0</p>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:14 }}>
            {INTEGRATIONS.map(intg => {
              const Icon = intg.icon;
              return (
                <div key={intg.id} style={{ border:'1px solid var(--border-m)', background:'var(--surface)', padding:'18px 20px', borderRadius:6 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                      <div style={{ width:38, height:38, borderRadius:8, background:'var(--surface-2)', border:'1px solid var(--border-m)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                        <Icon size={16} color="var(--text-2)"/>
                      </div>
                      <div>
                        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:3 }}>
                          <span style={{ fontSize:14, fontWeight:600 }}>{intg.name}</span>
                          <span style={{ fontSize:10, fontWeight:500, padding:'1px 6px', background:'var(--surface-3)', color:'var(--text-2)', borderRadius:3 }}>{intg.type}</span>
                          {intg.required && <span style={{ fontSize:10, fontWeight:600, padding:'1px 6px', background:'var(--green-dim)', color:'var(--green)', border:'1px solid var(--green)', borderRadius:3 }}>Required</span>}
                        </div>
                        <div style={{ display:'flex', alignItems:'center', gap:6, fontSize:11, color:'var(--text-2)' }}>
                          <div style={{ width:6, height:6, borderRadius:'50%', background:'var(--green)' }}/>
                          Synced {intg.synced}
                        </div>
                      </div>
                    </div>
                    <button style={{ fontSize:11, fontWeight:500, padding:'6px 14px', border:'1px solid var(--border-m)', background:'transparent', color:'var(--text-2)', borderRadius:4, cursor:'pointer' }}>Manage</button>
                  </div>
                  <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                    {intg.points.map(pt => (
                      <span key={pt} style={{ fontSize:11, padding:'2px 8px', border:'1px solid var(--border)', background:'var(--surface-2)', color:'var(--text-2)', borderRadius:3 }}>{pt}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <button style={{ fontSize:12, fontWeight:500, padding:'14px 20px', border:'1px dashed var(--border-m)', background:'transparent', color:'var(--text-2)', borderRadius:6, width:'100%', display:'flex', alignItems:'center', justifyContent:'center', gap:8, cursor:'pointer' }}>
            <Plus size={13}/> Add integration
          </button>
        </div>

        {/* Right sidebar */}
        <div style={{ padding:'20px 18px', display:'flex', flexDirection:'column', gap:16, overflowY:'auto' }}>

          {/* Manufacturing Add-on — FIRST and always visible */}
          <div style={{ border:'1px solid var(--accent-dim)', background:'var(--accent-dark)', borderRadius:8, padding:'16px' }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10 }}>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <div style={{ width:32, height:32, borderRadius:7, background:'rgba(232,160,32,0.15)', border:'1px solid var(--accent-dim)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <Factory size={14} color="var(--accent-col)" />
                </div>
                <div>
                  <div style={{ fontSize:13, fontWeight:700 }}>Manufacturing</div>
                  <div style={{ fontSize:10, color:'var(--text-3)' }}>Add-on module</div>
                </div>
              </div>
              <div style={{ textAlign:'right' }}>
                <div style={{ fontSize:16, fontWeight:700, color:'var(--accent-col)' }}>$79<span style={{ fontSize:10, fontWeight:400, color:'var(--text-3)' }}>/mo</span></div>
                <div style={{ fontSize:10, color:'var(--text-3)' }}>Growth or Pro</div>
              </div>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:6, marginBottom:14 }}>
              {MFG_CAPABILITIES.map(cap => (
                <div key={cap} style={{ display:'flex', alignItems:'center', gap:8 }}>
                  <Check size={11} color="var(--accent-col)" style={{ flexShrink:0 }} />
                  <span style={{ fontSize:11, color:'var(--text-2)' }}>{cap}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/manufacturing')}
              style={{ width:'100%', fontSize:12, fontWeight:700, padding:'9px 0', background:'var(--accent-col)', color:'#0B0A08', border:'none', borderRadius:5, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:6 }}
            >
              <ExternalLink size={12} /> Open Manufacturing
            </button>
          </div>

          {/* Current Plan */}
          <div style={{ border:'1px solid var(--border-m)', background:'var(--surface)', padding:'16px', borderRadius:6 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
              <div>
                <div style={{ fontSize:13, fontWeight:600, marginBottom:3 }}>Current Plan</div>
                <div style={{ display:'flex', alignItems:'baseline', gap:3 }}>
                  <span style={{ fontSize:22, fontWeight:700, letterSpacing:'-0.5px' }}>{PLAN.price}</span>
                  <span style={{ fontSize:11, color:'var(--text-2)' }}>{PLAN.period}</span>
                </div>
              </div>
              <span style={{ fontSize:11, fontWeight:700, padding:'4px 12px', background:'var(--accent-col)', color:'#0B0A08', borderRadius:4 }}>{PLAN.name}</span>
            </div>
            <div style={{ fontSize:11, color:'var(--text-2)', marginBottom:12 }}>{PLAN.skus} · Renews {PLAN.next}</div>
            <div style={{ display:'flex', flexDirection:'column', gap:4, marginBottom:14 }}>
              {PLAN.features.map(f => (
                <div key={f} style={{ display:'flex', alignItems:'center', gap:8, fontSize:11, color:'var(--text-2)' }}>
                  <div style={{ width:4, height:4, borderRadius:'50%', background:'var(--accent-col)', flexShrink:0 }}/>
                  {f}
                </div>
              ))}
            </div>
            <div style={{ display:'flex', gap:8 }}>
              <button style={{ fontSize:11, fontWeight:500, padding:'7px 0', border:'1px solid var(--border-m)', background:'transparent', color:'var(--text-2)', borderRadius:4, flex:1, cursor:'pointer' }}>Manage billing</button>
              <button style={{ fontSize:11, fontWeight:600, padding:'7px 0', border:'none', background:'var(--accent-col)', color:'#0B0A08', borderRadius:4, flex:1, cursor:'pointer' }}>→ Enterprise</button>
            </div>
          </div>

          {/* AI Feature Controls */}
          <div>
            <div style={{ fontSize:13, fontWeight:600, marginBottom:2 }}>AI Feature Controls</div>
            <div style={{ fontSize:11, color:'var(--text-2)', marginBottom:12 }}>Pro plan · 5 features</div>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {AI_FEATURES.map(f => (
                <div key={f.id} style={{ border:'1px solid var(--border)', padding:'11px 12px', display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:10, background:'var(--surface)', borderRadius:5 }}>
                  <div style={{ flex:1 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:2 }}>
                      <span style={{ fontSize:11, fontWeight:600 }}>{f.label}</span>
                      <span style={{ fontSize:9, padding:'1px 5px', background:'var(--surface-3)', color:'var(--text-2)', borderRadius:3 }}>{f.tier}</span>
                    </div>
                    <p style={{ fontSize:11, color:'var(--text-2)', lineHeight:1.5 }}>{f.desc}</p>
                  </div>
                  <button
                    data-testid={`toggle-${f.id}`}
                    onClick={() => setEnabled(s => ({ ...s, [f.id]: !s[f.id] }))}
                    style={{ flexShrink:0, width:38, height:20, borderRadius:10, background: enabled[f.id] ? 'var(--accent-col)' : 'var(--surface-3)', border: enabled[f.id] ? 'none' : '1px solid var(--border-m)', cursor:'pointer', position:'relative', transition:'background 0.15s', marginTop:2 }}
                  >
                    <div style={{ position:'absolute', top:2, left: enabled[f.id] ? 19 : 2, width:16, height:16, borderRadius:'50%', background: enabled[f.id] ? '#0B0A08' : 'var(--text-3)', transition:'left 0.15s' }}/>
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
