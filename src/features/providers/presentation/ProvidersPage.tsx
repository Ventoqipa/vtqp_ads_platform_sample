import { PageHeader } from "../../../shared/components/PageHeader";
import { useAdsContext } from '../../ads/context/useAdsContext';
import { ProviderId } from "../../ads/domain/types";

interface ProviderUI {
  id: ProviderId;
  name: string;
  description: string;
}

const availableProviders: ProviderUI[] = [
  {
    id: "admob",
    name: "Google AdMob (Mock)",
    description: "Mock implementation of Google AdMob provider.",
  },
  {
    id: "meta",
    name: "Meta Audience Network (Mock)",
    description: "Mock implementation of Meta Audience Network provider.",
  },
];

export function ProvidersPage() {
  const { activeProvider, selectProvider } = useAdsContext();

  return (
    <div className="providers-page">
      <PageHeader
        eyebrow="PROVIDERS"
        title="Ad Providers"
        description="Manage connected ad networks and their active strategy."
      />

      <div className="providers-grid">
        {availableProviders.map((provider) => {
          const isConnected = activeProvider?.id === provider.id;

          return (
            <div key={provider.id} className="provider-card">
              <div>
                <div className="provider-header">
                  <h3 className="provider-title">{provider.name}</h3>
                  <span
                    className={`badge ${
                      isConnected ? "connected" : "disconnected"
                    }`}
                  >
                    {isConnected ? "Connected" : "Not connected"}
                  </span>
                </div>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    marginTop: "0.5rem",
                  }}
                >
                  {provider.description}
                </p>
              </div>

              <div className="provider-actions" style={{ marginTop: "1.5rem" }}>
                <button
                  className="btn-primary"
                  onClick={() => selectProvider(provider.id)}
                  disabled={isConnected}
                  style={{
                    opacity: isConnected ? 0.7 : 1,
                    cursor: isConnected ? "default" : "pointer",
                  }}
                >
                  {isConnected ? "Active Strategy" : "Select Provider"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}