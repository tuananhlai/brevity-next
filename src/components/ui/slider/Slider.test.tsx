import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { type Locator, userEvent } from "vitest/browser";
import { Slider } from "./Slider";

it("should have correct aria role", async () => {
  const screen = await render(
    <Slider minValue={0} maxValue={100} label="Test Slider" />,
  );
  expect(screen.getByRole("slider")).toBeInTheDocument();
});

it("should be labelled correctly", async () => {
  const screen = await render(
    <Slider minValue={0} maxValue={100} label="Test Slider" />,
  );
  expect(screen.getByRole("slider")).toHaveAccessibleName("Test Slider");
});

it("should update value when the user interacts with the slider", async () => {
  const screen = await render(
    <Slider minValue={0} maxValue={100} label="Test Slider" />,
  );
  const slider = screen.getByRole("slider");
  await userEvent.fill(slider, "50");
  expect(slider).toHaveValue("50");
});

// https://www.w3.org/WAI/ARIA/apg/patterns/slider/
describe("WAI-ARIA compliance", () => {
  it.each([
    {
      name: "user presses the left arrow key",
      decrease: async (locator: Locator) => {
        locator.element().focus();
        await userEvent.keyboard("{ArrowLeft}");
      },
    },
    {
      name: "user presses the down arrow key",
      decrease: async (locator: Locator) => {
        locator.element().focus();
        await userEvent.keyboard("{ArrowDown}");
      },
    },
  ])("should decrease the value when $name", async ({ decrease }) => {
    const screen = await render(
      <Slider
        minValue={0}
        defaultValue={50}
        maxValue={100}
        label="Test Slider"
      />,
    );

    const slider = screen.getByRole("slider");
    await decrease(slider);
    expect(slider).toHaveValue("49");
  });

  it.each([
    {
      name: "user presses the right arrow key",
      increase: async (locator: Locator) => {
        locator.element().focus();
        await userEvent.keyboard("{ArrowRight}");
      },
    },
    {
      name: "user presses the up arrow key",
      increase: async (locator: Locator) => {
        locator.element().focus();
        await userEvent.keyboard("{ArrowUp}");
      },
    },
  ])("should increase the value when $name", async ({ increase }) => {
    const screen = await render(
      <Slider
        minValue={0}
        defaultValue={50}
        maxValue={100}
        label="Test Slider"
      />,
    );

    const slider = screen.getByRole("slider");
    await increase(slider);
    expect(slider).toHaveValue("51");
  });

  it("should set value to minValue when the user presses the home key", async () => {
    const screen = await render(
      <Slider
        minValue={0}
        defaultValue={50}
        maxValue={100}
        label="Test Slider"
      />,
    );
    const slider = screen.getByRole("slider");
    slider.element().focus();
    await userEvent.keyboard("{Home}");
    expect(slider).toHaveValue("0");
  });

  it("should set value to maxValue when the user presses the end key", async () => {
    const screen = await render(
      <Slider
        minValue={0}
        defaultValue={50}
        maxValue={100}
        label="Test Slider"
      />,
    );
    const slider = screen.getByRole("slider");
    slider.element().focus();
    await userEvent.keyboard("{End}");
    expect(slider).toHaveValue("100");
  });

  it("should have the correct aria attributes", async () => {
    const screen = await render(
      <Slider
        minValue={0}
        defaultValue={50}
        maxValue={100}
        label="Test Slider"
      />,
    );
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("aria-orientation", "horizontal");

    // TODO: is aria-valuemin,aria-valuemax and aria-valuenow necessary? As the input range element
    // already has `min`, `max` and `value` attributes.
  });
});
