import { PropertyAddress } from "@/global/utilities/interface";

interface PropertyInfoProps {
  title: string;
  address: PropertyAddress;
}

const PropertyInfo = (props: PropertyInfoProps) => {
  const { title, address } = props;

  const getFormattedAddress = () => {
    return `${address?.addressLine1}, ${address?.city}, ${address?.state}, ${address?.zipCode}, ${address?.country}`;
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground mb-4">{getFormattedAddress()}</p>
    </div>
  );
};

export default PropertyInfo;
