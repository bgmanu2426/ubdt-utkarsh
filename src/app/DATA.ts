const events = [
  {
    id: 1,
    title: "TechnoQuest",
    description:
      "A battle of knowledge where participants tackle challenging questions across various technical domains",
    date: "March 20, 2025",
    venue: "UBDTCE New Building",
    teamSize: "Group of 2",
    image:
      "https://pub-860021a8f6b84064bf1a11e6264b53ed.r2.dev/utkarsh-event-images/techno%20Quest.webp",
    slug: "technoquest",
  },
  {
    id: 2,
    title: "Clash of Minds",
    description:
      "A clash between the minds to argue, analyze, and defend technical concepts with logic and clarity.",
    date: "March 21, 2025",
    venue: "UBDTCE New Building",
    teamSize: "Group of 2",
    image:
      "https://pub-860021a8f6b84064bf1a11e6264b53ed.r2.dev/utkarsh-event-images/debate.webp",
    slug: "clashofminds",
  },
  {
    id: 3,
    title: "Web Weave",
    description:
      "A competition where participants create a dynamic website from scratch to showcase their skills to solve real-world problems.",
    date: "March 20, 2025",
    venue: "UBDTCE New Building",
    teamSize: "Maximum 3",
    image:
      "https://pub-860021a8f6b84064bf1a11e6264b53ed.r2.dev/utkarsh-event-images/web-wave-image.webp",
    slug: "webweave",
  },
  {
    id: 4,
    title: "Startup Simulation",
    description:
      "A strategic event where participants pitch and simulate business models for innovative tech startups.",
    date: "March 21, 2025",
    venue: "UBDTCE New Building",
    teamSize: "Group of 2 or 4",
    image:
      "https://pub-860021a8f6b84064bf1a11e6264b53ed.r2.dev/utkarsh-event-images/startup%20simulation.webp",
    slug: "startupsimulation",
  },
  {
    id: 5,
    title: "Paper Presentation",
    description:
      "A stage to showcase research and ideas through well-structured technical papers and presentations.",
    date: "March 20, 2025",
    venue: "UBDTCE New Building",
    teamSize: "Individual",
    image:
      "https://pub-860021a8f6b84064bf1a11e6264b53ed.r2.dev/utkarsh-event-images/paper%20presentation.webp",
    slug: "paperpresentation",
  },
  {
    id: 6,
    title: "Robo Velocity",
    description:
      "A high-speed competition where autonomous or manually controlled robots navigate challenging tracks",
    date: "March 21, 2025",
    venue: "Mechanical Department",
    teamSize: "Maximum 4",
    image:
      "https://pub-860021a8f6b84064bf1a11e6264b53ed.r2.dev/utkarsh-event-images/robo%20velocity.webp",
    slug: "robovelocity",
  },
  {
    id: 7,
    title: "Desi Dhun",
    description: "Celebrate tradition with an energetic Folk Group Dance",
    date: "March 21, 2025",
    venue: " R and D",
    teamSize: "Maximum 10",
    image:
      "https://pub-860021a8f6b84064bf1a11e6264b53ed.r2.dev/utkarsh-event-images/cultural.webp",
    slug: "desidhun",
  },
  {
    id: 8,
    title: " Faces of Fantasy",
    description: "Show your artistic side in a Face Painting competition",
    date: "March 21, 2025",
    venue: "EEE block quadrangale ",
    teamSize: "Maximum 1",
    image:
      "https://pub-860021a8f6b84064bf1a11e6264b53ed.r2.dev/utkarsh-event-images/cultural6.webp",
    slug: "facesoffantacy",
  },
  {
    id: 9,
    title: "Stage Antics",
    description: "Bring out your creativity in a Group Skit with an open theme",
    date: "March 21, 2025",
    venue: " R and D",
    teamSize: "Maximum 8",
    image:
      "https://pub-860021a8f6b84064bf1a11e6264b53ed.r2.dev/utkarsh-event-images/cultural2.webp",
    slug: "stageantics",
  },
  {
    id: 10,
    title: "Nritya Taranga  ",
    description:
      "Express your grace and passion in Indian Classical Solo Dance",
    date: "March 21, 2025",
    venue: " R and D",
    teamSize: "Maximum 1",
    image:
      "https://pub-860021a8f6b84064bf1a11e6264b53ed.r2.dev/utkarsh-event-images/cultural3.webp",
    slug: "nrityataranga",
  },
  {
    id: 11,
    title: "Sursangam",
    description: "Mesmerize the audience with a Folk Group Song performance.",
    date: "March 21, 2025",
    venue: "D113 Swami Vivekananda Holl",
    teamSize: "Maximum 6",
    image:
      "https://pub-860021a8f6b84064bf1a11e6264b53ed.r2.dev/utkarsh-event-images/cultural4.webp",
    slug: "sursangam",
  },
  {
    id: 12,
    title: "Kavyasangama",
    description: "Express emotions through the art of Poetry",
    date: "March 21, 2025",
    venue: "New Buiding",
    teamSize: "Maximum 2",
    image:
      "https://pub-860021a8f6b84064bf1a11e6264b53ed.r2.dev/utkarsh-event-images/cultural5.webp",
    slug: "kavyasangam",
  },
];

