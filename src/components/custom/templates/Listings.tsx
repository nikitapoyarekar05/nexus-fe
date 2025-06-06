"use client";

import { useEffect, useState, useCallback } from "react";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      try {
        const url = debouncedSearchQuery
          ? `${process.env.NEXT_PUBLIC_API_URL}${ENDPOINTS.SEARCH_LISTINGS}?query=${debouncedSearchQuery}`
          : `${process.env.NEXT_PUBLIC_API_URL}${ENDPOINTS.FETCH_ALL_LISTINGS}`;

        const res = await fetch(url);
        const data = await res.json();

        const formattedListings: PropertyDetails[] = data.listings.map(
          (listing: BackendListingResponse) => formatListingResponse(listing)
        );
        setListings(formattedListings);
      } catch (error) {
        console.error("Error fetching listings:", error);
        setListings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [debouncedSearchQuery]);

  const handleSearchInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    []
  );

  return (
    <div className="max-w-7xl mx-auto pt-8 px-4">
      <h1 className="text-3xl font-bold tracking-tight mb-6">
        {LISTING_TEXT.searchPropertyText}
      </h1>

      <div className="mb-8">
        <Input
          type="text"
          placeholder="Title, Description or Address"
          className="w-full sm:max-w-md"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      {loading ? (
        <p>{LISTING_TEXT.loadingListings}</p>
      ) : listings.length === 0 && debouncedSearchQuery !== "" ? (
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
