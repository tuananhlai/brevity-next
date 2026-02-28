import { expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { renderWithProviders } from "@/utils/testutils";
import { ConfirmProvider, useConfirm } from "./ConfirmProvider";

it("should open alert dialog when confirm() is called", async () => {
  const screen = await renderWithProviders(
    <ConfirmProvider>
      <TestComponent />
    </ConfirmProvider>,
  );

  await openConfirmDialog(screen);

  expect(
    screen.getByRole("alertdialog", { name: "Test Title" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Test Content")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Yes" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "No" })).toBeInTheDocument();
});

it("should resolve promise with true and close dialog when primary action is clicked", async () => {
  const onConfirm = vi.fn();
  const screen = await renderWithProviders(
    <ConfirmProvider>
      <TestComponent onConfirm={onConfirm} />
    </ConfirmProvider>,
  );

  await openConfirmDialog(screen);
  await userEvent.click(screen.getByRole("button", { name: "Yes" }).element());

  expect(onConfirm).toHaveBeenCalledWith(true);
  await expect
    .poll(() => screen.getByRole("alertdialog"))
    .not.toBeInTheDocument();
});

it.each([
  {
    name: "cancel button is pressed",
    close: async (screen: Awaited<ReturnType<typeof renderWithProviders>>) =>
      userEvent.click(screen.getByRole("button", { name: "No" }).element()),
  },
  {
    name: "user clicks outside the dialog",
    close: async () => userEvent.click(document.body),
  },
  {
    name: "user presses escape",
    close: async () => userEvent.keyboard("{Escape}"),
  },
])(
  "should resolve promise with false and close dialog when $name",
  async ({ close }) => {
    const onConfirm = vi.fn();

    const screen = await renderWithProviders(
      <ConfirmProvider>
        <TestComponent onConfirm={onConfirm} />
      </ConfirmProvider>,
    );

    await openConfirmDialog(screen);
    await close(screen);

    expect(onConfirm).toHaveBeenCalledWith(false);
    await expect
      .poll(() => screen.getByRole("alertdialog"))
      .not.toBeInTheDocument();
  },
);

const TestComponent = (props: { onConfirm?: (result: boolean) => void }) => {
  const confirm = useConfirm();

  const handleClick = async () => {
    const result = await confirm({
      title: "Test Title",
      content: "Test Content",
      primaryActionLabel: "Yes",
      cancelLabel: "No",
    });
    props.onConfirm?.(result);
  };

  return <button onClick={handleClick}>Open Dialog</button>;
};

const openConfirmDialog = async (
  screen: Awaited<ReturnType<typeof renderWithProviders>>,
) => {
  await userEvent.click(
    screen.getByRole("button", { name: "Open Dialog" }).element(),
  );
};
