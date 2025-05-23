import { render, screen } from "@testing-library/react";
import { AvatarButton } from "./Avatar";

describe("AvatarButton", () => {
  it("should render a button", () => {
    render(<AvatarButton aria-label="test" initials="JD" />);
    expect(screen.getByRole("button", { name: "test" })).toBeInTheDocument();
  });
});
