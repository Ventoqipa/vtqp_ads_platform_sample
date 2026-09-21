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

      <div className="placements-table-container">
        <table className="placements-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Provider</th>
              <th>Format</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mockPlacements.map((placement) => (
              <tr key={placement.id}>
                <td className="placement-id">{placement.id}</td>
                <td style={{ fontWeight: 500 }}>{placement.name}</td>
                <td>{placement.provider}</td>
                <td>{placement.format}</td>
                <td>
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