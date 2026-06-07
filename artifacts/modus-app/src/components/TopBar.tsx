import { Link, useLocation } from "wouter";
import { RefreshCw, Factory } from "lucide-react";
import { useManufacturing } from "@/context/ManufacturingContext";

export function TopBar() {
  const [location] = useLocation();
  const { hasManufacturing } = useManufacturing();

  const NAV = [
    { name: 'Dashboard',       path: '/dashboard'       },
    { name: 'Sales',           path: '/sales'           },
    { name: 'Recommendations', path: '/recommendations' },
    { name: 'Inventory',       path: '/inventory'       },
    { name: 'Integrations',    path: '/integrations'    },
    ...(hasManufacturing ? [{ name: 'Manufacturing', path: '/manufacturing', addon: true }] : []),
  ] as Array<{ name: string; path: string; addon?: boolean }>;

  return (
    <div style={{ height: 52, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', background: 'var(--surface)', flexShrink: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.5px' }}>MODUS</span>
        <span style={{ width: 1, height: 14, background: 'var(--border-m)' }} />
        <span style={{ fontSize: 11, color: 'var(--text-2)' }}>Northbound Co.</span>
        <span style={{ fontSize: 10, fontWeight: 600, padding: '2px 8px', background: 'var(--accent-dark)', color: 'var(--accent-col)', borderRadius: 3, border: '1px solid var(--accent-dim)' }}>PRO</span>
      </div>
      <nav style={{ display: 'flex' }}>
        {NAV.map(n => {
          const isActive = location === n.path;
          return (
            <Link key={n.name} href={n.path}>
              <span
                data-testid={`nav-${n.name.toLowerCase()}`}
                style={{
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  fontSize: 11,
                  fontWeight: 500,
                  padding: '0 14px',
                  height: 52,
                  background: 'none',
                  borderBottom: isActive ? '2px solid var(--accent-col)' : '2px solid transparent',
                  color: isActive ? 'var(--text)' : n.addon ? 'var(--accent-col)' : 'var(--text-3)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {n.addon && <Factory size={10} />}
                {n.name}
              </span>
            </Link>
          );
        })}
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--text-2)' }}>
          <RefreshCw size={11} color="var(--green)" /> Synced 3m ago
        </div>
        <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--surface-3)', border: '1px solid var(--border-m)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600 }}>JK</div>
      </div>
    </div>
  );
}
