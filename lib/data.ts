import type { ResumeData } from "./types";

export const resumeData: ResumeData = {
  basics: {
    name: "Vedika Maheshwari",
    title: "AI Engineer & Cybersecurity Professional | Agentic Systems · LLM Pipelines · Secure Software Design",
    summary:
      "AI Engineer and Cybersecurity Professional with hands on experience building agentic AI systems, AI workflow orchestration, and production ready platforms. Strong foundation in software engineering, secure system design, and IT infrastructure, enabling delivery of scalable, reliable solutions in cross functional environments.",
    location: "Canada",
    email: "vmah860@gmail.com",
    phone: "647 802 0091",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/vedikam" },
      { label: "GitHub", url: "https://github.com/VedikaM6" },
    ],
  },
  experience: [
    {
      company: "HachiAI",
      role: "AI Engineer",
      dates: "Aug 2025 – Present",
      highlightSkills: ["Agentic AI", "LLM Pipelines", "MCP", "NLP", "Python", "APIs", "Prompt Engineering", "Documentation"],
      bullets: [
        "Served as founding engineer, leading initial platform setup and authoring technical documentation that cut internal onboarding time by 70%.",
        "Architected and shipped core features for a production grade multi agent AI platform including LLM inference pipelines, MCP tool integrations, and developer facing APIs.",
        "Designed and implemented a natural language to SQL feature using chained LLM calls to route queries to the correct database, generate accurate SQL from schema context, and return formatted results.",
        "Implemented data chunking to optimize LLM token consumption, and built Excel MCP tool integrations for autonomous file operations.",
        "Drove iterative prompt engineering against real client use cases, identifying and building missing platform features in parallel to ensure uninterrupted prompt execution.",
        "Designed multiple UI prototypes and presented them to the team with full feature walkthroughs and user flow breakdowns, then built out the selected design across the frontend and backend.",
        "Maintained and expanded the platform's technical documentation site, documenting all newly developed features and upcoming developments to support team alignment and onboarding.",
      ],
    },
    {
      company: "Excogitate Consulting Inc.",
      role: "Consultant",
      dates: "May 2024 – Dec 2024",
      highlightSkills: ["REST APIs", "ITGC / ITAC", "ISO 27001", "Security", "Microservices"],
      bullets: [
        "Supported IT audit activities by identifying risks, evaluating control effectiveness through walkthroughs and testing, and validating process narratives with control owners for updates.",
        "Prepared audit reports with findings & recommendations, focusing on IT General Controls (ITGCs) and IT Application Controls (ITACs), and participated in management discussions.",
        "Designed and deployed RESTful APIs with input validation and error-handling mechanisms, improving system reliability while ensuring secure data flow between microservices in a distributed architecture.",
        "Collaborated with cybersecurity and risk analysts to implement access control rules and data validation layers, contributing to the development of a hardened microservice ecosystem aligned with ISO/IEC 27001 best practices.",
      ],
    },
    {
      company: "Emailgistics",
      role: "Full Stack Software Developer",
      dates: "May 2023 – Aug 2023",
      highlightSkills: ["Go", "Security", "Documentation", "Frontend", "Backend"],
      bullets: [
        "Resolved 7+ critical vulnerabilities by optimizing Go code and database structures, enhancing system reliability for 10,000+ users.",
        "Built and tested 5+ key product features across frontend and backend, improving user workflows and reducing release bugs.",
        "Diagnosed and patched high-impact bugs under tight deadlines, decreasing resolution time by 35%.",
        "Created concise, developer-friendly documentation that accelerated onboarding and team alignment.",
        "Enhanced customer-facing features by expanding email history, adding custom tags, and improving payment plan interfaces based on user feedback.",
      ],
    },
    {
      company: "Emailgistics Corp.",
      role: "Junior Developer",
      dates: "May 2022 – Aug 2022",
      highlightSkills: ["Vue.js", "Go", "MongoDB", "Cybersecurity", "Documentation"],
      bullets: [
        "Refactored a dashboard microservice to support customizable data views, improving reporting efficiency and increasing customer satisfaction by 30%.",
        "Implemented full-stack updates using Vue.js, Go, and MongoDB to enhance user-specific dashboard experiences.",
        "Engineered feature enhancements to an internal Outlook mailbox simulation tool, enabling the marketing team to effectively demo newly released product capabilities to prospective clients.",
        "Facilitated secure development practices by promoting cybersecurity standards in 3+ design meetings, reducing early-stage security risks.",
        "Composed technical documentation for internal users, leading to a 25% drop in repeat IT support tickets.",
      ],
    },
  ],
  achievements: [
    { text: "Cut internal onboarding time by 70%", context: "HachiAI – technical documentation", type: "metric" },
    { text: "Cut security findings by 40%", context: "Excogitate – secure RESTful APIs", type: "metric" },
    { text: "Increased feature adoption by 15%", context: "Dashboard service upgrade", type: "metric" },
    { text: "1500+ emails per day simulation", context: "Backend microservices", type: "metric" },
    { text: "10+ metrics in analytics dashboards", context: "Phishing simulation platform", type: "metric" },
    { text: "Increased customer satisfaction by 30%", context: "Dashboard microservice refactor", type: "metric" },
    { text: "25% drop in repeat IT support tickets", context: "Technical documentation", type: "metric" },
    { text: "Decreased resolution time by 35%", context: "High-impact bug patches", type: "metric" },
    { text: "Resolved 7+ critical vulnerabilities for 10,000+ users", context: "Emailgistics", type: "win" },
    { text: "Built and tested 5+ key product features", context: "Emailgistics", type: "win" },
    { text: "Served as founding engineer", context: "HachiAI – platform setup", type: "leadership" },
    { text: "Led large scale Dashboard service upgrade", context: "Excogitate", type: "leadership" },
  ],
  projects: [
    {
      title: "Phishing Awareness Simulation & Security Testing",
      dates: "Jan 2024 – Jun 2024",
      bullets: [
        "Built a full stack phishing simulation platform with campaign scheduling, customizable email templates, and multi user management.",
        "Integrated real time analytics dashboards tracking 10+ metrics including open rates, click throughs and credential submissions.",
        "Designed an engagement metric analysis feature to tailor training resources based on user behaviour patterns.",
      ],
      links: [
        { label: "Frontend (GitHub)", url: "https://github.com/VedikaM6/PhishingSimulation-FrontEnd" },
        { label: "Backend (GitHub)", url: "https://github.com/VedikaM6/PhishingSimulation-Backend" },
      ],
    },
    {
      title: "ScapyAssignment",
      dates: "Network security project",
      bullets: [
        "Network reconnaissance and security analysis using Scapy (Python).",
        "Demonstrates packet crafting, network scanning, and security assessment techniques.",
      ],
      links: [{ label: "GitHub", url: "https://github.com/VedikaM6/ScapyAssignment" }],
    },
  ],
  skills: {
    "AI & Applied Intelligence": [
      "Agentic Systems",
      "AI Platform Integration",
      "AI Workflow Orchestration",
      "Prompt Engineering",
    ],
    "Software Engineering": ["C", "Go", "Java", "Node.js", "OOP", "Python", "React", "REST APIs", "SQL", "Vue.js"],
    "DevOps, Systems & Data": ["JIRA & Confluence", "Jenkins", "Kubernetes", "Linux", "CI/CD", "Data Modeling", "Docker", "Git", "MongoDB"],
    "Security & Tools": [
      "Network Configuration",
      "Secure Coding",
      "Traffic Analysis",
      "Vulnerability Analysis",
      "Wireshark & Nmap",
    ],
  },
  education: [
    { institution: "York University", degree: "B.A. in Computer Security", dates: "Sep 2020 – May 2024" },
    {
      institution: "Sheridan College",
      degree: "Advanced Diploma in Computer Systems Technology",
      dates: "Sep 2017 – Dec 2020",
    },
  ],
  certifications: [
    "Google's AI Prompting Essentials",
    "CompTIA Security+",
    "SAP ERP (Enterprise Resource Planning) Essential Training",
    "ISC2 Cybersecurity Certification (CC)",
  ],
  awards: [],
  extra: [
    "Always happy to connect with like-minded people in the space — feel free to reach out!",
  ],
};
