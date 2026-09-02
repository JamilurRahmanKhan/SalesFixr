// Kept in sync with the "What We've Built" case studies on the Services
// page (components/sections/ProjectCarousel.tsx) — same title/description
// per project, so the two sections never contradict each other.
const PROJECT_SEEDS = [
  ['E-commerce', 'AI Support Chatbot', 'An intelligent assistant that answers product questions, tracks orders, and recovers abandoned carts around the clock.', 'Product design · AI engineering · Frontend', '3x faster responses and a 35% lift in conversion, with 24/7 coverage.'],
  ['SaaS', 'Workflow Automation', 'We mapped every manual handoff and replaced it with automated triggers across the stack.', 'Systems design · Automation · Integration', '+40% demo bookings and 3x output after removing the manual handoffs.'],
  ['Creative agency', 'Internal Tooling', 'A custom dashboard that keeps project timelines, assets, and approvals in one place.', 'Product design · Frontend · Systems', '38% faster delivery and 4x productivity with 62% less admin work.'],
  ['B2B sales', 'Custom CRM', 'Replaced three disconnected spreadsheets with one pipeline view synced straight to their inbox and calendar.', 'Product strategy · Frontend · Integration', '+42% more deals closed and five fewer admin hours every week.'],
  ['DTC retail', 'Headless Storefront', 'Rebuilt a sluggish storefront on a headless stack, cutting load times and unlocking checkout customization the old platform blocked.', 'E-commerce architecture · Frontend · Performance', 'Page load time cut 58% with a 21% lift in checkout conversion.'],
  ['Logistics', 'Real-Time Fleet Dashboard', 'Live GPS, delivery status, and driver load in one screen instead of five separate tools dispatch had to check by hand.', 'Data engineering · Real-time systems · Frontend', '3x faster dispatch and 30% fewer missed delivery windows.'],
  ['Healthcare', 'Multi-Clinic Booking', 'Patients book, reschedule, and get reminders automatically, across every location, without front-desk phone tag.', 'Product design · Backend · Automation', '70% fewer no-shows and three extra staff hours freed up daily.'],
  ['Marketplace', 'Multi-Vendor Marketplace', 'Vendor onboarding, payouts, and order routing built from scratch so the founder could focus on recruiting sellers, not code.', 'Full-stack engineering · Payments · Platform', '120+ vendors onboarded and 65% GMV growth in six months.'],
  ['Fitness', 'Coaching App', 'A native mobile app that syncs workout plans, progress photos, and coach messaging in real time across iOS and Android.', 'Mobile engineering · UX · Real-time sync', '+90% weekly active users and a 4.8-star App Store rating.'],
  ['Legal tech', 'Document AI Pipeline', 'OCR and LLM-based extraction turns stacks of contracts into searchable, structured data in minutes instead of associate hours.', 'AI engineering · Document processing · Backend', '85% faster review across 10,000+ documents at 99% accuracy.'],
];

const CATEGORY_COLORS = {
  'E-commerce': 0xcaa36b,
  SaaS: 0x8b9b73,
  'Creative agency': 0xd5d0c1,
  'B2B sales': 0xb67d50,
  'DTC retail': 0xcaa36b,
  Logistics: 0x687883,
  Healthcare: 0xd5d0c1,
  Marketplace: 0xb67d50,
  Fitness: 0x8b9b73,
  'Legal tech': 0x687883,
};

export const PROJECTS = PROJECT_SEEDS.map(([category, title, description, role, outcome], index) => ({
  number: String(index + 1).padStart(2, '0'),
  category,
  title,
  description,
  role,
  outcome,
  color: CATEGORY_COLORS[category],
  curveT: 0.075 + index * (0.82 / 9),
  side: Math.floor(index / 2) % 2 === 0 ? -1 : 1,
  district: Math.floor(index / 2),
}));

export const DISTRICTS = [
  { number: 'I', title: 'Capital', range: '01–02' },
  { number: 'II', title: 'Care', range: '03–04' },
  { number: 'III', title: 'Exchange', range: '05–06' },
  { number: 'IV', title: 'Systems', range: '07–08' },
  { number: 'V', title: 'Intelligence', range: '09–10' },
];

export const COLORS = {
  background: 0x111315,
  ground: 0x5f8145,
  groundDark: 0x3a5230,
  terrain: 0x4c6b38,
  road: 0x303235,
  roadEdge: 0xa99f8f,
  shoulder: 0x6e695f,
  roadMark: 0xe6dcc8,
  orange: 0xdc7431,
  orangeDark: 0xa84c1d,
  cream: 0xf4ead6,
  glass: 0x22272a,
  tree: 0x536435,
  treeLight: 0x71814b,
  trunk: 0x654731,
};

// A long, open route with broad curves rather than a compressed switchback.
export const ROAD_POINTS = [
  [-112, -102], [-102, -88], [-78, -80], [-56, -87], [-36, -78],
  [-26, -58], [-35, -40], [-58, -29], [-74, -10], [-69, 10],
  [-47, 24], [-18, 18], [2, 28], [8, 49], [-7, 66],
  [-31, 72], [-46, 89], [-37, 108], [-13, 118], [13, 111],
  [29, 94], [51, 89], [70, 101], [82, 122], [104, 132],
  [124, 123], [133, 102], [126, 82], [105, 70], [84, 74],
  [70, 60], [74, 40], [95, 28], [117, 15], [124, -7],
  [113, -27], [88, -32], [68, -47], [66, -69], [82, -88],
  [105, -96], [126, -88],
];

export const WORLD_BOUNDS = { minX: -135, maxX: 142, minZ: -116, maxZ: 145 };
