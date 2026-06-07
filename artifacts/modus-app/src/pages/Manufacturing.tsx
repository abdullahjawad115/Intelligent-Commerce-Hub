import { useState } from 'react';
import { Zap, CheckCircle, Circle, ChevronRight, AlertTriangle, Package, Layers, GitBranch, BarChart2, BookOpen, Clock, ArrowRight, Check } from 'lucide-react';
import { TopBar } from '@/components/TopBar';

const BOM_DATA = [
  {
    id: 'FG-001',
    product: 'Merino Crew — Slate',
    sku: 'MC-SLT-M',
    status: 'active',
    components: [
      { material: 'Merino Wool Yarn (18.5μ)', supplier: 'NZ Merino Co.', qty: '240g', unit_cost: '$4.20', total_cost: '$4.20', lot: 'NZM-2024-441' },
      { material: 'Organic Cotton Lining',    supplier: 'Textile Hub',   qty: '60g',  unit_cost: '$0.80', total_cost: '$0.80', lot: 'TH-OCL-8821' },
      { material: 'Recycled Poly Labels',     supplier: 'LabelCo',       qty: '2 pcs',unit_cost: '$0.12', total_cost: '$0.24', lot: 'LC-RPL-001'  },
      { material: 'Hang Tag + Packaging',     supplier: 'PackPro',       qty: '1 set',unit_cost: '$0.34', total_cost: '$0.34', lot: 'PP-PKG-5530' },
    ],
    cogs: '$5.58',
    margin: '68%',
    lastUpdated: '2 days ago',
  },
  {
    id: 'FG-002',
    product: 'Heavyweight Hoodie — Charcoal',
    sku: 'HH-CHR-XL',
    status: 'active',
    components: [
      { material: 'Fleece Blend Fabric (400gsm)', supplier: 'Fabric Depot', qty: '480g', unit_cost: '$6.10', total_cost: '$6.10', lot: 'FD-FBL-3301' },
      { material: 'YKK Zipper (30cm)',            supplier: 'YKK Direct',   qty: '1 pc', unit_cost: '$1.80', total_cost: '$1.80', lot: 'YKK-Z30-882' },
      { material: 'Drawcord + Eyelets',           supplier: 'AccessParts',  qty: '1 set',unit_cost: '$0.45', total_cost: '$0.45', lot: 'AP-DCE-445'  },
      { material: 'Embroidery Thread',            supplier: 'ThreadCo',     qty: '8m',   unit_cost: '$0.22', total_cost: '$0.22', lot: 'TC-ET-0012'  },
      { material: 'Hang Tag + Packaging',         supplier: 'PackPro',      qty: '1 set',unit_cost: '$0.34', total_cost: '$0.34', lot: 'PP-PKG-5530' },
    ],
    cogs: '$8.91',
    margin: '61%',
    lastUpdated: '1 day ago',
  },
  {
    id: 'FG-003',
    product: 'Waxed Canvas Tote — Forest',
    sku: 'WCT-FOR-OS',
    status: 'review',
    components: [
      { material: 'Waxed Canvas (12oz)',     supplier: 'Heritage Fabrics', qty: '0.9m²', unit_cost: '$8.40', total_cost: '$8.40', lot: 'HF-WC12-771' },
      { material: 'Veg-Tan Leather Handles', supplier: 'Leather Works',   qty: '2 pcs', unit_cost: '$3.20', total_cost: '$6.40', lot: 'LW-VTH-229'  },
      { material: 'Brass D-Rings (25mm)',    supplier: 'HardwareCo',      qty: '4 pcs', unit_cost: '$0.28', total_cost: '$1.12', lot: 'HC-BDR-025'  },
      { material: 'Waxed Thread (Tan)',      supplier: 'ThreadCo',        qty: '12m',   unit_cost: '$0.18', total_cost: '$0.18', lot: 'TC-WT-TAN1'  },
    ],
    cogs: '$16.10',
    margin: '55%',
    lastUpdated: '5 days ago',
  },
];

