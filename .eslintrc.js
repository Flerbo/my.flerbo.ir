module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: "babel-eslint",
		ecmaVersion: 8,
		sourceType: "module"
	},
	extends: [
		// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
		// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
		"standard",
		"plugin:vue/recommended"
	],
	// required to lint *.vue files
	plugins: [
		"vue"
	],
	// add your custom rules here
	rules: {
		"indent": [
			"error",
			"tab"
		],
		"vue/max-attributes-per-line": 0,
		"vue/html-indent": [
			"error",
			4
		],
		"semi": [
			"error",
			"always"
		],
		"globals": {
			"$": true
		},
		"space-before-function-paren": 0,
		"indent": [
			"error",
			4
		],
		"vue/attributes-order": 0,
		"no-debugger": "error",
		"object-curly-spacing": [
			"error",
			"always"
		],
		"import/newline-after-import": [
			"error",
			{
				"count": 1
			}
		],
		"import/imports-first": [
			"error",
			"absolute-first"
		],
		"comma-dangle": [
			"error",
			{
				"arrays": "always-multiline",
				"objects": "always-multiline",
				"imports": "always-multiline",
				"exports": "always-multiline",
				"functions": "ignore"
			}
		],
	}
}
