export interface PortfolioItem {
  id: string;
  title: string;
  category: 'editorial' | 'commercial' | 'catalog' | 'lifestyle';
  client?: string;
  year: string;
  image: string;
  featured?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Adventure Collection',
    category: 'catalog',
    client: 'Kids Outdoor Gear',
    year: '2024',
    image: '/images/IMGM6936.JPG',
    featured: true
  },
  {
    id: '2',
    title: 'Summer Sports Campaign',
    category: 'commercial',
    client: 'Active Kids Brand',
    year: '2024',
    image: '/images/IMGM6942.JPG',
    featured: true
  },
  {
    id: '3',
    title: 'Young Explorers',
    category: 'editorial',
    client: 'Kids Adventure Magazine',
    year: '2024',
    image: '/images/IMGM6950.JPG',
    featured: true
  },
  {
    id: '4',
    title: 'Back to School',
    category: 'catalog',
    client: 'Smart Kids Apparel',
    year: '2024',
    image: '/images/IMGM6956.JPG'
  },
  {
    id: '5',
    title: 'Active Play',
    category: 'commercial',
    client: 'Sports for Kids',
    year: '2024',
    image: '/images/IMGM6962.JPG'
  },
  {
    id: '6',
    title: 'Winter Adventures',
    category: 'lifestyle',
    client: 'Outdoor Kids Co.',
    year: '2024',
    image: '/images/IMGM6970.JPG'
  },
  {
    id: '7',
    title: 'Young Athlete',
    category: 'editorial',
    client: 'Junior Sports Magazine',
    year: '2024',
    image: '/images/IMGM6978.JPG'
  },
  {
    id: '8',
    title: 'Cool Kids Collection',
    category: 'commercial',
    client: 'Urban Kids Brand',
    year: '2024',
    image: '/images/IMGM6985.JPG'
  },
  {
    id: '9',
    title: 'Spring Fashion',
    category: 'catalog',
    client: 'Kids Fashion Co',
    year: '2024',
    image: '/images/IMGM6990.JPG'
  },
  {
    id: '10',
    title: 'Outdoor Adventures',
    category: 'lifestyle',
    client: 'Nature Kids',
    year: '2024',
    image: '/images/IMGM6995.JPG'
  },
  {
    id: '11',
    title: 'Studio Session',
    category: 'editorial',
    client: 'Kids Monthly',
    year: '2024',
    image: '/images/IMGM7002.JPG'
  },
  {
    id: '12',
    title: 'Casual Style',
    category: 'commercial',
    client: 'Trendy Kids',
    year: '2024',
    image: '/images/IMGM7008.JPG'
  },
  {
    id: '13',
    title: 'Day in the Park',
    category: 'lifestyle',
    client: 'Happy Kids Brand',
    year: '2024',
    image: '/images/IMGM7014.JPG'
  },
  {
    id: '14',
    title: 'Summer Vibes',
    category: 'catalog',
    client: 'Sun Kids Apparel',
    year: '2024',
    image: '/images/IMGM7020.JPG'
  },
  {
    id: '15',
    title: 'Portrait Series',
    category: 'editorial',
    client: 'Kids Art Magazine',
    year: '2024',
    image: '/images/IMGM7030.JPG'
  }
];

export const modelInfo = {
  name: 'Okwukwe',
  age: 6,
  tagline: 'Child Model & Young Talent',
  bio: 'Okwukwe is an energetic, adventurous 6-year-old with a natural confidence in front of the camera and an infectious smile. He loves sports, building things, and exploring outdoors. Okwukwe brings enthusiasm and authenticity to every project, making him a joy to work with on set.',
  stats: {
    age: '6 years old',
    height: '3\'11"',
    hair: 'Brown',
    eyes: 'Brown',
    clothing: '6-7 years',
    shoes: '12 Child'
  },
  experience: [
    'Kids Outdoor Gear Campaign',
    'Active Kids Brand Summer Collection',
    'Kids Adventure Magazine Feature',
    'Sports for Kids Commercial',
    'Smart Kids Back to School',
    'Various catalog and lifestyle shoots'
  ],
  interests: [
    'Playing soccer and basketball',
    'Building with LEGO',
    'Outdoor adventures and exploring',
    'Reading adventure books',
    'Swimming and water sports'
  ],
  representation: {
    agency: 'No one for now',
    location: 'United Kingdom'
  }
};
