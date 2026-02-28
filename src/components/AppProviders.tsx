import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppI18nProvider } from "@/components/app-i18n-provider";
import { ConfirmProvider } from "@/components/confirm-provider";
import { toastQueue } from "@/components/toastQueue";
import { ToastRegion } from "@/components/ui/toast";

const queryClient = new QueryClient();

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppI18nProvider>
          <ConfirmProvider>{children}</ConfirmProvider>
        </AppI18nProvider>
      </QueryClientProvider>
      <ToastRegion queue={toastQueue} />
    </>
  );
};
