import type { Metadata } from "next";
import Link from "next/link";
import { frameworks } from "@/lib/site";

export const metadata: Metadata = {
  title: "How I teach",
  description:
    "Six teaching frameworks: 3D Aiming, the clicker, front arm, the ground, how you learn, and wind.",
};

export default function FrameworksPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Frameworks</p>
          <h1>
            How I <span className="accent">teach</span>
          </h1>
          <p className="lede">
            Tips are not a method. A method has a why. These six ideas are the
            spine of the work — first the shot, then the structure that holds
            it, then how the brain keeps it, then the air.
          </p>
        </div>
      </header>
      <div className="wrap article">
        <div className="card-grid">
          {frameworks.map((item) => (
            <Link className="framework" key={item.number} href={item.href}>
              <p className="num">{item.number}</p>
              <h3>{item.title}</h3>
              <p>{item.lede}</p>
            </Link>
          ))}
        </div>
        <div className="note">
          <p>
            University-grade here means frameworks, not slogans. Why the clicker
            sits in the middle of the movement. Why force has to come from the
            ground. Why wind is taught after you can already send the arrow.
            The school — courses, the app, the classroom — stays at{" "}
            <a href="https://levelup-archery.com">levelup-archery.com</a>.
          </p>
        </div>
      </div>
    </>
  );
}
