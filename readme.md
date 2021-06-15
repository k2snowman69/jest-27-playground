# Playground to test jest 27 ESM support

This project is to help test jest 27 esm support between libraries, react components and end consuming modules to make sure that the imports and exports work as expected.

The ultimate goal is to make sure that the end-\* projects are able to consume commonjs and esm modules and for the lib-\_ and react-\* to be examples of how to write shareable components/libraries that can be consumed by both.

The naming of folders can be considered a matrix:

- end-\* - These projects are consuming all other projects and running tests via jest across them
- lib-\* - These projects are producing utility functions to be consumed by other projects
- react-\* - These projects are producing react components that would be consumed by other projects
- \*-common-js - These projects output commonjs
- \*-module - These projects output module

Node version: v14.17.0

# Reproduction

1. Run `make install` which runs npm install in all directories
2. Run `make test` which runs npm run test in all directories

Expected: All projects to run tests successfully
Actual: All but `end-module` which represents a ES Module project that includes both commonjs and ES modules passes
