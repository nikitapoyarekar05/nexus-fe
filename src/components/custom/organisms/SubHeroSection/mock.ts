import { BackendListingResponse } from "@/global/utilities/interface";

export const mockListings: BackendListingResponse[] = [
{
            "id": 9,
            "title": "Historic Mansion",
            "addressLine1": "222 Heritage Rd",
            "addressLine2": null,
            "city": "Dallas",
            "state": "TX",
            "country": "USA",
            "zipcode": "75205",
            "description": "Elegant mansion with historic charm.",
            "listedBy": {
                "name": "Irene Scott",
                "email": "irene@example.com",
                "companyName": "Heritage Estates"
            },
            "thumbNailUrl": "https://example.com/images/mansion1.jpg",
            "propertyImages": [],
            "wishlisted": true,
            "rent": 7200,
            "deposit": 3600,
            "type": "Mansion",
            "laundry": null,
            "cooling": null,
            "heating": null,
            "bedrooms": "5",
            "baths": "5",
            "yearBuilt": 1920,
            "size": 5500,
            "parking": null,
            "status": "AVAILABLE",
            "listingFor": "RENT"
        },
        {
            "id": 1,
            "title": "Modern Apartment",
            "addressLine1": "123 Main St",
            "addressLine2": null,
            "city": "Austin",
            "state": "TX",
            "country": "USA",
            "zipcode": "78701",
            "description": "A beautiful modern apartment located downtown.",
            "listedBy": {
                "name": "Alice Johnson",
                "email": "alice@example.com",
                "companyName": "Austin Realty"
            },
            "thumbNailUrl": "https://example.com/images/apt1.jpg",
            "propertyImages": [
                {
                    "url": "https://example.com/images/apt1_1.jpg",
                    "label": "Living Room"
                },
                {
                    "url": "https://example.com/images/apt1_2.jpg",
                    "label": "Bedroom"
                }
            ],
            "wishlisted": false,
            "rent": 1800,
            "deposit": 900,
            "type": "Apartment",
            "laundry": null,
            "cooling": null,
            "heating": null,
            "bedrooms": "2",
            "baths": "2",
            "yearBuilt": 2018,
            "size": 900,
            "parking": null,
            "status": "AVAILABLE",
            "listingFor": "RENT"
        },
        {
            "id": 11,
            "title": "Modern Nick Apartment",
            "addressLine1": "123 Hello world St",
            "addressLine2": "Apt 4B",
            "city": "Austin",
            "state": "TX",
            "country": "USA",
            "zipcode": "78701",
            "description": "A beautiful modern apartment located downtown.",
            "listedBy": {
                "name": "Alice Johnson",
                "email": "alice@example.com",
                "companyName": "Austin Realty"
            },
            "thumbNailUrl": "https://example.com/images/apt1.jpg",
            "propertyImages": [
                {
                    "url": "https://example.com/images/apt1_1.jpg",
                    "label": "Living Room"
                },
                {
                    "url": "https://example.com/images/apt1_2.jpg",
                    "label": "Bedroom"
                }
            ],
            "wishlisted": false,
            "rent": 1800,
            "deposit": 900,
            "type": "Apartment",
            "laundry": "In-unit",
            "cooling": "Central",
            "heating": "Central",
            "bedrooms": "2",
            "baths": "2",
            "yearBuilt": 2018,
            "size": 900,
            "parking": "Garage",
            "status": "AVAILABLE",
            "listingFor": "RENT"
        },
        {
            "id": 10,
            "title": "Modern Nikita Apartment",
            "addressLine1": "123 Main St",
            "addressLine2": "Apt 4B",
            "city": "Austin",
            "state": "TX",
            "country": "USA",
            "zipcode": "78701",
            "description": "A beautiful modern apartment located downtown.",
            "listedBy": {
                "name": "Alice Johnson",
                "email": "alice@example.com",
                "companyName": "Austin Realty"
            },
            "thumbNailUrl": "https://example.com/images/apt1.jpg",
            "propertyImages": [
                {
                    "url": "https://example.com/images/apt1_1.jpg",
                    "label": "Living Room"
                },
                {
                    "url": "https://example.com/images/apt1_2.jpg",
                    "label": "Bedroom"
                }
            ],
            "wishlisted": true,
            "rent": 1800,
            "deposit": 900,
            "type": "Apartment",
            "laundry": "In-unit",
            "cooling": "Central",
            "heating": "Central",
            "bedrooms": "2",
            "baths": "2",
            "yearBuilt": 2018,
            "size": 900,
            "parking": "Garage",
            "status": "AVAILABLE",
            "listingFor": "RENT"
        }
];

