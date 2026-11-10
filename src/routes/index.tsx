import { createFileRoute, Link } from "@tanstack/react-router";
import { restaurant } from "@/lib/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "The Velvet Table Resto & Cafe — Fine Dining in  Fatehpur",
      },
      {
        name: "description",
        content:
          "Pure vegetarian fine dining & cafe in  Fatehpur. Tandoori kebabs, chaap biryani, artisanal pizza, craft mocktails and more at The Velvet Table.",
      },
      { property: "og:title", content: "The Velvet Table Resto & Cafe" },
      {
        property: "og:description",
        content:
          "Pure vegetarian fine dining in  Fatehpur — tandoor, oriental, pizza, shakes and craft mocktails.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const signature = [
  {
    name: "TVT Spcl Chaap Biryani",
    price: "₹299",
    note: "Our signature — slow-cooked soya chaap layered with fragrant rice.",
  },
  {
    name: "Paneer Lababdar",
    price: "₹249 / ₹349",
    note: "Silky tomato-cashew gravy with soft paneer, half or full.",
  },
  {
    name: "TVT Signature Cigar Roll",
    price: "₹299",
    note: "A tandoor appetizer you won't find anywhere else.",
  },
  {
    name: "Blue Lagoon Mocktail",
    price: "₹119",
    note: "Ice-blue citrus cooler from our craft mocktail bar.",
  },
];

const gallery = [
  { src: "/IMG20261102163209.jpg", alt: "Reception counter with royal murals at The Velvet Table" },
  { src: "/IMG20261102163214.jpg", alt: "Dining hall with rattan lamps and floral decor" },
  { src: "/IMG20261102163218.jpg", alt: "Seating area with velvet chairs and mural walls" },
  { src: "/IMG20261102163220.jpg", alt: "Tables set for guests at The Velvet Table" },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src="/IMG20261102163220.jpg"
          alt="The Velvet Table dining hall"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velvet-deep via-velvet-deep/55 to-velvet-deep/25" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">
            Pure Vegetarian ·  Fatehpur
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight text-gold-gradient sm:text-7xl">
            The Velvet Table
          </h1>
          <p className="mt-2 font-display text-xl italic text-cream/90 sm:text-2xl">
            {restaurant.tagline}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
            Royal murals, rattan lanterns and a kitchen that spans the tandoor, the
            oriental wok, the pizza oven and the mocktail bar — all under one velvet roof.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="rounded-full bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-gold-glow transition-transform hover:scale-[1.03]"
            >
              Explore the Menu
            </Link>
            <Link
              to="/visit"
              className="rounded-full border border-gold/50 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold/10"
            >
              Plan a Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-gold/15 bg-velvet py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-6">
          {[
            {
              title: "100% Pure Vegetarian",
              body: "From chaap biryani to cheese-burst pizza — every plate on the menu is veg.",
            },
            {
              title: "Four Kitchens, One Table",
              body: "Indian tandoor, oriental wok, Italian pasta & pizza, and a full cafe bar.",
            },
            {
              title: "Made for Celebrations",
              body: "Family dinners, birthday evenings and festive gatherings in a royal setting.",
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-3 h-px w-16 bg-gold/50" />
              <h3 className="font-display text-2xl font-semibold text-gold">{item.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Signature dishes */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-[11px] uppercase tracking-[0.35em] text-gold/80">
            House Favourites
          </p>
          <h2 className="mt-2 text-center font-display text-4xl font-semibold text-cream sm:text-5xl">
            Signature Plates
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {signature.map((dish) => (
              <div key={dish.name} className="velvet-panel rounded-2xl p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-gold">{dish.name}</h3>
                  <span className="shrink-0 font-display text-lg text-cream">{dish.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{dish.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link
              to="/menu"
              className="text-xs font-semibold uppercase tracking-[0.25em] text-gold underline-offset-4 hover:underline"
            >
              See the full menu →
            </Link>
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-[11px] uppercase tracking-[0.35em] text-gold/80">
            Inside the Resto
          </p>
          <h2 className="mt-2 text-center font-display text-4xl font-semibold text-cream sm:text-5xl">
            A Royal Setting
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {gallery.map((photo) => (
              <div key={photo.src} className="gold-frame overflow-hidden rounded-2xl">
                <div className="gold-frame-inner rounded-2xl" />
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-80"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-gold/15 py-16" aria-labelledby="find-us-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">Find us &amp; follow along</p>
            <h2 id="find-us-heading" className="mt-2 font-display text-4xl font-semibold text-cream sm:text-5xl">
              Visit The Velvet Table
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
              {restaurant.address}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={restaurant.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-gold-glow transition-transform hover:scale-[1.03]"
              >
                Get Directions
              </a>
              <a
                href={restaurant.reviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gold/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold/10"
              >
                Read Google Reviews
              </a>
              <a href="[https://share.google/k8veKiXCJ61ivmLgf](https://share.google/k8veKiXCJ61ivmLgf)"
                className="rounded-full border border-gold/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold/10"
              >Reviews</a>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="gold-frame overflow-hidden rounded-xl">
              <div className="gold-frame-inner rounded-xl" />
              <iframe
                title="Map to The Velvet Table Resto & Cafe, Bindki"
                src={restaurant.mapEmbedUrl}
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-gold/20 bg-background">
              <iframe
                title="The Velvet Table Instagram profile"
                src="https://www.instagram.com/the.velvet.table71/embed"
                className="h-80 w-full sm:h-96"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="encrypted-media; picture-in-picture"
              />
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Follow <a href="https://www.instagram.com/the.velvet.table71/" target="_blank" rel="noreferrer" className="text-gold underline-offset-4 hover:underline">@the.velvet.table71</a> on Instagram
          </p>
        </div>
      </section>

      <section className="border-t border-gold/15 bg-velvet py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-4xl font-semibold text-gold-gradient sm:text-5xl">
            Reserve your evening at the table
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Find us at Bindki Bus Stop on Khaleel Nagar Road, Fatehpur.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-gold-glow transition-transform hover:scale-[1.03]"
            >
              Get Directions
            </a>
            <Link
              to="/visit"
              className="rounded-full border border-gold/50 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold/10"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
