import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "react-aria-components";
import { Menu, MenuItem, MenuProps, MenuTrigger } from "./Menu";

it("should open when the trigger is clicked", async () => {
  render(<TestMenu />);

  const trigger = screen.getByRole("button");

  expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
  await userEvent.click(trigger);

  expect(screen.getByText("Item 1")).toBeInTheDocument();
});

it("should have the correct accessible role", async () => {
  render(<TestMenu />);

  const trigger = screen.getByRole("button");
  await userEvent.click(trigger);

  expect(screen.getByRole("menu")).toBeInTheDocument();
  expect(screen.getAllByRole("menuitem")).toHaveLength(3);
});

it("should be open by default if defaultOpen is true", async () => {
  render(<TestMenu defaultOpen />);

  expect(screen.getByRole("menu")).toBeInTheDocument();
});

it("should invoke `onAction` with the correct item ID when a menu item is selected", async () => {
  const onAction = jest.fn();
  render(<TestMenu defaultOpen onAction={onAction} />);

  const item = screen.getByRole("menuitem", { name: "Item 1" });
  await userEvent.click(item);

  expect(onAction).toHaveBeenCalledWith("one");
});

it("should close when the user clicks outside the menu", async () => {
  render(<TestMenu defaultOpen />);

  expect(screen.getByRole("menu")).toBeInTheDocument();

  await userEvent.click(document.body);

  expect(screen.queryByRole("menu")).not.toBeInTheDocument();
});

// https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/
// https://www.w3.org/WAI/ARIA/apg/patterns/menubar/
describe("WAI-ARIA compliance", () => {
  it.each([
    {
      name: "user presses space",
      open: (trigger: HTMLElement) => {
        act(() => trigger.focus());
        return userEvent.keyboard(" ");
      },
    },
    {
      name: "user presses enter",
      open: (trigger: HTMLElement) => {
        act(() => trigger.focus());
        return userEvent.keyboard("{Enter}");
      },
    },
  ])("should open when $name", async ({ open }) => {
    render(<TestMenu />);

    const trigger = screen.getByRole("button");
    await open(trigger);

    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("should close when the user presses escape", async () => {
    render(<TestMenu defaultOpen />);

    expect(screen.getByRole("menu")).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("should focus on the next / previous item when the user presses down / up arrow", async () => {
    render(<TestMenu defaultOpen />);

    const itemOne = screen.getByRole("menuitem", { name: "Item 1" });
    const itemTwo = screen.getByRole("menuitem", { name: "Item 2" });

    itemOne.focus();

    await userEvent.keyboard("{ArrowDown}");
    expect(itemTwo).toHaveFocus();

    await userEvent.keyboard("{ArrowUp}");
    expect(itemOne).toHaveFocus();
  });

  it.each([
    {
      name: "user presses Space",
      select: (item: HTMLElement) => {
        item.focus();
        return userEvent.keyboard(" ");
      },
    },
    {
      name: "user presses Enter",
      select: (item: HTMLElement) => {
        item.focus();
        return userEvent.keyboard("{Enter}");
      },
    },
  ])(
    "should invoke `onAction` with the correct item ID when $name",
    async ({ select }) => {
      const onAction = jest.fn();
      render(<TestMenu defaultOpen onAction={onAction} />);

      const item = screen.getByRole("menuitem", { name: "Item 1" });
      await select(item);

      expect(onAction).toHaveBeenCalledWith("one");
    },
  );

  it("should focus on the last / first item when the user presses end / home", async () => {
    render(<TestMenu defaultOpen />);

    const itemOne = screen.getByRole("menuitem", { name: "Item 1" });
    const itemThree = screen.getByRole("menuitem", { name: "Item 3" });

    itemOne.focus();

    await userEvent.keyboard("{End}");
    expect(itemThree).toHaveFocus();

    await userEvent.keyboard("{Home}");
    expect(itemOne).toHaveFocus();
  });

  it("trigger should have aria-haspopup set to true", () => {
    render(<TestMenu />);

    const trigger = screen.getByRole("button", { name: "Open menu" });
    expect(trigger).toHaveAttribute("aria-haspopup", "true");
  });

  it("trigger should have aria-expanded set to true when the menu is open and false otherwise", async () => {
    render(<TestMenu />);

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
