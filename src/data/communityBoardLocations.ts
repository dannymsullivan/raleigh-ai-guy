import type { ImageMetadata } from 'astro';
import demoBoard from '@/images/community-boards/board-restaurant-hero-community-v2.png';

export interface CommunityBoardPartner {
  name: string;
  website: string;
  href?: string;
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
  artist: {
    name: string;
    href?: string;
  };
  partners: CommunityBoardPartner[];
  metrics: {
    estimatedVenueVisits: number;
    socialShares: number;
    reportedSocialReach: number;
    visits: number;
    visitors: number;
    partnerTaps: number;
    venueActions: number;
  };
}

export const communityBoardLocations: CommunityBoardLocation[] = [
  {
    slug: 'sample-board',
    status: 'demo',
    venueName: 'Your Neighborhood Board',
    venueType: 'Interactive location-page preview',
    area: 'Raleigh, North Carolina',
    description: 'This is the mobile page a guest reaches after scanning a board. A live location page features the venue, its current community partners, measurable actions, and the local artist behind the lettering.',
    image: demoBoard,
    artist: { name: 'Your Raleigh chalk artist' },
    partners: [
      { name: 'Brier Creek Realty', website: 'briercreekrealty.com', href: 'https://www.briercreekrealty.com/' },
      { name: 'Design Mechanical', website: 'design-mechanical.com', href: 'https://www.design-mechanical.com/' },
      { name: 'Vent & Duct Solutions', website: 'ventandductsolutions.com', href: 'https://ventandductsolutions.com/' },
      { name: 'Legacy Plumbing', website: 'legacyplumbingnc.com', href: 'https://www.legacyplumbingnc.com/' },
      { name: 'Martin Lawn Service', website: '919-621-9354', href: 'tel:+19196219354' },
      { name: 'Layton & Carraway', website: 'laytoncarraway.com', href: 'https://www.laytoncarraway.com/' },
    ],
    metrics: { estimatedVenueVisits: 2400, socialShares: 8, reportedSocialReach: 3100, visits: 127, visitors: 94, partnerTaps: 31, venueActions: 18 },
  },
];
