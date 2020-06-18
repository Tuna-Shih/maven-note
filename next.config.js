// @flow
/* eslint-disable flowtype/require-return-type */
/* eslint-disable flowtype/require-parameter-type */
/* eslint-disable arrow-parens */

const withLess = require('@zeit/next-less');
const emptyFunction = require('fbjs/lib/emptyFunction');

/* ::
type ruleType = {
  test: RegExp,
  use: $ReadOnlyArray<{
    loader: string,
    options: {
      modules: boolean,
    },
  }>,
};
type configType = {
  module: {
    rules: $ReadOnlyArray<ruleType>,
  },
};
*/

// $FlowFixMe Fix server side rendering with less
if (typeof require !== 'undefined') require.extensions['.less'] = emptyFunction;

module.exports = withLess({
  cssModules: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  dir: 'src',
  webpack: (config /* : configType */) /* : configType */ => {
    const rule =
      config.module.rules.find(
        ({ test } /* : ruleType */) => test && test.test('.less'),
      ) ||
      (() => {
        throw new Error('can not find `less` rule');
      })();
    const cssLoader =
      rule.use.find((
        { loader } /* : $ElementType<$PropertyType<ruleType, 'use'>, number> */,
      ) => /css-loader/.test(loader)) ||
      (() => {
        throw new Error('can not find `css` loader');
      })();
    const lessLoader =
      rule.use.find((
        { loader } /* : $ElementType<$PropertyType<ruleType, 'use'>, number> */,
      ) => /less-loader/.test(loader)) ||
      (() => {
        throw new Error('can not find `less` loader');
      })();

    config.module.rules = [
      ...config.module.rules.filter(
        (moduleRule /* : ruleType */) => moduleRule !== rule,
      ),
      {
        ...rule,
        exclude: /node_modules/,
        use: [
          ...rule.use.filter(
            (
              ruleLoader /* : $ElementType<$PropertyType<ruleType, 'use'>, number> */,
            ) => ruleLoader !== cssLoader && ruleLoader !== lessLoader,
          ),
          {
            ...cssLoader,
            options: {
              ...cssLoader.options,
              modules: true,
            },
          },
          lessLoader,
        ],
      },
      {
        ...rule,
        include: /node_modules/,
        use: [
          ...rule.use.filter(
            (
              ruleLoader /* : $ElementType<$PropertyType<ruleType, 'use'>, number> */,
            ) => ruleLoader !== cssLoader && ruleLoader !== lessLoader,
          ),
          {
            ...cssLoader,
            options: {
              ...cssLoader.options,
              modules: false,
            },
          },
          lessLoader,
        ],
      },
    ];

    return config;
  },
});
