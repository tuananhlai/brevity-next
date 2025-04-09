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

it("should close when the primary action is clicked", async () => {
  render(
    <DialogTrigger defaultOpen>
      <ExampleAlertDialog primaryActionLabel="Confirm" />
    </DialogTrigger>,
  );

  await userEvent.click(screen.getByRole("button", { name: "Confirm" }));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

it("should close when the cancel action is clicked", async () => {
  render(
    <DialogTrigger defaultOpen>
      <ExampleAlertDialog cancelLabel="Cancel" />
    </DialogTrigger>,
  );

  await userEvent.click(screen.getByRole("button", { name: "Cancel" }));
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
