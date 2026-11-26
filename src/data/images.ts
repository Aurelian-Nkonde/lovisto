// Central register of every photograph slot. No stock imagery is used.
// The files in src/assets/images were cropped from the Lovisto Tours
// company profile. Replace any of them with a higher-resolution original
// from the client and Astro will re-optimise it at build time.
// The `hint` is shown only if a file is ever removed from the folder.

export interface ImageSlotDefinition {
  file: string;
  alt: string;
  hint: string;
  usedOn: string;
}

export const imageSlots: ImageSlotDefinition[] = [
  {
    file: 'hero-coach-convoy.jpg',
    alt: 'Lovisto Tours coaches and a passenger van lined up in Mahikeng',
    hint: 'Cover page: the white coaches and van parked together. Supply a wide crop, at least 2000px.',
    usedOn: 'Home — hero; /fleet hero',
  },
  { file: 'services-transport.jpg', alt: 'A Lovisto Tours van and group beside the road beneath a koppie', hint: 'Van and group beside the road in the North West.', usedOn: '/services — transport' },
  { file: 'services-tours.jpg', alt: 'Visitors at a green rock pool on a Lovisto Tours trip', hint: 'Group on the rocks beside the green pool.', usedOn: 'Home — hero; /services hero' },
  { file: 'services-groups.jpg', alt: 'Group being welcomed beside a Lovisto Tours van', hint: 'Group beside the van under the gazebo.', usedOn: '/services — group travel' },
  { file: 'serve-schools.jpg', alt: 'Learners on a school excursion', hint: 'Lore Primary School 2025 excursion — learners at picnic tables or in the cave.', usedOn: 'Home — who we serve' },
  { file: 'serve-government.jpg', alt: 'A coach parked under a shelter before a group trip', hint: 'Coach under the shelter.', usedOn: 'Home — who we serve' },
  { file: 'serve-corporate.jpg', alt: 'A group on a cliff walkway on a Lovisto Tours excursion', hint: 'Group at the cliff walkway viewpoint.', usedOn: 'Home — who we serve' },
  { file: 'serve-groups.jpg', alt: 'Group at the Robben Island museum with Table Mountain behind', hint: 'Group at the Robben Island museum.', usedOn: 'Home — who we serve' },
  { file: 'case-g20.jpg', alt: 'G20 2025 shuttle service graphic with South Korea and South Africa', hint: 'The 17–24 November 2025 G20 graphic.', usedOn: 'Home — case study' },
  { file: 'case-lore-primary.jpg', alt: 'Lore Primary School learners on their 2025 excursion', hint: 'Lore Primary School 2025 collage.', usedOn: 'Home — case study' },
  { file: 'fleet-luxury-coach.jpg', alt: 'White luxury coach parked in Mahikeng', hint: 'White coach beside the van.', usedOn: 'Home — fleet; /fleet' },
  { file: 'fleet-semi-luxury-coach.jpg', alt: 'Coach parked under a shade shelter before a group departure', hint: 'Coach under the shade shelter.', usedOn: 'Home — fleet; /fleet' },
  { file: 'fleet-passenger-van.jpg', alt: 'White passenger van with luggage trailer on an open road', hint: 'Van with trailer on the open road.', usedOn: 'Home — fleet; /fleet; /contact hero' },
  { file: 'fleet-game-drive.jpg', alt: 'Open game-drive vehicle at sunset', hint: 'Open game-drive vehicle at sunset.', usedOn: 'Home — hero and fleet; /fleet' },
  { file: 'gallery-02.jpg', alt: 'Game-drive vehicle at sunset', hint: 'Game-drive vehicle at sunset.', usedOn: 'Home — photo strip' },
  { file: 'gallery-03.jpg', alt: 'Learners on the Lore Primary School excursion', hint: 'Lore Primary School learners under the trees.', usedOn: 'Home — photo strip' },
  { file: 'gallery-04.jpg', alt: 'Passenger van and group beside the road in the North West', hint: 'Van and group beside the road.', usedOn: 'Home — photo strip' },
  { file: 'gallery-05.jpg', alt: 'Visitors on the Big Hole viewing deck in Kimberley', hint: 'Big Hole, Kimberley.', usedOn: 'Home — photo strip' },
  { file: 'gallery-06.jpg', alt: 'Black van travelling in a mountain pass', hint: 'Mountain-pass photo.', usedOn: 'Home — photo strip; /404' },
  { file: 'gallery-07.jpg', alt: 'Group at a viewpoint with Table Mountain behind', hint: 'Robben Island / Table Mountain viewpoint photo.', usedOn: 'Home — photo strip' },
  { file: 'gallery-08.jpg', alt: 'Coach waiting under a shelter', hint: 'Coach under the shelter.', usedOn: 'Home — photo strip' },
  { file: 'about-vans.jpg', alt: 'Lovisto Tours vans and a coach outside a building in the North West', hint: 'Vans outside the building.', usedOn: '/about hero' },
  { file: 'track-record-group.jpg', alt: 'A Lovisto Tours group at a cliff viewpoint', hint: 'Group at the cliff viewpoint.', usedOn: '/track-record hero' },
];

export const imageByFile = Object.fromEntries(imageSlots.map((slot) => [slot.file, slot])) as Record<
  string,
  ImageSlotDefinition
>;
