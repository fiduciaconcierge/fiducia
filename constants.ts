import { NavItem, ServiceItem, NewsItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Membership',
    path: '/membership',
    subItems: [
      { label: 'Premium', path: '/membership/premium' },
      { label: 'Imperium', path: '/membership/elite' },
    ],
  },
  { label: 'About Us', path: '/about' },
  { label: 'Newsletter', path: '/newsletter' },
];

export const PREMIUM_SERVICES: ServiceItem[] = [
  {
    title: 'Global Access',
    description: 'Priority reservations at Michelin-starred dining and sold-out cultural events worldwide.\nExclusive invitations to private gallery openings and VIP exhibitions.\nComplimentary upgrades at partner hotels and resorts globally.',
    image: '/fiducia/images/p8 (2).jpg',
  },
  {
    title: 'Travel Logistics',
    description: 'Seamless private aviation chartering, yacht brokerage, and secure ground transport.\n24/7 personal travel concierge with real-time itinerary adjustments.\nPriority customs clearance and baggage handling at international terminals.',
    image: '/fiducia/images/p9.jpg',
  },
  {
    title: 'Art Advisory',
    description: 'Expert guidance on acquisition and curation from world-renowned specialists.\nPrivate viewings at major auction houses and artist studios.\nAuthentication and provenance verification for high-value acquisitions.',
    image: '/fiducia/images/p10.jpg',
  },
];

