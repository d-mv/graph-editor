module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:eslint-comments/recommended",
    "plugin:json/recommended",
    "plugin:markdown/recommended-legacy",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:security/recommended-legacy",
    "plugin:jsdoc/recommended",
    "plugin:regexp/recommended",
    "plugin:node/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "@getify/proper-arrows",
    "@typescript-eslint",
    "async-await",
    "eslint-comments",
    "@stylistic",
    "prettier",
    "promise",
    "jsdoc",
    "regexp",
    "html",
  ],
  rules: {
    "node/no-unpublished-import": "off",
    "node/no-unsupported-features/es-syntax": "off",
    "node/no-missing-import": "off",
    "jsdoc/require-jsdoc": "off",
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/avoid-new": "warn",
    "promise/no-new-statics": "error",
    "promise/no-return-in-finally": "warn",
    "promise/valid-params": "warn",
    complexity: ["error", 10],
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": "allow-with-description",
        "ts-nocheck": "allow-with-description",
        "ts-check": "allow-with-description",
        minimumDescriptionLength: 3,
      },
    ],
    "@typescript-eslint/no-redeclare": "off",
    "@getify/proper-arrows/params": [
      "error",
      {
        unused: "none",
        trivial: false,
        count: 15,
        length: 0,
        allowed: ["key"],
      },
    ],
    "no-useless-catch": "error",
    "no-self-compare": "error",
    "no-useless-return": "error",
    "no-const-assign": "error",
    "no-useless-constructor": "error",
    "no-param-reassign": "error",
    "eslint-comments/require-description": "error",
    "@stylistic/keyword-spacing": "error",
    "no-use-before-define": [
      "error",
      { functions: true, classes: true, variables: true },
    ],
    "no-var": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-explicit-any": ["error", { ignoreRestArgs: false }],
    "@stylistic/ts/semi": ["off", null],
    "async-await/space-after-async": 2,
    "async-await/space-after-await": 2,
    "@stylistic/block-spacing": ["error", "always"],
    "@stylistic/lines-around-comment": [0],
    "@stylistic/lines-between-class-members": ["error", "always"],
    "max-lines": [
      "error",
      { max: 300, skipBlankLines: true, skipComments: true },
    ],
    "max-nested-callbacks": ["error", 10],
    "max-params": ["error", 3],
    "@stylistic/newline-per-chained-call": ["off"],
    "no-console": ["error"],
    "@stylistic/no-multi-spaces": ["error"],
    "@stylistic/no-multiple-empty-lines": ["error"],
    "@stylistic/func-call-spacing": ["error"],
    "@stylistic/no-whitespace-before-property": ["error"],
    "prettier/prettier": "error",
    "@stylistic/space-before-blocks": ["error", "always"],
    "@stylistic/spaced-comment": ["error", "always", { markers: ["/"] }],
    "@stylistic/padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "const", next: "*" },
      { blankLine: "always", prev: "*", next: "const" },
      { blankLine: "always", prev: "function", next: "*" },
      { blankLine: "always", prev: "*", next: "function" },
      { blankLine: "always", prev: "if", next: "*" },
      { blankLine: "always", prev: "*", next: "if" },
      { blankLine: "always", prev: "for", next: "*" },
      { blankLine: "always", prev: "*", next: "for" },
      { blankLine: "always", prev: "switch", next: "*" },
      { blankLine: "always", prev: "*", next: "switch" },
      { blankLine: "always", prev: "try", next: "*" },
      { blankLine: "always", prev: "*", next: "try" },
      { blankLine: "always", prev: "export", next: "*" },
      { blankLine: "always", prev: "*", next: "export" },
    ],
    "eslint-comments/disable-enable-pair": [
      "error",
      {
        allowWholeFile: true,
      },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: "React", // Pragma to use, default to "React"
      fragment: "Fragment", // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // It will default to "latest" and warn if missing, and to "detect" in the future
      flowVersion: "0.53", // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      { property: "freeze", object: "Object" },
      { property: "myFavoriteWrapper" },
      // for rules that check exact prop wrappers
      { property: "forbidExtraProps", exact: true },
    ],
    componentWrapperFunctions: [
      // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
      "observer", // `property`
      { property: "styled" }, // `object` is optional
      { property: "observer", object: "Mobx" },
      { property: "observer", object: "<pragma>" }, // sets `object` to whatever value `settings.react.pragma` is set to
    ],
    formComponents: [
      // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
      "CustomForm",
      { name: "Form", formAttribute: "endpoint" },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      { name: "Link", linkAttribute: "to" },
    ],
  },
};
