import { LuMoon } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import styles from "./ToggleColorSchemeButton.module.scss";

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
    <Button
      className={styles.root}
      variant="tertiary"
      onPress={toggleColorScheme}
    >
      <LuMoon />
    </Button>
  );
};
