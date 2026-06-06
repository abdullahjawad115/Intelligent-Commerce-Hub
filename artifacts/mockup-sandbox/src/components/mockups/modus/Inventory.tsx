import './_group.css';
import { AlertTriangle, TrendingDown, CheckCircle, ArrowRight } from 'lucide-react';

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
          <button key={n} style={{ fontSize:11, fontWeight:500, padding:'0 14px', height:52, background:'none', border:'none', borderBottom: n==='Inventory' ? '2px solid var(--accent)' : '2px solid transparent', color: n==='Inventory' ? 'var(--text)' : 'var(--text-3)', letterSpacing:'0.04em', textTransform:'uppercase' }}>{n}</button>
        ))}
      </nav>
      <div style={{ width:30, height:30, borderRadius:'50%', background:'var(--surface-3)', border:'1px solid var(--border-m)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:600 }}>JK</div>
    </div>
  );
}

const CRITICAL = [
  { name:'Heavyweight Hoodie — Charcoal XL', sku:'HH-CHR-XL', units:28, velocity:'14.3 u/day', days:2, exposure:'$4,480' },
  { name:'Merino Sock 3-Pack — Navy M',       sku:'MS3-NVY-M', units:14, velocity:'8.1 u/day',  days:2, exposure:'$840' },
  { name:'Quilted Vest — Olive M',            sku:'QV-OLV-M',  units:6,  velocity:'5.2 u/day',  days:1, exposure:'$1,200' },
];

const AT_RISK = [
  { name:'Linen Overshirt — Sand L',    sku:'LO-SND-L',  units:94,  velocity:'4.2 u/day', days:22,  exposure:'$7,520' },
  { name:'Leather Card Sleeve — Tan',   sku:'LCS-TAN-OS', units:210, velocity:'1.8 u/day', days:117, exposure:'$4,100' },
  { name:'Canvas Backpack — Stone',     sku:'CB-STN-OS',  units:48,  velocity:'2.3 u/day', days:21,  exposure:'$6,720' },
  { name:'Ribbed Beanie — Cream',       sku:'RB-CRM-OS',  units:72,  velocity:'3.1 u/day', days:23,  exposure:'$2,160' },
];

const HEALTHY = [
  { name:'Waxed Canvas Tote — Forest', sku:'WCT-FOR-OS', units:134, velocity:'9.8 u/day',  days:14 },
  { name:'Merino Crew — Slate M',      sku:'MC-SLT-M',   units:88,  velocity:'6.2 u/day',  days:14 },
  { name:'Utility Belt — Black',       sku:'UB-BLK-OS',  units:56,  velocity:'4.0 u/day',  days:14 },
  { name:'Denim Work Shirt — Indigo L',sku:'DWS-IND-L',  units:112, velocity:'7.3 u/day',  days:15 },
  { name:'Corduroy Cap — Burgundy',    sku:'CC-BUR-OS',  units:93,  velocity:'5.8 u/day',  days:16 },
];

