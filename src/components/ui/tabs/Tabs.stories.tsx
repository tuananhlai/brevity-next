import { Meta, StoryObj } from "@storybook/react";
import { Tab, TabList, TabPanel, Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "ui/Tabs",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Tabs>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    return (
      <Tabs>
        <TabList>
          <Tab id="tab-1">Tab 1</Tab>
          <Tab id="tab-2">Tab 2</Tab>
          <Tab id="tab-3">Tab 3</Tab>
        </TabList>

        <TabPanel id="tab-1">Tab 1 Content</TabPanel>
        <TabPanel id="tab-2">Tab 2 Content</TabPanel>
        <TabPanel id="tab-3">Tab 3 Content</TabPanel>
      </Tabs>
    );
  },
};

export const Vertial: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    return (
      <Tabs orientation="vertical">
        <TabList>
          <Tab id="tab-1">Tab 1</Tab>
          <Tab id="tab-2">Tab 2</Tab>
          <Tab id="tab-3">Tab 3</Tab>
        </TabList>

        <TabPanel id="tab-1">Tab 1 Content</TabPanel>
        <TabPanel id="tab-2">Tab 2 Content</TabPanel>
        <TabPanel id="tab-3">Tab 3 Content</TabPanel>
      </Tabs>
    );
  },
};
