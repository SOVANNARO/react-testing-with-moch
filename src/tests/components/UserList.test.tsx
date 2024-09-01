import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import UserList from "../../components/UserList";
import { User } from "../../../entities";

describe("UserList", () => {
  it("Should render no users when the users array is empty", () => {
    render(<UserList users={[]} />);

    const noUsersElement = screen.getByText("No users available.");
    expect(noUsersElement).toBeInTheDocument();
  });
});

describe("UserList", () => {
  it("Should render a list of users", () => {
    const users: User[] = [
      {
        id: 1,
        name: "John Doe",
      },
      {
        id: 2,
        name: "Jane Smith",
      },
    ];
    render(<UserList users={users} />);

    const userElement = screen.getByText("John Doe");
    expect(userElement).toBeInTheDocument();

    users.forEach((user) => {
      const userLink = screen.getByText(user.name);
      expect(userLink).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
