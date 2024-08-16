# str-interpolator

A TypeScript utility function to replace placeholders in a string with values from an object, supporting both simple and nested object paths.

## Installation

Install the package via npm:

```bash
npm install str-interpolator
```

## Usage 

### Basic Example

Use the `strInterpolator` function to replace placeholders in a string with corresponding values from an object.

![Basic Example](https://raw.githubusercontent.com/ashishcumar/str-interpolator/main/readmeAssets/Basic-Example.png)

### Nested Object Example

The function supports nested objects, allowing you to replace placeholders with values deep within an object structure.

![Nested Object Example](https://raw.githubusercontent.com/ashishcumar/str-interpolator/main/readmeAssets/Nested-Object-Example.png)

### Function Signature

```
function strInterpolator<T extends Record<string, any>>(str: string, values: T): string;
```

### Parameters

- `str`: The string containing placeholders in the format `${key}` or `${nested.key}`.
- `values`: An object with keys matching the placeholders in the string.

### Returns

A new string with placeholders replaced by corresponding values from the `values` object.

### Features

- Simple placeholders: Replace placeholders like `${name}` with corresponding values from an object.
- Nested object support: Replace placeholders like `${(link unavailable)}` by accessing nested objects.
- TypeScript support: Fully typed for use in TypeScript projects.


### Check Out My Other Packages

Explore more useful packages by visiting [my npm profile](https://www.npmjs.com/~iashish.99). Made with ❤️ by Ashish