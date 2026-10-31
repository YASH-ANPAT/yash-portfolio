# YASH AI — Phase 1 Public Knowledge Audit and Reconciliation

Audit date: 2026-10-13  
Reconciliation date: 2026-10-28

## Scope
Reviewed the public portfolio URL, public GitHub profile, portfolio source data (`projects.js`, `aiLabs.js`), and available public repositories/readmes/source files for AI Document Assistant, Predictive Maintenance Platform, Food Delivery Time Prediction, NewsHub, MediKeeps, and Wumpus Game AI.

## Confirmed public profile facts
- Public portfolio: https://yash-anpat.vercel.app/
- GitHub profile: https://github.com/YASH-ANPAT
- LinkedIn URL is listed as https://www.linkedin.com/in/yash-anpat/, but the page could not be inspected.
- GitHub profile shows 9 repositories and links to the portfolio.
- The portfolio source lists seven project entries, including School Management System, whose GitHub link currently points to the profile rather than a dedicated repository.

## Project findings
### AI Document Assistant
README documents PDF upload/page-aware extraction, overlapping chunking, Sentence Transformers, FAISS, top-k retrieval, grounded Q&A, GPT-OSS 20B through Groq, source/page references, Streamlit UI, and hallucination-aware prompting. No measured accuracy metric was found in reviewed materials.

### Predictive Equipment Maintenance Platform
README documents React/Vite frontend, FastAPI backend, PostgreSQL persistence, telemetry simulator, XGBoost failure classifier, risk policy, maintenance recommendations, and SHAP explainability. README identifies the AI4I 2020 Predictive Maintenance Dataset. No real-world industrial validation should be claimed without evidence.

### Food Delivery Time Prediction
Inspected `app.py`: Flask app loads `model.pkl`, geocodes locations through OpenCage, builds a 29-feature input and returns estimated delivery time. Several categorical encoded values are hardcoded. No model performance metric was verified.

### NewsHub
Public repository has Flask app, templates/static files, and deployment config. Portfolio describes NewsAPI-based news retrieval. Current runtime behavior and API configuration not tested.

### MediKeeps
README describes a first-year group project at AISSMS College of Engineering, Pune, and lists Yash Anpat among six group members. It is a group project; individual contribution should not be overstated.

### Wumpus Game AI
Public repository exists. Portfolio describes the AI-agent goal, but algorithm-level details and live demo behavior were not confirmed in this audit.

### School Management System
Portfolio lists the project but points its GitHub link to the profile. Dedicated repository and implementation details remain unresolved.

## AI Labs status
The public `main` `aiLabs.js` reviewed on 2026-10-13 contains:
- A.U.R.A. — BUILDING
- Autonomous ML Engine — PLANNED
- Fraud Intelligence — PLANNED
- Multimodal Intelligence — PLANNED

The current local `src/data/aiLabs.js` additionally contains:
- Temporal ML — PLANNED

Temporal ML was not present in the audited public source. It is retained in the reconciled knowledge base as a local planned item, with the discrepancy explicitly recorded. It must not be described as publicly verified, implemented, or deployed.

## Unverified profile facts
The accessible public sources did not reliably establish current degree/graduation date, CGPA, employment/internship history, certifications, awards, hackathon results, or leadership achievements. Do not add these as factual claims until supported by an accessible source or explicitly confirmed by the user with provenance marked as user-confirmed.

## Deployment caveat
A URL in portfolio source is not proof that the app is live. Some deployment URLs could not be inspected by the web reader; that is inconclusive, not proof of downtime. The JSON records distinguish listed links from live-verified deployments.

## Reconciliation findings
- JSON records remain the canonical source for future assistant answers.
- School Management System remains unresolved: its current portfolio repository link points to `https://github.com/YASH-ANPAT`, the general GitHub profile, not a dedicated repository.
- Profile records continue to leave degree details, CGPA, employment, certifications, awards, leadership, and availability unknown because the supplied audit did not verify them.
- Project records retain deployment availability and evaluation metrics as unknown where the supplied audit did not verify them.
- Temporal ML is recorded as `planned` only because it exists in the current local application data; its absence from the audited public source is preserved as a discrepancy.
- The schema now defines variants for project records, the profile aggregate, the AI Labs aggregate, and the link-status audit so every JSON document in this package can be validated consistently.

## Recommended next steps
1. Confirm or supply authoritative profile details (resume or current profile text).
2. Resolve School Management System's dedicated repository link.
3. Confirm whether Temporal ML should be published and update the public source or remove it from the public-facing knowledge set.
4. Manually smoke-test each demo in a normal browser and update link status without converting reachability into deployment proof.
5. Add automated schema and cross-source consistency checks before integrating these JSON records into the chatbot retrieval layer.
