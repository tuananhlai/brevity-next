module.exports = {
  plugins: [
    // Organize imports within TypeScript files.
    "@trivago/prettier-plugin-sort-imports",
    // Organize order of CSS properties inside CSS / SCSS files.
    // Follow Concentric CSS ordering rules (https://rhodesmill.org/brandon/2011/concentric-css/).
    "prettier-plugin-css-order",
  ],

  // @trivago/prettier-plugin-sort-imports
  // Sort TypeScript imports into three groups: third-party imports,
  // local imports, and styles imports. Styles imports need to be at the
  // end to ensure predictable CSS application order.
  importOrder: [
    "^@/(.*)$",
    "^(?!.*\\.module\\.(css|scss)$)[./].*$",
    ".*\\.module\\.(css|scss)$",
  ],
  // Sort import specifiers alphabetically. For example:
  // import { Alert, Button, Checkbox, Dialog } from '@/components';
  importOrderSortSpecifiers: true,
};
