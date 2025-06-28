import { Meta, StoryObj } from "@storybook/nextjs";
import { Flex } from "@/components/ui/layout";
import { VisualTestGrid } from "@/styles/storybookTestUtils";
import { Button } from "../button";
import { Menu, MenuItem, MenuTrigger } from "./Menu";

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: "ui/Menu",
  argTypes: {},
  decorators: [
    (story) => (
      <div style={{ width: "1200px", height: "800px" }}>{story()}</div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => (
    <MenuTrigger defaultOpen>
      <Button>Open Menu</Button>
      <Menu>
        <MenuItem href="https://google.com">Use this to go to Google</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </MenuTrigger>
  ),
};

export const DisabledMenuItem: Story = {
  render: () => (
    <MenuTrigger defaultOpen>
      <Button>Open Menu</Button>
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem isDisabled>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </MenuTrigger>
  ),
};

export const VisualTest: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
  render: () => (
    <VisualTestGrid gap="48px">
      <MenuTrigger isOpen>
        <Button>Open Menu</Button>
        <Menu>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </Menu>
      </MenuTrigger>

      <MenuTrigger isOpen>
        <Button variant="secondary">Open Menu</Button>
        <Menu>
          <MenuItem>
            <Flex justify="space-between">
              <span style={{ fontWeight: "var(--bw-weight-medium)" }}>
                Custom item
              </span>
              <span>❤️</span>
            </Flex>
          </MenuItem>
          <MenuItem isDisabled>Disabled item</MenuItem>
          <MenuItem>
            Item with very very very very long text. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Eligendi, fugiat ullam iusto
            repellendus ad sed ex perferendis quia quas, vero necessitatibus.
            Provident hic non vitae, alias commodi exercitationem id architecto.
          </MenuItem>
        </Menu>
      </MenuTrigger>

      <MenuTrigger isOpen>
        <Button variant="tertiary">Open Menu</Button>
        <Menu
          items={Array.from({ length: 100 }, (_, i) => ({
            key: `item-${i}`,
            label: `Item ${i}`,
          }))}
        >
          {(item) => <MenuItem>{item.label}</MenuItem>}
        </Menu>
      </MenuTrigger>
    </VisualTestGrid>
  ),
};
