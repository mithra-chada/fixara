// Fixara Design Tokens

export const colors = {
  primary: '#0066CC',
  primaryFocus: '#0071E3',
  primaryDark: '#2997FF',
  ink: '#1D1D1F',
  canvas: '#FBFBFD',
  parchment: '#F5F5F7',
  pearl: '#FAFAFC',
  tileDark: '#1C1C1E',
  tileDark2: '#2A2A2C',
  surfaceBlack: '#000000',
  mutedBody: '#CCCCCC',
  ink80: '#333333',
  ink48: '#7A7A7A',
  hairline: '#E0E0E0',
  divider: '#F0F0F0',
} as const;

export const typography = {
  hero: '56px',
  heroWeight: 600,
  heroLineHeight: 1.07,
  heroLetterSpacing: '-0.28px',
  tileHeadline: '40px',
  tileHeadlineWeight: 600,
  tileHeadlineLineHeight: 1.10,
  sectionHead: '34px',
  sectionHeadWeight: 600,
  sectionHeadLineHeight: 1.47,
  sectionHeadLetterSpacing: '-0.374px',
  lead: '28px',
  leadWeight: 400,
  leadLineHeight: 1.14,
  tagline: '21px',
  taglineWeight: 600,
  taglineLineHeight: 1.19,
  body: '17px',
  bodyWeight: 400,
  bodyLineHeight: 1.47,
  bodyLetterSpacing: '-0.374px',
  bodyStrong: 600,
  caption: '14px',
  captionWeight: 400,
  captionLetterSpacing: '-0.224px',
  nav: '12px',
  navWeight: 400,
  navLetterSpacing: '-0.12px',
} as const;

export const spacing = {
  navHeight: 44,
  subNavHeight: 52,
  sectionPadY: 80,
  sectionPadYMobile: 48,
} as const;

export const shadows = {
  product: 'rgba(0,0,0,0.22) 3px 5px 30px 0px',
} as const;