type WipStage = 'planned' | 'cutting' | 'assembly' | 'qc' | 'ready';

interface WipItem {
  id: string;
  product: string;
  sku: string;
  batch: string;
  qty: number;
  stage: WipStage;
  startDate: string;
  eta: string;
  priority: 'urgent' | 'normal' | 'low';
}

const WIP_ITEMS: WipItem[] = [
  { id:'W001', product:'Heavyweight Hoodie — Charcoal', sku:'HH-CHR-XL', batch:'B-2026-0611', qty:300, stage:'assembly',  startDate:'Jun 3',  eta:'Jun 10', priority:'urgent' },
  { id:'W002', product:'Merino Crew — Slate',           sku:'MC-SLT-M',  batch:'B-2026-0614', qty:200, stage:'cutting',   startDate:'Jun 6',  eta:'Jun 14', priority:'urgent' },
  { id:'W003', product:'Linen Overshirt — Sand',        sku:'LO-SND-L',  batch:'B-2026-0618', qty:150, stage:'planned',   startDate:'Jun 10', eta:'Jun 18', priority:'normal' },
  { id:'W004', product:'Waxed Canvas Tote — Forest',    sku:'WCT-FOR-OS',batch:'B-2026-0620', qty:80,  stage:'qc',        startDate:'Jun 1',  eta:'Jun 9',  priority:'normal' },
  { id:'W005', product:'Leather Card Sleeve — Tan',     sku:'LCS-TAN-OS',batch:'B-2026-0622', qty:400, stage:'ready',     startDate:'May 29', eta:'Jun 8',  priority:'low'   },
];

const STAGES: Array<{ id: WipStage; label: string; color: string; bg: string }> = [
  { id:'planned',  label:'Planned',   color:'var(--text-3)',   bg:'var(--surface-3)' },
  { id:'cutting',  label:'Cutting',   color:'var(--blue-col)', bg:'var(--blue-dim)'  },
  { id:'assembly', label:'Assembly',  color:'var(--amber)',    bg:'var(--amber-dim)' },
  { id:'qc',       label:'QC',        color:'var(--accent-col)',bg:'var(--accent-dark)' },
  { id:'ready',    label:'Ready',     color:'var(--green)',    bg:'var(--green-dim)' },
];

const BATCHES = [
  { lot:'NZM-2024-441', material:'Merino Wool Yarn', supplier:'NZ Merino Co.', received:'May 12, 2026', qty:'48 kg', status:'verified', usedIn:['MC-SLT-M','MC-SLT-S','MC-GRY-M'], certifications:['GOTS','RWS'] },
  { lot:'FD-FBL-3301',  material:'Fleece Blend Fabric',supplier:'Fabric Depot',received:'May 28, 2026', qty:'120 kg',status:'verified', usedIn:['HH-CHR-XL','HH-CHR-L'],           certifications:['OEKO-TEX'] },
  { lot:'HF-WC12-771',  material:'Waxed Canvas 12oz',  supplier:'Heritage Fabrics',received:'Apr 30, 2026', qty:'220 m²',status:'review',  usedIn:['WCT-FOR-OS'],                     certifications:['BCI'] },
  { lot:'LW-VTH-229',   material:'Veg-Tan Leather',    supplier:'Leather Works',received:'Apr 22, 2026', qty:'40 hides',status:'verified',usedIn:['WCT-FOR-OS','LCS-TAN-OS'],        certifications:['LWG Gold'] },
  { lot:'TC-ET-0012',   material:'Embroidery Thread',  supplier:'ThreadCo',     received:'Jun 1, 2026',  qty:'5,000 m',status:'verified', usedIn:['HH-CHR-XL','MC-SLT-M'],           certifications:[] },
];

