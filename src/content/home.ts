// Home page copy: hero, "Who We Are", and "What We Do" sections.

export const heroContent = {
  headlineLine1: "Purdue",
  headlineLine2: "ACM SIGAPP",
  tagline: "Purdue's premier app development club!",
  ctaText: "Join our discord server",
  disclaimer: "*No experience required — join our Discord to become a member!",
};

export const aboutContent = {
  title: "Who We Are",
  paragraphs: [
    'We are <strong>SIGAPP</strong> — Purdue\'s Special Interest Group for Applied Computing under the <a href="https://acm.cs.purdue.edu/" target="_blank" rel="noopener noreferrer" class="underline font-semibold text-dark-green">Association for Computing Machinery (ACM)</a>.',
    "At SIGAPP, we focus on designing and building real-world applications that solve practical problems — both on campus and in the broader community.",
  ],
  carouselImages: [
    "/assets/group/SIGAPP25-26_3.jpg",
    "/assets/group/SIGAPP24-25.jpg",
    "/assets/group/BUCKETLIST24-25.jpg",
    "/assets/group/SIGAPP21-22.png",
  ],
};

export interface WhatWeDoCard {
  title: string;
  bg: string;
  text: string;
  highlight: string;
  body: string;
}

export const whatWeDoContent = {
  title: "What We Do",
  quote:
    "Whether you're an aspiring developer or an experienced coder, SIGAPP is your launchpad for building software with purpose, while gaining real-world experience in a collaborative environment.",
  quoteAuthor: "Tommy Lane, Former SIGAPP President (2022–2024)",
  cards: [
    {
      title: "Real-World Apps",
      bg: "bg-light-green/35 border border-light-green",
      text: "text-dark",
      highlight: "text-dark-green",
      body: "Our projects go beyond class assignments — they solve real problems that our members care about. You'll be building something that you (and others) will actually want to use.",
    },
    {
      title: "Real-World Experience",
      bg: "bg-dark",
      text: "text-white",
      highlight: "text-light-green",
      body: "We model our workflows on those used by top tech companies — think Git, sprints, code reviews — but in a fun, low-pressure setting. You'll learn what it's like to work on a real dev team.",
    },
    {
      title: "Real-World Education",
      bg: "bg-light-green/35 border border-light-green",
      text: "text-dark",
      highlight: "text-dark-green",
      body: "No experience? No problem! We welcome members from all backgrounds and skill levels. Our experienced team will help you ramp up quickly, whether you're learning your first programming language or shipping your first full-stack app.",
    },
  ] satisfies WhatWeDoCard[],
};
