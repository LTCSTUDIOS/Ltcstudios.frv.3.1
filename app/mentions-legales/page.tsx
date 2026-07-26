import type { Metadata } from "next";
import { PageHero } from "../components/Elements";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Informations légales relatives au site LTC Studios.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        index="L01"
        eyebrow="Informations"
        title="Mentions légales"
        introduction="Informations relatives à l’édition, à l’hébergement et à l’utilisation de cette version du site."
      />

      <section className="legal-content content-section">
        <article>
          <h2>Édition du site</h2>
          <p>
            Le site LTC Studios est édité par Tom Loup, fondateur et directeur
            de publication, domicilié en France.
          </p>
          <p>
            Contact : <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </article>

        <article>
          <h2>Statut de la structure</h2>
          <p>
            LTC Studios est actuellement présenté comme une Creative House
            indépendante en cours de structuration juridique. Les informations
            d’immatriculation, le capital et les coordonnées légales complètes
            seront ajoutés dès la constitution effective de la société.
          </p>
        </article>

        <article>
          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133,
            Covina, CA 91723, États-Unis. L’infrastructure technique de
            diffusion est opérée par Vercel.
          </p>
        </article>

        <article>
          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, signes distinctifs, éléments visuels, productions,
            œuvres et contenus présentés sur ce site restent protégés par les
            droits applicables. Toute reproduction, adaptation, diffusion ou
            exploitation non autorisée est interdite.
          </p>
          <p>
            Les marques, noms d’artistes et plateformes tierces demeurent la
            propriété de leurs titulaires respectifs.
          </p>
        </article>

        <article>
          <h2>Responsabilité</h2>
          <p>
            LTC Studios veille à publier des informations exactes et à jour.
            Les liens externes sont fournis pour faciliter l’accès aux œuvres et
            services concernés ; leur contenu reste sous la responsabilité des
            plateformes qui les éditent.
          </p>
        </article>
      </section>
    </>
  );
}
