import { Meta, StoryObj } from "@storybook/react";
import { ArticleRenderer } from "./ArticleRenderer";

const meta: Meta<typeof ArticleRenderer> = {
  component: ArticleRenderer,
  title: "ArticleRenderer",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ArticleRenderer>;

export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    children: (
      <>
        <h1>This is a Heading 1</h1>
        <h2>This is a Heading 2</h2>
        <h3>This is a Heading 3</h3>
        <h4>This is a Heading 4</h4>
        <h5>This is a Heading 5</h5>
        <h6>This is a Heading 6</h6>
        <p>
          This is a paragraph. It can contain <strong>bold text</strong> and{" "}
          <em>italic text</em>.
        </p>
        <ul>
          <li>First item in an unordered list</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
        <ol>
          <li>First item in an ordered list</li>
          <li>Second item</li>
          <li>Third item</li>
        </ol>
        <blockquote>
          This is a blockquote. It is used to quote text from another source.
        </blockquote>
        <p>
          Here is an inline <code>code snippet</code> example in a paragraph.
        </p>
        <pre>
          <code># This is a code block print(&quot;Hello, world!&quot;)</code>
        </pre>
        <p>
          This is a <a href="https://example.com">link</a> to an external
          website. これは
          <a href="https://example.com">外部ウェブサイトへのリンク</a>です。
        </p>
        <hr />
        <strong>Strong text</strong> and <em>emphasized text</em> can be used
        inline.
        <h2>Table Example</h2>
        <table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row 1, Cell 1</td>
              <td>Row 1, Cell 2</td>
              <td>Row 1, Cell 3</td>
            </tr>
            <tr>
              <td>Row 2, Cell 1</td>
              <td>Row 2, Cell 2</td>
              <td>Row 2, Cell 3</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
};
