"use client";

import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";

import PropertyDetailsCard from "../molecules/PropertyDetailsCard";
import {
  BackendListingResponse,
  PropertyDetails,
} from "@/global/utilities/interface";
import { formatListingResponse } from "@/global/utilities/helpers";
import { ENDPOINTS } from "@/global/endpoints";
import { LISTING_TEXT } from "@/content/listing";

const BrowseListings = () => {
  const [listings, setListings] = useState<PropertyDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}${ENDPOINTS.FETCH_ALL_LISTINGS}`
        );
        const data = await res.json();

        const formattedListings: PropertyDetails[] = data.listings.map(
          (listing: BackendListingResponse) => formatListingResponse(listing)
        );

        setListings(formattedListings);
      } catch (error) {
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="max-w-7xl mx-auto pt-8 px-4">
      <h1 className="text-3xl font-bold tracking-tight mb-6">
        {LISTING_TEXT.searchPropertyText}
      </h1>

      {/* //ToDo: Integrate Search API later if time permits */}
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Title, Description or Address"
          className="w-full sm:max-w-md"
        />
      </div>

      {loading ? (
        <p>{LISTING_TEXT.loadingListings}</p>
      ) : listings.length === 0 ? (
        <p>{LISTING_TEXT.noListingsFound}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {listings.map((property) => (
            <PropertyDetailsCard key={property.id} {...property} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseListings;
