import Link from "next/link";
import { brands, primaryNavigation, site } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__lead">
        <p className="eyebrow eyebrow--light">Un projet, une œuvre, un catalogue</p>
        <h2>Construisons quelque chose qui mérite de durer.</h2>
        <a
          className="button button--paper"
          href={`mailto:${site.email}?subject=${encodeURIComponent(
            "Prise de contact — LTC Studios",
          )}`}
        >
          Parler d’un projet
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="site-footer__grid">
        <div>
          <Link className="wordmark wordmark--light" href="/">
            <span>LTC</span> Studios
          </Link>
          <p className="site-footer__note">
            Creative House indépendante.
            <br />
            France · © {new Date().getFullYear()}
          </p>
        </div>

        <div>
          <p className="footer-label">Navigation</p>
          <nav aria-label="Navigation de pied de page">
            {primaryNavigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="footer-label">Écosystème</p>
          <nav aria-label="Marques LTC Studios">
            {brands.slice(1).map((brand) => (
              <Link key={brand.href} href={brand.href}>
                {brand.name}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="footer-label">Informations</p>
          <nav aria-label="Informations légales">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/confidentialite">Confidentialité</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
