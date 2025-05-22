import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog } from "./AlertDialog";

it("should have the correct title and content", () => {
  render(
    <DialogTrigger defaultOpen>
      <Button>Open</Button>
      <AlertDialog title="Test Title" onPrimaryAction={() => {}}>
        Test Content
      </AlertDialog>
    </DialogTrigger>,
  );

  expect(
    screen.getByRole("dialog", { name: "Test Title" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Test Content")).toBeInTheDocument();
});

it("should call the primary action when the button is clicked", async () => {
  const onPrimaryAction = jest.fn();
  render(
    <DialogTrigger defaultOpen>
      <Button>Open</Button>
      <AlertDialog
        title="Test Title"
        primaryActionLabel="confirm"
        onPrimaryAction={onPrimaryAction}
      >
        Test Content
      </AlertDialog>
    </DialogTrigger>,
  );

  await userEvent.click(screen.getByRole("button", { name: "confirm" }));

  expect(onPrimaryAction).toHaveBeenCalledTimes(1);
});
