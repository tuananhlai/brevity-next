import { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableCheckboxCell,
  TableCheckboxColumn,
  TableColumn,
  TableHeader,
  TableRow,
} from "./index";

const meta: Meta<typeof Table> = {
  component: Table,
  title: "ui/Table",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Table>;

// Minimal code to render the component correctly.
export const Default: Story = {
  render: () => {
    return (
      <Table>
        <TableHeader>
          <TableColumn isRowHeader>Name</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Phone</TableColumn>
        </TableHeader>
        <TableBody items={sampleRows}>
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

export const Selection: Story = {
  render: () => {
    return (
      <Table selectionMode="multiple" defaultSelectedKeys={[1]}>
        <TableHeader>
          <TableCheckboxColumn />
          <TableColumn isRowHeader>Name</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Phone</TableColumn>
        </TableHeader>
        <TableBody items={sampleRows}>
          {(item) => (
            <TableRow key={item.id}>
              <TableCheckboxCell />
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

export const Overflow: Story = {
  render: () => {
    const [isContrained, setIsContrained] = useState(true);

    return (
      <>
        <button onClick={() => setIsContrained(!isContrained)}>
          Toggle constrained
        </button>
        <div
          style={
            isContrained
              ? { display: "flex", width: "600px", height: "400px" }
              : {}
          }
        >
          <Table>
            <TableHeader>
              <TableColumn>Name</TableColumn>
              <TableColumn>Email</TableColumn>
              <TableColumn>Phone</TableColumn>
              <TableColumn>Address</TableColumn>
              <TableColumn>City</TableColumn>
              <TableColumn>State</TableColumn>
              <TableColumn>Zip</TableColumn>
              <TableColumn>Country</TableColumn>
              <TableColumn style={{ width: "var(--bw-space-48)" }}>
                Note
              </TableColumn>
            </TableHeader>
            <TableBody items={sampleRows}>
              {(item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell>{item.city}</TableCell>
                  <TableCell>{item.state}</TableCell>
                  <TableCell>{item.zip}</TableCell>
                  <TableCell>{item.country}</TableCell>
                  <TableCell>{item.note}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </>
    );
  },
};

const sampleRows = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    country: "USA",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    country: "USA",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
