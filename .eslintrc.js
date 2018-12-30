module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/flowtype', 'prettier/react'],
  rules: {},
  globals: {
    window: true,
    document: true,
    location: true,
    sessionStorage: true,
    localStorage: true,
    expect: true,
    beforeEach: true,
    jest: true,
    google: true
  }
}
