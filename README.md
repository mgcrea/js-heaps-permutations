# Heap's Permutations

<!-- markdownlint-disable MD033 -->
<p align="center">
  <a href="https://www.npmjs.com/package/@mgcrea/heaps-permutations">
    <img src="https://img.shields.io/npm/v/@mgcrea/heaps-permutations.svg?style=for-the-badge" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@mgcrea/heaps-permutations">
    <img src="https://img.shields.io/npm/dt/@mgcrea/heaps-permutations.svg?style=for-the-badge" alt="npm total downloads" />
  </a>
  <a href="https://www.npmjs.com/package/@mgcrea/heaps-permutations">
    <img src="https://img.shields.io/npm/dm/@mgcrea/heaps-permutations.svg?style=for-the-badge" alt="npm monthly downloads" />
  </a>
  <a href="https://www.npmjs.com/package/@mgcrea/heaps-permutations">
    <img src="https://img.shields.io/npm/l/@mgcrea/heaps-permutations.svg?style=for-the-badge" alt="npm license" />
  </a>
  <br />
  <a href="https://github.com/mgcrea/js-heaps-permutations/actions/workflows/main.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/mgcrea/js-heaps-permutations/main.yml?style=for-the-badge&branch=master" alt="build status" />
  </a>
  <a href="https://depfu.com/github/mgcrea/js-heaps-permutations">
    <img src="https://img.shields.io/depfu/dependencies/github/mgcrea/js-heaps-permutations?style=for-the-badge" alt="dependencies status" />
  </a>
</p>
<!-- markdownlint-enable MD037 -->

## Features

This project provides an efficient TypeScript implementation of [Heap's algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm) to generate all permutations of a given array. The implementation works with arrays of different data types and handles edge cases like empty arrays.

- Built with [TypeScript](https://www.typescriptlang.org/) for static type checking with exported types along the library.

## Installation

```bash
npm install @mgcrea/heaps-permutations --save
# or
pnpm add @mgcrea/heaps-permutations
```

## Usage

```typescript
import { heapsPermutations } from "@mgcrea/heaps-permutations";

const inputArray = [1, 2, 3];
const result = heapsPermutations(inputArray);
console.log(result);
```

## Testing

This project uses the [Vitest testing framework](https://vitest.dev) for unit tests.

To run the tests, execute the following command:

```bash
npx vitest
```

## Authors

- [Olivier Louvignes](https://github.com/mgcrea) <<olivier@mgcrea.io>>
- [ChatGPT 4.0](https://chat.openai.com)

## License

```txt
The MIT License

Copyright (c) 2023 Olivier Louvignes <olivier@mgcrea.io>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
