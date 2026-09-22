import { useContext } from 'react';
import { AdsContext } from './AdsContextInstance';

export function useAdsContext() {
  const context = useContext(AdsContext);
  if (!context) {
    throw new Error('useAdsContext must be used within an AdsProvider');
  }
  return context;
}
