import './_group.css';
import { TrendingUp, TrendingDown, ShoppingCart, Users, ArrowUpRight, ArrowDownRight, Download } from 'lucide-react';

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
          <button key={n} style={{ fontSize:11, fontWeight:500, padding:'0 14px', height:52, background:'none', border:'none', borderBottom: n==='Sales' ? '2px solid var(--accent)' : '2px solid transparent', color: n==='Sales' ? 'var(--text)' : 'var(--text-3)', letterSpacing:'0.04em', textTransform:'uppercase' }}>{n}</button>
        ))}
      </nav>
      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
        <div style={{ width:30, height:30, borderRadius:'50%', background:'var(--surface-3)', border:'1px solid var(--border-m)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:600 }}>JK</div>
      </div>
    </div>
  );
}

const MONTHS_SHORT = ['J','A','S','O','N','D','J','F','M','A','M','J'];
const REV_THIS = [52,61,70,58,83,101,74,66,78,91,106,127];
const REV_LAST = [41,49,58,52,69,84,60,55,64,76,88,103];
const MAX_R = 135;

const TOP_PRODUCTS = [
  { rank:1, name:'Heavyweight Hoodie — Charcoal', category:'Apparel', units:843, revenue:'$42,150', pct:30.7, trend:true },
  { rank:2, name:'Merino Crew — Slate',            category:'Apparel', units:612, revenue:'$30,600', pct:22.3, trend:true },
  { rank:3, name:'Waxed Canvas Tote — Forest',     category:'Accessories', units:478, revenue:'$19,120', pct:13.9, trend:true },
  { rank:4, name:'Linen Overshirt — Sand',         category:'Apparel', units:291, revenue:'$17,460', pct:12.7, trend:false },
  { rank:5, name:'Quilted Vest — Olive',           category:'Apparel', units:234, revenue:'$14,040', pct:10.2, trend:true },
  { rank:6, name:'Leather Card Sleeve — Tan',      category:'Accessories', units:198, revenue:'$5,940',  pct:4.3,  trend:false },
];

const CATEGORIES = [
  { name:'Apparel',      pct:72, rev:'$99,900' },
  { name:'Accessories',  pct:18, rev:'$24,960' },
  { name:'Footwear',     pct:6,  rev:'$8,310' },
  { name:'Home',         pct:4,  rev:'$5,544' },
];

const COHORTS = [
  { label:'New customers',       value:'312', delta:'+18%',  up:true },
  { label:'Returning customers', value:'1,840', delta:'+8%',  up:true },
  { label:'Avg Order Value',     value:'$94.20', delta:'+6.4%',up:true },
  { label:'Repeat Rate',         value:'67.3%', delta:'+2.1pp',up:true },
];

