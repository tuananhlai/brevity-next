import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
  type TabsProps,
} from "@/components/ui/tabs";

it("should have the correct role", async () => {
  const screen = await render(<TestTabs />);

  expect(screen.getByRole("tablist")).toBeInTheDocument();
  expect(screen.getByRole("tab", { name: "Tab 1" })).toBeInTheDocument();
  expect(screen.getByRole("tab", { name: "Tab 2" })).toBeInTheDocument();
  expect(screen.getByRole("tab", { name: "Tab 3" })).toBeInTheDocument();
  expect(screen.getByRole("tabpanel")).toBeInTheDocument();
});

it("should display the correct tab content", async () => {
  const screen = await render(<TestTabs />);

  expect(screen.getByText("Tab 1 Content")).toBeInTheDocument();
});

it("should switch tabs when clicked", async () => {
  const screen = await render(<TestTabs />);

  await screen.getByRole("tab", { name: "Tab 2" }).click();
  expect(screen.getByText("Tab 2 Content")).toBeInTheDocument();
});

it("should have a default selected tab when `defaultSelectedKey` is passed", async () => {
  const screen = await render(<TestTabs defaultSelectedKey="two" />);

  expect(screen.getByText("Tab 2 Content")).toBeInTheDocument();
});

it("should be controlled when `selectedKey` is passed", async () => {
  const onChange = vi.fn();
  const screen = await render(
    <TestTabs selectedKey="one" onSelectionChange={onChange} />,
  );

  await screen.getByRole("tab", { name: "Tab 2" }).click();

  expect(onChange).toHaveBeenCalledWith("two");
  expect(screen.getByText("Tab 1 Content")).toBeInTheDocument();
});

it("should disable a tab when `disabledKeys` is passed", async () => {
  const screen = await render(<TestTabs disabledKeys={["two"]} />);

  expect(screen.getByRole("tab", { name: "Tab 2" })).toBeDisabled();
});

// https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
describe("WAI-ARIA Compliance", () => {
  it("should keyboard focus on the selected tab", async () => {
    const screen = await render(<TestTabs defaultSelectedKey="two" />);
    await userEvent.tab();
    expect(screen.getByRole("tab", { name: "Tab 2" })).toHaveFocus();
  });

  it("should move focus to the next tab and select it when the user presses the right arrow key", async () => {
    const screen = await render(<TestTabs />);

    screen.getByRole("tab", { name: "Tab 1" }).element().focus();
    await userEvent.keyboard("{arrowright}");

    expect(screen.getByRole("tab", { name: "Tab 2" })).toHaveFocus();
    expect(screen.getByText("Tab 2 Content")).toBeInTheDocument();
  });

  it("should move focus to the previous tab and select it when the user presses the left arrow key", async () => {
    const screen = await render(<TestTabs />);

    screen.getByRole("tab", { name: "Tab 2" }).element().focus();
    await userEvent.keyboard("{arrowleft}");

    expect(screen.getByRole("tab", { name: "Tab 1" })).toHaveFocus();
    expect(screen.getByText("Tab 1 Content")).toBeInTheDocument();
  });

  it.each([
    {
      name: "user presses the space key",
      activate: () => userEvent.keyboard(" "),
    },
    {
      name: "user presses the enter key",
      activate: () => userEvent.keyboard("{enter}"),
    },
  ])(
    "should activate a tab when `keyboardActivation` is `manual` and $name",
    async ({
      activate,
    }: {
      name: string;
      activate: () => Promise<void> | void;
    }) => {
      const screen = await render(<TestTabs keyboardActivation="manual" />);

      screen.getByRole("tab", { name: "Tab 2" }).element().focus();
      await activate();

      expect(screen.getByText("Tab 2 Content")).toBeInTheDocument();
    },
  );

  it("tab has the property aria-controls referring to its associated tabpanel", async () => {
    const screen = await render(<TestTabs />);

    const firstTab = screen.getByRole("tab", { name: "Tab 1" });
    const firstTabPanel = screen.getByRole("tabpanel", { name: "Tab 1" });
    const panelId = (firstTabPanel.element() as HTMLElement).id;

    expect(firstTab).toHaveAttribute("aria-controls", panelId);
  });

  it("tabpanel has the property aria-labelledby referring to its associated tab", async () => {
    const screen = await render(
      <Tabs>
        <TabList>
          <Tab id="one">Tab 1</Tab>
        </TabList>
        <TabPanel id="one">Tab 1 Content</TabPanel>
      </Tabs>,
    );

    const firstTab = screen.getByRole("tab");
    const firstTabPanel = screen.getByRole("tabpanel");
    const tabId = (firstTab.element() as HTMLElement).id;

    expect(firstTabPanel).toHaveAttribute("aria-labelledby", tabId);
  });

  it("active tab has the property aria-selected set to true, and all other tabs have it set to false", async () => {
    const screen = await render(<TestTabs defaultSelectedKey="two" />);

    const firstTab = screen.getByRole("tab", { name: "Tab 1" });
    const secondTab = screen.getByRole("tab", { name: "Tab 2" });
    const thirdTab = screen.getByRole("tab", { name: "Tab 3" });

    expect(firstTab).toHaveAttribute("aria-selected", "false");
    expect(secondTab).toHaveAttribute("aria-selected", "true");
    expect(thirdTab).toHaveAttribute("aria-selected", "false");
  });

  it("tablist should have the property aria-orientation set correctly", async () => {
    const screen = await render(<TestTabs orientation="horizontal" />);

    expect(screen.getByRole("tablist")).toHaveAttribute(
      "aria-orientation",
      "horizontal",
    );

    await screen.rerender(<TestTabs orientation="vertical" />);

    expect(screen.getByRole("tablist")).toHaveAttribute(
      "aria-orientation",
      "vertical",
    );
  });
});

const TestTabs = (props?: TabsProps) => {
  return (
    <Tabs {...props}>
      <TabList>
        <Tab id="one">Tab 1</Tab>
        <Tab id="two">Tab 2</Tab>
        <Tab id="three">Tab 3</Tab>
      </TabList>

      <TabPanel id="one">Tab 1 Content</TabPanel>
      <TabPanel id="two">Tab 2 Content</TabPanel>
      <TabPanel id="three">Tab 3 Content</TabPanel>
    </Tabs>
  );
};
