module.exports = {
  root: true,
  globals: {
    $: true
  },
  extends: ['@uyun/eslint-config-standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
