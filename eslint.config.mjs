import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  {
    ignores: ["lib/generated/**"],
  },
  ...compat.config({
    extends: [
      "eslint:recommended",
      "next",
      "next/core-web-vitals",
      "next/typescript",
    ],
  }),
];

export default eslintConfig;
