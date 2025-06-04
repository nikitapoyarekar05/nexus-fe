import { BackendListingResponse } from "./interface";

export const formatCurrency = (amount: number) => {
  return `$${amount.toLocaleString()}`;
}

export const getAvatarWithInitials = (name: string) => {
  if (!name) return "";
  const parts = name.trim().split(" ");

  const firstInitial = parts[0]?.[0] || "";
  const secondInitial = parts[1]?.[0] || "";

  return `${firstInitial}${secondInitial}`.toUpperCase();
};

/**
 * Formats the backend listing response to match the frontend PropertyDetails interface
 * @param {Object} backendResponse - The original backend response object
 * @returns {PropertyDetails} - The formatted property details object
 */
export const formatListingResponse = (backendResponse: BackendListingResponse) => {
  return {
    id: backendResponse.id,
    title: backendResponse.title,
    address: {
      addressLine1: backendResponse.addressLine1,
      addressLine2: backendResponse.addressLine2 || undefined,
      city: backendResponse.city,
      state: backendResponse.state,
      country: backendResponse.country,
      zipCode: backendResponse.zipcode,
    },
    description: backendResponse.description,
    listedBy: {
      name: backendResponse.listedBy.name,
      email: backendResponse.listedBy.email,
      company: backendResponse.listedBy.companyName || undefined,
    },
    thumbNailUrl: backendResponse.thumbNailUrl,
    images: backendResponse.propertyImages
      ? backendResponse.propertyImages.map(img => ({
          url: img.url,
          label: img.label,
        }))
      : undefined,
    wishlisted: backendResponse.wishlisted,
    features: {
      rent: backendResponse.rent,
      deposit: backendResponse.deposit,
      type: backendResponse.type,
      laundry: backendResponse.laundry || undefined,
      cooling: backendResponse.cooling || undefined,
      heating: backendResponse.heating || undefined,
      bedrooms: backendResponse.bedrooms ? Number(backendResponse.bedrooms) : undefined,
      baths: backendResponse.baths ? Number(backendResponse.baths) : undefined,
      yearBuilt: backendResponse.yearBuilt,
      size: backendResponse.size,
      parking: backendResponse.parking || undefined,
    },
    status: backendResponse.status,
    listingFor: backendResponse.listingFor,
  };
}

export const getRandomImageSource = () => {
  const thumbNailUrls = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", 
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80", 
    "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=800&q=80",   
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80", 
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80", 
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
  ];
  const randomIndex = Math.floor(Math.random() * thumbNailUrls.length);
  return thumbNailUrls[randomIndex];
}