import { useState, useRef, useEffect } from 'react';
import { Zap, ChevronRight, ChevronDown, ChevronUp, ArrowUpRight, BarChart2, TrendingDown, Users, ShoppingCart, Clock, Send, Loader } from 'lucide-react';
import { TopBar } from '@/components/TopBar';

type ActionType = 'PROMOTE'|'BUNDLE'|'DISCOUNT'|'REORDER'|'CLEARANCE';

interface ChatMessage {
  role: 'user' | 'modus';
  text: string;
  ts: number;
}

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
    feedbackReplies: Array<{ triggers: string[]; reply: string }>;
    fallbackReply: string;
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
      feedbackReplies:[
        {
          triggers:['price','margin','discount','cost'],
          reply:'The bundle price is calculated to protect a minimum 58% gross margin — no markdown is involved. The uplift comes entirely from increased AOV, not reduced unit economics. If you want to test a deeper bundle discount, Modus can model a 10% bundle incentive scenario — estimated AOV impact would be +$47 vs +$38 at the current price point.'
        },
        {
          triggers:['segment','customer','who','audience','email','klaviyo'],
          reply:'The target segment is the 74% of Merino Crew buyers who already exist in the same Klaviyo flow as Turtleneck purchasers. These are warm customers — average LTV is $340, repeat rate 71%. The bundle recommendation is safest sent as a post-purchase email 48–72 hours after the first item ships, when intent is still high.'
        },
        {
          triggers:['why','how','confident','sure','accurate'],
          reply:'Confidence is 94% because the co-purchase rate (68%) is consistent across 14 months with no seasonal variance — it\'s a genuine product affinity, not a one-time anomaly. The +22% AOV lift comes from 3 prior bundle tests on comparable SKU pairs in the same category. The main risk factor is bundle fatigue if overused — Modus recommends limiting this to customers who haven\'t seen a bundle offer in the last 60 days.'
        },
        {
          triggers:['disagree','wrong','no','bad idea','skip'],
          reply:'Noted — I\'ll log your feedback and reduce weighting for BUNDLE signals on this SKU in future models. Can you tell me what\'s driving your hesitation? For example, if it\'s margin pressure, I can re-run the analysis with a stricter floor. If it\'s timing, I can hold this recommendation until after your next campaign window.'
        },
      ],
      fallbackReply:'Good question. The bundle signal is primarily driven by the 68% co-purchase rate over 14 months — that\'s the strongest individual predictor in this model. Is there a specific aspect of the analysis you\'d like me to dig into further?'
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
      feedbackReplies:[
        {
          triggers:['margin','profit','loss','cost','price','15%'],
          reply:'At a 15% markdown, gross margin on this SKU drops from 62% to 53% — still within your healthy range. The alternative is carrying $890/month in holding costs with no margin improvement. If you want to protect margin further, a 10% markdown produces a 1.9× velocity lift (vs 2.8× at 15%), which would clear stock in ~30 days instead of ~18. The tradeoff is a longer tail into the slow season.'
        },
        {
          triggers:['wait','hold','later','season','timing'],
          reply:'Waiting is the riskier path here. The seasonal curve model shows the category exits peak demand in 9 days. If sell-through doesn\'t recover, the same 94 units in 3 weeks will face a much steeper markdown requirement — likely 25–30% to move. The current 15% window is the cheapest exit available before the window closes.'
        },
        {
          triggers:['why','cause','reason','dropped','velocity'],
          reply:'The velocity drop aligns with a −18% shift in category search volume on Google over the same 11-day period — consistent with a seasonal rotation away from linen into heavier fabrications. There\'s no evidence of a quality or review issue (CSAT unchanged). It\'s a category timing problem, not a product problem. That\'s actually good news — a markdown should work as expected.'
        },
        {
          triggers:['disagree','wrong','no','bad','skip'],
          reply:'Understood. I\'ll log this and monitor velocity over the next 5 days. If it drops below 3.0 u/day, I\'ll resurface this recommendation with updated projections. If it recovers above 7.0 u/day, I\'ll archive it. Would you like me to set an alert threshold?'
        },
      ],
      fallbackReply:'The core risk here is timing — the seasonal window for this category closes in roughly 9 days. After that, the markdown requirement to clear the same units rises significantly. What\'s your main hesitation with the 15% approach?'
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
      feedbackReplies:[
        {
          triggers:['price','expensive','cost','value'],
          reply:'Price doesn\'t appear to be the friction point — the conversion gap exists even at the current price, which is in line with category averages. Customers are wishlist-adding at 3.4× the category rate, which signals intent without price objection. If price were the issue, you\'d expect lower wishlist rates, not lower conversion. The data points toward visibility as the lever.'
        },
        {
          triggers:['who','segment','customer','target','audience'],
          reply:'The two highest-propensity segments are: (1) Utility Belt owners — 2.1× affinity score, 340 customers, avg LTV $290; and (2) wishlist adders who haven\'t purchased in 30+ days — 312 customers. A combined Klaviyo flow targeting both groups is the recommended vehicle. Expected send size: ~620 contacts, projected conversion: 3–4%, estimated revenue: $2,800–$3,700.'
        },
        {
          triggers:['discount','markdown','sale','off'],
          reply:'A discount is not recommended here — and isn\'t necessary. The wishlist signal tells us these customers want the product at the current price. Adding a discount trains that segment to wait for sales and compresses margin on a high-intent audience. The promotion should be a visibility play: featured placement, targeted email, or a "back in focus" campaign — not a price reduction.'
        },
        {
          triggers:['disagree','wrong','no','bad idea'],
          reply:'Noted. I\'ll hold the promotion recommendation and continue monitoring the conversion gap. One thing worth considering: the 61% repeat page-view rate means these customers are actively reconsidering — they\'re not lost yet. If you\'d prefer to act on this organically, I\'ll resurface it in 14 days with updated data.'
        },
      ],
      fallbackReply:'The clearest signal here is the gap between intent (high wishlist rate) and action (low conversion). That gap almost always closes with visibility rather than price. What specifically feels uncertain about the promotion approach?'
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
      feedbackReplies:[
        {
          triggers:['how many','quantity','order','units','reorder'],
          reply:'Based on Q4 velocity (14.3 u/day) and a 30-day sell-through target post-restock, the recommended PO quantity is 430 units. That covers the 7-day stockout gap (100 units) plus 30 days of Q4 demand (430 units) with a 10% safety buffer. If your supplier has MOQ constraints, 300 units is the minimum viable order to avoid a second stockout before January.'
        },
        {
          triggers:['supplier','lead time','faster','expedite','rush'],
          reply:'Based on 4 prior POs, your supplier\'s fastest delivery on this SKU was 14 days. If you can negotiate expedited shipping, Modus estimates the stockout window narrows from 7 days to 3–4 days, reducing lost revenue exposure from ~$14,300 to ~$5,700. I\'d recommend raising the PO today regardless and requesting expedite — the $14k exposure justifies the premium freight cost in most scenarios.'
        },
        {
          triggers:['wrong','overestimate','too high','velocity','slow'],
          reply:'The 1.42× Q4 multiplier is based on the last 2 Q4 periods for this SKU specifically — not a generic seasonal assumption. If you believe this year\'s demand will be softer, I can rerun the projection with a 1.2× multiplier. At that rate, days-to-zero extends to ~15 days, which still falls inside the 17.6-day lead time. The stockout risk remains, just with slightly more time to act.'
        },
        {
          triggers:['disagree','no','wait','hold'],
          reply:'I want to flag clearly: at current velocity, you have approximately 10 days before stockout, and your supplier needs 17–18 days to deliver. That means a stockout is near-certain if the PO isn\'t raised today or tomorrow. I\'ll log your decision, but I\'d recommend at minimum requesting a lead time from your supplier before committing to hold. Want me to prepare a PO draft for review without submitting?'
        },
      ],
      fallbackReply:'This is the highest-urgency signal in the queue — 97% confidence and a confirmed lead time gap. What\'s your thinking? I can adjust the order quantity, model a partial reorder, or prepare a PO draft if that helps.'
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
      dataPoints:'210 units · 91 day avg age · 6-month trend window · 8 comparable clearance events',
      feedbackReplies:[
        {
          triggers:['donate','gift','bundle','gift with purchase','free'],
          reply:'Gift-with-purchase is worth considering — it avoids the margin hit of a markdown and can lift AOV on a primary item. The tradeoff: it clears stock more slowly (GWP velocity estimated at ~3.2 u/day vs 5.3 u/day for direct clearance) and won\'t recover the $4,100 in cash — it converts the inventory cost into a marketing expense instead. If your goal is capital recovery, clearance is faster. If the goal is brand experience, GWP is the better move.'
        },
        {
          triggers:['20%','25%','less','smaller','lower markdown'],
          reply:'A 20% markdown would increase velocity to approximately 2.8 u/day — clearing the 210 units in ~75 days rather than 40. That keeps you in slow-sell territory well into Q1, when category demand is projected to decline further. The capital recovery drops from $4,100 to ~$3,200, and you carry 35 more days of holding cost. The math favors the deeper markdown unless you have a specific reason to protect the price point.'
        },
        {
          triggers:['why','category','trend','demand','decline'],
          reply:'The −22% MoM Google Trends signal is for the "leather card holder" category broadly — not specific to your product. It aligns with a wider shift toward digital payments and minimalist wallets that\'s been building for 18 months. There\'s no indication demand will recover in the near term. The 91-day aging of your current stock is consistent with this trend — this SKU has been slow since it was first received.'
        },
        {
          triggers:['disagree','keep','hold','no','wait'],
          reply:'Understood. At 1.8 u/day, natural sell-through will take ~117 days — that\'s well into Q2. I\'ll monitor and resurface this in 30 days with updated velocity data. One flag: if the category trend continues declining at the current rate, the recommended markdown depth in 30 days will likely be 40–45% rather than 35%. Acting earlier preserves more capital. That said, it\'s your call — logged.'
        },
      ],
      fallbackReply:'The capital recovery here is straightforward, but I understand there may be brand reasons to avoid deep markdowns. What\'s your main concern — margin, brand positioning, or something else? I can model alternative clearance approaches.'
    }
  },
];

