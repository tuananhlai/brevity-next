import { Meta, StoryObj } from "@storybook/react";
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
        <Slider
          defaultValue={50}
          label="Slider"
          description="This is a slider"
        />
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
          description="This is a slider with decimal values"
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
        <Slider aria-label="Label" minValue={0} maxValue={100} value={0} />
        <Slider aria-label="Label" minValue={0} maxValue={100} value={50} />
        <Slider aria-label="Label" minValue={0} maxValue={100} value={100} />
        <Slider label="Label" minValue={0} maxValue={100} value={50} />
        <Slider
          label="Label"
          description="This is a slider"
          minValue={0}
          maxValue={100}
          value={50}
        />
      </VisualTestGrid>
    );
  },
};
