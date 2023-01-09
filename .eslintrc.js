// @ts-check
/* eslint-disable @typescript-eslint/no-magic-numbers */

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:array-func/all",
    "plugin:no-use-extend-native/recommended",
    "plugin:promise/recommended",
    "plugin:import/recommended",
    "plugin:import/react",
    "plugin:@typescript-eslint/all",
    "plugin:typescript-sort-keys/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [
    "@babel",
    "new-with-error",
    "prefer-arrow-functions",
    "sort-destructure-keys",
    "sort-keys-fix",
    "toplevel",
    "typescript-sort-keys",
  ],
  rules: {
    "@babel/new-cap": 2,
    "@babel/no-invalid-this": 2,
    "@typescript-eslint/consistent-type-definitions": [2, "type"],
    "@typescript-eslint/explicit-function-return-type": [
      2,
      {
        allowExpressions: true,
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": 2,
    "@typescript-eslint/naming-convention": [
      2,
      {
        // "type" naming should be PascalCase
        custom: {
          match: false,
          regex: "send|start|find",
        },
        format: ["PascalCase"],
        selector: "typeAlias",
      },
    ],
    "@typescript-eslint/no-type-alias": 0,
    "@typescript-eslint/prefer-readonly-parameter-types": 0,
    camelcase: 0,
    "import/no-default-export": 2,
    "no-restricted-syntax": [
      2,
      {
        message:
          "Do not use `enum`. Use `Plain Object` or `Literal Types` instead.",
        selector: "TSEnumDeclaration",
      },
    ],
    "prefer-arrow-functions/prefer-arrow-functions": 2,
    "prefer-template": 2,
    "sort-destructure-keys/sort-destructure-keys": 2,
    "sort-keys-fix/sort-keys-fix": 2,
    yoda: [2, "never", { onlyEquality: true }],
  },
}

module.exports = config
