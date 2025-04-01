import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox, CheckboxProps } from "@/components/ui/checkbox/Checkbox";

describe("Checkbox", () => {
  it("should have the correct role", () => {
    render(<ExampleCheckbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("should be controlled when `isSelected` prop is provided", async () => {
    const handleChange = jest.fn();
    render(<ExampleCheckbox isSelected={false} onChange={handleChange} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("should be uncontrolled when `isSelected` prop is not provided", async () => {
    const handleChange = jest.fn();
    render(<ExampleCheckbox onChange={handleChange} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("should be indeterminate when `isIndeterminate` prop is true", () => {
    render(<ExampleCheckbox isIndeterminate />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBePartiallyChecked();
  });

  it("should invoke focus events", async () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    const handleFocusChange = jest.fn();
    render(
      <ExampleCheckbox
        onFocus={handleFocus}
        onFocusChange={handleFocusChange}
        onBlur={handleBlur}
      />,
    );
    const checkbox = screen.getByRole("checkbox");

    // Clicking on the checkbox to trigger focus event.
    await userEvent.click(checkbox);

    expect(handleFocus).toHaveBeenCalled();
    expect(handleFocusChange).toHaveBeenCalledWith(true);

    // Clicking on the document body to trigger blur event.
    await userEvent.click(document.body);

    expect(handleBlur).toHaveBeenCalled();
    expect(handleFocusChange).toHaveBeenCalledWith(false);
  });
});

const ExampleCheckbox = (props: CheckboxProps) => {
  const { children = "example", ...rest } = props;
  return <Checkbox {...rest}>{children}</Checkbox>;
};
