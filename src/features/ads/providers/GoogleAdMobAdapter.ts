import { AdsProvider, ProviderId, AdEvent } from '../domain/types';

export class GoogleAdMobAdapter implements AdsProvider {
  readonly id: ProviderId = 'admob';
  readonly name = 'Google AdMob (Mock)';
  isConnected = true;

  private eventCallback?: (event: AdEvent) => void;

  onEvent(callback: (event: AdEvent) => void): void {
    this.eventCallback = callback;
  }

  async initialize(): Promise<void> {
    return Promise.resolve();
  }

  async loadAd(placementId: string): Promise<void> {
    const event: AdEvent = {
      id: `admob_${Date.now()}`,
      timestamp: new Date().toLocaleTimeString(),
      type: 'Loaded',
      providerId: this.id,
      placementId,
    };
    this.eventCallback?.(event);
  }

  async showAd(placementId: string): Promise<void> {
    const event: AdEvent = {
      id: `admob_${Date.now()}`,
      timestamp: new Date().toLocaleTimeString(),
      type: 'Impression',
      providerId: this.id,
      placementId,
    };
    this.eventCallback?.(event);
  }
}