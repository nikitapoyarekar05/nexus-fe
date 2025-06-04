interface PropertyDescriptionProps {
  description: string;
}

const PropertyDescription = (props: PropertyDescriptionProps) => {
  const { description } = props;
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">About this home</h2>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default PropertyDescription;
