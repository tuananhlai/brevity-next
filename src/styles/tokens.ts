export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const queries = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  "2xl": `@media (min-width: ${breakpoints["2xl"]})`,
  forcedColors: `@media (forced-colors: active)`,
} as const;

export const spacings = {
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "1.75rem",
  "8": "2rem",
  "9": "2.25rem",
  "10": "2.5rem",
  "11": "2.75rem",
  "12": "3rem",
  "14": "3.5rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "28": "7rem",
  "32": "8rem",
  "36": "9rem",
  "40": "10rem",
  "48": "12rem",
  "56": "14rem",
  "64": "16rem",
  "72": "18rem",
  "80": "20rem",
  "96": "24rem",
  "0.5": "0.125rem",
  "1.5": "0.375rem",
  "2.5": "0.625rem",
  "3.5": "0.875rem",
} as const;

export const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
} as const;

export const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

export const lineHeights = {
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "1.75rem",
  "8": "2rem",
  "9": "2.25rem",
  "10": "2.5rem",
} as const;

export const shadows = {
  sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  none: "none",
} as const;

export const borderRadiuses = {
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
} as const;

export const colors = {
  black: "rgb(0 0 0)",
  white: "rgb(255 255 255)",

  // Blue Shades
  "blue-50": "rgb(239 246 255)",
  "blue-100": "rgb(219 234 254)",
  "blue-200": "rgb(191 219 254)",
  "blue-300": "rgb(147 197 253)",
  "blue-400": "rgb(96 165 250)",
  "blue-500": "rgb(59 130 246)",
  "blue-600": "rgb(37 99 235)",
  "blue-700": "rgb(29 78 216)",
  "blue-800": "rgb(30 64 175)",
  "blue-900": "rgb(30 58 138)",
  "blue-950": "rgb(23 37 84)",

  // Red Shades
  "red-50": "rgb(254 242 242)",
  "red-100": "rgb(254 226 226)",
  "red-200": "rgb(254 202 202)",
  "red-300": "rgb(252 165 165)",
  "red-400": "rgb(248 113 113)",
  "red-500": "rgb(239 68 68)",
  "red-600": "rgb(220 38 38)",
  "red-700": "rgb(185 28 28)",
  "red-800": "rgb(153 27 27)",
  "red-900": "rgb(127 29 29)",
  "red-950": "rgb(69 10 10)",

  // Zinc Shades
  "zinc-50": "rgb(250 250 250)",
  "zinc-100": "rgb(244 244 245)",
  "zinc-200": "rgb(228 228 231)",
  "zinc-300": "rgb(212 212 216)",
  "zinc-400": "rgb(161 161 170)",
  "zinc-500": "rgb(113 113 122)",
  "zinc-600": "rgb(82 82 91)",
  "zinc-700": "rgb(63 63 70)",
  "zinc-800": "rgb(39 39 42)",
  "zinc-900": "rgb(24 24 27)",
  "zinc-950": "rgb(9 9 11)",
} as const;

export const animationTimings = {
  easeIn: "cubic-bezier(0, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.4, 0, 1, 1)",
} as const;

export const backdropBlurs = {
  xs: "blur(4px)",
  sm: "blur(8px)",
  md: "blur(12px)",
  lg: "blur(16px)",
  xl: "blur(24px)",
  "2xl": "blur(40px)",
  "3xl": "blur(64px)",
} as const;
