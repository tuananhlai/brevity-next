# Notes for `package.json`

- `@lingui/swc-plugin` needs to be locked to version 4.0.8, as it is the latest version compatible with NextJS 14.2.21. Since SWC plugins have poor support for backward compatibility, `@lingui/swc-plugin` and associated `@lingui/*` packages need to be updated as well when we update NextJS. <https://github.com/lingui/js-lingui/issues/2161>
