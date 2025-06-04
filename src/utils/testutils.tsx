import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import en from "@/locales/en";

i18n.load({
  en: en,
});
i18n.activate("en");

const queryClient = new QueryClient();

const TestProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider i18n={i18n}>{children}</I18nProvider>
    </QueryClientProvider>
  );
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
