import './_group.css';
import { TrendingUp, Package, Zap, AlertTriangle, ArrowUpRight, ArrowDownRight, ChevronRight, RefreshCw } from 'lucide-react';

const NAV = ['Onboarding','Dashboard','Sales','Recommendations','Inventory','Integrations'];

function TopBar() {
  return (
    <div style={{ height:52, borderBottom:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 32px', background:'var(--surface)', flexShrink:0 }}>
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <span style={{ fontSize:18, fontWeight:700, letterSpacing:'-0.5px' }}>MODUS</span>
        <span style={{ width:1, height:14, background:'var(--border-m)' }} />
        <span style={{ fontSize:11, color:'var(--text-2)' }}>Northbound Co.</span>
        <span style={{ fontSize:10, fontWeight:600, padding:'2px 8px', background:'var(--accent-dark)', color:'var(--accent)', borderRadius:3, border:'1px solid var(--accent-dim)' }}>PRO</span>
      </div>
      <nav style={{ display:'flex' }}>
        {NAV.map(n => (
          <button key={n} style={{ fontSize:11, fontWeight:500, padding:'0 14px', height:52, background:'none', border:'none', borderBottom: n==='Dashboard' ? '2px solid var(--accent)' : '2px solid transparent', color: n==='Dashboard' ? 'var(--text)' : 'var(--text-3)', letterSpacing:'0.04em', textTransform:'uppercase' }}>{n}</button>
        ))}
      </nav>
      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
        <div style={{ display:'flex', alignItems:'center', gap:5, fontSize:11, color:'var(--text-2)' }}><RefreshCw size={11} color="var(--green)" /> Synced 3m ago</div>
        <div style={{ width:30, height:30, borderRadius:'50%', background:'var(--surface-3)', border:'1px solid var(--border-m)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:600 }}>JK</div>
      </div>
    </div>
  );
}

const MONTHS = ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun'];
const VALS =   [68,74,82,71,96,112,88,79,91,104,118,137];
const MAX_VAL = 145;

const RECS = [
  { name:'Merino Crew — Slate', action:'BUNDLE', impact:'+$3,200', reason:'68% of buyers co-purchase this with Merino Turtleneck within 7 days.', actionColor:'var(--blue)', actionBg:'var(--blue-dim)' },
  { name:'Linen Overshirt — Sand', action:'DISCOUNT', impact:'−$890 saved', reason:'Sell-through dropped 64% MoM. 38 days of excess supply.', actionColor:'var(--amber)', actionBg:'var(--amber-dim)' },
];

export function Dashboard() {
  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100vh', background:'var(--bg)', overflow:'hidden' }}>
      <TopBar />
      <div style={{ flex:1, overflowY:'auto', padding:'28px 32px' }}>

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:24 }}>
          <div>
            <h1 style={{ fontSize:22, fontWeight:600, letterSpacing:'-0.4px', marginBottom:3 }}>Overview</h1>
            <p style={{ fontSize:12, color:'var(--text-2)' }}>Shopify · Klaviyo · Inventory Planner · 3 sources active</p>
          </div>
          <div style={{ display:'flex', gap:6 }}>
            {['7d','30d','90d','12m'].map((r,i)=>(
              <button key={r} style={{ fontSize:11, fontWeight:500, padding:'5px 12px', border:'1px solid var(--border-m)', background: i===1 ? 'var(--accent)' : 'transparent', color: i===1 ? '#0B0A08' : 'var(--text-2)', borderRadius:4 }}>{r}</button>
            ))}
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10, marginBottom:20 }}>
          {[
            { label:'Monthly Revenue',  value:'$137,420', delta:'+12.4%',    up:true,  icon:TrendingUp },
            { label:'Active SKUs',      value:'1,284',    delta:'+38 this mo',up:true, icon:Package },
            { label:'Pending AI Recs',  value:'14',       delta:'3 urgent',   up:null,  icon:Zap },
            { label:'At-Risk Stock',    value:'23 SKUs',  delta:'$18.2k exposure',up:false,icon:AlertTriangle },
          ].map(({ label,value,delta,up,icon:Icon })=>(
            <div key={label} style={{ border:'1px solid var(--border)', background:'var(--surface)', padding:'18px 20px', borderRadius:6 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}>
                <span style={{ fontSize:11, fontWeight:500, color:'var(--text-2)', textTransform:'uppercase', letterSpacing:'0.06em' }}>{label}</span>
                <Icon size={14} color="var(--text-3)" />
              </div>
              <div style={{ fontSize:24, fontWeight:600, letterSpacing:'-0.6px', marginBottom:6 }}>{value}</div>
              <div style={{ display:'flex', alignItems:'center', gap:4, fontSize:12, color: up===true ? 'var(--green)' : up===false ? 'var(--red)' : 'var(--amber)', fontWeight:500 }}>
                {up===true ? <ArrowUpRight size={12}/> : up===false ? <ArrowDownRight size={12}/> : null}
                {delta}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 360px', gap:14, marginBottom:16 }}>
          <div style={{ border:'1px solid var(--border)', background:'var(--surface)', padding:'22px 24px', borderRadius:6 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:18 }}>
              <div>
                <div style={{ fontSize:15, fontWeight:600, marginBottom:2 }}>Revenue · 12 Months</div>
                <div style={{ fontSize:11, color:'var(--text-2)' }}>Jul 2025 – Jun 2026 · +24.6% YoY</div>
              </div>
              <button style={{ fontSize:11, color:'var(--text-2)', background:'none', border:'1px solid var(--border-m)', padding:'4px 10px', borderRadius:4 }}>Export</button>
            </div>
            <div style={{ display:'flex', alignItems:'flex-end', gap:7, height:110 }}>
              {MONTHS.map((m,i) => {
                const h = Math.round((VALS[i]/MAX_VAL)*110);
                const recent = i>=9;
                return (
                  <div key={m} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:5 }}>
                    <div title={`$${VALS[i]}k`} style={{ width:'100%', height:h, background: recent ? 'var(--accent)' : 'var(--surface-3)', borderRadius:'2px 2px 0 0', transition:'background 0.15s' }} />
                    <span style={{ fontSize:9, color: recent ? 'var(--text-2)' : 'var(--text-3)', fontWeight: recent ? 500 : 400 }}>{m}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ border:'1px solid var(--border)', background:'var(--surface)', padding:'22px 20px', borderRadius:6, display:'flex', flexDirection:'column' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16 }}>
              <div>
                <div style={{ fontSize:15, fontWeight:600, marginBottom:2 }}>AI Signals</div>
                <div style={{ fontSize:11, color:'var(--text-2)' }}>14 pending · 3 urgent</div>
              </div>
              <button style={{ fontSize:11, color:'var(--accent)', background:'none', border:'none', display:'flex', alignItems:'center', gap:3, fontWeight:500 }}>View all <ChevronRight size={11}/></button>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:8, flex:1 }}>
              {RECS.map(r=>(
                <div key={r.name} style={{ border:'1px solid var(--border)', background:'var(--surface-2)', padding:'13px 14px', borderRadius:5 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:6 }}>
                    <span style={{ fontSize:12, fontWeight:600 }}>{r.name}</span>
                    <span style={{ fontSize:10, fontWeight:600, padding:'2px 8px', background:r.actionBg, color:r.actionColor, borderRadius:3 }}>{r.action}</span>
                  </div>
                  <div style={{ fontSize:11, color:'var(--text-2)', lineHeight:1.55, marginBottom:6 }}>{r.reason}</div>
                  <div style={{ fontSize:12, fontWeight:600, color:'var(--green)' }}>{r.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ border:'1px solid var(--amber-dim)', background:'var(--surface)', borderLeft:'3px solid var(--amber)', padding:'12px 16px', borderRadius:'0 5px 5px 0', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ fontSize:12, color:'var(--text-2)' }}>
            <span style={{ fontWeight:600, color:'var(--amber)' }}>Pattern detected — </span>
            Q4 outerwear velocity trending 18% above baseline. 6 preorder recommendations ready to review.
          </div>
          <button style={{ fontSize:11, fontWeight:600, padding:'5px 14px', background:'var(--amber)', color:'#0B0A08', border:'none', borderRadius:4, whiteSpace:'nowrap', marginLeft:16 }}>Review now</button>
        </div>

      </div>
    </div>
  );
}
