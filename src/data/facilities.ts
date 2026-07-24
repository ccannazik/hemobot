export type FacilityType =
  | "hospital"
  | "htc"
  | "hematologist"
  | "pediatric_hematology"
  | "clinic"
  | "emergency";

export interface HealthcareFacility {
  id: string;
  name: string;
  type: FacilityType;
  isHTC: boolean;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  website: string;
  lat: number;
  lng: number;
  hours?: string;
  description: string;
  verified: boolean;
  dataSource: string;
}

/** Palo Alto center point for default map view */
export const PALO_ALTO_CENTER = { lat: 37.4419, lng: -122.143 };
export const DEFAULT_SEARCH_RADIUS_MILES = 50;

/**
 * Healthcare facilities near Palo Alto, CA.
 * Sources: CDC HTC Directory, facility public websites.
 * Phone/hours should be verified before production use — marked verified where from official sources.
 */
export const healthcareFacilities: HealthcareFacility[] = [
  {
    id: "stanford-htc",
    name: "Stanford Hemophilia and Thrombosis Center",
    type: "htc",
    isHTC: true,
    address: "875 Blake Wilbur Drive, 3rd Floor",
    city: "Stanford",
    state: "CA",
    zip: "94305",
    phone: "(650) 723-5533",
    website: "https://med.stanford.edu/hematology/clinical/hemophilia.html",
    lat: 37.4346,
    lng: -122.1759,
    hours: "Mon–Fri, by appointment",
    description:
      "Official Hemophilia Treatment Center affiliated with Stanford Medicine. Comprehensive care for bleeding disorders including hemophilia A and B.",
    verified: true,
    dataSource: "CDC HTC Directory / Stanford Medicine",
  },
  {
    id: "lpch-hematology",
    name: "Lucile Packard Children's Hospital — Pediatric Hematology",
    type: "pediatric_hematology",
    isHTC: false,
    address: "725 Welch Road",
    city: "Palo Alto",
    state: "CA",
    zip: "94304",
    phone: "(650) 497-8000",
    website: "https://www.stanfordchildrens.org/en/service/hematology-oncology",
    lat: 37.4358,
    lng: -122.1755,
    hours: "Mon–Fri, by appointment",
    description:
      "Pediatric hematology and oncology services at Stanford Children's Health, serving children with bleeding disorders.",
    verified: true,
    dataSource: "Stanford Children's Health",
  },
  {
    id: "stanford-hospital",
    name: "Stanford Health Care — Emergency Department",
    type: "emergency",
    isHTC: false,
    address: "900 Quarry Road Extension",
    city: "Stanford",
    state: "CA",
    zip: "94305",
    phone: "(650) 723-5111",
    website: "https://stanfordhealthcare.org/medical-clinics/emergency-department.html",
    lat: 37.4341,
    lng: -122.175,
    hours: "24 hours",
    description:
      "Level I trauma center emergency department. For life-threatening bleeding, call 911 or go to the nearest emergency department.",
    verified: true,
    dataSource: "Stanford Health Care",
  },
  {
    id: "palo-alto-medical",
    name: "Palo Alto Medical Foundation — Hematology",
    type: "hematologist",
    isHTC: false,
    address: "795 El Camino Real",
    city: "Palo Alto",
    state: "CA",
    zip: "94301",
    phone: "(650) 853-2950",
    website: "https://www.sutterhealth.org/find-doctor/specialty/hematology",
    lat: 37.4395,
    lng: -122.1582,
    hours: "Mon–Fri, varies by provider",
    description:
      "Outpatient hematology services through Sutter Health. Not a designated HTC — verify specialist experience with bleeding disorders.",
    verified: true,
    dataSource: "Sutter Health",
  },
  {
    id: "ucsf-htc",
    name: "UCSF Hemophilia Treatment Center",
    type: "htc",
    isHTC: true,
    address: "400 Parnassus Avenue, Suite A-502",
    city: "San Francisco",
    state: "CA",
    zip: "94143",
    phone: "(415) 353-2727",
    website: "https://hemophilia.ucsf.edu/",
    lat: 37.7631,
    lng: -122.4586,
    hours: "Mon–Fri, by appointment",
    description:
      "Official Hemophilia Treatment Center at UCSF. Comprehensive adult and pediatric bleeding disorder care.",
    verified: true,
    dataSource: "CDC HTC Directory / UCSF",
  },
  {
    id: "ucsf-benioff-oakland",
    name: "UCSF Benioff Children's Hospital Oakland — Hematology",
    type: "pediatric_hematology",
    isHTC: false,
    address: "747 52nd Street",
    city: "Oakland",
    state: "CA",
    zip: "94609",
    phone: "(510) 428-3000",
    website: "https://www.ucsfbenioffchildrens.org/",
    lat: 37.8387,
    lng: -122.2647,
    hours: "Mon–Fri, by appointment",
    description:
      "Pediatric hematology services in the East Bay. Part of the UCSF health system.",
    verified: true,
    dataSource: "UCSF Benioff Children's Hospital",
  },
  {
    id: "kaiser-santa-clara",
    name: "Kaiser Permanente Santa Clara — Hematology",
    type: "hematologist",
    isHTC: false,
    address: "710 Lawrence Expressway",
    city: "Santa Clara",
    state: "CA",
    zip: "95051",
    phone: "(408) 851-6400",
    website: "https://healthy.kaiserpermanente.org/northern-california/facilities/santa-clara-medical-center-100328",
    lat: 37.3353,
    lng: -121.9983,
    hours: "Mon–Fri, by appointment (members)",
    description:
      "Hematology services for Kaiser Permanente members. Not a designated HTC.",
    verified: true,
    dataSource: "Kaiser Permanente",
  },
  {
    id: "el-camino-hospital",
    name: "El Camino Health — Mountain View Hospital",
    type: "hospital",
    isHTC: false,
    address: "2500 Grant Road",
    city: "Mountain View",
    state: "CA",
    zip: "94040",
    phone: "(650) 940-7000",
    website: "https://www.elcaminohealth.org/",
    lat: 37.3688,
    lng: -122.0795,
    hours: "24 hours (Emergency)",
    description:
      "Community hospital serving the South Bay. Emergency care available; specialized hemophilia care typically referred to HTCs.",
    verified: true,
    dataSource: "El Camino Health",
  },
  {
    id: "va-palo-alto",
    name: "VA Palo Alto Health Care System",
    type: "hospital",
    isHTC: false,
    address: "3801 Miranda Avenue",
    city: "Palo Alto",
    state: "CA",
    zip: "94304",
    phone: "(650) 493-5000",
    website: "https://www.va.gov/palo-alto-health-care/",
    lat: 37.4056,
    lng: -122.1397,
    hours: "Mon–Fri, varies; Emergency 24/7",
    description:
      "Veterans Affairs medical center. Hematology services available for eligible veterans.",
    verified: true,
    dataSource: "U.S. Department of Veterans Affairs",
  },
];

export const facilityTypeLabels: Record<FacilityType, string> = {
  hospital: "Hospital",
  htc: "Hemophilia Treatment Center",
  hematologist: "Hematologist",
  pediatric_hematology: "Pediatric Hematology",
  clinic: "Specialized Clinic",
  emergency: "Emergency Care",
};

export const facilityFilterOptions = [
  { id: "all", label: "All" },
  { id: "hospital", label: "Hospitals" },
  { id: "htc", label: "Hemophilia Treatment Centers" },
  { id: "hematologist", label: "Hematologists" },
  { id: "pediatric_hematology", label: "Pediatric Hematology" },
  { id: "emergency", label: "Emergency Care" },
] as const;

export type FacilityFilter = (typeof facilityFilterOptions)[number]["id"];
