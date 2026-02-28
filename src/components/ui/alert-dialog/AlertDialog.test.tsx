import { expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog } from "./AlertDialog";

it("should have the correct title and content", async () => {
  const screen = await render(
    <DialogTrigger defaultOpen>
      <Button>Open</Button>
      <AlertDialog title="Test Title" onPrimaryAction={() => {}}>
        Test Content
      </AlertDialog>
    </DialogTrigger>,
  );

  expect(
    screen.getByRole("alertdialog", { name: "Test Title" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Test Content")).toBeInTheDocument();
});

it("should call the primary action when the button is clicked", async () => {
  const onPrimaryAction = vi.fn();
  const screen = await render(
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

  await screen.getByRole("button", { name: "confirm" }).click();

  expect(onPrimaryAction).toHaveBeenCalledTimes(1);
});
