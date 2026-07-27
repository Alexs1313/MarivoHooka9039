import type {ImageSourcePropType} from 'react-native';

export type TrophyRecord = {
  id: string;
  title: string;
  weight: string;
  length: string;
  paragraphs: string[];
  image: ImageSourcePropType;
  pointsRequired: number;
};

export const TROPHY_RECORDS: TrophyRecord[] = [
  {
    id: 'giant-whale',
    title: 'The Giant Whale',
    weight: 'Up to 190,000 kg',
    length: 'Over 30 meters',
    image: require('../assets/hooka-marivo-guide-the-giant-whale.png'),
    pointsRequired: 0,
    paragraphs: [
      'The blue whale is the largest animal ever known to exist on Earth. Historical whaling expeditions occasionally encountered these enormous giants while traveling across the oceans. Their immense size inspired stories and legends among sailors.',
      'Although modern conservation efforts protect whales today, historical records of encounters with these creatures remain some of the most remarkable stories connected to life at sea.',
    ],
  },
  {
    id: 'colossal-whale-shark',
    title: 'The Colossal Whale Shark',
    weight: 'Up to 21,000 kg',
    length: 'Over 18 meters',
    image: require('../assets/hooka-marivo-guide-the-colossal-whale-shark.png'),
    pointsRequired: 0,
    paragraphs: [
      'The whale shark is the largest fish species in the world. Despite its impressive size, it feeds mainly on plankton and poses little threat to humans. Its enormous body and distinctive spotted pattern make it one of the most recognizable fish in the ocean.',
      'Sightings of exceptionally large whale sharks have fascinated fishermen and explorers for generations. Encounters with these gentle giants remain unforgettable experiences.',
    ],
  },
  {
    id: 'legendary-great-white',
    title: 'The Legendary Great White',
    weight: 'Up to 2,500 kg',
    length: 'Over 6 meters',
    image: require('../assets/hooka-marivo-guide-the-legendary-great-white.png'),
    pointsRequired: 0,
    paragraphs: [
      "The great white shark is one of the ocean's most famous predators. Throughout history, exceptionally large individuals have become the subject of countless stories among fishermen and sailors.",
      'Its powerful build and impressive size have earned it a place among the most legendary marine catches ever documented. Even today, large specimens continue to capture public attention.',
    ],
  },
  {
    id: 'monster-mekong-catfish',
    title: 'The Monster Mekong Catfish',
    weight: 'Up to 350 kg',
    length: 'Up to 3 meters',
    image: require('../assets/hooka-marivo-guide-the-monster-mekong-catfish.png'),
    pointsRequired: 20,
    paragraphs: [
      'The Mekong giant catfish is one of the largest freshwater fish ever recorded. Native to Southeast Asia, it can reach extraordinary sizes and weights.',
      'Rare encounters with these giants have made them famous among river communities. They are considered some of the most impressive freshwater fish ever documented.',
    ],
  },
  {
    id: 'giant-wels-catfish',
    title: 'The Giant Wels Catfish',
    weight: 'Up to 300 kg',
    length: 'Over 2.7 meters',
    image: require('../assets/hooka-marivo-guide-the-giant-wels-catfish.png'),
    pointsRequired: 25,
    paragraphs: [
      'The Wels catfish inhabits many rivers and lakes throughout Europe. Some specimens grow to astonishing sizes, becoming true giants of freshwater ecosystems.',
      'Stories of massive catfish lurking beneath deep waters have circulated for centuries. Large catches continue to fuel the species\' legendary reputation.',
    ],
  },
  {
    id: 'record-northern-pike',
    title: 'The Record Northern Pike',
    weight: 'Up to 35 kg',
    length: 'Over 1.5 meters',
    image: require('../assets/hooka-marivo-guide-the-record-northern-pike.png'),
    pointsRequired: 30,
    paragraphs: [
      'The northern pike is known for its speed, sharp teeth, and ambush hunting style. Large specimens are among the most prized catches in many freshwater regions.',
      'Record pike have amazed anglers with both their size and strength. Their distinctive appearance has made them one of the most iconic freshwater predators.',
    ],
  },
  {
    id: 'giant-common-carp',
    title: 'The Giant Common Carp',
    weight: 'Up to 51 kg',
    length: 'Over 1.2 meters',
    image: require('../assets/hooka-marivo-guide-the-giant-common-carp.png'),
    pointsRequired: 35,
    paragraphs: [
      'Carp have been cultivated and admired for centuries across Europe and Asia. While many remain modest in size, some individuals grow into true freshwater giants.',
      'Record-breaking carp have become famous among fishing enthusiasts worldwide. Their combination of size, age, and resilience makes them especially remarkable.',
    ],
  },
  {
    id: 'massive-sturgeon',
    title: 'The Massive Sturgeon',
    weight: 'Up to 1,500 kg',
    length: 'Over 7 meters',
    image: require('../assets/hooka-marivo-guide-the-massive-sturgeon.png'),
    pointsRequired: 40,
    paragraphs: [
      'Sturgeons are among the oldest fish species still living today. These ancient fish have existed since the time of dinosaurs and can grow to extraordinary sizes.',
      'Historical records describe giant sturgeons that amazed entire communities. Their prehistoric appearance makes them one of the most fascinating fish ever encountered.',
    ],
  },
  {
    id: 'giant-tuna',
    title: 'The Giant Tuna',
    weight: 'Up to 700 kg',
    length: 'Over 4 meters',
    image: require('../assets/hooka-marivo-guide-the-giant-tuna.png'),
    pointsRequired: 45,
    paragraphs: [
      'Bluefin tuna are powerful ocean swimmers capable of traveling vast distances. Their speed, strength, and size have made them legendary among fishermen.',
      'Exceptionally large tuna have become famous throughout fishing history. Some specimens reached sizes that few people imagined possible.',
    ],
  },
  {
    id: 'enormous-arapaima',
    title: 'The Enormous Arapaima',
    weight: 'Up to 220 kg',
    length: 'Over 3 meters',
    image: require('../assets/hooka-marivo-guide-the-enormous-arapaima.png'),
    pointsRequired: 50,
    paragraphs: [
      'The arapaima is one of the largest freshwater fish in the world and lives in the Amazon Basin. Its massive scales and powerful body help it thrive in tropical waters.',
      'For generations, local communities have respected this giant fish. Large arapaima remain among the most impressive freshwater catches ever recorded.',
    ],
  },
];