// Categories data for reuse across pages
export const categoriesData = [
  {
    category: 'Precision Engineering',
    title: 'CNC & Precision Machines',
    src: 'https://images.unsplash.com/photo-1565793979728-5571e4b6b3a8?q=80&w=800',
    skills: ['CNC Lathe Repair','VMC Maintenance','HMC Servicing','Spindle Repair','Ball Screw Replacement','Controller Faults'],
    description: 'Expert technicians for CNC machining centres, lathes, and milling machines.',
  },
  {
    category: 'Electrical',
    title: 'Electrical & Wiring',
    src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800',
    skills: ['Motor Rewinding','Panel Wiring','PLC Programming','VFD Faults','Transformer Repair','Industrial Lighting'],
    description: 'Motor rewinds to PLC faults — every industrial electrical requirement.',
  },
  {
    category: 'Hydraulics',
    title: 'Hydraulics & Pneumatics',
    src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800',
    skills: ['Cylinder Repair','Valve Replacement','Compressor Service','Hydraulic Pump','Pressure Testing','Pneumatic Lines'],
    description: 'Cylinder leaks, valve failures, compressor faults — restored fast.',
  },
  {
    category: 'Fabrication',
    title: 'Welding & Fabrication',
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800',
    skills: ['MIG Welding','TIG Welding','Arc Welding','Structural Fabrication','Sheet Metal Work','Gas Cutting'],
    description: 'Certified welders for MIG, TIG, arc, and structural fabrication.',
  },
  {
    category: 'Material Handling',
    title: 'Conveyors & Hoists',
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800',
    skills: ['Belt Conveyor Repair','Chain Conveyor','EOT Crane Service','Forklift Repair','Hoist Maintenance','Pallet Racking'],
    description: 'Keep your material flow uninterrupted.',
  },
  {
    category: 'Food Processing',
    title: 'Food Processing Equipment',
    src: 'https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=800',
    skills: ['Mixer Repair','Filling Machines','Packaging Lines','Cold Storage','Conveyor Belts','Sealing Machines'],
    description: 'Hygiene-certified technicians for food manufacturing units.',
  },
  {
    category: 'Textile',
    title: 'Textile Machinery',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800',
    skills: ['Loom Repair','Knitting Frames','Winding Machines','Warping Machines','Dyeing Equipment','Stenter Repair'],
    description: 'Specialists in loom repair and textile plant maintenance.',
  },
  {
    category: 'General',
    title: 'General Maintenance',
    src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800',
    skills: ['Industrial Plumbing','Civil Repairs','Carpentry','Painting','False Ceiling','General Upkeep'],
    description: 'Plumbing, civil, carpentry for your manufacturing facility.',
  },
  {
    category: 'Compressors',
    title: 'Air Compressors & Pumps',
    src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800',
    skills: ['Screw Compressor','Reciprocating Pump','Vacuum Pump','Air Dryer','Pressure Valve','Blower Repair'],
    description: 'Screw compressors, reciprocating compressors, vacuum pumps.',
  },
  {
    category: 'Refrigeration',
    title: 'Industrial Refrigeration',
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e9e2d3?q=80&w=800',
    skills: ['Cold Room Repair','Chiller Service','HVAC Maintenance','Refrigerant Refill','Condenser Cleaning','Thermostat Faults'],
    description: 'Cold room maintenance, chiller servicing, industrial HVAC.',
  },
  {
    category: 'Instrumentation',
    title: 'Instrumentation & Control',
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800',
    skills: ['Sensor Calibration','Flow Meter Repair','Pressure Gauges','SCADA Faults','DCS Systems','HMI Repair'],
    description: 'Calibration and repair of industrial sensors and control systems.',
  },
  {
    category: 'Pumps',
    title: 'Pumps & Industrial Piping',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800',
    skills: ['Centrifugal Pumps','Submersible Pumps','Pipe Fitting','Valve Replacement','Pipeline Testing','Water Treatment'],
    description: 'Pump repairs, pipe laying, and industrial plumbing.',
  },
  {
    category: 'Generators',
    title: 'Generators & DG Sets',
    src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800',
    skills: ['DG Set Service','AMF Panel','AVR Repair','Alternator Winding','Fuel System','Load Testing'],
    description: 'Diesel generator servicing and power backup maintenance.',
  },
  {
    category: 'Automation',
    title: 'Robotics & Automation',
    src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800',
    skills: ['Robot Programming','Servo Drive Repair','Conveyor Automation','Vision Systems','End Effector Repair','Safety Systems'],
    description: 'Industrial robots, servo drives, and automated assembly systems.',
  },
  {
    category: 'Safety',
    title: 'Fire & Safety Systems',
    src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800',
    skills: ['Fire Detection','Sprinkler Systems','Emergency Lighting','Gas Detection','Safety Audits','Fire Suppression'],
    description: 'Fire detection, suppression, and industrial safety systems.',
  },
] as const;

// FAQ data
export const faqData = [
  {
    question: 'How quickly can a technician reach my facility?',
    answer: 'Our average dispatch time is under 4 hours in Hyderabad. Once you post a requirement, our matching engine finds the nearest verified technician with the right skill set and dispatches them immediately.',
  },
  {
    question: 'Are Fixara technicians verified?',
    answer: 'Yes. Every technician on our platform undergoes skill verification, background checks, and identity validation. We also collect ratings from MSME clients after every job to maintain quality standards.',
  },
  {
    question: 'What machines and equipment do you cover?',
    answer: 'We cover 15+ categories including CNC machines, electrical systems, hydraulics, welding, compressors, refrigeration, pumps, generators, textile machinery, food processing equipment, and more.',
  },
  {
    question: 'How does payment work?',
    answer: 'No upfront payment required. You pay only after the job is completed and you are satisfied with the work. We provide transparent pricing estimates before you confirm any booking.',
  },
  {
    question: 'What areas in Hyderabad do you serve?',
    answer: 'We currently serve all major industrial areas in Hyderabad including Balanagar, Jeedimetla, Kukatpally, Miyapur, Patancheru, Cherlapally, and surrounding MSME clusters.',
  },
  {
    question: 'Can I choose a specific technician?',
    answer: 'You browse by skill and machine type. The technician\'s identity is revealed only after you confirm the booking — this ensures fair dispatch and protects technician data.',
  },
  {
    question: 'What if the issue is not resolved?',
    answer: 'All jobs come with a service guarantee. If the issue persists, the technician will return at no additional cost. Payment is only released after you confirm satisfaction.',
  },
  {
    question: 'How do I join as a technician?',
    answer: 'Apply through our "For Professionals" page. The process takes under 10 minutes — fill your skill areas, upload ID, and complete a short skill verification. Your profile goes live within 24-48 hours.',
  },
] as const;
