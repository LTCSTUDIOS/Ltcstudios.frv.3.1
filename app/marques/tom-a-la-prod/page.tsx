import type { Metadata } from "next";
import {
  PageHero,
  SectionHeading,
  TextLink,
} from "../../components/Elements";
import { site } from "../../data/site";

export const metadata: Metadata = {
  title: "Tom à la Prod",
  description:
    "Tom à la Prod accompagne l’enregistrement, la réalisation artistique, le mixage et le mastering des projets musicaux.",
  alternates: { canonical: "/marques/tom-a-la-prod" },
};

export default function TomALaProdPage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="Studio & ingénierie"
        title="Tom à la Prod"
        introduction="Enregistrer l’intention, organiser l’énergie et livrer un son qui fonctionne partout sans effacer ce qui rend l’artiste reconnaissable."
      />

      <section className="brand-manifesto content-section">
        <div className="brand-manifesto__title">
          <p className="eyebrow">Univers 03</p>
          <h2>La technique n’a de valeur que lorsqu’elle sert l’émotion.</h2>
        </div>
        <div className="brand-manifesto__body">
          <p>
            Tom à la Prod regroupe l’activité de studio et d’ingénierie du son
            portée par Tom Loup. L’accompagnement peut commencer à la prise de
            voix, au stade de la maquette ou sur une session déjà organisée.
          </p>
          <p>
            Le travail cherche l’équilibre entre précision, caractère et
            lisibilité : une réalisation cohérente, un mix qui laisse respirer
            la voix et un master adapté à sa diffusion.
          </p>
          <a
            className="button button--ink"
            href={`mailto:${site.email}?subject=${encodeURIComponent(
              "Session studio — Tom à la Prod",
            )}`}
          >
            Présenter un morceau
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="studio-services content-section content-section--ink">
        <SectionHeading
          light
          eyebrow="Accompagnement"
          title="Un parcours adapté à l’état réel du morceau."
        />
        <div className="studio-services__list">
          <article>
            <span>01</span>
            <div>
              <h3>Prise de son</h3>
              <p>
                Préparation de session, placement, direction d’interprétation et
                captation propre.
              </p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Réalisation artistique</h3>
              <p>
                Choix de structure, arrangement, sélection des prises et
                cohérence entre le fond et la forme.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Mixage</h3>
              <p>
                Équilibre, espace, dynamique et caractère au service du morceau
                et de sa voix principale.
              </p>
            </div>
          </article>
          <article>
            <span>04</span>
            <div>
              <h3>Mastering</h3>
              <p>
                Finition, contrôle technique et préparation cohérente pour la
                diffusion.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="process-note content-section">
        <p className="eyebrow">Avant de commencer</p>
        <div>
          <h2>Le bon service dépend du bon diagnostic.</h2>
          <p>
            Envoyez une écoute, les pistes disponibles, les références utiles
            et votre échéance. Le périmètre, les livrables et le devis sont
            définis avant le démarrage.
          </p>
          <TextLink href="/contact">Préparer la demande</TextLink>
        </div>
      </section>
    </>
  );
}