export function Inventory() {
  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100vh', background:'var(--bg)', overflow:'hidden' }}>
      <TopBar />
      <div style={{ flex:1, overflowY:'auto', padding:'28px 32px' }}>

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:22 }}>
          <div>
            <h1 style={{ fontSize:22, fontWeight:600, letterSpacing:'-0.4px', marginBottom:3 }}>Inventory Intelligence</h1>
            <p style={{ fontSize:12, color:'var(--text-2)' }}>1,284 SKUs tracked · Velocity model recalculates every 6h · Last sync 3 min ago</p>
          </div>
          <div style={{ display:'flex', gap:6 }}>
            {['All','Apparel','Accessories','Footwear'].map((c,i)=>(
              <button key={c} style={{ fontSize:11, fontWeight:500, padding:'5px 12px', border:'1px solid var(--border-m)', background: i===0?'var(--accent)':'transparent', color: i===0?'#0B0A08':'var(--text-2)', borderRadius:4 }}>{c}</button>
            ))}
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'3fr 4fr 4fr', gap:12, marginBottom:16 }}>

          <div style={{ border:'1px solid var(--red)', background:'var(--surface)', borderRadius:6, overflow:'hidden' }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 16px', background:'var(--red-dim)', borderBottom:'1px solid var(--red)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:7 }}>
                <AlertTriangle size={13} color="var(--red)"/>
                <span style={{ fontSize:12, fontWeight:600, color:'var(--red)' }}>Critical</span>
              </div>
              <span style={{ fontSize:11, fontWeight:600, padding:'2px 8px', background:'var(--red-dim)', color:'var(--red)', border:'1px solid var(--red)', borderRadius:3 }}>{CRITICAL.length} SKUs</span>
            </div>
            {CRITICAL.map((item,i)=>(
              <div key={item.sku} style={{ padding:'14px 16px', borderBottom: i<CRITICAL.length-1?'1px solid var(--border)':'none' }}>
                <div style={{ fontSize:12, fontWeight:600, marginBottom:2 }}>{item.name}</div>
                <div style={{ fontSize:10, color:'var(--text-3)', marginBottom:10 }}>{item.sku}</div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:6, marginBottom:10 }}>
                  <div style={{ background:'var(--surface-2)', padding:'7px 10px', borderRadius:4 }}>
                    <div style={{ fontSize:9, color:'var(--text-3)', fontWeight:600, marginBottom:2 }}>VELOCITY</div>
                    <div style={{ fontSize:12, fontWeight:600 }}>{item.velocity}</div>
                  </div>
                  <div style={{ background:'var(--red-dim)', padding:'7px 10px', borderRadius:4, border:'1px solid var(--red)' }}>
                    <div style={{ fontSize:9, color:'var(--red)', fontWeight:600, marginBottom:2 }}>DAYS LEFT</div>
                    <div style={{ fontSize:12, fontWeight:700, color:'var(--red)' }}>~{item.days}d</div>
                  </div>
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ fontSize:10, color:'var(--text-3)' }}>{item.units} units · {item.exposure}</span>
                  <button style={{ fontSize:10, fontWeight:600, padding:'4px 10px', background:'var(--red)', color:'#fff', border:'none', borderRadius:3, display:'flex', alignItems:'center', gap:4 }}>
                    Get rec <ArrowRight size={9}/>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ border:'1px solid var(--amber)', background:'var(--surface)', borderRadius:6, overflow:'hidden' }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 16px', background:'var(--amber-dim)', borderBottom:'1px solid var(--amber)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:7 }}>
                <TrendingDown size={13} color="var(--amber)"/>
                <span style={{ fontSize:12, fontWeight:600, color:'var(--amber)' }}>At Risk</span>
              </div>
              <span style={{ fontSize:11, fontWeight:600, padding:'2px 8px', background:'var(--amber-dim)', color:'var(--amber)', border:'1px solid var(--amber)', borderRadius:3 }}>{AT_RISK.length} SKUs</span>
            </div>
            {AT_RISK.map((item,i)=>(
              <div key={item.sku} style={{ padding:'12px 16px', borderBottom: i<AT_RISK.length-1?'1px solid var(--border)':'none' }}>
                <div style={{ fontSize:12, fontWeight:600, marginBottom:2 }}>{item.name}</div>
                <div style={{ fontSize:10, color:'var(--text-3)', marginBottom:8 }}>{item.sku}</div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:5, marginBottom:8 }}>
                  <div style={{ background:'var(--surface-2)', padding:'6px 8px', borderRadius:4 }}>
                    <div style={{ fontSize:9, color:'var(--text-3)', fontWeight:600, marginBottom:1 }}>UNITS</div>
                    <div style={{ fontSize:12, fontWeight:600 }}>{item.units}</div>
                  </div>
                  <div style={{ background:'var(--surface-2)', padding:'6px 8px', borderRadius:4 }}>
                    <div style={{ fontSize:9, color:'var(--text-3)', fontWeight:600, marginBottom:1 }}>RATE</div>
                    <div style={{ fontSize:11 }}>{item.velocity}</div>
                  </div>
                  <div style={{ background:'var(--amber-dim)', padding:'6px 8px', borderRadius:4, border:'1px solid var(--amber)' }}>
                    <div style={{ fontSize:9, color:'var(--amber)', fontWeight:600, marginBottom:1 }}>DAYS SUP</div>
                    <div style={{ fontSize:12, fontWeight:700, color:'var(--amber)' }}>{item.days}d</div>
                  </div>
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ fontSize:10, color:'var(--text-3)' }}>{item.exposure} exposure</span>
                  <button style={{ fontSize:10, fontWeight:600, padding:'4px 10px', background:'transparent', color:'var(--amber)', border:'1px solid var(--amber)', borderRadius:3, display:'flex', alignItems:'center', gap:4 }}>
                    Get rec <ArrowRight size={9}/>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ border:'1px solid var(--green)', background:'var(--surface)', borderRadius:6, overflow:'hidden' }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 16px', background:'var(--green-dim)', borderBottom:'1px solid var(--green)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:7 }}>
                <CheckCircle size={13} color="var(--green)"/>
                <span style={{ fontSize:12, fontWeight:600, color:'var(--green)' }}>Healthy</span>
              </div>
              <span style={{ fontSize:11, fontWeight:600, padding:'2px 8px', background:'var(--green-dim)', color:'var(--green)', border:'1px solid var(--green)', borderRadius:3 }}>{HEALTHY.length} shown</span>
            </div>
            {HEALTHY.map((item,i)=>(
              <div key={item.sku} style={{ padding:'12px 16px', borderBottom: i<HEALTHY.length-1?'1px solid var(--border)':'none', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <div>
                  <div style={{ fontSize:12, fontWeight:500, marginBottom:2 }}>{item.name}</div>
                  <div style={{ fontSize:10, color:'var(--text-3)' }}>{item.sku}</div>
                </div>
                <div style={{ textAlign:'right' }}>
                  <div style={{ fontSize:11, color:'var(--text-2)' }}>{item.velocity}</div>
                  <div style={{ fontSize:12, fontWeight:600, color:'var(--green)' }}>{item.days}d supply</div>
                </div>
              </div>
            ))}
            <div style={{ padding:'11px 16px', borderTop:'1px solid var(--border)', fontSize:11, color:'var(--text-3)' }}>
              +{1284-CRITICAL.length-AT_RISK.length-HEALTHY.length} more SKUs healthy
            </div>
          </div>

        </div>

        <div style={{ border:'1px solid var(--border)', background:'var(--surface)', borderLeft:'3px solid var(--text-3)', padding:'12px 16px', borderRadius:'0 5px 5px 0', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ fontSize:12, color:'var(--text-2)' }}>
            <span style={{ fontWeight:600, color:'var(--text)' }}>Velocity model — </span>
            28-day weighted rolling window with Q4 seasonal adjustment (Oct–Dec). Lead times pulled from Inventory Planner PO history.
          </div>
          <button style={{ fontSize:11, fontWeight:500, padding:'6px 14px', border:'1px solid var(--border-m)', background:'transparent', color:'var(--text-2)', borderRadius:4, whiteSpace:'nowrap', marginLeft:16 }}>Export report</button>
        </div>

      </div>
    </div>
  );
}
