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
    id: 'workout_interstitial',
    name: 'Workout Interstitial',
    providerId: 'meta',
    format: 'Interstitial',
    status: 'Active',
  },
  {
    id: 'profile_rewarded',
    name: 'Profile Rewarded',
    providerId: 'admob',
    format: 'Rewarded',
    status: 'Paused',
  },
  {
    id: 'settings_banner',
    name: 'Settings Banner',
    providerId: 'meta',
    format: 'Banner',
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
    timestamp: '10:24:12',
    type: 'Requested',
    providerId: 'admob',
    placementId: 'home_banner',
    details: 'Ad request sent',
  },
  {
    id: 'evt_2',
    timestamp: '10:24:13',
    type: 'Loaded',
    providerId: 'admob',
    placementId: 'home_banner',
  },
  {
    id: 'evt_3',
    timestamp: '10:24:15',
    type: 'Impression',
    providerId: 'admob',
    placementId: 'home_banner',
  },
  {
    id: 'evt_4',
    timestamp: '10:24:20',
    type: 'Clicked',
    providerId: 'admob',
    placementId: 'home_banner',
  },
  {
    id: 'evt_5',
    timestamp: '10:25:01',
    type: 'Failed',
    providerId: 'meta',
    placementId: 'workout_interstitial',
    details: 'Network error',
  },
];
