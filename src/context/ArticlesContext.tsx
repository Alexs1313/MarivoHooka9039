import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {loadJSON, saveJSON} from '../utils/storage';

const SAVED_ARTICLE_IDS_KEY = '@marivo/savedArticleIds';
const READ_ARTICLE_IDS_KEY = '@marivo/readArticleIds';

type ArticlesContextValue = {
  savedArticleIds: string[];
  readArticleIds: string[];
  isArticleSaved: (articleId: string) => boolean;
  isArticleRead: (articleId: string) => boolean;
  toggleSaved: (articleId: string) => void;
  markAsRead: (articleId: string) => void;
};

const ArticlesContext = createContext<ArticlesContextValue | null>(null);

export function ArticlesProvider({children}: {children: React.ReactNode}) {
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>([]);
  const [readArticleIds, setReadArticleIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    (async () => {
      const [storedSaved, storedRead] = await Promise.all([
        loadJSON<string[]>(SAVED_ARTICLE_IDS_KEY, []),
        loadJSON<string[]>(READ_ARTICLE_IDS_KEY, []),
      ]);
      setSavedArticleIds(storedSaved);
      setReadArticleIds(storedRead);
      setHydrated(true);
    })();
  }, []);

  useEffect(() => {
    if (hydrated) {
      saveJSON(SAVED_ARTICLE_IDS_KEY, savedArticleIds);
    }
  }, [hydrated, savedArticleIds]);

  useEffect(() => {
    if (hydrated) {
      saveJSON(READ_ARTICLE_IDS_KEY, readArticleIds);
    }
  }, [hydrated, readArticleIds]);

  const isArticleSaved = useCallback(
    (articleId: string) => savedArticleIds.includes(articleId),
    [savedArticleIds],
  );

  const isArticleRead = useCallback(
    (articleId: string) => readArticleIds.includes(articleId),
    [readArticleIds],
  );

  const toggleSaved = useCallback((articleId: string) => {
    setSavedArticleIds(current =>
      current.includes(articleId)
        ? current.filter(id => id !== articleId)
        : [...current, articleId],
    );
  }, []);

  const markAsRead = useCallback((articleId: string) => {
    setReadArticleIds(current =>
      current.includes(articleId) ? current : [...current, articleId],
    );
  }, []);

  const value = useMemo(
    () => ({
      savedArticleIds,
      readArticleIds,
      isArticleSaved,
      isArticleRead,
      toggleSaved,
      markAsRead,
    }),
    [savedArticleIds, readArticleIds, isArticleSaved, isArticleRead, toggleSaved, markAsRead],
  );

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  );
}

export function useArticles() {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticles must be used within ArticlesProvider');
  }
  return context;
}
