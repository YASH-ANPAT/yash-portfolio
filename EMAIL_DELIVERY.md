# Email delivery setup

The portfolio contact composer sends `POST /api/send-email`. The endpoint is
compatible with Vercel's serverless function runtime and uses the Resend REST
API without exposing credentials to the browser.

## Required deployment variables

Configure these variables in the deployment environment:

- `RESEND_API_KEY` — a Resend API key.
- `RESEND_FROM_EMAIL` — a sender address on a verified Resend domain.
- `CONTACT_TO_EMAIL` — the verified recipient address for portfolio messages.

The API returns a configuration error until all three variables are present.
The composer then shows a mailto fallback rather than reporting a false
delivery success. The fallback uses the existing verified portfolio contact
address.

## Provider setup

1. Create a Resend project and API key.
2. Verify the sending domain, then use an address from that domain for
   `RESEND_FROM_EMAIL`.
3. Set `CONTACT_TO_EMAIL` to the intended inbox.
4. Deploy and submit a test message through the composer.

Resend API documentation:

- https://resend.com/docs/email/send
- https://resend.com/docs/api-reference/introduction

The endpoint validates all fields, rejects honeypot submissions, limits each
client IP to five attempts per hour, and does not return provider credentials
or provider response details to the client. The rate limit is intentionally
lightweight and in-memory; a distributed rate limiter should replace it if the
site receives significant traffic or multiple serverless instances.

## Local API development

`npm run dev` starts the Vite frontend only. It does not execute Vercel
serverless functions. Use `npm run dev:vercel` to run the frontend and both
`/api/send-email` and `/api/assistant` locally through the linked Vercel
project:

1. Make sure the Vercel CLI is available through `npx vercel`.
2. Run `npm run dev:vercel`.
3. Configure local-only values with `vercel env pull .env.local` or an existing
   `.env.local`; never commit that file or print its values.

The assistant requires `GROQ_API_KEY` and optionally `GROQ_MODEL`
(`openai/gpt-oss-20b`). Email delivery requires `RESEND_API_KEY`,
`RESEND_FROM_EMAIL`, and `CONTACT_TO_EMAIL`. These variables must remain
server-side and should be configured separately for Vercel Preview and
Production.

## YASH AI configuration

The portfolio assistant uses the Groq OpenAI-compatible chat-completions API
from the server-side `api/assistant.js` function. Configure these Vercel
environment variables for the assistant:

- `GROQ_API_KEY` — server-only Groq API key; never expose it through `VITE_*`.
- `GROQ_MODEL` — optional model ID; defaults to `openai/gpt-oss-20b`.

The assistant returns a clear configuration error when `GROQ_API_KEY` is
absent; it never fabricates a model response. Its deployed runtime package
contains only the verified public records needed for retrieval. The original
knowledge-base audit reports and answer-policy files are not included in the
assistant context.
