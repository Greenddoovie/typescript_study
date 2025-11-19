# Nullish Coalescing Operator (??)

“If the first value is nullish (null or undefined),
then coalesce (merge) it with the second value.”

## Nullish?

It describe the value is null or undefined.
- null: There is intentionally no value
- undefined: The value has never set

## Coalescing

In programming, merging two possible values into one final result.

## Example

```typescript
let username = null;
let displayName = username ?? "Guest";
```

## Why this is needed?

The Typescript is a superset of Javascript.
This function is required in Javascript because we avoid the situation that a value is null or undefined in runtime.
In those situation, JS can return the default value.

### How can it replace the logical OR (||)?

logical OR: If the first value is falsy, use seconde value.
> falsy: the value that is treated to false in JS; false, 0, "", null, undefined, NaN


> The condition is slightly different to nullish coalescing operator.

It means it returns second value even though there is a value; false, 0, and empty string.