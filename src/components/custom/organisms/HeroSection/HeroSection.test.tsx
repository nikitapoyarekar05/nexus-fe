import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HeroSection from "./index";

jest.mock("next/link", () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

jest.mock("../../atoms/Button", () => ({
  __esModule: true,
  default: ({ children, ...rest }: any) => (
    <button {...rest}>{children}</button>
  ),
}));

jest.mock("../../molecules/PropertyDetailsCard", () => ({
  __esModule: true,
  default: (props: any) => <div data-testid="property-card">Property Card</div>,
}));

jest.mock("./mock", () => ({
  exportMockPropertyDataOne: () => ({
    id: "1",
    title: "Mock Property 1",
    address: {
      city: "Austin",
      state: "TX",
      zipCode: "73301",
      country: "USA",
    },
    features: {
      rent: 2000,
      bedrooms: 2,
      baths: 1,
      size: 1000,
    },
  }),
  exportMockPropertyDataTwo: () => ({
    id: "2",
    title: "Mock Property 2",
    address: {
      city: "Dallas",
      state: "TX",
      zipCode: "75001",
      country: "USA",
    },
    features: {
      rent: 2500,
      bedrooms: 3,
      baths: 2,
      size: 1200,
    },
  }),
}));

describe("HeroSection", () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  test("renders heading and description", () => {
    expect(screen.getByText("Rent your property easily")).toBeInTheDocument();

    expect(
      screen.getByText(
        "A great platform to rent your properties without any commissions."
      )
    ).toBeInTheDocument();
  });

  test("displays trust and listings statistics", () => {
    expect(screen.getByText("50k+")).toBeInTheDocument();

    expect(screen.getByText("believe in our services")).toBeInTheDocument();

    expect(screen.getByText("10k+")).toBeInTheDocument();

    expect(
      screen.getByText("properties and houses for occupancy")
    ).toBeInTheDocument();
  });

  test("renders a Browse Properties button with correct text and link", () => {
    const button = screen.getByRole("button", { name: /Browse Properties/i });

    expect(button).toBeInTheDocument();

    const link = screen.getByRole("link", { name: "Browse Properties" });
    expect(link).toHaveAttribute("href", "/listings");
  });

  test("renders two property cards", () => {
    const cards = screen.getAllByTestId("property-card");
    expect(cards.length).toBe(2);
  });
});
