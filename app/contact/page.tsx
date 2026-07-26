import type { Metadata } from "next";
import { PageHero, PlatformList } from "../components/Elements";
import { platformLinks, site } from "../data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez LTC Studios pour un projet musical, une production WOLFIBEAT, une session studio ou un partenariat de catalogue.",
  alternates: { canonical: "/contact" },
};

const contactReasons = [
  {
    index: "01",
    title: "Projet musical",
    description:
      "Présenter un titre, un EP, une collaboration ou un besoin de réalisation.",
    subject: "Projet musical — LTC Studios",
  },
  {
    index: "02",
    title: "Production WOLFIBEAT",
    description:
      "Demander une licence, une adaptation ou une composition sur mesure.",
    subject: "Production ou licence — WOLFIBEAT",
  },
  {
    index: "03",
    title: "Studio & mixage",
    description:
      "Organiser une prise de son, un mixage, un mastering ou un diagnostic.",
    subject: "Studio, mixage ou mastering — Tom à la Prod",
  },
  {
    index: "04",
    title: "Partenariat",
    description:
      "Échanger autour d’un catalogue, d’une œuvre, d’un média ou d’une collaboration.",
    subject: "Partenariat — LTC Studios",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="06"
        eyebrow="Contact professionnel"
        title="Commençons par comprendre le projet."
        introduction="Un message simple suffit : ce que vous créez, où vous en êtes, ce que vous cherchez et votre échéance éventuelle."
      />

      <section className="contact-directory content-section">
        {contactReasons.map((reason) => (
          <article key={reason.title}>
            <span>{reason.index}</span>
            <div>
              <h2>{reason.title}</h2>
              <p>{reason.description}</p>
            </div>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(
                reason.subject,
              )}`}
            >
              Écrire
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </section>

      <section className="direct-contact content-section content-section--ink">
        <div>
          <p className="eyebrow eyebrow--light">Adresse directe</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>France · Réponse selon la nature et la maturité du projet.</p>
        </div>
        <div>
          <p className="footer-label">Suivre la maison</p>
          <PlatformList links={platformLinks.ltc} label="Réseaux LTC Studios" />
        </div>
      </section>
    </>
  );
}
