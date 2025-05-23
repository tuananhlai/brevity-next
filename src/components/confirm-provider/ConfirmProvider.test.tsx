import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ConfirmProvider, useConfirm } from "./ConfirmProvider";

describe("ConfirmProvider", () => {
  it("should open alert dialog when confirm() is called", async () => {
    render(
      <ConfirmProvider>
        <TestComponent />
      </ConfirmProvider>,
    );

    await openConfirmDialog();

    // Verify dialog is opened with correct content
    expect(
      screen.getByRole("alertdialog", { name: "Test Title" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Yes" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "No" })).toBeInTheDocument();
  });

  it("should resolve promise with true and close dialog when primary action is clicked", async () => {
    const onConfirm = jest.fn();
    render(
      <ConfirmProvider>
        <TestComponent onConfirm={onConfirm} />
      </ConfirmProvider>,
    );

    await openConfirmDialog();
    await userEvent.click(getPrimaryActionButton());

    expect(onConfirm).toHaveBeenCalledWith(true);
    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();
  });

  it.each([
    {
      name: "cancel button is pressed",
      close: () => userEvent.click(getCancelButton()),
    },
    {
      name: "user clicks outside the dialog",
      close: () => userEvent.click(document.body),
    },
    {
      name: "user presses escape",
      close: () => userEvent.keyboard("{Escape}"),
    },
  ])(
    "should resolve promise with false and close dialog when $name",
    async ({ close }) => {
      const onConfirm = jest.fn();

      render(
        <ConfirmProvider>
          <TestComponent onConfirm={onConfirm} />
        </ConfirmProvider>,
      );

      await openConfirmDialog();
      await close();

      expect(onConfirm).toHaveBeenCalledWith(false);
      expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();
    },
  );
});

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

const openConfirmDialog = () =>
  userEvent.click(screen.getByRole("button", { name: "Open Dialog" }));
const getPrimaryActionButton = () =>
  screen.getByRole("button", { name: "Yes" });
const getCancelButton = () => screen.getByRole("button", { name: "No" });
