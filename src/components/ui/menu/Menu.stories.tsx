import { type Meta, type StoryObj } from "@storybook/react-vite";
import { VisualTestGrid } from "@/styles/storybookTestUtils";
import { Button } from "../button";
import { Menu, MenuItem, MenuTrigger } from "./Menu";

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: "ui/Menu",
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: "1200px", height: "800px" }}>
        <Story />
      </div>
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
      <Menu items={[{ id: "one" }, { id: "two" }, { id: "three" }]}>
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
        <Menu items={[{ id: "one" }, { id: "two" }, { id: "three" }]}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </Menu>
      </MenuTrigger>

      <MenuTrigger isOpen>
        <Button variant="secondary">Open Menu</Button>
        <Menu>
          <MenuItem>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <span style={{ fontWeight: "var(--bw-weight-medium)" }}>
                Custom item
              </span>
              <span>❤️</span>
            </div>
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
            id: `item-${i}`,
            label: `Item ${i}`,
          }))}
        >
          {(item) => <MenuItem>{item.label}</MenuItem>}
        </Menu>
      </MenuTrigger>
    </VisualTestGrid>
  ),
};
