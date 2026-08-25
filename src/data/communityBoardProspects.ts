import type { ImageMetadata } from 'astro';

import periBrothers from '@/images/community-boards/venue-concepts/peri-brothers-specials-community-v2.png';
import twoRoosters from '@/images/community-boards/venue-concepts/two-roosters-specials-community-v2.png';
import noraCafe from '@/images/community-boards/venue-concepts/nora-cafe-specials-community-v2.png';
import solaCoffee from '@/images/community-boards/venue-concepts/sola-coffee-community-v2.png';
import fit4Life from '@/images/community-boards/venue-concepts/fit4life-specials.png';
import bombayCurry from '@/images/community-boards/venue-concepts/bombay-curry-specials-final.png';
import gonzaTacos from '@/images/community-boards/venue-concepts/gonza-tacos-specials.png';
import brierCreekBeerGarden from '@/images/community-boards/host-concepts/brier-creek-beer-garden-final.png';
import trali from '@/images/community-boards/host-concepts/trali-irish-pub.png';
import epicAuto from '@/images/community-boards/host-concepts/epic-auto-center.png';
import manchesters from '@/images/community-boards/host-concepts/manchesters-grill.png';
import ruckusLeesville from '@/images/community-boards/host-concepts/ruckus-leesville.png';

const prospectImages = import.meta.glob<{ default: ImageMetadata }>(
  '../images/community-boards/prospect-concepts/*.png',
  { eager: true },
);

function prospectImage(slug: string): ImageMetadata {
  const image = prospectImages[`../images/community-boards/prospect-concepts/${slug}.png`]?.default;
  if (!image) throw new Error(`Missing community board concept image for ${slug}`);
  return image;
}

export interface CommunityBoardProspect {
  slug: string;
  name: string;
  area: string;
  venueType: string;
  image: ImageMetadata;
  fit: string;
  uses: string[];
}

