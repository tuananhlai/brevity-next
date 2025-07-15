import { Meta, StoryObj } from "@storybook/nextjs";
import { StackedLayout } from "./StackedLayout";

const meta: Meta<typeof StackedLayout> = {
  component: StackedLayout,
  title: "StackedLayout",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof StackedLayout>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: (
      <div
        style={{
          width: "100%",
          display: "grid",
          placeItems: "center",
          height: "200px",
          backgroundColor: "var(--bw-color-utility-zinc-100)",
        }}
      >
        Main Content
      </div>
    ),
  },
};
