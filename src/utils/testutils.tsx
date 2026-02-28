import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type RenderResult, render } from "vitest-browser-react";
import { type Locator, userEvent } from "vitest/browser";
import { messages } from "@/locales/en";

const queryClient = new QueryClient();

i18n.load({
  en: messages,
});
i18n.activate("en");

// This component is only used in test and not changed frequently, so hot reloading support
// is not needed.
// eslint-disable-next-line react-refresh/only-export-components
const TestProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider i18n={i18n}>{children}</I18nProvider>
    </QueryClientProvider>
  );
};

/**
 * Render a component with a few commonly-used providers.
 */
const renderWithProviders = (
  children: React.ReactNode,
): Promise<RenderResult> => {
  return render(children, {
    wrapper: TestProviders,
  });
};

/**
 * A helper function which toggles the selection state of a checkbox or radio button.
 * @param locator
 */
const select = async (locator: Locator) => {
  locator.element().focus();
  await userEvent.keyboard(" ");
};

export { renderWithProviders, select };
