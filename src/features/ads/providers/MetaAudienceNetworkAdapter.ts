import { AdsProvider, AdEvent, Placement, Metrics } from '../domain/types';

export class MetaAudienceNetworkAdapter implements AdsProvider {
  id = 'meta' as const;
  name = 'Meta Audience Network';
  private eventCallback?: (event: AdEvent) => void;

  onEvent(callback: (event: AdEvent) => void): void {
    this.eventCallback = callback;
  }

  async loadAd(placementId: string): Promise<void> {
    if (this.eventCallback) {
      this.eventCallback({
        id: `evt_${Date.now()}`,
        providerId: this.id,
        placementId,
        type: 'Requested',
        timestamp: new Date().toISOString(),
      });
    }
  }

  async showAd(placementId: string): Promise<void> {
    if (this.eventCallback) {
      this.eventCallback({
        id: `evt_${Date.now()}`,
        providerId: this.id,
        placementId,
        type: 'Clicked',
        timestamp: new Date().toISOString(),
      });
    }
  }

  async getMetrics(): Promise<Metrics> {
    return {
      requests: 0,
      impressions: 0,
      clicks: 0,
      fillRate: 0,
      failures: 0,
    };
  }

  async getPlacements(): Promise<Placement[]> {
    return [];
  }
}
