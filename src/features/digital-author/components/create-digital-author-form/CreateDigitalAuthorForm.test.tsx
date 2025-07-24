import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useId } from "react";
import { apiClient } from "@/lib/apiClient";
import { renderWithProviders } from "@/utils/testutils";
import { CreateDigitalAuthorForm } from "./CreateDigitalAuthorForm";

jest.spyOn(apiClient, "getAPIKeys").mockResolvedValue({
  items: [
    {
      id: "1",
      name: "API Key 1",
      valueFirstTen: "1234567890",
      valueLastSix: "123456",
      createdAt: "2021-01-01T00:00:00.000Z",
    },
    {
      id: "2",
      name: "API Key 2",
      valueFirstTen: "1234567890",
      valueLastSix: "123456",
      createdAt: "2021-01-01T00:00:00.000Z",
    },
  ],
});

it("should submit the form successfully when the form is valid", async () => {
  const onSubmit = jest.fn();
  renderWithProviders(<TestForm onSubmit={onSubmit} />);

  const expectedDisplayName = "Test Digital Author";
  const expectedSystemPrompt = "You are a helpful assistant.";

  const displayNameField = screen.getByLabelText(/Display name/i);
  const apiKeyField = screen.getByLabelText(/API key/i);
  const systemPromptField = screen.getByLabelText(/System prompt/i);

  await userEvent.type(displayNameField, expectedDisplayName);
  await userEvent.type(systemPromptField, expectedSystemPrompt);

  // TODO: abstract interaction with RAC select into a reusable function.
  await userEvent.click(apiKeyField);
  await userEvent.click(screen.getByRole("option", { name: "API Key 1" }));

  const submitButton = screen.getByRole("button", { name: "Submit" });
  await userEvent.click(submitButton);

  expect(onSubmit).toHaveBeenCalledWith({
    displayName: expectedDisplayName,
    apiKeyID: "1",
    systemPrompt: expectedSystemPrompt,
    temperature: 0.5,
    topP: 1,
    maxTokens: 4000,
  });
});

const TestForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const formID = useId();

  return (
    <>
      <CreateDigitalAuthorForm id={formID} onSubmit={onSubmit} />
      <button type="submit" form={formID}>
        Submit
      </button>
    </>
  );
};
