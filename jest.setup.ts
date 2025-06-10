import "@testing-library/jest-dom";
import { TextEncoder } from "util";

// Fix issue with using ES6-only libraries with Jest and Next.js
global.TextEncoder = TextEncoder;
