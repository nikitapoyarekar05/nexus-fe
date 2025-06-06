"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Icon } from "@iconify/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  formatCurrency,
  getRandomImageSource,
} from "../../../../global/utilities/helpers";
import { PropertyDetails } from "../../../../global/utilities/interface";
import { LISTING_TEXT } from "../../../..//content/listing";

const PropertyDetailsCard = (props: PropertyDetails) => {
  const { id, title, address, features, thumbNailUrl } = props;

  // ToDo: Update the image source here later.
  // const [imageSrc, setImageSrc] = useState(thumbNailUrl");
  const imageUrl = getRandomImageSource();
  const [imageSrc, setImageSrc] = useState(imageUrl);

  return (
    <Link
      href={`/listing/${id}`}
      className="block hover:shadow-lg transition-shadow duration-300"
    >
      <Card className="w-full rounded-xl shadow-md overflow-hidden pt-0 gap-0">
        <CardHeader className="p-0">
          <Image
            className="w-full h-[150px] object-cover"
            src={imageSrc}
            alt={title}
            width={285}
            height={150}
            onError={() => setImageSrc("/placeholder.jpg")}
          />
        </CardHeader>

        <CardContent className="px-4 pt-4 text-left">
          <p>
            <span className="text-xl text-primary font-semibold">
              {formatCurrency(features.rent)}
            </span>
            <span className="text-muted-foreground text-base">
              &nbsp;{LISTING_TEXT.perMonth}
            </span>
          </p>
          <CardTitle className="text-lg font-semibold pt-1">{title}</CardTitle>
          <p className="text-sm text-muted-foreground pt-1 pb-2 border-b">
            {`${address.city}, ${address.state}, ${address.zipCode}, ${address.country}`}
          </p>
        </CardContent>

        <CardFooter className="px-4 pt-4 flex justify-between text-sm text-muted-foreground">
          {features?.bedrooms && (
            <div className="flex items-center gap-1">
              <Icon
                icon="mdi:bed-queen-outline"
                className="w-5 h-5 text-primary"
              />
              <span>{`${features.bedrooms} ${
                features.bedrooms === 1 ? "Bed" : "Beds"
              }`}</span>
            </div>
          )}
          {features?.baths && (
            <div className="flex items-center gap-1">
              <Icon icon="mdi:bathroom" className="w-5 h-5 text-primary" />
              <span>{`${features.baths} ${
                features.baths === 1 ? "Bath" : "Baths"
              }`}</span>
            </div>
          )}

          <div className="flex items-center gap-1">
            <Icon icon="mdi:floor-plan" className="w-5 h-5 text-primary" />
            <span>
              {features.size}
              <sup>{LISTING_TEXT.sqmt}</sup>
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PropertyDetailsCard;
