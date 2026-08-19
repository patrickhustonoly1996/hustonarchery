"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Mark } from "./Mark";
import { headerNav, primaryNav, site } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <Mark />
          <span className="brand-copy">
            <span className="brand-name">{site.name}</span>
            <span className="brand-sub">{site.person}</span>
          </span>
        </Link>
        <nav className="nav-desktop" aria-label="Primary">
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <nav id="mobile-nav" className={`menu-panel${open ? " open" : ""}`} aria-label="Mobile">
        <div className="wrap">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/school/" onClick={() => setOpen(false)}>
            School
          </Link>
        </div>
      </nav>
    </header>
  );
}
