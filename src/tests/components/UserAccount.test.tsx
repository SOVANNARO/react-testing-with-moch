import { describe, expect, it } from "vitest";
import { User } from "../../../entities";
import { render, screen } from "@testing-library/react";
import UserAccount from "../../components/userAccount";

describe("UserAccount", () => {
  it("Should render user name", () => {
    const user: User = { id: 1, name: "John Doe" };
    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
});

describe("UserAccount", () => {
  it("Should render edit button if user is admin", () => {
    const user: User = { id: 1, name: "John Doe", isAdmin: true };
    render(<UserAccount user={user} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });
});

describe("UserAccount", () => {
  it("Should not render edit button if user is not admin", () => {
    const user: User = { id: 1, name: "John Doe" };
    render(<UserAccount user={user} />);

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
