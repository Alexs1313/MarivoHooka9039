import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {loadJSON, saveJSON} from '../utils/storage';

const TOTAL_POINTS_KEY = '@marivo/totalQuizPoints';

type QuizContextValue = {
  totalPoints: number;
  addPoints: (amount: number) => void;
};

const QuizContext = createContext<QuizContextValue | null>(null);

export function QuizProvider({children}: {children: React.ReactNode}) {
  const [totalPoints, setTotalPoints] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    (async () => {
      setTotalPoints(await loadJSON<number>(TOTAL_POINTS_KEY, 0));
      setHydrated(true);
    })();
  }, []);

  useEffect(() => {
    if (hydrated) {
      saveJSON(TOTAL_POINTS_KEY, totalPoints);
    }
  }, [hydrated, totalPoints]);

  const addPoints = useCallback((amount: number) => {
    setTotalPoints(current => current + amount);
  }, []);

  const value = useMemo(
    () => ({totalPoints, addPoints}),
    [totalPoints, addPoints],
  );

  return (
    <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within QuizProvider');
  }
  return context;
}