export const ELITE_SERVICES: ServiceItem[] = [
  {
    title: 'Off-Market Real Estate',
    description: 'Access to properties that never list publicly. From private islands to historical estates.',
    image: '/fiducia/images/p16.jpg',
  },
  {
    title: 'Legacy Management',
    description: 'Comprehensive succession planning, philanthropy structure, and next-generation education.',
    image: '/fiducia/images/p17.jpg',
  },
  {
    title: 'Diplomatic Services',
    description: 'Complex cross-border bureaucratic assistance and high-level security coordination.',
    image: '/fiducia/images/p18.jpg',
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    category: 'Horology',
    title: 'The resurgence of pre-1950s Patek Philippe complications.',
    image: 'https://picsum.photos/seed/patek-philippe-vintage-complications/600/800.jpg',
  },
  {
    category: 'Horology',
    title: 'Audemars Piguet Royal Oak: Investment performance analysis 2023.',
    image: 'https://picsum.photos/seed/audemars-piguet-royal-oak-investment/600/800.jpg',
  },
  {
    category: 'Horology',
    title: 'Richard Mille: The physics of ultra-light timekeeping.',
    image: 'https://picsum.photos/seed/richard-mille-ultra-light-watchmaking/600/800.jpg',
  },
  {
    category: 'Horology',
    title: 'Vintage Rolex Submariners: Market trends and collector insights.',
    image: 'https://picsum.photos/seed/vintage-rolex-submariner-collector/600/800.jpg',
  },
  {
    category: 'Estates',
    title: 'Why the French Riviera remains the sovereign of stability.',
    image: 'https://picsum.photos/seed/french-riviera-luxury-estate/600/800.jpg',
  },
  {
    category: 'Estates',
    title: 'Monaco penthouses: Record-breaking transactions in 2023.',
    image: 'https://picsum.photos/seed/monaco-penthouse-luxury-real-estate/600/800.jpg',
  },
  {
    category: 'Estates',
    title: 'London Mayfair: Prime property market resilience analysis.',
    image: 'https://picsum.photos/seed/london-mayfair-prime-property/600/800.jpg',
  },
  {
    category: 'Estates',
    title: 'Dubai Marina: Ultra-luxury waterfront developments.',
    image: 'https://picsum.photos/seed/dubai-marina-waterfront-luxury/600/800.jpg',
  },
  {
    category: 'Aviation',
    title: 'Bombardier Global 8000: Redefining transcontinental private travel.',
    image: 'https://picsum.photos/seed/bombardier-global-8000-private-jet/600/800.jpg',
  },
  {
    category: 'Aviation',
    title: 'Gulfstream G700: The new standard in ultra-long-range business jets.',
    image: 'https://picsum.photos/seed/gulfstream-g700-business-jet/600/800.jpg',
  },
  {
    category: 'Aviation',
    title: 'Private jet fractional ownership: Investment vs. charter analysis.',
    image: 'https://picsum.photos/seed/private-jet-fractional-ownership/600/800.jpg',
  },
  {
    category: 'Aviation',
    title: 'Sustainable aviation: The future of eco-conscious private travel.',
    image: 'https://picsum.photos/seed/sustainable-private-aviation-future/600/800.jpg',
  },
  {
    category: 'Art',
    title: 'Warhol market surge: Blue-chip investments in contemporary art.',
    image: 'https://picsum.photos/seed/warhol-contemporary-art-investment/600/800.jpg',
  },
  {
    category: 'Art',
    title: 'Banksy: Street art investment performance and authentication.',
    image: 'https://picsum.photos/seed/banksy-street-art-investment/600/800.jpg',
  },
  {
    category: 'Art',
    title: 'Digital art NFTs: Market correction and long-term value.',
    image: 'https://picsum.photos/seed/digital-art-nft-market-value/600/800.jpg',
  },
  {
    category: 'Art',
    title: 'Basel Art Fair 2023: Market trends and emerging artists.',
    image: 'https://picsum.photos/seed/basel-art-fair-2023-trends/600/800.jpg',
  },
  {
    category: 'Yachting',
    title: 'Lürssen superyachts: German engineering meets Mediterranean luxury.',
    image: 'https://picsum.photos/seed/lurssen-superyacht-mediterranean/600/800.jpg',
  },
  {
    category: 'Yachting',
    title: 'Feadship custom builds: Dutch craftsmanship in modern yachting.',
    image: 'https://picsum.photos/seed/feadship-custom-yacht-craftsmanship/600/800.jpg',
  },
  {
    category: 'Yachting',
    title: 'Caribbean yacht charter: High season demand and pricing trends.',
    image: 'https://picsum.photos/seed/caribbean-yacht-charter-trends/600/800.jpg',
  },
  {
    category: 'Yachting',
    title: 'Green yachting: Sustainable innovations in luxury marine travel.',
    image: 'https://picsum.photos/seed/sustainable-luxury-yachting-innovation/600/800.jpg',
  },
  {
    category: 'Finance',
    title: 'Swiss private banking: Navigating the new wealth preservation landscape.',
    image: 'https://picsum.photos/seed/swiss-private-banking-wealth/600/800.jpg',
  },
  {
    category: 'Finance',
    title: 'Singapore wealth management: Asian HNWI investment strategies.',
    image: 'https://picsum.photos/seed/singapore-wealth-management-strategies/600/800.jpg',
  },
  {
    category: 'Finance',
    title: 'Cryptocurrency wealth: Institutional adoption and portfolio integration.',
    image: 'https://picsum.photos/seed/cryptocurrency-institutional-adoption/600/800.jpg',
  },
  {
    category: 'Finance',
    title: 'Family office succession: Next-gen wealth transfer strategies.',
    image: 'https://picsum.photos/seed/family-office-succession-planning/600/800.jpg',
  },
  {
    category: 'Wine',
    title: 'Bordeaux 2020 vintage: Investment-grade wine portfolios diversification.',
    image: 'https://picsum.photos/seed/bordeaux-2020-vintage-wine/600/800.jpg',
  },
  {
    category: 'Wine',
    title: 'Burgundy Grand Cru: Rare vintages and market performance.',
    image: 'https://picsum.photos/seed/burgundy-grand-cru-rare-vintages/600/800.jpg',
  },
  {
    category: 'Wine',
    title: 'Champagne investment: Prestige cuvées as alternative assets.',
    image: 'https://picsum.photos/seed/champagne-prestige-cuvee-investment/600/800.jpg',
  },
  {
    category: 'Wine',
    title: 'Wine storage solutions: Professional cellar management for collectors.',
    image: 'https://picsum.photos/seed/professional-wine-cellar-storage/600/800.jpg',
  },
  {
    category: 'Technology',
    title: 'Quantum computing: The next frontier for ultra-high-net-worth portfolios.',
    image: 'https://picsum.photos/seed/quantum-computing-investment/600/800.jpg',
  },
  {
    category: 'Technology',
    title: 'AI wealth management: Robo-advisors for ultra-high-net-worth individuals.',
    image: 'https://picsum.photos/seed/ai-wealth-management-robo-advisors/600/800.jpg',
  },
  {
    category: 'Technology',
    title: 'Cybersecurity for UHNWIs: Protecting digital assets in the quantum age.',
    image: 'https://picsum.photos/seed/cybersecurity-uhnw-digital-assets/600/800.jpg',
  },
  {
    category: 'Technology',
    title: 'Space investments: Private space exploration and satellite technology.',
    image: 'https://picsum.photos/seed/private-space-exploration-investment/600/800.jpg',
  },
  {
    category: 'Real Estate',
    title: 'Monaco penthouses: Record-breaking transactions in 2023.',
    image: 'https://picsum.photos/seed/monaco-penthouse-luxury-real-estate/600/800.jpg',
  },
  {
    category: 'Real Estate',
    title: 'New York trophy properties: Manhattan luxury market analysis.',
    image: 'https://picsum.photos/seed/manhattan-luxury-trophy-properties/600/800.jpg',
  },
  {
    category: 'Real Estate',
    title: 'Private islands: The ultimate status symbol in ultra-luxury real estate.',
    image: 'https://picsum.photos/seed/private-island-luxury-real-estate/600/800.jpg',
  },
  {
    category: 'Real Estate',
    title: 'Tokyo luxury housing: Market trends and foreign investment patterns.',
    image: 'https://picsum.photos/seed/tokyo-luxury-housing-investment/600/800.jpg',
  },
  {
    category: 'Fashion',
    title: 'Haute couture exclusivity: By-invitation-only ateliers of Paris.',
    image: 'https://picsum.photos/seed/paris-haute-couture-atelier/600/800.jpg',
  },
  {
    category: 'Fashion',
    title: 'Hermès Birkin investment: Market analysis and authentication guide.',
    image: 'https://picsum.photos/seed/hermes-birkin-investment-market/600/800.jpg',
  },
  {
    category: 'Fashion',
    title: 'Milan Fashion Week: Emerging luxury brands and investment opportunities.',
    image: 'https://picsum.photos/seed/milan-fashion-week-luxury-brands/600/800.jpg',
  },
  {
    category: 'Fashion',
    title: 'Sustainable luxury: Eco-conscious fashion in the ultra-premium segment.',
    image: 'https://picsum.photos/seed/sustainable-luxury-fashion-premium/600/800.jpg',
  },
  {
    category: 'Investment',
    title: 'Rare timepieces: Auction records shattered at Geneva watch sales.',
    image: 'https://picsum.photos/seed/geneva-watch-auction-rare-timepieces/600/800.jpg',
  },
  {
    category: 'Investment',
    title: 'Classic car investment: Ferrari and Porsche market performance.',
    image: 'https://picsum.photos/seed/ferrari-porsche-classic-car-investment/600/800.jpg',
  },
  {
    category: 'Investment',
    title: 'Precious metals: Gold and platinum as wealth preservation tools.',
    image: 'https://picsum.photos/seed/gold-platinum-wealth-preservation/600/800.jpg',
  },
  {
    category: 'Investment',
    title: 'Private equity: Exclusive opportunities for ultra-high-net-worth investors.',
    image: 'https://picsum.photos/seed/private-equity-uhnw-investors/600/800.jpg',
  },
  {
    category: 'Lifestyle',
    title: 'Private islands: The ultimate status symbol in ultra-luxury real estate.',
    image: 'https://picsum.photos/seed/private-island-luxury-real-estate/600/800.jpg',
  },
  {
    category: 'Lifestyle',
    title: 'Exclusive clubs: Membership trends and networking opportunities.',
    image: 'https://picsum.photos/seed/exclusive-private-clubs-membership/600/800.jpg',
  },
  {
    category: 'Lifestyle',
    title: 'Personal security: Executive protection for high-net-worth families.',
    image: 'https://picsum.photos/seed/executive-protection-security-families/600/800.jpg',
  },
  {
    category: 'Lifestyle',
    title: 'Concierge services: The evolution of luxury lifestyle management.',
    image: 'https://picsum.photos/seed/luxury-concierge-lifestyle-management/600/800.jpg',
  },
  {
    category: 'Business',
    title: 'Family offices: Scaling operations for multi-generational wealth preservation.',
    image: 'https://picsum.photos/seed/family-office-wealth-preservation/600/800.jpg',
  },
  {
    category: 'Business',
    title: 'Private equity: Venture capital opportunities for family offices.',
    image: 'https://picsum.photos/seed/private-equity-venture-capital-family-office/600/800.jpg',
  },
  {
    category: 'Business',
    title: 'Luxury brand investments: Portfolio diversification in premium markets.',
    image: 'https://picsum.photos/seed/luxury-brand-investment-portfolio/600/800.jpg',
  },
  {
    category: 'Business',
    title: 'Succession planning: Leadership transition in family enterprises.',
    image: 'https://picsum.photos/seed/family-enterprise-succession-planning/600/800.jpg',
  },
  {
    category: 'Travel',
    title: 'Antarctica expeditions: The new frontier in exclusive tourism.',
    image: 'https://picsum.photos/seed/antarctica-exclusive-tourism-expedition/600/800.jpg',
  },
  {
    category: 'Travel',
    title: 'Space tourism: Commercial space flights and orbital experiences.',
    image: 'https://picsum.photos/seed/commercial-space-tourism-orbital/600/800.jpg',
  },
  {
    category: 'Travel',
    title: 'Underwater hotels: Luxury accommodation beneath the waves.',
    image: 'https://picsum.photos/seed/underwater-luxury-hotels-accommodation/600/800.jpg',
  },
  {
    category: 'Travel',
    title: 'Private train journeys: Luxury rail travel experiences worldwide.',
    image: 'https://picsum.photos/seed/luxury-private-train-journeys-rail/600/800.jpg',
  },
  {
    category: 'Security',
    title: 'Cybersecurity for UHNWIs: Protecting digital assets in the quantum age.',
    image: 'https://picsum.photos/seed/cybersecurity-uhnw-digital-assets/600/800.jpg',
  },
  {
    category: 'Security',
    title: 'Estate security: Advanced protection systems for luxury properties.',
    image: 'https://picsum.photos/seed/estate-security-luxury-protection/600/800.jpg',
  },
  {
    category: 'Security',
    title: 'Personal protection: Executive security services for global families.',
    image: 'https://picsum.photos/seed/executive-security-global-families/600/800.jpg',
  },
  {
    category: 'Security',
    title: 'Digital privacy: Data protection strategies for high-profile individuals.',
    image: 'https://picsum.photos/seed/digital-privacy-protection-strategies/600/800.jpg',
  },
  {
    category: 'Education',
    title: 'Ivy League legacy admissions: The evolving landscape of elite education.',
    image: 'https://picsum.photos/seed/ivy-league-elite-education-legacy/600/800.jpg',
  },
  {
    category: 'Education',
    title: 'International schools: Premier education for global families.',
    image: 'https://picsum.photos/seed/international-schools-global-families/600/800.jpg',
  },
  {
    category: 'Education',
    title: 'Executive education: Advanced programs for business leaders.',
    image: 'https://picsum.photos/seed/executive-education-business-leaders/600/800.jpg',
  },
  {
    category: 'Education',
    title: 'Language acquisition: Multilingual education for next-generation leaders.',
    image: 'https://picsum.photos/seed/multilingual-education-next-generation/600/800.jpg',
  },
  {
    category: 'Health',
    title: 'Longevity clinics: Biohacking and personalized medicine for the elite.',
    image: 'https://picsum.photos/seed/longevity-clinic-biohacking-medicine/600/800.jpg',
  },
  {
    category: 'Health',
    title: 'Executive health programs: Comprehensive wellness for busy professionals.',
    image: 'https://picsum.photos/seed/executive-health-wellness-programs/600/800.jpg',
  },
  {
    category: 'Health',
    title: 'Mental health: Luxury wellness retreats and stress management.',
    image: 'https://picsum.photos/seed/luxury-wellness-retreats-mental-health/600/800.jpg',
  },
  {
    category: 'Health',
    title: 'Genetic testing: Personalized healthcare strategies through DNA analysis.',
    image: 'https://picsum.photos/seed/genetic-testing-personalized-healthcare/600/800.jpg',
  },
  {
    category: 'Automotive',
    title: 'Commissioning bespoke chassis with Italian heritage houses.',
    image: 'https://picsum.photos/seed/bespoke-italian-automotive-chassis/600/800.jpg',
  },
  {
    category: 'Automotive',
    title: 'Electric hypercars: The future of ultra-performance vehicles.',
    image: 'https://picsum.photos/seed/electric-hypercars-future-performance/600/800.jpg',
  },
  {
    category: 'Automotive',
    title: 'Vintage car collecting: Investment-grade automobiles and restoration.',
    image: 'https://picsum.photos/seed/vintage-car-collecting-restoration-investment/600/800.jpg',
  },
  {
    category: 'Automotive',
    title: 'Private car museums: Creating world-class automotive collections.',
    image: 'https://picsum.photos/seed/private-car-museums-automotive-collections/600/800.jpg',
  },
  {
    category: 'Philanthropy',
    title: 'Silent giving: The new era of anonymous patronage.',
    image: 'https://picsum.photos/seed/anonymous-philanthropy-patronage/600/800.jpg',
  },
  {
    category: 'Philanthropy',
    title: 'Impact investing: Measuring social returns on charitable investments.',
    image: 'https://picsum.photos/seed/impact-investing-social-returns-charity/600/800.jpg',
  },
  {
    category: 'Philanthropy',
    title: 'Family foundations: Structured giving for multi-generational impact.',
    image: 'https://picsum.photos/seed/family-foundations-multi-generational-giving/600/800.jpg',
  },
  {
    category: 'Philanthropy',
    title: 'Environmental philanthropy: Conservation funding and climate initiatives.',
    image: 'https://picsum.photos/seed/environmental-philanthropy-conservation-funding/600/800.jpg',
  }
];