import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormProvider, useForm } from "react-hook-form";
import { FormSlider } from "@/components/rhf/FormSlider";
import { FormTextField } from "@/components/rhf/FormTextField";
import { FormTextArea } from "@/components/rhf/FormTextarea";

it("should accept default value", () => {
  render(
    <TestForm
      defaultValues={{
        testTextField: "test",
        testSlider: 10,
        testTextArea: "test text area",
      }}
    />,
  );

  expect(getTextField()).toHaveValue("test");
  expect(getSlider()).toHaveValue("10");
  expect(getTextArea()).toHaveValue("test text area");
});

it("should call onSubmit when form is submitted", async () => {
  const formValues: TestFormValues = {
    testTextField: "test",
    testSlider: 10,
    testTextArea: "test text area",
  };
  const onSubmit = jest.fn();
  render(<TestForm defaultValues={formValues} onSubmit={onSubmit} />);

  await submitForm();

  expect(onSubmit.mock.calls[0][0]).toEqual(formValues);
});

it("should update field value", async () => {
  const onSubmit = jest.fn();
  render(
    <TestForm
      defaultValues={{
        testTextField: "test",
        testSlider: 10,
        testTextArea: "test text area",
      }}
      onSubmit={onSubmit}
    />,
  );

  await userEvent.type(getTextField(), "test2");
  fireEvent.change(getSlider(), { target: { value: 20 } });
  await userEvent.type(getTextArea(), "test2");

  await submitForm();

  expect(onSubmit.mock.calls[0][0]).toEqual({
    testTextField: "testtest2",
    testSlider: 20,
    testTextArea: "test text areatest2",
  });
});

interface TestFormValues {
  testTextField: string;
  testSlider: number;
  testTextArea: string;
}

interface TestFormProps {
  defaultValues: TestFormValues;
  onSubmit?: (data: TestFormValues) => void;
}

const submitForm = () =>
  userEvent.click(screen.getByRole("button", { name: "Submit" }));

const getTextArea = () =>
  screen.getByRole("textbox", { name: "Test Text Area" });
const getTextField = () =>
  screen.getByRole("textbox", { name: "Test Text Field" });
const getSlider = () => screen.getByRole("slider", { name: "Test Slider" });

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

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
