import { AboutProps } from "@/global/utilities/interface";

const AboutHero = (props: AboutProps) => {
  const { title, body, renderRichText } = props;
  return (
    <section className="text-center max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-primary">{title}</h1>
      {renderRichText(body)}
    </section>
  );
};

export default AboutHero;
