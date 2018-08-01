## Appium ESLint Shared Configuation

[![Greenkeeper badge](https://badges.greenkeeper.io/appium/eslint-config-appium.svg)](https://greenkeeper.io/)

This package works to provide [eslint](http://eslint.org/) [shared configuration](http://eslint.org/docs/developer-guide/shareable-configs) to replace the need for a local `.eslintrc` file.

It uses [babel-eslint](https://github.com/babel/babel-eslint) as a parser.

### Usage

Install the package

```
npm install -D eslint-config-appium
```

And then, in your `.eslintrc` file extend the configuration

```
{
  "extends": "appium"
}
```

If you are using [appium-gulp-plugins](https://www.npmjs.com/package/appium-gulp-plugins) you can then run

```
gulp eslint
```

### Peer Dependencies

This config requires the following packages be installed (as dev dependencies) in your project:

* [babel-eslint](https://www.npmjs.com/package/babel-eslint)
* [eslint](https://www.npmjs.com/package/eslint)
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
* [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha)
* [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
