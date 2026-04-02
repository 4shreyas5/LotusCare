// Featured providers for homepage
export const featuredProviders = [
  {
    id: 1,
    name: 'Priya S.',
    avatar: 'PS',
    title: 'Compassionate in-home nursing for post-surgery recovery',
    category: 'Healthcare',
    badge: 'Top Rated',
    badgeColor: 'bg-gold/20 text-gold',
    rating: 5,
    reviews: 312,
    price: '€28',
    priceUnit: '/hr',
    emoji: '🧑‍⚕️',
    bgColor: 'bg-sage-pale',
    location: 'Mumbai',
  },
  {
    id: 2,
    name: 'Anna V.',
    avatar: 'AV',
    title: "Specialized dementia and Alzheimer's daily care support",
    category: 'Medical',
    badge: 'Medical',
    badgeColor: 'bg-blue-100 text-blue-700',
    rating: 5,
    reviews: 204,
    price: '€32',
    priceUnit: '/hr',
    emoji: '👩‍🦳',
    bgColor: 'bg-blush-light',
    location: 'Amsterdam',
  },
  {
    id: 3,
    name: 'Sophie M.',
    avatar: 'SM',
    title: 'Full-home cleaning, organizing, and grocery assistance',
    category: 'Home',
    badge: 'New',
    badgeColor: 'bg-sage/10 text-sage',
    rating: 4,
    reviews: 88,
    price: '€22',
    priceUnit: '/hr',
    emoji: '🏠',
    bgColor: 'bg-blue-50',
    location: 'Rotterdam',
  },
  {
    id: 4,
    name: 'Arjun P.',
    avatar: 'AP',
    title: 'Anxiety, grief, and life-transition counseling sessions',
    category: 'Counselor',
    badge: 'Counselor',
    badgeColor: 'bg-purple-100 text-purple-700',
    rating: 5,
    reviews: 176,
    price: '€55',
    priceUnit: '/session',
    emoji: '💆',
    bgColor: 'bg-purple-50',
    location: 'Delhi',
  },
];

// Categories data
export const categories = [
  {
    id: 1,
    title: 'Healthcare Support',
    description: 'Professional medical care at home — from nursing to rehabilitation.',
    icon: '🏥',
    tags: ['Elderly care', 'Post-surgery', 'Dementia care', 'ICU support'],
    providers: '240+',
    link: '/category/healthcare',
    gradient: 'category-healthcare',
  },
  {
    id: 2,
    title: 'Home Support',
    description: 'Trusted help for daily household tasks and family needs.',
    icon: '🏡',
    tags: ['Cleaning', 'Cooking', 'Grocery runs', 'Childminding'],
    providers: '185+',
    link: '/category/home-support',
    gradient: 'category-home',
  },
  {
    id: 3,
    title: 'Personal Support',
    description: 'Emotional wellness, companionship, and guidance when you need it.',
    icon: '💬',
    tags: ['Counseling', 'Life coaching', 'Companionship', 'Grief support'],
    providers: '120+',
    link: '/category/personal-support',
    gradient: 'category-personal',
  },
];

// Quick filter tags
export const quickFilters = [
  'Elderly Care',
  'Post-Surgery Nurse',
  'House Cleaning',
  'Counseling',
  'Child Care',
  'Companion',
];

// How it works steps
export const howItWorks = [
  {
    step: 1,
    title: 'Describe your needs',
    desc: "Tell us about the care you're looking for and any specific requirements.",
  },
  {
    step: 2,
    title: 'Browse matched providers',
    desc: 'Review verified profiles, ratings, and reviews of caregivers who fit your needs.',
  },
  {
    step: 3,
    title: 'Connect & confirm',
    desc: 'Message providers, discuss details, and book with confidence.',
  },
  {
    step: 4,
    title: 'Ongoing support',
    desc: 'Receive quality care with our satisfaction guarantee and 24/7 support.',
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    quote:
      "After my mother's hip surgery, finding reliable nursing care felt overwhelming. Lotus Care matched us with Priya within hours. She became part of our family.",
    author: 'Vikram Mehta',
    role: 'Son & Family Caregiver',
    city: 'Mumbai',
    avatar: 'VM',
    avatarColor: 'avatar-sage',
  },
  {
    id: 2,
    quote:
      'Als werkende ouders hadden we iemand nodig die we konden vertrouwen. De grondige achtergrondcontroles gaven ons de gemoedsrust die we elders niet vonden.',
    author: 'Emma de Vries',
    role: 'Working Parent',
    city: 'Amsterdam',
    avatar: 'EV',
    avatarColor: 'avatar-blush',
  },
  {
    id: 3,
    quote:
      'The grief counseling I found through Lotus Care helped me navigate the hardest year of my life. Professional, compassionate, and truly life-changing.',
    author: 'Jan van der Berg',
    role: 'Individual Client',
    city: 'Utrecht',
    avatar: 'JB',
    avatarColor: 'avatar-lavender',
  },
];

// Category page data
export const categoryData = {
  healthcare: {
    title: 'Healthcare Support',
    description:
      'Professional medical care at home — from nursing to rehabilitation, palliative care to post-surgery support.',
    icon: '🏥',
    providers: 240,
  },
  'home-support': {
    title: 'Home Support',
    description:
      'Trusted help for daily household tasks and family needs — cleaning, cooking, childcare, and more.',
    icon: '🏡',
    providers: 185,
  },
  'personal-support': {
    title: 'Personal Support',
    description:
      'Emotional wellness, companionship, and professional guidance when you need it most.',
    icon: '💬',
    providers: 120,
  },
};

// Specializations by category
export const specializations = {
  healthcare: ['Elderly Care', 'Post-Surgery', 'Dementia Care', 'ICU Support', 'Physiotherapy', 'Palliative Care'],
  'home-support': ['House Cleaning', 'Cooking', 'Childcare', 'Grocery Runs', 'Laundry', 'Pet Care'],
  'personal-support': ['Counseling', 'Life Coaching', 'Companionship', 'Grief Support', 'Family Therapy'],
};
