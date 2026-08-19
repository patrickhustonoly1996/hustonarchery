import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "3D Aiming",
  description:
    "The clicker is in the middle of the movement. Direction to the target is the skill. Follow-through is the last chance to steer the arrow.",
};

export default function ThreeDAimingPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Framework 01</p>
          <h1>
            The clicker is in the middle of the <span className="accent">movement.</span>
          </h1>
          <p className="lede">
            You are not aiming on a flat picture. You are sending force down a
            line — up and down, left and right, and into the target. Longer
            direction, more control. The tube to the ten. Make the pipe a
            funnel.
          </p>
        </div>
      </header>
      <article className="wrap article">
        <h2>Why this comes first</h2>
        <p>
          The action phase of archery is while the arrow is leaving the bow,
          not before. The shot does not finish as the arrow leaves. It finishes
          after — which is the only remaining chance to control where it goes.
        </p>
        <p>
          Conventional follow-through is not good enough. “Keep the arm up”
          and “don’t collapse” are not granular, and they are not a method. 3D
          Aiming is the first thing I cover with every athlete, and I return
          to it.
        </p>

        <h2>How it works</h2>
        <ul>
          <li>
            Keep moving after the click. The shot finishes after the arrow has
            left.
          </li>
          <li>
            Push the bow. Aim with the wrist-watch. The front hand snaps into a
            second position.
          </li>
          <li>
            Horsepower from the shoulder and chest. Intelligence from the hand.
          </li>
          <li>
            Connect to the ground. Do not shoot a light, neutrally balanced
            bow. A 3–4&nbsp;inch metal extender helps the force go forward.
          </li>
          <li>Outdoors, pick your spot.</li>
        </ul>

        <h2>How you learn it</h2>
        <p>
          The shooting-band drill. Over-exaggerate. Fake it until the dots
          join, even with a delay. Blank boss helps. Relax and let it happen.
          The clicker stays in the middle of the movement the whole time.
        </p>
        <div className="note">
          <p>
            If you take one thing: direction to the target is the skill.
            Conventional “keep the arm up” is not enough.
          </p>
        </div>
        <p style={{ marginTop: "2rem" }}>
          <Link className="btn btn-ghost" href="/clicker/">
            Next: the clicker
          </Link>
        </p>
      </article>
    </>
  );
}
