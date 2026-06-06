import { useState } from 'react';
import { Zap, ChevronRight, ChevronDown, ChevronUp, ArrowUpRight, BarChart2, TrendingDown, Users, ShoppingCart, Clock } from 'lucide-react';
import { TopBar } from '@/components/TopBar';

type ActionType = 'PROMOTE'|'BUNDLE'|'DISCOUNT'|'REORDER'|'CLEARANCE';

interface Rec {
  id: number;
  name: string;
  sku: string;
  action: ActionType;
  confidence: number;
  impact: string;
  impactValue: string;
  summary: string;
  analysis: {
    conclusion: string;
    signals: Array<{ label: string; value: string; weight: number; icon: any }>;
    modelNote: string;
    historicalAccuracy: string;
    dataPoints: string;
  };
}

const ACTION_STYLE: Record<ActionType,{bg:string;color:string}> = {
  PROMOTE:  { bg:'var(--blue-dim)',  color:'var(--blue-col)' },
  BUNDLE:   { bg:'var(--green-dim)', color:'var(--green)' },
  DISCOUNT: { bg:'var(--amber-dim)', color:'var(--amber)' },
  REORDER:  { bg:'var(--red-dim)',   color:'var(--red-col)' },
  CLEARANCE:{ bg:'var(--surface-3)', color:'var(--text-2)' },
};

