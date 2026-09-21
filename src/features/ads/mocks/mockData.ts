import { Placement, Metrics, AdEvent } from '../domain/types';

export const MOCK_PLACEMENTS: Placement[] = [
  {
    id: 'home_banner',
    name: 'Home Banner',
    providerId: 'admob',
    format: 'Banner',
    status: 'Active',
  },
  {
    id: 'launch_ad',
    name: 'Launch Ad',
    providerId: 'meta',
    format: 'Interstitial',
    status: 'Active',
  },
];

export const MOCK_METRICS: Metrics = {
  requests: 1240,
  impressions: 982,
  clicks: 73,
  failures: 9,
};

export const MOCK_EVENTS: AdEvent[] = [
  {
    id: 'evt_1',
    timestamp: '10:24:13',
    type: 'Requested',
    providerId: 'admob',
    placementId: 'home_banner',
  },
  {
    id: 'evt_2',
    timestamp: '10:24:14',
    type: 'Loaded',
    providerId: 'admob',
    placementId: 'home_banner',
  },
];
