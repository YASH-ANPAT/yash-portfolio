---
name: yash-ai-knowledge
description: "Use when auditing, updating, validating, or reporting on docs/yash-ai-knowledge-base/ records, project provenance, AI Labs data, public links, or recruiter-assistant grounding."
---

# YASH AI Knowledge-Base Management

Maintain `docs/yash-ai-knowledge-base/` as a source-backed, conservative knowledge base for the YASH portfolio and future recruiter-focused assistant.

## Use This Skill When

- Auditing or reconciling profile, project, AI Labs, schema, policy, or link-audit records.
- Adding or correcting facts from repository documentation, public URLs, or user-provided evidence.
- Validating JSON, provenance, deployment claims, or cross-file consistency.
- Preparing an audit report or assistant-grounding update.

## Evidence and Classification

1. Inspect every relevant knowledge-base file before editing.
2. Record the source URL or repository path for each factual claim and preserve its provenance.
3. Record the verification date for audits and link checks.
4. Classify claims explicitly:
   - `verified`: supported by reviewed public source or successful targeted verification.
   - `user-confirmed`: supplied directly by the user; preserve the confirmation context.
   - `unverified`: claimed or listed but not sufficiently checked.
   - `unknown`: not established by available evidence.
5. Keep planned, building, repository-documented, and deployed statuses distinct.
6. Never invent facts, metrics, achievements, employment, education details, user counts, model accuracy, production use, or deployment health.
7. Treat a URL being present as a listed link, not proof that the destination or demo is live.
8. For group projects, describe the group context and documented role without implying sole authorship.

## Record Maintenance

- Preserve existing source URLs, dates, uncertainty, limitations, and audit history unless correcting them with stronger evidence.
- Keep project IDs, titles, statuses, and links consistent across project JSON files, profile records, AI Labs data, and audit reports.
- Mark unresolved repository links explicitly; a profile URL is not a dedicated project repository.
- Document discrepancies between local application data and audited public sources instead of silently choosing one.
- Keep deployment status explicitly unknown or not-live-verified unless a separate browser or HTTP check supports a narrower claim.
- Update the answer policy when a new class of uncertainty or attribution rule is introduced.

## Validation Procedure

1. Load and parse every JSON file under `docs/yash-ai-knowledge-base/`.
2. Validate each file against `schema.json`, including the correct document variant.
3. Check required fields, URI/date formats, unique project IDs, and stable titles.
4. Compare project records with application project data and compare AI Labs items/statuses with `src/data/aiLabs.js` when reconciling.
5. Check that unknowns and limitations cover unsupported metrics, achievements, employment, deployment, and evaluation claims.
6. Check link-audit dates and statuses; do not convert reachability into deployment proof.
7. Review the final diff and `git diff --check`.

Use available repository validation tools when present. If a dependency or validator is unavailable, report that limitation rather than silently treating manual parsing as full schema validation.

## Audit Reporting

Report:

- Scope, source dates, and files inspected.
- Verified changes and their provenance.
- Unverified or unknown claims retained.
- Link and deployment caveats.
- Cross-file discrepancies and unresolved issues.
- Validation commands and exact results.
- Recommended next steps.

Do not modify application code when the requested scope is the knowledge base only.