const timeline = [
  {
    date: "March 20, 2025",
    time: "9:00 AM",
    title: "Registration Begins",
    description: "Registration desk opens for all participants",
  },
  {
    date: "March 20, 2025",
    time: "9:30 AM",
    title: "Inauguration Ceremony",
    description: "Official opening of UTKARSH technical fest",
  },
  {
    date: "March 20, 2025",
    time: "10:00 AM",
    title: "TechnoQuest",
    description: "Technical quiz competition begins",
  },
  {
    date: "March 20, 2025",
    time: "12:15 PM",
    title: "Web Weave",
    description: "Web development competition starts",
  },
  {
    date: "March 20, 2025",
    time: "3:15 PM",
    title: "Paper Presentation",
    description: "Technical paper presentations begins",
  },
  {
    date: "March 21, 2025",
    time: "9:00 AM",
    title: "Desi Dhun",
    description: "Celebrate tradition with an energetic Folk Group Dance",
  },
  {
    date: "March 21, 2025",
    time: "9:00 AM",
    title: "Faces of Fantacy",
    description: "Show your artistic side in a Face Painting competition",
  },
  {
    date: "March 21, 2025",
    time: "9:00 AM",
    title: "Nritya Taranga",
    description:
      "Express your grace and passion in Indian Classical Solo Dance",
  },
  {
    date: "March 21, 2025",
    time: "9:00 AM",
    title: "SurSangam",
    description: "Mesmerize the audience with a Folk Group Song performance.",
  },
  {
    date: "March 21, 2025",
    time: "9:00 AM",
    title: "kavyaSangam",
    description: "Express emotions through the art of Poetry",
  },
  {
    date: "March 21, 2025",
    time: "2:00 PM",
    title: "Stage Antics",
    description: "Bring out your creativity in a Group Skit with an open theme",
  },
  {
    date: "March 21, 2025",
    time: "10:00 AM",
    title: "Clash of Minds",
    description: "Debate competition commences",
  },
  {
    date: "March 21, 2025",
    time: "11:00 AM",
    title: "Startup Simulation - Ideation Phase",
    description:
      "Teams begin brainstorming and outlining their startup concepts",
  },
  {
    date: "March 21, 2025",
    time: "1:00 PM",
    title: "Robo Velocity",
    description: "Robotics competition starts",
  },
  {
    date: "March 21, 2025",
    time: "4:00 PM",
    title: "Award Ceremony and Valedictory",
    description: "Winners of all events are announced and awarded",
  },
];

