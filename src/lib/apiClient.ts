import { APIClient } from "@/lib/client";

export const apiClient = new APIClient(
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:48080",
);
