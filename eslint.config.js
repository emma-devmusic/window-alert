const js = require("@eslint/js");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");
const prettierPlugin = require("eslint-plugin-prettier");
const prettierConfig = require("eslint-config-prettier");

module.exports = [
    {
        files: ["src/**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
                project: "./tsconfig.json",
            },
            globals: {
                console: "readonly",
                process: "readonly",
                __dirname: "readonly",
                __filename: "readonly",
                module: "readonly",
                require: "readonly",
                exports: "readonly",
                Buffer: "readonly",
                setTimeout: "readonly",
                clearTimeout: "readonly",
                setInterval: "readonly",
                clearInterval: "readonly",
                document: "readonly",
                window: "readonly",
                navigator: "readonly",
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...tsPlugin.configs.recommended.rules,
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...prettierConfig.rules,
            indent: ["error", 4, { SwitchCase: 1 }],
            "linebreak-style": ["error", "unix"],
            quotes: ["error", "double"],
            semi: ["error", "always"],
            "prettier/prettier": "error",
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_" },
            ],
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "prefer-const": "error",
            "no-var": "error",
            eqeqeq: ["error", "always"],
            curly: ["error", "all"],
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
];
