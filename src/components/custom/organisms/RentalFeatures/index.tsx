import React from "react";
import ListingFeature from "../../molecules/ListingFeature";
import { Feature, PropertyFeatures } from "@/global/utilities/interface";

interface RentalFeaturesProps {
  features: PropertyFeatures;
}

const RentalFeatures = (props: RentalFeaturesProps) => {
  const getRentalFeatures = (features: PropertyFeatures) => {
    if (!features) return [];
    return [
      {
        label: "Deposit & Fees",
        value: `$${features.deposit.toString()}`,
      },
      { label: "Year Built", value: features.yearBuilt.toString() },
      { label: "Laundry", value: features.laundry ?? "" },
      { label: "Cooling", value: features.cooling ?? "" },
      { label: "Heating", value: features.heating ?? "" },
      { label: "Parking Area", value: features.parking ?? "" },
    ];
  };
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Rental features</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
        {(getRentalFeatures(props.features) || []).map((feature: Feature) => (
          <ListingFeature
            key={feature.label}
            label={feature.label}
            value={feature.value}
          />
        ))}
      </div>
    </div>
  );
};

export default RentalFeatures;
