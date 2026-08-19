import Link from "next/link";

export default function NotFound() {
  return (
    <header className="page-hero">
      <div className="wrap">
        <p className="kicker">404</p>
        <h1>
          This page is not <span className="accent">here.</span>
        </h1>
        <p className="lede">Start from the home page, or from 3D Aiming.</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/">
            Home
          </Link>
          <Link className="btn btn-ghost" href="/3d-aiming/">
            3D Aiming
          </Link>
        </div>
      </div>
    </header>
  );
}
