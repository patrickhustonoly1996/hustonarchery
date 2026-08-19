export const site = {
  name: "Huston Archery",
  person: "Patrick Huston OLY",
  domain: "hustonarchery.com",
  url: "https://hustonarchery.com",
  email: "patrick@hustonarchery.com",
  schoolUrl: "https://levelup-archery.com",
  spine: "The shot is not over when the arrow leaves.",
  description:
    "Coaching and teaching frameworks from Patrick Huston OLY. British Olympic recurve. The shot is not over when the arrow leaves.",
};

export type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

export const primaryNav: NavItem[] = [
  { href: "/frameworks/", label: "Frameworks" },
  { href: "/3d-aiming/", label: "3D Aiming" },
  { href: "/clicker/", label: "Clicker" },
  { href: "/front-arm/", label: "Front arm" },
  { href: "/wind/", label: "Wind" },
  { href: "/foundations/", label: "Foundations" },
  { href: "/coaching/", label: "Coaching" },
  { href: "/contact/", label: "Contact" },
];

export const frameworks = [
  {
    href: "/3d-aiming/",
    number: "01",
    title: "3D Aiming",
    lede: "The first thing, and the return visit. Follow-through is not a pose. It is the last chance to steer the arrow.",
  },
  {
    href: "/clicker/",
    number: "02",
    title: "The clicker",
    lede: "A trigger, not an exam. Every top recurve uses one because it turns execution into a habit instead of a decision.",
  },
  {
    href: "/front-arm/",
    number: "03",
    title: "Front arm",
    lede: "Structure plus intent. The arm stays up when the skeleton and the force agree.",
  },
  {
    href: "/foundations/",
    number: "04",
    title: "The ground",
    lede: "Power does not start in the shoulder. It starts in the feet and arrives in the bow arm.",
  },
  {
    href: "/foundations/",
    number: "05",
    title: "How you learn",
    lede: "Prime the brain, then give it five quiet minutes. New motor patterns need space after the work.",
  },
  {
    href: "/wind/",
    number: "06",
    title: "Wind",
    lede: "After you can send the arrow, learn the air. Mastering yourself only takes you so far.",
  },
] as const;
