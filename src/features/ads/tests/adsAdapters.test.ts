import { describe, it, expect, vi } from 'vitest';
import { GoogleAdMobAdapter } from '../providers/GoogleAdMobAdapter';
import { MetaAudienceNetworkAdapter } from '../providers/MetaAudienceNetworkAdapter';
import { AdEvent } from '../domain/types';

describe('AdsProvider Adapters (Strategy Pattern)', () => {
  it('GoogleAdMobAdapter should correctly emit events on loadAd and showAd', async () => {
    const adapter = new GoogleAdMobAdapter();
    const eventSpy = vi.fn();

    adapter.onEvent(eventSpy);

    await adapter.loadAd('test_placement');
    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining<Partial<AdEvent>>({
        providerId: 'admob',
        placementId: 'test_placement',
        type: 'Loaded',
      })
    );

    await adapter.showAd('test_placement');
    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining<Partial<AdEvent>>({
        providerId: 'admob',
        placementId: 'test_placement',
        type: 'Impression',
      })
    );
  });

  it('MetaAudienceNetworkAdapter should correctly emit events on loadAd and showAd', async () => {
    const adapter = new MetaAudienceNetworkAdapter();
    const eventSpy = vi.fn();

    adapter.onEvent(eventSpy);

    await adapter.loadAd('test_placement');
    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining<Partial<AdEvent>>({
        providerId: 'meta',
        placementId: 'test_placement',
        type: 'Requested',
      })
    );

    await adapter.showAd('test_placement');
    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining<Partial<AdEvent>>({
        providerId: 'meta',
        placementId: 'test_placement',
        type: 'Clicked',
      })
    );
  });
});
