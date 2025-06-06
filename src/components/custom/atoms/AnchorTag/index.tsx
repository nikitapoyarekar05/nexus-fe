import Link from "next/link";

interface AnchorTagProps {
  label: string;
  url: string;
  id: string;
  customClass?: string;
  dataTestId?: string;
}

const AnchorTag = (props: AnchorTagProps) => {
  const { id, label, url, dataTestId, customClass } = props;
  return (
    <Link
      className={`${customClass ? customClass : ""}`}
      id={id}
      data-testid={dataTestId ?? id}
      href={url}
    >
      {label}
    </Link>
  );
};

export default AnchorTag;
