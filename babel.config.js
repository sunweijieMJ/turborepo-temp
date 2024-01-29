module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { version: '2023-05' }],
      '@babel/plugin-proposal-do-expressions',
      '@babel/plugin-transform-class-properties',
      '@babel/plugin-transform-nullish-coalescing-operator',
      '@babel/plugin-transform-numeric-separator',
      '@babel/plugin-transform-optional-chaining',
      '@babel/plugin-transform-private-methods',
      '@babel/plugin-transform-private-property-in-object',
      [
        'formatjs',
        {
          idInterpolationPattern: '[folder]_[name]_[contenthash:8]',
          ast: true,
        },
      ],
    ],
  };
};
