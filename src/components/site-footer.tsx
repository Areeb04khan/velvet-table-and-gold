import { Link } from "@tanstack/react-router";

import { restaurant } from "@/lib/menu";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-velvet-deep py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <div>
          <p className="font-display text-2xl font-semibold text-gold-gradient">
            The Velvet Table
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {restaurant.tagline}
          </p>
        </div>
        <nav className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-cream/70">
          <Link to="/" className="transition-colors hover:text-gold">
            Home
          </Link>
          <Link to="/menu" className="transition-colors hover:text-gold">
            Menu
          </Link>
          <Link to="/visit" className="transition-colors hover:text-gold">
            Visit Us
          </Link>
        </nav>
        <p className="max-w-md text-sm text-muted-foreground">{restaurant.address}</p>
        <a
          href={restaurant.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs uppercase tracking-[0.2em] text-gold underline-offset-4 hover:underline"
        >
          Find us on Google Maps
        </a>
        <p className="text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} The Velvet Table Resto &amp; Cafe · Pure Vegetarian
        </p>
      </div>
    </footer>
  );
}
