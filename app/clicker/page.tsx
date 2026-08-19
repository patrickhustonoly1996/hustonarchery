import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The clicker",
  description:
    "The clicker is not a test you sit when you are ready. It is how the shot becomes subconscious.",
};

export default function ClickerPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Framework 02</p>
          <h1>
            A trigger, not an <span className="accent">exam.</span>
          </h1>
          <p className="lede">
            The clicker is not a test you sit when you are ready. It is how the
            shot becomes subconscious. Its obvious job is draw length. Its real
            job is a trigger.
          </p>
        </div>
      </header>
      <article className="wrap article">
        <h2>Why everyone at the top uses one</h2>
        <p>
          Without it, people get stiff, they decide when to shoot, and they
          wait years for a consistency that never arrives. Not using a clicker
          trains the wrong dynamics. Every top recurve uses one. Learn that
          habit now. Do not wait until someone at the club declares you ready.
        </p>
        <p>
          Set the clicker to your draw length. Do not drag your draw length to
          the clicker.
        </p>

        <h2>Starting gaps</h2>
        <p>
          Set a little short of full draw and move through. Execute on the
          click. Movement before, during, and after.
        </p>
        <ul>
          <li>Beginner: 12–18&nbsp;mm</li>
          <li>Intermediate: 7–15&nbsp;mm</li>
          <li>Advanced: 4–8&nbsp;mm</li>
          <li>Elite: 1.5–5&nbsp;mm</li>
        </ul>
        <p>
          Those are guidelines, not a test. Relaxed on bone alignment, with
          room to expand. A sight clicker on the extension bar is excellent
          for new archers. First time: a close target, or a big face.
        </p>

        <h2>Using it</h2>
        <p>
          “Pulling through the clicker” is only half. Push forwards. Accept
          the float. One pressure. Do not make tension. Make movement.
        </p>
        <p>
          If you are stuck under it: move. Both sides. Lead with the elbow,
          never the hand first. Keep the inside-arm lines long and relaxed.
        </p>
        <div className="note">
          <p>
            The goal is subconscious triggering. Trust the process even when
            the first sessions feel uncontrolled.
          </p>
        </div>
        <p style={{ marginTop: "2rem" }}>
          <Link className="btn btn-ghost" href="/front-arm/">
            Next: the front arm
          </Link>
        </p>
      </article>
    </>
  );
}
