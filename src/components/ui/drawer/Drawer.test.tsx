import { render, screen } from "@testing-library/react";
import { Drawer, DrawerTitle } from "./Drawer";

it("should be open when `isOpen` is true", () => {
  render(
    <Drawer isOpen>
      <DrawerTitle>Drawer Title</DrawerTitle>
    </Drawer>,
  );

  expect(screen.getByText("Drawer Title")).toBeInTheDocument();
});

it("should have the correct role and name", () => {
  render(
    <Drawer isOpen>
      <DrawerTitle>Drawer Title</DrawerTitle>
    </Drawer>,
  );

  expect(
    screen.getByRole("dialog", { name: "Drawer Title" }),
  ).toBeInTheDocument();
});
