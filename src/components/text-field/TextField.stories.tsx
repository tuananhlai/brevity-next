import { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: "TextField",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TextField>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Enter your social security number",
    description: "Trust me, bro.",
  },
};

export const VisualTest: Story = {
  render: () => {
    const sampleLabel = "Label";
    const sampleDescription = "Description";
    const samplePlaceholder = "Placeholder";
    const sampleValue = "Value";
    const sampleErrorMessage = "Error message";

    return (
      <div
        css={{
          display: "flex",
          gap: "32px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <TextField />
        <TextField placeholder={samplePlaceholder} />
        <TextField defaultValue={sampleValue} />
        <TextField label={sampleLabel} />
        <TextField
          label={sampleLabel}
          description={sampleDescription}
          defaultValue={sampleValue}
        />
        <TextField
          label={sampleLabel}
          description={sampleDescription}
          defaultValue={sampleValue}
          isDisabled
        />
        <TextField placeholder={samplePlaceholder} isDisabled />
        <TextField
          label={sampleLabel}
          isInvalid
          defaultValue={sampleValue}
          errorMessage={sampleErrorMessage}
        />
        <TextField label={sampleLabel} isRequired />
      </div>
    );
  },
};
