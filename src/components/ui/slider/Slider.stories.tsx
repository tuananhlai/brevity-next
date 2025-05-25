import { Meta, StoryObj } from "@storybook/react";
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
        <Slider label="Slider" description="This is a slider" />
      </div>
    );
  },
};
