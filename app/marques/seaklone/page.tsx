import type { Metadata } from "next";
import {
  PageHero,
  PlatformList,
  ProjectCoverImage,
  SectionHeading,
  TextLink,
} from "../../components/Elements";
import { platformLinks, projects } from "../../data/site";

export const metadata: Metadata = {
  title: "SeaKlone",
  description:
    "SeaKlone est le projet artistique fondateur de LTC Studios : un rap introspectif, mélancolique et cinématique.",
  alternates: { canonical: "/marques/seaklone" },
};

export default function SeaKlonePage() {
  const seakloneProjects = projects.filter(
    (project) => project.owner === "SeaKlone",
  );

  return (
    <>
      <PageHero
        index="01"
        eyebrow="Projet artistique"
        title="SeaKlone"
        introduction="Un rap introspectif, émotionnel et cinématique. SeaKlone transforme les périodes de rupture, les contradictions et la recherche de sens en œuvres directes, nocturnes et durables."
      />

      <section className="brand-manifesto content-section">
        <div className="brand-manifesto__title">
          <p className="eyebrow">Univers 01</p>
          <h2>Dire vrai, même quand la forme tremble.</h2>
        </div>
        <div className="brand-manifesto__body">
          <p>
            SeaKlone est le projet artistique porté par Tom Loup. Il constitue
            le laboratoire créatif de LTC Studios : un espace où l’écriture,
            l’interprétation, le son et l’image se développent ensemble.
          </p>
          <p>
            La direction ne cherche pas à courir après chaque tendance. Elle
            construit un catalogue cohérent autour d’une voix, d’une
            sensibilité et de thèmes qui peuvent encore résonner plusieurs
            années après leur sortie.
          </p>
          <PlatformList links={platformLinks.seaklone} />
        </div>
      </section>

      <section className="projects-section content-section content-section--ink">
        <SectionHeading
          light
          eyebrow="Sélection 2026"
          title="Les derniers chapitres."
        />
        <div className="project-grid project-grid--dark">
          {seakloneProjects.map((project) => (
            <article
              className={`project-card${
                project.isLatestRelease ? " project-card--featured" : ""
              }`}
              key={project.title}
            >
              {project.cover ? (
                <ProjectCoverImage
                  className="project-card__cover"
                  cover={project.cover}
                  sizes="(max-width: 880px) calc(100vw - 2.5rem), 38vw"
                />
              ) : null}
              <div className="project-card__body">
                <div className="project-card__meta">
                  <span>{project.year}</span>
                  <span>{project.kind}</span>
                  {project.isLatestRelease ? (
                    <span className="project-card__latest">Dernière sortie</span>
                  ) : null}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.details ? (
                  <ul className="project-card__details">
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
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
              </div>
            </article>
          ))}
        </div>
        <a
          className="button button--paper"
          href="https://linktr.ee/SeaKlone.ltc"
          target="_blank"
          rel="noreferrer"
        >
          Tous les liens SeaKlone
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="next-panel content-section">
        <p className="eyebrow">Prochaine entrée</p>
        <h2>Les productions qui nourrissent la maison.</h2>
        <TextLink href="/marques/wolfibeat">Découvrir WOLFIBEAT</TextLink>
      </section>
    </>
  );
}
