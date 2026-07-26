import type { Metadata } from "next";
import {
  PageHero,
  PlatformList,
  SectionHeading,
  TextLink,
} from "../../components/Elements";
import { platformLinks, projects, site } from "../../data/site";

export const metadata: Metadata = {
  title: "WOLFIBEAT",
  description:
    "WOLFIBEAT développe un catalogue de productions originales, émotionnelles, mélodiques et cinématiques.",
  alternates: { canonical: "/marques/wolfibeat" },
};

export default function WolfibeatPage() {
  const catalogue = projects.find(
    (project) => project.title === "Catalogue WOLFIBEAT",
  );

  return (
    <>
      <PageHero
        index="02"
        eyebrow="Production musicale"
        title="WOLFIBEAT"
        introduction="Des compositions originales bâties autour de mélodies fortes, d’espaces nocturnes et de rythmiques capables de porter une voix."
      />

      <section className="brand-manifesto content-section">
        <div className="brand-manifesto__title">
          <p className="eyebrow">Univers 02</p>
          <h2>Un beat n’est pas un fond. C’est le premier décor du morceau.</h2>
        </div>
        <div className="brand-manifesto__body">
          <p>
            WOLFIBEAT est la marque de production musicale de la maison. Son
            territoire principal mêle trap émotionnelle, rap mélodique, piano,
            cordes, textures atmosphériques et rythmiques propres.
          </p>
          <p>
            Chaque production est pensée comme une œuvre exploitable :
            composition originale, fichiers organisés, licence claire et
            possibilité d’adaptation selon le projet.
          </p>
          <PlatformList links={platformLinks.wolfibeat} />
        </div>
      </section>

      <section className="capability-panel content-section content-section--ink">
        <SectionHeading
          light
          eyebrow="Catalogue & commandes"
          title="Trouver la bonne matière. Ou la créer."
        />
        <div className="capability-grid">
          <article>
            <span>01</span>
            <h3>Catalogue</h3>
            <p>
              Parcourir les productions disponibles et choisir la licence
              adaptée à l’usage prévu.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Composition sur mesure</h3>
            <p>
              Développer une production autour d’une voix, d’une référence ou
              d’une direction précise.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Développement</h3>
            <p>
              Ajuster structure, instrumentation et dynamique pour servir
              réellement le morceau.
            </p>
          </article>
        </div>
        <a
          className="button button--paper"
          href={`mailto:${site.email}?subject=${encodeURIComponent(
            "Production ou licence WOLFIBEAT",
          )}`}
        >
          Demander une production
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      {catalogue ? (
        <section className="featured-record content-section">
          <div>
            <p className="eyebrow">{catalogue.year}</p>
            <h2>{catalogue.title}</h2>
            <p>{catalogue.description}</p>
          </div>
          <div className="featured-record__links">
            {catalogue.links.map((link) => (
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
        </section>
      ) : null}

      <section className="next-panel content-section">
        <p className="eyebrow">Prochaine entrée</p>
        <h2>Quand l’intention devient un master fini.</h2>
        <TextLink href="/marques/tom-a-la-prod">
          Découvrir Tom à la Prod
        </TextLink>
      </section>
    </>
  );
}
