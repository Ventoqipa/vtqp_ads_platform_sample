import { PageHeader } from '../../../shared/components/PageHeader';

interface PlacementMock {
  id: string;
  name: string;
  provider: string;
  format: string;
  status: 'Active' | 'Paused';
}

const mockPlacements: PlacementMock[] = [
  { id: 'home_banner', name: 'Home Banner', provider: 'Google AdMob', format: 'Banner', status: 'Active' },
  { id: 'workout_interstitial', name: 'Workout Interstitial', provider: 'Meta Audience Network', format: 'Interstitial', status: 'Active' },
  { id: 'profile_rewarded', name: 'Profile Rewarded', provider: 'Google AdMob', format: 'Rewarded', status: 'Paused' },
  { id: 'settings_banner', name: 'Settings Banner', provider: 'Meta Audience Network', format: 'Banner', status: 'Active' },
];

export function PlacementsPage() {
  return (
    <div className="placements-page">
      <PageHeader
        eyebrow="Inventory"
        title="Placements"
        description="Represent the places where an application could request advertising."
      />

      <div className="card" style={{ marginTop: '1.5rem', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color, #e5e7eb)' }}>
              <th style={{ padding: '0.75rem 1rem' }}>ID</th>
              <th style={{ padding: '0.75rem 1rem' }}>Name</th>
              <th style={{ padding: '0.75rem 1rem' }}>Provider</th>
              <th style={{ padding: '0.75rem 1rem' }}>Format</th>
              <th style={{ padding: '0.75rem 1rem' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {mockPlacements.map((placement) => (
              <tr key={placement.id} style={{ borderBottom: '1px solid var(--border-color, #f3f4f6)' }}>
                <td style={{ padding: '0.75rem 1rem', fontFamily: 'monospace' }}>{placement.id}</td>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 500 }}>{placement.name}</td>
                <td style={{ padding: '0.75rem 1rem' }}>{placement.provider}</td>
                <td style={{ padding: '0.75rem 1rem' }}>{placement.format}</td>
                <td style={{ padding: '0.75rem 1rem' }}>
                  <span className={`badge ${placement.status === 'Active' ? 'connected' : 'disconnected'}`}>
                    {placement.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}