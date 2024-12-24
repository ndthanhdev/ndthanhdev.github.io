// @ts-check

import eslint from "@eslint/js";
import eslintJsonc from "eslint-plugin-jsonc";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sortKeysFix from "eslint-plugin-sort-keys-fix";
import tsEslint from "typescript-eslint";

const Constants = {
	ignoreFiles: ["**/?(.)cache/", "**/public/", ".yarn/"],
	jsConfigFiles: ["eslint.config.js"],
	jsoncFiles: ["**/*.json?(c)"],
	tsEslintFiles: ["**/*.?(c|m)@(j|t)s?(x)"],
};

/**
 * @param {(string[] | undefined)} files
 * @param {string[]} [ignores]
 * @returns {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigArray}
 */
const withFiles = (configs, files = undefined, ignores = []) => {
	return configs.map((config) => ({
		...config,
		files,
		ignores,
	}));
};

/* eslint-disable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access, @typescript-eslint/ban-ts-comment */
export default tsEslint.config(
	{
		ignores: Constants.ignoreFiles,
	},
	eslint.configs.recommended,
	...withFiles(eslintJsonc.configs["flat/recommended-with-jsonc"], [
		...Constants.jsoncFiles,
	]),
	...withFiles(
		tsEslint.configs.strictTypeChecked,
		Constants.tsEslintFiles,
		Constants.jsConfigFiles,
	),
	...withFiles(tsEslint.configs.stylisticTypeChecked, Constants.tsEslintFiles),
	{
		files: Constants.tsEslintFiles,
		ignores: Constants.ignoreFiles,
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				project: [
					"./tsconfig.eslint.json",
					"./apps/*/tsconfig.json",
					"./etc/*/tsconfig.json",
					"./packages/*/tsconfig.json",
					"./app/tsconfig.json",
				],
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			react,
			"react-hooks": reactHooks,
			"simple-import-sort": simpleImportSort,
			"sort-keys-fix": sortKeysFix,
		},
		// @ts-expect-error
		rules: {
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^React$",
				},
			],
			"@typescript-eslint/restrict-template-expressions": [
				"error",
				{
					allowNullish: true,
					allowNumber: true,
				},
			],
			"array-element-newline": ["error", "always"],
			"react-hooks/exhaustive-deps": "error",
			"react/no-unknown-property": ["error", { ignore: ["css"] }],
			"react/prop-types": "off",
			"react/react-in-jsx-scope": "off",
			"simple-import-sort/exports": "error",
			"simple-import-sort/imports": "error",
			"sort-keys-fix/sort-keys-fix": "error",
		},

		settings: {
			react: {
				version: "detect",
			},
		},
	},
	eslintPluginPrettierRecommended,
);
