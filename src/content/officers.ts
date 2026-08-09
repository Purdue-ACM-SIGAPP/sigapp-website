// Officers content: current roster (home page) + past officers archive page.
//
// Single source of truth: `allOfficers` below has one entry per PERSON, with
// a `positions` array of every {role, year} they've held. `currentOfficers`
// and `pastOfficerYears` are both derived from it, so a person's
// name/photo/linkedin is entered exactly once no matter how many years or
// roles they show up in.

export interface Officer {
  name: string;
  role: string;
  image?: string;
  // Avatar fallback order: image -> linkedinPhoto -> initials badge.
  // Note: LinkedIn CDN photo URLs (media.licdn.com/.../shrink_.../?...&t=...)
  // are signed and expire — prefer saving the photo into public/assets and
  // using `image` instead for anything long-lived.
  linkedinPhoto?: string;
  linkedin?: string;
}

export interface Position {
  role: string;
  year: string;
}

export interface OfficerRecord {
  name: string;
  positions: Position[];
  image?: string;
  linkedinPhoto?: string;
  linkedin?: string;
}

// A person's outline within a team photo, as [x%, y%] points relative to
// the image's own width/height — generated with tools/photo-tagger.html.
export interface PhotoRegion {
  name: string;
  points: [number, number][];
}

export interface OfficerYear {
  label: string;
  photo?: string;
  regions?: PhotoRegion[];
  officers: Officer[];
}

export const officersSectionTitle =
  "Say hello to our current officers for 2026–2027!";

// Which `year` value counts as "current" on the home page — bump this each
// time the roster turns over; everything else is derived automatically.
export const CURRENT_YEAR = "2026–2027";

// Team photo per year (a per-year property, not a per-officer one).
const yearPhotos: Record<string, string> = {
  "2025–2026": "/assets/group/SIGAPP25-26_2.jpg",
  "2024–2025": "/assets/group/SIGAPP24-25.jpg",
  "2021–2022": "/assets/group/SIGAPP21-22.png",
};

