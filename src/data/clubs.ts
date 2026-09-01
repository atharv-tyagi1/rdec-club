export type ClubId =
  | "mehfil"
  | "velocity"
  | "hottake"
  | "nexora"
  | "sukham"
  | "spotlight"
  | "placement-cell";

export type Motif =
  | "arches"
  | "speed"
  | "halftone"
  | "circuit"
  | "leaves"
  | "rays"
  | "steps";

export interface Leader {
  role: string;
  name: string;
  note: string;
}

export interface ClubEvent {
  dateISO: string;
  dateLabel: string;
  title: string;
  venue: string;
  note?: string;
}

export interface Achievement {
  year: string;
  text: string;
}

export interface GalleryItem {
  src?: string;
  caption: string;
  span?: "hero" | "wide" | "tall" | "std";
}

export interface Club {
  id: ClubId;
  no: number;
  name: string;
  italicWord: string; // word rendered italic in display settings
  category: string;
  tagline: string;
  summary: string;
  founded: number;
  meets: string;
  room: string;
  email: string;
  accent: string;
  accentDeep: string;
  accentSoft: string;
  onAccent: string;
  motif: Motif;
  motion: { dur: number; ease: number[] };
  about: string[];
  pullQuote: string;
  mission: string;
  vision: string;
  closing: string;
  leadership: Leader[];
  achievements: Achievement[];
  upcoming: ClubEvent[];
  past: ClubEvent[];
  gallery: GalleryItem[];
}

/* ------------------------------------------------------------------ */
/*  Image map — swap these URLs for real club photography later.       */
/* ------------------------------------------------------------------ */
export const IMG = {
  campus:
    "https://image.qwenlm.ai/generated-images/f5ef6c47-8d31-41f0-848c-fe24d450410b/_result.png",
  mehfil:
    "https://image.qwenlm.ai/generated-images/78953440-d377-4ccf-9f76-5b1fa9557b2e/_result.png",
  velocity:
    "https://image.qwenlm.ai/generated-images/65b205af-97f2-4ebc-aded-44eed08e9487/_result.png",
  hottake:
    "https://image.qwenlm.ai/generated-images/e19b8234-c474-48f8-8326-0925331363e6/_result.png",
  nexora:
    "https://image.qwenlm.ai/generated-images/44149604-6bde-4267-8d54-ed543f10b330/_result.png",
  sukham:
    "https://image.qwenlm.ai/generated-images/2ef6d351-82a3-41df-9bdc-07420023f61a/_result.png",
  spotlight:
    "https://image.qwenlm.ai/generated-images/fe37e05b-71dd-4a25-b2b2-1966544d6d50/_result.png",
  placement:
    "https://image.qwenlm.ai/generated-images/b53d9688-ec96-4dcc-9adf-1440dd07ff45/_result.png",
};

const EASE_SHARP = [0.22, 0.9, 0.3, 1];
const EASE_GENTLE = [0.45, 0.05, 0.15, 1];
const EASE_MECH = [0.6, 0, 0.2, 1];