const RECS: Rec[] = [
  {
    id:1, name:'Merino Crew — Slate', sku:'MC-SLT-M', action:'BUNDLE', confidence:94,
    impact:'Revenue uplift', impactValue:'+$3,200',
    summary:'68% of buyers co-purchase this with Merino Turtleneck within 7 days — surfacing as a bundle increases AOV without a markdown.',
    analysis:{
      conclusion:'A statistically significant co-purchase pattern exists between this SKU and MT-SLT-M. The model identifies that customers who own one almost always return for the other. A bundled presentation at checkout or in email captures that intent earlier.',
      signals:[
        { label:'Co-purchase rate (7-day window)', value:'68% of MC-SLT-M buyers', weight:42, icon:ShoppingCart },
        { label:'Email segment overlap',           value:'74% in same Klaviyo segment', weight:28, icon:Users },
        { label:'Browse affinity score',           value:'0.81 / 1.0 (high)',          weight:18, icon:BarChart2 },
        { label:'Historical bundle uplift',        value:'+22% AOV in 3 prior tests',  weight:12, icon:TrendingDown },
      ],
      modelNote:'Recommendation generated using collaborative-filtering on 14 months of order data. Bundle price set to maintain minimum 58% gross margin.',
      historicalAccuracy:'Bundle recommendations of this confidence tier have a 91% positive outcome rate in prior 30-day windows.',
      dataPoints:'4,210 orders analysed · 2,840 unique customers · 14-month window',
    }
  },
  {
    id:2, name:'Linen Overshirt — Sand', sku:'LO-SND-L', action:'DISCOUNT', confidence:88,
    impact:'Holding cost reduction', impactValue:'−$890/mo',
    summary:'Sell-through dropped from 11.8 to 4.2 units/day. At current velocity you have 38 days of excess supply entering a slow season.',
    analysis:{
      conclusion:'A significant deceleration in sell-through velocity was detected 11 days ago, coinciding with a shift in category search trends (Google). At 4.2 units/day, the current 94 units will take 22 days to clear — well past the seasonal window. A 15% markdown accelerates clearance and avoids carrying costs estimated at $890/month.',
      signals:[
        { label:'Velocity drop vs 30-day avg', value:'−64% (11.8 → 4.2 u/day)',      weight:38, icon:TrendingDown },
        { label:'Days of supply at current rate',value:'22 days (optimal: 12–14)',     weight:31, icon:Clock },
        { label:'Seasonal curve fit',           value:'Category exits peak in 9 days', weight:20, icon:BarChart2 },
        { label:'Markdown elasticity model',    value:'15% discount → +2.8× velocity',weight:11, icon:TrendingDown },
      ],
      modelNote:'Velocity model uses a 28-day weighted rolling window with seasonal adjustment. Markdown elasticity derived from 6 prior discount events on comparable SKUs.',
      historicalAccuracy:'Markdown recommendations of this confidence tier cleared target inventory in 89% of cases within the projected window.',
      dataPoints:'94 units on hand · 28-day velocity window · 6 comparable markdown events',
    }
  },
  {
    id:3, name:'Waxed Canvas Tote — Forest', sku:'WCT-FOR-OS', action:'PROMOTE', confidence:91,
    impact:'Missed revenue potential', impactValue:'+$2,800',
    summary:'3.4× category avg wishlist rate but below-average conversion — a discovery problem, not a demand problem.',
    analysis:{
      conclusion:'This product shows strong latent demand (high wishlist addition, repeat page views) but low conversion relative to comparable products. The gap between intent and purchase is characteristic of a visibility or trust problem — not a price or quality issue. Targeted promotion to existing customers who viewed it increases conversion without requiring a discount.',
      signals:[
        { label:'Wishlist rate vs category avg', value:'3.4× above category average',  weight:35, icon:Users },
        { label:'Conversion rate gap',           value:'1.2% vs 3.8% category avg',    weight:30, icon:ShoppingCart },
        { label:'Cross-product affinity',        value:'2.1× for Utility Belt owners', weight:22, icon:BarChart2 },
        { label:'Repeat page view rate',         value:'61% of viewers return 2×+',    weight:13, icon:Clock },
      ],
      modelNote:'Promotion targeting derived from behavioural segmentation — Utility Belt owners + wishlist adders. Estimated conversion uplift based on 4 similar promote campaigns.',
      historicalAccuracy:'Promote recommendations targeting affinity segments converted at 3.1× the non-targeted baseline in prior campaigns.',
      dataPoints:'1,840 page views · 312 wishlist adds · 22 purchases · 90-day window',
    }
  },
  {
    id:4, name:'Heavyweight Hoodie — Charcoal', sku:'HH-CHR-XL', action:'REORDER', confidence:97,
    impact:'Stockout prevention', impactValue:'< 11 days',
    summary:'28 units remain. At Q4 velocity (14.3 u/day), you hit zero in under 11 days — lead time is 18 days.',
    analysis:{
      conclusion:'The velocity model projects complete stockout in 10.8 days. Supplier lead time for this SKU averages 17.6 days (based on 4 prior POs). This means if a PO is not raised today, there will be a stockout window of approximately 7 days during what Modus models as the highest-demand period of Q4. A stockout at this point costs an estimated $14,300 in lost revenue based on current run rate.',
      signals:[
        { label:'Stock on hand',             value:'28 units (XL only)',              weight:30, icon:ShoppingCart },
        { label:'Current velocity',          value:'14.3 units/day (Q4 peak)',         weight:35, icon:TrendingDown },
        { label:'Projected days to zero',    value:'10.8 days',                        weight:25, icon:Clock },
        { label:'Avg supplier lead time',    value:'17.6 days (4 prior POs)',          weight:10, icon:BarChart2 },
      ],
      modelNote:'Velocity uses a Q4 seasonal uplift multiplier of 1.42× applied to the 28-day baseline. Lead time pulled from Inventory Planner PO history. Stockout cost estimated at current daily revenue rate.',
      historicalAccuracy:'Reorder alerts with 97%+ confidence have correctly predicted stockouts 100% of the time in the trailing 6 months.',
      dataPoints:'28 units · 4 prior POs · 17.6 day avg lead time · Q4 multiplier: 1.42×',
    }
  },
  {
    id:5, name:'Leather Card Sleeve — Tan', sku:'LCS-TAN-OS', action:'CLEARANCE', confidence:82,
    impact:'Capital recovery', impactValue:'$4,100',
    summary:'210 units aged 90+ days. Category search trends declining. −35% clearance recovers $4,100 capital.',
    analysis:{
      conclusion:'This SKU has been aging for 90+ days with no meaningful reorder history and a declining category search trend (−22% MoM on Google Trends). At the current velocity of 1.8 units/day, the 210-unit inventory will take 117 days to clear — well into a period of further demand decline. Clearance pricing at −35% increases velocity sufficiently to clear stock in approximately 40 days, recovering $4,100 in capital and freeing warehouse allocation for higher-velocity items.',
      signals:[
        { label:'Inventory age',              value:'91 days avg (210 units)',          weight:30, icon:Clock },
        { label:'Category search trend',      value:'−22% MoM (Google Trends)',        weight:28, icon:TrendingDown },
        { label:'Current sell-through rate',  value:'1.8 u/day → 117 days to clear',   weight:25, icon:BarChart2 },
        { label:'Clearance velocity model',   value:'−35% → 5.3 u/day → 40 day clear',weight:17, icon:ShoppingCart },
      ],
      modelNote:'Clearance markdown level selected to maximise recovered capital while clearing stock within 45 days. Markdown elasticity calibrated on 8 prior clearance events for accessories.',
      historicalAccuracy:'Clearance recommendations at this confidence tier cleared stock within the projected window in 85% of cases.',
      dataPoints:'210 units · 91 day avg age · 8 comparable clearance events · 6-month trend window',
    }
  },
];

