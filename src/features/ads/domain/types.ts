export type ProviderId = 'admob' | 'meta' | 'custom_provider';
export type AdFormat = 'Banner' | 'Interstitial' | 'Rewarded';
export type PlacementStatus = 'Active' | 'Paused';
export type AdEventType = 'Requested' | 'Loaded' | 'Impression' | 'Clicked' | 'Failed';

export interface Placement {
  id: string;
  name: string;
  providerId: ProviderId;
  format: AdFormat;
  status: PlacementStatus;
}

export interface AdEvent {
  id: string;
  timestamp: string;
  type: AdEventType;
  providerId: ProviderId;
  placementId: string;
  details?: string;
}

export interface Metrics {
  requests: number;
  impressions: number;
  clicks: number;
  failures: number;
}

export interface AdsProvider {
  id: ProviderId;
  name: string;
  isConnected: boolean;
  initialize(): Promise<void>;
  loadAd(placementId: string): Promise<void>;
  showAd(placementId: string): Promise<void>;
  onEvent(callback: (event: AdEvent) => void): void;
}