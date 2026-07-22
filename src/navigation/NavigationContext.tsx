import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import {ONBOARDING_SLIDES} from '../data/onboarding';
import type {AppPhase, MainOverlay, MainTab} from './types';

type NavigationContextValue = {
  phase: AppPhase;
  onboardingStep: number;
  onboardingStepCount: number;
  finishLoading: () => void;
  advanceOnboarding: () => void;
  mainTab: MainTab;
  setMainTab: (tab: MainTab) => void;
  overlay: MainOverlay;
  openArticleDetail: (articleId: string) => void;
  closeOverlay: () => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({children}: {children: React.ReactNode}) {
  const [phase, setPhase] = useState<AppPhase>('Loader');
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [mainTab, setMainTab] = useState<MainTab>('Discover');
  const [overlay, setOverlay] = useState<MainOverlay>({type: 'none'});

  const finishLoading = useCallback(() => {
    setPhase('Onboarding');
  }, []);

  const advanceOnboarding = useCallback(() => {
    setOnboardingStep(current => {
      const isLastSlide = current >= ONBOARDING_SLIDES.length - 1;
      if (isLastSlide) {
        setPhase('Main');
        return current;
      }
      return current + 1;
    });
  }, []);

  const openArticleDetail = useCallback((articleId: string) => {
    setOverlay({type: 'ArticleDetail', articleId});
  }, []);

  const closeOverlay = useCallback(() => {
    setOverlay({type: 'none'});
  }, []);

  const value = useMemo(
    () => ({
      phase,
      onboardingStep,
      onboardingStepCount: ONBOARDING_SLIDES.length,
      finishLoading,
      advanceOnboarding,
      mainTab,
      setMainTab,
      overlay,
      openArticleDetail,
      closeOverlay,
    }),
    [
      phase,
      onboardingStep,
      finishLoading,
      advanceOnboarding,
      mainTab,
      overlay,
      openArticleDetail,
      closeOverlay,
    ],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}
