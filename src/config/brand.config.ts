export type BrandName = 'Wayforth';

export interface SampleSpecimen {
  id: string;
  category: string;
  title: string;
  institutionFormat: string;
  wordCount: string;
  pageCount: number;
  executiveSummary: string;
  sampleExcerpts: {
    sectionHeading: string;
    content: string;
  }[];
  deliverableIncludes: string[];
}

export interface BrandConfig {
  name: BrandName;
  domain: string;
  tagline: string;
  subline: string;
  contactEmail: string;
  whatsappNumber: string;
  whatsappRawNumber: string;
  reviewWindowHours: number;
  introductoryDiscountPercent: number;
  wordCountPerPage: string;
  manifestoLead: string;
  manifestoBody: string[];
  pillars: {
    title: string;
    description: string;
  }[];
  coreUSPs: {
    id: string;
    title: string;
    badge: string;
    lead: string;
    description: string;
  }[];
  services: {
    id: string;
    title: string;
    badge: string;
    targetAudience: string;
    description: string;
    deliverables: string[];
    isComingSoon?: boolean;
    comingSoonReason?: string;
    sample?: SampleSpecimen;
  }[];
  pricingTiers: {
    level: string;
    label: string;
    description: string;
    idealFor: string;
    startingBase: number;
    perPageRate: number;
    turnaround: string;
    features: string[];
  }[];
  customAddOns: {
    id: string;
    label: string;
    price: number;
    description: string;
  }[];
  urgencyTiers: {
    id: string;
    label: string;
    sublabel: string;
    multiplier: number; // percentage surcharge
  }[];
  workflowSteps: {
    step: string;
    title: string;
    actor: string;
    summary: string;
    detail: string;
  }[];
}

