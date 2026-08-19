import Link from "next/link";
import { primaryNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <p className="signoff">Enjoy your archery.</p>
          <p>
            {site.person}
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/school/">School</Link>
        </nav>
      </div>
    </footer>
  );
}
