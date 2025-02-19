# String UID Generator

A lightweight TypeScript utility for generating deterministic unique identifiers from strings.

## Overview

The `getStringUid` function provides a simple way to generate numeric unique identifiers from text strings. The function is deterministic, meaning it will always return the same number for the same input string.

## Installation

```bash
# deno add jsr:@online/get-string-uid
```

## Usage

```typescript
import { getStringUid } from '@online/get-string-uid';

// Generate a UID for a string
const uid = getStringUid('Hello, World!');
console.log(uid); // Will always return the same number for 'Hello, World!'
```

## API Reference

### getStringUid(text: string): number

Generates a unique identifier for a given string based on its content.

#### Parameters

- `text` (string): The input string to generate a UID for.

#### Returns

- `number`: A unique identifier for the given string.

#### Features

- Deterministic output (same input always produces the same output)
- Works with any string input
- Lightweight implementation
- No external dependencies

## Important Notes

⚠️ **Security Notice**: This function is not cryptographically secure and should not be used for:
- Cryptographic purposes
- Security-sensitive applications
- Hash generation where collision resistance is required

## Technical Details

The function works by:
1. Iterating through each character in the input string
2. Converting characters to their ASCII codes
3. Performing arithmetic operations based on character position
4. Accumulating the results into a final number

## License

This code is available under the MIT License.

## Contributing

Feel free to submit issues and enhancement requests!