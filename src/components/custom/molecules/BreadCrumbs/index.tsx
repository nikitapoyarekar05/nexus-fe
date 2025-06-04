import Link from "next/link";

interface BreadcrumbsProps {
  label: string;
  urlToNavigate: string;
}

const BreadCrumbs = (props: BreadcrumbsProps) => {
  const { label, urlToNavigate } = props;

  return (
    <nav className="mb-4 flex items-center text-sm text-muted-foreground">
      <Link
        href={urlToNavigate}
        className="hover:underline text-primary font-medium"
      >
        {`< ${label}`}
      </Link>
    </nav>
  );
};

export default BreadCrumbs;
