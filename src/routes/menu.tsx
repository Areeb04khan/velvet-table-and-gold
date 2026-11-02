import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import diningAsset from "@/assets/IMG20261102163220.jpg.asset.json";
import { menuCategories } from "@/lib/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — The Velvet Table Resto & Cafe" },
      {
        name: "description",
        content:
          "The full menu of The Velvet Table Resto & Cafe, Bindki: soups, tandoori appetizers, paneer mains, biryani, pizza, pasta, shakes, mocktails and desserts — all pure vegetarian.",
      },
      { property: "og:title", content: "Menu — The Velvet Table Resto & Cafe" },
      {
        property: "og:description",
        content: "Pure vegetarian fine dining menu from Bindki, Fatehpur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MenuPage,
});

function formatINR(value: number) {
  return `₹${value}`;
}

function Price({ half, full }: { half?: number | undefined; full?: number | undefined }) {
  if (half !== undefined && full !== undefined) {
    return (
      <span className="flex shrink-0 items-center gap-2 font-display text-sm text-gold sm:text-base">
        <span className="text-muted-foreground">
          <span className="mr-1 text-[10px] uppercase tracking-wider">Half</span>
          {formatINR(half)}
        </span>
        <span className="text-gold/40">|</span>
        <span>
          <span className="mr-1 text-[10px] uppercase tracking-wider">Full</span>
          {formatINR(full)}
        </span>
      </span>
    );
  }
  return null;
}

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]?.id ?? "");

  const scrollTo = (id: string) => {
    setActiveCategory(id);
    document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      {/* Page hero */}
      <section className="relative flex h-72 items-center justify-center overflow-hidden sm:h-96">
        <img
          src={diningAsset.url}
          alt="The Velvet Table dining hall"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-velvet-deep/70" />
        <div className="relative px-4 text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Pure Vegetarian</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-gold-gradient sm:text-6xl">
            Our Menu
          </h1>
          <p className="mt-3 max-w-lg text-sm text-cream/85 sm:text-base">
            Nineteen sections of tandoor, wok, oven and cafe — every dish 100% veg.
          </p>
        </div>
      </section>

      {/* Category nav */}
      <nav className="sticky top-16 z-40 border-y border-gold/15 bg-velvet-deep/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              className={`shrink-0 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                activeCategory === cat.id
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-gold/25 text-cream/70 hover:border-gold/60 hover:text-gold"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Menu sections */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {menuCategories.map((cat) => (
            <section
              key={cat.id}
              id={`cat-${cat.id}`}
              className="scroll-mt-36 velvet-panel rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="h-px flex-1 bg-gold/40" />
                <h2 className="font-display text-2xl font-semibold tracking-wide text-gold sm:text-3xl">
                  {cat.title}
                </h2>
                <span className="h-px flex-1 bg-gold/40" />
              </div>
              {cat.blurb && (
                <p className="mt-2 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {cat.blurb}
                </p>
              )}
              <ul className="mt-6 space-y-4">
                {cat.items.map((item) => (
                  <li key={item.name} className="border-b border-gold/10 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-sm text-cream sm:text-base">
                        {item.name}
                        {item.special && (
                          <span className="ml-2 rounded-full border border-gold/50 px-2 py-0.5 align-middle text-[9px] font-semibold uppercase tracking-widest text-gold">
                            TVT Special
                          </span>
                        )}
                      </span>
                      {item.half !== undefined || item.full !== undefined ? (
                        <Price half={item.half} full={item.full} />
                      ) : (
                        <span className="shrink-0 font-display text-base text-gold sm:text-lg">
                          {formatINR(item.price ?? 0)}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 h-px flex-1 bg-gold/10" />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground">
          All prices in rupees. Menu updated November 2026 from our printed card — please ask
          our staff for the day's availability.
        </p>
        <p className="mt-6 text-center">
          <Link
            to="/visit"
            className="text-xs font-semibold uppercase tracking-[0.25em] text-gold underline-offset-4 hover:underline"
          >
            Come taste it in person →
          </Link>
        </p>
      </div>
    </div>
  );
}
