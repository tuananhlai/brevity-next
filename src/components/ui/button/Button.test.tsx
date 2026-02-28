import { describe, expect, it, vi } from "vitest";
import { type Locator, userEvent } from "vitest/browser";
import { renderWithProviders } from "@/utils/testutils";
import { Button, type ButtonProps } from "./Button";

it("is disabled once `isDisabled` is true", async () => {
  const screen = await renderWithProviders(<ExampleButton isDisabled />);

  expect(screen.getByRole("button")).toBeDisabled();
});

it("calls 'onFocus' and 'onFocusChange' when focused", async () => {
  const onFocusChange = vi.fn();
  const onFocus = vi.fn();
  const screen = await renderWithProviders(
    <ExampleButton onFocusChange={onFocusChange} onFocus={onFocus} />,
  );

  const btn = screen.getByRole("button");
  btn.element().focus();

  expect(onFocus).toHaveBeenCalled();
  expect(onFocusChange).toHaveBeenCalledWith(true);
});

it("calls 'onPress' when the button is pressed", async () => {
  const onPress = vi.fn();
  const screen = await renderWithProviders(<ExampleButton onPress={onPress} />);
  const btn = screen.getByRole("button");

  await userEvent.click(btn);

  expect(onPress).toHaveBeenCalledTimes(1);
});

/** @see https://www.w3.org/WAI/ARIA/apg/patterns/button/ */
describe("WAI-ARIA Compliance", () => {
  it("has correct accessibility role", async () => {
    const screen = await renderWithProviders(<ExampleButton />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it.each([
    {
      keyName: "Enter",
      press: async (target: Locator) => {
        target.element().focus();
        await userEvent.keyboard("{enter}");
      },
    },
    {
      keyName: "Space",
      press: async (target: Locator) => {
        target.element().focus();
        await userEvent.keyboard(" ");
      },
    },
  ])("should be triggered by $keyName key", async ({ press }) => {
    const onPress = vi.fn();
    const screen = await renderWithProviders(
      <ExampleButton onPress={onPress} />,
    );
    const button = screen.getByRole("button");

    await press(button);

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});

it("should have aria-disabled set to true when `isPending` is true", async () => {
  const screen = await renderWithProviders(<ExampleButton isPending />);

  expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true");
});

const ExampleButton = (props: Partial<ButtonProps>) => {
  return <Button {...props}>example</Button>;
};
