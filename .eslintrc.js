// @flow

module.exports = {
  extends: '@mikojs/base',
  rules: {
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
