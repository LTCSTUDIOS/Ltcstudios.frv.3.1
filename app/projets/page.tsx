import type { Metadata } from "next";
import { PageHero } from "../components/Elements";
import { projects } from "../data/site";

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "Découvrez une sélection de sorties SeaKlone et le catalogue de productions WOLFIBEAT.",
  alternates: { canonical: "/projets" },
};

export default function ProjetsPage() {
  return (
    <>
      <PageHero
        index="05"
        eyebrow="Catalogue"
        title="Les œuvres sont la mémoire active de la maison."
        introduction="Une sélection volontairement concise de projets publiés et de catalogues en développement. Les crédits détaillés restent disponibles sur les plateformes de diffusion."
      />

      <section className="catalogue-list content-section">
        {projects.map((project, index) => (
          <article key={project.title}>
            <div className="catalogue-list__visual" aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div />
              <small>LTC ARCHIVE</small>
            </div>
            <div className="catalogue-list__body">
              <div className="catalogue-list__meta">
                <span>{project.year}</span>
                <span>{project.kind}</span>
                <span>{project.owner}</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="catalogue-list__links">
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
      </section>

      <section className="archive-note content-section content-section--ink">
        <p className="eyebrow eyebrow--light">Archive ouverte</p>
        <h2>Le catalogue s’enrichira sans transformer le site en inventaire.</h2>
        <p>
          Chaque nouvelle fiche sera ajoutée avec un statut, une année, des
          crédits vérifiés et des liens d’écoute fiables.
        </p>
      </section>
    </>
  );
}
