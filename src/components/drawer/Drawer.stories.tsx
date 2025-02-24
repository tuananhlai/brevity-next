import { Meta, StoryObj } from "@storybook/react";
import { Form } from "react-aria-components";

import { spacings } from "@/styles/tokens";

import { Button } from "../button";
import { Text } from "../text";
import { TextField } from "../text-field";
import { Drawer, DrawerTitle, DrawerTrigger } from "./Drawer";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: "Drawer",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Drawer>;

// Minimal code to render the component correctly.
export const Default: Story = {
  render: () => (
    <DrawerTrigger>
      <Button>Open drawer</Button>
      <Drawer>
        {({ close }) => (
          <div css={{ padding: spacings[8] }}>
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
                css={{ marginTop: spacings[2] }}
                label="Label"
              />
            </Form>
            <div
              css={{
                display: "flex",
                justifyContent: "end",
                gap: spacings[4],
                marginTop: spacings[4],
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
