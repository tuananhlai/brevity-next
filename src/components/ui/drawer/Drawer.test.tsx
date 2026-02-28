import { expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { Drawer, DrawerTitle } from "./Drawer";

it("should be open when `isOpen` is true", async () => {
  const screen = await render(
    <Drawer isOpen>
      <DrawerTitle>Drawer Title</DrawerTitle>
    </Drawer>,
  );

  expect(screen.getByText("Drawer Title")).toBeInTheDocument();
});

it("should have the correct role and name", async () => {
  const screen = await render(
    <Drawer isOpen>
      <DrawerTitle>Drawer Title</DrawerTitle>
    </Drawer>,
  );

  expect(
    screen.getByRole("dialog", { name: "Drawer Title" }),
  ).toBeInTheDocument();
});
