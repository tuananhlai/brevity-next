import { Meta, StoryObj } from "@storybook/react";
import { VisualTestGrid } from "@/styles/storybookTestUtils";
import { TextField, TextFieldProps } from "./TextField";

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: "ui/TextField",
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
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
  render: () => {
    const sampleLabel = "Label";
    const sampleDescription = "Description";
    const samplePlaceholder = "Placeholder";
    const sampleValue = "Value";
    const sampleErrorMessage = "Error message";

    return (
      <VisualTestGrid>
        <ExampleTextField />
        <ExampleTextField placeholder={samplePlaceholder} />
        <ExampleTextField defaultValue={sampleValue} />
        <ExampleTextField label={sampleLabel} />
        <ExampleTextField
          label={sampleLabel}
          description={sampleDescription}
          defaultValue={sampleValue}
        />
        <ExampleTextField
          label={sampleLabel}
          description={sampleDescription}
          defaultValue={sampleValue}
          isDisabled
        />
        <ExampleTextField placeholder={samplePlaceholder} isDisabled />
        <ExampleTextField
          label={sampleLabel}
          isInvalid
          defaultValue={sampleValue}
          errorMessage={sampleErrorMessage}
        />
        <ExampleTextField label={sampleLabel} isRequired />
      </VisualTestGrid>
    );
  },
};

const ExampleTextField = (props: Partial<TextFieldProps>) => {
  return <TextField aria-label="Label" {...props} />;
};
