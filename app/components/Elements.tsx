import Link from "next/link";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  introduction?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  introduction,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading${light ? " section-heading--light" : ""}`}>
      <p className={`eyebrow${light ? " eyebrow--light" : ""}`}>{eyebrow}</p>
      <h2>{title}</h2>
      {introduction ? <p className="section-heading__intro">{introduction}</p> : null}
    </div>
  );
}

type PageHeroProps = {
  index: string;
  eyebrow: string;
  title: string;
  introduction: string;
};

export function PageHero({
  index,
  eyebrow,
  title,
  introduction,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__meta">
        <p className="eyebrow">{eyebrow}</p>
        <span>{index}</span>
      </div>
      <h1>{title}</h1>
      <p className="page-hero__intro">{introduction}</p>
    </section>
  );
}

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

export function TextLink({ href, children, external = false }: TextLinkProps) {
  const className = "text-link";
  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
        <span aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

type PlatformLink = {
  label: string;
  href: string;
};

export function PlatformList({
  links,
  label = "Plateformes",
}: {
  links: PlatformLink[];
  label?: string;
}) {
  return (
    <div className="platform-list" aria-label={label}>
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
          {link.label}
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}
