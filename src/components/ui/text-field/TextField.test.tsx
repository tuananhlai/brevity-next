import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextField, TextFieldProps } from "./TextField";

describe("TextField", () => {
  it("should have the correct role", () => {
    renderTextField();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should be associated with a label", () => {
    render(<TextField label="Label" />);
    expect(screen.getByLabelText(/label/i)).toBeInTheDocument();
  });

  it("should be described by a description when `description` prop is provided", () => {
    renderTextField({ description: "Description" });
    expect(screen.getByRole("textbox")).toHaveAccessibleDescription(
      "Description",
    );
  });

  it("should be described by an error message when `isInvalid` and `errorMessage` props are provided", () => {
    renderTextField({ isInvalid: true, errorMessage: "Error" });
    expect(screen.getByRole("textbox")).toHaveAccessibleDescription("Error");
  });

  it("should be required when `isRequired` prop is provided", () => {
    renderTextField({ isRequired: true });
    expect(screen.getByRole("textbox")).toBeRequired();
  });

  it("should invoke `onChange` prop when the value changes", async () => {
    const onChange = jest.fn();
    renderTextField({ onChange });

    await userEvent.type(screen.getByRole("textbox"), "test");

    expect(onChange).toHaveBeenCalledWith("test");
  });
});

const renderTextField = (props?: TextFieldProps) => {
  return render(<TextField aria-label="label" {...props} />);
};
