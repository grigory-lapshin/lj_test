module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    strict: 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [1],
  },
  env: {
    es6: true,
  },
};
