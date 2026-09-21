import { AdEvent } from '../domain/types';

export const mockEvents: AdEvent[] = [
  {
    id: 'evt_1',
    timestamp: '10:24:12',
    type: 'Requested',
    providerId: 'admob', // Alineado con el contrato ProviderId
    placementId: 'home_banner',
    details: 'Ad request sent'
  },
  {
    id: 'evt_2',
    timestamp: '10:24:13',
    type: 'Loaded',
    providerId: 'admob',
    placementId: 'home_banner'
  },
  {
    id: 'evt_3',
    timestamp: '10:24:15',
    type: 'Impression',
    providerId: 'admob',
    placementId: 'home_banner'
  },
  {
    id: 'evt_4',
    timestamp: '10:24:20',
    type: 'Clicked',
    providerId: 'admob',
    placementId: 'home_banner'
  },
  {
    id: 'evt_5',
    timestamp: '10:25:01',
    type: 'Failed',
    providerId: 'meta', // Alineado con el contrato ProviderId
    placementId: 'workout_interstitial',
    details: 'Network error'
  }
];