export const CLUBS: Club[] = [
  /* ------------------------------------------------ MEHFIL */
  {
    id: "mehfil",
    no: 1,
    name: "MEHFIL",
    italicWord: "MEHFIL",
    category: "Cultural Society",
    tagline: "An evening of poetry, music and everything unsaid.",
    summary:
      "The cultural society of RDEC — open mics, ghazal nights, theatre and the annual cultural evening that shuts down the main courtyard.",
    founded: 2016,
    meets: "Fridays · 5 PM",
    room: "Studio 3, Arts Block",
    email: "mehfil@rdec.ac.in",
    accent: "#c4456b",
    accentDeep: "#992e52",
    accentSoft: "#f6e4ea",
    onAccent: "#fdf6f0",
    motif: "arches",
    motion: { dur: 900, ease: EASE_GENTLE },
    about: [
      "Mehfil began in 2016 as twelve students, one borrowed microphone and a dare: hold a poetry evening in a college that only hosted tech fests. The first sitting spilled from Studio 3 into the corridor. Nobody left early.",
      "Today the society runs open mics every fortnight, a winter ghazal night, a street-play squad that performs at orientation, and the flagship annual mehfil — a full courtyard evening of music, spoken word and theatre lit by marigold and lamp-light.",
      "There are no auditions to belong. You belong the first time you hold the mic, clap the beat, or stay back to fold the chairs.",
    ],
    pullQuote:
      "A mehfil is not a stage. It is a circle, and the circle is always open.",
    mission:
      "To keep a permanent, unjudged stage on campus where any RDECian can perform, listen, and be heard.",
    vision:
      "A campus where culture is not an annual event but a weekly habit — where the arts sit comfortably beside the labs.",
    closing: "the story is yours now",
    leadership: [
      { role: "President", name: "Aarohi Sharma", note: "III yr · Civil Engg." },
      { role: "Vice President", name: "Kabir Malhotra", note: "III yr · CSE" },
      {
        role: "Faculty Mentor",
        name: "Prof. Vandana Bhatt",
        note: "Dept. of Humanities",
      },
    ],
    achievements: [
      {
        year: "2025",
        text: "Best Cultural Society — Inter-College Youth Fest, ABES Circle.",
      },
      {
        year: "2024",
        text: "Street-play squad placed 2nd at the Ghaziabad Nukkad Natak Utsav.",
      },
      {
        year: "2023",
        text: "Annual Mehfil crossed 900 attendees — the largest evening in college history.",
      },
    ],
    upcoming: [
      {
        dateISO: "2026-02-21",
        dateLabel: "Feb 21",
        title: "Open Mic — Valentine's Cut",
        venue: "Studio 3, Arts Block",
      },
      {
        dateISO: "2026-03-07",
        dateLabel: "Mar 07",
        title: "Annual Mehfil '26 — Shab-e-Raag",
        venue: "Main Courtyard",
      },
    ],
    past: [
      {
        dateISO: "2025-11-14",
        dateLabel: "Nov 14",
        title: "Diwali Mehfil — Diye & Dohas",
        venue: "Main Courtyard",
      },
      {
        dateISO: "2025-09-05",
        dateLabel: "Sep 05",
        title: "Freshers' Open Mic",
        venue: "Seminar Hall A",
      },
      {
        dateISO: "2025-08-15",
        dateLabel: "Aug 15",
        title: "Azadi Ka Nukkad — street play",
        venue: "College Gate Lawn",
      },
    ],
    gallery: [
      { src: IMG.mehfil, caption: "Shab-e-Raag, main stage", span: "hero" },
      { caption: "Ghazal night — Studio 3", span: "std" },
      { caption: "Backstage, Annual Mehfil '25", span: "std" },
      { caption: "Street-play squad, orientation", span: "wide" },
      { caption: "The mic that started it, 2016", span: "std" },
      { caption: "Marigold run, courtyard", span: "tall" },
    ],
  },

  /* --------------------------------------------- VELOCITY */
  {
    id: "velocity",
    no: 2,
    name: "VELOCITY",
    italicWord: "VELOCITY",
    category: "Sports & Athletics",
    tagline: "First whistle at 6 AM. Everything else is warm-up.",
    summary:
      "The sports club of RDEC — track, cricket, badminton and the inter-year league that turns hostel corridors into commentaries.",
    founded: 2015,
    meets: "Mon / Wed / Sat · 6 AM",
    room: "Athletics Track, Gym Block",
    email: "velocity@rdec.ac.in",
    accent: "#e04e2a",
    accentDeep: "#b23a1d",
    accentSoft: "#fae7e0",
    onAccent: "#fdf6f0",
    motif: "speed",
    motion: { dur: 550, ease: EASE_SHARP },
    about: [
      "Velocity is the oldest student flag on campus, raised in 2015 around a simple belief: an engineering college that only studies is running on one leg. The club opened with a dusty track, two footballs and a morning drill that four people attended. The drill never stopped.",
      "The club now runs the inter-year Velocity League across five sports, the annual sports meet, evening fitness hours, and the 6 AM track squad that has become a campus institution of its own.",
      "You don't need to be fast to join. You need to show up. The speed comes later — it always does.",
    ],
    pullQuote: "Nobody remembers the warm-up. But everybody needed it.",
    mission:
      "To make sport a daily, open-door habit at RDEC — from first-year joggers to final-year finishers.",
    vision:
      "Every RDECian graduates having represented their year, their hostel or their club at least once.",
    closing: "the track is waiting",
    leadership: [
      { role: "President", name: "Arjun Rathi", note: "III yr · Mechanical" },
      { role: "Vice President", name: "Sanya Chauhan", note: "III yr · ECE" },
      {
        role: "Faculty Mentor",
        name: "Prof. Deepak Tyagi",
        note: "Physical Education",
      },
    ],
    achievements: [
      {
        year: "2025",
        text: "Velocity League crossed 400 registered players across five sports.",
      },
      {
        year: "2024",
        text: "RDEC cricket XI won the Ghaziabad Inter-College T20 title.",
      },
      {
        year: "2023",
        text: "Two sprinters selected for the UP State University Trials.",
      },
    ],
    upcoming: [
      {
        dateISO: "2026-02-09",
        dateLabel: "Feb 09",
        title: "Velocity League — Knockout Week",
        venue: "Main Ground",
      },
      {
        dateISO: "2026-03-14",
        dateLabel: "Mar 14",
        title: "Annual Sports Meet '26",
        venue: "Athletics Track",
      },
    ],
    past: [
      {
        dateISO: "2025-12-20",
        dateLabel: "Dec 20",
        title: "Winter 5K — Campus Run",
        venue: "College Perimeter Road",
      },
      {
        dateISO: "2025-10-02",
        dateLabel: "Oct 02",
        title: "Inter-Year Cricket Final",
        venue: "Main Ground",
      },
      {
        dateISO: "2025-08-29",
        dateLabel: "Aug 29",
        title: "Freshers' Fitness Test",
        venue: "Gym Block",
      },
    ],
    gallery: [
      { src: IMG.velocity, caption: "400m heats, dusk session", span: "hero" },
      { caption: "League night, floodlights", span: "std" },
      { caption: "The 6 AM squad", span: "tall" },
      { caption: "Winter 5K start line", span: "wide" },
      { caption: "T20 final, last over", span: "std" },
      { caption: "Gym block, monsoon drills", span: "std" },
    ],
  },

  /* ---------------------------------------------- HOTTAKE */
  {
    id: "hottake",
    no: 3,
    name: "HOTTAKE",
    italicWord: "HOTTAKE",
    category: "Debate & Editorial",
    tagline: "Say it. Back it. Take the heat.",
    summary:
      "The debate and editorial club — weekly spars, the campus newsletter, and the annual House Debate that fills Seminar Hall B to the stairs.",
    founded: 2018,
    meets: "Tuesdays · 4 PM",
    room: "Seminar Hall B",
    email: "hottake@rdec.ac.in",
    accent: "#2f54c9",
    accentDeep: "#233f97",
    accentSoft: "#e5eaf8",
    onAccent: "#f4f6fd",
    motif: "halftone",
    motion: { dur: 700, ease: EASE_MECH },
    about: [
      "Hottake was founded on a notice-board argument. Two students disagreed in print, the board ran out of space, and a professor suggested they settle it on a stage instead. The club has been settling things on stages — and in print — ever since.",
      "Every Tuesday the club holds a structured spar: a motion, two houses, four minutes each, and a verdict from the floor. Alongside, the editorial wing publishes The Take, a monthly campus newsletter written, edited and argued over entirely by students.",
      "Hottake does not ask you to agree. It asks you to have a position, and to defend it with more than volume.",
    ],
    pullQuote: "The loudest voice rarely wins here. The sharpest one does.",
    mission:
      "To train every member to think in arguments, write with intent, and disagree without damage.",
    vision:
      "A campus where the quality of a debate is measured by what changes afterwards — not by who clapped.",
    closing: "your turn at the podium",
    leadership: [
      { role: "President", name: "Ishaan Verma", note: "III yr · CSE" },
      { role: "Vice President", name: "Mehak Qureshi", note: "III yr · IT" },
      {
        role: "Faculty Mentor",
        name: "Prof. Rachna Sethi",
        note: "Dept. of English",
      },
    ],
    achievements: [
      {
        year: "2025",
        text: "Hottake duo reached the semi-finals of the North Zone Inter-College Debate.",
      },
      {
        year: "2024",
        text: "The Take newsletter crossed 1,000 campus subscribers.",
      },
      {
        year: "2024",
        text: "Hosted the first Open House Debate with three neighbouring colleges.",
      },
    ],
    upcoming: [
      {
        dateISO: "2026-02-17",
        dateLabel: "Feb 17",
        title: "Tuesday Spar — Motion No. 84",
        venue: "Seminar Hall B",
      },
      {
        dateISO: "2026-03-21",
        dateLabel: "Mar 21",
        title: "The House Debate '26",
        venue: "Seminar Hall B",
      },
    ],
    past: [
      {
        dateISO: "2025-11-25",
        dateLabel: "Nov 25",
        title: "Motion No. 81 — 'AI writes better essays'",
        venue: "Seminar Hall B",
      },
      {
        dateISO: "2025-10-14",
        dateLabel: "Oct 14",
        title: "The Take — Issue 22 launch",
        venue: "Library Lawn",
      },
      {
        dateISO: "2025-09-02",
        dateLabel: "Sep 02",
        title: "Freshers' Floor Test",
        venue: "Seminar Hall B",
      },
    ],
    gallery: [
      { src: IMG.hottake, caption: "House Debate '25, opening statement", span: "hero" },
      { caption: "Tuesday spar, motion board", span: "std" },
      { caption: "The Take — issue night", span: "wide" },
      { caption: "Rebuttal notes, close-up", span: "std" },
      { caption: "Verdict from the floor", span: "tall" },
      { caption: "The notice board that started it", span: "std" },
    ],
  },

  /* ----------------------------------------------- NEXORA */
  {
    id: "nexora",
    no: 4,
    name: "NEXORA",
    italicWord: "NEXORA",
    category: "Tech & Innovation",
    tagline: "Build the thing. Break the thing. Ship the thing.",
    summary:
      "The tech and innovation hub — robotics, hackathons, build nights and the innovation lab where half the campus projects quietly begin.",
    founded: 2019,
    meets: "Saturdays · 2 PM",
    room: "Innovation Lab, E-Block",
    email: "nexora@rdec.ac.in",
    accent: "#0e9ba5",
    accentDeep: "#0b6e76",
    accentSoft: "#dff1f2",
    onAccent: "#f0fbfc",
    motif: "circuit",
    motion: { dur: 620, ease: EASE_MECH },
    about: [
      "Nexora started as a weekend robotics circle sharing one soldering iron. The circle had a rule: nobody reads theory for more than twenty minutes before something has to be built. The rule survives. The soldering irons now number eleven.",
      "The club runs the E-Block Innovation Lab, hosts RDEC's biannual hackathon HexBuild, organises monthly build nights, and fields teams for national robotics and drone challenges. Most final-year projects on campus pass through this lab at least once.",
      "Nexora is open to every branch and every year. Curiosity is the only prerequisite; the lab teaches the rest.",
    ],
    pullQuote: "Theory is twenty minutes. After that, the iron gets hot.",
    mission:
      "To give every student a bench, a budget line and a deadline — the three things that turn ideas into hardware.",
    vision:
      "An RDEC where the distance between a first-year's sketch and a working prototype is one Saturday.",
    closing: "the lab lights are on",
    leadership: [
      { role: "President", name: "Aditya Kulkarni", note: "III yr · ECE" },
      { role: "Vice President", name: "Prisha Nair", note: "III yr · CSE" },
      {
        role: "Faculty Mentor",
        name: "Prof. Manish Agarwal",
        note: "Dept. of ECE",
      },
    ],
    achievements: [
      {
        year: "2025",
        text: "HexBuild '25 drew 60 teams and 3 working drones built in 36 hours.",
      },
      {
        year: "2024",
        text: "Nexora bot reached the national quarter-finals of RoboRally India.",
      },
      {
        year: "2024",
        text: "Innovation Lab funded 14 student prototypes under the seed-bench scheme.",
      },
    ],
    upcoming: [
      {
        dateISO: "2026-02-28",
        dateLabel: "Feb 28",
        title: "Build Night — Line-follower clinic",
        venue: "Innovation Lab, E-Block",
      },
      {
        dateISO: "2026-03-28",
        dateLabel: "Mar 28",
        title: "HexBuild '26 — 36-hour hackathon",
        venue: "E-Block Atrium",
      },
    ],
    past: [
      {
        dateISO: "2025-12-06",
        dateLabel: "Dec 06",
        title: "Drone Day — flight trials",
        venue: "Main Ground",
      },
      {
        dateISO: "2025-10-25",
        dateLabel: "Oct 25",
        title: "HexBuild '25 — finals night",
        venue: "E-Block Atrium",
      },
      {
        dateISO: "2025-08-16",
        dateLabel: "Aug 16",
        title: "Freshers' Solder Bootcamp",
        venue: "Innovation Lab",
      },
    ],
    gallery: [
      { src: IMG.nexora, caption: "HexBuild '25, hour 30", span: "hero" },
      { caption: "Bench 4 — rover assembly", span: "std" },
      { caption: "Drone Day, flight line", span: "wide" },
      { caption: "Oscilloscope confessionals", span: "std" },
      { caption: "The eleven soldering irons", span: "tall" },
      { caption: "Prototype wall, E-Block", span: "std" },
    ],
  },

  /* ----------------------------------------------- SUKHAM */
  {
    id: "sukham",
    no: 5,
    name: "SUKHAM",
    italicWord: "SUKHAM",
    category: "Wellbeing & Social",
    tagline: "Sukham — the Sanskrit for being well. We take it literally.",
    summary:
      "The wellbeing and social club — sunrise yoga circles, peer support, blood donation drives and the quiet rooms that make a loud campus livable.",
    founded: 2021,
    meets: "Wednesdays · 5 PM",
    room: "Wellness Room, Admin 1F",
    email: "sukham@rdec.ac.in",
    accent: "#5f8c46",
    accentDeep: "#44652f",
    accentSoft: "#e9f0e0",
    onAccent: "#f6fbf0",
    motif: "leaves",
    motion: { dur: 1000, ease: EASE_GENTLE },
    about: [
      "Sukham was founded in 2021, in a year when the campus had been empty for too long and everyone returned carrying something heavy. A small group began meeting on the lawn at sunrise — no agenda except breathing together. The circle grew wider every week.",
      "The club now runs sunrise yoga and meditation circles, a trained peer-listener programme, monthly de-stress evenings before exams, and the campus blood donation and winter-clothing drives.",
      "Sukham is the quietest flag on campus, and deliberately so. Not every club needs a stage. Some need a mat, a chair, and someone who listens first.",
    ],
    pullQuote: "You cannot pour from an empty flask. We keep the flasks full.",
    mission:
      "To make mental and physical wellbeing a visible, unstigmatised part of college life.",
    vision:
      "An RDEC where asking for help is as ordinary as asking for notes.",
    closing: "the circle has room",
    leadership: [
      { role: "President", name: "Ananya Iyer", note: "III yr · Biotech" },
      { role: "Vice President", name: "Rohan Gupta", note: "III yr · Mechanical" },
      {
        role: "Faculty Mentor",
        name: "Prof. Sunita Rao",
        note: "Dept. of Applied Sciences",
      },
    ],
    achievements: [
      {
        year: "2025",
        text: "Peer-listener programme trained 40 students with the college counsellor.",
      },
      {
        year: "2025",
        text: "Blood donation drive collected 120 units with the district blood bank.",
      },
      {
        year: "2024",
        text: "Sunrise circle completed 100 consecutive Wednesdays on the lawn.",
      },
    ],
    upcoming: [
      {
        dateISO: "2026-02-11",
        dateLabel: "Feb 11",
        title: "Sunrise Circle — Neem Lawn",
        venue: "Neem Lawn",
      },
      {
        dateISO: "2026-03-04",
        dateLabel: "Mar 04",
        title: "Pre-Exam De-Stress Evening",
        venue: "Wellness Room",
      },
    ],
    past: [
      {
        dateISO: "2025-12-13",
        dateLabel: "Dec 13",
        title: "Winter Clothing Drive — packing day",
        venue: "Admin Block Lawn",
      },
      {
        dateISO: "2025-11-01",
        dateLabel: "Nov 01",
        title: "Blood Donation Drive '25",
        venue: "Seminar Hall A",
      },
      {
        dateISO: "2025-09-21",
        dateLabel: "Sep 21",
        title: "Freshers' Grounding Session",
        venue: "Neem Lawn",
      },
    ],
    gallery: [
      { src: IMG.sukham, caption: "Sunrise circle, neem lawn", span: "hero" },
      { caption: "Peer-listener training", span: "std" },
      { caption: "De-stress evening, diwali week", span: "wide" },
      { caption: "Blood drive, Seminar Hall A", span: "std" },
      { caption: "The quiet room, Admin 1F", span: "tall" },
      { caption: "Winter drive, packed and ready", span: "std" },
    ],
  },

  /* -------------------------------------------- SPOTLIGHT */
  {
    id: "spotlight",
    no: 6,
    name: "SPOTLIGHT",
    italicWord: "SPOTLIGHT",
    category: "Media & Creative",
    tagline: "If it happened on campus, we were behind the lens.",
    summary:
      "The media club — campus journalism, photography, film and the crew that turns every fest, match and mehfil into something you rewatch.",
    founded: 2017,
    meets: "Thursdays · 5 PM",
    room: "Media Studio, C-Block",
    email: "spotlight@rdec.ac.in",
    accent: "#e3a422",
    accentDeep: "#8f6608",
    accentSoft: "#f9efdb",
    onAccent: "#221d10",
    motif: "rays",
    motion: { dur: 750, ease: EASE_SHARP },
    about: [
      "Spotlight began with one college camera that lived in a cupboard in the ECE department and a queue of students who wanted to hold it. The queue formalised into a club; the cupboard became a studio.",
      "The club covers every major campus event — photography, aftermovies and live updates — publishes the annual yearbook, runs weekend film and editing workshops, and operates the college's official social channels.",
      "Spotlight members learn the whole chain: pitch, shoot, cut, publish. The byline is real, the deadlines are real, and so is the archive the club keeps of every year since 2017.",
    ],
    pullQuote: "Campus forgets by Friday. We don't let it.",
    mission:
      "To document RDEC honestly and teach the craft of storytelling to anyone willing to carry a boom mic.",
    vision:
      "Every year of RDEC life preserved, and every student free to tell the next one.",
    closing: "roll camera",
    leadership: [
      { role: "President", name: "Devansh Khanna", note: "III yr · ECE" },
      { role: "Vice President", name: "Tanvi Menon", note: "III yr · CSE" },
      {
        role: "Faculty Mentor",
        name: "Prof. Karan Bedi",
        note: "Dept. of ECE",
      },
    ],
    achievements: [
      {
        year: "2025",
        text: "Annual yearbook 'Frame 25' printed in full colour for the first time.",
      },
      {
        year: "2024",
        text: "Fest aftermovie crossed 50K views — the most-watched campus video ever.",
      },
      {
        year: "2024",
        text: "Photo walk series featured in a Delhi student-photography showcase.",
      },
    ],
    upcoming: [
      {
        dateISO: "2026-02-14",
        dateLabel: "Feb 14",
        title: "Photo Walk — Old Delhi gate",
        venue: "Meet at College Gate",
      },
      {
        dateISO: "2026-03-10",
        dateLabel: "Mar 10",
        title: "Film & Edit Weekend — Batch 6",
        venue: "Media Studio, C-Block",
      },
    ],
    past: [
      {
        dateISO: "2025-11-28",
        dateLabel: "Nov 28",
        title: "Fest Coverage — 3 days, 2,400 frames",
        venue: "All campus",
      },
      {
        dateISO: "2025-10-08",
        dateLabel: "Oct 08",
        title: "Yearbook shoot — batch portraits",
        venue: "Main Courtyard",
      },
      {
        dateISO: "2025-08-22",
        dateLabel: "Aug 22",
        title: "Orientation aftermovie release",
        venue: "Online",
      },
    ],
    gallery: [
      { src: IMG.spotlight, caption: "Fest night, camera rig", span: "hero" },
      { caption: "Boom mic, courtyard interviews", span: "std" },
      { caption: "Frame 25 — cover shoot", span: "std" },
      { caption: "Edit bay, 2 AM", span: "wide" },
      { caption: "The cupboard camera, 2017", span: "tall" },
      { caption: "Photo walk, winter light", span: "std" },
    ],
  },

  /* -------------------------------------- PLACEMENT CELL */
  {
    id: "placement-cell",
    no: 7,
    name: "PLACEMENT CELL",
    italicWord: "CELL",
    category: "Careers & Training",
    tagline: "Where preparation meets opportunity — on schedule.",
    summary:
      "The student-run arm of Training & Placement — mock interviews, aptitude sprints, recruiter visits and the season that decides the year.",
    founded: 2012,
    meets: "Weekdays · 10 AM – 4 PM",
    room: "T&P Suite, Admin 2F",
    email: "placements@rdec.ac.in",
    accent: "#3a5a73",
    accentDeep: "#2b4459",
    accentSoft: "#e5edf2",
    onAccent: "#f2f7fa",
    motif: "steps",
    motion: { dur: 700, ease: EASE_MECH },
    about: [
      "The Placement Cell predates the club system itself — it has run from the Admin Block since 2012, and in 2026 it formally joins the student clubs as the seventh flag, with a student convener leading the crew for the first time.",
      "The Cell coordinates the placement season end to end: pre-placement talks, aptitude and coding sprints, group-discussion practice, mock interviews with alumni, and the recruiter calendar itself. Final years live by its notice board from August to March.",
      "Its newest work is for younger students too — CV clinics from second year, internship pipelines, and a soft-skills track that runs alongside every other club on campus.",
    ],
    pullQuote: "Offers are not luck. They are Tuesdays, repeated until March.",
    mission:
      "To prepare every student — not just the toppers — for the room where the questions are asked.",
    vision:
      "An RDEC where no student walks into an interview having never practised one.",
    closing: "your seat is scheduled",
    leadership: [
      { role: "Student Convener", name: "Nikhil Bansal", note: "IV yr · CSE" },
      { role: "Deputy Convener", name: "Sara Siddiqui", note: "IV yr · IT" },
      {
        role: "T&P Officer (Mentor)",
        name: "Prof. Rajeev Chandra",
        note: "Training & Placement",
      },
    ],
    achievements: [
      {
        year: "2025",
        text: "Season 2025 closed with offers across 40+ recruiting partners.",
      },
      {
        year: "2025",
        text: "Mock-interview programme ran 300+ alumni-led sessions.",
      },
      {
        year: "2024",
        text: "Aptitude sprints adopted college-wide from second year onwards.",
      },
    ],
    upcoming: [
      {
        dateISO: "2026-02-12",
        dateLabel: "Feb 12",
        title: "Aptitude Sprint — Week 6",
        venue: "Block D, Rooms 204–209",
      },
      {
        dateISO: "2026-03-02",
        dateLabel: "Mar 02",
        title: "Mock Interview Week — Alumni Panel",
        venue: "T&P Suite, Admin 2F",
      },
    ],
    past: [
      {
        dateISO: "2025-11-19",
        dateLabel: "Nov 19",
        title: "Pre-Placement Talk — Core Series",
        venue: "Seminar Hall A",
      },
      {
        dateISO: "2025-10-27",
        dateLabel: "Oct 27",
        title: "CV Clinic — Batch of 2027",
        venue: "T&P Suite",
      },
      {
        dateISO: "2025-08-18",
        dateLabel: "Aug 18",
        title: "Season Kick-off — Notice Board Day",
        venue: "Admin Block Lawn",
      },
    ],
    gallery: [
      { src: IMG.placement, caption: "Mock interview, alumni panel", span: "hero" },
      { caption: "Notice board, Admin lawn", span: "std" },
      { caption: "Aptitude sprint, Block D", span: "wide" },
      { caption: "PPT day, Seminar Hall A", span: "std" },
      { caption: "CV clinic queue", span: "tall" },
      { caption: "Offer day, corridor outside T&P", span: "std" },
    ],
  },
];

export const getClub = (id: string | undefined) =>
  CLUBS.find((c) => c.id === id);

export const nextClub = (id: ClubId) => {
  const i = CLUBS.findIndex((c) => c.id === id);
  return CLUBS[(i + 1) % CLUBS.length];
};

/** All upcoming events across clubs, soonest first. */
export const calendarUpcoming = () =>
  CLUBS.flatMap((club) => club.upcoming.map((e) => ({ ...e, club }))).sort(
    (a, b) => a.dateISO.localeCompare(b.dateISO)
  );
