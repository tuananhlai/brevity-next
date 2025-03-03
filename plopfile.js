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
          { name: "components", value: "./src/components" },
          { name: "components/ui", value: "./src/components/ui" },
        ],
      },
    ],
    actions(answers) {
      /** @type{ import("plop").ActionType[] } */
      const actions = [];

      if (!answers) return actions;

      const { componentName, shouldForwardRef, location } = answers;

      actions.push({
        type: "addMany",
        templateFiles: "internals/plop-templates/component/**",
        destination: `${location}/{{dashCase componentName}}`,
        data: { componentName, shouldForwardRef },
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
        message: "Enter the feature name:",
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
};
