// "List of some previous successful events" in the company profile, 2016–2025.
// Typos in the source (Kimberly, couches, Tsitsikama, Drakesburg, "luxury
// serious") are corrected silently. No reference-contact details are included.

export type ClientType =
  | 'Government'
  | 'Education'
  | 'Church'
  | 'Corporate'
  | 'Hospitality'
  | 'International delegations'
  | 'Private groups';

export const clientTypes: ClientType[] = [
  'Government',
  'Education',
  'Church',
  'Corporate',
  'Hospitality',
  'International delegations',
  'Private groups',
];

export interface Place {
  id: string;
  name: string;
  lon: number;
  lat: number;
  label?: 'l' | 'r' | 't' | 'b';
  offMap?: boolean;
}

export const origin: Place = { id: 'mahikeng', name: 'Mahikeng', lon: 25.64, lat: -25.86, label: 'l' };

// Coordinates are schematic geography, not a surveyed route.
export const places: Place[] = [
  { id: 'cape-town', name: 'Cape Town', lon: 18.42, lat: -33.92, label: 'r' },
  { id: 'kagga-kamma', name: 'Kagga Kamma', lon: 19.1, lat: -32.75, label: 'r' },
  { id: 'oudtshoorn', name: 'Oudtshoorn', lon: 22.2, lat: -33.59, label: 't' },
  { id: 'knysna', name: 'Knysna', lon: 22.04, lat: -34.04, label: 'l' },
  { id: 'tsitsikamma', name: 'Tsitsikamma', lon: 23.9, lat: -34.02, label: 't' },
  { id: 'port-elizabeth', name: 'Port Elizabeth', lon: 25.6, lat: -33.96, label: 'b' },
  { id: 'port-alfred', name: 'Port Alfred', lon: 26.89, lat: -33.59, label: 'r' },
  { id: 'kimberley', name: 'Kimberley', lon: 24.76, lat: -28.74, label: 'l' },
  { id: 'taung', name: 'Taung', lon: 24.8, lat: -27.54, label: 'l' },
  { id: 'free-state', name: 'Free State', lon: 27.5, lat: -28.8, label: 't' },
  { id: 'drakensberg', name: 'Drakensberg', lon: 29.2, lat: -29.1, label: 'l' },
  { id: 'durban', name: 'Durban', lon: 31.02, lat: -29.86, label: 'r' },
  { id: 'richards-bay', name: 'Richards Bay', lon: 32.04, lat: -28.78, label: 'l' },
  { id: 'parys', name: 'Parys', lon: 27.46, lat: -26.9, label: 'r' },
  { id: 'johannesburg', name: 'Soweto & Johannesburg', lon: 27.86, lat: -26.27, label: 'r' },
  { id: 'hartbeespoort', name: 'Hartbeespoort', lon: 27.89, lat: -25.74, label: 'b' },
  { id: 'groot-marico', name: 'Groot Marico', lon: 26.39, lat: -25.55, label: 't' },
  { id: 'bela-bela', name: 'Bela-Bela', lon: 28.29, lat: -24.88, label: 'r' },
  { id: 'mpumalanga', name: 'Mpumalanga', lon: 30.5, lat: -25.5, label: 'r' },
  { id: 'gaborone', name: 'Gaborone', lon: 25.91, lat: -24.65, label: 'r' },
  { id: 'zambia', name: 'Zambia via Zimbabwe and Botswana', lon: 27.0, lat: -23.0, label: 'r', offMap: true },
];

export const routeVia: Record<string, string[]> = {
  'cape-town': ['kimberley', 'oudtshoorn'],
  tsitsikamma: ['port-alfred', 'port-elizabeth'],
};

export interface TrackEvent {
  year: number;
  when: string;
  text: string;
  type: ClientType;
  places?: string[];
  ongoing?: boolean;
}

