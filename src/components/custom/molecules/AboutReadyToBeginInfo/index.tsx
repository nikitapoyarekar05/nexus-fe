import { AboutProps } from "@/global/utilities/interface";

const AboutReadyToBeginInfo = (props: AboutProps) => {
  const { title, body, renderRichText } = props;
  return (
    <>
      <h2 className="text-3xl font-semibold mb-4 text-primary">{title}</h2>
      {renderRichText(body)}
    </>
  );
};

export default AboutReadyToBeginInfo;
