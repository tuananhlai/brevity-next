import { FormProvider, useForm } from "react-hook-form";
import { expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { FormSelect } from "@/components/rhf/FormSelect";
import { FormSlider } from "@/components/rhf/FormSlider";
import { FormTextArea } from "@/components/rhf/FormTextArea";
import { FormTextField } from "@/components/rhf/FormTextField";
import { SelectItem } from "@/components/ui/select";

it("should accept default value", async () => {
  const screen = await render(
    <TestForm
      defaultValues={{
        testTextField: "test",
        testSlider: 10,
        testTextArea: "test text area",
        testSelect: "1",
      }}
    />,
  );

  expect(getTextField(screen)).toHaveValue("test");
  expect(getSlider(screen)).toHaveValue("10");
  expect(getTextArea(screen)).toHaveValue("test text area");
});

it("should call onSubmit when form is submitted", async () => {
  const formValues: TestFormValues = {
    testTextField: "test",
    testSlider: 10,
    testTextArea: "test text area",
    testSelect: "1",
  };
  const onSubmit = vi.fn();
  const screen = await render(
    <TestForm defaultValues={formValues} onSubmit={onSubmit} />,
  );

  await submitForm(screen);

  expect(onSubmit.mock.calls[0][0]).toEqual(formValues);
});

it("should update field value", async () => {
  const onSubmit = vi.fn();
  const screen = await render(
    <TestForm
      defaultValues={{
        testTextField: "test",
        testSlider: 10,
        testTextArea: "test text area",
        testSelect: "1",
      }}
      onSubmit={onSubmit}
    />,
  );

  await userEvent.type(getTextField(screen), "test2");

  const slider = getSlider(screen);
  (slider.element() as HTMLInputElement).value = "20";
  slider.element().dispatchEvent(new Event("change", { bubbles: true }));

  await userEvent.type(getTextArea(screen), "test2");

  await submitForm(screen);

  expect(onSubmit.mock.calls[0][0]).toEqual({
    testTextField: "testtest2",
    testSlider: 20,
    testTextArea: "test text areatest2",
    testSelect: "1",
  });
});

interface TestFormValues {
  testTextField: string;
  testSlider: number;
  testTextArea: string;
  testSelect: null | "1" | "2" | "3";
}

interface TestFormProps {
  defaultValues: TestFormValues;
  onSubmit?: (data: TestFormValues) => void;
}

const submitForm = (screen: Awaited<ReturnType<typeof render>>) =>
  userEvent.click(screen.getByRole("button", { name: "Submit" }));

const getTextArea = (screen: Awaited<ReturnType<typeof render>>) =>
  screen.getByRole("textbox", { name: "Test Text Area" });
const getTextField = (screen: Awaited<ReturnType<typeof render>>) =>
  screen.getByRole("textbox", { name: "Test Text Field" });
const getSlider = (screen: Awaited<ReturnType<typeof render>>) =>
  screen.getByRole("slider", { name: "Test Slider" });

const TestForm: React.FC<TestFormProps> = (props) => {
  const { defaultValues, onSubmit = () => {} } = props;

  const methods = useForm<TestFormValues>({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormTextField name="testTextField" label="Test Text Field" />
        <FormSlider name="testSlider" label="Test Slider" />
        <FormTextArea name="testTextArea" label="Test Text Area" />
        <FormSelect name="testSelect" label="Test Select">
          <SelectItem id="1">Option One</SelectItem>
          <SelectItem id="2">Option Two</SelectItem>
          <SelectItem id="3">Option Three</SelectItem>
        </FormSelect>

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
