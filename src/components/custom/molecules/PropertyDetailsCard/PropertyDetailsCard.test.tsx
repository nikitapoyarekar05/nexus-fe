import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PropertyDetailsCard from "./index";
import { PropertyDetails } from "../../../../global/utilities/interface";

jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    return <img {...props} />;
  },
}));

jest.mock("../../../../global/utilities/helpers", () => ({
  ...jest.requireActual("../../../../global/utilities/helpers"),
  getRandomImageSource: () => "/test-image.jpg",
}));

const mockProperty: PropertyDetails = {
  id: 12345,
  title: "Modern Apartment in City Center",
  address: {
    addressLine1: "1572 Old spicewood springs road",
    city: "Austin",
    state: "TX",
    zipCode: "73301",
    country: "USA",
  },
  status: "AVAILABLE",
  listingFor: "RENT",
  description: "jghfccg",
  listedBy: { name: "Niik", email: "n@hghh.com" },
  thumbNailUrl: "jhgfcgfx",
  wishlisted: false,
  features: {
    rent: 1800,
    bedrooms: 2,
    baths: 1,
    size: 950,
    deposit: 459,
    type: "xyz",
    yearBuilt: 1990,
  },
};

describe.only("property details cards", () => {
  test("renders property details correctly", () => {
    render(<PropertyDetailsCard {...mockProperty} />);

    expect(screen.getByText(mockProperty.title)).toBeInTheDocument();

    expect(screen.getByText("$1,800")).toBeInTheDocument();
    expect(screen.getByText("/month")).toBeInTheDocument();

    expect(
      screen.getByText(
        `${mockProperty.address.city}, ${mockProperty.address.state}, ${mockProperty.address.zipCode}, ${mockProperty.address.country}`
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(`${mockProperty.features.bedrooms} Beds`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${mockProperty.features.baths} Bath`)
    ).toBeInTheDocument();
    expect(screen.getByText(mockProperty.features.size)).toBeInTheDocument();
  });

  test("uses fallback image on error", () => {
    const { getByRole } = render(<PropertyDetailsCard {...mockProperty} />);
    const image = getByRole("img") as HTMLImageElement;

    expect(image).toBeInTheDocument();
    expect(image.src).toContain("/test-image.jpg");
  });

  test("links to the correct listing detail page", () => {
    render(<PropertyDetailsCard {...mockProperty} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/listing/12345");
  });
});
