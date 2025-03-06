import { Meta, StoryObj } from "@storybook/react";

import { VisualTestGrid } from "@/styles/storybookTestUtils";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    // Add arguments.
    children: "Button",
    variant: "primary",
  },
};

export const VisualTest: Story = {
  render: () => {
    const sampleChildren = "Button";

    return (
      <VisualTestGrid cellWidth="100px">
        <Button>{sampleChildren}</Button>
        <Button variant="secondary">{sampleChildren}</Button>
        <Button variant="tertiary">{sampleChildren}</Button>
        <Button variant="destructive">{sampleChildren}</Button>
        <Button isDisabled>{sampleChildren}</Button>
        <Button variant="secondary" isDisabled>
          {sampleChildren}
        </Button>
        <Button variant="tertiary" isDisabled>
          {sampleChildren}
        </Button>
        <Button variant="destructive" isDisabled>
          {sampleChildren}
        </Button>
      </VisualTestGrid>
    );
  },
};
