# Type coercion

> coercion: the practice of persuading someone to do something by using force or threats.

## Meaning

Type coercion: Coverts automatically one data's original type to the comparison type.

| Concept               | Description                                                                                   |
| --------------------- | --------------------------------------------------------------------------------------------- |
| **Type Coercion**     | Automatic conversion of one type to another (e.g., `"5"` → `5`)                               |
| **Implicit Coercion** | Done automatically by JavaScript (can cause bugs)                                             |
| **Explicit Coercion** | Done manually using constructors or functions                                                 |
| **TypeScript’s Role** | Warns about unsafe coercions during compile time, but runtime coercion still follows JS rules |


## When

It happens on operators except for the strictly equal to (===) or the strictly not equal to (!==) operators.

## Example

```typescript
a = 1;
b = "2";
c = a+b // "12" 

console.log(0 == false);  // true (coercion)
console.log(0 === false); // false (no coercion)
```

