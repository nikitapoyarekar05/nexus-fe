import { ReactNode } from "react";

interface FeatureBoxProps {
  customClass: string;
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureBox = (props: FeatureBoxProps) => {
  const { customClass, icon, title, description } = props;

  return (
    <div
      className={`flex gap-4 p-6 rounded-xl items-start ${customClass ?? ""}`}
    >
      {icon}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm mt-1 opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default FeatureBox;
