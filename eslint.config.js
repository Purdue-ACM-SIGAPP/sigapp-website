import { defineConfig } from "eslint/config";
import eslintJs from "@eslint/js";
import typescriptEslint from "typescript-eslint";
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  { ignores: ["**/*.d.ts", "dist"] },
  {
    files: ["**/*.{js,ts,vue}"],
    extends: [
      eslintJs.configs.recommended,
      typescriptEslint.configs.recommended,
      eslintPluginVue.configs["flat/recommended"],
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
  eslintConfigPrettier,
]);
