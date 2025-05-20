import { Meta, StoryObj } from "@storybook/react";
import {
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  component: Table,
  title: "ui/Table",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Table>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    const data = [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "jane.doe@example.com",
        phone: "123-456-7890",
      },
    ];

    return (
      <Table>
        <TableHeader>
          <TableColumn isRowHeader>Name</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Phone</TableColumn>
        </TableHeader>
        <TableBody items={data}>
          {(item) => (
            <TableRow key={item.id}>
              <TableCell style={{ fontWeight: "var(--bw-weight-medium)" }}>
                {item.name}
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  },
};
