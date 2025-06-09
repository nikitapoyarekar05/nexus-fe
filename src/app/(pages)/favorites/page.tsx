"use client";

import { ENDPOINTS } from "@/global/endpoints";
import { LISTING_TEXT } from "@/content/listing";
import ListingsTemplate from "@/components/custom/templates/ListingsTemplate";

const Favorites = () => {
  const getFetchUrl = (query: string) => {
    return query
      ? `${process.env.NEXT_PUBLIC_API_URL}${ENDPOINTS.SEARCH_LISTINGS}?query=${query}&wishlistedOnly=true`
      : `${process.env.NEXT_PUBLIC_API_URL}${ENDPOINTS.FETCH_FAVORITE_LISTINGS}`;
  };

  return (
    <div className="bg-gradient-to-b from-white to-violet-50 pb-3">
      <ListingsTemplate
        title={LISTING_TEXT.yourFavoriteListings}
        placeholder="Search your favorite listing by title, description or address"
        noDataText={LISTING_TEXT.noFavoriteListings}
        fetchUrl={getFetchUrl}
      />
    </div>
  );
};

export default Favorites;
