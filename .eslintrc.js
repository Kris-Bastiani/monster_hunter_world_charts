module.exports = {
	env: { browser: true },
	extends: [
		'airbnb-base',
		'plugin:react/recommended',
	],
	parserOptions: {
		ecmaFeatures: { 'jsx': true },
		ecmaVersion: 8
	},

	rules: {
		'no-confusing-arrow': 0,
		'arrow-parens': 0,
		'import/extensions': 0,
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'import/no-amd': 0,
		'import/no-named-as-default': 0,
		'import/no-named-as-default-member': 0,
		indent: ['error', 'tab'],
		'class-methods-use-this': 0,
		'no-mixed-operators': [
		'error',
		{
			groups: [
				['+', '-', '*', '/', '%', '**'],
				['&', '|', '^', '~', '<<', '>>', '>>>'],
				['==', '!=', '===', '!==', '>', '>=', '<', '<='],
				['&&', '||'],
				['in', 'instanceof'],
			],
		},
		],
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: [
					'acc', // for reduce accumulators
					'accumulator', // for reduce accumulators
					'e', // for e.returnvalue
					'element', // for allowing DOM manipulation
				],
			},
		],
		'no-tabs': 0,
		'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
		'no-unused-vars': ['error', { varsIgnorePattern: '^h$' }],
		'max-len': 0,
		'react/no-unknown-property': [1, { ignore: ['class'] }],
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 0,
	},
};
