import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tab, TabList, TabPanel, Tabs, TabsProps } from "@/components/ui/tabs";

it("should have the correct role", () => {
  render(<TestTabs />);

  expect(screen.getByRole("tablist")).toBeInTheDocument();
  expect(screen.getAllByRole("tab")).toHaveLength(3);
  expect(screen.getByRole("tabpanel")).toBeInTheDocument();
});

it("should display the correct tab content", () => {
  render(<TestTabs />);

  expect(screen.getByText("Tab 1 Content")).toBeInTheDocument();
});

it("should switch tabs when clicked", async () => {
  render(<TestTabs />);

  await userEvent.click(screen.getByRole("tab", { name: "Tab 2" }));
  expect(screen.getByText("Tab 2 Content")).toBeInTheDocument();
});

it("should have a default selected tab when `defaultSelectedKey` is passed", () => {
  render(<TestTabs defaultSelectedKey="two" />);

  expect(screen.getByText("Tab 2 Content")).toBeInTheDocument();
});

it("should be controlled when `selectedKey` is passed", async () => {
  const onChange = jest.fn();
  render(<TestTabs selectedKey="one" onSelectionChange={onChange} />);

  await userEvent.click(screen.getByRole("tab", { name: "Tab 2" }));

  expect(onChange).toHaveBeenCalledWith("two");
  expect(screen.getByText("Tab 1 Content")).toBeInTheDocument();
});

it("should disable a tab when `disabledKeys` is passed", async () => {
  render(<TestTabs disabledKeys={["two"]} />);

  await userEvent.click(screen.getByRole("tab", { name: "Tab 2" }));

  expect(screen.getByText("Tab 1 Content")).toBeInTheDocument();
});

// https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
describe("WAI-ARIA Compliance", () => {
  it("should keyboard focus on the selected tab", async () => {
    render(<TestTabs defaultSelectedKey="two" />);
    await userEvent.tab();
    expect(screen.getByRole("tab", { name: "Tab 2" })).toHaveFocus();
  });

  it("should move focus to the next tab and select it when the user presses the right arrow key", async () => {
    render(<TestTabs />);

    act(() => {
      screen.getByRole("tab", { name: "Tab 1" }).focus();
    });
    await userEvent.keyboard("{arrowright}");

    expect(screen.getByRole("tab", { name: "Tab 2" })).toHaveFocus();
    expect(screen.getByText("Tab 2 Content")).toBeInTheDocument();
  });

  it("should move focus to the previous tab and select it when the user presses the left arrow key", async () => {
    render(<TestTabs />);

    act(() => {
      screen.getByRole("tab", { name: "Tab 2" }).focus();
    });
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
    async ({ activate }) => {
      render(<TestTabs keyboardActivation="manual" />);

      act(() => screen.getByRole("tab", { name: "Tab 2" }).focus());
      await activate();

      expect(screen.getByText("Tab 2 Content")).toBeInTheDocument();
    },
  );
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
