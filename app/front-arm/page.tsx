import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Front arm",
  description:
    "Club coaches say keep the arm up. They do not tell you how. Fix the structure, then the intent.",
};

export default function FrontArmPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Framework 03</p>
          <h1>
            Keep the arm up is not a <span className="accent">method.</span>
          </h1>
          <p className="lede">
            Club coaches say it. They do not tell you how. Usually the force is
            already pointing down: shoulder higher than the hand, bow-side ribs
            high, spine bowed away. The arm has nowhere to go but drop.
          </p>
        </div>
      </header>
      <article className="wrap article">
        <h2>Structure, then intent</h2>
        <ul>
          <li>
            A 3–4&nbsp;inch metal extender. Forward momentum. Do not balance
            the bow to neutral.
          </li>
          <li>
            3D Aiming: change the intent. Force into the target. Snap the
            wrist. Aim with the watch.
          </li>
          <li>
            Shoulder: inside-out. Lats on the draw. Pecs like pegging one side
            of a tent.
          </li>
          <li>
            Ribcage: base of the ribs away from the target. Mid-spine, not a
            shrug.
          </li>
          <li>
            Train it: side planks with control, the shooting band, and keep
            the line after the shot.
          </li>
        </ul>

        <h2>The ground</h2>
        <p>
          Power does not start in the shoulder. Drive from the ground up. The
          inside edge of the rear foot into the bow arm. Shoulders over heels
          — a narrow vertical cylinder, not a lean onto the bow. Head up.
          Tongue to the roof. Rear shoulder down, so the scapula can actually
          rotate.
        </p>
        <div className="note">
          <p>The arm stays up when the skeleton and the force agree.</p>
        </div>
        <p style={{ marginTop: "2rem" }}>
          <Link className="btn btn-ghost" href="/wind/">
            Next: the wind
          </Link>
        </p>
      </article>
    </>
  );
}