const pitchProspect = (
  slug: string,
  name: string,
  area: string,
  venueType: string,
  fit: string,
  uses: string[],
  image?: ImageMetadata,
): CommunityBoardProspect => ({ slug, name, area, venueType, image: image ?? prospectImage(slug), fit, uses });

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
  pitchProspect('sola-coffee-cafe', 'Sola Coffee Café', 'North Raleigh · 27615', 'Neighborhood coffeehouse', 'Repeat morning visits, rotating seasonal drinks, and community programming make Sola a natural fit for an always-current board.', ['Seasonal coffee and breakfast', 'Mini-donut features', 'Live music and community events'], solaCoffee),
  pitchProspect('sassool', 'Sassool', 'North Raleigh · 27615', 'Family-owned Mediterranean café', 'Counter-service traffic and a broad menu give Sassool useful daily content while guests have time to notice local community partners.', ['Daily café features', 'Family meals and takeout', 'Catering and community updates']),
  pitchProspect('winstons-grille', 'Winston’s Grille', 'North Raleigh · 27609', 'Locally owned American grille', 'A longstanding neighborhood restaurant can keep lunch, dinner, and dessert features visible to a loyal repeat audience.', ['Soup and lunch features', 'Dinner and prime-rib features', 'Events and seasonal menus']),
  pitchProspect('pipers-tavern', 'Piper’s Tavern', 'North Raleigh · 27615', 'Neighborhood tavern', 'Regulars, sports, and weekly programming create repeated exposure and a constant reason to refresh the writing area.', ['Daily food features', 'Draft and happy-hour notes', 'Trivia and game-day events']),
  pitchProspect('relish-craft-kitchen', 'Relish Craft Kitchen & Bourbon Bar', 'North Raleigh · 27612', 'Southern restaurant and bourbon bar', 'Relish combines destination dining with repeat neighborhood traffic, brunch, and rotating food and bourbon features.', ['Chef and burger features', 'Bourbon highlights', 'Weekend brunch and events']),
  pitchProspect('margauxs-restaurant', 'Margaux’s Restaurant', 'North Raleigh · 27609', 'Independent restaurant', 'A changing chef-driven menu is exactly the kind of timely content a polished reusable board can showcase.', ['Chef’s daily feature', 'Fresh catch and seasonal entrées', 'Wine and dessert notes']),
  pitchProspect('saints-scholars', 'Saints & Scholars Pub', 'North Raleigh · 27615', 'Neighborhood pub', 'Food, sports, live music, and local regulars give the board both utility and strong repeat community-partner visibility.', ['Lunch and dinner features', 'Draft selections', 'Live music and game-day schedules']),
  pitchProspect('lynnwood-grill', 'Lynnwood Grill & Brewing Concern', 'Northwest Raleigh · 27613', 'Local brewpub', 'A busy brewpub can update tap features, food specials, and weekly programming while guests stay long enough to engage.', ['Rotating taps', 'Pizza and burger features', 'Trivia and brewery events']),
  pitchProspect('pickled-onion', 'The Pickled Onion', 'Northwest Raleigh · 27613', 'Neighborhood sports bar', 'Game-day traffic, regulars, and recurring food specials make the concept highly visible and frequently useful.', ['Wing and burger features', 'Local drafts', 'Game-day programming']),
  pitchProspect('farina', 'Farina Neighborhood Italian', 'North Raleigh', 'Neighborhood Italian restaurant', 'Pasta, pizza, wine, and nightly features translate naturally to a premium handwritten board.', ['Pasta and pizza features', 'Wine selections', 'Dessert and event notes']),
  pitchProspect('the-mill-raleigh', 'The Mill Raleigh', 'North Raleigh', 'Coffee shop and taproom', 'Coffee by day, beer and events later create multiple audiences and reasons to update the board throughout the week.', ['Coffee and seasonal drinks', 'Local beer features', 'Live music and events']),
  pitchProspect('wakefield-tavern', 'Wakefield Tavern', 'North Raleigh · 27614', 'Neighborhood tavern', 'Repeat neighborhood visits and weekly sports and trivia programming create durable community-partner exposure.', ['Lunch and dinner specials', 'Draft features', 'Trivia and game-day notes']),
  pitchProspect('nantucket-grill', 'Nantucket Grill', 'North Raleigh', 'Coastal American restaurant', 'Family dining, takeout, and rotating seafood and dessert features give the board useful daily content.', ['Fresh catch and soup', 'Lunch and dinner features', 'Cake and catering reminders']),
  pitchProspect('miltons-pizza', 'Milton’s Pizza & Pasta', 'North Raleigh', 'Family pizza restaurant', 'Family traffic, takeout, and frequent menu promotions create a clear use case for a reusable board.', ['Pizza and pasta features', 'Family takeout', 'Catering and events']),
  pitchProspect('vinnies-steak-house', 'Vinnie’s Steak House & Tavern', 'North Raleigh', 'Steakhouse and tavern', 'Longer dinner visits and high-intent local diners make this a strong environment for tasteful community-partner visibility.', ['Butcher’s cuts', 'Wine and seafood features', 'Private dining and events']),
  pitchProspect('seoul-garden', 'Seoul Garden', 'North Raleigh', 'Korean restaurant', 'Group dining and tabletop-grill dwell time give guests repeated opportunities to notice the board.', ['Korean barbecue features', 'Family meals', 'Holiday and group dining']),
  pitchProspect('kai-sushi', 'Kai Sushi & Sake Bar', 'North Raleigh', 'Sushi restaurant', 'Chef selections, specialty rolls, and sake features are timely, visual content for regular customers.', ['Chef’s sushi features', 'Sake selections', 'Dinner and event notes']),
  pitchProspect('bella-italia', 'Bella Italia', 'North Raleigh', 'Neighborhood Italian restaurant', 'A neighborhood dining room can use the board to turn repeat family traffic into awareness of fresh nightly features.', ['Pasta and entrée features', 'Family takeout', 'Dessert and catering']),
  pitchProspect('crafty-beer-shop', 'Crafty Beer Shop — Lafayette Village', 'North Raleigh · 27615', 'Craft beer shop and taproom', 'Rotating taps, releases, and long social visits create strong utility and meaningful community-partner dwell time.', ['Tap rotations', 'Can releases', 'Game nights and events']),
  pitchProspect('bottle-rev-3', 'Bottle Rev 3', 'North Raleigh · 27615', 'Bottle shop and taproom', 'Frequent releases and a neighborhood taproom audience make an updateable board especially relevant.', ['New releases', 'Tap and flight features', 'Trivia and community events']),
  pitchProspect('heros-pub-grill', 'Hero’s Pub & Grill', 'North Raleigh · 27615', 'Local pub and grill', 'Sports, pool, food, and live music create long visits and repeated reasons to refresh the board.', ['Food and happy-hour features', 'Live music', 'Sports and late-night programming']),
  pitchProspect('north-ridge-pub', 'North Ridge Pub', 'North Raleigh', 'Neighborhood pub', 'A local regulars-driven pub is a natural setting for useful weekly content and trusted community-partner visibility.', ['Daily food features', 'Local drafts', 'Game-day programming']),
  pitchProspect('encore-ristorante', 'Encore Ristorante', 'North Raleigh · 27614', 'Italian restaurant', 'Nightly pasta, wine, and dessert features give the board a polished and practical role in the dining room.', ['Chef’s pasta', 'Wine features', 'Dinner and event notes']),
  pitchProspect('jubala-lafayette', 'Jubala Coffee — Lafayette Village', 'North Raleigh · 27615', 'Coffee shop', 'Repeat morning traffic and seated café dwell time give both the venue message and community partners consistent visibility.', ['Coffee and roaster features', 'Breakfast and waffles', 'Seasonal drinks']),
  pitchProspect('carajillos', 'Carajillo’s Mexican Kitchen', 'North Raleigh · 27615', 'Mexican restaurant', 'A lively menu, margaritas, and weekend traffic create abundant board content and a strong local audience.', ['Taco and pizza features', 'Margarita notes', 'Weekend brunch']),
  pitchProspect('peri-peri-bistro', 'Peri Peri Bistro', 'Brier Creek · 27617', 'African-inspired bistro', 'A locally distinctive fast-casual concept can showcase daily food features to steady lunch and dinner traffic.', ['Grilled chicken features', 'Bowls and sauces', 'Family meals']),
  pitchProspect('sizzlin-stirfry', 'Sizzlin Stirfry Asian Bistro', 'Brier Creek · 27617', 'Asian bistro', 'Lunch, dinner, and takeout traffic make a visible specials board useful throughout the day.', ['Lunch features', 'Stir-fry and noodle bowls', 'Family takeout']),
  pitchProspect('great-china', 'Great China', 'Brier Creek · 27617', 'Chinese restaurant', 'High-frequency takeout and neighborhood dining create repeated impressions and practical menu-update use.', ['Lunch combinations', 'Chef’s specials', 'Family dinner and takeout']),
  pitchProspect('umami-brier-creek', 'Umami Japanese Steakhouse & Sushi', 'Brier Creek · 27617', 'Japanese steakhouse and sushi', 'Hibachi group dining and longer visits create a strong environment for specials and community-partner visibility.', ['Hibachi features', 'Sushi rolls', 'Sake and family dining']),
  pitchProspect('tasu-asian-bistro', 'Tasu Asian Bistro', 'Brier Creek · 27617', 'Asian bistro', 'A broad menu and repeat lunch and dinner traffic give the board useful rotating content.', ['Bento and lunch features', 'Sushi and noodle specials', 'Sake and events']),
  pitchProspect('champa-thai-sushi', 'Champa Thai & Sushi', 'Brier Creek · 27617', 'Thai and sushi restaurant', 'Two complementary menus create frequent features while seated diners provide meaningful exposure.', ['Thai curry and noodles', 'Chef’s sushi rolls', 'Family takeout']),
  pitchProspect('rise-brier-creek', 'Rise Southern Biscuits', 'Brier Creek · 27617', 'Breakfast and lunch restaurant', 'Fast-moving morning traffic and catering orders make a concise feature board valuable at the counter.', ['Breakfast features', 'Chicken and biscuits', 'Catering reminders']),
  pitchProspect('gigis-cupcakes', 'Gigi’s Cupcakes', 'Brier Creek · 27617', 'Cupcake bakery', 'Celebration shoppers and rotating flavors create highly visual, time-sensitive content for the board.', ['Cupcake of the day', 'Celebration orders', 'Catering and gift boxes']),
  pitchProspect('rocky-mountain-chocolate', 'Rocky Mountain Chocolate Factory', 'Brier Creek · 27617', 'Chocolate and confection shop', 'Family and gift-shopping traffic can engage with daily confection features and local community-partner names.', ['Fresh fudge and apples', 'Gift boxes', 'Seasonal promotions']),
  pitchProspect('paris-baguette-brier-creek', 'Paris Baguette', 'Brier Creek · 27617', 'Bakery café', 'Morning café traffic, pastry discovery, and celebration orders provide strong daily board utility.', ['Fresh-baked features', 'Coffee and pastry pairings', 'Cake and celebration orders']),
  pitchProspect('greek-fiesta', 'Greek Fiesta', 'Brier Creek · 27617', 'Greek restaurant', 'Lunch and family-meal traffic make menu features and community partner placements easy to notice at the counter.', ['Gyro and souvlaki features', 'Fresh dips and sides', 'Family feasts']),
  pitchProspect('showmars-brier-creek', 'Showmars', 'Brier Creek · 27617', 'Fast-casual restaurant', 'A broad family-friendly menu and steady counter traffic create a practical place for daily features.', ['Pita and burger features', 'Grilled plates', 'Family meals']),
  pitchProspect('azitra', 'Azitra', 'Brier Creek · 27617', 'Indian restaurant', 'Longer dinner visits and a polished dining environment support chef features and tasteful community-partner exposure.', ['Chef’s curry', 'Tandoori features', 'Wine and dessert']),
  pitchProspect('brixx-brier-creek', 'Brixx Wood Fired Pizza', 'Brier Creek · 27617', 'Pizza restaurant and bar', 'Family dining, brunch, and rotating local drafts create recurring content and good dwell time.', ['Wood-fired features', 'Local drafts', 'Weekend brunch']),
  pitchProspect('il-falo', 'Il Falò', 'Brier Creek · 27617', 'Italian restaurant', 'A visible oven, chef-driven menu, and longer dinner visits make the board feel native to the space.', ['Wood-fired pizza', 'House pasta', 'Wine and dessert']),
  pitchProspect('mellow-mushroom-brier-creek', 'Mellow Mushroom — Brier Creek', 'Brier Creek · 27617', 'Pizza restaurant and bar', 'Group dining, game nights, and local drafts create extended visits and frequent board updates.', ['Pizza and appetizer features', 'Local drafts', 'Trivia and events']),
  pitchProspect('los-tres-magueyes-brier-creek', 'Los Tres Magueyes — Brier Creek', 'Brier Creek · 27617', 'Mexican restaurant', 'Family dining, margaritas, and repeat neighborhood traffic make a specials board immediately useful.', ['Taco and fajita features', 'Margaritas', 'Family dinner']),
  pitchProspect('aladdins-brier-creek', 'Aladdin’s Eatery — Brier Creek', 'Brier Creek · 27617', 'Mediterranean restaurant', 'A broad health-forward menu and steady lunch traffic provide useful daily content and community-partner exposure.', ['Shawarma and plate features', 'Vegetarian selections', 'Family takeout']),
  pitchProspect('slice-of-ny-pizza', 'Slice of NY Pizza', 'Brier Creek · 27617', 'Pizza restaurant', 'Counter traffic and repeat takeout orders make the board easy to notice and simple to update.', ['Slice of the day', 'Whole-pie features', 'Family takeout']),
  pitchProspect('tonys-pizza', 'Tony’s Pizza', 'Northwest Raleigh · 27613', 'Family pizza restaurant', 'A loyal family audience and takeout traffic create strong utility for rotating pizza and pasta features.', ['Pizza and pasta features', 'Family meals', 'Catering']),
  pitchProspect('alpaca-brier-creek', 'Alpaca Peruvian Charcoal Chicken', 'Brier Creek · 27617', 'Peruvian restaurant', 'Fast-casual family traffic and a distinctive menu give the board a useful role near ordering and pickup.', ['Charcoal chicken', 'Peruvian sides', 'Family meals']),
  pitchProspect('the-oak-room', 'The Oak Room', 'Brier Creek · 27617', 'Restaurant and lounge', 'Hotel guests, business travelers, and seated diners create longer dwell time across multiple dayparts.', ['Breakfast and lunch features', 'Cocktail hour', 'Dinner features']),
  pitchProspect('epic-chophouse-brier-creek', 'Epic Chophouse — Brier Creek', 'Brier Creek · 27617', 'Steakhouse', 'A premium dining audience and longer evening visits make the venue attractive for high-quality local community partners.', ['Butcher’s cuts', 'Seafood and wine', 'Dinner features']),
  pitchProspect('assurance-tire-service', 'Assurance Tire & Service', 'Brier Creek · 27617', 'Automotive service center', 'Waiting-room dwell time gives customers a reason to read the board while it also communicates current shop services.', ['Service and inspection reminders', 'Seasonal maintenance', 'Customer waiting information']),
  pitchProspect('motor-city-garage', 'Motor City Garage', 'Brier Creek · 27617', 'Independent automotive garage', 'Customers waiting for service are attentive, and the writing area can explain timely maintenance and shop updates.', ['Maintenance features', 'Inspection and diagnostic reminders', 'Waiting-area information']),
];
