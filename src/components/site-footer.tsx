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
        
        <nav className="flex flex-wrap justify-center items-center gap-6 text-xs uppercase tracking-[0.2em] text-cream/70">
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
          href={`tel:${restaurant.phone}`}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold-glow transition-transform hover:scale-[1.03]"
        >
          Call The Velvet Table · {restaurant.phone}
        </a>
        
        <a
          href={restaurant.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs uppercase tracking-[0.2em] text-gold underline-offset-4 hover:underline"
        >
          Find us on Google Maps
        </a>

        {/* Developer Credit & WhatsApp Button */}
        <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 border-t border-gold/10 pt-8 w-full justify-center">
          <p className="text-cream/20 text-sm font-medium tracking-wide">
            Website Designed & Developed by Areeb Khan
          </p>
          <a
            href="https://wa.me/919580111566"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-bold tracking-wide shadow-lg shadow-[#25D366]/20 transition-transform duration-300 hover:scale-105 hover:bg-[#20bd5a]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Chat with Areeb
          </a>
        </div>

        <p className="text-xs text-muted-foreground/70 mt-2">
          © {new Date().getFullYear()} The Velvet Table Resto &amp; Cafe · Pure Vegetarian
        </p>
      </div>
    </footer>
  );
}
