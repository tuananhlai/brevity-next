import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogProps } from "./AlertDialog";

it("should have the correct role", () => {
  render(
    <DialogTrigger defaultOpen>
      <ExampleAlertDialog />
    </DialogTrigger>,
  );

  expect(screen.getByRole("dialog")).toBeInTheDocument();
});

it("should open when the trigger is clicked", async () => {
  render(
    <DialogTrigger>
      <Button>Open Alert Dialog</Button>
      <ExampleAlertDialog />
    </DialogTrigger>,
  );

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  await userEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("dialog")).toBeInTheDocument();
});

it("should invoke onPrimaryAction and close when the primary action is clicked", async () => {
  const onPrimaryAction = jest.fn();
  render(
    <DialogTrigger defaultOpen>
      <ExampleAlertDialog
        primaryActionLabel="Confirm"
        onPrimaryAction={onPrimaryAction}
      />
    </DialogTrigger>,
  );

  await userEvent.click(screen.getByRole("button", { name: "Confirm" }));
  expect(onPrimaryAction).toHaveBeenCalled();
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

it("should invoke onCancel and close when the cancel action is clicked", async () => {
  const onCancel = jest.fn();
  render(
    <DialogTrigger defaultOpen>
      <ExampleAlertDialog cancelLabel="Cancel" onCancel={onCancel} />
    </DialogTrigger>,
  );

  await userEvent.click(screen.getByRole("button", { name: "Cancel" }));
  expect(onCancel).toHaveBeenCalled();
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

const ExampleAlertDialog = (props: Partial<AlertDialogProps> = {}) => {
  const { children = "content", ...rest } = props;

  return (
    <AlertDialog title="title" {...rest}>
      {children}
    </AlertDialog>
  );
};
