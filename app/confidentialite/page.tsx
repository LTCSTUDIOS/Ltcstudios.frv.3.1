import type { Metadata } from "next";
import { PageHero } from "../components/Elements";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Confidentialité",
  description:
    "Politique de confidentialité de la version actuelle du site LTC Studios.",
  alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        index="L02"
        eyebrow="Informations"
        title="Confidentialité"
        introduction="Une politique simple pour un site volontairement sobre : aucune collecte marketing et aucun traceur publicitaire."
      />

      <section className="legal-content content-section">
        <article>
          <h2>Données collectées par le site</h2>
          <p>
            Cette version ne comporte ni compte utilisateur, ni formulaire, ni
            outil d’analyse d’audience, ni cookie publicitaire. LTC Studios ne
            dépose donc aucun traceur non essentiel depuis ses pages.
          </p>
        </article>

        <article>
          <h2>Contact par email</h2>
          <p>
            Les boutons de contact ouvrent votre logiciel de messagerie. Si vous
            écrivez à <a href={`mailto:${site.email}`}>{site.email}</a>, les
            informations transmises sont utilisées uniquement pour comprendre
            votre demande, vous répondre et assurer le suivi professionnel
            nécessaire.
          </p>
          <p>
            Vous pouvez demander l’accès, la rectification ou la suppression
            des informations que vous avez communiquées en écrivant à la même
            adresse.
          </p>
        </article>

        <article>
          <h2>Liens vers des plateformes tierces</h2>
          <p>
            YouTube, Spotify, Apple Music, Instagram et BeatStars appliquent
            leurs propres politiques lorsque vous choisissez de suivre un lien
            externe. Aucun lecteur tiers n’est chargé automatiquement sur ce
            site.
          </p>
        </article>

        <article>
          <h2>Évolution de cette politique</h2>
          <p>
            Cette page sera mise à jour si un formulaire, un outil de mesure ou
            un autre traitement de données est ajouté. Aucun dispositif de ce
            type ne sera activé silencieusement.
          </p>
        </article>
      </section>
    </>
  );
}
