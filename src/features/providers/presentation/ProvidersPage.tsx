import { useState } from 'react';
import { PageHeader } from '../../../shared/components/PageHeader';
import { ProviderId } from '../../ads/domain/types';

interface MockProviderUI {
  id: ProviderId;
  name: string;
  description: string;
  isConnected: boolean;
}

const initialProviders: MockProviderUI[] = [
  {
    id: "admob",
    name: "Google AdMob (Mock)",
    description: "Mock implementation of Google AdMob provider.",
    isConnected: true,
  },
  {
    id: "meta",
    name: "Meta Audience Network (Mock)",
    description: "Mock implementation of Meta Audience Network provider.",
    isConnected: false,
  },
];

export function ProvidersPage() {
  const [activeProviderId, setActiveProviderId] = useState<ProviderId>("admob");

  const handleSelectProvider = (providerId: ProviderId) => {
    setActiveProviderId(providerId);
    console.log(`[UI Strategy Switch] Active provider changed to: ${providerId}`);
    // Ready to integrate: strategyContext.setActiveProvider(providerId)
  };

  return (
    <div className="providers-page">
      <PageHeader
        eyebrow="Providers"
        title="Ad Providers"
        description="Manage connected ad networks and their active strategy."
      />

      <div className="providers-grid">
        {initialProviders.map((provider) => {
          const isActive = provider.id === activeProviderId;

          return (
            <div key={provider.id} className="provider-card">
              <div>
                <div className="provider-header">
                  <h3 className="provider-title">{provider.name}</h3>
                  <span
                    className={`badge ${
                      provider.isConnected ? "connected" : "disconnected"
                    }`}
                  >
                    {provider.isConnected ? "Connected" : "Not connected"}
                  </span>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                  {provider.description}
                </p>
              </div>

              <div className="provider-actions">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => handleSelectProvider(provider.id)}
                  disabled={isActive}
                  style={{
                    opacity: isActive ? 0.6 : 1,
                    cursor: isActive ? 'not-allowed' : 'pointer',
                  }}
                >
                  {isActive ? "Active Strategy" : "Select Provider"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}