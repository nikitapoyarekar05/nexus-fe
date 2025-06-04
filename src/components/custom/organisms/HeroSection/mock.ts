import { BackendListingResponse } from "../../../../global/utilities/interface";
import { formatListingResponse } from "../../../../global/utilities/helpers";

const mock: BackendListingResponse[] = [
  {
    id: 8,
    title: "Mountain Cabin",
    addressLine1: "777 Forest Trail",
    addressLine2: null,
    city: "Fredericksburg",
    state: "TX",
    country: "USA",
    zipcode: "78624",
    description: "Cozy cabin near hiking trails.",
    listedBy: {
      name: "Henry Woods",
      email: "henry@example.com",
    },
    thumbNailUrl: "https://example.com/images/cabin1.jpg",
    propertyImages: [],
    wishlisted: false,
    rent: 1300,
    deposit: 650,
    type: "Cabin",
    laundry: null,
    cooling: null,
    heating: null,
    bedrooms: "2",
    baths: "1",
    yearBuilt: 2000,
    size: 700,
    parking: null,
    status: "AVAILABLE",
    listingFor: "RENT",
  },
  {
    id: 3,
    title: "Luxury Condo with City View",
    addressLine1: "789 Elm St",
    addressLine2: null,
    city: "Houston",
    state: "TX",
    country: "USA",
    zipcode: "77002",
    description: "Luxury condo featuring stunning city views and amenities.",
    listedBy: {
      name: "Claire Davis",
      email: "claire@example.com",
      companyName: "Houston Homes",
    },
    thumbNailUrl: "https://example.com/images/condo1.jpg",
    propertyImages: [
      {
        url: "https://example.com/images/condo1_1.jpg",
        label: "Balcony View",
      },
      {
        url: "https://example.com/images/condo1_2.jpg",
        label: "Pool",
      },
    ],
    wishlisted: true,
    rent: 3200,
    deposit: 1600,
    type: "Condo",
    laundry: null,
    cooling: null,
    heating: null,
    bedrooms: "2",
    baths: "2",
    yearBuilt: 2020,
    size: 1100,
    parking: null,
    status: "AVAILABLE",
    listingFor: "RENT",
  },
];

export const exportMockPropertyDataOne = () => {
  return formatListingResponse(mock[0]);
};

export const exportMockPropertyDataTwo = () => {
  return formatListingResponse(mock[1]);
};
