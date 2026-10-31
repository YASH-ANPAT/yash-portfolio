# YASH AI Phase 1 — Audited Knowledge Base

This package replaces the initial draft with a source-backed snapshot of public information reviewed on 2026-10-13 and reconciled against the current local application data on 2026-10-28.

## Contents
- `data/profile.json` — verified profile basics and unresolved fields
- `data/projects/*.json` — project facts, technologies, source URLs, limitations and unknowns
- `data/ai-labs.json` — current public AI Labs statuses
- `audit/report.md` — full audit summary
- `audit/link-status.json` — deployment and public-link verification status
- `schema.json` — base record schema
- `policies/answer-policy.md` — grounding and honesty rules

## Important
This is an audit artifact, not a deployed chatbot. JSON records are the canonical source for assistant answers; application data is compared against them and may contain local planned items that are absent from the audited public source. It contains unresolved facts and links that were not live-tested. Do not label demos as verified live unless a separate browser smoke test succeeds. Do not add unverified profile claims.
