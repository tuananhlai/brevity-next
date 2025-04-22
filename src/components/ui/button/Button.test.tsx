import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import { Button, ButtonProps } from "./Button";

it("is disabled once `isDisabled` is true", () => {
  render(<ExampleButton isDisabled />);

  expect(screen.getByRole("button")).toBeDisabled();
});

it("calls 'onFocus' and 'onFocusChange' when focused", () => {
  const onFocusChange = jest.fn();
  const onFocus = jest.fn();
  render(<ExampleButton onFocusChange={onFocusChange} onFocus={onFocus} />);

  const btn = screen.getByRole("button");
  act(() => btn.focus());

  expect(onFocus).toHaveBeenCalled();
  expect(onFocusChange).toHaveBeenCalledWith(true);
});

it("calls 'onPress' when the button is pressed", async () => {
  const onPress = jest.fn();
  render(<ExampleButton onPress={onPress} />);
  const btn = screen.getByRole("button");

  await userEvent.click(btn);

  expect(onPress).toHaveBeenCalledTimes(1);
});

describe("WAI-ARIA Compliance", () => {
  it("has correct accessibility role", () => {
    render(<ExampleButton />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it.each([
    {
      keyName: "Enter",
      press: async (target: HTMLElement) => {
        act(() => target.focus());
        await userEvent.keyboard("{enter}");
      },
    },
    {
      keyName: "Space",
      press: async (target: HTMLElement) => {
        act(() => target.focus());
        await userEvent.keyboard(" ");
      },
    },
  ])("should be triggered by $keyName key", async ({ press }) => {
    const onPress = jest.fn();
    render(<ExampleButton onPress={onPress} />);
    const button = screen.getByRole("button");

    await press(button);

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});

const ExampleButton = (props: Partial<ButtonProps>) => {
  return <Button {...props}>example</Button>;
};
