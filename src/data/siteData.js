// ============================================================
//  SINGLE SOURCE OF TRUTH — edit this file to update the site.
//  Anything marked PLACEHOLDER must be replaced with verified
//  information from the NGO. Nothing here is invented fact.
// ============================================================

export const ORG = {
  name: 'Jan Manav Kalyan Foundation',
  tagline: 'Serving Humanity, Creating Hope',
  hindiTagline: 'सेवा परमो धर्म:', // shown in the supplied design mockup; confirm with the NGO
  mission:
    'Working for a better tomorrow through education, healthcare, food distribution, blood donation and social welfare.',
  logo: '/images/brand/logo.png',
}

export const SOCIAL = {
  instagram: 'https://www.instagram.com/janmanav_kalyan_foundation/',
  facebook: '#', // PLACEHOLDER — add official Facebook page URL
  youtube: '#', // PLACEHOLDER — add official YouTube channel URL
}

export const CONTACT = {
  address: '[ Address — to be provided by the NGO ]',
  phone: '+91 XXXXX XXXXX', // PLACEHOLDER
  email: 'info@example.org', // PLACEHOLDER
}

export const DONATION = {
  upiId: 'example@upi', // PLACEHOLDER
  upiQr: '', // e.g. '/images/brand/upi-qr.png' once provided
  accountName: '[ Account name ]',
  accountNumber: '[ Account number ]',
  ifsc: '[ IFSC code ]',
  bank: '[ Bank & branch ]',
}

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Causes', to: '/causes' },
  { label: 'Our Work', to: '/work' },
  { label: 'Media', to: '/media' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

// Impact numbers: leave `value: null` until verified. When a number is
// supplied the card counts up to it automatically.
export const IMPACT = [
  { icon: 'HeartHandshake', value: null, label: 'People Supported', tone: 'leaf' },
  { icon: 'Heart', value: null, label: 'Community Initiatives', tone: 'saffron' },
  { icon: 'Users', value: null, label: 'Volunteers', tone: 'leaf' },
  { icon: 'CalendarDays', value: null, label: 'Events & Camps', tone: 'saffron' },
]

export const CAUSES = [
  { slug: 'education', icon: 'BookOpen', title: 'Education', text: 'Supporting learning opportunities for children and families.', image: '/images/causes/education.jpg' },
  { slug: 'healthcare', icon: 'Activity', title: 'Healthcare', text: 'Community healthcare support and awareness.', image: '/images/causes/healthcare.jpg' },
  { slug: 'food', icon: 'Soup', title: 'Food Distribution', text: 'Providing food to those in need.', image: '/images/causes/food.jpg' },
  { slug: 'blood', icon: 'Droplet', title: 'Blood Donation', text: 'Organizing blood donation camps.', image: '/images/causes/blood.jpg' },
  { slug: 'welfare', icon: 'Users', title: 'Community Welfare', text: 'Empowering communities through collective action.', image: '/images/causes/welfare.jpg' },
  { slug: 'environment', icon: 'Leaf', title: 'Environment', text: 'Supporting a cleaner and greener future.', image: '/images/causes/environment.png' },
]

export const WORK_CATEGORIES = [
  'All', 'Food Distribution', 'Blood Donation', 'Community Events',
  'Volunteer Activities', 'Education', 'Healthcare', 'Social Awareness',
]

// Replace with real photos. `title` and `date` must be verified; leave
// date as '' if unknown. Photos live in /public/images/work/.
export const WORK = [
  { id: 1, category: 'Food Distribution', title: 'Community food distribution', date: '', image: '/images/work/work-1.jpg', tall: true },
  { id: 2, category: 'Blood Donation', title: 'Blood donation camp', date: '', image: '/images/work/work-2.jpg' },
  { id: 3, category: 'Education', title: 'Education support', date: '', image: '/images/work/work-3.jpg' },
  { id: 4, category: 'Community Events', title: 'Community gathering', date: '', image: '/images/work/work-4.jpg' },
  { id: 5, category: 'Volunteer Activities', title: 'Volunteers at work', date: '', image: '/images/work/work-5.jpg', tall: true },
  { id: 6, category: 'Healthcare', title: 'Healthcare support', date: '', image: '/images/work/work-6.jpg' },
  { id: 7, category: 'Social Awareness', title: 'Awareness activity', date: '', image: '/images/work/work-7.jpg' },
  { id: 8, category: 'Environment', title: 'Plantation activity', date: '', image: '/images/work/work-8.jpg' },
]

// Only what is visibly printed in the supplied clipping may be added.
export const MEDIA = [
  {
    id: 'clip-1',
    image: '/images/media/newspaper-1.jpg',
    alt: 'Newspaper clipping covering a blood donation camp organised by Jan Manav Kalyan Foundation',
    headline: 'जनमानव कल्याण फाउंडेशन ने लगाया रक्तदान शिविर, 11 लोगों ने किया रक्तदान', // visible in supplied clipping
  },
  {
    id: 'clip-2',
    image: '/images/media/newspaper-2.jpg',
    alt: 'Second newspaper clipping featuring a Foundation camp',
    headline: '',
  },
]

export const STORIES = [
  { id: 1, title: 'Community Food Distribution', text: 'Providing food to people in need and supporting underprivileged families.', image: '/images/work/work-1.jpg', date: '' },
  { id: 2, title: 'Blood Donation Camp', text: 'Organizing blood donation camps to support healthcare needs.', image: '/images/work/work-2.jpg', date: '' },
  { id: 3, title: 'Education Support', text: 'Helping children access learning opportunities for a brighter future.', image: '/images/work/work-3.jpg', date: '' },
  { id: 4, title: 'Community Awareness', text: 'Bringing people together around issues that matter to the community.', image: '/images/work/work-7.jpg', date: '' },
]

export const VOLUNTEER_PHOTOS = [
  { image: '/images/volunteers/v-1.jpg', alt: 'Volunteers of Jan Manav Kalyan Foundation at a community activity' },
  { image: '/images/volunteers/v-2.jpg', alt: 'Foundation members and volunteers working together' },
  { image: '/images/volunteers/v-3.jpg', alt: 'Volunteers distributing food to the community' },
]

// Use only posts the NGO has permission to reuse.
export const INSTAGRAM_POSTS = [1, 2, 3, 4, 5, 6].map((n) => ({
  image: `/images/instagram/post-${n}.jpg`,
  alt: `Moment from Jan Manav Kalyan Foundation's Instagram, photo ${n}`,
}))
