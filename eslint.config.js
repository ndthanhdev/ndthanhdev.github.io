// @ts-check

import eslint from "@eslint/js";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

/* eslint-disable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */
export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
				project: [
					"./tsconfig.eslint.json",
					"./scripts/tsconfig.json",
					"./app/tsconfig.json",
				],
			},
		},
		ignores: ["**/node_modules/", "**/.cache/", "**/public/"],
		plugins: {
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					// _ or React
					varsIgnorePattern: "^(_|React)",
				},
			],
		},
	},
);
