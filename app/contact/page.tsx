import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Write to ${site.email}. Coaching enquiries for Huston Archery.`,
};

export default function ContactPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Contact</p>
          <h1>
            Write to <span className="accent">Patrick</span>
          </h1>
          <p className="lede">
            The address is{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. That inbox is
            Google Workspace on {site.domain}.
          </p>
        </div>
      </header>
      <div className="wrap article">
        <ContactForm />
      </div>
    </>
  );
}
