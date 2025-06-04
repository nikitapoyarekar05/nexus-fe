import Link from "next/link";

import styles from "./HeroSection.module.scss";
import Button from "../../atoms/Button";
import PropertyDetailsCard from "../../molecules/PropertyDetailsCard";
import { exportMockPropertyDataOne, exportMockPropertyDataTwo } from "./mock";

const HeroSection = () => {
  const propertyMock1 = exportMockPropertyDataOne();
  const propertyMock2 = exportMockPropertyDataTwo();

  return (
    <div className={`w-full mb-8 flex flex-col md:flex-row bg-violet-50`}>
      <div className="w-full md:w-1/2 px-6 sm:px-12 md:px-24 py-12">
        <h2 className="pt-4 pb-2 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Rent your property easily
        </h2>
        <p className="text-gray-700 pt-4 pb-2 text-base sm:text-lg">
          A great platform to rent your properties without any commissions.
        </p>

        <div className="pt-4 pb-2 flex flex-col sm:flex-row sm:gap-8">
          <div className="border-b-4 sm:border-b-0 sm:border-r-4 border-primary sm:pr-8 pb-4 sm:pb-0">
            <div className="text-2xl text-primary font-semibold">50k+</div>
            <span className="tracking-tight text-gray-700">
              believe in our services
            </span>
          </div>
          <div className="sm:pl-8">
            <div className="text-2xl text-primary font-semibold">10k+</div>
            <span className="tracking-tight text-gray-700">
              properties and houses for occupancy
            </span>
          </div>
        </div>

        <div className="pt-6">
          <Link href="/listings" passHref>
            <Button
              customClass="text-center cursor-pointer"
              id="browse-properties"
              dataTestId="browse-properties"
            >
              <span className="text-lg font-semibold">Browse Properties</span>
            </Button>
          </Link>
        </div>
      </div>

      <div
        className={`hidden md:flex gap-2 w-1/2 px-6 sm:px-12 md:px-24 py-12 justify-between text-center ${styles.mapContainer}`}
      >
        <div>
          <PropertyDetailsCard {...propertyMock1} />
        </div>
        <div className="pt-24 pr-4">
          <PropertyDetailsCard {...propertyMock2} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
