import { Button } from "react-aria-components";
import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { Menu, MenuItem, type MenuProps, MenuTrigger } from "./Menu";

it("should open when the trigger is clicked", async () => {
  const screen = await render(<TestMenu />);

  const trigger = screen.getByRole("button");

  await trigger.click();

  expect(screen.getByRole("menuitem", { name: "Item 1" })).toBeInTheDocument();
});

it("should have the correct accessible role", async () => {
  const screen = await render(<TestMenu />);

  const trigger = screen.getByRole("button");
  await trigger.click();

  expect(screen.getByRole("menu")).toBeInTheDocument();
});

it("should be open by default if defaultOpen is true", async () => {
  const screen = await render(<TestMenu defaultOpen />);

  expect(screen.getByRole("menu")).toBeInTheDocument();
});

it("should invoke `onAction` with the correct item ID when a menu item is selected", async () => {
  const onAction = vi.fn();
  const screen = await render(<TestMenu defaultOpen onAction={onAction} />);

  const item = screen.getByRole("menuitem", { name: "Item 1" });
  await item.click();

  expect(onAction).toHaveBeenCalledWith("one");
});

it("should close when the user clicks outside the menu", async () => {
  const screen = await render(<TestMenu defaultOpen />);

  expect(screen.getByRole("menu")).toBeInTheDocument();

  await userEvent.click(document.body);
});

// https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/
// https://www.w3.org/WAI/ARIA/apg/patterns/menubar/
describe("WAI-ARIA compliance", () => {
  it.each([
    {
      name: "user presses space",
      open: (trigger: HTMLElement | SVGElement) => {
        trigger.focus();
        return userEvent.keyboard(" ");
      },
    },
    {
      name: "user presses enter",
      open: (trigger: HTMLElement | SVGElement) => {
        trigger.focus();
        return userEvent.keyboard("{Enter}");
      },
    },
  ])("should open when $name", async ({ open }) => {
    const screen = await render(<TestMenu />);

    const trigger = screen.getByRole("button");
    await open(trigger.element());

    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("should close when the user presses escape", async () => {
    const screen = await render(<TestMenu defaultOpen />);

    expect(screen.getByRole("menu")).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
  });

  it("should focus on the next / previous item when the user presses down / up arrow", async () => {
    const screen = await render(<TestMenu defaultOpen />);

    const itemOne = screen.getByRole("menuitem", { name: "Item 1" });
    const itemTwo = screen.getByRole("menuitem", { name: "Item 2" });

    itemOne.element().focus();

    await userEvent.keyboard("{ArrowDown}");
    expect(itemTwo).toHaveFocus();

    await userEvent.keyboard("{ArrowUp}");
    expect(itemOne).toHaveFocus();
  });

  it.each([
    {
      name: "user presses Space",
      select: (item: HTMLElement | SVGElement) => {
        item.focus();
        return userEvent.keyboard(" ");
      },
    },
    {
      name: "user presses Enter",
      select: (item: HTMLElement | SVGElement) => {
        item.focus();
        return userEvent.keyboard("{Enter}");
      },
    },
  ])(
    "should invoke `onAction` with the correct item ID when $name",
    async ({ select }) => {
      const onAction = vi.fn();
      const screen = await render(<TestMenu defaultOpen onAction={onAction} />);

      const item = screen.getByRole("menuitem", { name: "Item 1" });
      await select(item.element());

      expect(onAction).toHaveBeenCalledWith("one");
    },
  );

  it("should focus on the last / first item when the user presses end / home", async () => {
    const screen = await render(<TestMenu defaultOpen />);

    const itemOne = screen.getByRole("menuitem", { name: "Item 1" });
    const itemThree = screen.getByRole("menuitem", { name: "Item 3" });

    itemOne.element().focus();

    await userEvent.keyboard("{End}");
    expect(itemThree).toHaveFocus();

    await userEvent.keyboard("{Home}");
    expect(itemOne).toHaveFocus();
  });

  it("trigger should have aria-haspopup set to true", async () => {
    const screen = await render(<TestMenu />);

    const trigger = screen.getByRole("button", { name: "Open menu" });
    expect(trigger).toHaveAttribute("aria-haspopup", "true");
  });

  it("trigger should have aria-expanded set to true when the menu is open and false otherwise", async () => {
    const screen = await render(<TestMenu />);

    const trigger = screen.getByRole("button", { name: "Open menu" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
  });
});

const TestMenu = (props: MenuProps<object> = {}) => {
  const { defaultOpen, isOpen, onOpenChange, ...rest } = props;
  return (
    <MenuTrigger
      defaultOpen={defaultOpen}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <Button>Open menu</Button>
      <Menu {...rest}>
        <MenuItem id="one">Item 1</MenuItem>
        <MenuItem id="two">Item 2</MenuItem>
        <MenuItem id="three">Item 3</MenuItem>
      </Menu>
    </MenuTrigger>
  );
};
