import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { render } from "@testing-library/react";
import en from "@/locales/en";

i18n.load({
  en: en,
});
i18n.activate("en");

const TestProviders = ({ children }: { children: React.ReactNode }) => {
  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};

/**
 * Render the component with the i18n provider.
 */
const renderWithProviders = (children: React.ReactNode) => {
  return render(children, {
    wrapper: TestProviders,
  });
};

export { renderWithProviders };
