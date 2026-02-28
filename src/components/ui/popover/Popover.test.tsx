import { Button, DialogTrigger } from "react-aria-components";
import { expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { Popover } from "./Popover";

it("should render a popover when the trigger is clicked", async () => {
  const screen = await render(
    <DialogTrigger>
      <Button>Open popover</Button>
      <Popover>
        <div>content</div>
      </Popover>
    </DialogTrigger>,
  );

  expect(screen.getByText("content")).not.toBeInTheDocument();
  await userEvent.click(screen.getByRole("button", { name: "Open popover" }));
  expect(screen.getByText("content")).toBeInTheDocument();
});