export const events: TrackEvent[] = [
  { year: 2016, when: '2016', text: 'Scheduled tour of Cape Town via Kimberley and Oudtshoorn.', type: 'Private groups', places: ['cape-town', 'kimberley', 'oudtshoorn'] },
  { year: 2017, when: '2017', text: 'North West provincial tours. We hosted the South African Traditional Music Awards team in North West and handled a provincial tour and all logistics for them.', type: 'Corporate' },
  { year: 2017, when: '2017', text: 'Taung and Kimberley tours for a professional retired teachers’ association. We made all the arrangements.', type: 'Private groups', places: ['taung', 'kimberley'] },
  { year: 2017, when: '2017', text: 'Tour of Mpumalanga.', type: 'Private groups', places: ['mpumalanga'] },
  { year: 2017, when: '2017', text: 'Luxury service for the Roman Catholic Church.', type: 'Church' },
  { year: 2018, when: '2018', text: 'North West provincial tour, with post-tour meetings in Africa.', type: 'International delegations' },
  { year: 2018, when: '2018 to date', text: 'Shuttle services for Protea Hotel guests.', type: 'Hospitality', ongoing: true },
  { year: 2018, when: '2018', text: 'African Tour Indaba trade show. We made arrangements for the North West Tourism Board: hotel bookings, flights and shuttle services.', type: 'Government' },
  { year: 2018, when: '2018, 2019 and 2020', text: 'Teambuilding for the matric class of 2018 at Mogakolodi Masibi Secondary School.', type: 'Education' },
  { year: 2018, when: '2018–2024', text: 'Travel management services (travel agency) for the office of the MEC, North West Department of Public Works and Roads.', type: 'Government', ongoing: true },
  { year: 2019, when: '2019', text: 'Post-tour meeting and Africa collaboration with Empire Travel Tours and Thulerra Tours. We hosted international buyers in North West to show what the province offers the international market.', type: 'International delegations' },
  { year: 2019, when: '2019', text: 'Luxury coach service for the Uniting Reformed Church of South Africa, Lehika Congregation.', type: 'Church' },
  { year: 2019, when: '2019', text: 'Transport services for various North West provincial government departments.', type: 'Government' },
  { year: 2019, when: '2019', text: 'Transport services for Kebalepile Secondary School.', type: 'Education' },
  { year: 2020, when: 'February 2020', text: 'Scheduled tour to Kagga Kamma Nature Reserve.', type: 'Private groups', places: ['kagga-kamma'] },
  { year: 2021, when: 'September 2021', text: 'A four-day Mahikeng tour for Keitumetse Khantsi’s group of forty friends.', type: 'Private groups' },
  { year: 2021, when: 'September 2021', text: 'Mahikeng local tour for North West University tourism students (Mahikeng Campus), requested by the North West Department of Economic Development, Environment, Conservation and Tourism.', type: 'Education' },
  { year: 2021, when: 'October 2021', text: 'Scheduled tour to Taung.', type: 'Private groups', places: ['taung'] },
  { year: 2021, when: 'November 2021', text: 'Transport for the North West Tourism Board on the Four Corners of the Free State tour.', type: 'Government', places: ['free-state'] },
  { year: 2021, when: 'December 2021', text: 'Mahikeng local tour for a group of seven couples from Richards Bay, KwaZulu-Natal.', type: 'Private groups', places: ['richards-bay'] },
  { year: 2021, when: 'December 2021', text: 'Transport for the North West Department of Arts, Culture, Sports and Recreation (Mahikeng sub-office) to Cape Town.', type: 'Government', places: ['cape-town'] },
  { year: 2022, when: 'January 2022', text: 'Scheduled tour to Port Alfred, Port Elizabeth and Tsitsikamma.', type: 'Private groups', places: ['port-alfred', 'port-elizabeth', 'tsitsikamma'] },
  { year: 2022, when: 'February 2022', text: 'Hartbeespoort Dam trip for a TVET college in Potchefstroom, requested by the North West Department of Economic Development, Environment, Conservation and Tourism.', type: 'Education', places: ['hartbeespoort'] },
  { year: 2022, when: 'March 2022', text: 'Transport for the Nchoe family to Zambia via Zimbabwe, returning via Botswana.', type: 'Private groups', places: ['zambia'] },
  { year: 2022, when: 'April 2022', text: 'Travel management for a teambuilding excursion at Hartbeespoort for GT Chaane Quality Surveyors & Project Management.', type: 'Corporate', places: ['hartbeespoort'] },
  { year: 2022, when: 'August 2022', text: 'Educational tour for Ratlou Primary School learners in Mahikeng.', type: 'Education' },
  { year: 2022, when: 'September 2022', text: 'Camping expedition for North West University tourism faculty, appointed by the National Department of Tourism.', type: 'Education' },
  { year: 2022, when: 'October 2022', text: 'Ground handling and executive treatment.', type: 'Corporate' },
  { year: 2022, when: 'November and December 2022', text: 'With Thalerra Tours, a Mahikeng tour for influencers, journalists and presenters attending the #FillupMmabatho stadium event, appointed by South African Tourism.', type: 'Government' },
  { year: 2023, when: 'January 2023', text: 'Scheduled tour to Parys.', type: 'Private groups', places: ['parys'] },
  { year: 2023, when: 'March 2023', text: 'Luxury coaches for the North West Department of Arts, Culture and Recreation, from North West to Cape Town.', type: 'Government', places: ['cape-town'] },
  { year: 2023, when: 'April 2023', text: 'Tour to Gold Reef City, Soweto and sky dining.', type: 'Private groups', places: ['johannesburg'] },
  { year: 2023, when: 'May 2023', text: 'Nominated by the North West Department of Economic Development, Environment, Conservation and Tourism to attend Africa’s Travel Indaba, the leisure trade show owned by South African Tourism, to create market access for African leisure tourism products. Our managing director, Thusho Monnagaratoe, represented us.', type: 'Government' },
  { year: 2023, when: 'June 2023', text: 'Ground handling for presidential pilots, Mahikeng Airport to hotel.', type: 'Government' },
  { year: 2023, when: 'July 2023', text: 'Shuttle service for a family attending a concert at Times Square arena.', type: 'Private groups' },
  { year: 2023, when: 'August 2023', text: 'Shuttle service for Protea Hotel guests returning home to Gaborone.', type: 'Hospitality', places: ['gaborone'] },
  { year: 2023, when: 'September 2023', text: 'Bus service for Mahikeng Primary School, Mahikeng to Groot Marico.', type: 'Education', places: ['groot-marico'] },
  { year: 2023, when: 'September 2023', text: 'Luxury coaches for the North West Department of Arts, Culture, Sports and Recreation, from North West to Durban.', type: 'Government', places: ['durban'] },
  { year: 2023, when: 'October 2023', text: 'Travel management for a teambuilding excursion at Drakensberg for GT Chaane Quality Surveyors & Project Management.', type: 'Corporate', places: ['drakensberg'] },
  { year: 2023, when: 'October 2023', text: 'Day tour from Mahikeng to Gaborone, Botswana, for Dr Dan Feather from the United Kingdom.', type: 'International delegations', places: ['gaborone'] },
  { year: 2023, when: 'November 2023', text: 'Executive ride for the Molosioa family from Mahikeng to Soweto, then the Walter Sisulu National Botanical Gardens, for a wedding.', type: 'Private groups', places: ['johannesburg'] },
  { year: 2024, when: 'January 2024', text: 'Tailored Western Cape tour for the Mokone family: Oudtshoorn, Knysna, Tsitsikamma National Park and Cape Town.', type: 'Private groups', places: ['oudtshoorn', 'knysna', 'tsitsikamma', 'cape-town'] },
  { year: 2024, when: 'April 2024', text: 'Bela-Bela tour.', type: 'Private groups', places: ['bela-bela'] },
  { year: 2024, when: 'May 2024', text: 'We hosted an Indonesian group and ran their shuttle services across North West.', type: 'International delegations' },
  { year: 2024, when: 'September 2024', text: 'Luxury coach services for the North West Department of Arts, Culture, Sports and Recreation.', type: 'Government' },
  { year: 2024, when: 'November 2024', text: 'Shuttle services for a group of Americans, and a day tour to Gaborone, Botswana.', type: 'International delegations', places: ['gaborone'] },
  { year: 2025, when: 'May 2025', text: 'Luxury bus services for Mahikeng Local Municipality.', type: 'Government' },
  { year: 2025, when: 'June 2025', text: 'Open bus for Mahikeng Local Municipality to welcome the Comrades Marathon champion.', type: 'Government' },
  { year: 2025, when: 'September 2025', text: 'Educational tour for more primary school learners.', type: 'Education' },
  { year: 2025, when: '2025', text: 'Lore Primary School 2025 excursion with Lovisto Tours.', type: 'Education' },
  { year: 2025, when: 'October 2025', text: 'We hosted Ngaka Modiri Molema District Municipality and its mayor on a guided tour.', type: 'Government' },
  { year: 2025, when: 'October 2025', text: 'Game drive at Mafikeng Game Reserve for SANBI staff attending a symposium at North West University.', type: 'Government' },
  { year: 2025, when: '17–24 November 2025', text: 'G20 summit: shuttle services for South Korean delegates, in partnership with Africa Tour Story, the travel agency of the South Korean embassy.', type: 'International delegations' },
  { year: 2025, when: 'December 2025', text: 'Bus service for the North West Department of Arts, Culture, Sports and Recreation.', type: 'Government' },
];

export const eventsForPlace = (id: string) => events.filter((event) => event.places?.includes(id));
export const years = Array.from(new Set(events.map((event) => event.year))).sort((a, b) => b - a);
