/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-10-22 14:00:23
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-10-22 14:01:31
 */
module.exports = {
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  extends: ['react-app', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off'
  }
}
