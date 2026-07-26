import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">Erreur 404</p>
      <span aria-hidden="true">404</span>
      <h1>Cette archive n’existe pas.</h1>
      <p>
        La page a peut-être changé d’adresse ou n’a jamais fait partie du
        catalogue.
      </p>
      <div className="action-row">
        <Link className="button button--ink" href="/">
          Revenir à l’accueil
        </Link>
        <Link className="button-link" href="/projets">
          Voir le catalogue
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
