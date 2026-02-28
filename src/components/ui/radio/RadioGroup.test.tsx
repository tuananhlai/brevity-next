import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { select } from "@/utils/testutils";
import { Radio } from "./Radio";
import { RadioGroup, type RadioGroupProps } from "./RadioGroup";

it("should have the correct role", async () => {
  const screen = await render(<TestRadioGroup />);
  expect(screen.getByRole("radiogroup")).toBeInTheDocument();
  expect(screen.getByRole("radio")).toHaveLength(3);
});

it("should select a radio button when clicked", async () => {
  const screen = await render(<TestRadioGroup />);
  const radio = screen.getByRole("radio", { name: "Option 1" });

  expect(radio).not.toBeChecked();
  await select(radio);
  expect(radio).toBeChecked();
});

it("should not select a radio button if the radio group is disabled", async () => {
  const screen = await render(<TestRadioGroup isDisabled />);
  const radio = screen.getByRole("radio", { name: "Option 1" });

  expect(radio).toBeDisabled();
});

it("should not select a radio button if it is disabled", async () => {
  const screen = await render(<TestRadioGroup disabledValue="one" />);
  const radio = screen.getByRole("radio", { name: "Option 1" });

  expect(radio).toBeDisabled();
});

it("should invoke `onChange` when the value changes", async () => {
  const onChange = vi.fn();
  const screen = await render(<TestRadioGroup onChange={onChange} />);
  const radio = screen.getByRole("radio", { name: "Option 1" });

  await select(radio);
  expect(onChange).toHaveBeenCalledWith("one");
});

it("should have a default selected value when `defaultValue` is passed", async () => {
  const screen = await render(<TestRadioGroup defaultValue="one" />);
  expect(screen.getByRole("radio", { name: "Option 1" })).toBeChecked();
});

it("should be controlled when `value` is passed", async () => {
  const onChange = vi.fn();
  const screen = await render(
    <TestRadioGroup value={null} onChange={onChange} />,
  );
  const radio = screen.getByRole("radio", { name: "Option 1" });

  await select(radio);

  expect(radio).not.toBeChecked();
  expect(onChange).toHaveBeenCalledWith("one");
});

// https://www.w3.org/WAI/ARIA/apg/patterns/radio/
describe("WAI-ARIA Compliance", () => {
  it("should be associated with a label, description and error message", async () => {
    const screen = await render(
      <TestRadioGroup
        aria-label={undefined}
        label="label"
        description="description"
        isInvalid
        errorMessage="errorMessage"
      />,
    );

    const radioGroup = screen.getByRole("radiogroup");
    expect(radioGroup).toHaveAccessibleName(/label/i);
    expect(radioGroup).toHaveAccessibleDescription(/description/i);
  });

  it("should be required when `isRequired` is true", async () => {
    const screen = await render(<TestRadioGroup isRequired />);
    expect(screen.getByRole("radiogroup")).toHaveAttribute(
      "aria-required",
      "true",
    );
  });

  it("should keyboard focus on the selected radio button", async () => {
    const screen = await render(<TestRadioGroup defaultValue="two" />);
    const radio = screen.getByRole("radio", { name: "Option 2" });
    await userEvent.keyboard("{tab}");
    expect(document.activeElement).toBe(radio.element());
  });

  it("should keyboard focus on the first radio button if no radio button is selected", async () => {
    const screen = await render(<TestRadioGroup />);
    const radio = screen.getByRole("radio", { name: "Option 1" });
    await userEvent.keyboard("{tab}");
    expect(document.activeElement).toBe(radio.element());
  });

  it("should select the focused radio button when the space key is pressed", async () => {
    const screen = await render(<TestRadioGroup />);
    const radio = screen.getByRole("radio", { name: "Option 1" });
    radio.element().focus();

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
      const screen = await render(<TestRadioGroup />);
      const radioOne = screen.getByRole("radio", { name: "Option 1" });
      const radioTwo = screen.getByRole("radio", { name: "Option 2" });

      radioOne.element().focus();
      await focusNext();
      expect(document.activeElement).toBe(radioTwo.element());
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
      const screen = await render(<TestRadioGroup />);
      const radioOne = screen.getByRole("radio", { name: "Option 1" });
      const radioTwo = screen.getByRole("radio", { name: "Option 2" });

      radioTwo.element().focus();
      await focusPrev();
      expect(document.activeElement).toBe(radioOne.element());
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
