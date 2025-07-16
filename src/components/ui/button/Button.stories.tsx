import { Meta, StoryObj } from "@storybook/nextjs";
import { LuLogIn, LuPlus } from "react-icons/lu";
import { VisualTestGrid } from "@/styles/storybookTestUtils";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "ui/Button",
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
    onPress: () => {
      console.log("Button pressed");
    },
  },
};

export const VisualTest: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
  render: () => {
    const sampleChildren = "Button";

    return (
      <>
        <VisualTestGrid cellWidth="120px">
          <Button>{sampleChildren}</Button>
          <Button variant="secondary">{sampleChildren}</Button>
          <Button variant="tertiary">{sampleChildren}</Button>
          <Button isDisabled>{sampleChildren}</Button>
          <Button variant="secondary" isDisabled>
            {sampleChildren}
          </Button>
          <Button variant="tertiary" isDisabled>
            {sampleChildren}
          </Button>
          <Button prefixIcon={<LuPlus />} suffixIcon={<LuLogIn />}>
            {sampleChildren}
          </Button>
          <Button
            variant="secondary"
            prefixIcon={<LuPlus />}
            suffixIcon={<LuLogIn />}
          >
            {sampleChildren}
          </Button>
          <Button
            variant="tertiary"
            prefixIcon={<LuPlus />}
            suffixIcon={<LuLogIn />}
          >
            {sampleChildren}
          </Button>
          <Button isDisabled prefixIcon={<LuPlus />} suffixIcon={<LuLogIn />}>
            {sampleChildren}
          </Button>
          <Button
            variant="secondary"
            isDisabled
            prefixIcon={<LuPlus />}
            suffixIcon={<LuLogIn />}
          >
            {sampleChildren}
          </Button>
          <Button
            variant="tertiary"
            isDisabled
            prefixIcon={<LuPlus />}
            suffixIcon={<LuLogIn />}
          >
            {sampleChildren}
          </Button>
        </VisualTestGrid>

        <VisualTestGrid style={{ marginTop: "40px" }} cellWidth="120px">
          <Button color="error">{sampleChildren}</Button>
          <Button variant="secondary" color="error">
            {sampleChildren}
          </Button>
          <Button variant="tertiary" color="error">
            {sampleChildren}
          </Button>
          <Button color="error" isDisabled>
            {sampleChildren}
          </Button>
          <Button variant="secondary" color="error" isDisabled>
            {sampleChildren}
          </Button>
          <Button variant="tertiary" color="error" isDisabled>
            {sampleChildren}
          </Button>
          <Button
            color="error"
            prefixIcon={<LuPlus />}
            suffixIcon={<LuLogIn />}
          >
            {sampleChildren}
          </Button>
          <Button
            variant="secondary"
            color="error"
            prefixIcon={<LuPlus />}
            suffixIcon={<LuLogIn />}
          >
            {sampleChildren}
          </Button>
          <Button
            variant="tertiary"
            color="error"
            prefixIcon={<LuPlus />}
            suffixIcon={<LuLogIn />}
          >
            {sampleChildren}
          </Button>
          <Button
            color="error"
            isDisabled
            prefixIcon={<LuPlus />}
            suffixIcon={<LuLogIn />}
          >
            {sampleChildren}
          </Button>
          <Button
            variant="secondary"
            color="error"
            isDisabled
            prefixIcon={<LuPlus />}
            suffixIcon={<LuLogIn />}
          >
            {sampleChildren}
          </Button>
          <Button
            variant="tertiary"
            color="error"
            isDisabled
            prefixIcon={<LuPlus />}
            suffixIcon={<LuLogIn />}
          >
            {sampleChildren}
          </Button>
        </VisualTestGrid>
      </>
    );
  },
};
