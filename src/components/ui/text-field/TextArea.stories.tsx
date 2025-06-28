import { Meta, StoryObj } from "@storybook/nextjs";
import { VisualTestGrid } from "@/styles/storybookTestUtils";
import { TextArea, TextAreaProps } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: "ui/TextArea",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TextArea>;

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

const ExampleTextareaField = (props: Partial<TextAreaProps>) => {
  return <TextArea aria-label="Label" {...props} />;
};
