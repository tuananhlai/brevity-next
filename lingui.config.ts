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
};

export default config;
