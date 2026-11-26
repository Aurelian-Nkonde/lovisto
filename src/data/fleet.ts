// Vehicle types shown in the profile photographs. The PDF gives no capacities
// or technical specifications, so those fields are explicit placeholders.

export const TBC = '[TO BE CONFIRMED BY CLIENT]';

export interface Vehicle {
  id: string;
  name: string;
  blurb: string;
  image: string;
  alt: string;
  hint: string;
  capacity: string;
  specs: string;
}

export const fleet: Vehicle[] = [
  {
    id: 'luxury-coach',
    name: 'Luxury coach',
    blurb:
      'Long-distance coach travel, including the runs to Cape Town and Durban for provincial departments.',
    image: 'fleet-luxury-coach.jpg',
    alt: 'White Lovisto Tours luxury coach parked in Mahikeng',
    hint: 'Profile cover page 1: the white coach with a van beside it; alternatively the coach under the shelter on page 11.',
    capacity: TBC,
    specs: TBC,
  },
  {
    id: 'semi-luxury-coach',
    name: 'Semi-luxury coach',
    blurb:
      'Semi-luxury coach hire for group travel and school excursions.',
    image: 'fleet-semi-luxury-coach.jpg',
    alt: 'White Lovisto Tours bus with learners beside a road',
    hint: 'Profile page 9: the Lore Primary School excursion photo showing the bus and learners.',
    capacity: TBC,
    specs: TBC,
  },
  {
    id: 'passenger-van',
    name: 'Passenger vans',
    blurb:
      'Shuttles, transfers and small-group tours, including hotel guest shuttles and delegation runs.',
    image: 'fleet-passenger-van.jpg',
    alt: 'White Lovisto Tours passenger van with a luggage trailer on an open road',
    hint: 'Profile page 12: the white van with a trailer on the open road, or the branded van on page 2.',
    capacity: TBC,
    specs: TBC,
  },
  {
    id: 'game-drive',
    name: 'Game-drive vehicle',
    blurb:
      'Open vehicle used for game drives at Mafikeng Game Reserve and Botsalano Game Reserve.',
    image: 'fleet-game-drive.jpg',
    alt: 'Open Lovisto Tours game-drive vehicle at sunset',
    hint: 'Profile page 11: the open game-drive vehicle photographed at sunset.',
    capacity: TBC,
    specs: TBC,
  },
];
