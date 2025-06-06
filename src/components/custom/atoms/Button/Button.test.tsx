import { render, screen, fireEvent } from "@testing-library/react";

import Button from "./index";

describe("Button component", () => {
  const defaultProps = {
    id: "test-button",
    dataTestId: "button-testid",
    children: "Click me",
  };

  test("renders with correct text", () => {
    render(<Button {...defaultProps} />);

    const button = screen.getByTestId("button-testid");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click me");
  });

  test("renders with the given id attribute", () => {
    render(<Button {...defaultProps} />);

    const button = screen.getByTestId("button-testid");

    expect(button.id).toBe("test-button");
  });

  test("passes the type attribute when provided", () => {
    render(<Button {...defaultProps} type="submit" />);

    const button = screen.getByTestId("button-testid");

    expect(button).toHaveAttribute("type", "submit");
  });

  test("sets disabled attribute correctly", () => {
    const { rerender } = render(<Button {...defaultProps} disabled={true} />);

    let button = screen.getByTestId("button-testid");

    expect(button).toBeDisabled();

    rerender(<Button {...defaultProps} disabled={false} />);

    button = screen.getByTestId("button-testid");

    expect(button).not.toBeDisabled();
  });

  test("applies customClass as className", () => {
    render(<Button {...defaultProps} customClass="my-custom-class" />);

    const button = screen.getByTestId("button-testid");

    expect(button).toHaveClass("my-custom-class");
  });

  test("calls onClick handler when clicked", () => {
    const onClick = jest.fn();

    render(<Button {...defaultProps} onClick={onClick} />);

    const button = screen.getByTestId("button-testid");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("uses fallback data-testid if dataTestId prop is missing", () => {
    render(
      <Button id="btn-id" variant="ghost" dataTestId="">
        Fallback test
      </Button>
    );

    const button = screen.getByTestId("ghost-btn-id");

    expect(button).toBeInTheDocument();
  });
});
