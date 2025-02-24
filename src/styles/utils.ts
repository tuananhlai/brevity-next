/**
 * Creates a new color with the given color and alpha value.
 * @param color
 * @param alphaValue The alpha value (0 to 100)
 */
export const alpha = (color: string, alphaValue: number) => {
  return `rgb(from ${color} r g b / ${alphaValue}%)`;
};

export const darkModeSelector =
  '&:where([data-mode="dark"], [data-mode="dark"] *)';