function getModusReply(input: string, rec: Rec): string {
  const lower = input.toLowerCase();
  for (const fr of rec.analysis.feedbackReplies) {
    if (fr.triggers.some(t => lower.includes(t))) {
      return fr.reply;
    }
  }
  return rec.analysis.fallbackReply;
}

function formatTime(ts: number): string {
  return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function FeedbackThread({ rec }: { rec: Rec }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || typing) return;

    const userMsg: ChatMessage = { role: 'user', text: trimmed, ts: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    const delay = 900 + Math.random() * 800;
    setTimeout(() => {
      const reply = getModusReply(trimmed, rec);
      setMessages(prev => [...prev, { role: 'modus', text: reply, ts: Date.now() }]);
      setTyping(false);
    }, delay);
  }

  function handleKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div style={{ borderTop:'1px solid var(--border)', marginTop:20, paddingTop:20 }}>
      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:14 }}>
        <Zap size={12} color="var(--accent-col)" />
        <span style={{ fontSize:11, fontWeight:700, color:'var(--text-2)', textTransform:'uppercase', letterSpacing:'0.07em' }}>Discuss with Modus</span>
        <span style={{ fontSize:11, color:'var(--text-3)' }}>— push back, ask questions, or request alternatives</span>
      </div>

      {messages.length > 0 && (
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:12, maxHeight:320, overflowY:'auto', paddingRight:4 }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display:'flex', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row', alignItems:'flex-start', gap:10 }}>
              {msg.role === 'modus' && (
                <div style={{ flexShrink:0, width:26, height:26, borderRadius:'50%', background:'var(--accent-dark)', border:'1px solid var(--accent-dim)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <Zap size={11} color="var(--accent-col)" />
                </div>
              )}
              <div style={{
                maxWidth:'72%',
                background: msg.role === 'user' ? 'var(--surface-3)' : 'var(--surface)',
                border: msg.role === 'modus' ? '1px solid var(--border-m)' : '1px solid var(--border)',
                padding:'10px 13px',
                borderRadius: msg.role === 'user' ? '8px 2px 8px 8px' : '2px 8px 8px 8px',
              }}>
                <p style={{ fontSize:12, color: msg.role === 'user' ? 'var(--text)' : 'var(--text-2)', lineHeight:1.65, margin:0 }}>{msg.text}</p>
                <div style={{ fontSize:10, color:'var(--text-3)', marginTop:5, textAlign: msg.role === 'user' ? 'right' : 'left' }}>
                  {msg.role === 'modus' ? 'Modus · ' : ''}{formatTime(msg.ts)}
                </div>
              </div>
              {msg.role === 'user' && (
                <div style={{ flexShrink:0, width:26, height:26, borderRadius:'50%', background:'var(--surface-3)', border:'1px solid var(--border-m)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, fontWeight:700, color:'var(--text-2)' }}>
                  JK
                </div>
              )}
            </div>
          ))}

          {typing && (
            <div style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
              <div style={{ flexShrink:0, width:26, height:26, borderRadius:'50%', background:'var(--accent-dark)', border:'1px solid var(--accent-dim)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Zap size={11} color="var(--accent-col)" />
              </div>
              <div style={{ background:'var(--surface)', border:'1px solid var(--border-m)', padding:'11px 14px', borderRadius:'2px 8px 8px 8px', display:'flex', alignItems:'center', gap:5 }}>
                <Loader size={11} color="var(--text-3)" style={{ animation:'spin 1s linear infinite' }} />
                <span style={{ fontSize:11, color:'var(--text-3)' }}>Modus is thinking…</span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      )}

      {messages.length === 0 && (
        <div style={{ display:'flex', gap:6, marginBottom:10, flexWrap:'wrap' }}>
          {['Why this recommendation?', 'What if I disagree?', 'Show me alternatives'].map(prompt => (
            <button
              key={prompt}
              onClick={() => { setInput(prompt); }}
              style={{ fontSize:11, padding:'5px 11px', border:'1px solid var(--border-m)', background:'transparent', color:'var(--text-3)', borderRadius:4, cursor:'pointer', transition:'color 0.15s, border-color 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-2)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-s)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-3)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-m)'; }}
            >
              {prompt}
            </button>
          ))}
        </div>
      )}

      <div style={{ display:'flex', gap:8, alignItems:'flex-end' }}>
        <textarea
          data-testid={`feedback-input-${rec.id}`}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Ask a question or push back on this recommendation…"
          rows={2}
          style={{
            flex:1,
            background:'var(--surface)',
            border:'1px solid var(--border-m)',
            borderRadius:6,
            padding:'10px 12px',
            fontSize:12,
            color:'var(--text)',
            resize:'none',
            outline:'none',
            fontFamily:'inherit',
            lineHeight:1.5,
          }}
        />
        <button
          data-testid={`feedback-send-${rec.id}`}
          onClick={handleSend}
          disabled={!input.trim() || typing}
          style={{
            width:38,
            height:38,
            borderRadius:6,
            border:'none',
            background: input.trim() && !typing ? 'var(--accent-col)' : 'var(--surface-3)',
            color: input.trim() && !typing ? '#0B0A08' : 'var(--text-3)',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            cursor: input.trim() && !typing ? 'pointer' : 'not-allowed',
            flexShrink:0,
            transition:'background 0.15s, color 0.15s',
          }}
        >
          <Send size={14} />
        </button>
      </div>
      <p style={{ fontSize:10, color:'var(--text-3)', marginTop:6 }}>Press Enter to send · Shift+Enter for new line</p>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        textarea::placeholder { color: var(--text-3); }
        textarea:focus { border-color: var(--border-s) !important; }
      `}</style>
    </div>
  );
}

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
          <button data-testid={`btn-analysis-${rec.id}`} onClick={() => setExpanded(e => !e)} style={{ display:'flex', alignItems:'center', gap:5, fontSize:11, fontWeight:600, color:'var(--text-3)', background:'none', border:'1px solid var(--border)', padding:'4px 10px', borderRadius:4, transition:'all 0.15s', cursor:'pointer' }}>
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
          <button data-testid={`btn-apply-${rec.id}`} style={{ fontSize:12, fontWeight:600, padding:'9px 0', background:'var(--accent-col)', color:'#0B0A08', border:'none', borderRadius:4, display:'flex', alignItems:'center', justifyContent:'center', gap:6, marginTop:14, cursor:'pointer' }}>
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
              {rec.analysis.signals.map((sig, i) => {
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

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:0 }}>
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

          <FeedbackThread rec={rec} />
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
            {(['ALL','BUNDLE','REORDER','DISCOUNT','PROMOTE'] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)} data-testid={`filter-${f}`} style={{ fontSize:11, fontWeight:500, padding:'5px 12px', border:'1px solid var(--border-m)', background: filter===f?'var(--accent-col)':'transparent', color: filter===f?'#0B0A08':'var(--text-2)', borderRadius:4, cursor:'pointer' }}>{f}</button>
            ))}
          </div>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {filteredRecs.map(rec => <RecCard key={rec.id} rec={rec}/>)}
        </div>

        <div style={{ marginTop:18, display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid var(--border)', paddingTop:16 }}>
          <span style={{ fontSize:12, color:'var(--text-2)' }}>Showing {filteredRecs.length} of 14 recommendations</span>
          <button data-testid="btn-load-more" style={{ fontSize:12, fontWeight:500, padding:'6px 16px', border:'1px solid var(--border-m)', background:'transparent', color:'var(--text-2)', borderRadius:4, display:'flex', alignItems:'center', gap:5, cursor:'pointer' }}>
            Load more <ArrowUpRight size={12}/>
          </button>
        </div>
      </div>
    </div>
  );
}
