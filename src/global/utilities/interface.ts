export interface ListedBy {
  name: string;
  email: string;
  companyName?: string;
}

export interface PropertyImage {
  url: string;
  label: string;
}

export interface PropertyAddress {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface PropertyFeatures {
  rent: number;
  deposit: number;
  type: string;
  laundry?: string;
  cooling?: string;
  heating?: string;
  bedrooms?: number;
  baths?: number;
  yearBuilt: number;
  size: number;
  parking?: string;
}

export interface PropertyDetails {
  id: number;
  title: string;
  address: PropertyAddress;
  description: string;
  listedBy: ListedBy;
  thumbNailUrl: string;
  images?: PropertyImage[];
  wishlisted: boolean;
  features: PropertyFeatures;
  status: string;
  listingFor: string;
}

export interface BackendListingResponse {
  id: number;
  title: string;
  addressLine1: string;
  addressLine2?: string | null;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  description: string;
  listedBy: ListedBy;
  thumbNailUrl: string;
  propertyImages?: PropertyImage[] | null;
  wishlisted: boolean;
  rent: number;
  deposit: number;
  type: string;
  laundry?: string | null;
  cooling?: string | null;
  heating?: string | null;
  bedrooms?: string | null;
  baths?: string | null;
  yearBuilt: number;
  size: number;
  parking?: string | null;
  status: string;
  listingFor: string;
}

export interface Feature {
  label: string;
  value: string;
}

export interface AboutProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderRichText: any;
}
