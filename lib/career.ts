export type CareerStill = {
  src: string;
  alt: string;
};

export type CareerBeat = {
  year: string;
  place?: string;
  title: string;
  stills?: CareerStill[];
};

/** Official highlights only. No invented places, scores, or missing years. */
export const careerBeats: CareerBeat[] = [
  {
    year: "2011",
    place: "Telford",
    title: "British Junior Indoor Champion",
    stills: [
      {
        src: "/career/junior-2011.jpg",
        alt: "Junior championship field, 2011: tents on the grass and a full line of targets.",
      },
    ],
  },
  {
    year: "2013",
    place: "Wuxi",
    title: "World Cadet Individual gold, and Mixed gold",
  },
  {
    year: "2013",
    place: "Terni",
    title: "European Junior Field gold",
  },
  {
    year: "2015",
    place: "Exmouth",
    title: "Junior world records: 348, and 1334 on the 1440",
  },
  {
    year: "2015",
    place: "Marrakesh",
    title: "Indoor World Cup gold",
  },
  {
    year: "2015",
    place: "Lilleshall",
    title: "British Target Champion",
  },
  {
    year: "2016",
    place: "Rio de Janeiro",
    title: "Olympic Games",
    stills: [
      {
        src: "/career/rio-1.jpg",
        alt: "Patrick Huston at full draw for Great Britain, Rio 2016 Olympic Games.",
      },
      {
        src: "/career/rio-3.jpg",
        alt: "Patrick Huston at full draw in the rain, Rio 2016 Olympic Games.",
      },
    ],
  },
  {
    year: "2016",
    place: "Nottingham",
    title: "European Championships: individual bronze, team silver",
    stills: [
      {
        src: "/career/hq-portrait.jpg",
        alt: "Official 2016 portrait of Patrick Huston in Team GB kit.",
      },
    ],
  },
  {
    year: "2017",
    place: "Mexico City",
    title: "World Championships mixed bronze",
    stills: [
      {
        src: "/career/action-2017.jpg",
        alt: "Archery, May 2017.",
      },
    ],
  },
  {
    year: "2017",
    title: "British Indoor Champion",
  },
  {
    year: "2018",
    place: "Lilleshall",
    title: "British 70-metre record, 687",
    stills: [
      {
        src: "/career/action-2018.jpg",
        alt: "Patrick Huston in Team GB kit, June 2018.",
      },
    ],
  },
  {
    year: "2019",
    place: "Minsk",
    title: "European Games mixed silver",
  },
  {
    year: "2021",
    place: "Tokyo",
    title: "Olympic Games",
  },
  {
    year: "2021",
    title: "British Field Champion",
  },
  {
    year: "2022",
    place: "Yankton",
    title: "World Field bronze",
  },
  {
    year: "2022",
    title: "British Field Champion",
  },
  {
    year: "2025",
    place: "Chengdu",
    title: "World Games field silver",
  },
  {
    year: "2026",
    place: "Lilleshall",
    title: "British Target Champion, and National Tour Stage 6 the same weekend",
  },
];
