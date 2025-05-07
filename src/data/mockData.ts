import { Article, Author, Category } from '../types';

const authors: Author[] = [
  {
    id: 1,
    name: 'Emma Wilson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Emma is a technology journalist with a focus on drones and aerial photography.'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Marcus is a drone pilot and tech reviewer with over 10 years of industry experience.'
  },
  {
    id: 3,
    name: 'Sophia Lee',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Sophia is an aviation expert and consultant for major drone manufacturers.'
  }
];

export const categories: Category[] = [
  { id: 1, name: 'Latest News', slug: 'latest-news' },
  { id: 2, name: 'Aviation', slug: 'aviation' },
  { id: 3, name: 'Robotics', slug: 'robotics' },
  { id: 4, name: 'Reviews', slug: 'reviews' },
  { id: 5, name: 'Technology', slug: 'technology' },
];

const mockArticles: Article[] = [
  {
    id: 1,
    title: 'New Regulations for Commercial Drone Pilots Take Effect Next Month',
    excerpt: 'The Federal Aviation Administration has announced new regulations affecting commercial drone operations.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat sapien vitae justo cursus, eu pulvinar felis faucibus.',
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Latest News',
    author: authors[0],
    date: '2025-01-15',
    tags: ['regulations', 'commercial', 'FAA'],
    featured: true,
    trending: true,
    breaking: true
  },
  {
    id: 2,
    title: 'The Future of Drone Delivery: How Companies Are Preparing',
    excerpt: 'Major retailers and logistics companies are investing heavily in drone delivery infrastructure.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat sapien vitae justo cursus, eu pulvinar felis faucibus.',
    image: 'https://images.pexels.com/photos/1076240/pexels-photo-1076240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Technology',
    author: authors[1],
    date: '2025-01-14',
    tags: ['delivery', 'technology', 'logistics'],
    featured: true,
    trending: true,
    breaking: false
  },
  {
    id: 3,
    title: 'Review: The DJI Phantom 5 Pro Takes Aerial Photography to New Heights',
    excerpt: 'Our comprehensive review of the latest flagship drone from DJI with its revolutionary camera system.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat sapien vitae justo cursus, eu pulvinar felis faucibus.',
    image: 'https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Reviews',
    author: authors[2],
    date: '2025-01-13',
    tags: ['DJI', 'photography', 'review'],
    featured: true,
    trending: true,
    breaking: false
  },
  {
    id: 4,
    title: 'Autonomous Drones Assist in Major Search and Rescue Mission',
    excerpt: 'How a fleet of AI-powered drones helped locate missing hikers in remote wilderness.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat sapien vitae justo cursus, eu pulvinar felis faucibus.',
    image: 'https://images.pexels.com/photos/2100075/pexels-photo-2100075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Latest News',
    author: authors[0],
    date: '2025-01-12',
    tags: ['rescue', 'autonomous', 'AI'],
    featured: true,
    trending: false,
    breaking: true
  },
  {
    id: 5,
    title: 'Racing Drones: The Rising Sport Taking the World by Storm',
    excerpt: 'Inside the high-octane world of professional drone racing and the technology behind it.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat sapien vitae justo cursus, eu pulvinar felis faucibus.',
    image: 'https://images.pexels.com/photos/9511546/pexels-photo-9511546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Aviation',
    author: authors[1],
    date: '2025-01-11',
    tags: ['racing', 'sports', 'competition'],
    featured: false,
    trending: true,
    breaking: false
  },
  {
    id: 6,
    title: 'Innovative Drone Solutions for Sustainable Agriculture',
    excerpt: 'How farmers are using drone technology to reduce water usage and increase crop yields.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat sapien vitae justo cursus, eu pulvinar felis faucibus.',
    image: 'https://images.pexels.com/photos/4041576/pexels-photo-4041576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Technology',
    author: authors[2],
    date: '2025-01-10',
    tags: ['agriculture', 'sustainability', 'innovation'],
    featured: false,
    trending: true,
    breaking: false
  },
  {
    id: 7,
    title: 'Military Drones: Ethical Considerations and Global Regulation',
    excerpt: 'Experts discuss the ethical implications of autonomous military drones and current regulation efforts.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat sapien vitae justo cursus, eu pulvinar felis faucibus.',
    image: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-reach-46148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Aviation',
    author: authors[0],
    date: '2025-01-09',
    tags: ['military', 'ethics', 'regulation'],
    featured: false,
    trending: false,
    breaking: true
  },
  {
    id: 8,
    title: 'How To Choose Your First Drone: A Beginner\'s Guide',
    excerpt: 'Everything you need to know before purchasing your first drone, from features to flight regulations.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat sapien vitae justo cursus, eu pulvinar felis faucibus.',
    image: 'https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Reviews',
    author: authors[1],
    date: '2025-01-08',
    tags: ['beginners', 'buying guide', 'recommendations'],
    featured: false,
    trending: true,
    breaking: false
  },
  {
    id: 9,
    title: 'Drone Light Shows Replacing Traditional Fireworks',
    excerpt: 'Cities around the world are switching to drone light shows as a safer, more environmentally friendly alternative.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat sapien vitae justo cursus, eu pulvinar felis faucibus.',
    image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Latest News',
    author: authors[2],
    date: '2025-01-07',
    tags: ['entertainment', 'environment', 'innovation'],
    featured: false,
    trending: false,
    breaking: true
  },
  {
    id: 10,
    title: 'Underwater Drones: Exploring the Ocean\'s Depths',
    excerpt: 'New advancements in underwater drone technology are revolutionizing marine research and exploration.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat sapien vitae justo cursus, eu pulvinar felis faucibus.',
    image: 'https://images.pexels.com/photos/3894443/pexels-photo-3894443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Technology',
    author: authors[0],
    date: '2025-01-06',
    tags: ['underwater', 'research', 'exploration'],
    featured: false,
    trending: false,
    breaking: false
  },
  {
    id: 11,
    title: 'Robotics Firms Develop Next Generation of Industrial Drones',
    excerpt: 'Leading robotics companies unveil new industrial drones capable of complex manipulation tasks.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat sapien vitae justo cursus, eu pulvinar felis faucibus.',
    image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Robotics',
    author: authors[1],
    date: '2025-01-05',
    tags: ['industrial', 'robotics', 'manufacturing'],
    featured: false,
    trending: false,
    breaking: false
  },
  {
    id: 12,
    title: 'The Art of Drone Photography: Tips From Professionals',
    excerpt: 'Professional aerial photographers share their secrets for capturing stunning drone imagery.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat sapien vitae justo cursus, eu pulvinar felis faucibus.',
    image: 'https://images.pexels.com/photos/1269805/pexels-photo-1269805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Reviews',
    author: authors[2],
    date: '2025-01-04',
    tags: ['photography', 'tips', 'creative'],
    featured: false,
    trending: false,
    breaking: false
  }
];

export const getMockArticles = (): Article[] => {
  return mockArticles;
};