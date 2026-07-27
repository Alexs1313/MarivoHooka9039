export type OnboardingSlide = {
  id: string;
  hero: number;
  icon: number;
  title: string;
  body: string;
  buttonLabel: string;
};

export const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: 'fishing-through-time',
    hero: require('../assets/hooka-marivo-guide-onboarding-fishing-through-time.png'),
    icon: require('../assets/hooka-marivo-guide-icon-clock.png'),
    title: 'Fishing Through Time',
    body: 'Explore how fishing shaped early civilizations.',
    buttonLabel: 'Continue',
  },
  {
    id: 'cultures-of-the-water',
    hero: require('../assets/hooka-marivo-guide-onboarding-cultures-of-water.png'),
    icon: require('../assets/hooka-marivo-guide-icon-globe.png'),
    title: 'Cultures Of The Water',
    body: 'Learn how communities fished across the world.',
    buttonLabel: 'Continue',
  },
  {
    id: 'knowledge-challenge',
    hero: require('../assets/hooka-marivo-guide-onboarding-knowledge-challenge.png'),
    icon: require('../assets/hooka-marivo-guide-icon-question.png'),
    title: 'Knowledge Challenge',
    body: 'Answer quiz questions inspired by the articles.',
    buttonLabel: 'Continue',
  },
  {
    id: 'unlock-great-catches',
    hero: require('../assets/hooka-marivo-guide-onboarding-unlock-great-catches.png'),
    icon: require('../assets/hooka-marivo-guide-icon-trophy.png'),
    title: 'Unlock Great Catches',
    body: 'Discover legendary fishing records throughout history.',
    buttonLabel: 'Start Exploring',
  },
];
