import { Meta, StoryObj } from "@storybook/react";
import { TooltipTrigger } from "react-aria-components";
import { Button } from "@/components/ui/button";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: "ui/Tooltip",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    return (
      <TooltipTrigger delay={500}>
        <Button>Open tooltip</Button>
        <Tooltip>Tooltip content</Tooltip>
      </TooltipTrigger>
    );
  },
};
