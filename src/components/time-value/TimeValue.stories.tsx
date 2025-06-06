import { Meta, StoryObj } from "@storybook/react";
import { RelativeTimeValue, TimeValue } from "./TimeValue";

const meta: Meta<typeof TimeValue> = {
  component: TimeValue,
  title: "TimeValue",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TimeValue>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <TimeValue dateTime={new Date("2015-10-10")} />
        <RelativeTimeValue dateTime={new Date("2015-10-10")} />

        <TimeValue dateTime={new Date("2045-10-10")} />
        <RelativeTimeValue dateTime={new Date("2045-10-10")} />

        <TimeValue dateTime={new Date()} />
        <RelativeTimeValue dateTime={new Date()} />

        <RelativeTimeValue dateTime={new Date(Date.now() - 1000)} />
        <RelativeTimeValue dateTime={new Date(Date.now() - 60000)} />
        <RelativeTimeValue dateTime={new Date(Date.now() + 1000)} />
        <RelativeTimeValue dateTime={new Date(Date.now() + 60000)} />
      </div>
    );
  },
};
