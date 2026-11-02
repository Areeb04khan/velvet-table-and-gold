import { createFileRoute, Link } from "@tanstack/react-router";

import hallAsset from "@/assets/IMG20261102163218.jpg.asset.json";
import { restaurant } from "@/lib/menu";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — The Velvet Table Resto & Cafe, Bindki" },
      {
        name: "description",
        content:
          "Find The Velvet Table Resto & Cafe in Bindki, Fatehpur, Uttar Pradesh — location, directions and how to reach us.",
      },
      { property: "og:title", content: "Visit Us — The Velvet Table Resto & Cafe" },
      {
        property: "og:description",
        content: "Location and directions to The Velvet Table in Bindki, Fatehpur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6">
      <div className="text-center">
        <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Bindki · Fatehpur · U.P.</p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-gold-gradient sm:text-6xl">
          Visit Us
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-cream/85 sm:text-base">
          Right on the bus-stop road in Bindki, in front of Karbala — an easy stop for
          families, travellers and celebration dinners.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* Info card */}
        <div className="velvet-panel rounded-2xl p-8 lg:col-span-2">
          <h2 className="font-display text-2xl font-semibold text-gold">The Velvet Table</h2>
          <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Resto &amp; Cafe · {restaurant.tagline}
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/80">
                Address
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/90">{restaurant.address}</p>
            </div>
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/80">
                Cuisine
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/90">
                Pure vegetarian — Indian tandoor &amp; chaap, oriental, pizza &amp; pasta,
                south Indian, cafe shakes and craft mocktails.
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/80">
                Good to know
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/90">
                Air-conditioned family dining · Indoor seating with royal mural interiors ·
                Great for birthdays and small celebrations.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-gold-glow transition-transform hover:scale-[1.03]"
            >
              Open in Google Maps
            </a>
            <Link
              to="/menu"
              className="rounded-full border border-gold/50 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold/10"
            >
              Browse the Menu
            </Link>
          </div>
        </div>

        {/* Map */}
        <div className="gold-frame overflow-hidden rounded-2xl lg:col-span-3">
          <div className="gold-frame-inner rounded-2xl" />
          <iframe
            title="Map to The Velvet Table Resto & Cafe, Bindki"
            src={restaurant.mapEmbedUrl}
            className="h-80 w-full lg:h-full lg:min-h-[560px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <img
          src={hallAsset.url}
          alt="Dining hall with rattan lamps at The Velvet Table"
          className="h-64 w-full rounded-2xl border border-gold/25 object-cover sm:h-80"
        />
        <div className="velvet-panel flex flex-col justify-center rounded-2xl p-8 text-center">
          <p className="font-display text-3xl font-semibold text-gold-gradient">
            See you at the table
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Walk in for a quiet coffee or bring the whole family for a sizzler night —
            the velvet chairs are waiting.
          </p>
        </div>
      </div>
    </div>
  );
}
