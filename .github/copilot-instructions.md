# YASH Portfolio V3 Project Guidelines

## Stack and Architecture

- Preserve the existing React + Vite application.
- Use JavaScript and JSX, React Router for routing, and Tailwind CSS plus the existing CSS token/page styles for presentation.
- Reuse existing components, data modules, utilities, CSS tokens, and interaction patterns before adding new abstractions.
- Keep shared layout behavior in the existing application shell and avoid introducing a new framework or state-management library without approval.

## Coding Conventions

- Inspect the relevant source, data, styles, and existing patterns before editing.
- Prefer small, surgical changes with clear names and existing formatting conventions.
- Keep components focused, accessible, keyboard-usable, and responsive across desktop, tablet, and mobile.
- Preserve reduced-motion behavior and do not make important interactions hover-only.
- Add comments only for non-obvious decisions.
- Keep user-visible claims grounded in verified project data; never invent metrics, credentials, employment, achievements, or deployment status.

## Change Safety

- Preserve all existing modifications and untracked files. Read and integrate changes in files that must be touched.
- Do not edit `.env` files or expose secrets, tokens, credentials, API keys, or environment-variable values.
- Do not use blanket staging such as `git add .` or `git add -A`.
- Do not run destructive commands, including reset, clean, checkout-overwrite, recursive deletion, or silent file replacement.
- Do not switch branches, merge, rebase, pull, or push unless explicitly approved.
- Never commit without explicit approval. When approved, stage only exact intended paths.

## Validation

- Use the smallest relevant existing validation command.
- Prefer `npm run lint` for linting and `npm run build` only when generated output is allowed.
- Review `git status`, the complete relevant diff, and `git diff --check` after edits.
- Check runtime behavior, links, responsive behavior, accessibility, and console errors when relevant.
- Do not claim validation passed unless the command actually ran and passed.

## Reporting

- Report the actual problem, files changed, validation performed, and remaining risks.
- Clearly distinguish verified findings from assumptions or unresolved information.
- Keep final reports concise and include exact paths for important files.
