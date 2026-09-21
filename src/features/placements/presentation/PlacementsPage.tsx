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
  const handleLoadAd = (placementId: string) => {
    console.log(`[UI Event Trigger] Load Ad requested for placement: ${placementId}`);
    // Ready to integrate: activeStrategy.loadAd(placementId)
  };

  const handleShowAd = (placementId: string) => {
    console.log(`[UI Event Trigger] Show Ad requested for placement: ${placementId}`);
    // Ready to integrate: activeStrategy.showAd(placementId)
  };

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
              <th style={{ textAlign: 'right' }}>Actions</th>
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
                <td style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => handleLoadAd(placement.id)}
                      disabled={placement.status === 'Paused'}
                      style={{
                        padding: '0.25rem 0.5rem',
                        fontSize: '0.8rem',
                        cursor: placement.status === 'Paused' ? 'not-allowed' : 'pointer',
                        opacity: placement.status === 'Paused' ? 0.5 : 1
                      }}
                    >
                      Load Ad
                    </button>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => handleShowAd(placement.id)}
                      disabled={placement.status === 'Paused'}
                      style={{
                        padding: '0.25rem 0.5rem',
                        fontSize: '0.8rem',
                        cursor: placement.status === 'Paused' ? 'not-allowed' : 'pointer',
                        opacity: placement.status === 'Paused' ? 0.5 : 1
                      }}
                    >
                      Show Ad
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}