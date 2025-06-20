import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Radio } from "./Radio";
import { RadioGroup, RadioGroupProps } from "./RadioGroup";

it("should have the correct role", () => {
  render(<TestRadioGroup />);

  expect(screen.getByRole("radiogroup")).toBeInTheDocument();
  expect(screen.getAllByRole("radio")).toHaveLength(3);
});

it("should select a radio button when clicked", async () => {
  render(<TestRadioGroup />);

  const radio = screen.getByRole("radio", { name: "Option 1" });

  expect(radio).not.toBeChecked();
  await userEvent.click(radio);
  expect(radio).toBeChecked();
});

it("should not select a radio button if the radio group is disabled", async () => {
  render(<TestRadioGroup isDisabled />);

  const radio = screen.getByRole("radio", { name: "Option 1" });

  await userEvent.click(radio);
  expect(radio).not.toBeChecked();
});

it("should not select a radio button if it is disabled", async () => {
  render(<TestRadioGroup disabledValue="one" />);

  const radio = screen.getByRole("radio", { name: "Option 1" });

  await userEvent.click(radio);
  expect(radio).not.toBeChecked();
});

it("should invoke `onChange` when the value changes", async () => {
  const onChange = jest.fn();
  render(<TestRadioGroup onChange={onChange} />);

  const radio = screen.getByRole("radio", { name: "Option 1" });

  await userEvent.click(radio);
  expect(onChange).toHaveBeenCalledWith("one");
});

it("should have a default selected value when `defaultValue` is passed", () => {
  render(<TestRadioGroup defaultValue="one" />);

  expect(screen.getByRole("radio", { name: "Option 1" })).toBeChecked();
});

it("should be controlled when `value` is passed", async () => {
  const onChange = jest.fn();
  render(<TestRadioGroup value={null} onChange={onChange} />);

  const radio = screen.getByRole("radio", { name: "Option 1" });
  await userEvent.click(radio);

  expect(radio).not.toBeChecked();
  expect(onChange).toHaveBeenCalledWith("one");
});

// https://www.w3.org/WAI/ARIA/apg/patterns/radio/
describe("WAI-ARIA Compliance", () => {
  it("should be associated with a label, description and error message", () => {
    render(
      <TestRadioGroup
        aria-label={undefined}
        label="label"
        description="description"
        isInvalid
        errorMessage="errorMessage"
      />,
    );

    const radioGroup = screen.getByRole("radiogroup");

    expect(radioGroup).toHaveAccessibleName("label");
    expect(radioGroup).toHaveAccessibleDescription(/description/);
    expect(radioGroup).toHaveAccessibleDescription(/errorMessage/);
  });

  it("should be required when `isRequired` is true", () => {
    render(<TestRadioGroup isRequired />);
    expect(screen.getByRole("radiogroup")).toBeRequired();
  });

  it("should keyboard focus on the selected radio button", async () => {
    render(<TestRadioGroup defaultValue="two" />);

    const radio = screen.getByRole("radio", { name: "Option 2" });
    await userEvent.tab();
    expect(radio).toHaveFocus();
  });

  it("should keyboard focus on the first radio button if no radio button is selected", async () => {
    render(<TestRadioGroup />);

    const radio = screen.getByRole("radio", { name: "Option 1" });
    await userEvent.tab();
    expect(radio).toHaveFocus();
  });

  it("should select the focused radio button when the space key is pressed", async () => {
    render(<TestRadioGroup />);

    const radio = screen.getByRole("radio", { name: "Option 1" });
    act(() => {
      radio.focus();
    });

    await userEvent.keyboard(" ");
    expect(radio).toBeChecked();
  });

  it.each([
    {
      name: "user presses the down arrow key",
      focusNext: () => userEvent.keyboard("{arrowdown}"),
    },
    {
      name: "user presses the right arrow key",
      focusNext: () => userEvent.keyboard("{arrowright}"),
    },
  ])(
    "should focus on and select the next radio button when $name",
    async ({ focusNext }) => {
      render(<TestRadioGroup />);

      const radioOne = screen.getByRole("radio", { name: "Option 1" });
      const radioTwo = screen.getByRole("radio", { name: "Option 2" });

      act(() => radioOne.focus());
      await focusNext();
      expect(radioTwo).toHaveFocus();
      expect(radioTwo).toBeChecked();
    },
  );

  it.each([
    {
      name: "user presses the up arrow key",
      focusPrev: () => userEvent.keyboard("{arrowup}"),
    },
    {
      name: "user presses the left arrow key",
      focusPrev: () => userEvent.keyboard("{arrowleft}"),
    },
  ])(
    "should focus on and select the previous radio button when $name",
    async ({ focusPrev }) => {
      render(<TestRadioGroup />);

      const radioOne = screen.getByRole("radio", { name: "Option 1" });
      const radioTwo = screen.getByRole("radio", { name: "Option 2" });

      act(() => radioTwo.focus());
      await focusPrev();
      expect(radioOne).toHaveFocus();
      expect(radioOne).toBeChecked();
    },
  );
});

const TestRadioGroup = (
  props: RadioGroupProps & { disabledValue?: "one" | "two" | "three" },
) => {
  const { disabledValue, ...rest } = props;

  return (
    // React Aria's RadioGroup component requires either the `label` or `aria-label` prop.
    <RadioGroup aria-label="label" {...rest}>
      <Radio value="one" isDisabled={disabledValue === "one"}>
        Option 1
      </Radio>
      <Radio value="two" isDisabled={disabledValue === "two"}>
        Option 2
      </Radio>
      <Radio value="three" isDisabled={disabledValue === "three"}>
        Option 3
      </Radio>
    </RadioGroup>
  );
};
