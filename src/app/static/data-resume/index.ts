import { Static } from '@types';

const DATA_RESUME_LOCATION_MAP_DORAN_JONES: Static.ResumeItem['location'] = {
  state: { label: 'New York', value: 'NY' },
  city: 'New York',
};

const DATA_RESUME_LOCATION_MAP_ANTRA_INC: Static.ResumeItem['location'] = {
  state: { label: 'Virginia', value: 'VA' },
  city: 'Sterling',
};

const DATA_RESUME_LOCATION_MAP_PACE_COMMUNICATIONS: Static.ResumeItem['location'] = {
  state: { label: 'North Carolina', value: 'NC' },
  city: 'Greensboro',
};

const DATA_RESUME_LOCATION_MAP_HAWTHORNE_RESIDENTIAL: Static.ResumeItem['location'] = {
  state: { label: 'North Carolina', value: 'NC' },
  city: 'Greensboro',
};

const DATA_RESUME_ITEM_MAP_DORAN_JONES: Static.ResumeItem = {
  uid: 'resume:employer:doran',
  date: ['01/01/1970', '01/01/1970'],
  title: 'Doran Jones Inc.',
  summary: `Data Engineering and Application Development Firm, specializing in financial services, capital markets, risk, and regulatory compliance.`,
  location: DATA_RESUME_LOCATION_MAP_DORAN_JONES,
};

const DATA_RESUME_ITEM_MAP_ANTRA_INC: Static.ResumeItem = {
  uid: 'resume:employer:antra',
  date: ['01/01/1970', '01/01/1970'],
  title: 'Antra Inc.',
  summary: `Antra Inc. bridges the gap between technology and business with cost-effective, industry-specific IT solutions.`,
  location: DATA_RESUME_LOCATION_MAP_ANTRA_INC,
};

const DATA_RESUME_ITEM_MAP_PACE_COMMUNICATIONS: Static.ResumeItem = {
  uid: 'resume:employer:pace',
  date: ['01/01/1970', '01/01/1970'],
  title: 'Pace Communications',
  summary: `Award winning and world leading, Creative Marketing Agency specializing in brand storytelling, discovery, UX design, and web development.`,
  location: DATA_RESUME_LOCATION_MAP_PACE_COMMUNICATIONS,
};

const DATA_RESUME_ITEM_MAP_HAWTHORNE_RESIDENTIAL: Static.ResumeItem = {
  uid: 'resume:employer:hawthorne',
  date: ['01/01/1970', '01/01/1970'],
  title: 'Hawthorne Residential Partners',
  summary: `Real Estate and Property Management Firm that provides services in the apartment industry throughout the Southeastern United States.`,
  location: DATA_RESUME_LOCATION_MAP_HAWTHORNE_RESIDENTIAL,
};

const DATA_RESUME_ITEMS = [
  DATA_RESUME_ITEM_MAP_DORAN_JONES,
  DATA_RESUME_ITEM_MAP_ANTRA_INC,
  DATA_RESUME_ITEM_MAP_PACE_COMMUNICATIONS,
  DATA_RESUME_ITEM_MAP_HAWTHORNE_RESIDENTIAL,
];

const DATA_RESUME_LOCATIONS = [
  DATA_RESUME_LOCATION_MAP_DORAN_JONES,
  DATA_RESUME_LOCATION_MAP_ANTRA_INC,
  DATA_RESUME_LOCATION_MAP_PACE_COMMUNICATIONS,
  DATA_RESUME_LOCATION_MAP_HAWTHORNE_RESIDENTIAL,
];

export {
  DATA_RESUME_LOCATIONS,
  DATA_RESUME_LOCATION_MAP_DORAN_JONES,
  DATA_RESUME_LOCATION_MAP_ANTRA_INC,
  DATA_RESUME_LOCATION_MAP_PACE_COMMUNICATIONS,
  DATA_RESUME_LOCATION_MAP_HAWTHORNE_RESIDENTIAL,
  //
  DATA_RESUME_ITEMS,
  DATA_RESUME_ITEM_MAP_DORAN_JONES,
  DATA_RESUME_ITEM_MAP_ANTRA_INC,
  DATA_RESUME_ITEM_MAP_PACE_COMMUNICATIONS,
  DATA_RESUME_ITEM_MAP_HAWTHORNE_RESIDENTIAL,
};