// Tagged person outlines per year's team photo — generated with
// tools/photo-tagger.html. Powers the hover-to-highlight / click-to-zoom
// interaction on the past-officers photos. Not every photo needs one.
const yearRegions: Record<string, PhotoRegion[]> = {
  "2025–2026": [
    {
      name: "Soleil Pham",
      points: [
        [12.88, 17.21],
        [12.84, 17.43],
        [12.87, 17.66],
        [12.94, 17.75],
        [12.85, 17.85],
        [12.66, 17.94],
        [12.6, 18.07],
        [12.76, 18.22],
        [12.94, 18.41],
        [13.03, 18.78],
        [13.04, 19.03],
        [13.06, 19.83],
        [13.05, 20.6],
        [13.06, 20.86],
        [13, 21.13],
        [12.85, 21.17],
        [12.92, 21.49],
        [12.79, 21.61],
        [12.83, 22.17],
        [12.83, 22.53],
        [12.95, 22.6],
        [13.07, 22.44],
        [13.18, 22.6],
        [13.45, 22.57],
        [13.4, 22.43],
        [13.35, 22.2],
        [13.43, 21.2],
        [13.44, 20.81],
        [13.31, 20.18],
        [13.37, 19.45],
        [13.26, 19.38],
        [13.37, 18.9],
        [13.34, 18.39],
        [13.25, 18.35],
        [13.45, 17.89],
        [13.25, 17.74],
        [13.28, 17.53],
        [13.29, 17.31],
        [13.13, 17.07],
      ],
    },
    {
      name: "David Panek",
      points: [
        [13.8, 18.5],
        [13.77, 18.27],
        [13.61, 18.15],
        [13.72, 17.64],
        [13.95, 17.58],
        [14.12, 17.6],
        [14.27, 17.81],
        [14.27, 18.21],
        [14.17, 18.42],
        [14.36, 18.63],
        [14.53, 18.77],
        [14.69, 19.21],
        [14.69, 18.49],
        [14.79, 18.38],
        [14.63, 17.87],
        [14.34, 17.73],
        [14.15, 17.47],
        [14.16, 17.3],
        [14.26, 17.13],
        [14.16, 16.74],
        [14.09, 16.57],
        [13.83, 16.58],
        [13.73, 16.84],
        [13.76, 17.23],
        [13.85, 17.36],
        [13.81, 17.51],
        [13.5, 17.81],
        [13.36, 18.07],
        [13.33, 18.34],
        [13.37, 18.6],
        [13.37, 18.8],
        [13.69, 18.59],
      ],
    },
    {
      name: "Colin Wu",
      points: [
        [13.39, 18.82],
        [13.24, 19.34],
        [13.4, 19.46],
        [13.33, 19.81],
        [13.29, 20.15],
        [13.47, 20.83],
        [13.42, 21.09],
        [13.51, 21.4],
        [13.6, 21.65],
        [13.66, 21.89],
        [13.7, 23.45],
        [13.72, 23.62],
        [13.52, 23.87],
        [13.47, 24.02],
        [13.61, 24.06],
        [13.78, 24.14],
        [13.91, 24.04],
        [14.1, 23.9],
        [13.97, 23.49],
        [13.89, 23.31],
        [14.02, 21.85],
        [14.11, 21.89],
        [14.28, 22.45],
        [14.35, 23.23],
        [14.41, 23.48],
        [14.29, 23.81],
        [14.4, 24.01],
        [14.58, 24.11],
        [14.89, 24.09],
        [14.75, 23.81],
        [14.62, 23.4],
        [14.52, 21.41],
        [14.69, 21.09],
        [14.69, 20.73],
        [14.69, 19.96],
        [14.65, 19.74],
        [14.62, 19.5],
        [14.73, 19.43],
        [14.49, 18.77],
        [14.17, 18.46],
        [14.12, 18.41],
        [14.25, 18.24],
        [14.25, 17.87],
        [14.2, 17.64],
        [13.9, 17.59],
        [13.71, 17.75],
        [13.63, 18.04],
        [13.62, 18.16],
        [13.76, 18.25],
        [13.78, 18.46],
        [13.78, 18.55],
      ],
    },
    {
      name: "Justin Puthenpurayil",
      points: [
        [14.87, 22.79],
        [14.66, 23.04],
        [14.67, 23.19],
        [15.1, 23.19],
        [15.23, 23.13],
        [15.23, 22.88],
        [15.19, 23.26],
        [15.44, 23.31],
        [15.48, 22.95],
        [15.57, 22.09],
        [15.55, 21.63],
        [15.52, 21.49],
        [15.58, 20.81],
        [15.54, 20.32],
        [15.54, 19.79],
        [15.46, 19.65],
        [15.57, 19.54],
        [15.59, 19.3],
        [15.72, 19.28],
        [15.66, 18.55],
        [15.55, 18.31],
        [15.26, 18.12],
        [15.18, 17.99],
        [15.32, 17.65],
        [15.31, 17.33],
        [15.04, 17.2],
        [14.82, 17.33],
        [14.85, 17.53],
        [14.8, 17.72],
        [14.89, 17.87],
        [14.89, 18.06],
        [14.75, 18.18],
        [14.8, 18.4],
        [14.67, 18.51],
        [14.7, 19.29],
        [14.72, 19.44],
        [14.64, 19.49],
        [14.72, 20.24],
        [14.71, 21.04],
        [14.81, 21.48],
        [14.8, 21.71],
        [14.91, 22.28],
      ],
    },
    {
      name: "Jack Reynolds",
      points: [
        [12.25, 18.11],
        [12.26, 17.84],
        [12.17, 17.66],
        [12.13, 17.4],
        [12.14, 17.2],
        [12.22, 16.94],
        [12.22, 16.6],
        [11.97, 16.46],
        [11.76, 16.68],
        [11.8, 16.88],
        [11.83, 17.05],
        [11.85, 17.39],
        [11.54, 17.52],
        [11.54, 17.74],
        [11.44, 17.86],
        [11.45, 18.06],
        [11.82, 18.41],
        [12, 18.23],
      ],
    },
    {
      name: "Andrew Liu",
      points: [
        [11.88, 24.08],
        [12.09, 24.16],
        [12.23, 24.15],
        [12.27, 23.89],
        [12.25, 23.6],
        [12.22, 23.34],
        [12.3, 22.5],
        [12.29, 22.21],
        [12.38, 21.89],
        [12.39, 21.61],
        [12.48, 21.63],
        [12.5, 22.09],
        [12.53, 22.21],
        [12.56, 22.91],
        [12.61, 23.28],
        [12.55, 23.57],
        [12.56, 23.86],
        [12.61, 24.08],
        [12.87, 24.1],
        [12.9, 23.84],
        [12.77, 23.54],
        [12.84, 22.63],
        [12.82, 21.69],
        [12.94, 21.5],
        [12.87, 21.17],
        [13.05, 20.97],
        [13.07, 19.67],
        [13.04, 19.05],
        [13.1, 19.02],
        [12.98, 18.43],
        [12.61, 18.11],
        [12.56, 18.03],
        [12.56, 17.86],
        [12.67, 17.65],
        [12.7, 17.44],
        [12.59, 17.17],
        [12.34, 17.11],
        [12.19, 17.22],
        [12.16, 17.52],
        [12.19, 17.69],
        [12.27, 17.86],
        [12.28, 18.09],
        [11.96, 18.26],
        [11.83, 18.44],
        [11.74, 19.02],
        [11.82, 19.15],
        [11.74, 19.62],
        [11.76, 20.52],
        [11.78, 20.71],
        [11.78, 20.98],
        [11.91, 21.2],
        [11.96, 21.39],
        [11.9, 21.55],
        [11.97, 21.68],
        [12.02, 22.18],
        [11.99, 22.45],
        [12.03, 23.19],
        [12.06, 23.5],
        [12.05, 23.69],
      ],
    },
    {
      name: "Samuel Duprey",
      points: [
        [13.22, 16.47],
        [13.45, 16.64],
        [13.63, 16.53],
        [13.79, 16.63],
        [14.09, 16.57],
        [14.17, 16.73],
        [14.27, 16.16],
        [13.9, 15.99],
        [13.85, 15.74],
        [13.91, 15.73],
        [13.91, 15.55],
        [13.83, 15.27],
        [13.64, 15.24],
        [13.52, 15.43],
        [13.52, 15.67],
        [13.57, 15.82],
        [13.57, 15.89],
        [13.3, 16.09],
      ],
    },
    {
      name: "Jonnen Chong",
      points: [
        [10.49, 17.15],
        [10.49, 17.37],
        [10.81, 17.59],
        [10.85, 17.7],
        [10.77, 18.11],
        [10.77, 18.3],
        [10.72, 18.5],
        [10.59, 19.05],
        [10.66, 19.1],
        [10.65, 19.33],
        [10.78, 19.64],
        [10.76, 20.03],
        [10.7, 20.53],
        [10.72, 20.82],
        [10.68, 21.15],
        [10.59, 21.38],
        [10.63, 21.52],
        [10.72, 21.77],
        [10.68, 21.88],
        [10.37, 21.85],
        [10.29, 21.95],
        [10.3, 20.45],
        [10.34, 20.12],
        [10.34, 19.93],
        [10.34, 19.42],
        [10.33, 19.06],
        [10.27, 18.48],
        [10.07, 18.4],
        [10.17, 18.08],
        [10.1, 17.71],
        [9.95, 17.62],
        [9.87, 17.6],
        [9.99, 17.47],
        [10.21, 17.36],
        [10.23, 17.2],
        [10.18, 17.07],
        [10.13, 16.86],
        [10.24, 16.64],
        [10.39, 16.55],
        [10.54, 16.65],
        [10.61, 16.86],
        [10.61, 17.02],
      ],
    },
  ],
};

