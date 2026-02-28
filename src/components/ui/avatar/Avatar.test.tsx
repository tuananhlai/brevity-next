import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { AvatarButton } from "./Avatar";

describe("AvatarButton", () => {
  it("should render a button", async () => {
    const screen = await render(
      <AvatarButton aria-label="test" initials="JD" />,
    );
    expect(screen.getByRole("button", { name: "test" })).toBeInTheDocument();
  });
});
