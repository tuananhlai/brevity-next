import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, DialogTrigger } from "react-aria-components";
import { Dialog, DialogBody, DialogTitle } from "@/components/ui/dialog";

it("should open the dialog when the trigger is clicked", async () => {
  render(
    <DialogTrigger>
      <Button>Open Dialog</Button>
      <Dialog>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogBody>Dialog Body</DialogBody>
      </Dialog>
    </DialogTrigger>,
  );

  expect(screen.queryByText("Dialog Title")).not.toBeInTheDocument();
  await userEvent.click(screen.getByRole("button", { name: "Open Dialog" }));
  expect(screen.getByText("Dialog Title")).toBeInTheDocument();
});

it("should open the dialog by default when `defaultOpen` is true", async () => {
  render(
    <DialogTrigger defaultOpen>
      <Button>Open Dialog</Button>
      <Dialog>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogBody>Dialog Body</DialogBody>
      </Dialog>
    </DialogTrigger>,
  );

  expect(screen.getByText("Dialog Title")).toBeInTheDocument();
});

it("should have the correct role", () => {
  render(
    <DialogTrigger defaultOpen>
      <Button>Open Dialog</Button>
      <Dialog>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogBody>Dialog Body</DialogBody>
      </Dialog>
    </DialogTrigger>,
  );

  expect(screen.getByRole("dialog")).toBeInTheDocument();
});

it("should be labelled by the dialog title", () => {
  render(
    <DialogTrigger defaultOpen>
      <Button>Open Dialog</Button>
      <Dialog>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogBody>Dialog Body</DialogBody>
      </Dialog>
    </DialogTrigger>,
  );

  expect(screen.getByRole("dialog")).toHaveAccessibleName("Dialog Title");
});

it("should close the dialog when the overlay is clicked", async () => {
  render(
    <DialogTrigger defaultOpen>
      <Button>Open Dialog</Button>
      <Dialog>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogBody>Dialog Body</DialogBody>
      </Dialog>
    </DialogTrigger>,
  );

  await userEvent.click(document.body);
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

it("should close the dialog when the `close` function is invoked", async () => {
  render(
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

  await userEvent.click(screen.getByRole("button", { name: "Close" }));
  expect(screen.queryByText("Dialog Title")).not.toBeInTheDocument();
});

describe("WAI-ARIA Compliance", () => {
  it("should close the dialog when escape key is pressed", async () => {
    render(
      <DialogTrigger defaultOpen>
        <Button>Open Dialog</Button>
        <Dialog>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogBody>Dialog Body</DialogBody>
        </Dialog>
      </DialogTrigger>,
    );

    await userEvent.keyboard("{Esc}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
