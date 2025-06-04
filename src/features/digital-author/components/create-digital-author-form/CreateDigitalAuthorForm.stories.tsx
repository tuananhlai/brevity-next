import { Meta, StoryObj } from "@storybook/react";
import { useId } from "react";
import { Button } from "@/components/ui/button";
import {
  CreateDigitalAuthorForm,
  CreateDigitalAuthorFormValues,
} from "./CreateDigitalAuthorForm";

const meta: Meta<typeof CreateDigitalAuthorForm> = {
  component: CreateDigitalAuthorForm,
  title: "features/digital-author/CreateDigitalAuthorForm",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof CreateDigitalAuthorForm>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    const onSubmit = (values: CreateDigitalAuthorFormValues) => {
      alert(JSON.stringify(values, null, 2));
    };
    const formID = useId();

    return (
      <>
        <CreateDigitalAuthorForm id={formID} onSubmit={onSubmit} />
        <Button form={formID} type="submit">
          Submit
        </Button>
      </>
    );
  },
};