function RecCard({ rec }: { rec: Rec }) {
  const [expanded, setExpanded] = useState(false);
  const s = ACTION_STYLE[rec.action];

  return (
    <div style={{ border:'1px solid var(--border-m)', background:'var(--surface)', borderRadius:6, overflow:'hidden', transition:'all 0.2s' }}>
      <div style={{ padding:'18px 22px', display:'grid', gridTemplateColumns:'1fr 200px', gap:20 }}>
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:9, marginBottom:10 }}>
            <span style={{ fontSize:10, fontWeight:700, padding:'3px 9px', background:s.bg, color:s.color, borderRadius:3, letterSpacing:'0.05em' }}>{rec.action}</span>
            <span style={{ fontSize:15, fontWeight:600 }}>{rec.name}</span>
            <span style={{ fontSize:11, color:'var(--text-3)' }}>· {rec.sku}</span>
          </div>
          <p style={{ fontSize:12, color:'var(--text-2)', lineHeight:1.65, marginBottom:12 }}>{rec.summary}</p>
          <button data-testid={`btn-analysis-${rec.id}`} onClick={()=>setExpanded(e=>!e)} style={{ display:'flex', alignItems:'center', gap:5, fontSize:11, fontWeight:600, color:'var(--text-3)', background:'none', border:'1px solid var(--border)', padding:'4px 10px', borderRadius:4, transition:'all 0.15s' }}>
            {expanded ? <><ChevronUp size={11}/> Hide analysis</> : <><ChevronDown size={11}/> See analysis</>}
          </button>
        </div>
        <div style={{ borderLeft:'1px solid var(--border)', paddingLeft:20, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
          <div>
            <div style={{ fontSize:10, fontWeight:600, color:'var(--text-3)', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:4 }}>{rec.impact}</div>
            <div style={{ fontSize:22, fontWeight:700, color: rec.action==='REORDER'?'var(--red-col)': rec.action==='CLEARANCE'?'var(--text)':'var(--green)', letterSpacing:'-0.5px', marginBottom:6 }}>{rec.impactValue}</div>
            <div style={{ display:'flex', alignItems:'center', gap:5, fontSize:11, color:'var(--text-2)', fontWeight:500 }}>
              <Zap size={10} color="var(--accent-col)"/> {rec.confidence}% confidence
            </div>
          </div>
          <button data-testid={`btn-apply-${rec.id}`} style={{ fontSize:12, fontWeight:600, padding:'9px 0', background:'var(--accent-col)', color:'#0B0A08', border:'none', borderRadius:4, display:'flex', alignItems:'center', justifyContent:'center', gap:6, marginTop:14 }}>
            Apply action <ChevronRight size={12}/>
          </button>
        </div>
      </div>

      {expanded && (
        <div style={{ borderTop:'1px solid var(--border)', background:'var(--surface-2)', padding:'20px 22px' }}>
          <div style={{ marginBottom:16 }}>
            <div style={{ fontSize:11, fontWeight:700, color:'var(--text-2)', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:8 }}>How Modus reached this conclusion</div>
            <p style={{ fontSize:12, color:'var(--text-2)', lineHeight:1.7, maxWidth:700 }}>{rec.analysis.conclusion}</p>
          </div>

          <div style={{ marginBottom:16 }}>
            <div style={{ fontSize:11, fontWeight:700, color:'var(--text-2)', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:10 }}>Signal Breakdown</div>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {rec.analysis.signals.map((sig,i)=>{
                const Icon = sig.icon;
                return (
                  <div key={i} style={{ display:'grid', gridTemplateColumns:'24px 1fr 140px 80px', gap:10, alignItems:'center' }}>
                    <Icon size={13} color="var(--text-3)"/>
                    <span style={{ fontSize:12, color:'var(--text-2)' }}>{sig.label}</span>
                    <span style={{ fontSize:12, color:'var(--text)', fontWeight:500 }}>{sig.value}</span>
                    <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                      <div style={{ flex:1, height:4, background:'var(--surface-3)', borderRadius:2 }}>
                        <div style={{ width:`${sig.weight}%`, height:'100%', background:'var(--accent-col)', borderRadius:2 }}/>
                      </div>
                      <span style={{ fontSize:10, color:'var(--text-3)', width:28 }}>{sig.weight}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
            <div style={{ background:'var(--surface-3)', padding:'12px 14px', borderRadius:5 }}>
              <div style={{ fontSize:10, fontWeight:700, color:'var(--text-3)', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:5 }}>Model Note</div>
              <p style={{ fontSize:11, color:'var(--text-2)', lineHeight:1.6 }}>{rec.analysis.modelNote}</p>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              <div style={{ background:'var(--green-dim)', border:'1px solid var(--green)', padding:'10px 14px', borderRadius:5 }}>
                <div style={{ fontSize:10, fontWeight:700, color:'var(--green)', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:3 }}>Historical Accuracy</div>
                <p style={{ fontSize:11, color:'var(--text-2)', lineHeight:1.55 }}>{rec.analysis.historicalAccuracy}</p>
              </div>
              <div style={{ background:'var(--surface-3)', padding:'10px 14px', borderRadius:5 }}>
                <div style={{ fontSize:10, fontWeight:700, color:'var(--text-3)', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:3 }}>Data Scope</div>
                <p style={{ fontSize:11, color:'var(--text-2)' }}>{rec.analysis.dataPoints}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Recommendations() {
  const [filter, setFilter] = useState('ALL');

  const filteredRecs = filter === 'ALL' ? RECS : RECS.filter(r => r.action === filter);

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100vh', background:'var(--bg)', overflow:'hidden' }}>
      <TopBar />
      <div style={{ flex:1, overflowY:'auto', padding:'28px 32px' }}>

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:22 }}>
          <div>
            <h1 style={{ fontSize:22, fontWeight:600, letterSpacing:'-0.4px', marginBottom:3 }}>AI Recommendations</h1>
            <p style={{ fontSize:12, color:'var(--text-2)' }}>14 active signals · Model updated 3 hrs ago · Confidence threshold: 80%</p>
          </div>
          <div style={{ display:'flex', gap:6, alignItems:'center' }}>
            {(['ALL','BUNDLE','REORDER','DISCOUNT','PROMOTE'] as const).map((f)=>(
              <button key={f} onClick={() => setFilter(f)} data-testid={`filter-${f}`} style={{ fontSize:11, fontWeight:500, padding:'5px 12px', border:'1px solid var(--border-m)', background: filter===f?'var(--accent-col)':'transparent', color: filter===f?'#0B0A08':'var(--text-2)', borderRadius:4 }}>{f}</button>
            ))}
          </div>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {filteredRecs.map(rec => <RecCard key={rec.id} rec={rec}/>)}
        </div>

        <div style={{ marginTop:18, display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid var(--border)', paddingTop:16 }}>
          <span style={{ fontSize:12, color:'var(--text-2)' }}>Showing {filteredRecs.length} of 14 recommendations</span>
          <button data-testid="btn-load-more" style={{ fontSize:12, fontWeight:500, padding:'6px 16px', border:'1px solid var(--border-m)', background:'transparent', color:'var(--text-2)', borderRadius:4, display:'flex', alignItems:'center', gap:5 }}>
            Load more <ArrowUpRight size={12}/>
          </button>
        </div>
      </div>
    </div>
  );
}
