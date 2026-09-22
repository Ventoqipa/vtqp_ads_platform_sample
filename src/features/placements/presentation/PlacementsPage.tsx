import { PageHeader } from "../../../shared/components/PageHeader";
import { useAdsContext } from '../../ads/context/useAdsContext';

const PROVIDER_NAMES: Record<string, string> = {
  admob: "Google AdMob",
  meta: "Meta Audience Network",
  custom_provider: "Custom Provider",
};

export function PlacementsPage() {
  const { placements, loadAd, showAd } = useAdsContext();

  return (
    <div className="placements-page">
      <PageHeader
        eyebrow="INVENTORY"
        title="Placements"
        description="Represent the places where an application could request advertising."
      />

      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Provider</th>
              <th>Format</th>
              <th>Status</th>
              <th style={{ textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {placements.map((placement) => (
              <tr key={placement.id}>
                <td>
                  <code className="code-badge">{placement.id}</code>
                </td>
                <td style={{ fontWeight: 600 }}>{placement.name}</td>
                <td>{PROVIDER_NAMES[placement.providerId] || placement.providerId}</td>
                <td>{placement.format}</td>
                <td>
                  <span className={`badge ${placement.status === "Paused" ? "paused" : "connected"}`}>
                    {placement.status || "Active"}
                  </span>
                </td>
                <td>
                  <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
                    <button
                      className="btn-primary"
                      style={{
                        padding: "0.4rem 0.85rem",
                        fontSize: "0.85rem",
                        borderRadius: "6px",
                        cursor: placement.status === "Paused" ? "not-allowed" : "pointer",
                        opacity: placement.status === "Paused" ? 0.5 : 1,
                      }}
                      disabled={placement.status === "Paused"}
                      onClick={() => loadAd(placement.id)}
                    >
                      Load Ad
                    </button>
                    <button
                      className="btn-primary"
                      style={{
                        padding: "0.4rem 0.85rem",
                        fontSize: "0.85rem",
                        borderRadius: "6px",
                        background: "#10b981",
                        cursor: placement.status === "Paused" ? "not-allowed" : "pointer",
                        opacity: placement.status === "Paused" ? 0.5 : 1,
                      }}
                      disabled={placement.status === "Paused"}
                      onClick={() => showAd(placement.id)}
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