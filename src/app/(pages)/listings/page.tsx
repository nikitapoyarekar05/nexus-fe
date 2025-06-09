"use client";

import ListingsTemplate from "@/components/custom/templates/ListingsTemplate";
import { LISTING_TEXT } from "@/content/listing";
import { ENDPOINTS } from "@/global/endpoints";

const Listings = () => {
  const getFetchUrl = (query: string) => {
    return query
      ? `${process.env.NEXT_PUBLIC_API_URL}${ENDPOINTS.SEARCH_LISTINGS}?query=${query}`
      : `${process.env.NEXT_PUBLIC_API_URL}${ENDPOINTS.FETCH_ALL_LISTINGS}`;
  };

  return (
    <div className="bg-gradient-to-b from-white to-violet-50 pb-3">
      <ListingsTemplate
        title={LISTING_TEXT.searchPropertyText}
        placeholder="Search your listing by Title, Description or Address"
        noDataText={LISTING_TEXT.noListingsFound}
        fetchUrl={getFetchUrl}
      />
    </div>
  );
};

export default Listings;
