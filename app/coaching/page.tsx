import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "Work with Patrick Huston OLY. For archers who already shoot, and want the shot to hold up when it matters.",
};

export default function CoachingPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Coaching</p>
          <h1>
            Work with <span className="accent">Patrick</span>
          </h1>
          <p className="lede">
            I coach archers who already shoot, and want the shot to hold up
            when it matters. We start with 3D Aiming. We come back to it.
          </p>
        </div>
      </header>
      <article className="wrap article">
        <h2>What the work is</h2>
        <p>
          Not a second school brand, and not a squeeze page. The teaching is
          the same voice I use on the line: honest, precise, a little formal.
          Frameworks with a why. The clicker in the middle of the movement.
          Force from the ground. Structure that does not collapse under
          pressure. Then the wind.
        </p>
        <p>
          I am a professional coach and a competing athlete. British Olympic
          recurve — Rio, Tokyo — British Target Champion in August 2026, a
          National Tour stage that weekend, world record holder, and British
          number one on and off for a decade. The coaching is built from that
          testing ground, including the years that did not work.
        </p>

        <h2>What it is not</h2>
        <p>
          It is not Level Up. The school — courses, classroom, the app — lives
          at{" "}
          <a href={site.schoolUrl} rel="noreferrer">
            levelup-archery.com
          </a>
          . This site is Huston Archery: coaching, and the master brand.
        </p>
        <p>
          Write if you already have a shot and want it examined properly.
          Bring what you are actually doing, not what you wish you were doing.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/contact/">
            Contact
          </Link>
          <a className="btn btn-ghost" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </article>
    </>
  );
}
