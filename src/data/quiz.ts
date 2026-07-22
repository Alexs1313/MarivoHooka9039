export type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export type QuizTopic = {
  articleId: string;
  questions: QuizQuestion[];
};

export const QUIZ_TOPICS: QuizTopic[] = [
  {
    articleId: 'river-beginnings',
    questions: [
      {
        question: 'Near what natural feature did early fishing civilizations develop?',
        options: ['Mountains', 'Deserts', 'Rivers', 'Forests'],
        correctAnswer: 'Rivers',
      },
      {
        question: 'What were early fishing nets commonly made from?',
        options: ['Stone', 'Plant fibers', 'Iron', 'Clay'],
        correctAnswer: 'Plant fibers',
      },
      {
        question: 'Which tool was used alongside nets and traps?',
        options: ['Wooden spears', 'Cannons', 'Compasses', 'Anchors'],
        correctAnswer: 'Wooden spears',
      },
      {
        question: 'Fishing helped early societies mainly through:',
        options: ['Space travel', 'Trade and food supply', 'Mining', 'Road building'],
        correctAnswer: 'Trade and food supply',
      },
    ],
  },
  {
    articleId: 'fishermen-of-ancient-egypt',
    questions: [
      {
        question: 'Which river was central to Egyptian fishing?',
        options: ['Amazon', 'Danube', 'Nile', 'Yangtze'],
        correctAnswer: 'Nile',
      },
      {
        question: 'Egyptian fishermen often used:',
        options: ['Baskets', 'Telescopes', 'Steam engines', 'Steel cables'],
        correctAnswer: 'Baskets',
      },
      {
        question: 'Fishing scenes appear in:',
        options: ['Skyscrapers', 'Temples and tombs', 'Factories', 'Airports'],
        correctAnswer: 'Temples and tombs',
      },
      {
        question: 'The Nile helped support:',
        options: ['Deserts only', 'Trade routes', 'Volcanoes', 'Railways'],
        correctAnswer: 'Trade routes',
      },
    ],
  },
  {
    articleId: 'coastal-hunters-of-greece',
    questions: [
      {
        question: 'Which sea supported Greek fishing communities?',
        options: ['Baltic Sea', 'Mediterranean Sea', 'Arctic Ocean', 'Black Sea'],
        correctAnswer: 'Mediterranean Sea',
      },
      {
        question: 'Greek hooks were often made from:',
        options: ['Bronze', 'Plastic', 'Gold', 'Glass'],
        correctAnswer: 'Bronze',
      },
      {
        question: 'Fish became common in:',
        options: ['Local cuisine', 'Mining camps', 'Libraries', 'Theaters'],
        correctAnswer: 'Local cuisine',
      },
      {
        question: 'Greek fishing culture was closely connected to:',
        options: ['Mountain climbing', 'Maritime life', 'Desert travel', 'Forestry'],
        correctAnswer: 'Maritime life',
      },
    ],
  },
  {
    articleId: 'roman-fishing-networks',
    questions: [
      {
        question: 'Fishing expanded greatly during which empire?',
        options: ['Ottoman Empire', 'Roman Empire', 'Mongol Empire', 'Persian Empire'],
        correctAnswer: 'Roman Empire',
      },
      {
        question: 'What helped fish travel long distances?',
        options: ['Salt preservation', 'Ice roads', 'Hot air balloons', 'Railways'],
        correctAnswer: 'Salt preservation',
      },
      {
        question: 'Roman seafood was sold through:',
        options: ['Markets', 'Museums', 'Castles', 'Schools'],
        correctAnswer: 'Markets',
      },
      {
        question: 'Fishing supported:',
        options: ['Food distribution', 'Space programs', 'Oil drilling', 'Air travel'],
        correctAnswer: 'Food distribution',
      },
    ],
  },
  {
    articleId: 'northern-waters-and-vikings',
    questions: [
      {
        question: 'Which group depended heavily on northern waters?',
        options: ['Romans', 'Vikings', 'Greeks', 'Egyptians'],
        correctAnswer: 'Vikings',
      },
      {
        question: 'Which fish were common in northern waters?',
        options: ['Cod and herring', 'Tuna and marlin', 'Piranha and arapaima', 'Carp and koi'],
        correctAnswer: 'Cod and herring',
      },
      {
        question: 'Viking fishermen relied on knowledge of:',
        options: ['Weather and currents', 'Computers', 'Engines', 'Satellites'],
        correctAnswer: 'Weather and currents',
      },
      {
        question: 'Fish were often preserved by:',
        options: ['Drying', 'Freezing', 'Canning', 'Smoking with machines'],
        correctAnswer: 'Drying',
      },
    ],
  },
  {
    articleId: 'medieval-fishing-villages',
    questions: [
      {
        question: 'During which period did fishing villages expand across Europe?',
        options: ['Middle Ages', 'Stone Age', 'Bronze Age', 'Renaissance'],
        correctAnswer: 'Middle Ages',
      },
      {
        question: 'Coastal settlements relied on fishing for:',
        options: ['Food and commerce', 'Air travel', 'Metal production', 'Architecture'],
        correctAnswer: 'Food and commerce',
      },
      {
        question: 'Fishermen organized work according to:',
        options: ['Seasons and weather', 'Movies', 'Books', 'Politics'],
        correctAnswer: 'Seasons and weather',
      },
      {
        question: 'Skills were often passed through:',
        options: ['Families', 'Universities', 'Governments', 'Banks'],
        correctAnswer: 'Families',
      },
    ],
  },
  {
    articleId: 'age-of-exploration-seas',
    questions: [
      {
        question: 'Exploration introduced sailors to:',
        options: ['New waters and species', 'Automobiles', 'Railroads', 'Factories'],
        correctAnswer: 'New waters and species',
      },
      {
        question: 'Larger vessels allowed access to:',
        options: ['Distant fishing grounds', 'Space stations', 'Deserts', 'Mountains'],
        correctAnswer: 'Distant fishing grounds',
      },
      {
        question: 'Expeditions recorded observations about:',
        options: ['Marine life', 'Volcanoes only', 'Dinosaurs', 'Airplanes'],
        correctAnswer: 'Marine life',
      },
      {
        question: 'Oceans became important:',
        options: ['Economic frontiers', 'Parking lots', 'Military bases only', 'Sports venues'],
        correctAnswer: 'Economic frontiers',
      },
    ],
  },
  {
    articleId: 'industrial-fishing-era',
    questions: [
      {
        question: 'Industrial fishing expanded during which century?',
        options: ['Nineteenth century', 'Fifteenth century', 'First century', 'Twenty-first century'],
        correctAnswer: 'Nineteenth century',
      },
      {
        question: 'What powered many fishing vessels?',
        options: ['Steam', 'Solar panels', 'Wind turbines', 'Electric motors'],
        correctAnswer: 'Steam',
      },
      {
        question: 'Improved preservation methods helped:',
        options: ['Transportation and storage', 'Farming', 'Construction', 'Navigation'],
        correctAnswer: 'Transportation and storage',
      },
      {
        question: 'Industrial development made fishing:',
        options: ['More efficient', 'Less organized', 'Impossible', 'Seasonal only'],
        correctAnswer: 'More efficient',
      },
    ],
  },
  {
    articleId: 'conservation-and-awareness',
    questions: [
      {
        question: 'What concern increased during the twentieth century?',
        options: ['Sustainability', 'Castle building', 'Horse breeding', 'Map making'],
        correctAnswer: 'Sustainability',
      },
      {
        question: 'Scientists began studying:',
        options: ['Fish populations', 'Planets', 'Mountains', 'Languages'],
        correctAnswer: 'Fish populations',
      },
      {
        question: 'Governments introduced:',
        options: ['Fishing regulations', 'Space stations', 'New continents', 'Pyramids'],
        correctAnswer: 'Fishing regulations',
      },
      {
        question: 'Conservation became part of:',
        options: ['Fisheries management', 'Road construction', 'Aviation', 'Mining'],
        correctAnswer: 'Fisheries management',
      },
    ],
  },
  {
    articleId: 'fishing-in-the-modern-world',
    questions: [
      {
        question: 'Modern fishing combines tradition with:',
        options: ['Technology', 'Magic', 'Alchemy', 'Mythology'],
        correctAnswer: 'Technology',
      },
      {
        question: 'New tools improve:',
        options: ['Navigation and monitoring', 'Painting', 'Cooking', 'Architecture'],
        correctAnswer: 'Navigation and monitoring',
      },
      {
        question: 'Fishing remains culturally significant through:',
        options: ['Festivals and traditions', 'Space exploration', 'Gladiator games', 'Castle wars'],
        correctAnswer: 'Festivals and traditions',
      },
      {
        question: 'Healthy waterways remain important for:',
        options: ['Communities and ecosystems', 'Skyscrapers', 'Airports', 'Factories'],
        correctAnswer: 'Communities and ecosystems',
      },
    ],
  },
];

export type QuizSessionQuestion = QuizQuestion & {
  articleId: string;
};

export function buildQuizSession(): QuizSessionQuestion[] {
  return QUIZ_TOPICS.map(topic => {
    const question =
      topic.questions[Math.floor(Math.random() * topic.questions.length)];
    return {...question, articleId: topic.articleId};
  });
}
