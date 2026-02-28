import { type Meta, type StoryObj } from "@storybook/react-vite";
import { VisualTestGrid } from "@/styles/storybookTestUtils";
import { Tab } from "./Tab";
import { TabList } from "./TabList";
import { TabPanel } from "./TabPanel";
import { Tabs, type TabsProps } from "./Tabs";

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
    return <ExampleTabs />;
  },
};

export const Vertical: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    return <ExampleTabs orientation="vertical" />;
  },
};

export const ManualKeyboardActivation: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    return <ExampleTabs keyboardActivation="manual" />;
  },
};

export const HorizontalOverflow: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    return (
      <div style={{ width: "100px" }}>
        <ExampleTabs />
      </div>
    );
  },
};

export const VerticalOverflow: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    return (
      <div style={{ display: "flex", height: "200px", width: "300px" }}>
        <Tabs>
          <TabList>
            <Tab id="one">Tab 1</Tab>
          </TabList>

          <TabPanel id="one">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            cumque, dolores voluptates quas laborum illum minus rerum
            repellendus, asperiores obcaecati repudiandae qui at. Cum expedita
            tempora inventore soluta totam hic! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ea, dicta incidunt quis ad, numquam
            repudiandae nihil deserunt laboriosam at tempora error eligendi sint
            nobis doloribus repellendus veniam illo distinctio iure.
          </TabPanel>
        </Tabs>
      </div>
    );
  },
};

export const VisualTest: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
  render: () => {
    return (
      <VisualTestGrid cellWidth="300px">
        <ExampleTabs />
        <ExampleTabs orientation="vertical" />
        <ExampleTabs disabledKeys={["tab-2"]} />
        <div style={{ width: "100px" }}>
          <ExampleTabs />
        </div>
        <div style={{ display: "flex", height: "200px", width: "200px" }}>
          <Tabs>
            <TabList>
              <Tab id="one">Tab 1</Tab>
            </TabList>

            <TabPanel id="one">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              cumque, dolores voluptates quas laborum illum minus rerum
              repellendus, asperiores obcaecati repudiandae qui at. Cum expedita
              tempora inventore soluta totam hic! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Ea, dicta incidunt quis ad, numquam
              repudiandae nihil deserunt laboriosam at tempora error eligendi
              sint nobis doloribus repellendus veniam illo distinctio iure.
            </TabPanel>
          </Tabs>
        </div>
      </VisualTestGrid>
    );
  },
};

const ExampleTabs = (props?: TabsProps) => {
  return (
    <Tabs {...props}>
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
};
