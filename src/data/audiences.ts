// Four ways into the business. Each entry links to the quote form with a
// pre-filled trip type; copy is drawn from the profile's event list.

export interface Audience {
  number: string;
  title: string;
  slug: string;
  tripType: string;
  image: string;
  alt: string;
  hint: string;
  text: string;
  linkLabel: string;
}

export const audiences: Audience[] = [
  {
    number: '01',
    title: 'Schools',
    slug: 'schools',
    tripType: 'School trip',
    image: 'school.jpg',
    alt: 'Learners on an educational excursion with Lovisto Tours',
    hint: 'Profile page 9 collage: Lore Primary School 2025 excursion — learners at the picnic tables or inside the cave.',
    text: 'Educational excursions for Lore Primary School in 2025 and Ratlou Primary School learners in Mahikeng in 2022. Bus services for Mahikeng Primary School to Groot Marico in 2023, and transport for Kebalepile Secondary School. The Mogakolodi Masibi Secondary School matric class had teambuilding trips in 2018, 2019 and 2020.',
    linkLabel: 'Quote for a school trip',
  },
  {
    number: '02',
    title: 'Government and public sector',
    slug: 'government',
    tripType: 'Coach hire',
    image: 'government.jpg',
    alt: 'A Lovisto Tours coach used for a group transfer',
    hint: 'Profile page 11: coach parked under the shelter, or the open bus used for the Mahikeng Local Municipality welcome.',
    text: 'Luxury coaches for the North West Department of Arts, Culture, Sports and Recreation to Cape Town and Durban. Travel management for the MEC’s office, Public Works and Roads, from 2018 to 2024. Arrangements for the North West Tourism Board at African Tour Indaba, and luxury and open buses for Mahikeng Local Municipality in 2025.',
    linkLabel: 'Quote for a government trip',
  },
  {
    number: '03',
    title: 'Corporate and teambuilding',
    slug: 'corporate',
    tripType: 'Teambuilding',
    image: 'corporate.jpg',
    alt: 'A group on a teambuilding outing arranged by Lovisto Tours',
    hint: 'Profile page 11: group at a viewpoint or beside the van; alternatively the Hartbeespoort / Drakensberg group photos if supplied.',
    text: 'Travel management for GT Chaane Quality Surveyors & Project Management: teambuilding at Hartbeespoort in 2022 and at Drakensberg in 2023. Ground handling and executive treatment for visiting guests, including presidential pilots in 2023.',
    linkLabel: 'Quote for teambuilding',
  },
  {
    number: '04',
    title: 'Churches and groups',
    slug: 'groups',
    tripType: 'Tour',
    image: 'churches.jpg',
    alt: 'A group of travellers with a Lovisto Tours vehicle',
    hint: 'Profile page 11: group at the Big Hole viewing deck in Kimberley, or the group beside the van under the gazebo.',
    text: 'Luxury service for the Roman Catholic Church in 2017 and a luxury coach for the Uniting Reformed Church of South Africa, Lehika Congregation, in 2019. A four-day Mahikeng tour for a group of forty friends, and tailored Western Cape and cross-border trips for families.',
    linkLabel: 'Quote for a group tour',
  },
];
