import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wind",
  description:
    "3D Aiming does not do everything. Mastering yourself only takes you so far. The biggest variable is still the air.",
};

export default function WindPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Framework 06</p>
          <h1>
            After you can send the arrow, learn the{" "}
            <span className="accent">air.</span>
          </h1>
          <p className="lede">
            3D Aiming does not do everything. A strong execution is only a
            plaster if you leak points to the wind. Mastering yourself only
            takes you so far. The biggest variable is still the air.
          </p>
        </div>
      </header>
      <article className="wrap article">
        <h2>Every shoot has wind</h2>
        <p>
          Strong or light, it is there. Treat it as a positive. It gives you
          more ways to beat people than technique and nerve alone. The score
          belongs to whoever keeps the average in the middle.
        </p>
        <p>
          Wind is a vector. It has direction, and it is moving. The flag on
          your own target is often not the wind that will meet the arrow. Look
          for the future: the air that is coming, not the air that has already
          passed you.
        </p>

        <h2>Five ways to be better than the person next to you</h2>
        <ul>
          <li>Deal with it as a fact, not an insult.</li>
          <li>Predict it better — timing, and the aiming spot.</li>
          <li>Hold better: feet, legs, core. Hooked and ready.</li>
          <li>
            Shoot the shot for the wind. Movement before, during, and after
            the click. Accept a larger aiming point and move decisively. Faster
            movement is affected less.
          </li>
          <li>Accept the fliers. Stay centred for the calm.</li>
        </ul>

        <h2>Reading it</h2>
        <p>
          Use many indicators: target flags, feather flags, trees, tents,
          grass, the feel on your own body. Crosswind, headwind, and tailwind
          ask for different eyes. Plot every end. Most points live in the
          centre; do not let scoring distract you from whether the group is
          drifting.
        </p>
        <p>
          Know when to come down. Often that decision is earlier than people
          like. Use the clock. Avoid the worst wind. Choose every arrow’s
          aiming point. If you move the sight, remember how far, in case the
          air drops.
        </p>
        <div className="note">
          <p>
            Learn the air and other people’s problem becomes your score. Enjoy
            it: more ways to be better.
          </p>
        </div>
        <p style={{ marginTop: "2rem" }}>
          <Link className="btn btn-ghost" href="/foundations/">
            Foundations of Recurve
          </Link>
        </p>
      </article>
    </>
  );
}
