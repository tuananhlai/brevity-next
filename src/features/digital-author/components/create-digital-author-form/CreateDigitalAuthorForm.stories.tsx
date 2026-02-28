import { type Meta, type StoryObj } from "@storybook/react-vite";
import { useId } from "react";
import { Button } from "@/components/ui/button";
import {
  CreateDigitalAuthorForm,
  type CreateDigitalAuthorFormValues,
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
      <div style={{ width: "400px" }}>
        <CreateDigitalAuthorForm id={formID} onSubmit={onSubmit} />
        <Button style={{ marginTop: "24px" }} form={formID} type="submit">
          Submit
        </Button>
      </div>
    );
  },
};

export const VisualTest: Story = {
  parameters: {
    layout: "centered",
    chromatic: {
      disableSnapshot: false,
    },
  },
  render: () => {
    return (
      <div style={{ width: "400px" }}>
        <CreateDigitalAuthorForm onSubmit={() => {}} />
      </div>
    );
  },
};
