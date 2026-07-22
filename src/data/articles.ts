import type {ImageSourcePropType} from 'react-native';

export type Article = {
  id: string;
  period: string;
  title: string;
  shortDescription: string;
  paragraphs: string[];
  hero?: ImageSourcePropType;
};

export const ARTICLES: Article[] = [
  {
    id: 'river-beginnings',
    period: '3000 BCE',
    title: 'River Beginnings',
    shortDescription: 'Early nets and traps',
    hero: require('../assets/marivo_article_hero_river_beginnings.png'),
    paragraphs: [
      'Fishing became an important activity near the great rivers of ancient civilizations. Communities settled close to water sources where fish provided a reliable food supply. Rivers supported growing populations and encouraged the development of permanent settlements. Fishing gradually became part of everyday life.',
      'People crafted simple nets from plant fibers and used woven traps to catch fish. Wooden spears and sharpened sticks were also common tools. These methods required patience and knowledge of fish behavior. Skills were often passed between generations.',
      'Fishing influenced trade and culture in many regions. Surplus catches could be exchanged for other goods. River communities developed traditions connected to water and seasonal migrations of fish. Many early societies depended on these resources for stability.',
    ],
  },
  {
    id: 'fishermen-of-ancient-egypt',
    period: '2500 BCE',
    title: 'Fishermen of Ancient Egypt',
    shortDescription: 'Nile life and fishing',
    hero: require('../assets/marivo_article_hero_fishermen_of_ancient_egypt.png'),
    paragraphs: [
      'The Nile River shaped nearly every aspect of life in ancient Egypt. Fishing supplied food for villages and cities along its banks. The predictable flooding cycles helped maintain healthy fish populations. Waterways became centers of daily activity.',
      'Egyptian fishermen worked from small wooden boats. They used nets, hooks, and baskets designed for local species. Artistic depictions show groups working together during large fishing expeditions. These scenes appear in temples and tombs.',
      'Fishing was both practical and symbolic. Certain fish appeared in stories and decorative art. The river connected communities and supported trade routes. Fishing remained important throughout Egyptian history.',
    ],
  },
  {
    id: 'coastal-hunters-of-greece',
    period: '800 BCE',
    title: 'Coastal Hunters of Greece',
    shortDescription: 'Mediterranean fishing traditions',
    hero: require('../assets/marivo_article_hero_coastal_hunters_of_greece.png'),
    paragraphs: [
      'Ancient Greek communities relied heavily on the sea. Fishing provided food for coastal towns and islands. The Mediterranean offered a variety of species throughout the year. Maritime knowledge became highly valued.',
      'Small boats allowed fishermen to travel farther from shore. Hooks made from bronze improved fishing efficiency. Coastal markets sold fresh catches each day. Fish became a common ingredient in local cuisine.',
      'The sea also influenced mythology and culture. Stories often featured sailors, sea creatures, and ocean gods. Fishing represented both opportunity and risk. Life along the coast revolved around the changing waters.',
    ],
  },
  {
    id: 'roman-fishing-networks',
    period: '100 CE',
    title: 'Roman Fishing Networks',
    shortDescription: 'Trade and fish markets',
    hero: require('../assets/marivo_article_hero_roman_fishing_networks.png'),
    paragraphs: [
      'Fishing expanded significantly during the Roman Empire. Large populations created growing demand for seafood. Rivers, lakes, and coastal waters were all actively used. Fish became part of regional trade systems.',
      'Roman fishermen used advanced nets and specialized boats. Salt preservation allowed fish to travel long distances. Markets offered products from many parts of the empire. Seafood became accessible to more people.',
      'Fishing contributed to economic growth and food distribution. Coastal communities prospered from maritime activities. Written records describe various fishing techniques and species. These accounts provide valuable historical insights today.',
    ],
  },
  {
    id: 'northern-waters-and-vikings',
    period: '900 CE',
    title: 'Northern Waters and Vikings',
    shortDescription: 'Cold seas and voyages',
    hero: require('../assets/marivo_article_hero_northern_waters_and_vikings.png'),
    paragraphs: [
      'Viking communities depended on the sea for survival. Fishing supplemented farming and supported long voyages. Northern waters offered cod, herring, and many other species. These resources helped sustain growing settlements.',
      'Strong boats allowed fishermen to work in challenging conditions. Knowledge of weather and currents was essential. Coastal villages organized seasonal fishing activities. Success required cooperation and experience.',
      'Fish were often dried or preserved for storage. This made transportation easier during long journeys. Fishing helped connect distant communities through trade. Maritime skills became a defining feature of Viking culture.',
    ],
  },
  {
    id: 'medieval-fishing-villages',
    period: '1200 CE',
    title: 'Medieval Fishing Villages',
    shortDescription: 'Growing coastal communities',
    hero: require('../assets/marivo_article_hero_medieval_fishing_villages.png'),
    paragraphs: [
      'During the Middle Ages, fishing villages expanded across Europe. Coastal settlements relied on nearby waters for food and commerce. Fishing became a specialized profession in many regions. Local economies increasingly depended on marine resources.',
      'Communities developed harbors and simple infrastructure. Fishermen organized their work according to seasons and weather. Markets sold fresh and preserved catches. Trade routes connected villages with larger cities.',
      'Fishing traditions strengthened community identity. Families often worked together in the industry. Skills and equipment were inherited over generations. Many customs survived for centuries.',
    ],
  },
  {
    id: 'age-of-exploration-seas',
    period: '1500 CE',
    title: 'Age of Exploration Seas',
    shortDescription: 'New oceans discovered',
    hero: require('../assets/marivo_article_hero_age_of_exploration_seas.png'),
    paragraphs: [
      'Global exploration introduced sailors to unfamiliar waters and species. Expanding trade networks increased interest in marine resources. Fishing knowledge spread between different cultures. New techniques emerged through contact and exchange.',
      'Larger vessels allowed access to distant fishing grounds. Navigational improvements improved safety and efficiency. Expeditions recorded observations about marine life. These discoveries expanded understanding of ocean ecosystems.',
      'Fishing became increasingly connected to international commerce. Coastal industries grew alongside maritime exploration. New opportunities attracted settlers and traders. Oceans became important economic frontiers.',
    ],
  },
  {
    id: 'industrial-fishing-era',
    period: '1800 CE',
    title: 'Industrial Fishing Era',
    shortDescription: 'Technology changes fishing',
    hero: require('../assets/marivo_article_hero_industrial_fishing_era.png'),
    paragraphs: [
      'Technological advances transformed fishing practices during the nineteenth century. Improved boats and equipment increased productivity. Fishing operations expanded beyond traditional local waters. Industrial development reshaped the industry.',
      'Steam-powered vessels allowed longer trips and larger catches. New preservation methods improved transportation and storage. Urban populations created greater demand for seafood products. Commercial fishing grew rapidly.',
      'The scale of fishing changed significantly during this period. Communities adapted to new economic opportunities. Fishing became more efficient than ever before. Technology continued influencing the industry for decades.',
    ],
  },
  {
    id: 'conservation-and-awareness',
    period: '1950 CE',
    title: 'Conservation and Awareness',
    shortDescription: 'Protecting aquatic resources',
    hero: require('../assets/marivo_article_hero_conservation_and_awareness.png'),
    paragraphs: [
      'Growing fishing activity raised concerns about sustainability. Scientists began studying fish populations more closely. Research highlighted the importance of balanced resource management. Conservation efforts gradually expanded worldwide.',
      'Governments introduced regulations to protect fisheries. Protected reserves helped preserve habitats and breeding grounds. Public awareness of environmental issues increased. Sustainable practices gained attention.',
      'Fishing communities played an important role in these efforts. Cooperation supported long-term resource protection. Conservation became part of modern fisheries management. These initiatives continue today.',
    ],
  },
  {
    id: 'fishing-in-the-modern-world',
    period: 'Present Day',
    title: 'Fishing in the Modern World',
    shortDescription: 'Tradition meets innovation',
    hero: require('../assets/marivo_article_hero_fishing_in_the_modern_world.png'),
    paragraphs: [
      'Modern fishing combines traditional knowledge with advanced technology. Communities continue practices developed over generations. At the same time, new tools improve navigation and monitoring. Innovation supports efficiency and safety.',
      "Fishing remains culturally significant in many regions. Festivals, stories, and local traditions celebrate connections to water. Recreational fishing has also become popular worldwide. People continue exploring aquatic environments in new ways.",
      "The history of fishing reflects humanity's relationship with nature. Ancient methods and modern techniques share common goals. Communities still depend on healthy waterways and ecosystems. Fishing remains an enduring part of human history.",
    ],
  },
];

export function getArticleById(articleId: string): Article | undefined {
  return ARTICLES.find(article => article.id === articleId);
}
