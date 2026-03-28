import profilePic from "../assets/profile_pic.jpg"
import puredentFeature from "../assets/puredent/feature.png"
import carvisionFeature from "../assets/carvision/feature.png"
import blwireFeature from "../assets/blwire/feature.png"
import jobfindFeature from "../assets/jobfind/feature.png"

import blwireShot80 from "../assets/blwire/Screenshot (80).png"
import blwireShot81 from "../assets/blwire/Screenshot (81).png"
import blwireShot82 from "../assets/blwire/Screenshot (82).png"
import blwireShot83 from "../assets/blwire/Screenshot (83).png"
import blwireShot85 from "../assets/blwire/Screenshot (85).png"
import blwireShot86 from "../assets/blwire/Screenshot (86).png"

import jobfindShot20260328_015512 from "../assets/jobfind/Screenshot 2026-03-28 015512.png"
import jobfindShot20260328_015528 from "../assets/jobfind/Screenshot 2026-03-28 015528.png"
import jobfindShot85 from "../assets/jobfind/Screenshot (85).png"
import jobfindShot86 from "../assets/jobfind/Screenshot (86).png"
import jobfindShot87 from "../assets/jobfind/Screenshot (87).png"
import jobfindShot88 from "../assets/jobfind/Screenshot (88).png"

const PLACEHOLDER_VIDEO = "https://www.youtube.com/embed/ysz5S6PUM-U"

const carvisionGlob = import.meta.glob("../assets/carvision/*.{png,jpg,jpeg}", { eager: true, import: "default" })
const versaiGlob = import.meta.glob("../assets/versai/*.{png,jpg,jpeg}", { eager: true, import: "default" })
const puredentGlob = import.meta.glob("../assets/puredent/*.{png,jpg,jpeg}", { eager: true, import: "default" })

const blwireGalleryImages = [
  blwireShot80,
  blwireShot81,
  blwireShot82,
  blwireShot83,
  blwireShot85,
  blwireShot86,
]

const jobfindGalleryImages = [
  jobfindShot20260328_015512,
  jobfindShot20260328_015528,
  jobfindShot85,
  jobfindShot86,
  jobfindShot87,
  jobfindShot88,
]

function galleryUrls(glob, { excludeFeature = true } = {}) {
  return Object.entries(glob)
    .filter(([path]) => !excludeFeature || !path.includes("feature"))
    .map(([, url]) => url)
    .sort()
}

export const heroContent = {
  name: "Aoaye Imoagene",
  email: "aoayeisaac@gmail.com",
  role: "Software Engineer | AI/ML Engineer | Full-Stack Developer",
  status: "Recent Graduate | Open to Work",
  summary:
    "Building practical products with clear UX, strong engineering quality, and measurable outcomes.",
  coreStack: ["Python", "JavaScript", "C#", "TensorFlow", "Docker", "AWS"],
  profileImage: profilePic,
  socials: [
    { type: "github", href: "https://github.com/aoaye" },
    { type: "linkedin", href: "https://www.linkedin.com/in/aoaye-imoagene/" },
    { type: "x", href: "https://x.com/aoaye_i?s=09" },
  ],
}

export const aboutContent =
  "A results-driven developer focused on building real-world systems combining machine learning, full-stack engineering, and product design. Passionate about solving practical problems through scalable and user-focused solutions."

export const techStackContent = {
  languages: ["Python", "JavaScript", "C#", "PHP", "R", "SQL", "HTML", "CSS"],
  frameworks: [
    "React",
    "Node.js",
    "NestJS",
    "Express",
    "FastAPI",
    "Django",
    "Flutter",
    ".NET (WPF, ASP.NET)",
    "PyTorch",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "SQLAlchemy",
    "OpenPyXL",
    "Pygame",
  ],
  mlData: [
    "Pandas",
    "NumPy",
    "OpenCV",
    "SciPy",
    "UMAP",
    "Apache Spark",
    "Hugging Face",
    "Tokenizers",
    "Embeddings",
    "Imbalanced-learn",
  ],
  tools: [
    "Docker",
    "Git",
    "GitHub",
    "GitLab CI/CD",
    "AWS (ECR, App Runner, EC2)",
    "GCP",
    "Railway",
    "Jupyter Notebook",
    "Google Colab",
    "Streamlit",
  ],
  databases: ["PostgreSQL", "SQL Server", "MariaDB"],
  design: ["Figma", "UI/UX Design", "Design Systems", "Prototyping"],
}

