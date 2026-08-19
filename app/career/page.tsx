import type { Metadata } from "next";
import Link from "next/link";
import { careerBeats, type CareerStill } from "@/lib/career";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Official highlights: a decade of national and international recurve. Rio, Tokyo, records, and British titles.",
};

function Stills({ stills }: { stills?: CareerStill[] }) {
  if (!stills?.length) {
    return <div className="still" aria-hidden="true" />;
  }

  return (
    <div className={stills.length > 1 ? "stills" : undefined}>
      {stills.map((still) => (
        <figure className="still" key={still.src}>
          {/* Prefix site.basePath while the GitHub Pages project preview is live. */}
          <img src={`${site.basePath}${still.src}`} alt={still.alt} width={480} height={320} />
        </figure>
      ))}
    </div>
  );
}

export default function CareerPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Career</p>
          <h1>
            Over a decade at the{" "}
            <span className="accent">front.</span>
          </h1>
          <p className="lede">
            National and international dominance, in the official results.
            Short dated beats. Not the full book.
          </p>
        </div>
      </header>
      <div className="wrap article">
        <ol className="timeline">
          {careerBeats.map((beat) => (
            <li key={`${beat.year}-${beat.title}`}>
              <p className="year">{beat.year}</p>
              <div>
                <h2>{beat.title}</h2>
                {beat.place ? <p className="place">{beat.place}</p> : null}
              </div>
              <Stills stills={beat.stills} />
            </li>
          ))}
        </ol>
        <p style={{ marginTop: "2.5rem" }}>
          <Link className="btn btn-ghost" href="/coaching/">
            Work with Patrick
          </Link>
        </p>
      </div>
    </>
  );
}
