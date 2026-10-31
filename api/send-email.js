const requestsByIp = new Map();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function getClientIp(request) {
  return request.headers["x-forwarded-for"]?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const recentRequests = (requestsByIp.get(ip) || []).filter(
    (timestamp) => now - timestamp < WINDOW_MS
  );

  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    requestsByIp.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestsByIp.set(ip, recentRequests);
  return false;
}

function sendJson(response, status, payload) {
  response.status(status).setHeader("Content-Type", "application/json");
  return response.end(JSON.stringify(payload));
}

function validatePayload(payload) {
  const { name, email, subject, message } = payload || {};
  const errors = {};

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.name = "Name is required.";
  }
  if (
    !email ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    errors.email = "A valid email is required.";
  }
  if (!subject || typeof subject !== "string" || subject.trim().length < 2) {
    errors.subject = "Subject is required.";
  }
  if (
    !message ||
    typeof message !== "string" ||
    message.trim().length < 20 ||
    message.trim().length > 2000
  ) {
    errors.message = "Message must be between 20 and 2000 characters.";
  }

  return errors;
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { message: "Method not allowed." });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return sendJson(response, 429, {
      message: "Too many messages. Please try again later.",
    });
  }

  const payload = request.body;
  if (payload?.company) {
    return sendJson(response, 200, { ok: true });
  }

  const errors = validatePayload(payload);
  if (Object.keys(errors).length > 0) {
    return sendJson(response, 400, { message: "Please check the form fields.", errors });
  }

  if (JSON.stringify(payload).length > 12000) {
    return sendJson(response, 413, { message: "Message payload is too large." });
  }

  const { RESEND_API_KEY, RESEND_FROM_EMAIL, CONTACT_TO_EMAIL } =
    globalThis.process?.env || {};
  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    return sendJson(response, 503, {
      message: "Email delivery is not configured.",
    });
  }

  const { name, email, subject, message } = payload;
  const providerResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
      "User-Agent": "yash-portfolio-contact-form",
    },
    body: JSON.stringify({
      from: RESEND_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: email.trim(),
      subject: `[Portfolio] ${subject.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    }),
  });

  if (!providerResponse.ok) {
    console.error("Email provider rejected the message:", providerResponse.status);
    return sendJson(response, 502, {
      message: "The email provider could not deliver this message.",
    });
  }

  return sendJson(response, 200, { ok: true });
}
