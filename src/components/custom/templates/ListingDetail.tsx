"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

import { Icon } from "@iconify/react";

import Button from "../atoms/Button";
import BreadCrumbs from "../molecules/BreadCrumbs";
import Carousel from "../molecules/Carousel";
import RentCard from "../molecules/RentCard";
import BookTourCard from "../molecules/BookTourCard";
import ListedBy from "../molecules/ListedBy";
import { formatListingResponse } from "@/global/utilities/helpers";
import { PropertyDetails } from "@/global/utilities/interface";

import { ENDPOINTS } from "@/global/endpoints";
import { LISTING_TEXT } from "@/content/listing";
import ListingDisclaimer from "../molecules/ListingDisclaimer";
import RentalFeatures from "../organisms/RentalFeatures";
import PropertyDescription from "../molecules/PropertyDescription";
import TopFeatures from "../organisms/TopFeatures";
import PropertyInfo from "../molecules/PropertyInfo";

const ListingDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<PropertyDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/listings/${id}`
        );
        const data = await res.json();
        const formattedData = formatListingResponse(data);
        setProperty(formattedData);
      } catch (err) {
        console.error("Failed to fetch listing:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  const toggleWishlist = async () => {
    if (!property) return;

    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }${ENDPOINTS.FAVORITE_UNFAVORITE_LISTING.replace(
          "propertyId",
          property.id.toString()
        )}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ wishlisted: !property.wishlisted }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update wishlist status");
      }

      setProperty((prev) =>
        prev ? { ...prev, wishlisted: !prev.wishlisted } : prev
      );

      toast.success(
        !property.wishlisted
          ? "Added to favorites!"
          : "Removed from favorites!",
        {
          description: `This listing has been ${
            !property.wishlisted ? "added to" : "removed from"
          } your favorites.`,
          duration: 3000,
        }
      );
    } catch (error) {
      console.error("Error toggling wishlist:", error);
      toast.error("Failed to update favorite", {
        description: "Please try again later.",
        duration: 3000,
      });
    }
  };

  const shareListing = () => {
    console.log("Listing shared");
  };

  const applyNow = () => {
    console.log("Apply for Listing");
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-8">
        <p>{LISTING_TEXT.loadingListingDetails}</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="max-w-7xl mx-auto p-8">
        <p>{LISTING_TEXT.listingNotFound}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <BreadCrumbs label="Back to Listings" urlToNavigate="/listings" />
      <section className="w-full">
        <div className="flex justify-between lg:flex-rowitems-center">
          <PropertyInfo title={property.title} address={property.address} />
          <div className="flex flex-row gap-2">
            <Button
              id="wishlist"
              variant="ghost"
              dataTestId="wishlist-listing"
              onClick={toggleWishlist}
              customClass="flex items-center gap-2 text-sm"
            >
              <Icon
                icon={property.wishlisted ? "mdi:heart" : "mdi:heart-outline"}
                className="text-purple-600 w-4 h-4"
              />
              {property.wishlisted ? "Favorite" : "Add to Favorites"}
            </Button>
            <Button
              id="share-listing"
              variant="outline"
              dataTestId="share-listing"
              onClick={shareListing}
              customClass="flex items-center gap-2 text-sm"
            >
              <Icon
                icon="mdi:share-variant"
                className="text-purple-600 w-4 h-4"
              />
              Share
            </Button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-[70%] w-full">
            <Carousel
              // ToDO: Hardcoded src URL for now. Update later as the response contains dummy data.
              // src={property.thumbNailUrl}
              src="/propertyPlaceholder1.svg"
              altText={property.title}
              customClass="rounded-xl w-full h-[400px] object-cover mb-4"
            />
          </div>
          <div className="lg:w-[30%] w-full flex-shrink-0">
            <RentCard rent={property.features.rent} onClick={applyNow} />
            <Separator className="my-4" />
            <BookTourCard />
          </div>
        </div>
        <TopFeatures features={property.features} status={property.status} />
        <PropertyDescription description={property.description} />
        <ListedBy
          name={property.listedBy.name}
          email={property.listedBy.email}
          companyName={property.listedBy.companyName ?? "Self"}
        />
        <RentalFeatures features={property.features} />
        <ListingDisclaimer />
      </section>
    </div>
  );
};

export default ListingDetail;
