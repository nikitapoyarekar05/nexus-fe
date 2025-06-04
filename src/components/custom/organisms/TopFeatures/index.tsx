import { Feature, PropertyFeatures } from "@/global/utilities/interface";
import ListingFeature from "../../molecules/ListingFeature";
import { LISTING_TEXT } from "@/content/listing";

interface TopFeaturesProps {
  features: PropertyFeatures;
  status: string;
}

const TopFeatures = (props: TopFeaturesProps) => {
  const { features, status } = props;
  const getTopFeatures = (features: PropertyFeatures) => {
    if (!features) return [];
    return [
      {
        label: "Bedrooms",
        value: features.bedrooms?.toString() ?? "",
      },
      { label: "Baths", value: features.baths?.toString() ?? "" },
      {
        label: "Size",
        value: `${features.size} ${LISTING_TEXT.sqmt}`,
      },
      { label: "Status", value: `${status}` },
    ];
  };
  return (
    <div className="lg:w-[70%] w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground border rounded-lg p-4 mb-6 mt-6 lg:mt-0">
      {(getTopFeatures(features) || []).map((feature: Feature) => (
        <ListingFeature
          key={feature.label}
          label={feature.label}
          value={feature.value}
        />
      ))}
    </div>
  );
};

export default TopFeatures;
