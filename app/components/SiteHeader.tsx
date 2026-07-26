import Link from "next/link";
import { primaryNavigation } from "../data/site";

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="wordmark" href="/" aria-label="LTC Studios — Accueil">
            <span>LTC</span> Studios
          </Link>

          <nav className="desktop-nav" aria-label="Navigation principale">
            {primaryNavigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <details className="mobile-nav">
            <summary aria-label="Ouvrir le menu">
              <span>Menu</span>
              <span className="mobile-nav__mark" aria-hidden="true">
                +
              </span>
            </summary>
            <nav aria-label="Navigation mobile">
              {primaryNavigation.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
