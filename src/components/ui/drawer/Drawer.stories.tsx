import { Meta, StoryObj } from "@storybook/react";
import { Form } from "react-aria-components";
import { Button } from "../button";
import { Text } from "../text";
import { TextField } from "../text-field";
import { Drawer, DrawerTitle, DrawerTrigger } from "./Drawer";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: "Drawer",
  argTypes: {},
  decorators: [
    (story) => <div style={{ width: "100vw", height: "100vh" }}>{story()}</div>,
  ],
};
export default meta;

type Story = StoryObj<typeof Drawer>;

// Minimal code to render the component correctly.
export const Default: Story = {
  render: () => (
    <DrawerTrigger defaultOpen>
      <Button>Open drawer</Button>
      <Drawer>
        {({ close }) => (
          <div style={{ padding: "2rem" }}>
            <DrawerTitle>Drawer title</DrawerTitle>
            <Text>This is the body for the drawer.</Text>
            <Form
              id="form"
              onSubmit={(e) => {
                e.preventDefault();
                close();
              }}
            >
              <TextField
                name="reason"
                style={{ marginTop: "0.5rem" }}
                label="Label"
              />
            </Form>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <Button onPress={close} variant="secondary">
                Cancel
              </Button>
              <Button form="form" type="submit">
                Save
              </Button>
            </div>
          </div>
        )}
      </Drawer>
    </DrawerTrigger>
  ),
};
