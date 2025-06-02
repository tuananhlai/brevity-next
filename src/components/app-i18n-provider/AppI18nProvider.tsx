import { i18n } from "@lingui/core";
import { I18nProvider as LingUII18nProvider, useLingui } from "@lingui/react";
import { I18nProvider as ReactAriaI18nProvider } from "react-aria-components";
import { messages as en } from "@/locales/en";
import { messages as ja } from "@/locales/ja";

export type SupportedLocale = "en" | "ja";

i18n.load({
  en: en,
  ja: ja,
} satisfies Record<SupportedLocale, unknown>);
i18n.activate("en");

export interface AppI18nProviderProps {
  children: React.ReactNode;
}

export const AppI18nProvider: React.FC<AppI18nProviderProps> = (props) => {
  const { children } = props;

  return (
    <LingUII18nProvider i18n={i18n}>
      <AriaI18nProvider>{children}</AriaI18nProvider>
    </LingUII18nProvider>
  );
};

/**
 * Pass the locale of Lingui's I18nProvider to React Aria's I18nProvider
 * to unify the application language.
 */
const AriaI18nProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const { i18n } = useLingui();

  return (
    <ReactAriaI18nProvider locale={i18n.locale}>
      {props.children}
    </ReactAriaI18nProvider>
  );
};
