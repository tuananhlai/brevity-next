import { type Meta, type StoryObj } from "@storybook/react-vite";
import { DialogTrigger } from "react-aria-components";
import { Button } from "../button";
import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: "ui/Popover",
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: "1200px", height: "800px" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Popover>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    return (
      <DialogTrigger defaultOpen>
        <Button>Open popover</Button>
        <Popover placement="bottom start">
          <div style={{ padding: 16 }}>
            <p>Popover content</p>
          </div>
        </Popover>
      </DialogTrigger>
    );
  },
};
