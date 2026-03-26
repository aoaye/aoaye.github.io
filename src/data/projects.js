export const projects = [
  {
    title: "ServiceFlow Analytics",
    description: "Church operations dashboard for attendance, planning, and volunteer workflow visibility.",
    highlights: [
      "Consolidates weekly ministry metrics in one place.",
      "Reduces manual reporting overhead for admin staff.",
    ],
    useCase: "Supports weekly service planning with real-time attendance and team insights.",
    targetUsers: "Church administrators, coordinators, and service leads.",
    keyFeatures: [
      "Attendance trend snapshots",
      "Volunteer scheduling board",
      "Exportable weekly summary reports",
    ],
    stack: ["React", "Tailwind CSS", "Vite", "Node.js"],
    video: "https://www.youtube.com/embed/ysz5S6PUM-U",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
    ],
    links: [
      { type: "website", label: "Website", href: "https://example.com" },
      { type: "github", label: "GitHub", href: "https://github.com" },
    ],
    challenges: [
      {
        title: "Reporting latency",
        problem: "Weekly summary queries were too slow during peak load.",
        cause: "Repeated large aggregations on raw event tables.",
        solution: "Added cached summary slices and query indexing.",
        outcome: "Dashboard response times stayed fast during service windows.",
      },
    ],
    featured: true,
  },
  {
    title: "RoadReady Classifier",
    description: "ML-assisted vehicle listing helper that estimates price bands from listing attributes.",
    highlights: [
      "Improves listing consistency with confidence-driven suggestions.",
      "Helps teams review pricing before publishing inventory.",
    ],
    useCase: "Guides internal teams when preparing car listings for marketplace release.",
    targetUsers: "Dealership listing teams and sales coordinators.",
    keyFeatures: [
      "Confidence score output",
      "Feature contribution summary",
      "Batch CSV inference support",
    ],
    stack: ["Python", "Streamlit", "scikit-learn"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    ],
    links: [
      { type: "streamlit", label: "Streamlit", href: "https://streamlit.io" },
      { type: "github", label: "GitHub", href: "https://github.com" },
    ],
    challenges: [
      {
        title: "Regional data drift",
        problem: "Prediction quality varied across inventory regions.",
        cause: "Input distributions differed from training assumptions.",
        solution: "Added normalization and regional weighting adjustments.",
        outcome: "Prediction behavior became more consistent across datasets.",
      },
    ],
    featured: true,
  },
  {
    title: "Campus Event Hub",
    description: "Central event portal for schedules, registration links, and organizer updates.",
    highlights: [
      "Makes event discovery easier for students and staff.",
      "Reduces duplicate posting across separate channels.",
    ],
    useCase: "Publishes recurring campus events in one searchable destination.",
    targetUsers: "Students, faculty members, and event organizers.",
    keyFeatures: [
      "Category and tag filtering",
      "Mobile-friendly agenda cards",
      "Simple event publishing flow",
    ],
    stack: ["React", "Tailwind CSS", "Vite"],
    video: null,
    images: [],
    links: [
      { type: "website", label: "Website", href: "https://example.com" },
      { type: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
    ],
    challenges: [],
    featured: false,
  },
  {
    title: "DocTrack API",
    description: "Document lifecycle API that tracks status transitions and delivery confirmations.",
    highlights: [
      "Standardizes status updates across internal systems.",
      "Improves traceability for audit and compliance checks.",
    ],
    useCase: "Manages document handoff events for operations and compliance teams.",
    targetUsers: "Operations analysts and internal audit stakeholders.",
    keyFeatures: [
      "Immutable status history logs",
      "Webhook callback delivery",
      "Retry-safe idempotent endpoints",
    ],
    stack: ["Node.js", "Express", "PostgreSQL"],
    video: null,
    images: [],
    links: [
      { type: "github", label: "GitHub", href: "https://github.com" },
      { type: "download", label: "Download", href: "https://example.com" },
    ],
    challenges: [],
    featured: false,
  },
]
