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
