module.exports = {
  extends: '@mikojs/base',
  rules: {
    'flowtype/require-parameter-type': 'off',
    'flowtype/require-valid-file-annotation': 'off',
    'flowtype/require-return-type': 'off',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/check-tag-names': [
      'error',
      {
        definedTags: ['flow', 'jest-environment', 'react'],
      },
    ],
    'jsdoc/require-example': ['error', { exemptedBy: ['react'] }],
    'jsdoc/require-param': ['error', { exemptedBy: ['react'] }],
    'jsdoc/require-returns': ['error', { exemptedBy: ['react'] }],
  },
};
