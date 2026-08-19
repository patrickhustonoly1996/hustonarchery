import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foundations of Recurve",
  description:
    "Technique, equipment, training, and tournaments — the stack under a shot that holds up.",
};

export default function FoundationsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">The stack</p>
          <h1>
            Foundations of <span className="accent">Recurve</span>
          </h1>
          <p className="lede">
            Clubs often give you three keys: back tension, a tight release,
            keep the bow arm up. If that were the whole map, the line would
            already be full of high-level archers. The work is wider than
            that, and more precise.
          </p>
        </div>
      </header>
      <article className="wrap article">
        <h2>Four rooms</h2>
        <p>
          Foundations of Recurve is the whole stack: technique, equipment,
          training, tournaments. Not a pile of tips. A map, so you are not
          spending the hours on the wrong problem.
        </p>
        <div className="card-grid">
          <div className="card">
            <p className="num">Technique</p>
            <h3>How the shot is built</h3>
            <p>
              3D Aiming, the clicker as trigger, the front arm, the kinetic
              chain from the feet, and a structure that does not lean on the
              bow.
            </p>
          </div>
          <div className="card">
            <p className="num">Equipment</p>
            <h3>Kit that helps the force</h3>
            <p>
              A bow that is not neutrally balanced. An extender that sends
              weight forward. Set the clicker to the draw length you actually
              have.
            </p>
          </div>
          <div className="card">
            <p className="num">Training</p>
            <h3>How you learn</h3>
            <p>
              Prime the brain — focus, a little failure, then the cerebellum
              work — and take five to ten quiet minutes after the session.
              New patterns need space to settle.
            </p>
          </div>
          <div className="card">
            <p className="num">Tournaments</p>
            <h3>Where the shot is tested</h3>
            <p>
              Olympic recurve is 70 metres outdoors. At home that means the
              Archery GB Target Championships and the National Tour. Abroad:
              the same athletes on the World Cup, Europeans, Worlds, the
              Games. Field is part of the same craft.
            </p>
          </div>
        </div>
        <h2>How you learn</h2>
        <p>
          Before focused practice: lock the eyes, then a short, honest failure
          at a simple task, then a pose that asks the cerebellum to work. After
          the session: five to ten minutes without a screen. The shot is not
          only trained on the line. It is encoded in the quiet afterwards.
        </p>
        <div className="note">
          <p>
            The fear most archers carry is not the work. It is the suspicion
            that the work is pointed the wrong way. These four rooms exist so
            the hours have a direction.
          </p>
        </div>
        <p style={{ marginTop: "2rem" }}>
          <Link className="btn btn-primary" href="/coaching/">
            Work with Patrick
          </Link>
        </p>
      </article>
    </>
  );
}
