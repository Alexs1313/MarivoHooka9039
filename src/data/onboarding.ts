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
    hero: require('../assets/marivo_onboarding_fishing_through_time.png'),
    icon: require('../assets/marivo_icon_clock.png'),
    title: 'Fishing Through Time',
    body: 'Explore how fishing shaped early civilizations.',
    buttonLabel: 'Continue',
  },
  {
    id: 'cultures-of-the-water',
    hero: require('../assets/marivo_onboarding_cultures_of_water.png'),
    icon: require('../assets/marivo_icon_globe.png'),
    title: 'Cultures Of The Water',
    body: 'Learn how communities fished across the world.',
    buttonLabel: 'Continue',
  },
  {
    id: 'knowledge-challenge',
    hero: require('../assets/marivo_onboarding_knowledge_challenge.png'),
    icon: require('../assets/marivo_icon_question.png'),
    title: 'Knowledge Challenge',
    body: 'Answer quiz questions inspired by the articles.',
    buttonLabel: 'Continue',
  },
  {
    id: 'unlock-great-catches',
    hero: require('../assets/marivo_onboarding_unlock_great_catches.png'),
    icon: require('../assets/marivo_icon_trophy.png'),
    title: 'Unlock Great Catches',
    body: 'Discover legendary fishing records throughout history.',
    buttonLabel: 'Start Exploring',
  },
];
