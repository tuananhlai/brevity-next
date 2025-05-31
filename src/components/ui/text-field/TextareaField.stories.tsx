import { Meta, StoryObj } from "@storybook/react";
import { VisualTestGrid } from "@/styles/storybookTestUtils";
import { TextareaField, TextareaFieldProps } from "./TextareaField";

const meta: Meta<typeof TextareaField> = {
  component: TextareaField,
  title: "ui/TextareaField",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TextareaField>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Tell me about yourself",
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
        <ExampleTextareaField />
        <ExampleTextareaField placeholder={samplePlaceholder} />
        <ExampleTextareaField defaultValue={sampleValue} />
        <ExampleTextareaField label={sampleLabel} />
        <ExampleTextareaField
          label={sampleLabel}
          description={sampleDescription}
          defaultValue={sampleValue}
        />
        <ExampleTextareaField
          label={sampleLabel}
          description={sampleDescription}
          defaultValue={sampleValue}
          isDisabled
        />
        <ExampleTextareaField placeholder={samplePlaceholder} isDisabled />
        <ExampleTextareaField
          label={sampleLabel}
          isInvalid
          defaultValue={sampleValue}
          errorMessage={sampleErrorMessage}
        />
        <ExampleTextareaField label={sampleLabel} isRequired />
        <ExampleTextareaField resizable rows={5} />
      </VisualTestGrid>
    );
  },
};

const ExampleTextareaField = (props: Partial<TextareaFieldProps>) => {
  return <TextareaField aria-label="Label" {...props} />;
};
