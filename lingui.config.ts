// https://lingui.dev/ref/conf
const config = {
  locales: ["en", "ja"],
  // The Japanese translation will be added in a later date.
  pseudoLocale: "ja",
  catalogs: [
    {
      path: "src/locales/{locale}",
      include: ["src/"],
    },
  ],
  format: "po",
  // Compile .po files to .ts files so that it integrates a bit better
  // with the rest of the application.
  compileNamespace: "ts",
};

export default config;
