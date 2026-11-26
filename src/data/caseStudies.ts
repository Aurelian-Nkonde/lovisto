// Two jobs shown in detail on the home page. Only PDF facts are used;
// figures the profile does not give are left as explicit placeholders.

export const TBC = '[TO BE CONFIRMED BY CLIENT]';

export interface CaseStudy {
  id: string;
  when: string;
  title: string;
  intro: string;
  facts: { label: string; value: string }[];
  image: string;
  alt: string;
  hint: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'g20',
    when: '17–24 November 2025',
    title: 'G20 summit: South Korean delegation',
    intro:
      'Shuttle services for South Korean delegates at the G20 summit, delivered in partnership with Africa Tour Story, the travel agency of the South Korean embassy.',
    facts: [
      { label: 'Dates', value: '17–24 November 2025' },
      { label: 'Client', value: 'South Korean delegation' },
      { label: 'Partner', value: 'Africa Tour Story' },
      { label: 'Service', value: 'Shuttle services' },
      { label: 'Delegates and vehicles', value: TBC },
    ],
    image: 'korean.jpg',
    alt: 'G20 2025 shuttle service graphic showing South Korea and South Africa',
    hint: 'Profile page 10: the 17–24 November 2025 G20 graphic with the Korean flag and G20 branding.',
  },
  {
    id: 'lore-primary',
    when: '2025',
    title: 'Lore Primary School excursion',
    intro:
      'An educational excursion for Lore Primary School learners with Lovisto Tours. The company has also run educational tours for Ratlou Primary School learners and bus services for Mahikeng Primary School.',
    facts: [
      { label: 'Client', value: 'Lore Primary School' },
      { label: 'Service', value: 'Educational excursion' },
      { label: 'Destination', value: TBC },
      { label: 'Learners and buses', value: TBC },
    ],
    image: 'primary.jpg',
    alt: 'Lore Primary School learners on their 2025 excursion',
    hint: 'Profile page 9 collage: learners in uniform on the Lore Primary School 2025 excursion.',
  },
];
