import { Meta, StoryObj } from "@storybook/nextjs";
import { StudioLayout } from "./StudioLayout";

const meta: Meta<typeof StudioLayout> = {
  component: StudioLayout,
  title: "StudioLayout",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof StudioLayout>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: <div style={{ backgroundColor: "aliceblue" }}>Main</div>,
  },
};
