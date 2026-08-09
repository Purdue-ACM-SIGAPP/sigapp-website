import soleil from "../assets/soleil.jpeg";
import andrew from "../assets/andrew.jpeg";
import colin from "../assets/colin.jpeg";
import jonnen from "../assets/jonnen.jpeg";
import david from "../assets/david.jpeg";
import justin from "../assets/justin.jpeg";
import jack from "../assets/jack.jpg";
import isabel from "../assets/isabel_fuh.jpg";
import sigapp2425 from "../assets/SIGAPP24-25.jpg";
import sigapp2122 from "../assets/SIGAPP21-22.png";

export interface Officer {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
}

export interface OfficerYear {
  label: string;
  photo?: string;
  officers: Officer[];
}

// Ordered: [0] President, [1] VP, [2] FE Lead, [3] FE Lead,
//          [4] BE Lead, [5] BE Lead, [6] Server Manager, [7] Marketing Lead
export const currentOfficers: Officer[] = [
  {
    name: "Soleil Pham",
    role: "President",
    image: soleil,
    linkedin: "https://www.linkedin.com/in/chan-nhu-p-4876a127a/",
  },
  {
    name: "David Panek",
    role: "Vice President",
    image: david,
    linkedin: "https://www.linkedin.com/in/david-panek-1046b0263/",
  },
  {
    name: "Colin Wu",
    role: "Front End Lead",
    image: colin,
    linkedin: "https://www.linkedin.com/in/colinwu0403/",
  },
  {
    name: "Justin Puthenpurayil",
    role: "Front End Lead",
    image: justin,
    linkedin: "https://www.linkedin.com/in/justinputhenpurayil/",
  },
  {
    name: "Andrew Liu",
    role: "Back End Lead",
    image: andrew,
    linkedin: "https://www.linkedin.com/in/andrew-liu-715029250/",
  },
  {
    name: "Jonnen Chong",
    role: "Back End Lead",
    image: jonnen,
    linkedin: "https://www.linkedin.com/in/jonnen-chong/",
  },
  {
    name: "Jack Reynolds",
    role: "Server Manager",
    image: jack,
    linkedin: "https://www.linkedin.com/in/jackreynolds9128/",
  },
  {
    name: "Isabel Fuh",
    role: "Marketing Lead",
    image: isabel,
    linkedin: "https://www.linkedin.com/in/isabel-fuh/",
  },
];

export const pastOfficerYears: OfficerYear[] = [
  {
    label: "2024–2025",
    photo: sigapp2425,
    officers: [
      { name: "Tommy Lane", role: "President" },
      { name: "TBD", role: "Vice President" },
      { name: "TBD", role: "Front End Lead" },
      { name: "TBD", role: "Back End Lead" },
      { name: "TBD", role: "Server Manager" },
      { name: "TBD", role: "Marketing Lead" },
    ],
  },
  {
    label: "2021–2022",
    photo: sigapp2122,
    officers: [
      { name: "TBD", role: "President" },
      { name: "TBD", role: "Vice President" },
      { name: "TBD", role: "Front End Lead" },
      { name: "TBD", role: "Back End Lead" },
    ],
  },
];
