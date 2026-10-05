const experiments = [
  {
    number: "02",
    status: "PLANNED",
    title: "AUTONOMOUS ML ENGINE",
    category: "MACHINE LEARNING SYSTEMS",
    description:
      "An intelligent experimentation system that automates data profiling, feature engineering, model selection, training, evaluation, and optimization.",
    flow: "PROFILE → ENGINEER → TRAIN → EVALUATE → OPTIMIZE",
  },
  {
    number: "03",
    status: "PLANNED",
    title: "FRAUD INTELLIGENCE",
    category: "REAL-TIME ML",
    description:
      "A machine learning system designed to detect suspicious transactions, identify anomalies, estimate risk, and explain why a transaction was flagged.",
    flow: "TRANSACTION → RISK → DETECTION → EXPLANATION",
  },
  {
    number: "04",
    status: "PLANNED",
    title: "MULTIMODAL INTELLIGENCE",
    category: "MULTIMODAL AI",
    description:
      "An intelligence system for understanding documents, images, tables, and structured information through retrieval and multimodal reasoning.",
    flow: "DOCUMENT → UNDERSTAND → RETRIEVE → REASON → RESPOND",
  },
];

export default function AILabs() {
  return (
    <main className="ai-labs-page">

      {/* =====================================================
          LAB HEADER
          ===================================================== */}

      <section className="ai-labs-hero">

        <div className="ai-labs-hero-content">
          <div className="ai-labs-hero-copy">
            <p className="ai-labs-kicker">
              / EXPERIMENTATION & RESEARCH
            </p>

            <h1>
              Building systems
              <br />
              that{" "}
              <span className="ai-labs-accent">think</span>
            </h1>

            <p className="ai-labs-hero-description">
              A space for exploring machine learning, retrieval, reasoning,
              and intelligent software systems beyond the boundaries of a
              conventional application.
            </p>
          </div>

          <div className="ai-labs-system-status">
            <span className="ai-labs-status-dot" />
            <span>LAB STATUS</span>
            <strong>ACTIVE</strong>
          </div>
        </div>

        <div className="ai-labs-system-index">
          <div className="ai-labs-system-index-header">
            <span>LAB INDEX</span>
            <span>04 SYSTEMS</span>
          </div>

          <div className="ai-labs-system-index-list">
            <div>
              <span>01</span>
              <strong>A.U.R.A.</strong>
              <em>BUILDING</em>
            </div>

            <div>
              <span>02</span>
              <strong>AUTONOMOUS ML ENGINE</strong>
              <em>PLANNED</em>
            </div>

            <div>
              <span>03</span>
              <strong>FRAUD INTELLIGENCE</strong>
              <em>PLANNED</em>
            </div>

            <div>
              <span>04</span>
              <strong>MULTIMODAL INTELLIGENCE</strong>
              <em>PLANNED</em>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          A.U.R.A.
          ===================================================== */}

      <section className="ai-labs-aura">
        <div className="ai-labs-section-index">
          <span>01</span>
          <span>PRIMARY SYSTEM</span>
        </div>

        <div className="ai-labs-aura-main">
          <div className="ai-labs-aura-copy">
            <p className="ai-labs-kicker">FLAGSHIP EXPERIMENT</p>

            <h2>
              AURA
            </h2>

            <p className="ai-labs-aura-name">
              Automated Retrieval, Understanding &amp; Analysis
            </p>

            <p className="ai-labs-aura-description">
              An experimental intelligence system focused on understanding
              complex information through retrieval, context, and analysis.
              A.U.R.A. explores how intelligent software can move beyond
              simply generating answers toward understanding the systems
              behind the information.
            </p>

            <div className="ai-labs-aura-tags">
              <span>RETRIEVAL</span>
              <span>UNDERSTANDING</span>
              <span>ANALYSIS</span>
              <span>RAG</span>
              <span>CODE INTELLIGENCE</span>
            </div>
          </div>

          <div className="ai-labs-aura-core" aria-hidden="true">
            <div className="ai-labs-core-ring ai-labs-core-ring-outer" />
            <div className="ai-labs-core-ring ai-labs-core-ring-middle" />
            <div className="ai-labs-core-ring ai-labs-core-ring-inner" />

            <div className="ai-labs-core-center">
              <span>A.U.R.A.</span>
              <small>CORE</small>
            </div>

            <span className="ai-labs-core-label ai-labs-core-label-top">
              RETRIEVE
            </span>

            <span className="ai-labs-core-label ai-labs-core-label-right">
              UNDERSTAND
            </span>

            <span className="ai-labs-core-label ai-labs-core-label-bottom">
              ANALYZE
            </span>

            <span className="ai-labs-core-label ai-labs-core-label-left">
              CONTEXT
            </span>
          </div>
        </div>

        <div className="ai-labs-aura-footer">
          <span>STATUS: BUILDING</span>
          <span>01 / 04</span>
        </div>
      </section>

      {/* =====================================================
          EXPERIMENTS
          ===================================================== */}

      <section className="ai-labs-experiments">
        <div className="ai-labs-section-index">
          <span>02—04</span>
          <span>EXPERIMENTAL SYSTEMS</span>
        </div>

        <div className="ai-labs-experiment-intro">
          <h2>
            Beyond the
            <br />
            <span>model.</span>
          </h2>

          <p>
            The lab is where I explore what happens when machine learning
            becomes part of a larger engineered system.
          </p>
        </div>

        <div className="ai-labs-experiment-list">
          {experiments.map((experiment) => (
            <article
              className="ai-labs-experiment"
              key={experiment.number}
            >
              <div className="ai-labs-experiment-number">
                {experiment.number}
              </div>

              <div className="ai-labs-experiment-main">
                <div className="ai-labs-experiment-heading">
                  <span>{experiment.category}</span>
                  <span>{experiment.status}</span>
                </div>

                <h3>{experiment.title}</h3>

                <p>{experiment.description}</p>

                <div className="ai-labs-experiment-flow">
                  {experiment.flow}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          LAB PHILOSOPHY
          ===================================================== */}

      <section className="ai-labs-philosophy">
        <div className="ai-labs-section-index">
          <span>LABgit status</span>
          <span>EXPERIMENTAL METHOD</span>
        </div>

        <div className="ai-labs-philosophy-content">
          <p className="ai-labs-kicker">BUILDING INTELLIGENCE</p>

          <h2>
            Build.
            <br />
            Observe.
            <br />
            <span>Question.</span>
            <br />
            Iterate.
          </h2>

          <div className="ai-labs-philosophy-copy">
            <p>
              These systems are not presented as finished products. They are
              experiments — built to investigate ideas, test assumptions, and
              understand where intelligent software can go next.
            </p>

            <span className="ai-labs-philosophy-line">
              THE LAB IS NEVER DONE.
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER SIGNAL
          ===================================================== */}

      <section className="ai-labs-footer">
        <span>AI LABS / YASH ANPAT</span>

        <div>
          <span className="ai-labs-status-dot" />
          <span>EXPERIMENTATION ACTIVE</span>
        </div>
      </section>

    </main>
  );
}