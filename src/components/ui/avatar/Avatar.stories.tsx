import { Meta, StoryObj } from "@storybook/react";
import { VisualTestGrid } from "@/styles/storybookTestUtils";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "ui/Avatar",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Avatar>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => <Avatar initials="JD" alt="" size="lg" />,
};

export const VisualTest: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
  render: () => {
    return (
      <VisualTestGrid cellWidth="50px">
        <Avatar initials="JD" alt="" size="sm" />
        <Avatar initials="JD" alt="" size="md" />
        <Avatar initials="JD" alt="" size="lg" />
        <Avatar initials="JD" alt="" color="blue" />
        <Avatar
          initials="JD"
          alt=""
          src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
        />
      </VisualTestGrid>
    );
  },
};
