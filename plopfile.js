/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");
const fs = require("fs");

const featuresDir = path.join(process.cwd(), "src/features");
const features = fs.readdirSync(featuresDir);

/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
  plop.setGenerator("component", {
    description: "Generate a React component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "What is the name of the component (PascalCase)?",
      },
      {
        type: "confirm",
        default: false,
        name: "shouldForwardRef",
        message: "Should the component be wrapped in `React.forwardRef`?",
      },
      {
        type: "list",
        name: "location",
        message: "Where should the component be created?",
        choices: [
          "components",
          "components/ui",
          ...features.map((v) => `features/${v}/components`),
        ],
      },
    ],
    actions(answers) {
      /** @type{ import("plop").ActionType[] } */
      const actions = [];

      if (!answers) return actions;

      const { componentName, shouldForwardRef, location } = answers;

      let storybookComponentName;
      switch (location) {
        case "components":
          storybookComponentName = componentName;
          break;
        case "components/ui":
          storybookComponentName = `ui/${componentName}`;
          break;
        default:
          const featureName = location.split("/")[1];
          storybookComponentName = `features/${featureName}/${componentName}`;
          break;
      }

      actions.push({
        type: "addMany",
        templateFiles: "internals/plop-templates/component/**",
        destination: `./src/${location}/{{dashCase componentName}}`,
        data: { componentName, shouldForwardRef, storybookComponentName },
        base: "internals/plop-templates/component",
      });

      return actions;
    },
  });

  plop.setGenerator("feature", {
    description: "Generate a feature folder structure",
    prompts: [
      {
        type: "input",
        name: "featureName",
        message: "Enter the feature name (dash-case):",
      },
      {
        type: "checkbox",
        name: "folders",
        message: "Select folders to generate:",
        choices: [
          { name: "api", value: "api", checked: true },
          { name: "assets", value: "assets", checked: false },
          { name: "components", value: "components", checked: true },
          { name: "hooks", value: "hooks", checked: false },
          { name: "stores", value: "stores", checked: false },
          { name: "types", value: "types", checked: false },
          { name: "utils", value: "utils", checked: false },
        ],
      },
    ],
    actions(answers) {
      /** @type{ import("plop").ActionType[] } */
      const actions = [];

      if (!answers) return actions;

      const { folders } = answers;

      folders.forEach((folder) => {
        actions.push({
          type: "add",
          path: `src/features/{{kebabCase featureName}}/${folder}/.gitkeep`,
          template: "",
        });
      });

      return actions;
    },
  });

  plop.setGenerator("page", {
    description: "Generate a page",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "What is the name of the page (PascalCase)?",
      },
    ],
    actions(answers) {
      /** @type{ import("plop").ActionType[] } */
      const actions = [];

      if (!answers) return actions;

      const { componentName } = answers;

      actions.push({
        type: "addMany",
        templateFiles: "internals/plop-templates/page/**",
        destination: `./src/app/pages/{{dashCase componentName}}`,
        data: { componentName },
        base: "internals/plop-templates/page",
      });

      return actions;
    },
  });
};