export const footerContent = {
  email: "aoayeisaac@gmail.com",
  linkedin: "https://www.linkedin.com/in/aoaye-imoagene/",
  github: "https://github.com/aoaye",
  stackNote: "Built with React, Tailwind CSS, and Vite.",
}

export const projects = [
  {
    title: "CarVision - AI-Powered Car Recognition System",
    date: "March 2025",
    description:
      "A full-stack mobile and web app that identifies car makes and models from images in real time.",
    highlights: [
      "Real-time image recognition with top-3 predictions and high classification accuracy.",
      "Cross-platform experience through Flutter mobile and Streamlit web interfaces.",
      "Cloud-ready ML workflow from dataset processing to deployed inference.",
    ],
    useCase:
      "Helps users identify unknown vehicles, supports insurance checks, and improves listing verification for marketplaces.",
    targetUsers: "Car enthusiasts, dealerships, and insurance professionals.",
    keyFeatures: [
      "Image upload with near real-time inference",
      "Top-3 predictions with confidence scores",
      "Mobile and web access paths",
      "Cloud-hosted API endpoint for model serving",
    ],
    stack: [
      "TensorFlow (Keras)",
      "FastAPI",
      "Flutter",
      "Streamlit",
      "Docker",
      "AWS (ECR, App Runner)",
      "Pandas",
      "NumPy",
      "OpenCV",
    ],
    video: null,
    demoImage: carvisionFeature,
    images: galleryUrls(carvisionGlob),
    links: [
      { type: "github", label: "GitHub", href: "https://github.com/aoaye/Capstone_Project_CompSci25" },
      { type: "streamlit", label: "Streamlit", href: "http://carvision.streamlit.app/" },
    ],
    challenges: [
      {
        title: "Dataset label extraction from .mat format",
        problem: "Labels stored in MATLAB format were not directly usable in the Python training pipeline.",
        cause: "Nested .mat structure and inconsistent readability from Python tools.",
        solution: "Inspected schema with Octave and converted extracted labels into structured CSV mappings.",
        outcome: "Established a reliable image-to-label dataset process for model training.",
      },
      {
        title: "Training performance bottlenecks",
        problem: "Local training cycles were too slow for practical experimentation.",
        cause: "Limited hardware and unoptimized batch settings.",
        solution: "Tuned batch sizing and moved training workloads to Google Colab T4 GPU.",
        outcome: "Reduced training time and increased model iteration speed.",
      },
      {
        title: "Label index mismatch in predictions",
        problem: "Prediction classes were shifted and generated incorrect labels.",
        cause: "Source labels were 1-indexed while TensorFlow expected 0-indexed classes.",
        solution: "Normalized label indexing consistently across dataset prep and inference logic.",
        outcome: "Recovered expected prediction quality and label consistency.",
      },
      {
        title: "Cloud deployment with Docker and AWS",
        problem: "Serving the API to web and mobile clients was difficult to stabilize.",
        cause: "Container and cloud service configuration complexity.",
        solution: "Containerized the FastAPI service and deployed with ECR + App Runner.",
        outcome: "Delivered a stable hosted inference backend for multiple clients.",
      },
    ],
    featured: true,
  },
  {
    title: "Church Platform - Live Service and CMS",
    date: "Jan 2026",
    description:
      "A full-stack church web platform for content management, live participation, and engagement analytics.",
    highlights: [
      "Custom CMS/CRM tooling for managing events, content, and user-facing updates.",
      "Live service delivery integrated without maintaining custom streaming servers.",
      "Viewer analytics with export capability for reporting and planning.",
    ],
    useCase:
      "Gives visitors and members a central digital church experience while giving staff full admin control and visibility.",
    targetUsers: "Prospective visitors, existing members, and church staff administrators.",
    keyFeatures: [
      "Admin dashboard for page and event management",
      "Dynamic live service embed handling",
      "Viewer analytics tracking and export flow",
      "Instagram content integration in public-facing pages",
    ],
    stack: ["React", "JavaScript", "Node.js", "Express", "Multer", "Railway"],
    video: null,
    demoImage: blwireFeature,
    images: blwireGalleryImages,
    links: [
      { type: "github", label: "GitHub", href: "https://github.com/aoaye/blw_ireland_website" },
      { type: "website", label: "Website", href: "https://blwirelandzone.org/" },
    ],
    challenges: [
      {
        title: "Persistent data loss on deployment",
        problem: "Uploaded assets and records were wiped after each deployment.",
        cause: "Railway ephemeral filesystem behavior.",
        solution: "Configured persistent volumes with environment-aware storage paths.",
        outcome: "Preserved uploads and content across deploy cycles.",
      },
      {
        title: "Live streaming without custom infrastructure",
        problem: "Maintaining direct RTMP infrastructure was impractical.",
        cause: "Streaming stack complexity and maintenance overhead.",
        solution: "Embedded YouTube stream playback through managed admin controls.",
        outcome: "Stable and low-overhead live service delivery.",
      },
      {
        title: "Secure production session handling",
        problem: "Admin sessions failed in HTTPS production environment.",
        cause: "Cookie security and proxy trust misconfiguration.",
        solution: "Tuned express-session with secure cookies and trust proxy settings.",
        outcome: "Consistent and secure production authentication behavior.",
      },
      {
        title: "Instagram integration reliability",
        problem: "API token expiration caused repeated social feed failures.",
        cause: "Short-lived API token lifecycle and endpoint constraints.",
        solution: "Replaced API dependency with admin-managed embed workflow.",
        outcome: "Lower-maintenance social display with improved reliability.",
      },
    ],
    featured: true,
  },
  {
    title: "VersAI - AI-Assisted Church AV Presentation System",
    date: "November 2024 - Present",
    description:
      "A desktop and web-assisted presentation system for real-time transcription and semantic content retrieval.",
    highlights: [
      "Combines live speech transcription with semantic retrieval for rapid reference lookup.",
      "Uses vector embeddings for meaning-aware matching instead of strict keyword dependency.",
      "Designed as an enhancement layer for existing presentation workflows.",
    ],
    useCase:
      "Supports live sermons/events where references must be found and displayed instantly with minimal operator friction.",
    targetUsers: "Church AV teams, event production teams, and live content operators.",
    keyFeatures: [
      "Near real-time transcription pipeline",
      "Pre-encoded corpus stored as vector embeddings",
      "Semantic retrieval for context-aware matching",
      "Automatic display support with low-latency intent",
    ],
    stack: [
      "Python",
      "PyQt5",
      "SQLite",
      "SQLAlchemy",
      "Docker",
      "GitLab CI/CD",
      "Whisper",
      "AWS Transcribe",
    ],
    video: PLACEHOLDER_VIDEO,
    demoImage: null,
    images: galleryUrls(versaiGlob, { excludeFeature: false }),
    links: [
      { type: "github", label: "GitHub", href: "https://github.com/Ucheyo/openlp-ai" },
      { type: "download", label: "Installer", href: "https://versaidownload.com/" },
    ],
    challenges: [
      {
        title: "Low-latency semantic retrieval",
        problem: "References needed instant retrieval during live spoken content.",
        cause: "Keyword search failed under paraphrasing and natural speech variation.",
        solution: "Embedded corpus and transcribed utterances for vector similarity matching.",
        outcome: "Delivered practical meaning-aware retrieval in live conditions.",
      },
      {
        title: "Embedding model speed vs quality",
        problem: "Higher-quality models increased inference latency.",
        cause: "Large model complexity in a time-sensitive environment.",
        solution: "Benchmarked Word2Vec, DistilBERT, ALBERT and other options against latency targets.",
        outcome: "Selected balanced models for acceptable semantic quality and runtime.",
      },
      {
        title: "Transcription latency vs accuracy",
        problem: "Best transcription quality settings were too slow for live use.",
        cause: "Accuracy-oriented configurations required more processing time.",
        solution: "Tuned Whisper and AWS Transcribe settings for near real-time trade-offs.",
        outcome: "Maintained practical responsiveness with acceptable recognition quality.",
      },
      {
        title: "Integration with existing tools",
        problem: "Full replacement of existing church tooling reduced adoption.",
        cause: "Users already relied on familiar presentation software.",
        solution: "Built VersAI as an augmentation layer rather than hard replacement.",
        outcome: "Improved uptake and usability without workflow disruption.",
      },
    ],
    featured: true,
  },
  {
    title: "Premier League Predictor - Match Outcome System",
    date: "September 2025",
    description:
      "Machine learning pipeline that predicts season match outcomes from 33 years of Premier League data.",
    highlights: [
      "Built end-to-end pipeline with time-aware validation and model comparison.",
      "Used long-horizon historical datasets with engineered match context features.",
      "Delivered interactive prediction exploration via Streamlit.",
    ],
    useCase:
      "Provides data-supported pre-match outcome predictions for analysts, enthusiasts, and sports insight workflows.",
    targetUsers: "Sports analysts, football enthusiasts, and betting insight users.",
    keyFeatures: [
      "Three-way outcome prediction",
      "Season-based temporal train/validation/test split",
      "Classifier benchmarking and metric comparison",
      "Interactive fixture-level prediction interface",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Seaborn", "Streamlit"],
    video: null,
    demoImage: null,
    images: [],
    links: [],
    challenges: [
      {
        title: "Predicting draw outcomes",
        problem: "Draw class predictions consistently underperformed.",
        cause: "Class imbalance and ambiguous match-state signals.",
        solution: "Applied class weighting and tested resampling strategies.",
        outcome: "Improved draw recall marginally while confirming intrinsic difficulty.",
      },
      {
        title: "Feature separability in close matches",
        problem: "Draws and narrow wins were hard to separate.",
        cause: "Aggregate features lacked finer context detail.",
        solution: "Added recent form and trend-based feature sets.",
        outcome: "Improved overall classification while close-match ambiguity persisted.",
      },
      {
        title: "Model complexity vs class fairness",
        problem: "Higher accuracy models skewed toward dominant classes.",
        cause: "Flexible models over-optimized frequent outcomes.",
        solution: "Balanced evaluation with macro metrics and class-level analysis.",
        outcome: "Clarified trade-offs between headline accuracy and class balance.",
      },
      {
        title: "Temporal generalization across seasons",
        problem: "Model performance shifted significantly across different seasons.",
        cause: "League dynamics changed over time.",
        solution: "Used time-respecting splits with recency-sensitive features.",
        outcome: "Achieved practical generalization while exposing static-model limits.",
      },
    ],
    featured: true,
  },
  {
    title: "JobFind - Job Discovery and Recruitment Platform",
    date: "April 2024",
    description:
      "A dual-sided recruitment platform for role discovery, posting workflows, and applicant tracking.",
    highlights: [
      "Built role-aware user journeys for both recruiters and job seekers.",
      "Implemented practical dashboard workflows and application tracking.",
      "Added salary insight capability inspired by marketplace expectations.",
    ],
    useCase:
      "Centralizes job posting and job search actions in one system with role-specific dashboard experiences.",
    targetUsers: "Job seekers and recruiters/employers.",
    keyFeatures: [
      "Job posting and application flow",
      "Recruiter dashboard for listing lifecycle management",
      "Job seeker dashboard with saved jobs and application status",
      "Role-aware authentication and redirect logic",
    ],
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MariaDB"],
    video: null,
    demoImage: jobfindFeature,
    images: jobfindGalleryImages,
    links: [
      { type: "github", label: "GitHub", href: "https://github.com/aoaye/jobfind" },
      { type: "website", label: "Live site", href: "https://jobfind.infinityfreeapp.com/" },
    ],
    challenges: [
      {
        title: "Multi-role authentication and flow control",
        problem: "Each role required distinct permissions and dashboard routes.",
        cause: "Recruiters and seekers follow different workflows in the same app.",
        solution: "Implemented shared login handling with role-based session routing.",
        outcome: "Reliable role-specific experiences after authentication.",
      },
      {
        title: "Dual-sided platform structure",
        problem: "System had to serve two user groups without fragmented architecture.",
        cause: "Conflicting interaction goals across recruiter and seeker personas.",
        solution: "Created separate dashboard pathways within a unified backend model.",
        outcome: "Clear user journeys while maintaining single platform cohesion.",
      },
      {
        title: "Salary insight feature design",
        problem: "Users needed compensation context beyond listing text.",
        cause: "Baseline job board flows often lacked compensation guidance.",
        solution: "Added role/company salary insight module inspired by Glassdoor patterns.",
        outcome: "Improved platform utility and user decision support.",
      },
    ],
    featured: false,
  },
  {
    title: "DBS Credit Union - WPF Desktop Banking Application",
    date: "April 2023",
    description:
      "A layered C# WPF banking simulation for account operations, transfers, and transaction traceability.",
    highlights: [
      "Implemented three-layer architecture (UI, business logic, and data access).",
      "Delivered full account and transfer operation workflow with validation.",
      "Built secure login and transfer audit history support.",
    ],
    useCase:
      "Simulates front-desk credit union operations for account servicing and controlled transaction handling.",
    targetUsers: "Credit union staff and academic OOP/database evaluation contexts.",
    keyFeatures: [
      "Secure staff authentication",
      "Account creation and management",
      "Deposit, withdrawal, and internal transfer operations",
      "Transfer audit history and input validation",
    ],
    stack: ["C#", "WPF", ".NET Framework 4.7.2", "ADO.NET", "SQL Server"],
    video: null,
    demoImage: null,
    images: [],
    links: [],
    challenges: [
      {
        title: "Layered architecture maintainability",
        problem: "Increasing coupling risked brittle and hard-to-debug code paths.",
        cause: "UI, business logic, and database operations were tightly interdependent.",
        solution: "Separated presentation, business handlers, and data access layers.",
        outcome: "Improved maintainability, readability, and debugging flow.",
      },
      {
        title: "Financial transfer rule enforcement",
        problem: "Transfers required strict account-specific business constraints.",
        cause: "Different account types supported different transfer behaviors.",
        solution: "Implemented business layer validation prior to transfer execution.",
        outcome: "Consistent transfer behavior aligned with business rules.",
      },
      {
        title: "Transaction consistency and persistence",
        problem: "Balance updates needed guaranteed consistency across operations.",
        cause: "Multiple transaction types changed shared account state.",
        solution: "Centralized updates in handler workflows and DB stored procedures.",
        outcome: "Stable and accurate financial state across sessions.",
      },
      {
        title: "Transfer traceability and auditability",
        problem: "Historical transfer visibility was missing.",
        cause: "No persistent audit tracking flow existed.",
        solution: "Added transfer audit records and retrieval UI.",
        outcome: "Enabled transparent transaction review and accountability.",
      },
    ],
    featured: false,
  },
]

export const designWork = [
  {
    title: "Puredent - E-commerce and Brand Experience Design",
    date: "February 2026",
    description:
      "A modern UI/UX concept for a fluoride-alternative toothpaste brand focused on education and conversion.",
    mainImage: puredentFeature,
    links: [
      {
        type: "website",
        label: "Figma file",
        href: "https://www.figma.com/design/IwYH6bWQBCN6qmBO8Vff5z/Puredent?node-id=0-1&t=cJkIxkmIrdoMeTxZ-1",
      },
      {
        type: "website",
        label: "Prototype",
        href: "https://www.figma.com/proto/IwYH6bWQBCN6qmBO8Vff5z/Puredent?node-id=1-2&p=f&viewport=372%2C272%2C0.07&t=bBASKax2QZ2AaC3A-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2&page-id=0%3A1",
      },
    ],
    details: {
      overview:
        "Designed a clean, conversion-focused interface that balances product commerce with education and campaign storytelling.",
      focusAreas: [
        "E-commerce optimization with strong product discovery and CTA hierarchy",
        "Educational content integration to improve trust and clarity",
        "Campaign visibility for charity initiatives",
        "Mobile-first responsive planning across page templates",
      ],
      designSystem: [
        "Reusable components for consistency and scalability",
        "Brand-aligned typography and color structure",
        "Figma Auto Layout for responsive composition",
        "Interactive prototype transitions and linked flows",
      ],
      tools: ["Figma"],
      status: "Design completed; website development in progress.",
    },
    images: galleryUrls(puredentGlob),
  },
]