// Sort order for officers within a year's card grid (President -> VP ->
// everyone else). Roles are matched with any "(Fall)"/"(Spring)" suffix
// stripped; anything unrecognized sorts after these, in original order.
const ROLE_ORDER = [
  "president",
  "vice president",
  "frontend lead",
  "backend lead",
  "backend manager",
  "server manager",
  "marketing lead",
];

function roleRank(role: string): number {
  const base = role
    .replace(/\s*\(.*?\)\s*/g, "")
    .trim()
    .toLowerCase();
  const idx = ROLE_ORDER.indexOf(base);
  return idx === -1 ? ROLE_ORDER.length : idx;
}

// People and roles sourced from "Main Club Documentation.docx" (the club's
// official leadership history log). Ordered newest-position-first within
// each person; people are otherwise in no particular order — display order
// per year is computed by role, not by this list's order.
// Note: within a tied role-rank (e.g. two "Frontend Lead"s), display order
// falls back to this array's order — so for the current year specifically,
// people are listed in the order they should appear in the home page's
// positional card layout (President, VP, FE, FE, BE, BE, Server, Marketing).
export const allOfficers: OfficerRecord[] = [
  {
    name: "Soleil Pham",
    image: "/assets/officer/soleil.jpeg",
    linkedin: "https://www.linkedin.com/in/chan-nhu-p-4876a127a/",
    positions: [
      { role: "Frontend Lead", year: "2026–2027" },
      { role: "President", year: "2025–2026" },
    ],
  },
  {
    name: "David Panek",
    image: "/assets/officer/david.jpeg",
    linkedin: "https://www.linkedin.com/in/david-panek-1046b0263/",
    positions: [{ role: "Vice President", year: "2025–2026" }],
  },
  {
    name: "Colin Wu",
    image: "/assets/officer/colin.jpeg",
    linkedin: "https://www.linkedin.com/in/colinwu0403/",
    positions: [
      { role: "Frontend Lead", year: "2025–2026" },
      { role: "President", year: "2024–2025" },
    ],
  },
  {
    name: "Justin Puthenpurayil",
    image: "/assets/officer/justin.jpeg",
    linkedin: "https://www.linkedin.com/in/justinputhenpurayil/",
    positions: [{ role: "Frontend Lead", year: "2025–2026" }],
  },
  {
    name: "Andrew Liu",
    image: "/assets/officer/andrew.jpeg",
    linkedin: "https://www.linkedin.com/in/andrew-liu-715029250/",
    positions: [
      { role: "Backend Lead", year: "2025–2026" },
      { role: "Vice President", year: "2024–2025" },
    ],
  },
  {
    name: "Deepika Ramesh",
    image: "/assets/officer/deepika-ramesh.jpg",
    linkedin: "https://www.linkedin.com/in/deepikaramesh1107/",
    positions: [{ role: "Marketing Lead", year: "2024–2025" }],
  },
  {
    name: "Katelyn Chen",
    image: "/assets/officer/katelyn-chen.jpg",
    linkedin: "https://www.linkedin.com/in/katelynchen12/",
    positions: [{ role: "Frontend Lead", year: "2024–2025" }],
  },
  {
    name: "Samuel Duprey",
    image: "/assets/officer/samuel-duprey.jpg",
    linkedin: "https://www.linkedin.com/in/samuelduprey/",
    positions: [{ role: "Frontend Lead", year: "2024–2025" }],
  },
  {
    name: "Jonnen Chong",
    image: "/assets/officer/jonnen.jpeg",
    linkedin: "https://www.linkedin.com/in/jonnen-chong/",
    positions: [
      { role: "Vice President", year: "2026–2027" },
      { role: "Backend Lead", year: "2025–2026" },
    ],
  },
  {
    name: "Jack Reynolds",
    image: "/assets/officer/jack.jpg",
    linkedin: "https://www.linkedin.com/in/jackreynolds9128/",
    positions: [
      { role: "Server Manager", year: "2026–2027" },
      { role: "Server Manager", year: "2025–2026" },
    ],
  },
  {
    name: "Isabel Fuh",
    image: "/assets/officer/isabel_fuh.jpg",
    linkedin: "https://www.linkedin.com/in/isabel-fuh/",
    positions: [
      { role: "President", year: "2026–2027" },
      { role: "Marketing Lead", year: "2025–2026" },
    ],
  },
  {
    name: "George Xiao",
    image: "/assets/officer/george.webp",
    positions: [{ role: "Backend Lead", year: "2026–2027" }],
  },
  {
    name: "Marvin Zhang",
    image: "/assets/officer/marvin.jpeg",
    linkedin: "https://www.linkedin.com/in/zhangmarvin/",
    positions: [{ role: "Frontend Lead", year: "2026–2027" }],
  },
  {
    name: "Tommy Lane",
    image: "/assets/officer/tommy-lane.jpg",
    linkedin: "https://www.linkedin.com/in/thomas-a-lane/",
    positions: [
      { role: "President", year: "2023–2024" },
      { role: "President", year: "2022–2023" },
    ],
  },
  {
    name: "Alex Kobus",
    image: "/assets/officer/alex-kobus.jpg",
    linkedin: "https://www.linkedin.com/in/alexanderkobus/",
    positions: [
      { role: "Vice President", year: "2023–2024" },
      { role: "Vice President", year: "2022–2023" },
      { role: "Vice President (Spring)", year: "2021–2022" },
    ],
  },
  {
    name: "Ian Ryan",
    image: "/assets/officer/ian-ryan.jpg",
    linkedin: "https://www.linkedin.com/in/ianmryan/",
    positions: [
      { role: "President", year: "2021–2022" },
      { role: "Vice President", year: "2020–2021" },
    ],
  },
  {
    name: "Jack Sovich",
    image: "/assets/officer/jack-sovich.jpg",
    linkedin: "https://www.linkedin.com/in/jack-sovich/",
    positions: [
      { role: "Vice President (Fall)", year: "2021–2022" },
      { role: "Vice President", year: "2020–2021" },
    ],
  },
  {
    name: "Nachiket Ingle",
    image: "/assets/officer/nachiket-ingle.jpg",
    linkedin: "https://www.linkedin.com/in/nachiket-ingle-499950191/",
    positions: [
      { role: "Vice President (Fall)", year: "2021–2022" },
      { role: "Vice President", year: "2020–2021" },
    ],
  },
  {
    name: "Josh Kassman",
    image: "/assets/officer/josh-kassman.jpg",
    linkedin: "https://www.linkedin.com/in/jmkassman/",
    positions: [
      { role: "President", year: "2020–2021" },
      { role: "President", year: "2019–2020" },
      { role: "Vice President", year: "2018–2019" },
    ],
  },
  {
    name: "Chris Rosenblatt",
    image: "/assets/officer/chris-rosenblatt.jpg",
    linkedin: "https://www.linkedin.com/in/christopher-rosenblatt-69310115a/",
    positions: [
      { role: "Vice President", year: "2019–2020" },
      { role: "Vice President", year: "2018–2019" },
    ],
  },
  {
    name: "Jordan Pitlor",
    image: "/assets/officer/jordan-pitlor.jpg",
    linkedin: "https://www.linkedin.com/in/jordan-pitlor/",
    positions: [
      { role: "President", year: "2018–2019" },
      { role: "Vice President (Spring)", year: "2017–2018" },
    ],
  },
  {
    name: "Jeff Hughes",
    image: "/assets/officer/jeff-hughes.jpg",
    linkedin: "https://www.linkedin.com/in/hughesjeff96/",
    positions: [
      { role: "President", year: "2017–2018" },
      { role: "Vice President", year: "2016–2017" },
      { role: "Vice President", year: "2015–2016" },
    ],
  },
  {
    name: "Michael Vieck",
    image: "/assets/officer/michael-vieck.jpg",
    linkedin: "https://www.linkedin.com/in/michaelvieck/",
    positions: [
      { role: "Vice President (Fall)", year: "2017–2018" },
      { role: "Vice President", year: "2016–2017" },
      { role: "Vice President", year: "2015–2016" },
    ],
  },
  {
    name: "Lucas Shanker",
    positions: [{ role: "Vice President (Spring)", year: "2017–2018" }],
  },
  {
    name: "David Tschida",
    image: "/assets/officer/david-tschida.jpg",
    linkedin: "https://www.linkedin.com/in/davidtschida/",
    positions: [
      { role: "President", year: "2016–2017" },
      { role: "President (Spring)", year: "2015–2016" },
      { role: "Vice President", year: "2014–2015" },
    ],
  },
  {
    name: "Eric Templin",
    image: "/assets/officer/eric-templin.jpg",
    linkedin: "https://www.linkedin.com/in/eric-templin-21505423/",
    positions: [{ role: "President", year: "2013–2014" }],
  },
];

