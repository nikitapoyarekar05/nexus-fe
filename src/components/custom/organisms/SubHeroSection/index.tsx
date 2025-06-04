import Link from "next/link";

import { mockListings } from "./mock";
import Button from "../../atoms/Button";
import PropertyDetailsCard from "../../molecules/PropertyDetailsCard";
import { formatListingResponse } from "@/global/utilities/helpers";

const SubHeroSection = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Some popular properties for you
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-1">
            We handpicked a few near your location.
          </p>
        </div>
        <Link href="/listings" passHref>
          <Button
            customClass="mt-4 md:mt-0 bg-primary text-white font-medium px-5 py-2 rounded-md shadow hover:bg-primary-dark transition cursor-pointer"
            id="browse-properties"
            dataTestId="browse-properties"
          >
            <span className="text-lg font-semibold">
              Browse more Properties
            </span>
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {mockListings.map((listing, index) => {
          const formattedListing = formatListingResponse(listing);
          return <PropertyDetailsCard key={index} {...formattedListing} />;
        })}
      </div>
    </section>
  );
};

export default SubHeroSection;
