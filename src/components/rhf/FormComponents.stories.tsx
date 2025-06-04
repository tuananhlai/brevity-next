import { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { FormSlider } from "@/components/rhf/FormSlider";
import { FormTextArea } from "@/components/rhf/FormTextArea";
import { FormTextField } from "@/components/rhf/FormTextField";
import { Button } from "@/components/ui/button";

const meta: Meta = {
  title: "RHF",
};

export default meta;

export const Default: StoryObj = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    const methods = useForm<ExampleFormValues>({
      defaultValues: {
        name: "John Doe",
        age: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    });

    const onSubmit = (data: ExampleFormValues) => {
      alert(JSON.stringify(data, null, 2));
    };

    return (
      <FormProvider {...methods}>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <FormTextField name="name" label="Name" />
          <FormSlider name="age" label="Age" />
          <FormTextArea name="description" label="Description" />

          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    );
  },
};

interface ExampleFormValues {
  name: string;
  age: number;
  description: string;
}
