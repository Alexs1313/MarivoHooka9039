import type {ImageSourcePropType} from 'react-native';

export type Location = {
  id: string;
  title: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  paragraphs: string[];
  hero?: ImageSourcePropType;
};

export const LOCATIONS: Location[] = [
  {
    id: 'nile-valley-egypt',
    title: 'Nile Valley (Egypt)',
    coordinate: {latitude: 26.8, longitude: 30.8},
    hero: require('../assets/hooka-marivo-guide-nile-valley-egypt.png'),
    paragraphs: [
      'Fishing along the Nile dates back thousands of years and played an important role in supporting ancient Egyptian communities. The river provided a steady source of food and helped settlements grow along its fertile banks. Fishermen commonly used nets, traps, and small reed boats.',
      "As Egyptian civilization expanded, fishing became more organized and efficient. Scenes of fishermen appeared in tomb paintings and temple carvings, showing how closely daily life was connected to the river. The Nile remained one of the region's most valuable resources for centuries.",
    ],
  },
  {
    id: 'mediterranean-greece',
    title: 'Mediterranean Greece',
    coordinate: {latitude: 37.9, longitude: 23.7},
    hero: require('../assets/hooka-marivo-guide-mediterranean-greece.png'),
    paragraphs: [
      'Ancient Greek communities depended heavily on the Mediterranean Sea for food and trade. Coastal fishermen developed techniques suited to rocky shores, calm bays, and open waters. Fish became an important part of local diets and commerce.',
      'Over time, fishing knowledge spread between islands and mainland ports. New tools and larger boats allowed access to deeper waters. Fishing traditions remained closely connected to maritime culture and seafaring life.',
    ],
  },
  {
    id: 'scandinavian-fjords',
    title: 'Scandinavian Fjords',
    coordinate: {latitude: 60.5, longitude: 5.3},
    hero: require('../assets/hooka-marivo-guide-scandinavian-fjords.png'),
    paragraphs: [
      'The cold waters of Scandinavia provided abundant fish for early coastal settlements. Communities learned to navigate rugged coastlines and seasonal migrations of fish. Fishing helped support villages through long northern winters.',
      'During the Viking Age, fishing expanded alongside exploration and trade. Preserved fish became an important commodity across Northern Europe. Maritime skills and fishing knowledge became central parts of Scandinavian culture.',
    ],
  },
  {
    id: 'japanese-coastline',
    title: 'Japanese Coastline',
    coordinate: {latitude: 35.0, longitude: 135.8},
    hero: require('../assets/hooka-marivo-guide-japanese-coastline.png'),
    paragraphs: [
      "Fishing has long been woven into the history of Japan's coastal communities. Villages developed around bays, rivers, and sheltered harbors rich in marine life. Early fishermen relied on local knowledge of tides, currents, and seasonal changes.",
      'As maritime techniques improved, fishing supported growing populations and trade networks. Different regions developed unique methods and traditions suited to their waters. Many of these customs remain part of local culture today.',
    ],
  },
  {
    id: 'south-china-sea',
    title: 'South China Sea',
    coordinate: {latitude: 10.0, longitude: 113.0},
    hero: require('../assets/hooka-marivo-guide-south-china-sea.png'),
    paragraphs: [
      'Fishing communities have existed around the South China Sea for thousands of years. Rivers, estuaries, and coastal waters offered diverse fishing opportunities. Early settlements relied on fish as an important source of food.',
      'Trade routes connected fishing communities across the region and encouraged the exchange of ideas and techniques. Larger vessels gradually expanded access to offshore fishing grounds. Fishing remains a significant part of life throughout the region.',
    ],
  },
  {
    id: 'pacific-northwest',
    title: 'Pacific Northwest',
    coordinate: {latitude: 47.6, longitude: -122.3},
    hero: require('../assets/hooka-marivo-guide-pacific-northwest.png'),
    paragraphs: [
      'The rivers and coastal waters of the Pacific Northwest supported rich fish populations for generations. Indigenous communities developed sustainable fishing practices based on seasonal fish migrations. Fishing became closely linked to cultural traditions and community life.',
      'Over time, new technologies expanded fishing activity across rivers and coastal waters. Fish remained important for trade, food, and regional identity. Many traditional fishing practices continue to be celebrated today.',
    ],
  },
  {
    id: 'north-atlantic-coast',
    title: 'North Atlantic Coast',
    coordinate: {latitude: 55.0, longitude: -7.0},
    hero: require('../assets/hooka-marivo-guide-north-atlantic-coast.png'),
    paragraphs: [
      "The North Atlantic became one of the world's most important fishing regions due to its productive waters. Coastal communities relied on species such as cod and herring for food and trade. Fishing helped support growing settlements along the shoreline.",
      'As maritime travel improved, fishing fleets expanded farther from land. Preserved fish could be transported across large distances and sold in major markets. The industry helped shape the economy of many coastal regions.',
    ],
  },
  {
    id: 'amazon-basin',
    title: 'Amazon Basin',
    coordinate: {latitude: -3.4, longitude: -62.2},
    hero: require('../assets/hooka-marivo-guide-river-basin.png'),
    paragraphs: [
      'Fishing has played a central role in life throughout the Amazon Basin for centuries. Rivers and floodplains provided access to a wide variety of freshwater species. Communities developed techniques adapted to changing water levels and seasonal conditions.',
      "Fishing supported transportation, trade, and food production throughout the region. Knowledge of local waterways became essential for successful catches. These traditions continue to connect people with the Amazon's vast river network.",
    ],
  },
  {
    id: 'arctic-waters',
    title: 'Arctic Waters',
    coordinate: {latitude: 74.0, longitude: 20.0},
    hero: require('../assets/hooka-marivo-guide-arctic-waters.png'),
    paragraphs: [
      'Fishing in Arctic regions required adaptation to cold climates and challenging conditions. Coastal communities learned to work with seasonal ice, changing weather, and limited daylight. Fish became an important resource for survival.',
      'Over generations, local knowledge helped fishermen understand migration patterns and environmental changes. Fishing techniques evolved to suit harsh northern waters. These practices remain an important part of Arctic heritage.',
    ],
  },
  {
    id: 'great-lakes-region',
    title: 'Great Lakes Region',
    coordinate: {latitude: 44.5, longitude: -84.5},
    hero: require('../assets/hooka-marivo-guide-great-lakes-region.png'),
    paragraphs: [
      'The Great Lakes provided abundant freshwater resources for communities living along their shores. Early fishermen used canoes, nets, and traps to harvest local fish species. Fishing contributed to food security and regional trade.',
      'As settlements expanded, fishing became increasingly organized and commercialized. Harbors and transportation networks supported the movement of catches between communities. The lakes continue to play an important role in regional fishing traditions.',
    ],
  },
];

export function getLocationById(locationId: string): Location | undefined {
  return LOCATIONS.find(location => location.id === locationId);
}
