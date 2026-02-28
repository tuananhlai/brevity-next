import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/app/pages/home";

export const Route = createFileRoute("/")({
  component: Home,
});
