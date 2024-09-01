import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import TermsAndConditions from "../../components/TermsAndConditions";

describe("TermsAndConditions Component", () => {
  test("renders Terms & Conditions heading", () => {
    render(<TermsAndConditions />);
    const headingElement = screen.getByText(/Terms & Conditions/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders the terms and conditions text", () => {
    render(<TermsAndConditions />);
    const termsText = screen.getByText(
      /Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, delectus./i
    );
    expect(termsText).toBeInTheDocument();
  });

  test("checkbox is initially unchecked", () => {
    render(<TermsAndConditions />);
    const checkbox = screen.getByLabelText(
      /I accept the terms and conditions./i
    );
    expect(checkbox).not.toBeChecked();
  });

  test("button is initially disabled", () => {
    render(<TermsAndConditions />);
    const button = screen.getByRole("button", { name: /Submit/i });
    expect(button).toBeDisabled();
  });

  test("checkbox can be checked and unchecked", () => {
    render(<TermsAndConditions />);
    const checkbox = screen.getByLabelText(
      /I accept the terms and conditions./i
    );
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test("button is enabled when checkbox is checked", () => {
    render(<TermsAndConditions />);
    const checkbox = screen.getByLabelText(
      /I accept the terms and conditions./i
    );
    const button = screen.getByRole("button", { name: /Submit/i });
    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
  });

  test("button is disabled when checkbox is unchecked", () => {
    render(<TermsAndConditions />);
    const checkbox = screen.getByLabelText(
      /I accept the terms and conditions./i
    );
    const button = screen.getByRole("button", { name: /Submit/i });
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});
