# What is TypeScript

TypeScript is a superset of JavaScript that helps developers catch errors early, improve code readability, and enhance maintainability.

To provide these benefits, it introduces static typing, called 정적 타이핑 in Korean.

### Static Typing

TypeScript uses static typing, meaning that the compiler checks variable and function types before runtime.
Developers can explicitly declare types or let TypeScript infer them based on the assigned values or usage context.
This helps catch type-related errors early and improves code reliability.

Essential keywords: compiler (tsc), type inference, type checking.

### What Does It Mean That TypeScript Has a Compiler?

TypeScript has its own compiler (tsc), which takes TypeScript code as input and outputs plain JavaScript.
This allows developers to use advanced TypeScript features while still running the code anywhere JavaScript runs.

## Flexibility of TypeScript

TypeScript can be used on both the client side (browser) and the server side (Node.js), making it a powerful tool for full-stack development.

## How It Works

Create a TypeScript file (.ts).

Compile it using the TypeScript compiler (tsc).

Run the generated JavaScript file in an HTML page or Node.js environment.

## Limitations of TypeScript

Despite its advantages, TypeScript has some limitations:

- Compilation Overhead: Must be compiled into JavaScript before execution.
- Learning Curve: Developers need to learn types, generics, and advanced concepts.
- Configuration Complexity: Large projects may require detailed tsconfig.json setup.
- Extra Build Step: Adds a slower feedback loop compared to plain JavaScript.