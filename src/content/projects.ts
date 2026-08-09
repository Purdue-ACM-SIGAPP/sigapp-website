// Projects content: home page showcase + past projects archive page.

export interface Project {
  name: string;
  year: string;
  description: string;
  image: string;
  link?: string;
}

export const projectsSectionContent = {
  title: "Our Past Projects",
  description:
    "Every semester brings new challenges and fresh ideas, and we're always excited to see what our members will build next.",
};

export const pastProjectsPageContent = {
  title: "Past Projects",
  subtitle:
    "Every project reflects what SIGAPP is all about: solving real problems with practical, user-centered solutions.",
};

export const projects: Project[] = [
  {
    name: "Boiler Faves",
    year: "2022–2023",
    image: "/assets/app/boilerFaves.png",
    description:
      "Tag your favorite dining hall meals and get notified when they're served. Now part of the official Purdue Dining app!",
    link: "https://github.com/Purdue-ACM-SIGAPP",
  },
  {
    name: "Purdue CoRec Monitor",
    year: "2023–2024",
    image: "/assets/app/purdueCorecMonitor.png",
    description:
      "Live updates on facility usage at the Purdue CoRec. Plan your workouts smarter.",
    link: "https://github.com/Purdue-ACM-SIGAPP",
  },
  {
    name: "SafeWalk",
    year: "2023–2024",
    image: "/assets/app/safewalk.jpg",
    description:
      "A modernization of campus blue light buttons. Request a police escort on campus with an Uber-like experience.",
    link: "https://github.com/Purdue-ACM-SIGAPP",
  },
  {
    name: "Purdue Laundry",
    year: "2022–2023",
    image: "/assets/app/purdueLaundry.png",
    description:
      "Check washer and dryer availability in real-time — no more wasted laundry trips.",
    link: "https://github.com/Purdue-ACM-SIGAPP",
  },
  {
    name: "Bucket List",
    year: "2024–2025",
    image: "/assets/app/bucketlist.jpg",
    description:
      "Discover and share personal goals with others. Create your own bucket list and join friends on their adventures!",
    link: "https://github.com/Purdue-ACM-SIGAPP",
  },
];
