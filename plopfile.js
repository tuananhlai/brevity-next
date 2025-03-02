/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
  plop.setGenerator("component", {
    description: "this is a skeleton plopfile",
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
};
