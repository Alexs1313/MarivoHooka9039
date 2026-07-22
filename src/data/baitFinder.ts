export const WATER_TYPES = ['River', 'Lake', 'Pond', 'Sea'] as const;
export type WaterType = (typeof WATER_TYPES)[number];

export const FISH_SPECIES = [
  'Carp',
  'Pike',
  'Perch',
  'Catfish',
  'Trout',
  'Salmon',
  'Bream',
  'Roach',
  'Cod',
] as const;
export type FishSpecies = (typeof FISH_SPECIES)[number];

export const SEASONS = ['Spring', 'Summer', 'Autumn', 'Winter'] as const;
export type Season = (typeof SEASONS)[number];

export const SEASON_MODIFIERS: Record<
  Season,
  {bestTime: string; tip: string}
> = {
  Spring: {
    bestTime: 'Morning',
    tip: 'Fish become more active as the water warms.',
  },
  Summer: {
    bestTime: 'Early Morning / Evening',
    tip: 'Avoid the hottest hours of the day.',
  },
  Autumn: {
    bestTime: 'Afternoon',
    tip: 'Fish feed actively before winter.',
  },
  Winter: {
    bestTime: 'Midday',
    tip: 'Present bait slowly in deeper water.',
  },
};

export type BaitProfile = {
  bestBait: string;
  alternatives: string[];
} | null;

export const FISH_DATABASE: Record<FishSpecies, Record<WaterType, BaitProfile>> = {
  Carp: {
    River: {bestBait: 'Corn', alternatives: ['Boilies', 'Bread']},
    Lake: {bestBait: 'Boilies', alternatives: ['Corn', 'Bread']},
    Pond: {bestBait: 'Bread', alternatives: ['Corn', 'Dough']},
    Sea: null,
  },
  Pike: {
    River: {bestBait: 'Minnow', alternatives: ['Spoon Lure', 'Soft Plastic']},
    Lake: {bestBait: 'Spoon Lure', alternatives: ['Minnow', 'Spinner']},
    Pond: {bestBait: 'Soft Plastic', alternatives: ['Spinner', 'Minnow']},
    Sea: null,
  },
  Perch: {
    River: {bestBait: 'Worm', alternatives: ['Minnow', 'Jig']},
    Lake: {bestBait: 'Jig', alternatives: ['Worm', 'Minnow']},
    Pond: {bestBait: 'Worm', alternatives: ['Maggots', 'Jig']},
    Sea: null,
  },
  Catfish: {
    River: {bestBait: 'Chicken Liver', alternatives: ['Worms', 'Cut Fish']},
    Lake: {bestBait: 'Cut Fish', alternatives: ['Chicken Liver', 'Worms']},
    Pond: {bestBait: 'Worms', alternatives: ['Chicken Liver', 'Dough']},
    Sea: null,
  },
  Trout: {
    River: {bestBait: 'Insects', alternatives: ['Worms', 'Spinners']},
    Lake: {bestBait: 'Spinner', alternatives: ['Insects', 'PowerBait']},
    Pond: {bestBait: 'PowerBait', alternatives: ['Worms', 'Corn']},
    Sea: null,
  },
  Salmon: {
    River: {bestBait: 'Fly Lure', alternatives: ['Spoon Lure', 'Roe']},
    Lake: {bestBait: 'Spoon Lure', alternatives: ['Fly Lure', 'Roe']},
    Pond: null,
    Sea: {bestBait: 'Herring', alternatives: ['Spoon Lure', 'Squid']},
  },
  Bream: {
    River: {bestBait: 'Maggots', alternatives: ['Corn', 'Worms']},
    Lake: {bestBait: 'Corn', alternatives: ['Maggots', 'Bread']},
    Pond: {bestBait: 'Dough', alternatives: ['Bread', 'Corn']},
    Sea: null,
  },
  Roach: {
    River: {bestBait: 'Bread', alternatives: ['Maggots', 'Worms']},
    Lake: {bestBait: 'Maggots', alternatives: ['Bread', 'Corn']},
    Pond: {bestBait: 'Bread', alternatives: ['Dough', 'Maggots']},
    Sea: null,
  },
  Cod: {
    River: null,
    Lake: null,
    Pond: null,
    Sea: {bestBait: 'Squid', alternatives: ['Herring', 'Cut Fish']},
  },
};

export function findBait(
  fish: FishSpecies,
  waterType: WaterType,
  season: Season,
) {
  const profile = FISH_DATABASE[fish][waterType];
  const {bestTime, tip} = SEASON_MODIFIERS[season];

  if (!profile) {
    return {recommended: false as const, bestTime, tip};
  }

  return {
    recommended: true as const,
    bestBait: profile.bestBait,
    alternatives: profile.alternatives,
    bestTime,
    tip,
  };
}
