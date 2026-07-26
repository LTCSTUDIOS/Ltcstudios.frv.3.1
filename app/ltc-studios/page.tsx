import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading, TextLink } from "../components/Elements";
import { method } from "../data/site";

export const metadata: Metadata = {
  title: "La maison",
  description:
    "Découvrez LTC Studios, Creative House indépendante dédiée à la création, à la production et au développement de catalogues musicaux.",
  alternates: { canonical: "/ltc-studios" },
};

export default function LtcStudiosPage() {
  return (
    <>
      <PageHero
        index="00"
        eyebrow="La maison"
        title="Une structure créative pensée pour le temps long."
        introduction="LTC Studios est une Creative House indépendante. Elle réunit les fonctions nécessaires pour faire naître une œuvre, la produire proprement, protéger ce qui a été créé et construire sa vie dans la durée."
      />

      <section className="split-story content-section">
        <div className="split-story__aside">
          <p className="eyebrow">Notre conviction</p>
          <span className="registration-mark">LTC—000</span>
        </div>
        <div className="split-story__main">
          <h2>
            Une sortie n’est pas une fin.
            <br />
            C’est le début d’un actif.
          </h2>
          <p>
            Une chanson, une identité, un master ou une marque peuvent continuer
            à produire du sens et de la valeur longtemps après leur création.
            Cela demande plus qu’une campagne : une direction artistique, des
            choix de production, des droits clairs et une mémoire organisée.
          </p>
          <p>
            LTC Studios a été conçu pour réunir ces dimensions dans une maison
            simple, humaine et sélective. La croissance recherchée n’est pas le
            volume pour le volume, mais la solidité du catalogue et des
            relations qui le rendent possible.
          </p>
        </div>
      </section>

      <section className="principles-section content-section content-section--ink">
        <SectionHeading
          light
          eyebrow="Principes directeurs"
          title="Peu de bruit. Beaucoup de structure."
        />
        <div className="principles-grid">
          <article>
            <span>01</span>
            <h3>Indépendance</h3>
            <p>
              Garder une vision claire, maîtriser les décisions et choisir les
              collaborations plutôt que les subir.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Sélectivité</h3>
            <p>
              Limiter volontairement le nombre de projets pour consacrer du
              temps réel à ceux qui entrent dans la maison.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Clarté</h3>
            <p>
              Des rôles, des crédits, des droits et des objectifs compréhensibles
              avant de chercher la vitesse.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Transmission</h3>
            <p>
              Construire des œuvres, des méthodes et des catalogues capables de
              rester utiles au-delà d’une seule sortie.
            </p>
          </article>
        </div>
      </section>

      <section className="method-section content-section">
        <SectionHeading
          eyebrow="Le cycle LTC"
          title="De l’intention au patrimoine vivant."
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

      <section className="next-panel content-section">
        <p className="eyebrow">Les univers</p>
        <h2>Trois expressions opérationnelles de la même maison.</h2>
        <div className="next-panel__links">
          <Link href="/marques/seaklone">SeaKlone</Link>
          <Link href="/marques/wolfibeat">WOLFIBEAT</Link>
          <Link href="/marques/tom-a-la-prod">Tom à la Prod</Link>
        </div>
        <TextLink href="/marques">Voir l’écosystème complet</TextLink>
      </section>
    </>
  );
}
