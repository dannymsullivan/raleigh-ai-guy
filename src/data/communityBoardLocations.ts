import type { ImageMetadata } from 'astro';
import demoBoard from '@/images/community-boards/board-restaurant-hero-community-v3-wall.png';

export interface CommunityBoardPartner {
  name: string;
  website: string;
  href?: string;
  category: string;
  offer: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    code?: string;
  };
  performance: { dealViews: number; ctaClicks: number; redemptions: number };
}

export interface CommunityBoardLocation {
  slug: string;
  status: 'demo' | 'live';
  venueName: string;
  venueType: string;
  area: string;
  description: string;
  image: ImageMetadata;
  venueWebsite?: string;
  directionsUrl?: string;
  artist: { name: string; href?: string };
  partners: CommunityBoardPartner[];
  metrics: {
    estimatedVenueVisits: number;
    socialShares: number;
    reportedSocialReach: number;
    visits: number;
    visitors: number;
    dealViews: number;
    ctaClicks: number;
    redemptions: number;
    partnerTaps: number;
    venueActions: number;
  };
  weeklyScans: Array<{ label: string; value: number }>;
}

export const communityBoardLocations: CommunityBoardLocation[] = [
  {
    slug: 'sample-board',
    status: 'demo',
    venueName: 'Your Neighborhood Board',
    venueType: 'Interactive customer scan-page preview',
    area: 'Raleigh, North Carolina',
    description: 'This is what a guest sees after scanning the board: what is happening at the venue, useful offers from six local partners, and one clear next step for every business.',
    image: demoBoard,
    artist: { name: 'Your Raleigh chalk artist' },
    partners: [
      {
        name: 'Brier Creek Realty', website: 'briercreekrealty.com', href: 'https://www.briercreekrealty.com/', category: 'Real estate',
        offer: { eyebrow: 'Complimentary local report', title: 'What could your home sell for?', description: 'Request a quick neighborhood value snapshot prepared for your address—no listing appointment required.', ctaLabel: 'Request my snapshot' },
        performance: { dealViews: 19, ctaClicks: 8, redemptions: 3 },
      },
      {
        name: 'Design Mechanical', website: 'design-mechanical.com', href: 'https://www.design-mechanical.com/', category: 'Heating & cooling',
        offer: { eyebrow: 'Sample seasonal special', title: '$49 comfort-system check', description: 'A practical seasonal checkup for Raleigh homeowners before the weather does the testing for you.', ctaLabel: 'Book a checkup', code: 'LOCAL49' },
        performance: { dealViews: 16, ctaClicks: 6, redemptions: 2 },
      },
      {
        name: 'Vent & Duct Solutions', website: 'ventandductsolutions.com', href: 'https://ventandductsolutions.com/', category: 'Indoor air quality',
        offer: { eyebrow: 'Sample community offer', title: 'Free vent-health assessment', description: 'Find out whether buildup, airflow, or dryer-vent maintenance should be on your home checklist.', ctaLabel: 'Get my assessment' },
        performance: { dealViews: 14, ctaClicks: 5, redemptions: 2 },
      },
      {
        name: 'Legacy Plumbing', website: 'legacyplumbingnc.com', href: 'https://www.legacyplumbingnc.com/', category: 'Plumbing',
        offer: { eyebrow: 'Sample neighbor perk', title: '$25 off your first service call', description: 'A simple first-visit offer for a repair, inspection, or plumbing question at your Raleigh-area home.', ctaLabel: 'Claim the $25 perk', code: 'BOARD25' },
        performance: { dealViews: 15, ctaClicks: 5, redemptions: 2 },
      },
      {
        name: 'Martin Lawn Service', website: '919-621-9354', href: 'tel:+19196219354', category: 'Lawn care',
        offer: { eyebrow: 'Sample local estimate', title: 'Free lawn-care walkthrough', description: 'Talk through mowing, cleanup, fertilization, or seasonal needs and receive a straightforward local estimate.', ctaLabel: 'Request a walkthrough' },
        performance: { dealViews: 12, ctaClicks: 4, redemptions: 2 },
      },
      {
        name: 'Layton & Carraway', website: 'laytoncarraway.com', href: 'https://www.laytoncarraway.com/', category: 'Local law firm',
        offer: { eyebrow: 'Sample introduction', title: 'Start with a 15-minute call', description: 'Share the situation, learn whether the firm may be a fit, and leave with a clearer next step.', ctaLabel: 'Request an introduction' },
        performance: { dealViews: 10, ctaClicks: 3, redemptions: 1 },
      },
    ],
    metrics: {
      estimatedVenueVisits: 2400, socialShares: 8, reportedSocialReach: 3100,
      visits: 127, visitors: 94, dealViews: 86, ctaClicks: 31, redemptions: 12,
      partnerTaps: 31, venueActions: 18,
    },
    weeklyScans: [
      { label: 'W1', value: 5 }, { label: 'W2', value: 7 }, { label: 'W3', value: 6 },
      { label: 'W4', value: 9 }, { label: 'W5', value: 8 }, { label: 'W6', value: 10 },
      { label: 'W7', value: 9 }, { label: 'W8', value: 11 }, { label: 'W9', value: 12 },
      { label: 'W10', value: 13 }, { label: 'W11', value: 16 }, { label: 'W12', value: 21 },
    ],
  },
];
