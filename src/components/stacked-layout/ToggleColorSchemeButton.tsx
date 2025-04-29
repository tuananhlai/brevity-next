import { ToggleButton } from "react-aria-components";
import { LuMoon } from "react-icons/lu";
import { useTheme } from "@/components/ui/provider";

export const ToggleColorSchemeButton: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <ToggleButton
      aria-label="Use dark mode"
      isSelected={theme === "dark"}
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <LuMoon />
    </ToggleButton>
  );
};