export function Sales() {
  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100vh', background:'var(--bg)', overflow:'hidden' }}>
      <TopBar />
      <div style={{ flex:1, overflowY:'auto', padding:'28px 32px' }}>

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:22 }}>
          <div>
            <h1 style={{ fontSize:22, fontWeight:600, letterSpacing:'-0.4px', marginBottom:3 }}>Sales & Analytics</h1>
            <p style={{ fontSize:12, color:'var(--text-2)' }}>Jun 2025 – Jun 2026 · Compared to prior year</p>
          </div>
          <div style={{ display:'flex', gap:8 }}>
            {['MTD','QTD','YTD','Custom'].map((r,i)=>(
              <button key={r} style={{ fontSize:11, fontWeight:500, padding:'5px 12px', border:'1px solid var(--border-m)', background: i===2 ? 'var(--accent)' : 'transparent', color: i===2 ? '#0B0A08' : 'var(--text-2)', borderRadius:4 }}>{r}</button>
            ))}
            <button style={{ fontSize:11, fontWeight:500, padding:'5px 12px', border:'1px solid var(--border-m)', background:'transparent', color:'var(--text-2)', borderRadius:4, display:'flex', alignItems:'center', gap:5 }}>
              <Download size={11}/> Export
            </button>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10, marginBottom:18 }}>
          {COHORTS.map(c=>(
            <div key={c.label} style={{ border:'1px solid var(--border)', background:'var(--surface)', padding:'16px 18px', borderRadius:6 }}>
              <div style={{ fontSize:11, fontWeight:500, color:'var(--text-2)', textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:10 }}>{c.label}</div>
              <div style={{ fontSize:22, fontWeight:600, letterSpacing:'-0.5px', marginBottom:5 }}>{c.value}</div>
              <div style={{ display:'flex', alignItems:'center', gap:4, fontSize:12, color:'var(--green)', fontWeight:500 }}>
                <ArrowUpRight size={12}/> {c.delta} vs prior year
              </div>
            </div>
          ))}
        </div>

        <div style={{ border:'1px solid var(--border)', background:'var(--surface)', padding:'22px 24px', borderRadius:6, marginBottom:14 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:18 }}>
            <div>
              <div style={{ fontSize:15, fontWeight:600, marginBottom:2 }}>Revenue Trend</div>
              <div style={{ fontSize:11, color:'var(--text-2)' }}>This year vs prior year — $137.4k total · $103.8k prior</div>
            </div>
            <div style={{ display:'flex', gap:14, fontSize:11, color:'var(--text-2)' }}>
              <span style={{ display:'flex', alignItems:'center', gap:5 }}><div style={{ width:12, height:3, background:'var(--accent)', borderRadius:2 }}/> This year</span>
              <span style={{ display:'flex', alignItems:'center', gap:5 }}><div style={{ width:12, height:3, background:'var(--surface-3)', borderRadius:2 }}/> Prior year</span>
            </div>
          </div>
          <div style={{ position:'relative', height:120 }}>
            <div style={{ display:'flex', alignItems:'flex-end', gap:5, height:'100%' }}>
              {MONTHS_SHORT.map((m,i) => {
                const h1 = Math.round((REV_THIS[i]/MAX_R)*110);
                const h2 = Math.round((REV_LAST[i]/MAX_R)*110);
                const recent = i >= 9;
                return (
                  <div key={m} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}>
                    <div style={{ width:'100%', display:'flex', alignItems:'flex-end', gap:2, height:110, justifyContent:'center' }}>
                      <div style={{ width:'42%', height:h2, background:'var(--surface-3)', borderRadius:'2px 2px 0 0' }} />
                      <div style={{ width:'42%', height:h1, background: recent ? 'var(--accent)' : 'var(--blue)', borderRadius:'2px 2px 0 0', opacity: recent ? 1 : 0.7 }} />
                    </div>
                    <span style={{ fontSize:9, color:'var(--text-3)' }}>{m}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 280px', gap:14 }}>

          <div style={{ border:'1px solid var(--border)', background:'var(--surface)', borderRadius:6, overflow:'hidden' }}>
            <div style={{ padding:'16px 20px', borderBottom:'1px solid var(--border)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div>
                <div style={{ fontSize:14, fontWeight:600, marginBottom:1 }}>Top Products by Revenue</div>
                <div style={{ fontSize:11, color:'var(--text-2)' }}>YTD · All categories</div>
              </div>
              <button style={{ fontSize:11, color:'var(--text-2)', background:'none', border:'1px solid var(--border-m)', padding:'4px 10px', borderRadius:4 }}>View all</button>
            </div>
            <div>
              <div style={{ display:'grid', gridTemplateColumns:'28px 1fr 80px 90px 70px 40px', gap:0, padding:'8px 20px', fontSize:10, fontWeight:600, color:'var(--text-3)', textTransform:'uppercase', letterSpacing:'0.06em', borderBottom:'1px solid var(--border)' }}>
                <span>#</span><span>Product</span><span style={{ textAlign:'right' }}>Units</span><span style={{ textAlign:'right' }}>Revenue</span><span style={{ textAlign:'right' }}>Share</span><span />
              </div>
              {TOP_PRODUCTS.map((p)=>(
                <div key={p.rank} style={{ display:'grid', gridTemplateColumns:'28px 1fr 80px 90px 70px 40px', gap:0, padding:'11px 20px', borderBottom:'1px solid var(--border)', alignItems:'center', fontSize:12 }}>
                  <span style={{ color:'var(--text-3)', fontWeight:500 }}>{p.rank}</span>
                  <div>
                    <div style={{ fontWeight:500, marginBottom:1 }}>{p.name}</div>
                    <div style={{ fontSize:10, color:'var(--text-3)' }}>{p.category}</div>
                  </div>
                  <span style={{ textAlign:'right', color:'var(--text-2)' }}>{p.units.toLocaleString()}</span>
                  <span style={{ textAlign:'right', fontWeight:600 }}>{p.revenue}</span>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'flex-end', gap:5 }}>
                    <div style={{ width:32, height:3, background:'var(--surface-3)', borderRadius:2 }}>
                      <div style={{ width:`${Math.min(p.pct/35*100,100)}%`, height:'100%', background:'var(--accent)', borderRadius:2 }} />
                    </div>
                    <span style={{ color:'var(--text-2)', fontSize:11 }}>{p.pct}%</span>
                  </div>
                  <div style={{ display:'flex', justifyContent:'flex-end' }}>
                    {p.trend ? <ArrowUpRight size={13} color="var(--green)"/> : <ArrowDownRight size={13} color="var(--red)"/>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ border:'1px solid var(--border)', background:'var(--surface)', padding:'18px 20px', borderRadius:6 }}>
            <div style={{ fontSize:14, fontWeight:600, marginBottom:4 }}>Revenue by Category</div>
            <div style={{ fontSize:11, color:'var(--text-2)', marginBottom:18 }}>YTD · $138,714 total</div>
            <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
              {CATEGORIES.map(c=>(
                <div key={c.name}>
                  <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5, fontSize:12 }}>
                    <span style={{ fontWeight:500 }}>{c.name}</span>
                    <div style={{ display:'flex', gap:8, color:'var(--text-2)' }}>
                      <span style={{ fontWeight:600, color:'var(--text)' }}>{c.rev}</span>
                      <span>{c.pct}%</span>
                    </div>
                  </div>
                  <div style={{ height:5, background:'var(--surface-3)', borderRadius:3 }}>
                    <div style={{ width:`${c.pct}%`, height:'100%', background:'var(--accent)', borderRadius:3, opacity: c.pct===72?1:c.pct===18?0.7:c.pct===6?0.45:0.3 }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop:24, paddingTop:20, borderTop:'1px solid var(--border)' }}>
              <div style={{ fontSize:12, fontWeight:600, marginBottom:12 }}>Velocity Heatmap</div>
              <div style={{ fontSize:11, color:'var(--text-2)', marginBottom:8 }}>Peak sales — by day of week</div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:3 }}>
                {['M','T','W','T','F','S','S'].map((d,i)=>(
                  <div key={i} style={{ textAlign:'center' }}>
                    <div style={{ fontSize:9, color:'var(--text-3)', marginBottom:3 }}>{d}</div>
                    <div style={{ height:28, borderRadius:3, background: [0.4,0.55,0.6,0.7,1,0.9,0.5][i]===1?'var(--accent)':'var(--surface-3)', opacity:[0.4,0.55,0.6,0.7,1,0.9,0.5][i] }} />
                  </div>
                ))}
              </div>
              <div style={{ fontSize:10, color:'var(--text-3)', marginTop:6 }}>Friday is peak · 2.4× avg</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
