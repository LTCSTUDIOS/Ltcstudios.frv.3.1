import type { Metadata } from "next";
import { PageHero, TextLink } from "../components/Elements";
import { brands } from "../data/site";

export const metadata: Metadata = {
  title: "Univers",
  description:
    "Découvrez les quatre marques complémentaires de LTC Studios : LTC Studios, SeaKlone, WOLFIBEAT et Tom à la Prod.",
  alternates: { canonical: "/marques" },
};

export default function MarquesPage() {
  return (
    <>
      <PageHero
        index="01—03"
        eyebrow="Les univers"
        title="Des identités distinctes. Une direction commune."
        introduction="LTC Studios porte la vision et l’architecture. SeaKlone crée les œuvres, WOLFIBEAT développe les productions, Tom à la Prod transforme l’intention en son fini."
      />

      <section className="brand-directory content-section">
        {brands.map((brand) => (
          <article key={brand.href}>
            <div className="brand-directory__index">
              <span>{brand.index}</span>
              <span>{brand.role}</span>
            </div>
            <div className="brand-directory__body">
              <h2>{brand.name}</h2>
              <p>{brand.description}</p>
              <TextLink href={brand.href}>{brand.cta}</TextLink>
            </div>
          </article>
        ))}
      </section>

      <section className="relationship-panel content-section content-section--ink">
        <p className="eyebrow eyebrow--light">Architecture de la maison</p>
        <div className="relationship-panel__grid">
          <div>
            <span>01</span>
            <strong>SeaKlone</strong>
            <small>crée & interprète</small>
          </div>
          <div>
            <span>02</span>
            <strong>WOLFIBEAT</strong>
            <small>compose & produit</small>
          </div>
          <div>
            <span>03</span>
            <strong>Tom à la Prod</strong>
            <small>réalise & finalise</small>
          </div>
          <div>
            <span>00</span>
            <strong>LTC Studios</strong>
            <small>structure & fait durer</small>
          </div>
        </div>
      </section>
    </>
  );
}
