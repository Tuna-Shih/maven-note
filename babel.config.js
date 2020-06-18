// @flow
/* eslint-disable flowtype/require-return-type */
/* eslint-disable flowtype/require-parameter-type */

module.exports = {
  presets: [
    [
      '@mikojs/base',
      {
        '@mikojs/transform-flow': {
          ignore: /node_modules|src/,
        },
      },
    ],
    'next/babel',
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'antd',
        style: true,
      },
    ],
  ],
};
