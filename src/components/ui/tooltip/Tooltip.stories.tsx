import { Meta, StoryObj } from "@storybook/nextjs";
import { Button, TooltipTrigger } from "react-aria-components";
import { LuPencil } from "react-icons/lu";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: "ui/Tooltip",
  argTypes: {},
  decorators: [
    (story) => (
      <div
        style={{
          width: "200px",
          height: "200px",
          display: "grid",
          placeContent: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
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
      <TooltipTrigger defaultOpen delay={500}>
        <Button>
          <LuPencil />
        </Button>
        <Tooltip>Tooltip content</Tooltip>
      </TooltipTrigger>
    );
  },
};