const technoquestCoordinators = [
  {
    name: "Sindhu KR",
    phone: "+918746884530",
    linkedin: "https://www.linkedin.com/in/sindhu-kr-3aabb2341",
  },
  {
    name: "Naveen Sagar T S",
    phone: "+918660859914",
  },
  {
    name: "Chandana T M",
    phone: "+919480286697",
  },
];

const clashofmindsCoordinators = [
  {
    name: "Kavya SN",
    phone: "+919844176304",
    linkedin: "https://www.linkedin.com/in/kavya-s-n-b2a53728b",
  },
  {
    name: "Yogananda R",
    phone: "+916361565338",
  },
  {
    name: "Bhanuprakash MP",
    phone: "+918867554428",
  },
];

const webweaveCoordinators = [
  {
    name: "SNEHA HM",
    phone: "+917899711396",
    linkedin: "https://www.linkedin.com/in/sneha-hanjgimath-0188a0257",
  },
  {
    name: "Ramya R K",
    phone: "+917892465720",
    linkedin: "https://www.linkedin.com/in/ramya-r-k-362630331",
  },
  {
    name: "Siddesh B",
    phone: "+919663436808",
    linkedin: "https://www.linkedin.com/in/bsiddesh/",
  },
];

const startupsimulationCoordinators = [
  {
    name: "RASHMI K S",
    phone: "+918050812814",
    linkedin: "https://www.linkedin.com/in/rashmi-k-s-741a0626a",
  },
  {
    name: "Abhishek Singh",
    phone: "+917080868898",
  },
  {
    name: "Steve M John",
    phone: "+919380663341",
  },
];

const robovelocityCoordinators = [
  {
    name: "Siddesh B",
    phone: "+919663436808",
    linkedin: "https://www.linkedin.com/in/bsiddesh/",
  },
  {
    name: "Vinayak Kubakaddi",
    phone: "+917756015274",
  },
  {
    name: "Banakara Shreenivasa",
    phone: "+919880467849",
  },
];

const paperpresentationCoordinators = [
  {
    name: "Spoorti Ekesh Holiyappanavar",
    phone: "+919380229730",
    linkedin:
      "https://www.linkedin.com/in/spoorti-ekesh-holiyappanavar-ba51262a3",
  },
  {
    name: "Akash DS",
    phone: "+917019883153",
  },
  {
    name: "Kavya V",
    phone: "+918618700679",
  },
];

const desidhunCoordinators = [
  {
    name: "Vinay",
    phone: "+99483288630",
  },
  {
    name: "Akshaya Balaganur",
    phone: "+917899540292",
  },
];

const facesfantacyCoordinators = [
  {
    name: "Vinay J D",
    phone: "+919741435484",
  },
  {
    name: "Charan",
    phone: "+917892273664",
  },
];

const stageanticsCoordinators = [
  {
    name: "Jayanth B Achar",
    phone: "+918277774594",
  },
  {
    name: "Veena V G",
    phone: "+917975544820",
  },
  {
    name: "Keerthi",
    phone: "+919480873933",
  },
];

const nrithyatarangCoordinators = [
  {
    name: "Raksha H M",
    phone: "+919632553828",
  },
  {
    name: "Anusha J M",
    phone: "+918296349139",
  },
  {
    name: "Rachana S",
    phone: "+918073398467",
  },
];

const sursangamCoordinators = [
  {
    name: "Shreenidhi",
    phone: "+91938054791",
  },
  {
    name: "Chandan",
    phone: "+916363645068",
  },
];

const KavyasangamCoordinators = [
  {
    name: "Akash Pattar",
    phone: "+917795631207",
  },
  {
    name: "Madhu",
    phone: "+917411359161",
  },
];

export {
  events,
  timeline,
  technoquestCoordinators,
  clashofmindsCoordinators,
  webweaveCoordinators,
  startupsimulationCoordinators,
  robovelocityCoordinators,
  paperpresentationCoordinators,
  desidhunCoordinators,
  facesfantacyCoordinators,
  stageanticsCoordinators,
  nrithyatarangCoordinators,
  sursangamCoordinators,
  KavyasangamCoordinators,
};
