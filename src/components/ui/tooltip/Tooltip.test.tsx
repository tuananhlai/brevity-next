import { TooltipTrigger } from "react-aria-components";
import { LuPencil } from "react-icons/lu";
import { expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { Button } from "@/components/ui/button";
import { Tooltip } from "./Tooltip";

it("should display tooltip when trigger is focused", async () => {
  const screen = await render(
    <TooltipTrigger>
      <Button>
        <LuPencil />
      </Button>
      <Tooltip>Tooltip content</Tooltip>
    </TooltipTrigger>,
  );

  // There is some logic in React Aria where some interactions
  // need to happen before a tooltip is correctly displayed on hover.
  // TODO: find out the source of this workaround.
  await userEvent.click(document.body);

  // Press Tab to focus on the tooltip trigger (a button).
  await userEvent.tab();

  const button = screen.getByRole("button");
  expect(button).toHaveAccessibleDescription("Tooltip content");
  expect(
    screen.getByRole("tooltip", { name: "Tooltip content" }),
  ).toBeInTheDocument();
});

it("should display tooltip when trigger is hovered", async () => {
  const screen = await render(
    <TooltipTrigger delay={0}>
      <Button>
        <LuPencil />
      </Button>
      <Tooltip>Tooltip content</Tooltip>
    </TooltipTrigger>,
  );

  const button = screen.getByRole("button");

  // There is some logic in React Aria where some interactions
  // need to happen before a tooltip is correctly displayed on hover.
  // TODO: find out the source of this workaround.
  await userEvent.click(document.body);
  await userEvent.hover(button);

  expect(button).toHaveAccessibleDescription("Tooltip content");
  expect(
    screen.getByRole("tooltip", { name: "Tooltip content" }),
  ).toBeInTheDocument();
});
