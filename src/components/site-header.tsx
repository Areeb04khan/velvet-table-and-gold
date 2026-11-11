import { Link, useRouterState } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { restaurant } from "@/lib/menu";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/visit", label: "Visit Us" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-velvet-deep/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/60 font-display text-sm font-semibold tracking-widest text-gold shadow-gold-glow">
            TVT
          </span>
          <span className="hidden leading-tight min-[400px]:block">
            <span className="block whitespace-nowrap font-display text-lg font-semibold text-gold-gradient">
              The Velvet Table
            </span>
            <span className="block whitespace-nowrap text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Resto &amp; Cafe
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const active = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`whitespace-nowrap rounded-md px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors sm:px-3 sm:text-sm sm:tracking-[0.18em] ${
                  active ? "text-gold" : "text-cream/75 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <a
          href={`tel:${restaurant.phone}`}
          aria-label={`Call The Velvet Table at ${restaurant.phone}`}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground shadow-gold-glow transition-transform hover:scale-105 sm:w-auto sm:px-4"
        >
          <Phone aria-hidden="true" size={17} />
          <span className="hidden text-xs font-semibold sm:inline">{restaurant.phone}</span>
        </a>
      </div>
    </header>
  );
}
