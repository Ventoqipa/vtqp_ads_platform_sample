import { PageHeader } from '../../../shared/components/PageHeader';
export function DashboardPage() {
  // Mock initial metrics
  const metrics = {
    requests: 1240,
    impressions: 982,
    clicks: 73,
    failures: 9,
  };

  return (
    <div className="dashboard-page">
      <PageHeader
        eyebrow="Overview"
        title="Dashboard"
        description="Overview of ad platform metrics and performance."
      />

      <div className="metrics-grid">
        <div className="metric-card">
          <span className="label">Ad Requests</span>
          <span className="value">{metrics.requests.toLocaleString()}</span>
        </div>
        <div className="metric-card">
          <span className="label">Impressions</span>
          <span className="value">{metrics.impressions.toLocaleString()}</span>
        </div>
        <div className="metric-card">
          <span className="label">Clicks</span>
          <span className="value">{metrics.clicks.toLocaleString()}</span>
        </div>
        <div className="metric-card">
          <span className="label">Failures</span>
          <span className="value">{metrics.failures.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}