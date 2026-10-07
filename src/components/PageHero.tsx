import { K } from '../shared/ui';

type PageHeroProps = {
  image: string;
  kicker: string;
  title: string;
  lead: string;
};

export function PageHero({ image, kicker, title, lead }: PageHeroProps) {
  return (
    <section className="page-feature-hero">
      <div className="shell page-feature-inner">
        <div className="page-feature-copy">
          <K>{kicker}</K>
          <h1>{title}</h1>
          <p>{lead}</p>
        </div>
        <div className="page-feature-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
}
