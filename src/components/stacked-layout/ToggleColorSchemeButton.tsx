import { LuMoon } from "react-icons/lu";
import { NavbarButton } from "@/components/navbar";

export const ToggleColorSchemeButton: React.FC = () => {
  const toggleColorScheme = () => {
    const isDarkColorScheme =
      document.documentElement.getAttribute("data-mode") === "dark";

    document.documentElement.setAttribute(
      "data-mode",
      isDarkColorScheme ? "light" : "dark",
    );
  };

  return (
    <NavbarButton variant="tertiary" onPress={toggleColorScheme}>
      <LuMoon />
    </NavbarButton>
  );
};
