import Link from "next/link";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="kicker">{site.name}</p>
          <h1>
            The shot is not over{" "}
            <span className="accent">when the arrow leaves.</span>
          </h1>
          <p className="lede">
            Most coaching stops at “keep the arm up” and “don’t collapse.” That
            is not granular enough. The action phase of archery is while the
            arrow is leaving the bow, and after. That is where you still have a
            say.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/frameworks/">
              How I teach
            </Link>
            <Link className="btn btn-ghost" href="/3d-aiming/">
              3D Aiming
            </Link>
            <Link className="btn btn-ghost" href="/career/">
              Career
            </Link>
            <Link className="btn btn-ghost" href="/coaching/">
              Work with me
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <h2>
            <span className="accent">I</span> teach that as 3D Aiming.
          </h2>
          <p>
            It is the first thing I cover with every athlete I work with, and I
            come back to it no matter how far they go. You are not aiming at a
            flat picture. You are sending force down a line — up and down, left
            and right, and into the target.
          </p>
          <p>
            Follow-through is not a pose you hold for the camera. It is the last
            chance to steer the arrow. Conventional “keep the arm up” is not
            enough. Direction to the target is the skill.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>
            <span className="accent">H</span>ow I teach
          </h2>
          <div className="card-grid">
            <Link className="card" href="/3d-aiming/">
              <p className="num">3D Aiming</p>
              <h3>After the clicker</h3>
              <p>
                Push into the target. Keep moving. The shot finishes after the
                arrow has left.
              </p>
            </Link>
            <Link className="card" href="/clicker/">
              <p className="num">The clicker</p>
              <h3>A trigger, not an exam</h3>
              <p>
                Every top recurve uses one. It sits in the middle of the
                movement. It turns execution into a habit.
              </p>
            </Link>
            <Link className="card" href="/front-arm/">
              <p className="num">The ground</p>
              <h3>Feet into the bow arm</h3>
              <p>
                Power does not start in the shoulder. It starts in the feet and
                arrives in the hand.
              </p>
            </Link>
            <Link className="card" href="/wind/">
              <p className="num">The wind</p>
              <h3>The other half</h3>
              <p>
                Mastering yourself only takes you so far. The biggest variable
                is still the air.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>
            <span className="accent">S</span>tart here
          </h2>
          <div className="grid-2">
            <div className="prose">
              <p>If you already shoot: 3D Aiming.</p>
              <p>If the clicker still feels like an exam: the clicker page.</p>
              <p>
                If you want the whole stack: Foundations of Recurve —
                technique, kit, training, tournaments.
              </p>
            </div>
            <div className="hero-actions" style={{ marginTop: 0, alignContent: "start" }}>
              <Link className="btn btn-primary" href="/3d-aiming/">
                Read 3D Aiming
              </Link>
              <Link className="btn btn-ghost" href="/clicker/">
                The clicker
              </Link>
              <Link className="btn btn-ghost" href="/foundations/">
                Foundations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>
            <span className="accent">P</span>atrick Huston OLY
          </h2>
          <div className="grid-2">
            <div className="prose">
              <p>
                British Olympic recurve. Rio 2016. Tokyo 2020. British Target
                Champion, August 2026, with a National Tour stage that same
                weekend. World record holder. British number one, on and off,
                for a decade.
              </p>
              <p>
                The work is 70 metres outdoors, and field. I coach archers who
                already shoot, and want the shot to hold up when it matters. I
                live at Over Lawley Woods, under the Wrekin.
              </p>
              <p>
                <Link href="/career/">The official highlights</Link> — a decade
                of national and international results. Not the full book.
              </p>
            </div>
            <dl className="facts">
              <div>
                <dt>Discipline</dt>
                <dd>Olympic recurve, 70m outdoor. Field as well.</dd>
              </div>
              <div>
                <dt>Where this sits</dt>
                <dd>
                  Archery GB’s British Target Championships sit at the top of
                  the domestic pyramid — the 70m, the 1440, and the National
                  Tour. The same athletes then shoot World Cups, Europeans,
                  Worlds, and the Games.
                </dd>
              </div>
              <div>
                <dt>This site</dt>
                <dd>
                  Huston Archery is the coaching and master brand. The school
                  lives in Level Up.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
