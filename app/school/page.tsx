import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "School",
  description:
    "The school stays in Level Up. Huston Archery is the coaching and master brand.",
};

export default function SchoolPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">School</p>
          <h1>
            The school is <span className="accent">Level Up</span>
          </h1>
          <p className="lede">
            Courses, the classroom, and the app live at Level Up. This site is
            Huston Archery: coaching, and the master brand. They are not the
            same thing, and they do not share a colour.
          </p>
        </div>
      </header>
      <article className="wrap article">
        <p>
          If you want the school, go there. If you want the teaching voice and
          the coaching, stay here.
        </p>
        <p style={{ marginTop: "2rem" }}>
          <a
            className="btn btn-primary"
            href={site.schoolUrl}
            rel="noreferrer"
          >
            levelup-archery.com
          </a>
        </p>
      </article>
    </>
  );
}
