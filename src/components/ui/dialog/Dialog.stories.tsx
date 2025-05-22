import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DialogTrigger } from "react-aria-components";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../button";
import { Dialog, DialogActions, DialogBody, DialogTitle } from "./Dialog";

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

export const Controlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Checkbox isSelected={isOpen} onChange={setIsOpen}>
          Open Dialog
        </Checkbox>
        <Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
          <DialogTitle>Title</DialogTitle>
          <DialogBody>Content</DialogBody>
        </Dialog>
      </div>
    );
  },
};
