export const projects = [
  {
    title: "Predictive Equipment Maintenance Platform",
    description:
      "An end-to-end predictive maintenance platform that uses an XGBoost classification pipeline to predict equipment failure, and provide SHAP-based explanations through a React dashboard.",
    technologies: [
      "Python",
      "XGBoost",
      "FastAPI",
      "PostgreSQL",
      "React",
      "SHAP",
    ],
    githubUrl:
      "https://github.com/YASH-ANPAT/predictive-maintenance-platform",
    demoUrl: "https://predictive-maintenance-platform-gamma.vercel.app/",
    image: "/project-images/predictive-maintenance.png",
    featured: true,
    accent: "from-red-950/40 via-zinc-900/70 to-black",
    label: "ML PLATFORM",
  },
  {
    title: "AI Document Assistant",
    description:
      "A Retrieval-Augmented Generation assistant for semantic search and grounded question answering over PDF documents.",
    technologies: [
      "Python",
      "RAG",
      "Streamlit",
      "LangChain",
      "FAISS",
      "Sentence Transformers",
      "pypdf",
      "GPT-OSS 20B",
      "Groq",
    ],
    githubUrl: "https://github.com/YASH-ANPAT/ai-document-assistant",
    demoUrl: "https://yash-rag-chatbot.streamlit.app/",
    image: "/project-images/ai-document-assistant.png",
    featured: true,
    accent: "from-red-950/30 via-zinc-900/70 to-black",
    label: "RAG SYSTEM",
  },
  {
    title: "Food Delivery Time Prediction",
    description:
      "A machine learning-based web application that predicts food delivery time using multiple regression, with real-world location input handled via OpenCage API and a user-friendly Flask interface.",
    technologies: [
      "Python",
      "Flask",
      "Pandas",
      "Scikit-learn",
      "HTML",
      "CSS",
      "REST API",
    ],
    githubUrl:
      "https://github.com/YASH-ANPAT/food-delivery-time-prediction",
    demoUrl:
      "https://food-delivery-time-prediction-nal6.onrender.com/",
    image: "/project-images/food-delivery.png",
    featured: true,
    accent: "from-zinc-800/80 via-red-950/20 to-black",
    label: "ML APP",
  },
  {
    title: "NewsHub",
    description:
      "A Flask-based web application that fetches real-time news using NewsAPI, allowing users to search topics and view articles with a clean UI.",
    technologies: ["Python", "Flask", "HTML", "CSS", "REST API"],
    githubUrl: "https://github.com/YASH-ANPAT/news-api-flask-project",
    demoUrl: null,
    image: "/project-images/newshub.jpeg",
    featured: false,
    accent: "from-neutral-800/85 via-zinc-950/60 to-red-950/20",
    label: "NEWS API",
  },
  {
    title: "MediKeeps - Hospital Management System",
    description:
      "A full-stack system designed to manage hospital operations including doctors, patients, and appointment scheduling.",
    technologies: ["Python", "Django", "HTML", "CSS", "Database"],
    githubUrl:
      "https://github.com/YASH-ANPAT/medikeeps-hospital-management-system",
    demoUrl: null,
    image: "/project-images/medikeeps.jpeg",
    featured: false,
    accent: "from-red-950/25 via-neutral-900/75 to-black",
    label: "DJANGO",
  },
  {
    title: "Wumpus Game AI",
    description:
      "An AI-driven implementation of the classic Wumpus World game where an intelligent agent navigates a hazardous environment, reasons from available clues, and makes decisions to find the gold while avoiding threats.",
    technologies: ["Python", "Artificial Intelligence", "Game AI"],
    githubUrl:
      "https://github.com/YASH-ANPAT/wumpus-game-ai-agent-project",
    demoUrl: "https://wumpus-and-gold.onrender.com/",
    image: "/project-images/wumpus-game.jpeg",
    featured: false,
    accent: "from-zinc-700/50 via-black to-red-950/25",
    label: "WUMPUS AI",
  },
  {
    title: "School Management System",
    description:
      "A system designed to manage student records and administrative operations efficiently.",
    technologies: ["Python", "SQL", "HTML", "CSS"],
    githubUrl: "https://github.com/YASH-ANPAT",
    demoUrl: null,
    image: null,
    featured: false,
    accent: "from-zinc-700/50 via-black to-red-950/25",
    label: "ADMIN",
  },
];

export const featuredProjects = [
  projects.find(
    (project) => project.title === "Predictive Equipment Maintenance Platform"
  ),
  projects.find((project) => project.title === "AI Document Assistant"),
  projects.find((project) => project.title === "Food Delivery Time Prediction"),
].filter(Boolean);

export const projectCards = projects;
