export const projects = [
  {
    title: "AI Document Assistant",
    desc: "A Retrieval-Augmented Generation chatbot that lets users ask questions about PDF documents using semantic search, FAISS retrieval, and GPT-OSS 20B for grounded answers with source references.",
    tech: "Python · RAG · Sentence Transformers · FAISS · GPT-OSS 20B · Groq · Streamlit",
    link: "https://github.com/YASH-ANPAT/ai-document-assistant",
    demo: "https://yash-rag-chatbot.streamlit.app/"
  },
  {
    title: "Predictive Maintenance Platform",
    desc: "An end-to-end machine learning platform that monitors equipment telemetry, predicts failure probability using XGBoost, generates maintenance recommendations, and provides SHAP-based explanations through a React dashboard.",
    tech: "Python · XGBoost · FastAPI · PostgreSQL · React · SHAP · Docker",
    link: "https://github.com/YASH-ANPAT/predictive-maintenance-platform",
    demo: "https://predictive-maintenance-platform-gamma.vercel.app/"
  },
  {
    title: "Delivery Time Prediction (ML Web App)",
    desc: "A machine learning-based web application that predicts food delivery time using multiple r egression, with real-world location input handled via OpenCage API and a user-friendly Flask interface.",
    tech: "Python · Flask · Pandas · Scikit-learn · HTML · CSS · REST API",
    link: "https://github.com/YASH-ANPAT/food-delivery-time-prediction",
    demo: "https://food-delivery-time-prediction-nal6.onrender.com/"
  },
  {
    title: "NewsHub (News API Web App)",
    desc: "A Flask-based web application that fetches real-time news using NewsAPI, allowing users to search topics and view articles with a clean UI.",
    tech: "Python · Flask · HTML · CSS · REST API",
    link: "https://github.com/YASH-ANPAT/news-api-flask-project"
  },
  {
    title: "MediKeeps(Hospital Management System)",
    desc: "A full-stack system designed to manage hospital operations including doctors, patients, and appointment scheduling.",
    tech: "Python · Django · HTML · CSS · Database",
    link: "https://github.com/YASH-ANPAT/medikeeps-hospital-management-system"
  },
  {
    title: "School Management System",
    desc: "A system designed to manage student records and administrative operations efficiently.",
    tech: "Python · SQL · HTML · CSS",
    link: "https://github.com/YASH-ANPAT"
  },
];

export const projectVisuals = [
  {
    accent: "from-red-950/30 via-zinc-900/70 to-black",
    label: "RAG SYSTEM",
    image: "/project-images/ai-document-assistant.png",
    techItems: [
      "Python",
      "RAG",
      "Sentence Transformers",
      "FAISS",
      "GPT-OSS 20B",
      "Groq",
      "Streamlit"
    ],
  },
  {
    accent: "from-red-950/40 via-zinc-900/70 to-black",
    label: "ML PLATFORM",
    image: "/project-images/predictive-maintenance.png",
    techItems: [
      "Python",
      "XGBoost",
      "FastAPI",
      "PostgreSQL",
      "React",
      "SHAP",
    ],
  },
  {
    accent: "from-zinc-800/80 via-red-950/20 to-black",
    label: "ML App",
    image: "/project-images/food-delivery.png",
    techItems: ["Python", "Flask", "Pandas", "Scikit-learn", "HTML", "CSS", "REST API"],
  },
  {
    accent: "from-neutral-800/85 via-zinc-950/60 to-red-950/20",
    label: "News API",
    image: "/project-images/newshub.jpeg",
    techItems: ["Python", "Flask", "HTML", "CSS", "REST API"],
  },
  {
    accent: "from-red-950/25 via-neutral-900/75 to-black",
    label: "Django",
    image: "/project-images/medikeeps.jpeg",
    techItems: ["Python", "Django", "HTML", "CSS", "Database"],
  },
  {
    accent: "from-zinc-700/50 via-black to-red-950/25",
    label: "Admin",
    image: null,
    techItems: ["Python", "SQL", "HTML", "CSS"],
  },
];

export const projectCards = projects.map((project, index) => ({
  ...project,
  ...projectVisuals[index],
}));
