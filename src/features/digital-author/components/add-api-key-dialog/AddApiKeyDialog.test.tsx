import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "react-aria-components";
import { DialogTrigger } from "@/components/ui/dialog";
import { apiClient } from "@/lib/apiClient";
import { renderWithProviders } from "@/utils/testutils";
import { AddApiKeyDialog } from "./AddApiKeyDialog";

it("should submit and close the dialog", async () => {
  const name = "api-name";
  const value = "1234567890abcdef";

  const createAPIKey = jest.spyOn(apiClient, "createAPIKey").mockResolvedValue({
    id: "test-id",
    name,
    valueFirstTen: value.slice(0, 10),
    valueLastSix: value.slice(-6),
    createdAt: new Date().toISOString(),
  });

  const onSubmitted = jest.fn();

  renderWithProviders(
    <DialogTrigger defaultOpen>
      <Button>Open</Button>
      <AddApiKeyDialog onSubmitted={onSubmitted} />
    </DialogTrigger>,
  );

  await userEvent.type(screen.getByRole("textbox", { name: "Name" }), name);
  await userEvent.type(screen.getByRole("textbox", { name: "API key" }), value);

  await userEvent.click(screen.getByRole("button", { name: "Add" }));

  expect(createAPIKey).toHaveBeenCalledWith({ name, value });
  expect(onSubmitted).toHaveBeenCalled();
});
