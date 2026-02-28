import { type Meta, type StoryObj } from "@storybook/react-vite";
import { VisualTestGrid } from "@/styles/storybookTestUtils";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: "ui/Slider",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Slider>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    return (
      <div style={{ width: "300px" }}>
        <Slider defaultValue={50} label="Slider" />
      </div>
    );
  },
};

export const Decimal: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    return (
      <div style={{ width: "300px" }}>
        <Slider
          defaultValue={0.5}
          minValue={0.1}
          maxValue={2.0}
          step={0.1}
          label="Slider"
        />
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
      <VisualTestGrid cellWidth="200px">
        <Slider label="Label" minValue={0} maxValue={100} value={50} />
        <Slider
          label="Label"
          formatOptions={{ style: "percent" }}
          minValue={0}
          maxValue={1}
          step={0.05}
        />
      </VisualTestGrid>
    );
  },
};
