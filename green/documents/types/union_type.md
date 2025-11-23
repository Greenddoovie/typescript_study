# Union Type

This makes a type that contains several types.
It is represented by `|` (pile symbol).

```typescript
function(a: string | number) {} // the a can receive the string or number type value.

type unionType = string | number
```

## Type Safe Union Usage

1. Declares the type with literal type
2. Make them as one union type
3. Add discriminant field which has same field name in each types
4. Use `switch` to discriminate the type using same field name.

```typescript
type IdleState = {
  status: "idle";
};

type LoadingState = {
  status: "loading";
};

type SuccessState = {
  status: "success";
  data: string;
};

type ErrorState = {
  status: "error";
  errorMessage: string;
};

type ApiState = IdleState | LoadingState | SuccessState | ErrorState;
```