import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "react-aria-components";
import { DialogTrigger } from "@/components/ui/dialog";
import { renderWithProviders } from "@/utils/testutils";
import { AddApiKeyDialog } from "./AddApiKeyDialog";

it("should submit and close the dialog", async () => {
  const onSubmit = jest.fn();

  renderWithProviders(
    <DialogTrigger defaultOpen>
      <Button>Open</Button>
      <AddApiKeyDialog onSubmit={onSubmit} />
    </DialogTrigger>,
  );

  await userEvent.type(
    screen.getByRole("textbox", { name: "API key" }),
    "test",
  );
  await userEvent.click(screen.getByRole("button", { name: "Add" }));

  expect(onSubmit).toHaveBeenCalledWith({ apiKey: "test" });
});