interface FlatEntry extends Officer {
  year: string;
}

function flattenPositions(): FlatEntry[] {
  const rows: FlatEntry[] = [];
  for (const { positions, ...bio } of allOfficers) {
    for (const { role, year } of positions) {
      rows.push({ ...bio, role, year });
    }
  }
  return rows;
}

function stripYear(r: FlatEntry): Officer {
  const { name, role, image, linkedinPhoto, linkedin } = r;
  return { name, role, image, linkedinPhoto, linkedin };
}

const flatEntries = flattenPositions();

export const currentOfficers: Officer[] = flatEntries
  .filter((r) => r.year === CURRENT_YEAR)
  .sort((a, b) => roleRank(a.role) - roleRank(b.role))
  .map(stripYear);

export const pastOfficersPageContent = {
  title: "Past Officers",
  subtitle: "A look back at the people who built SIGAPP into what it is today.",
};

// Newest year first.
const yearOrder = [...new Set(flatEntries.map((r) => r.year))].sort().reverse();

export const pastOfficerYears: OfficerYear[] = yearOrder.map((year) => ({
  label: year,
  photo: yearPhotos[year],
  regions: yearRegions[year],
  officers: flatEntries
    .filter((r) => r.year === year)
    .sort((a, b) => roleRank(a.role) - roleRank(b.role))
    .map(stripYear),
}));
