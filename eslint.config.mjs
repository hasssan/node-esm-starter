import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import prettierConfig from "eslint-config-prettier/flat";

export default defineConfig([
  js.configs.recommended,
  prettierConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]);
