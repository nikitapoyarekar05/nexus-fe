import { Icon } from "@iconify/react";

export interface Feature {
  label: string;
  value: string;
}

const ListingFeature = (props: Feature) => {
  const { label, value } = props;

  const getIcon = () => {
    switch (label.toLowerCase()) {
      case "bedrooms":
        return (
          <Icon icon="mdi:bed-queen-outline" className="w-5 h-5 text-primary" />
        );
      case "baths":
        return <Icon icon="mdi:bathroom" className="w-5 h-5 text-primary" />;
      case "size":
        return <Icon icon="mdi:floor-plan" className="w-5 h-5 text-primary" />;
      case "status":
        switch (value.toLowerCase()) {
          case "available":
            return (
              <Icon
                icon="mdi:tick-circle-outline"
                className="w-5 h-5 text-primary"
              />
            );
          case "off-market":
            return (
              <Icon
                icon="mdi:circle-off-outline"
                className="w-5 h-5 text-primary"
              />
            );
          case "occupied":
            return (
              <Icon
                icon="mdi:cross-circle-outline"
                className="w-5 h-5 text-primary"
              />
            );
          default:
            return null;
        }
      default:
        return null;
    }
  };

  const icon = getIcon();

  return (
    <div className="flex items-center gap-2 text-sm text-gray-700">
      {icon}
      <span>
        <strong>{label}:</strong> {value}
      </span>
    </div>
  );
};

export default ListingFeature;
