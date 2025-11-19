# Typescript Compiler Initialization

The initialization is done via `tsc --init` command.
It's not required process but strongly recommended process when managing the large and complex project.

You must have met some situations like:
- Which files should be compiled (e.g. include/exclude rules)
- Where compiled JavaScript should go (e.g. outDir)
- What JavaScript version to target (ES5, ES6, ES2020, etc.)
- Whether to allow implicit any types
- Whether to check for unused variables or unreachable code
- Module system to use (commonjs, esnext, etc.)

In those situations, the tsc file can help you.
Options are [here][tsc option docs]

[tsc option docs]: https://www.typescriptlang.org/tsconfig/