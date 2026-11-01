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
    counter?: string;
    badge?: string;
    title: string;
    actor?: string;
    summary?: string;
    subline: string;
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
      badge: '',
      targetAudience: 'Undergraduate Scholars',
      description:
        'Comprehensive term papers, capstone deliverables, discipline-specific case analyses, and technical lab documentation calibrated to institutional rubrics.',
      deliverables: [
        'Project Reports & Term Papers',
        'Lab Monographs & Documentation',
        'Case Synthesis & Comparative Reviews',
        'Accredited Citation Formats (APA, Harvard, IEEE)',
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
      title: 'Postgraduate Research & Advisory',
      badge: '',
      targetAudience: 'Master’s & Postgraduate Scholars',
      description:
        'Advanced applied research, industry case studies, structured literature surveys, and strategic frameworks engineered to rigorous academic and professional standards.',
      deliverables: [
        'Capstone & Advanced Research Projects',
        'Applied Case Study Analysis',
        'Systematic Literature Frameworks',
        'Strategic & Analytical Documentation',
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
      title: 'Thesis & Dissertation Support',
      badge: '',
      targetAudience: 'Advanced & Independent Researchers',
      description:
        'Formal research proposals, systematic literature reviews, multi-chapter manuscript structuring, and defense-ready bibliography management.',
      deliverables: [
        'Research Proposals & Synopses',
        'Multi-Chapter Manuscript Structuring',
        'Citation Management (Zotero, Mendeley)',
        'Methodology & Defense Preparation',
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
      title: 'Quantitative Modeling & Data Analytics',
      badge: '',
      targetAudience: 'Quantitative, Finance & Technical Analysts',
      description:
        'Dynamic analytical workbooks, statistical testing, multivariate regressions, structured visualization charts, and research data appendices.',
      deliverables: [
        'Financial Modeling & Valuation Frameworks',
        'Statistical Analysis (Descriptive & Inferential)',
        'Dynamic Datasets & Structured Calculations',
        'Document-Ready Appendices',
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
      level: 'Undergraduate Advisory',
      label: 'Undergraduate & College Level',
      description:
        'Comprehensive term papers, capstone deliverables, discipline-specific case analyses, and technical lab documentation.',
      idealFor: 'BBA, B.Com, B.Tech, BA, B.Sc & College Programs',
      startingBase: 399,
      perPageRate: 49,
      turnaround: '3–7 Days',
      features: [
        '100% genuine human-researched scholarship',
        'Standard 250–300 words per content page',
        'Formatted in Word (.docx) & Adobe PDF',
        'Milestone preview safeguard (50% deposit to begin, balance on preview)',
        '1 comprehensive revision round included',
        'Zero hidden fees — transparent fixed quote',
      ],
    },
    {
      level: 'Postgraduate Advisory',
      label: 'Master’s & Postgraduate Studies',
      description:
        'Advanced applied research, industry case studies, structured literature surveys, and strategic frameworks.',
      idealFor: 'MBA, PGDM, M.Sc, M.Com & Master’s Programs',
      startingBase: 599,
      perPageRate: 79,
      turnaround: '4–10 Days',
      features: [
        'Senior domain-specialist researchers',
        'In-depth business & industry framework synthesis',
        'Accredited referencing (Harvard, APA, Chicago)',
        'Milestone preview safeguard (50% deposit to begin, balance on preview)',
        '1 comprehensive revision round included',
        'Executive summary & strategic alignment',
      ],
    },
    {
      level: 'Thesis & Dissertation Support',
      label: 'Advanced Research & Theses',
      description:
        'Formal research proposals, systematic literature reviews, multi-chapter manuscript structuring, and defense-ready bibliography management.',
      idealFor: 'Doctoral Candidates & Independent Scholars',
      startingBase: 899,
      perPageRate: 119,
      turnaround: '7–21 Days',
      features: [
        'Peer-reviewed journal paper synthesis (100+ sources)',
        'Comprehensive literature review matrix',
        'Citation management (Zotero, Mendeley)',
        'Milestone preview safeguard (50% deposit to begin, balance on preview)',
        'Dedicated research milestone checkpoints',
        'Methodology & defense preparation',
      ],
    },
    {
      level: 'Quantitative Modeling & Data Analytics',
      label: 'Applied Analytics & Valuation Models',
      description:
        'Dynamic analytical workbooks, statistical testing, multivariate regressions, structured visualization charts, and research data appendices.',
      idealFor: 'Finance, Operations, Data Analytics & Economics',
      startingBase: 699,
      perPageRate: 0,
      turnaround: '2–6 Days',
      features: [
        'Dynamic Excel files with live formulas (no hardcodes)',
        'Data cleaning & outlier treatment notes',
        'Statistical testing & regression models',
        'Milestone preview safeguard (50% deposit to begin, balance on preview)',
        'Formula audit & explanatory walkthrough notes',
        'Full raw dataset (.xlsx/.csv) handover',
      ],
    },
  ],
  customAddOns: [
    {
      id: 'charts',
      label: 'Custom Figures, Charts & Data Visuals',
      price: 350,
      description:
        'Bespoke analytical graphs, flowcharts, infographics, and publication-ready figures tailored to your paper.',
    },
    {
      id: 'survey',
      label: 'Survey Instrument & Questionnaire Design',
      price: 650,
      description:
        'Structured 15–25 question survey instrument complete with Likert scales, response protocols, and rubric alignment.',
    },
    {
      id: 'statistics',
      label: 'Statistical Hypothesis Testing',
      price: 900,
      description:
        'Regression analysis, ANOVA, Chi-square, and bivariate correlation modeling with formal academic interpretation.',
    },
    {
      id: 'presentation',
      label: 'Executive Briefing Slide Deck',
      price: 750,
      description:
        'Professional 10–12 slide presentation deck summarizing core findings, methodology, and key analytical outcomes.',
    },
  ],
  urgencyTiers: [
    {
      id: 'extended',
      label: 'Extended (20+ Days)',
      sublabel: 'Relaxed research pace',
      multiplier: 0,
    },
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
      multiplier: 20,
    },
    {
      id: 'urgent',
      label: 'Urgent (48–72 Hours)',
      sublabel: 'Priority dedicated research sprint',
      multiplier: 35,
    },
    {
      id: 'critical',
      label: 'Critical (24–48 Hours)',
      sublabel: 'Round-the-clock emergency dispatch',
      multiplier: 50,
    },
  ],
  workflowSteps: [
    {
      step: '01',
      counter: 'Step 01 of 06',
      title: 'Project Intake & Scope Definition',
      subline: 'Provide rubric requirements, target word counts, and submission deadlines.',
      detail:
        'Share your institutional guidelines, citation format, syllabus criteria, and reference files. Every parameter is logged from day one to ensure complete alignment.',
    },
    {
      step: '02',
      counter: 'Step 02 of 06',
      title: 'Formal Scope & Binding Quotation',
      subline: 'Itemized page counts, milestone review boundaries, and confirmed delivery dates.',
      detail:
        'We evaluate academic feasibility and issue a fixed, transparent quotation detailing page thresholds, timeline guarantees, and scope parameters. No hidden fees or unexpected revisions.',
    },
    {
      step: '03',
      counter: 'Step 03 of 06',
      title: 'Milestone Commencement Deposit',
      subline: '50% initial deposit to begin. Secured milestone progression.',
      detail:
        'An initial 50% commitment secures your project timeline and assigns a dedicated domain specialist. Research begins immediately, with the remaining balance due only after preview inspection.',
    },
    {
      step: '04',
      badge: 'SAFEGUARD MILESTONE',
      counter: 'Step 04 of 06',
      title: 'Watermarked Specimen Inspection',
      subline: 'Evaluate analytical depth, structure, and academic tone before balance settlement.',
      detail:
        'Review a designated watermarked specimen of the deliverable to verify methodological rigor, source integration, and formatting standards prior to final sign-off.',
    },
    {
      step: '05',
      counter: 'Step 05 of 06',
      title: 'Consolidated Revision Round',
      subline: 'Dedicated revision cycle included with every scope.',
      detail:
        'Every engagement includes a comprehensive revision stage within the agreed parameters. Submit your consolidated notes, and your specialist will fine-tune the work to your exact standard.',
    },
    {
      step: '06',
      badge: 'COMPLETE HANDOVER',
      counter: 'Step 06 of 06',
      title: 'Balance Settlement & Final Handover',
      subline: 'Release remaining balance to access fully unlocked, editable files.',
      detail:
        'Upon preview approval, settle the remaining 50% balance to download the complete unwatermarked package: editable DOCX files, publication-ready PDFs, and all corresponding datasets or research appendices.',
    },
  ],
};
