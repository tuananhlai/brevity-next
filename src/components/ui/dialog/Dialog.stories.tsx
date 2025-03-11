import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: "ui/Dialog",
  argTypes: {},
  decorators: [
    (story) => (
      <div style={{ width: "1200px", height: "800px" }}>{story()}</div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Dialog>;

// Minimal code to render the component correctly.
export const Default: Story = {
  render: () => {
    return (
      <DialogTrigger defaultOpen>
        <Button>Open Dialog</Button>
        <Dialog>
          {({ close }) => (
            <>
              <DialogTitle>Submit Confirmation</DialogTitle>
              <DialogBody>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  eos amet ad! Iste asperiores quibusdam facere voluptatum,
                  nihil excepturi commodi ullam odit dolorem maxime! Minus
                  dignissimos id sit dicta. Autem?
                </p>
              </DialogBody>
              <DialogActions>
                <Button variant="tertiary" onPress={close}>
                  Cancel
                </Button>
                <Button onPress={() => close()}>Submit</Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </DialogTrigger>
    );
  },
};
