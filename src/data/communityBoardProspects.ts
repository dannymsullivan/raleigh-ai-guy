import type { ImageMetadata } from 'astro';

import periBrothers from '@/images/community-boards/venue-concepts/peri-brothers-specials-final.png';
import twoRoosters from '@/images/community-boards/venue-concepts/two-roosters-specials-final.png';
import noraCafe from '@/images/community-boards/venue-concepts/nora-cafe-specials-final.png';
import fit4Life from '@/images/community-boards/venue-concepts/fit4life-specials.png';
import bombayCurry from '@/images/community-boards/venue-concepts/bombay-curry-specials-final.png';
import gonzaTacos from '@/images/community-boards/venue-concepts/gonza-tacos-specials.png';
import brierCreekBeerGarden from '@/images/community-boards/host-concepts/brier-creek-beer-garden-final.png';
import trali from '@/images/community-boards/host-concepts/trali-irish-pub.png';
import epicAuto from '@/images/community-boards/host-concepts/epic-auto-center.png';
import manchesters from '@/images/community-boards/host-concepts/manchesters-grill.png';
import ruckusLeesville from '@/images/community-boards/host-concepts/ruckus-leesville.png';

export interface CommunityBoardProspect {
  slug: string;
  name: string;
  area: string;
  venueType: string;
  image: ImageMetadata;
  fit: string;
  uses: string[];
}

export const communityBoardProspects: CommunityBoardProspect[] = [
  { slug: 'peri-brothers', name: 'Peri Brothers Pizza & Pasta', area: 'North Raleigh', venueType: 'Neighborhood restaurant', image: periBrothers, fit: 'A reusable board gives regulars an immediate reason to notice weekly pizzas, dinner features, and takeout offers.', uses: ['Weekly pizza and dinner features', 'Takeout and catering reminders', 'Community events and announcements'] },
  { slug: 'two-roosters', name: 'Two Roosters Ice Cream', area: 'Raleigh', venueType: 'Ice cream shop', image: twoRoosters, fit: 'Rotating flavors are naturally visual, timely content—exactly what a prominent handwritten board is built to feature.', uses: ['Seasonal and limited flavors', 'Collaboration announcements', 'Events and catering'] },
  { slug: 'nora-cafe', name: 'NoRa Cafe', area: 'North Raleigh', venueType: 'Coffee shop', image: noraCafe, fit: 'A cafe board can turn repeat morning traffic into daily engagement with featured drinks, events, and neighborhood news.', uses: ['Barista drink features', 'Book and community events', 'Seasonal menu changes'] },
  { slug: 'fit4life', name: 'Fit4Life Health Clubs', area: 'North Raleigh', venueType: 'Fitness club', image: fit4Life, fit: 'Members pass the same reception area repeatedly, creating a strong place for class schedules and useful local visibility.', uses: ['Today’s class schedule', 'Member challenges and events', 'Trainer and amenity updates'] },
  { slug: 'bombay-curry', name: 'Bombay Curry', area: 'North Raleigh', venueType: 'Indian restaurant', image: bombayCurry, fit: 'A custom board makes chef features and rotating dishes visible before guests reach the table or place a takeout order.', uses: ['Chef and dinner specials', 'Featured breads and desserts', 'Catering and holiday menus'] },
  { slug: 'gonza-tacos', name: 'Gonza Tacos y Tequila', area: 'North Raleigh', venueType: 'Restaurant and bar', image: gonzaTacos, fit: 'The format matches a lively hospitality brand and gives tacos, cocktails, and events a high-impact daily showcase.', uses: ['Taco and cocktail features', 'Happy hour reminders', 'Live events and celebrations'] },
  { slug: 'brier-creek-beer-garden', name: 'Brier Creek Beer Garden', area: 'Brier Creek', venueType: 'Beer garden', image: brierCreekBeerGarden, fit: 'Longer visits, rotating taps, and weekly programming make this an especially natural home for a reusable event board.', uses: ['Tap takeovers and releases', 'Run club and weekly events', 'Food and drink features'] },
  { slug: 'trali-irish-pub', name: 'Tra’Li Irish Pub', area: 'Brier Creek', venueType: 'Irish pub and restaurant', image: trali, fit: 'A neighborhood pub can keep trivia, sports, brunch, and traditional menu features visible throughout the week.', uses: ['Trivia and live events', 'Match-day programming', 'Food and brunch features'] },
  { slug: 'epic-auto-center', name: 'EPIC Auto Center', area: 'North Raleigh', venueType: 'Automotive service center', image: epicAuto, fit: 'Customers waiting for service are a valuable, attentive audience, while the board also communicates today’s shop services.', uses: ['Inspection and service reminders', 'Seasonal maintenance guidance', 'Waiting-area information'] },
  { slug: 'manchesters-grill', name: 'Manchester’s Grill', area: 'Leesville / North Raleigh', venueType: 'Neighborhood grill', image: manchesters, fit: 'Weekly dinner, burger, and soup features give regular customers fresh information every time they visit.', uses: ['Weekly dinner specials', 'Burger and soup features', 'Family and community announcements'] },
  { slug: 'ruckus-leesville', name: 'Ruckus Pizza, Pasta & Spirits — Leesville', area: 'Leesville / North Raleigh', venueType: 'Pizza restaurant and sports bar', image: ruckusLeesville, fit: 'A high-energy neighborhood restaurant can use the board for food favorites, game-day programming, and rotating events.', uses: ['Food and drink favorites', 'Game-day features', 'Events, parties, and catering'] },
];
