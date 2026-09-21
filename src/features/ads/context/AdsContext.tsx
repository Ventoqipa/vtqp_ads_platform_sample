import React, { useState, useEffect } from 'react';
import { AdsProvider, ProviderId, AdEvent, Metrics, Placement } from '../domain/types';
import { MOCK_PLACEMENTS, MOCK_METRICS, MOCK_EVENTS } from '../mocks/mockData';
import { GoogleAdMobAdapter } from '../providers/GoogleAdMobAdapter';
import { MetaAudienceNetworkAdapter } from '../providers/MetaAudienceNetworkAdapter';
import { AdsContext } from './AdsContextInstance';

const defaultProviders: Record<ProviderId, AdsProvider> = {
  admob: new GoogleAdMobAdapter(),
  meta: new MetaAudienceNetworkAdapter(),
  custom_provider: new GoogleAdMobAdapter(),
};

export const AdsProviderComponent = ({ children }: { children: React.ReactNode }) => {
  const [providers] = useState<Record<ProviderId, AdsProvider>>(defaultProviders);
  const [activeProviderId, setActiveProviderId] = useState<ProviderId>('admob');
  const [events, setEvents] = useState<AdEvent[]>(MOCK_EVENTS);
  const [metrics, setMetrics] = useState<Metrics>(MOCK_METRICS);
  const [placements] = useState<Placement[]>(MOCK_PLACEMENTS);

  const activeProvider = providers[activeProviderId];

  useEffect(() => {
    activeProvider.onEvent((newEvent: AdEvent) => {
      setEvents((prev: AdEvent[]) => [newEvent, ...prev]);

      setMetrics((prev: Metrics) => {
        const next = { ...prev };
        if (newEvent.type === 'Requested') next.requests += 1;
        if (newEvent.type === 'Impression') next.impressions += 1;
        if (newEvent.type === 'Clicked') next.clicks += 1;
        if (newEvent.type === 'Failed') next.failures += 1;
        return next;
      });
    });
  }, [activeProviderId, activeProvider]);

  const selectProvider = (id: ProviderId) => {
    if (providers[id]) {
      setActiveProviderId(id);
    }
  };

  const loadAd = async (placementId: string) => {
    await activeProvider.loadAd(placementId);
  };

  const showAd = async (placementId: string) => {
    await activeProvider.showAd(placementId);
  };

  return (
    <AdsContext.Provider
      value={{
        activeProvider,
        availableProviders: Object.values(providers),
        placements,
        events,
        metrics,
        selectProvider,
        loadAd,
        showAd,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};