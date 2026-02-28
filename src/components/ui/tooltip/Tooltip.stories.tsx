import { type Meta, type StoryObj } from "@storybook/react-vite";
import { TooltipTrigger } from "react-aria-components";
import { LuPencil } from "react-icons/lu";
import { Button } from "@/components/ui/button";
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
