// Global site identity, social links, and shared copy.
// Every value here is plain data — edit strings/links directly, no code changes needed.

export const siteContent = {
  orgName: "Purdue ACM SIGAPP",
  logo: "/assets/logo-icon/logo.png",

  discordUrl: "https://discord.gg/jKTWKYarGE",
  instagramUrl: "https://www.instagram.com/purduesigapp",
  githubUrl: "https://github.com/Purdue-ACM-SIGAPP",
  linkedinUrl: "https://www.linkedin.com/company/purdue-acm-sigapp/",

  bannerMessage:
    "🚀 Build the projects you wish existed. Come join us for fall 2026! We look forward to seeing you! 🤩",

  footerMessage: "Let's build something awesome — together.",
};

// Header nav links. `hash` scrolls to the matching section id on the home page.
export const navLinks: { label: string; hash: string }[] = [
  { label: "About Us", hash: "#about" },
  { label: "Current Officers", hash: "#officer" },
  { label: "Our Projects", hash: "#project" },
];

// Icon assets shared across the hero, footer, and officer/project cards.
export const icons = {
  discord: "/assets/logo-icon/discord.png",
  discordGreen: "/assets/logo-icon/discord_green.png",
  instagram: "/assets/logo-icon/instagram.png",
  instagramGreen: "/assets/logo-icon/instagram_green.png",
  github: "/assets/logo-icon/github.png",
  githubGreen: "/assets/logo-icon/github_green.png",
  linkedin: "/assets/logo-icon/linkedin.png",
  linkedinGreen: "/assets/logo-icon/linkedin_green.png",
  arrow: "/assets/logo-icon/right-arrow.png",
  arrowGreen: "/assets/logo-icon/right-arrow_green.png",
};
