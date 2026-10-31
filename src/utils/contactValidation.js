export const contactInitialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  if (!values.message.trim()) {
    errors.message = "Please write a short message.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please use at least 20 characters.";
  }

  return errors;
}

export function createMailtoUrl(values) {
  const body = [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    "",
    values.message.trim(),
  ].join("\n");

  return `mailto:anpatyash16@gmail.com?subject=${encodeURIComponent(
    values.subject.trim()
  )}&body=${encodeURIComponent(body)}`;
}
