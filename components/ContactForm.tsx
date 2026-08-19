"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "Coaching enquiry").trim();
    const message = String(data.get("message") || "").trim();

    const body = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus(
      `This form does not send yet. Mail is not wired on the site. Use ${site.email}, or open your mail app from the link below.`,
    );

    window.location.href = mailto;
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Subject
        <select name="subject" defaultValue="Coaching enquiry">
          <option>Coaching enquiry</option>
          <option>A question about the frameworks</option>
          <option>Something else</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="message" required />
      </label>
      <p className="form-note">
        The form is a stub until inbox routing is finished. It will open a mail draft to{" "}
        {site.email}. It will not pretend a message has been sent.
      </p>
      <button className="btn btn-primary" type="submit">
        Open a mail draft
      </button>
      {status ? (
        <p className="form-status" data-kind="ok" role="status">
          {status}{" "}
          <a href={`mailto:${site.email}`}>Write {site.email}</a>
        </p>
      ) : null}
    </form>
  );
}
