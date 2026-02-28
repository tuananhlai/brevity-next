import { type Meta, type StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { LuLogIn, LuPlus } from "react-icons/lu";
import { IconButton } from "@/components/ui/button";
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

export const IconOnly: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    return (
      <IconButton aria-label="Add">
        <LuPlus />
      </IconButton>
    );
  },
};

export const Pending: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    const [isPending, setIsPending] = useState(false);

    const onPress = () => {
      setIsPending(true);
      setTimeout(() => {
        setIsPending(false);
        alert("Loading finished.");
      }, 1000);
    };

    return (
      <Button isPending={isPending} onPress={onPress}>
        Button
      </Button>
    );
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
          <Button isPending>{sampleChildren}</Button>
          <Button variant="secondary" isPending>
            {sampleChildren}
          </Button>
          <Button variant="tertiary" isPending>
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
          <Button color="error" isPending>
            {sampleChildren}
          </Button>
          <Button variant="secondary" color="error" isPending>
            {sampleChildren}
          </Button>
          <Button variant="tertiary" color="error" isPending>
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

        <VisualTestGrid style={{ marginTop: "40px" }} cellWidth="120px">
          <IconButton aria-label="Add">
            <LuPlus />
          </IconButton>
          <IconButton variant="secondary" aria-label="Add">
            <LuPlus />
          </IconButton>
          <IconButton variant="tertiary" aria-label="Add">
            <LuPlus />
          </IconButton>
          <IconButton isDisabled aria-label="Add">
            <LuPlus />
          </IconButton>
          <IconButton variant="secondary" isDisabled aria-label="Add">
            <LuPlus />
          </IconButton>
          <IconButton variant="tertiary" isDisabled aria-label="Add">
            <LuPlus />
          </IconButton>
          <IconButton isPending aria-label="Add">
            <LuPlus />
          </IconButton>
          <IconButton variant="secondary" isPending aria-label="Add">
            <LuPlus />
          </IconButton>
          <IconButton variant="tertiary" isPending aria-label="Add">
            <LuPlus />
          </IconButton>
        </VisualTestGrid>

        <VisualTestGrid style={{ marginTop: "40px" }} cellWidth="120px">
          <IconButton color="error" aria-label="Add">
            <LuPlus />
          </IconButton>
          <IconButton variant="secondary" color="error" aria-label="Add">
            <LuPlus />
          </IconButton>
          <IconButton variant="tertiary" color="error" aria-label="Add">
            <LuPlus />
          </IconButton>
          <IconButton color="error" isDisabled aria-label="Add">
            <LuPlus />
          </IconButton>
          <IconButton
            variant="secondary"
            color="error"
            isDisabled
            aria-label="Add"
          >
            <LuPlus />
          </IconButton>
          <IconButton
            variant="tertiary"
            color="error"
            isDisabled
            aria-label="Add"
          >
            <LuPlus />
          </IconButton>
          <IconButton color="error" isPending aria-label="Add">
            <LuPlus />
          </IconButton>
          <IconButton
            variant="secondary"
            color="error"
            isPending
            aria-label="Add"
          >
            <LuPlus />
          </IconButton>
          <IconButton
            variant="tertiary"
            color="error"
            isPending
            aria-label="Add"
          >
            <LuPlus />
          </IconButton>
        </VisualTestGrid>
      </>
    );
  },
};
