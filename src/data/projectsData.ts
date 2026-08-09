import boilerFaves from "../assets/boilerFaves.png";
import safewalk from "../assets/safewalk.jpg";
import purdueLaundry from "../assets/purdueLaundry.png";
import bucketlist from "../assets/bucketlist.png";
import purdueCorecMonitor from "../assets/purdueCorecMonitor.png";

export interface Project {
  name: string;
  year: string;
  description: string;
  image: string;
  link?: string;
}

export const projects: Project[] = [
  {
    name: "Boiler Faves",
    year: "2022–2023",
    image: boilerFaves,
    description:
      "Tag your favorite dining hall meals and get notified when they're served. Now part of the official Purdue Dining app!",
    link: "https://github.com/Purdue-ACM-SIGAPP",
  },
  {
    name: "Purdue CoRec Monitor",
    year: "2023–2024",
    image: purdueCorecMonitor,
    description:
      "Live updates on facility usage at the Purdue CoRec. Plan your workouts smarter.",
    link: "https://github.com/Purdue-ACM-SIGAPP",
  },
  {
    name: "SafeWalk",
    year: "2023–2024",
    image: safewalk,
    description:
      "A modernization of campus blue light buttons. Request a police escort on campus with an Uber-like experience.",
    link: "https://github.com/Purdue-ACM-SIGAPP",
  },
  {
    name: "Purdue Laundry",
    year: "2022–2023",
    image: purdueLaundry,
    description:
      "Check washer and dryer availability in real-time — no more wasted laundry trips.",
    link: "https://github.com/Purdue-ACM-SIGAPP",
  },
  {
    name: "Bucket List",
    year: "2024–2025",
    image: bucketlist,
    description:
      "Discover and share personal goals with others. Create your own bucket list and join friends on their adventures!",
    link: "https://github.com/Purdue-ACM-SIGAPP",
  },
];
