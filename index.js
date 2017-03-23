module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true
    },
  },
  env: {
    node: true,
    mocha: true,
    es6: true
  },
  plugins: [
    "import",
    "mocha",
    "promise"
  ],
  rules: {
    semi: [2, 'always'],
    radix: [2, 'always'],
    'dot-notation': 2,
    eqeqeq: [2, 'smart'],
    'brace-style': [2, '1tbs', {allowSingleLine: true}],
    indent: [2, 2, {VariableDeclarator: {var: 2, let: 2, const: 3}, SwitchCase: 1}],
    'comma-dangle': 0,
    'no-empty': 0,
    'object-shorthand': 2,
    // 'arrow-parens': 2, // TODO: fix when they figure out async functions
    'import/export': 2,
    'import/no-unresolved': 2,
    'import/no-duplicates': 2,
    'mocha/no-exclusive-tests': 2,
    "promise/no-return-wrap": 1,
    "promise/param-names": 1,
    "promise/catch-or-return": 1,
    "promise/no-native": 1,
    "promise/prefer-await-to-then": 1,
    "promise/prefer-await-to-callbacks": 1,
    // "require-await": 2, // TODO: update when we have time to get eslint upgraded throughout
    "no-var": 2,
    curly: [2, "all"],

    // enforce spacing
    "arrow-spacing": 2,
    "keyword-spacing": 2,
    "comma-spacing": [2, {
      before: false,
      after: true
    }],
    "array-bracket-spacing": 2,
    "no-trailing-spaces": 2,
    "no-whitespace-before-property": 2,
    "space-in-parens": [2, "never"],
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, "always"],
    "space-unary-ops": [2, {
      words: true,
      nonwords: false,
    }],
  },
  extends: [
    'eslint:recommended'
  ]
}
