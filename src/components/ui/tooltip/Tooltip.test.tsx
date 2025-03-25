import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import { Button, TooltipTrigger } from "react-aria-components";
import { LuPencil } from "react-icons/lu";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  const getUser = () => userEvent.setup({ delay: null });
  let user: UserEvent;

  beforeEach(() => {
    user = getUser();
  });

  it("should display tooltip when trigger is focused", () => {
    render(
      <TooltipTrigger>
        <Button>
          <LuPencil />
        </Button>
        <Tooltip>Tooltip content</Tooltip>
      </TooltipTrigger>,
    );

    const button = screen.getByRole("button");
    act(() => {
      button.focus();
    });

    expect(button).toHaveAccessibleDescription("Tooltip content");
    expect(
      screen.getByRole("tooltip", { name: "Tooltip content" }),
    ).toBeInTheDocument();
  });

  it("should display tooltip when trigger is hovered", async () => {
    render(
      <TooltipTrigger delay={0}>
        <Button>
          <LuPencil />
        </Button>
        <Tooltip>Tooltip content</Tooltip>
      </TooltipTrigger>,
    );

    const button = screen.getByRole("button");

    await hover(user, button);

    expect(button).toHaveAccessibleDescription("Tooltip content");
    expect(
      screen.getByRole("tooltip", { name: "Tooltip content" }),
    ).toBeInTheDocument();
  });
});

/**
 * A helper function to hover over an element specifically to display
 * RAC Tooltip.
 *
 * @see https://github.com/adobe/react-spectrum/blob/4b2c6e76fa97d2e00a478a152972837c1cb76938/packages/react-aria-components/test/Tooltip.test.js#L48
 */
const hover = async (user: UserEvent, element: HTMLElement) => {
  fireEvent.mouseMove(document.body);
  await user.hover(element);
};
