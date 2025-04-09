import { render, screen } from "@testing-library/react";
import { Button, DialogTrigger } from "react-aria-components";
import { Dialog, DialogBody, DialogTitle } from "@/components/ui/dialog";

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
