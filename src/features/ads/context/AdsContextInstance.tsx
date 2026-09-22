import { createContext } from 'react';
import { AdsProvider, ProviderId, AdEvent, Metrics, Placement } from '../domain/types';

export interface AdsContextType {
  activeProvider: AdsProvider;
  availableProviders: AdsProvider[];
  placements: Placement[];
  events: AdEvent[];
  metrics: Metrics;
  selectProvider: (id: ProviderId) => void;
  loadAd: (placementId: string) => Promise<void>;
  showAd: (placementId: string) => Promise<void>;
}

export const AdsContext = createContext<AdsContextType | undefined>(undefined);