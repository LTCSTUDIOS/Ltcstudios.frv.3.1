import type { Metadata } from "next";
import { PageHero, SectionHeading } from "../components/Elements";
import { services, site } from "../data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Production musicale, réalisation artistique, enregistrement, mixage, mastering et développement de catalogue par LTC Studios.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="Services"
        title="Une chaîne de production courte, claire et responsable."
        introduction="Chaque mission commence par un diagnostic du projet. Le périmètre, les livrables, le calendrier et le devis sont confirmés avant toute production."
      />

      <section className="service-directory content-section">
        {services.map((service) => (
          <article key={service.title}>
            <div className="service-directory__index">
              <span>{service.index}</span>
              <small>{service.brand}</small>
            </div>
            <div className="service-directory__body">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(
                `${service.title} — demande LTC Studios`,
              )}`}
            >
              Demander un devis
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </section>

      <section className="working-rules content-section content-section--ink">
        <SectionHeading
          light
          eyebrow="Cadre de travail"
          title="Ce qui est clair au départ protège la création ensuite."
        />
        <div className="working-rules__grid">
          <article>
            <span>01</span>
            <h3>Écoute</h3>
            <p>
              Comprendre le morceau, le besoin réel et le niveau d’avancement
              avant de proposer une solution.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Périmètre</h3>
            <p>
              Définir les fichiers, versions, retours, crédits et délais
              attendus.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Production</h3>
            <p>
              Travailler par étapes vérifiables, avec des décisions simples et
              documentées.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Livraison</h3>
            <p>
              Remettre des fichiers propres, nommés, accompagnés des
              informations utiles à leur exploitation.
            </p>
          </article>
        </div>
      </section>

      <section className="scope-panel content-section">
        <div>
          <p className="eyebrow">Tarification</p>
          <h2>Sur devis, selon le besoin réel.</h2>
        </div>
        <div>
          <p>
            Pas de faux forfait universel : une prise de voix, un mix complet et
            une réalisation de projet n’impliquent ni le même temps ni les mêmes
            responsabilités.
          </p>
          <a
            className="button button--ink"
            href={`mailto:${site.email}?subject=${encodeURIComponent(
              "Demande de devis — LTC Studios",
            )}`}
          >
            Décrire le projet
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
