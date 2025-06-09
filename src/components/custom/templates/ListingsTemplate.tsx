"use client";

import { useEffect, useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import PropertyDetailsCard from "../molecules/PropertyDetailsCard";

import {
  BackendListingResponse,
  PropertyDetails,
} from "@/global/utilities/interface";
import { formatListingResponse } from "@/global/utilities/helpers";

interface ListingsTemplateProps {
  title: string;
  placeholder: string;
  noDataText: string;
  fetchUrl: (searchQuery: string) => string;
}

const ListingsTemplate = ({
  title,
  placeholder,
  noDataText,
  fetchUrl,
}: ListingsTemplateProps) => {
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
        const url = fetchUrl(debouncedSearchQuery);
        const res = await fetch(url);
        const data = await res.json();

        if (!Array.isArray(data.listings)) {
          console.error(
            "API response 'listings' is not an array or is missing:",
            data
          );
          setListings([]);
          return;
        }

        const formatted = data.listings.map((l: BackendListingResponse) =>
          formatListingResponse(l)
        );
        setListings(formatted);
      } catch (err) {
        console.error("Failed to fetch listings:", err);
        setListings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [fetchUrl, debouncedSearchQuery]);

  const handleSearchInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    []
  );

  return (
    <div className="max-w-7xl mx-auto pt-8 px-4">
      <h1 className="text-3xl font-bold tracking-tight mb-6">{title}</h1>

      <div className="mb-8">
        <Input
          type="text"
          placeholder={placeholder}
          className="w-full sm:max-w-md"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      {loading ? (
        <p>Loading listings...</p>
      ) : listings.length === 0 ? (
        <p>{noDataText}</p>
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

export default ListingsTemplate;
