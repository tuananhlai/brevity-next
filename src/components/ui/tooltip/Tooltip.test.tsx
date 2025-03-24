import { act, render, screen } from "@testing-library/react";
import { Button, TooltipTrigger } from "react-aria-components";
import { LuPencil } from "react-icons/lu";
import { Tooltip } from "./Tooltip";

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
  expect(screen.getByText("Tooltip content")).toBeInTheDocument();
});