const PROD_RECS = [
  {
    id:1, product:'Heavyweight Hoodie — Charcoal', sku:'HH-CHR-XL', action:'REORDER_PRODUCTION',
    urgency:'critical', confidence:97,
    headline:'Raise a 430-unit production run immediately',
    rationale:'Current WIP (300 units, Jun 10 ETA) will not cover Q4 demand. At 14.3 u/day velocity and 17.6-day lead time, you need a second run in production by Jun 12 to avoid a stockout window.',
    runSize:430, leadDays:18, revenueAtRisk:'$14,300',
  },
  {
    id:2, product:'Merino Crew — Slate', sku:'MC-SLT-M', action:'PLAN_PRODUCTION',
    urgency:'high', confidence:89,
    headline:'Plan 200-unit run for Aug delivery — Q4 pre-build',
    rationale:'Seasonal demand model shows 1.38× uplift for Q4. Current WIP (200 units) satisfies near-term demand. An Aug production run locks in availability for the Oct–Nov peak without holding excess inventory.',
    runSize:200, leadDays:14, revenueAtRisk:'$6,800',
  },
  {
    id:3, product:'Linen Overshirt — Sand', sku:'LO-SND-L', action:'PAUSE_PRODUCTION',
    urgency:'low', confidence:88,
    headline:'Pause the planned Jun 10 run — demand softening',
    rationale:'Sell-through velocity dropped 64% in the last 11 days. Running 150 units into a slowing season will worsen the existing excess supply problem. Recommend deferring this run until velocity recovers above 8 u/day.',
    runSize:0, leadDays:0, revenueAtRisk:'$2,100 holding cost',
  },
];

const ONBOARDING_STEPS = [
  { id:1, label:'Connect manufacturing ERP or spreadsheet', done:true },
  { id:2, label:'Import Bill of Materials for your top 10 SKUs', done:true },
  { id:3, label:'Set up WIP stage labels to match your workflow', done:true },
  { id:4, label:'Link batch/lot numbers to supplier records', done:false },
  { id:5, label:'Configure production run lead times per SKU', done:false },
  { id:6, label:'Enable AI production run recommendations', done:false },
  { id:7, label:'Run first batch traceability audit', done:false },
];

const PRIORITY_STYLE: Record<string, { color: string; label: string }> = {
  urgent: { color: 'var(--red-col)',   label: 'Urgent'  },
  normal: { color: 'var(--amber)',     label: 'Normal'  },
  low:    { color: 'var(--text-3)',    label: 'Low'     },
};

const URGENCY_STYLE: Record<string, { color: string; bg: string }> = {
  critical: { color: 'var(--red-col)', bg: 'var(--red-dim)'   },
  high:     { color: 'var(--amber)',   bg: 'var(--amber-dim)' },
  low:      { color: 'var(--green)',   bg: 'var(--green-dim)' },
};

