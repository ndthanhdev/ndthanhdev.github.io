// @ts-check

import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

/* eslint-disable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access, @typescript-eslint/ban-ts-comment */
export default tseslint.config(
	eslint.configs.recommended,
	eslintPluginPrettierRecommended,
	...tseslint.configs.recommendedTypeChecked,
	{
		ignores: ["**/.cache/", "app/public/", ".yarn/"],
	},
	{
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
				ecmaFeatures: {
					jsx: true,
				},
				project: [
					"./tsconfig.eslint.json",
					"./scripts/tsconfig.json",
					"./app/tsconfig.json",
				],
			},
		},
		settings: {
			react: { version: "18.2.0" },
		},
		plugins: {
			"simple-import-sort": simpleImportSort,
			react,
			"react-hooks": reactHooks,
		},
		// @ts-expect-error
		rules: {
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			"react-hooks/exhaustive-deps": "error",
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					varsIgnorePattern: "(^_|^React$)",
				},
			],
			"react/no-unknown-property": ["error", { ignore: ["css"] }],
			"react/prop-types": "off",
		},
	},
);
