import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ExpandableText from "../../components/ExpandableText";

describe("ExpandableText Component", () => {
  const shortText = "This is a short text.";
  const longText = "A".repeat(300); // A long text with 300 characters

  test("renders short text without a button", () => {
    render(<ExpandableText text={shortText} />);
    const articleElement = screen.getByText(shortText);
    expect(articleElement).toBeInTheDocument();
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });

  test('renders long text with "Show More" button initially', () => {
    render(<ExpandableText text={longText} />);
    const articleElement = screen.getByText(`${longText.substring(0, 255)}...`);
    expect(articleElement).toBeInTheDocument();
    const button = screen.getByRole("button", { name: /Show More/i });
    expect(button).toBeInTheDocument();
  });

  test('expands text when "Show More" button is clicked', () => {
    render(<ExpandableText text={longText} />);
    const button = screen.getByRole("button", { name: /Show More/i });
    fireEvent.click(button);
    const articleElement = screen.getByText(longText);
    expect(articleElement).toBeInTheDocument();
    expect(button).toHaveTextContent("Show Less");
  });

  test('collapses text when "Show Less" button is clicked', () => {
    render(<ExpandableText text={longText} />);
    const button = screen.getByRole("button", { name: /Show More/i });
    fireEvent.click(button);
    fireEvent.click(button);
    const articleElement = screen.getByText(`${longText.substring(0, 255)}...`);
    expect(articleElement).toBeInTheDocument();
    expect(button).toHaveTextContent("Show More");
  });
});
