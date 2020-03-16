module.exports = {
	plugins: ['stylelint-scss'],
	extends: [
		'stylelint-config-standard',
		'stylelint-config-rational-order',
		'stylelint-prettier/recommended'
	],
	rules: {
		'max-line-length': null,
		'at-rule-no-unknown': null
	}
};
