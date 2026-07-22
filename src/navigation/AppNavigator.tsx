import React from 'react';

import {ArticlesProvider} from '../context/ArticlesContext';
import {QuizProvider} from '../context/QuizContext';
import {AppShell} from './AppShell';
import {NavigationProvider} from './NavigationContext';

export function AppNavigator() {
  return (
    <ArticlesProvider>
      <QuizProvider>
        <NavigationProvider>
          <AppShell />
        </NavigationProvider>
      </QuizProvider>
    </ArticlesProvider>
  );
}
