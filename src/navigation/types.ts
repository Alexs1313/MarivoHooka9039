export type AppPhase = 'Loader' | 'Onboarding' | 'Main';

export type MainTab = 'Discover' | 'Map' | 'Catches' | 'Quiz' | 'Records' | 'Extras';

export type MainOverlay =
  | {type: 'none'}
  | {type: 'ArticleDetail'; articleId: string};
