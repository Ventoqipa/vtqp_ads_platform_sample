import { PageHeader } from "../../../shared/components/PageHeader";
import { useAdsContext } from '../../ads/context/useAdsContext';

export function DashboardPage() {
  const { metrics, activeProvider, events } = useAdsContext();

  const fillRate =
    metrics.requests > 0
      ? ((metrics.impressions / metrics.requests) * 100).toFixed(1)
      : "0.0";

  return (
    <div className="dashboard-page">
      <PageHeader
        eyebrow="OVERVIEW"
        title="Dashboard"
        description="Monitor real-time ad performance and network strategy."
      />

      {/* Grid de Tarjetas de Métricas */}
      <div className="metrics-grid">
        <div className="metric-card">
          <span className="metric-label" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: 500 }}>
            Active Provider
          </span>
          <strong className="metric-value" style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111827", marginTop: "0.25rem" }}>
            {activeProvider?.name || "None"}
          </strong>
        </div>

        <div className="metric-card">
          <span className="metric-label" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: 500 }}>
            Ad Requests
          </span>
          <strong className="metric-value" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginTop: "0.25rem" }}>
            {metrics.requests.toLocaleString()}
          </strong>
        </div>

        <div className="metric-card">
          <span className="metric-label" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: 500 }}>
            Impressions
          </span>
          <strong className="metric-value" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginTop: "0.25rem" }}>
            {metrics.impressions.toLocaleString()}
          </strong>
        </div>

        <div className="metric-card">
          <span className="metric-label" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: 500 }}>
            Clicks
          </span>
          <strong className="metric-value" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginTop: "0.25rem" }}>
            {metrics.clicks.toLocaleString()}
          </strong>
        </div>

        <div className="metric-card">
          <span className="metric-label" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: 500 }}>
            Failures
          </span>
          <strong className="metric-value" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginTop: "0.25rem" }}>
            {metrics.failures.toLocaleString()}
          </strong>
        </div>

        <div className="metric-card">
          <span className="metric-label" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: 500 }}>
            Fill Rate
          </span>
          <strong className="metric-value" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginTop: "0.25rem" }}>
            {fillRate}%
          </strong>
        </div>
      </div>

      {/* Actividad Reciente */}
      <div className="table-card" style={{ marginTop: "2rem", padding: "1.5rem" }}>
        <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem", fontWeight: 600 }}>
          Recent Activity
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
          Total logged events in current session: <strong>{events.length}</strong>
        </p>
      </div>
    </div>
  );
}