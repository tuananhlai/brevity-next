import { APIClient } from "@/lib/client";

export const apiClient = new APIClient(import.meta.env.VITE_BACKEND_BASE_URL);
