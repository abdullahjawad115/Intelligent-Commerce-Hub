import './_group.css';
import { useRef, useState } from 'react';
import { Onboarding } from './Onboarding';
import { Dashboard } from './Dashboard';
import { Sales } from './Sales';
import { Recommendations } from './Recommendations';
import { Inventory } from './Inventory';
import { Integrations } from './Integrations';

const SCREENS = [
  { label: '01 — Onboarding · Store Setup', Component: Onboarding },
  { label: '02 — Dashboard',                Component: Dashboard },
  { label: '03 — Sales & Analytics',         Component: Sales },
  { label: '04 — AI Recommendations',        Component: Recommendations },
  { label: '05 — Inventory Intelligence',    Component: Inventory },
  { label: '06 — Integrations & Settings',   Component: Integrations },
];

const W = 1280;
const H = 900;

export function PrintAll() {
  const [exporting, setExporting] = useState(false);
  const [progress, setProgress] = useState('');
  const screensRef = useRef<(HTMLDivElement | null)[]>([]);

  async function handleExport() {
    setExporting(true);
    setProgress('Loading libraries…');

    const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
      import('html2canvas'),
      import('jspdf'),
    ]);

    const doc = new jsPDF({ orientation: 'landscape', unit: 'px', format: [W, H] });

    for (let i = 0; i < SCREENS.length; i++) {
      const el = screensRef.current[i];
      if (!el) continue;

      setProgress(`Capturing screen ${i + 1} of ${SCREENS.length} — ${SCREENS[i].label}…`);

      const canvas = await html2canvas(el, {
        width: W,
        height: H,
        scale: 1.5,
        useCORS: true,
        backgroundColor: '#080E1A',
        logging: false,
      });

      if (i > 0) doc.addPage([W, H], 'landscape');

      // Header bar
      doc.setFillColor('#0F1829');
      doc.rect(0, 0, W, 38, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.setTextColor('#E4E9F2');
      doc.text('MODUS', 22, 24);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.setTextColor('#8494B0');
      doc.text(`  ·  ${SCREENS[i].label}`, 75, 24);
      doc.setTextColor('#3D5070');
      doc.text(`${i + 1} / ${SCREENS.length}`, W - 55, 24);

      // Screenshot
      const imgData = canvas.toDataURL('image/jpeg', 0.92);
      doc.addImage(imgData, 'JPEG', 0, 38, W, H - 38 - 22);

      // Footer
      doc.setFillColor('#080E1A');
      doc.rect(0, H - 22, W, 22, 'F');
      doc.setFontSize(8);
      doc.setTextColor('#3D5070');
      doc.text('Modus — AI Commerce Intelligence  ·  Confidential', 22, H - 8);
    }

    setProgress('Saving…');
    doc.save('Modus-Screens.pdf');
    setProgress('');
    setExporting(false);
  }

  return (
    <div style={{ background: '#080E1A', minHeight: '100vh', padding: '0 0 60px' }}>
      {/* Sticky controls */}
      <div style={{ position: 'sticky', top: 0, zIndex: 100, background: '#0F1829', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.5px', color: '#E4E9F2', fontFamily: 'Space Grotesk, sans-serif' }}>MODUS</span>
          <span style={{ fontSize: 11, color: '#8494B0', fontFamily: 'Space Grotesk, sans-serif' }}>· Screen Export — {SCREENS.length} screens</span>
        </div>
        <button
          onClick={handleExport}
          disabled={exporting}
          style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, fontWeight: 600, padding: '10px 24px', background: exporting ? '#3D5070' : '#E8A020', color: exporting ? '#8494B0' : '#0B0A08', border: 'none', borderRadius: 5, cursor: exporting ? 'not-allowed' : 'pointer' }}
        >
          {exporting ? progress || 'Exporting…' : '↓ Download PDF'}
        </button>
      </div>

      {/* Screens rendered side-by-side for capture */}
      <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        {SCREENS.map(({ label, Component }, i) => (
          <div key={i}>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 11, color: '#3D5070', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</div>
            <div
              ref={el => { screensRef.current[i] = el; }}
              style={{ width: W, height: H, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0, borderRadius: 6, position: 'relative' }}
            >
              <Component />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
