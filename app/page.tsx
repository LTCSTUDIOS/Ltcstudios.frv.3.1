import Link from "next/link";
import Image from "next/image";
import {
  SectionHeading,
  TextLink,
} from "./components/Elements";
import {
  brands,
  method,
  platformLinks,
  projects,
  services,
  site,
} from "./data/site";

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.domain,
  description: site.description,
  founder: {
    "@type": "Person",
    name: "Tom Loup",
  },
  sameAs: platformLinks.ltc.map((link) => link.href),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />

      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="eyebrow">Creative House indépendante</p>
          <h1>
            Créer. Produire.
            <br />
            Faire <em>durer.</em>
          </h1>
          <p className="home-hero__intro">
            Production musicale, développement d’artistes et exploitation de
            catalogues.
          </p>
          <div className="action-row">
            <Link className="button button--ink" href="/ltc-studios">
              Découvrir la maison
            </Link>
            <Link className="button-link" href="/contact">
              Parler d’un projet
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <figure className="home-hero__art">
          <div className="archive-registration" aria-hidden="true">
            <span>LTC—001</span>
            <span>ARCHIVE ACTIVE</span>
          </div>
          <Image
            src="/images/archive-artifact.webp"
            width={1200}
            height={1200}
            alt="Composition éditoriale d’une pochette d’archive et d’un disque vinyle"
            priority
          />
          <figcaption>
            <span>Collection fondatrice</span>
            <span>France · MMXXVI</span>
          </figcaption>
        </figure>
      </section>

      <nav className="universe-index" aria-label="Accès direct aux univers">
        {brands.slice(1).map((brand) => (
          <Link key={brand.href} href={brand.href}>
            <span className="universe-index__meta">
              <small>Univers</small>
              <small>{brand.index}</small>
            </span>
            <strong>{brand.name}</strong>
            <span className="universe-index__footer">
              <small>FR</small>
              <span aria-hidden="true">○</span>
            </span>
          </Link>
        ))}
      </nav>

      <section className="statement-section content-section">
        <div className="statement-section__index">
          <span>01</span>
          <span>La maison</span>
        </div>
        <div className="statement-section__content">
          <p>
            LTC Studios relie la création artistique, la production musicale et
            l’ingénierie du son à une même ambition :
          </p>
          <h2>transformer les œuvres en patrimoine vivant.</h2>
          <p className="statement-section__detail">
            Une structure indépendante, volontairement sélective, construite
            pour accompagner moins de projets — mais les accompagner mieux et
            plus longtemps.
          </p>
          <TextLink href="/ltc-studios">Comprendre notre approche</TextLink>
        </div>
      </section>

      <section className="brands-section content-section">
        <SectionHeading
          eyebrow="02 — Un écosystème cohérent"
          title="Quatre marques. Une seule direction."
          introduction="Chaque univers répond à un besoin précis. Ensemble, ils permettent de créer, produire, finaliser et exploiter les œuvres sans perdre le fil."
        />
        <div className="brand-grid">
          {brands.map((brand) => (
            <article className="brand-card" key={brand.href}>
              <div className="brand-card__meta">
                <span>{brand.index}</span>
                <span>{brand.role}</span>
              </div>
              <h3>{brand.name}</h3>
              <p>{brand.description}</p>
              <TextLink href={brand.href}>{brand.cta}</TextLink>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section content-section content-section--ink">
        <SectionHeading
          light
          eyebrow="03 — Capacités"
          title="Du premier son à l’actif exploitable."
          introduction="Une chaîne courte, lisible et humaine. Les prestations sont cadrées selon le projet et proposées sur demande."
        />
        <div className="service-list">
          {services.map((service) => (
            <article key={service.title}>
              <span>{service.index}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <small>{service.brand}</small>
            </article>
          ))}
        </div>
        <TextLink href="/services">Voir les services</TextLink>
      </section>

      <section className="projects-section content-section">
        <SectionHeading
          eyebrow="04 — Catalogue vivant"
          title="Des projets avant les promesses."
          introduction="Sorties, catalogues et réalisations sélectionnés : la preuve du travail se trouve dans les œuvres."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__meta">
                <span>{project.year}</span>
                <span>{project.kind}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-card__owner">{project.owner}</p>
              <p>{project.description}</p>
              <div className="project-card__links">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
        <TextLink href="/projets">Parcourir le catalogue</TextLink>
      </section>

      <section className="method-section content-section">
        <SectionHeading
          eyebrow="05 — Méthode"
          title="La valeur se construit dans le temps."
        />
        <ol className="method-list">
          {method.map((step) => (
            <li key={step.index}>
              <span>{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="contact-panel content-section">
        <div>
          <p className="eyebrow">06 — Contact professionnel</p>
          <h2>Une idée claire suffit pour commencer.</h2>
        </div>
        <div>
          <p>
            Présentez le projet, son état d’avancement et ce que vous cherchez.
            Nous reviendrons vers vous avec une réponse concrète.
          </p>
          <a
            className="button button--ink"
            href={`mailto:${site.email}?subject=${encodeURIComponent(
              "Nouveau projet — LTC Studios",
            )}`}
          >
            {site.email}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
