module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  },
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    browser: true,
    es6: true
  }
};
