export type Metric = {
  value: string
  label: string
  detail: string
}

export type ExperienceItem = {
  role: string
  company: string
  location: string
  start: string
  end: string
  summary: string
  bullets: string[]
  technologies: string[]
}

export type ProjectItem = {
  name: string
  organization: string
  stack: string[]
  summary: string
  bullets: string[]
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type LeadershipItem = {
  role: string
  organization: string
  location: string
  start: string
  end: string
  summary: string
  bullets: string[]
}

export type EducationItem = {
  school: string
  degree: string
  location: string
  end: string
}

export type SiteContent = {
  profile: {
    name: string
    shortRole: string
    headline: string
    location: string
    statement: string
    summary: string
    heroNote: string
    band: string
    footerNote: string
    principles: string[]
    metrics: Metric[]
  }
  experience: ExperienceItem[]
  projects: ProjectItem[]
  skills: SkillGroup[]
  leadership: LeadershipItem[]
  education: EducationItem[]
  contact: {
    email: string
    linkedinUrl: string
    location: string
    resumeUrl: string
    note: string
  }
  resumePdf: string
}

const resumePdf = '/files/ryan-hassell-resume.pdf'

export const siteContent: SiteContent = {
  profile: {
    name: 'Ryan Hassell',
    shortRole: 'AI Systems Engineer',
    headline: 'AI systems / analytics interfaces / agentic workflow design',
    location: 'Philadelphia, PA',
    statement:
      'I build AI systems, data interfaces, and internal tools that turn complex workflows into usable products.',
    summary:
      'My work sits at the intersection of LLM orchestration, analytics infrastructure, and product-facing interfaces. I focus on turning complex datasets, retrieval pipelines, and research workflows into tools that are fast, legible, and actually usable.',
    heroNote:
      'Most projects land somewhere between agent orchestration, retrieval, analytics UX, and backend systems that support real operating workflows.',
    band:
      'AI systems / analytics interfaces / retrieval and orchestration / full-stack product engineering',
    footerNote:
      'Selected work across AI systems, large-scale data platforms, and product engineering.',
    principles: [
      'Build for operators, analysts, and researchers rather than for demos alone.',
      'Treat retrieval, planning, visualization, and explanation as one connected workflow.',
      'Prefer sharp information hierarchy and clear interfaces over decorative portfolio patterns.',
    ],
    metrics: [
      {
        value: '10+',
        label: 'agents orchestrated',
        detail:
          'LangChain and LangFlow systems for retrieval, SQL planning, visualization, and explanation.',
      },
      {
        value: '25+',
        label: 'visualization types',
        detail:
          'Generated charts and tables through a production analytics chatbot with contextual memory.',
      },
      {
        value: '2M+',
        label: 'records optimized',
        detail:
          'Improved query performance and backend workflows on large emissions datasets.',
      },
      {
        value: '380+',
        label: 'organizations served',
        detail:
          'Supported secure data exchange across a public utility platform for emissions reporting.',
      },
    ],
  },
  experience: [
    {
      role: 'Associate Software Engineer - Advanced Artificial Intelligence',
      company: 'Cobbs Creek Healthcare',
      location: 'Newtown Square, PA',
      start: 'June 2025',
      end: 'Present',
      summary:
        'Shipping agentic AI tools that query enterprise data, automate literature review workflows, and expose results through analyst-friendly interfaces.',
      bullets: [
        'Developed a production-grade AI analytics chatbot over 10+ enterprise datasets, generating more than 25 visualization types with contextual memory.',
        'Built multi-agent AI workflows using 10+ agents in LangChain and LangFlow for retrieval, SQL planning, visualization, and explanation.',
        'Designed LLM-driven literature review generators and interactive analytics dashboards backed by AWS, Azure, Snowflake, and Databricks.',
        'Partnered with clinicians and data scientists to integrate agentic systems into live research and analytics workflows with faster insight turnaround.',
      ],
      technologies: [
        'Python',
        'TypeScript',
        'JavaScript',
        'SQL',
        'LangChain',
        'LangFlow',
        'FastAPI',
        'React',
        'Streamlit',
        'R Shiny',
        'Plotly',
        'AWS',
        'Azure',
        'Snowflake',
        'Databricks',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Insomniac Design',
      location: 'Washington, D.C.',
      start: 'June 2023',
      end: 'June 2024',
      summary:
        'Built backend infrastructure for a public utility platform focused on secure, large-scale emissions data exchange.',
      bullets: [
        'Led backend user and data management architecture for the NZDPU platform, enabling secure emissions data exchange for 380+ organizations.',
        'Engineered RESTful APIs, custom user and file management systems, RBAC, and Firebase Authentication across 197+ jurisdictions, scaling to 1,000+ accounts.',
        'Optimized SQL queries for 2M+ records, reduced manual workflows by 40%, and helped maintain compliance across 11 industries using GCP.',
      ],
      technologies: ['Python', 'JavaScript', 'SQL', 'FastAPI', 'Firebase', 'GCP'],
    },
  ],
  projects: [
    {
      name: 'Virtual Travel Platform',
      organization: 'Cobbs Creek Healthcare',
      stack: ['Flutter', 'Python', 'Firebase', 'Agora SDK'],
      summary:
        'A real-time travel product pairing live guides, messaging, and cross-platform application flow in one experience.',
      bullets: [
        'Built a real-time global travel app using Agora for video and Firebase for messaging and authentication.',
        'Developed the cross-platform client and server architecture, with upcoming LLM-driven personalization features in the pipeline.',
      ],
    },
    {
      name: 'Data Chatbot Interface',
      organization: 'Cobbs Creek Healthcare',
      stack: [
        'Python',
        'React',
        'OpenAI API',
        'SQL',
        'LangChain',
        'LangFlow',
        'Plotly',
      ],
      summary:
        'An autonomous analytics interface that turns natural language into SQL, data retrieval, charts, and narrative explanation.',
      bullets: [
        'Developed a multi-agent LLM architecture for autonomous SQL query planning, data retrieval, visualization, and explanation.',
      ],
    },
    {
      name: 'AI Research Agent & Literature Review Generator',
      organization: 'Cobbs Creek Healthcare',
      stack: ['Python', 'LangChain', 'Streamlit', 'Snowflake', 'AWS EC2'],
      summary:
        'A literature review platform designed to compress screening, extraction, quality review, and reporting into one workflow.',
      bullets: [
        'Developed a multi-agent LLM platform for end-to-end literature review workflows including screening, extraction, quality assessment, and report generation.',
      ],
    },
    {
      name: 'Net-Zero Data Public Utility (NZDPU) Platform',
      organization: 'Insomniac Design',
      stack: ['Python', 'GCP', 'PostgreSQL', 'FastAPI'],
      summary:
        'Backend architecture for emissions reporting at public-utility scale, tuned for secure data exchange and lower latency.',
      bullets: [
        'Implemented backend architecture, custom user and file systems, and optimized SQL for 2M+ emissions records.',
        'Reduced latency by 30% while automating manual workflows for a multi-organization reporting platform.',
      ],
    },
  ],
  skills: [
    {
      title: 'Core Systems',
      items: [
        'AI/LLM systems',
        'Multi-agent workflows',
        'Data engineering',
        'Full-stack development',
        'Cloud analytics',
      ],
    },
    {
      title: 'Languages',
      items: ['Python', 'TypeScript', 'SQL', 'JavaScript', 'Java', 'C', 'C/C++'],
    },
    {
      title: 'Platforms & Tools',
      items: [
        'LangChain',
        'LangFlow',
        'FastAPI',
        'React',
        'Streamlit',
        'R Shiny',
        'Snowflake',
        'Databricks',
        'AWS',
        'Azure',
        'GCP',
        'Firebase',
        'Plotly',
      ],
    },
  ],
  leadership: [
    {
      role: 'Founder & President',
      organization: "Computer Science Club, Saint Joseph's University",
      location: 'Philadelphia, PA',
      start: '2022',
      end: '2025',
      summary:
        'Built a student engineering community around programming workshops, guest lectures, and practical technical events.',
      bullets: [
        'Recruited 60+ members and organized workshops, guest lectures, and coding competitions.',
      ],
    },
  ],
  education: [
    {
      school: "Saint Joseph's University",
      degree: 'BS in Computer Science',
      location: 'Philadelphia, PA',
      end: 'May 2025',
    },
  ],
  contact: {
    email: 'ryanhassell03@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/ryan-hassell-4743211a4/',
    location: 'Philadelphia, PA',
    resumeUrl: resumePdf,
    note: 'Email is the best way to reach me for technical conversations, product work, and collaborations.',
  },
  resumePdf,
}
