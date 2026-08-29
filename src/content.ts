import type { Content } from './components/Sections';

export const content: Content = {
  name: 'Aditya Rao',
  role: 'Financial Analyst',
  tagline: 'Turning data into clear investment decisions',
  photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  email: 'aditya@finanalytics.in',
  phone: '+91 98989 23230',
  location: 'Mumbai, India',
  languages: ['English', 'Hindi', 'Marathi'],
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Email', href: 'mailto:aditya@finanalytics.in' },
  ],
  about: [
    'I am a financial analyst who finds the signal in the noise. For 6 years I have modelled valuations, analysed markets and built forecasts that guide confident investment decisions — turning raw data into the clarity leadership needs to act.',
    'I bring rigorous financial modelling, sharp scenario analysis and clean communication, so leadership understands the why behind every number. My work spans DCF and LBO valuation, equity research, budgeting and reporting automation, always built to be transparent, defensible and repeatable.',
  ],
  services: [
    { title: 'Financial Modelling', desc: 'Building three-statement models, DCFs, LBOs and scenario engines that stand up to scrutiny.', icon: '📈' },
    { title: 'Valuation', desc: 'Independent equity and asset valuation using DCF, comparable companies and precedent transactions.', icon: '💎' },
    { title: 'Forecasting & Budgeting', desc: 'Creating flexible, data-driven forecasts and budgets that steer capital through volatility.', icon: '🔮' },
    { title: 'Data Analysis', desc: 'Analysing markets and business data with Python, SQL and Excel to uncover the signal.', icon: '📊' },
    { title: 'Reporting Automation', desc: 'Automating dashboards and reporting in Power BI and Excel to free teams for deeper work.', icon: '⚡' },
    { title: 'Scenario & Risk Analysis', desc: 'Stress-testing assumptions and quantifying risk to prepare leadership for every outcome.', icon: '🛡️' },
  ],
  skills: [
    { name: 'Financial Modelling', level: 95, note: 'DCF, LBO, 3-stmt' },
    { name: 'Valuation', level: 93, note: 'Equity & assets' },
    { name: 'Data Analysis', level: 92, note: 'Python, SQL, Excel' },
    { name: 'Forecasting', level: 90, note: 'Budgets & scenarios' },
    { name: 'Reporting', level: 91, note: 'Dashboards & decks' },
  ],
  skillsIcons: [
    { name: 'Excel & VBA', note: 'Advanced modelling', icon: '🧮' },
    { name: 'Python', note: 'Pandas, numpy', icon: '🐍' },
    { name: 'Power BI', note: 'Interactive reports', icon: '📉' },
    { name: 'CFA Toolkit', note: 'Finance theory', icon: '🎓' },
  ],
  stats: [
    { label: 'Models built', value: 120, suffix: '+' },
    { label: 'Forecast accuracy', value: 94, suffix: '%' },
    { label: 'Projects advised', value: 60, suffix: '+' },
    { label: 'Analysis saved', value: 30, suffix: 'M$' },
  ],
  experience: [
    {
      role: 'Financial Analyst',
      company: 'Meridian Capital',
      period: '2021 — Present',
      desc: 'Build valuation and M&A models for the investment team, driving decisions across a $300M portfolio.',
    },
    {
      role: 'Equity Research Analyst',
      company: 'Vertex Research',
      period: '2019 — 2021',
      desc: 'Covered consumer and tech sectors, publishing forecasts with a 94% accuracy record.',
    },
    {
      role: 'Financial Analyst I',
      company: 'ClearBridge',
      period: '2018 — 2019',
      desc: 'Supported budgeting and forecasting, automating reporting that cut turnaround time in half.',
    },
  ],
  education: [
    {
      degree: 'MBA, Finance',
      school: 'Narsee Monjee Institute of Management',
      period: '2016 — 2018',
      desc: 'Specialised in corporate finance, investments and financial analytics.',
    },
    {
      degree: 'B.Com, Accounting & Finance',
      school: 'University of Mumbai',
      period: '2013 — 2016',
      desc: 'Graduated with honours, focused on accounting, statistics and economics.',
    },
  ],
  certificates: [
    'CFA Program — Level 3 (in progress)',
    'FRM Part 1',
    'Financial Modeling & Valuation (FMVA)',
    'Python for Finance',
  ],
  awards: [
    { title: 'Best Forecast Accuracy', detail: 'Ranked top among analysts for the most accurate earnings forecasts in the coverage universe.', year: '2022' },
    { title: 'Analyst of the Quarter', detail: 'Recognised for a valuation model that guided a high-impact M&A decision.', year: '2021' },
    { title: 'Process Innovation', detail: 'Awarded for automation work that slashed monthly reporting turnaround by 60%.', year: '2020' },
  ],
  cards: [
    {
      title: 'DCF Valuation',
      desc: 'Built a three-statement DCF that priced an acquisition target within 4% of final deal value.',
      stack: 'Valuation',
      metric: 'within 4%',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
    },
    {
      title: 'Scenario Engine',
      desc: 'Created a flexible scenario model that stress-tested budgets, steering capital decisions through volatility.',
      stack: 'Forecasting',
      metric: 'steered decisions',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    },
    {
      title: 'Reporting Automation',
      desc: 'Automated monthly analytics, cutting production time 60% and freeing the team for deeper analysis.',
      stack: 'Automation',
      metric: '-60% time',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    },
  ],
  projects: [
    {
      title: 'LBO Model for Buyout',
      desc: 'Built a sponsor-grade LBO model that validated returns and shaped terms for a mid-market buyout.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
      tags: ['LBO', 'Modeling'],
    },
    {
      title: 'Consumer Earnings Model',
      desc: 'Developed a sector earnings model that consistently beat consensus on quarterly results.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tags: ['Research', 'Sector'],
    },
    {
      title: 'Budget Automation Suite',
      desc: 'Automated the annual budgeting cycle, reducing close time by half across multiple business units.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop',
      tags: ['Automation', 'Budgeting'],
    },
  ],
  hobbies: [
    { name: 'Investing', note: 'Personal portfolio & research', icon: '📈' },
    { name: 'Chess', note: 'Regular tournament play', icon: '♟️' },
    { name: 'Cycling', note: 'Long distance rides', icon: '🚴' },
    { name: 'Podcasting', note: 'Hosting a finance show', icon: '🎙️' },
  ],
  testimonials: [
    {
      quote:
        'Aditya turns messy data into decisions we trust. His models are the most rigorous in our team.',
      author: 'Vivek Sharma',
      role: 'Partner, Meridian Capital',
    },
    {
      quote:
        'Fast, precise and honest about assumptions. A rare analyst who speaks the language of leaders.',
      author: 'Elena Moreau',
      role: 'CIO, Vertex Research',
    },
  ],
  footnote: '© Aditya Rao · React, TypeScript & Framer Motion',
  ticker: ['Financial Modelling', 'Valuation', 'Forecasting', 'Data Analysis', 'Scenario Analysis', 'Reporting'],

  blogPosts: [
    { title: 'Financial Modeling Best Practices', excerpt: 'Creating accurate, flexible financial models for business decisions.', date: '2024-01-01', tags: ['Financial Modeling', 'Finance'], readTime: '10 min' },
    { title: 'Valuation Techniques for Startups', excerpt: 'How to value early-stage companies with limited financial history.', date: '2023-12-27', tags: ['Valuation', 'Startups'], readTime: '9 min' },
  ],

  faqItems: [
    { question: 'What financial analysis do you specialize in?', answer: 'I specialize in financial modeling, valuation, budgeting, forecasting, and investment analysis.' },
    { question: 'What industries do you analyze?', answer: 'I have deep expertise in technology, healthcare, consumer, and financial services sectors.' },
    { question: 'What tools do you use?', answer: 'I use Excel, Python, SQL, and various financial databases like Bloomberg and Capital IQ.' },
    { question: 'How do you approach forecasting?', answer: 'I combine historical analysis, market trends, and scenario planning for robust forecasts.' },
  ],

  skillsDetailed: [
    { category: 'Analysis', items: [
      { name: 'Financial Modeling', level: 95 },
      { name: 'Valuation', level: 92 },
      { name: 'Forecasting', level: 90 },
    ]},
    { category: 'Tools', items: [
      { name: 'Excel', level: 95 },
      { name: 'Python', level: 85 },
      { name: 'SQL', level: 88 },
    ]},
  ],

  contactMethods: [
    { type: 'Email', value: 'analyst@finance.com', icon: '📧', href: 'mailto:analyst@finance.com' },
    { type: 'LinkedIn', value: 'linkedin.com/in/finance', icon: '💼', href: 'https://linkedin.com' },
  ],
};
