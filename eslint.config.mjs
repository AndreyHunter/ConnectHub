import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    pluginReactConfig,
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            indent: ['error', 4, {"switchCase": 0}],
            'comma-style': ['error', 'last'],
            'comma-spacing': ['error', { before: false, after: true }],
            'no-unused-vars': 'warn',
            'no-extra-semi': 'error',
            'no-unreachable': 'error',
            'no-unsafe-finally': 'error',
        },
    },
];