function BomSection() {
  const [expanded, setExpanded] = useState<string | null>('FG-001');

  return (
    <section>
      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:14 }}>
        <Layers size={14} color="var(--accent-col)" />
        <span style={{ fontSize:14, fontWeight:600 }}>Bill of Materials Tracking</span>
        <span style={{ fontSize:11, color:'var(--text-3)' }}>· {BOM_DATA.length} active BOMs</span>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
        {BOM_DATA.map(bom => (
          <div key={bom.id} style={{ border:'1px solid var(--border-m)', borderRadius:6, overflow:'hidden', background:'var(--surface)' }}>
            <button onClick={() => setExpanded(expanded === bom.id ? null : bom.id)}
              style={{ width:'100%', padding:'14px 18px', background:'none', border:'none', cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, textAlign:'left' }}>
              <div style={{ display:'flex', alignItems:'center', gap:12, flex:1 }}>
                <div style={{ width:32, height:32, borderRadius:6, background:'var(--surface-2)', border:'1px solid var(--border-m)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <Package size={13} color="var(--text-3)" />
                </div>
                <div>
                  <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                    <span style={{ fontSize:13, fontWeight:600, color:'var(--text)' }}>{bom.product}</span>
                    {bom.status === 'review' && (
                      <span style={{ fontSize:9, fontWeight:700, padding:'2px 7px', background:'var(--amber-dim)', color:'var(--amber)', borderRadius:3, letterSpacing:'0.05em' }}>REVIEW</span>
                    )}
                  </div>
                  <span style={{ fontSize:11, color:'var(--text-3)' }}>{bom.sku} · {bom.components.length} components · COGS {bom.cogs} · {bom.margin} margin</span>
                </div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <span style={{ fontSize:11, color:'var(--text-3)' }}>Updated {bom.lastUpdated}</span>
                <ChevronRight size={13} color="var(--text-3)" style={{ transform: expanded === bom.id ? 'rotate(90deg)' : 'none', transition:'transform 0.15s' }} />
              </div>
            </button>
            {expanded === bom.id && (
              <div style={{ borderTop:'1px solid var(--border)', background:'var(--surface-2)' }}>
                <table style={{ width:'100%', borderCollapse:'collapse', fontSize:11 }}>
                  <thead>
                    <tr style={{ borderBottom:'1px solid var(--border)' }}>
                      {['Material','Supplier','Qty','Unit Cost','Lot / Batch'].map(h => (
                        <th key={h} style={{ padding:'9px 16px', textAlign:'left', fontSize:10, fontWeight:700, color:'var(--text-3)', textTransform:'uppercase', letterSpacing:'0.07em' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {bom.components.map((c, i) => (
                      <tr key={i} style={{ borderBottom: i < bom.components.length - 1 ? '1px solid var(--border)' : 'none' }}>
                        <td style={{ padding:'10px 16px', color:'var(--text)', fontWeight:500 }}>{c.material}</td>
                        <td style={{ padding:'10px 16px', color:'var(--text-2)' }}>{c.supplier}</td>
                        <td style={{ padding:'10px 16px', color:'var(--text-2)' }}>{c.qty}</td>
                        <td style={{ padding:'10px 16px', color:'var(--text)', fontWeight:600 }}>{c.unit_cost}</td>
                        <td style={{ padding:'10px 16px' }}>
                          <span style={{ fontSize:10, fontFamily:'monospace', padding:'2px 7px', background:'var(--surface-3)', color:'var(--text-2)', borderRadius:3, border:'1px solid var(--border)' }}>{c.lot}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function WipSection() {
  const [activeStage, setActiveStage] = useState<WipStage | 'ALL'>('ALL');
  const filtered = activeStage === 'ALL' ? WIP_ITEMS : WIP_ITEMS.filter(w => w.stage === activeStage);

  return (
    <section>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <GitBranch size={14} color="var(--accent-col)" />
          <span style={{ fontSize:14, fontWeight:600 }}>WIP Status Board</span>
          <span style={{ fontSize:11, color:'var(--text-3)' }}>· {WIP_ITEMS.length} active runs</span>
        </div>
        <div style={{ display:'flex', gap:5 }}>
          <button onClick={() => setActiveStage('ALL')} style={{ fontSize:10, fontWeight:600, padding:'4px 10px', border:'1px solid var(--border-m)', borderRadius:3, background: activeStage === 'ALL' ? 'var(--surface-3)' : 'transparent', color: activeStage === 'ALL' ? 'var(--text)' : 'var(--text-3)', cursor:'pointer' }}>ALL</button>
          {STAGES.map(s => (
            <button key={s.id} onClick={() => setActiveStage(s.id)} style={{ fontSize:10, fontWeight:600, padding:'4px 10px', border:'1px solid var(--border-m)', borderRadius:3, background: activeStage === s.id ? s.bg : 'transparent', color: activeStage === s.id ? s.color : 'var(--text-3)', cursor:'pointer' }}>{s.label.toUpperCase()}</button>
          ))}
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
        {filtered.map(item => {
          const stage = STAGES.find(s => s.id === item.stage)!;
          const prio = PRIORITY_STYLE[item.priority];
          const stageIdx = STAGES.findIndex(s => s.id === item.stage);
          return (
            <div key={item.id} style={{ border:'1px solid var(--border-m)', background:'var(--surface)', borderRadius:6, padding:'14px 16px' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
                <div>
                  <div style={{ fontSize:12, fontWeight:600, color:'var(--text)', marginBottom:2 }}>{item.product}</div>
                  <div style={{ fontSize:11, color:'var(--text-3)' }}>{item.sku} · {item.qty} units · Batch {item.batch}</div>
                </div>
                <span style={{ fontSize:9, fontWeight:700, padding:'2px 8px', background:stage.bg, color:stage.color, borderRadius:3, letterSpacing:'0.05em', flexShrink:0 }}>{stage.label.toUpperCase()}</span>
              </div>
              <div style={{ display:'flex', gap:3, marginBottom:12 }}>
                {STAGES.map((s, idx) => (
                  <div key={s.id} style={{ flex:1, height:3, borderRadius:2, background: idx <= stageIdx ? stage.color : 'var(--surface-3)' }} />
                ))}
              </div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <div style={{ fontSize:11, color:'var(--text-3)' }}>
                  <Clock size={10} style={{ display:'inline', marginRight:4 }} />
                  Started {item.startDate} · ETA <strong style={{ color:'var(--text-2)' }}>{item.eta}</strong>
                </div>
                <span style={{ fontSize:10, fontWeight:600, color:prio.color }}>{prio.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function BatchSection() {
  return (
    <section>
      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:14 }}>
        <GitBranch size={14} color="var(--accent-col)" />
        <span style={{ fontSize:14, fontWeight:600 }}>Batch Traceability</span>
        <span style={{ fontSize:11, color:'var(--text-3)' }}>· {BATCHES.length} lots tracked</span>
      </div>
      <div style={{ border:'1px solid var(--border-m)', borderRadius:6, overflow:'hidden', background:'var(--surface)' }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:11 }}>
          <thead>
            <tr style={{ borderBottom:'1px solid var(--border-m)', background:'var(--surface-2)' }}>
              {['Lot Number','Material','Supplier','Received','Qty','Used In','Certifications','Status'].map(h => (
                <th key={h} style={{ padding:'10px 14px', textAlign:'left', fontSize:10, fontWeight:700, color:'var(--text-3)', textTransform:'uppercase', letterSpacing:'0.07em', whiteSpace:'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {BATCHES.map((b, i) => (
              <tr key={b.lot} style={{ borderBottom: i < BATCHES.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <td style={{ padding:'11px 14px' }}>
                  <span style={{ fontSize:10, fontFamily:'monospace', padding:'2px 7px', background:'var(--surface-3)', color:'var(--text-2)', borderRadius:3, border:'1px solid var(--border)' }}>{b.lot}</span>
                </td>
                <td style={{ padding:'11px 14px', color:'var(--text)', fontWeight:500 }}>{b.material}</td>
                <td style={{ padding:'11px 14px', color:'var(--text-2)' }}>{b.supplier}</td>
                <td style={{ padding:'11px 14px', color:'var(--text-3)', whiteSpace:'nowrap' }}>{b.received}</td>
                <td style={{ padding:'11px 14px', color:'var(--text-2)', fontWeight:500 }}>{b.qty}</td>
                <td style={{ padding:'11px 14px' }}>
                  <div style={{ display:'flex', gap:4, flexWrap:'wrap' }}>
                    {b.usedIn.map(s => <span key={s} style={{ fontSize:9, padding:'1px 6px', background:'var(--surface-2)', color:'var(--text-3)', borderRadius:3, border:'1px solid var(--border)', fontFamily:'monospace' }}>{s}</span>)}
                  </div>
                </td>
                <td style={{ padding:'11px 14px' }}>
                  <div style={{ display:'flex', gap:4, flexWrap:'wrap' }}>
                    {b.certifications.length > 0 ? b.certifications.map(c => <span key={c} style={{ fontSize:9, fontWeight:700, padding:'1px 6px', background:'var(--green-dim)', color:'var(--green)', borderRadius:3 }}>{c}</span>) : <span style={{ fontSize:11, color:'var(--text-3)' }}>—</span>}
                  </div>
                </td>
                <td style={{ padding:'11px 14px' }}>
                  {b.status === 'verified' ? (
                    <div style={{ display:'flex', alignItems:'center', gap:5, fontSize:11, color:'var(--green)', fontWeight:600 }}>
                      <CheckCircle size={11} /> Verified
                    </div>
                  ) : (
                    <div style={{ display:'flex', alignItems:'center', gap:5, fontSize:11, color:'var(--amber)', fontWeight:600 }}>
                      <AlertTriangle size={11} /> Review
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ProdRecsSection() {
  const [dismissed, setDismissed] = useState<number[]>([]);
  const visible = PROD_RECS.filter(r => !dismissed.includes(r.id));

  return (
    <section>
      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:14 }}>
        <BarChart2 size={14} color="var(--accent-col)" />
        <span style={{ fontSize:14, fontWeight:600 }}>Production Run Recommendations</span>
        <span style={{ fontSize:11, color:'var(--text-3)' }}>· AI-generated · {visible.length} active</span>
      </div>
      {visible.length === 0 && (
        <div style={{ border:'1px solid var(--border)', borderRadius:6, padding:'24px', textAlign:'center', color:'var(--text-3)', fontSize:12 }}>
          All production recommendations have been actioned. Modus will surface new signals as demand data updates.
        </div>
      )}
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {visible.map(rec => {
          const u = URGENCY_STYLE[rec.urgency];
          return (
            <div key={rec.id} style={{ border:'1px solid var(--border-m)', background:'var(--surface)', borderRadius:6, padding:'16px 20px' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
                <div style={{ flex:1 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:5 }}>
                    <span style={{ fontSize:9, fontWeight:700, padding:'2px 8px', background:u.bg, color:u.color, borderRadius:3, letterSpacing:'0.05em', textTransform:'uppercase' }}>{rec.urgency}</span>
                    <span style={{ fontSize:13, fontWeight:600 }}>{rec.product}</span>
                    <span style={{ fontSize:11, color:'var(--text-3)' }}>· {rec.sku}</span>
                  </div>
                  <p style={{ fontSize:12, color:'var(--text)', fontWeight:600, marginBottom:6 }}>{rec.headline}</p>
                  <p style={{ fontSize:12, color:'var(--text-2)', lineHeight:1.65 }}>{rec.rationale}</p>
                </div>
                <div style={{ marginLeft:20, flexShrink:0, textAlign:'right' }}>
                  <div style={{ fontSize:10, fontWeight:600, color:'var(--text-3)', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:4 }}>Revenue at risk</div>
                  <div style={{ fontSize:18, fontWeight:700, color:'var(--red-col)', marginBottom:8 }}>{rec.revenueAtRisk}</div>
                  <div style={{ fontSize:10, color:'var(--text-3)', marginBottom:2 }}>
                    <Zap size={9} color="var(--accent-col)" style={{ display:'inline', marginRight:3 }} />
                    {rec.confidence}% confidence
                  </div>
                  {rec.runSize > 0 && <div style={{ fontSize:10, color:'var(--text-3)' }}>{rec.runSize} units · {rec.leadDays}d lead</div>}
                </div>
              </div>
              <div style={{ display:'flex', gap:8 }}>
                <button style={{ fontSize:11, fontWeight:600, padding:'7px 18px', background:'var(--accent-col)', color:'#0B0A08', border:'none', borderRadius:4, cursor:'pointer', display:'flex', alignItems:'center', gap:5 }}>
                  <ArrowRight size={11} /> {rec.action === 'PAUSE_PRODUCTION' ? 'Pause run' : 'Create PO draft'}
                </button>
                <button onClick={() => setDismissed(d => [...d, rec.id])} style={{ fontSize:11, fontWeight:500, padding:'7px 14px', background:'transparent', color:'var(--text-3)', border:'1px solid var(--border-m)', borderRadius:4, cursor:'pointer' }}>
                  Dismiss
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function OnboardingPanel() {
  const done = ONBOARDING_STEPS.filter(s => s.done).length;
  const pct = Math.round((done / ONBOARDING_STEPS.length) * 100);

  return (
    <div style={{ border:'1px solid var(--accent-dim)', background:'var(--accent-dark)', borderRadius:8, padding:'20px 18px', position:'sticky', top:0 }}>
      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4 }}>
        <BookOpen size={13} color="var(--accent-col)" />
        <span style={{ fontSize:13, fontWeight:700, color:'var(--text)' }}>Guided Onboarding</span>
      </div>
      <div style={{ fontSize:11, color:'var(--text-2)', marginBottom:14 }}>{done} of {ONBOARDING_STEPS.length} steps complete</div>

      <div style={{ height:5, background:'var(--surface-3)', borderRadius:3, marginBottom:18, overflow:'hidden' }}>
        <div style={{ height:'100%', width:`${pct}%`, background:'var(--accent-col)', borderRadius:3, transition:'width 0.3s' }} />
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {ONBOARDING_STEPS.map(step => (
          <div key={step.id} style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
            {step.done
              ? <Check size={14} color="var(--accent-col)" style={{ flexShrink:0, marginTop:1 }} />
              : <Circle size={14} color="var(--border-m)" style={{ flexShrink:0, marginTop:1 }} />
            }
            <span style={{ fontSize:12, color: step.done ? 'var(--text-2)' : 'var(--text)', lineHeight:1.55, textDecoration: step.done ? 'line-through' : 'none' }}>
              {step.label}
            </span>
          </div>
        ))}
      </div>

      <button style={{ marginTop:18, width:'100%', fontSize:12, fontWeight:600, padding:'9px 0', background:'var(--accent-col)', color:'#0B0A08', border:'none', borderRadius:5, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:6 }}>
        Continue setup <ChevronRight size={12} />
      </button>
    </div>
  );
}

export function Manufacturing() {
  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100vh', background:'var(--bg)', overflow:'hidden' }}>
      <TopBar />
      <div style={{ flex:1, overflowY:'auto' }}>
        <div style={{ padding:'24px 32px 12px', display:'flex', justifyContent:'space-between', alignItems:'flex-end', borderBottom:'1px solid var(--border)' }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:4 }}>
              <h1 style={{ fontSize:22, fontWeight:600, letterSpacing:'-0.4px' }}>Manufacturing Intelligence</h1>
              <span style={{ fontSize:10, fontWeight:700, padding:'3px 10px', background:'var(--accent-dark)', color:'var(--accent-col)', border:'1px solid var(--accent-dim)', borderRadius:4, letterSpacing:'0.05em' }}>ADD-ON</span>
            </div>
            <p style={{ fontSize:12, color:'var(--text-2)' }}>BOM tracking · WIP status · Batch traceability · Production AI · 5 active runs</p>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:6, fontSize:11, color:'var(--green)', fontWeight:500, background:'var(--green-dim)', padding:'6px 12px', borderRadius:5, border:'1px solid var(--green)' }}>
            <div style={{ width:6, height:6, borderRadius:'50%', background:'var(--green)' }} />
            All systems syncing
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 280px', gap:0 }}>
          <div style={{ padding:'28px 32px', display:'flex', flexDirection:'column', gap:36, borderRight:'1px solid var(--border)', overflowY:'auto' }}>
            <BomSection />
            <WipSection />
            <BatchSection />
            <ProdRecsSection />
          </div>
          <div style={{ padding:'28px 20px', overflowY:'auto' }}>
            <OnboardingPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
