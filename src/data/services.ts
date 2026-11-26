// All 18 service lines below are taken from the "Our Services" list and the
// track record in the company profile. Descriptions use only PDF facts.

export interface Service {
  name: string;
  detail: string;
}

export interface ServiceGroup {
  id: string;
  number: string;
  title: string;
  blurb: string;
  items: Service[];
  image: string;
}

export const packagesNote =
  'We structure our packages to cater for everyone, from 5-star luxury to budget holiday seekers.';

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'transport',
    number: '01',
    title: 'Transport',
    blurb: 'Local travelling and transport services for groups, with vehicles and drivers arranged around the trip.',
    image: 'bus.jpg',
    items: [
      { name: 'Charter services', detail: 'Transport chartered for a specific group or itinerary.' },
      {
        name: 'Local travelling / transport services',
        detail: 'Local routes around Mahikeng and the North West, and tours beyond the province.',
      },
      {
        name: 'Shuttles',
        detail: 'Shuttle runs for hotel guests, delegations and families, including Protea Hotel guests since 2018.',
      },
      {
        name: 'Transfers',
        detail: 'Airport-to-hotel ground handling and transfers for arriving and departing groups.',
      },
      {
        name: 'Coach hire — luxury and semi-luxury',
        detail: 'Luxury coaches for provincial departments and bus services for schools.',
      },
    ],
  },
  {
    id: 'tours',
    number: '02',
    title: 'Tours',
    blurb: 'Scheduled departures and itineraries built around a destination, a season or a particular interest.',
    image: 'tours.jpg',
    items: [
      { name: 'Year-round excursions and itineraries', detail: 'Excursions and planned itineraries across the year.' },
      { name: 'Tailor-made tour packages', detail: 'Itineraries shaped around interests, preferences and budget.' },
      { name: 'Leisure tours', detail: 'Scheduled leisure routes, including Cape Town, Parys and Bela-Bela.' },
      { name: 'Eco-tours', detail: 'Nature-based trips such as the Kagga Kamma Nature Reserve tour.' },
      { name: 'Religious tours', detail: 'Tours for congregations, alongside luxury transport for church groups.' },
      { name: 'Safari tours', detail: 'Game drives at Mafikeng Game Reserve and Botsalano Game Reserve.' },
      { name: 'Cultural tours', detail: 'Cultural routes and visits to historical and heritage sites.' },
      { name: 'Historical and heritage sites', detail: 'Heritage visits included in provincial and local tours.' },
      { name: 'Adventure tours', detail: 'Adventure itineraries, including camping expeditions.' },
    ],
  },
  {
    id: 'groups',
    number: '03',
    title: 'Group and corporate',
    blurb: 'The work around the journey: arrivals, bookings, itineraries, teambuilding and executive treatment.',
    image: 'group.jpg',
    items: [
      { name: 'Group handling', detail: 'Handling groups on tours, at events and during delegations.' },
      { name: 'Teambuilding facilitation', detail: 'Teambuilding excursions for schools and corporate clients.' },
      { name: 'VIP treatment specialists', detail: 'Executive rides and VIP treatment for delegations and families.' },
      {
        name: 'Travel management',
        detail: 'Travel agency services for government departments and corporate clients, including the MEC’s office from 2018 to 2024.',
      },
    ],
  },
];
