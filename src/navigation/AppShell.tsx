import React from 'react';

import {LoaderScreen} from '../screens/LoaderScreen';
import {OnboardingScreen} from '../screens/OnboardingScreen';
import {MainShell} from './MainShell';
import {useNavigation} from './NavigationContext';

export function AppShell() {
  const {phase} = useNavigation();

  switch (phase) {
    case 'Loader':
      return <LoaderScreen />;
    case 'Onboarding':
      return <OnboardingScreen />;
    case 'Main':
      return <MainShell />;
  }
}
