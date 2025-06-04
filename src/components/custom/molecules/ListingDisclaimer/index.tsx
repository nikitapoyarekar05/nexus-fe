import { LISTING_TEXT } from "@/content/listing";

const ListingDisclaimer = () => {
  return (
    <p className="text-xs text-muted-foreground mt-8">
      {LISTING_TEXT.listingDisclaimer}
    </p>
  );
};

export default ListingDisclaimer;