export const BRAND_CONFIG: BrandConfig = {
  name: 'Wayforth',
  domain: 'wayforth.in',
  tagline: 'Make Room for More.',
  subline: 'Academic Projects, Research & Thesis Advisory',
  contactEmail: 'info@wayforth.in',
  whatsappNumber: '+91 91571 88560',
  whatsappRawNumber: '919157188560',
  reviewWindowHours: 24,
  introductoryDiscountPercent: 15,
  wordCountPerPage: '250–300 words',
  manifestoLead:
    'We believe your life should be about more than keeping up with deadlines, submissions, and an endless cycle of academic work.',
  manifestoBody: [
    'You have ambitions beyond the classroom: internships to pursue, skills to develop, ideas to explore, projects to build, businesses to start, and a life you want to live. But when academic work consumes your time, it is not just your free time you lose. It is the opportunities you miss, the ideas you never get around to pursuing, and the things you keep telling yourself you will do once things finally slow down.',
    'In a world where competition is fierce and a degree alone may not be enough to stand out, your time is one of your most valuable assets. Time to gain real-world experience, explore your interests, take risks, build something of your own, and discover what you are capable of. Your future should not have to wait until your next submission is done.',
    'That is why we exist. Through accessible, dependable academic projects and research support, we want to make student life more manageable and give you more room to focus on what matters to you. We are not against education. We believe in everything you can do with it, and everything you can become beyond it. Your grades matter, but so do your experiences, your ideas, your ambitions, and the life you are building outside the classroom. Your future is bigger than your next submission. Your ambitions deserve your time. Make room for more.',
  ],
  pillars: [
    {
      title: 'More time to pursue opportunities.',
      description:
        'Recruitment cycles, high-impact off-campus internships, and industry fellowships demand full focus. Never forfeit a career breakthrough because of documentation backlog.',
    },
    {
      title: 'More room to learn, grow, and experiment.',
      description:
        'True intellectual growth occurs when you have the mental space to engage deeply with concepts, test hypotheses, and learn without submission fatigue.',
    },
    {
      title: 'More freedom to explore interests beyond academics.',
      description:
        'Follow your curiosities—from participating in collegiate hackathons to writing open source, attending industry seminars, or creative pursuits.',
    },
    {
      title: 'More opportunities to develop practical experience.',
      description:
        'Modern employers hire for applied execution, problem-solving ability, and software fluency rather than standard repetitive formatting compliance.',
    },
    {
      title: 'More potential to discover what they can become.',
      description:
        'Building a venture, leading a university club, or creating independent intellectual property requires continuous, unfragmented bandwidth.',
    },
    {
      title: 'More life beyond the cycle of deadlines and submissions.',
      description:
        'Personal wellbeing, lifelong relationships, and peace of mind are the real foundation of sustained achievement. You deserve room to breathe.',
    },
  ],
  coreUSPs: [
    {
      id: 'all-subjects',
      title: 'All Subjects, All Academic Levels',
      badge: 'Single Point of Contact',
      lead: 'Comprehensive breadth across disciplines without fragmentation.',
      description:
        'From undergraduate management case studies and engineering project reports to MBA financial models, law monographs, and doctoral dissertations. We cover all academic boards, colleges, and university curricula with dedicated specialist researchers.',
    },
    {
      id: 'human-written',
      title: '100% Genuine Human Research, Zero Plagiarism',
      badge: 'Authentic Authorship',
      lead: 'Original critical synthesis with legitimate, verifiable citations.',
      description:
        'Every deliverable is written from scratch by human domain specialists. We do not use robotic AI regurgitation that hallucinates citations or produces generic filler. Transparent, verifiable academic references tailored strictly to your rubric.',
    },
    {
      id: 'more-time',
      title: 'More Time for What Matters',
      badge: 'Strategic Advantage',
      lead: 'Reclaim your bandwidth for internships, skills, and career launches.',
      description:
        'In a competitive job market, practical experience trumps formatting compliance. Wayforth handles demanding project documentation so you can focus on building a career that stands out.',
    },
    {
      id: 'stellar-caliber',
      title: 'Curated for Academic Excellence & Distinction',
      badge: 'Faculty Rubric Alignment',
      lead: 'Engineered to withstand rigorous institutional evaluation.',
      description:
        'While institutional grading depends on examiners, our projects are crafted to the highest scholastic standards: structured logical arguments, immaculate formatting, robust methodologies, and defense-ready insights that place your work in the top evaluation tier.',
    },
  ],
  services: [
    {
      id: 'undergrad',
      title: 'Undergraduate Project Advisory',
      badge: 'Active Priority',
      targetAudience: 'College & University Undergraduates',
      description:
        'Comprehensive term papers, semester capstone projects, subject-specific case studies, and lab documentation tailored to college guidelines.',
      deliverables: [
        'College project reports & term papers',
        'Academic documentation & lab monographs',
        'Case study synthesis & comparative reviews',
        'Standard accredited citations (APA, Harvard, IEEE)',
      ],
      sample: {
        id: 'sample-undergrad',
        category: 'Undergraduate Project Report',
        title: 'Strategic Analysis of Renewable Energy Supply Chains in Emerging Economies',
        institutionFormat: 'APA 7th Edition • 28 Pages',
        wordCount: '~7,200 Words',
        pageCount: 28,
        executiveSummary:
          'An empirical inquiry evaluating supply chain bottlenecks in solar photovoltaic component manufacturing. Structured with an operational framework, comparative vendor matrices, and sustainable policy recommendations.',
        sampleExcerpts: [
          {
            sectionHeading: 'Section 2.1: Supply Chain Vulnerability Indices',
            content:
              'Global supply disruptions between 2021 and 2024 revealed significant single-source dependencies in polysilicon ingot fabrication. By applying the Herfindahl-Hirschman Index (HHI = 0.42), the analysis indicates a high degree of market concentration, necessitating localized diversification strategies.',
          },
          {
            sectionHeading: 'Section 4.3: Policy Recommendations',
            content:
              'Incentive structures must balance capital subsidies with domestic content mandates. Case comparisons across Gujarat and Rajasthan demonstrate a 14% improvement in supply continuity when tier-2 component fabricators receive localized logistics subsidies.',
          },
        ],
        deliverableIncludes: [
          'Full .docx and .pdf manuscripts',
          'Formatted cover, contents & executive summary',
          'Peer-reviewed reference list (32 sources)',
          'High-resolution conceptual workflow diagrams',
        ],
      },
    },
    {
      id: 'postgrad',
      title: 'Postgraduate & MBA Consultancy',
      badge: 'Active Priority',
      targetAudience: 'MBA, Master’s & Executive Scholars',
      description:
        'Rigorous business research, corporate case studies, literature surveys, strategic frameworks, and executive reports built to corporate standards.',
      deliverables: [
        'MBA research projects & capstones',
        'Corporate case study development',
        'Systematic literature reviews & frameworks',
        'Strategic business documentation',
      ],
      sample: {
        id: 'sample-masters',
        category: 'MBA Capstone Project',
        title: 'Fintech Valuation Dynamics & Customer Acquisition Cost (CAC) Optimization in D2C Banking',
        institutionFormat: 'Harvard Business School Style • 45 Pages',
        wordCount: '~12,000 Words',
        pageCount: 45,
        executiveSummary:
          'A corporate-grade evaluation of unit economics across 12 neobanking platforms. Integrates cohort retention decay models, regulatory compliance hurdles under RBI/SEBI directives, and strategic recommendations for sustainable LTV/CAC ratios.',
        sampleExcerpts: [
          {
            sectionHeading: 'Executive Dossier: Unit Economic Drift',
            content:
              'Cross-sectional regression indicates that platforms relying solely on cashback incentives experienced an annualized churn rate of 48% within 90 days of onboarding. Sustainable customer lifetime value (LTV > 3.8x CAC) required integration of recurring credit or payroll products.',
          },
          {
            sectionHeading: 'Strategic Framework: Regulatory Sandbox Synthesis',
            content:
              'Compliance-first architectures demonstrated 22% lower regulatory sanction costs over a 3-year window. We formulate a 5-step operational playbook for transition from third-party banking APIs to owned digital lending licenses.',
          },
        ],
        deliverableIncludes: [
          '45-page executive thesis (.docx & print-ready .pdf)',
          'Executive briefing slide deck alignment notes',
          'Verified Harvard-style citations (54 peer sources)',
          'Defense talking points for faculty viva',
        ],
      },
    },
    {
      id: 'research',
      title: 'Research Thesis & Dissertation Support',
      badge: 'Active Priority',
      targetAudience: 'MPhil, PhD & Independent Scholars',
      description:
        'Formal research proposals, systematic literature reviews, multi-tier research papers, dissertation chapter structuring, and bibliography management.',
      deliverables: [
        'Formal research proposals & synopses',
        'Multi-chapter thesis & dissertation structure',
        'Peer-reviewed citation management (Zotero/Mendeley)',
        'Methodology structuring & defense preparation notes',
      ],
      sample: {
        id: 'sample-thesis',
        category: 'Doctoral Dissertation Chapter Sample',
        title: 'Sociotechnical Transitions in Urban Public Transit: An Institutional Logics Perspective',
        institutionFormat: 'Chicago 17th Edition (Author-Date) • 65 Pages',
        wordCount: '~18,500 Words',
        pageCount: 65,
        executiveSummary:
          'A multi-tier dissertation inquiry synthesizing 120+ peer-reviewed journal papers. Employs qualitative thematic coding alongside historical institutionalism to analyze urban transit transitions across tier-1 metropolitan councils.',
        sampleExcerpts: [
          {
            sectionHeading: 'Chapter 2.4: Synthesis of Competing Institutional Logics',
            content:
              'The tension between municipal fiscal austerity and public transit democratization constitutes a dual-logic paradox. Drawing upon Thornton et al. (2012), our matrix isolates governance frictions where capital modernization conflicts with subsidized rider fare mandates.',
          },
          {
            sectionHeading: 'Chapter 3.2: Triangulation & Construct Validity',
            content:
              'Construct validity was established through three-tier evidentiary triangulation: legislative transcripts (n=48), stakeholder depositions (n=32), and municipal budgetary disclosures. Inter-coder reliability was confirmed via Cohen’s Kappa (κ = 0.88).',
          },
        ],
        deliverableIncludes: [
          'Full manuscript with hierarchical headings & chapter breakdowns',
          'Zotero / Mendeley ready .bib and .ris export library',
          'Detailed methodology justification for academic committee defense',
          'Plagiarism similarity audit report',
        ],
      },
    },
    {
      id: 'quantitative',
      title: 'Data Analysis & Excel Projects',
      badge: 'Active Priority',
      targetAudience: 'Analytics, Finance & Technical Candidates',
      description:
        'Dynamic Excel workbooks, statistical testing, financial valuation models, regression analysis, structured charts, and academic data appendices.',
      deliverables: [
        'Financial valuation & forecast models (DCF, LBO)',
        'Statistical data analysis (Descriptive & Inferential)',
        'Excel datasets with formulas, macros & pivot charts',
        'Structured appendices ready for document embedding',
      ],
      sample: {
        id: 'sample-excel',
        category: 'Quantitative Excel Model & Analytics',
        title: 'Multifactor Capital Allocation Model & Monte Carlo Valuation Workbook',
        institutionFormat: 'Dynamic .XLSX + Structured PDF Appendix • 18 Pages',
        wordCount: '~4,500 Words + 6 Workbook Tabs',
        pageCount: 18,
        executiveSummary:
          'Fully automated financial workbook incorporating DCF, sensitivity matrices, WACC calculation, and 1,000-iteration Monte Carlo simulation for downside risk modeling. Includes an accompanying analytical report explaining formulas and findings.',
        sampleExcerpts: [
          {
            sectionHeading: 'Model Architecture: Automated Sensitivity Engine',
            content:
              'Tab 03 features dynamic two-variable data tables evaluating Terminal Growth Rate (1.5%–3.5%) against Cost of Capital (8.0%–12.5%). Cells utilize native INDEX/MATCH and XLOOKUP architectures with error-handling wrapping (=IFERROR).',
          },
          {
            sectionHeading: 'Methodology: Statistical Normalization Notes',
            content:
              'Raw market data (500 trading days) was filtered for extreme outlier kurtosis using Cook’s Distance criteria (D > 4/n). Variance Inflation Factor (VIF = 1.42) verified absence of multi-collinearity across selected independent market betas.',
          },
        ],
        deliverableIncludes: [
          'Interactive Excel workbook (.xlsx) with live formulas & no hardcodes',
          'Data cleaning & outlier treatment audit log',
          'High-res vector charts ready for report embedding',
          'Written analytical interpretation document',
        ],
      },
    },
  ],
  pricingTiers: [
    {
      level: 'Undergraduate',
      label: 'College & Degree Level',
      description:
        'Foundational academic research, term papers, and semester project documentation.',
      idealFor: 'BBA, B.Com, B.Tech, BA, B.Sc & University Courses',
      startingBase: 1200,
      perPageRate: 280,
      turnaround: '3–7 Days',
      features: [
        '100% genuine human-researched writing',
        'Standard 250–300 words per content page',
        'Formatted in Word (.docx) & Adobe PDF',
        'Pay-as-you-go milestone safeguard (50% deposit to begin, balance on preview)',
        '1 comprehensive revision round included',
        'Zero hidden fees — transparent fixed quote',
      ],
    },
    {
      level: 'Postgraduate & MBA',
      label: 'Management & Master’s',
      description:
        'Advanced secondary research, strategic business frameworks, and corporate case analysis.',
      idealFor: 'MBA, PGDM, M.Sc, M.Com & Master’s Programs',
      startingBase: 2200,
      perPageRate: 450,
      turnaround: '4–10 Days',
      features: [
        'Senior domain-specialist researchers',
        'In-depth business & industry framework synthesis',
        'Accredited referencing (Harvard, APA, Chicago)',
        'Pay-as-you-go milestone safeguard (50% deposit to begin, balance on preview)',
        '1 comprehensive revision round included',
        'Executive summary & slide deck alignment',
      ],
    },
    {
      level: 'Data Analysis & Excel',
      label: 'Analytics & Financial Models',
      description:
        'Dynamic Excel workbooks, statistical testing, financial projections, and custom charting.',
      idealFor: 'Finance, Operations, Data Analytics & Economics',
      startingBase: 2500,
      perPageRate: 380,
      turnaround: '2–6 Days',
      features: [
        'Dynamic Excel files with live formulas (no hardcodes)',
        'Data cleaning & outlier treatment notes',
        'High-resolution charts for document insertion',
        'Pay-as-you-go milestone safeguard (50% deposit to begin, balance on preview)',
        'Formula audit & explanatory walkthrough notes',
        'Full raw dataset (.xlsx/.csv) handover',
      ],
    },
    {
      level: 'Research Thesis',
      label: 'Dissertations & MPhil/PhD',
      description:
        'Rigorous multi-chapter dissertation advisory, research proposals, and literature reviews.',
      idealFor: 'Doctoral Candidates & Independent Scholars',
      startingBase: 4200,
      perPageRate: 620,
      turnaround: '7–21 Days',
      features: [
        'Peer-reviewed journal paper synthesis (100+ sources)',
        'Comprehensive literature review matrix',
        'Zotero/Mendeley compatible bibliography',
        'Pay-as-you-go milestone safeguard (50% deposit to begin, balance on preview)',
        'Dedicated research milestone checkpoints',
        'Methodology audit & defense talking points',
      ],
    },
  ],
  customAddOns: [
    {
      id: 'charts',
      label: 'Custom Graphs, Charts & Analytical Figures',
      price: 350,
      description: 'Bespoke analytical graphs, flowcharts, infographics & custom figures tailored to your paper',
    },
    {
      id: 'survey',
      label: 'Questionnaire & Survey Instrument',
      price: 650,
      description: 'Structured 15–25 question survey instrument with Likert scales & rubric',
    },
    {
      id: 'statistics',
      label: 'Statistical Hypothesis Testing',
      price: 900,
      description: 'Regression, ANOVA, Chi-square & correlation modeling with interpretation',
    },
    {
      id: 'rubric',
      label: 'Custom Rubric & Faculty Guidelines Alignment',
      price: 500,
      description: 'Strict bespoke compliance alignment with university evaluation criteria',
    },
    {
      id: 'presentation',
      label: 'Executive Briefing Slide Deck',
      price: 750,
      description: '10–12 slide PowerPoint briefing deck summarizing key findings',
    },
  ],
  urgencyTiers: [
    {
      id: 'flexible',
      label: 'Flexible (10+ Days)',
      sublabel: 'Standard production schedule',
      multiplier: 0,
    },
    {
      id: 'standard',
      label: 'Standard (5–9 Days)',
      sublabel: 'Normal academic turnaround',
      multiplier: 0,
    },
    {
      id: 'express',
      label: 'Express (3–4 Days)',
      sublabel: 'Expedited specialist allocation',
      multiplier: 20, // +20%
    },
    {
      id: 'urgent',
      label: 'Urgent (48–72 Hours)',
      sublabel: 'Priority dedicated research sprint',
      multiplier: 35, // +35%
    },
    {
      id: 'emergency',
      label: 'Emergency (24–48 Hours)',
      sublabel: 'Round-the-clock emergency dispatch',
      multiplier: 50, // +50%
    },
  ],
  workflowSteps: [
    {
      step: '01',
      title: 'Submit Project Brief',
      actor: 'Client',
      summary: 'Provide rubric, word count, guidelines, and deadline target.',
      detail:
        'Share your institutional brief, formatting style, syllabus guidelines, and any reference materials. Zero ambiguity from day one.',
    },
    {
      step: '02',
      title: 'Receive Written Binding Quotation',
      actor: 'Wayforth',
      summary: 'Itemized scope, page count, preview boundary, and delivery date.',
      detail:
        'We review academic feasibility and issue a transparent quotation itemizing page counts, urgency adjustments, and guaranteed delivery milestones.',
    },
    {
      step: '03',
      title: '50% Initial Milestone Deposit',
      actor: 'Client',
      summary: '50% deposit to commence. Pay-as-you-go milestone safeguard.',
      detail:
        'Your 50% milestone deposit initiates research and locks in your delivery timeline. Work begins immediately with a dedicated specialist. Settle remaining 50% only after inspecting your preview.',
    },
    {
      step: '04',
      title: 'Inspect Watermarked Sample Preview',
      actor: 'Mutual',
      summary: 'Review writing quality, structure, and tone before balance.',
      detail:
        'You receive a designated representative watermarked preview to inspect structure, argument depth, and formatting. You are never forced into a blind leap of faith.',
    },
    {
      step: '05',
      title: 'Request Included Revision & Finalization',
      actor: 'Client',
      summary: '1 comprehensive revision round included with final delivery package preparation.',
      detail:
        'One comprehensive revision round is included within the agreed scope. Share your consolidated feedback for fine-tuning as we prepare your complete unwatermarked package: editable Word (.docx), PDF, and all supporting datasets.',
    },
    {
      step: '06',
      title: 'Release Balance & Receive Final Deliverables',
      actor: 'Mutual',
      summary: 'Settle remaining 50% milestone balance and receive all clean files immediately.',
      detail:
        'Once you are satisfied with the preview and agreed revisions are finalized, settle the remaining 50% milestone balance to instantly receive your clean, unwatermarked deliverables with zero delay.',
    },
  ],
};
