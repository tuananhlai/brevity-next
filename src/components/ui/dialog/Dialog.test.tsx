import { Button, DialogTrigger } from "react-aria-components";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { type Locator, userEvent } from "vitest/browser";
import { Dialog, DialogBody, DialogTitle } from "@/components/ui/dialog";

it("should be open when `isOpen` is true", async () => {
  const screen = await render(
    <Dialog isOpen>
      <DialogTitle>Dialog Title</DialogTitle>
    </Dialog>,
  );

  expect(screen.getByText("Dialog Title")).toBeInTheDocument();
});

it("should have the correct role and name", async () => {
  const screen = await render(
    <Dialog isOpen>
      <DialogTitle>Dialog Title</DialogTitle>
    </Dialog>,
  );

  expect(
    screen.getByRole("dialog", { name: "Dialog Title" }),
  ).toBeInTheDocument();
});

it("should open the dialog when the trigger is clicked", async () => {
  const screen = await render(
    <DialogTrigger>
      <Button>Open Dialog</Button>
      <Dialog>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogBody>Dialog Body</DialogBody>
      </Dialog>
    </DialogTrigger>,
  );

  await screen.getByRole("button", { name: "Open Dialog" }).click();
  expect(screen.getByText("Dialog Title")).toBeInTheDocument();
});

it("should close the dialog when the overlay is clicked", async () => {
  const screen = await render(
    <DialogTrigger defaultOpen>
      <Button>Open Dialog</Button>
      <Dialog>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogBody>Dialog Body</DialogBody>
      </Dialog>
    </DialogTrigger>,
  );

  await userEvent.click(document.body);
  await expectNotInDocument(() => screen.getByRole("dialog"));
});

it("should close the dialog when the `close` function is invoked", async () => {
  const screen = await render(
    <DialogTrigger defaultOpen>
      <Button>Open Dialog</Button>
      <Dialog>
        {({ close }) => (
          <>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogBody>Dialog Body</DialogBody>
            <Button onPress={close}>Close</Button>
          </>
        )}
      </Dialog>
    </DialogTrigger>,
  );

  await screen.getByRole("button", { name: "Close" }).click();
  await expectNotInDocument(() => screen.getByText("Dialog Title"));
});

describe("WAI-ARIA Compliance", () => {
  it("should close the dialog when escape key is pressed", async () => {
    const screen = await render(
      <DialogTrigger defaultOpen>
        <Button>Open Dialog</Button>
        <Dialog>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogBody>Dialog Body</DialogBody>
        </Dialog>
      </DialogTrigger>,
    );

    await userEvent.keyboard("{Escape}");
    await expectNotInDocument(() => screen.getByRole("dialog"));
  });

  it("should trap focus when the dialog is open", async () => {
    const screen = await render(
      <DialogTrigger defaultOpen>
        <Button>Open Dialog</Button>
        <Dialog>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogBody>
            <Button>Button 1</Button>
          </DialogBody>
        </Dialog>
      </DialogTrigger>,
    );

    expect(screen.getByRole("dialog")).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByRole("button", { name: "Button 1" })).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByRole("button", { name: "Button 1" })).toHaveFocus();
  });
});

/**
 * Poll for an element to not be present in the HTML document. Effective for
 * elements that use exit animations.
 * @param locatorFn A function that returns a locator for the element.
 */
const expectNotInDocument = async (locatorFn: () => Locator) => {
  await expect.poll(locatorFn).not.toBeInTheDocument();
};
