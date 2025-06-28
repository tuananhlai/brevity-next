import { Meta, StoryObj } from "@storybook/nextjs";
import { Container } from "./Container";

const meta: Meta = {
  title: "ui/Layout",
  argTypes: {},
};
export default meta;

export const ContainerStory: StoryObj = {
  name: "Container",
  render: () => (
    <Container style={{ backgroundColor: "aliceblue", margin: "auto" }}>
      content
    </Container>
  ),
};
