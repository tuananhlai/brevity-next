import { FieldErrorProps } from "react-aria-components";

/**
 * Replace React Aria Component's render props with more conventional props.
 */
export type ReplaceAriaRenderProps<T> = Omit<
  T,
  "style" | "className" | "children"
> & {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

export type FieldsetProps = {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: FieldErrorProps["children"];
};

/** The placeholder href for links that are not yet implemented. */
export const TODO_HREF = "#";

const APP_NAME = "Brevity";

/**
 * Return the page title (the text to be displayed in the browser tab) given the heading of a page.
 *
 * @example
 * ```ts
 * getPageTitle("Home"); // "Home | Brevity"
 * ```
 */
export const getPageTitle = (pageHeading: string) => {
  return `${pageHeading} | ${APP_NAME}`;
};

/**
 * Return a random avatar URL based on the given seed.
 * Same seed will always generate the same avatar.
 */
export const generateAvatarURL = (seed: string): string => {
  return `https://api.dicebear.com/9.x/glass/jpg?seed=${seed}`;
};
