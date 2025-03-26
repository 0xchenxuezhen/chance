# 0xchenxuezhen/chance

```markdown
# Chance

A lightweight probability and random utility library for JavaScript/TypeScript.

## Introduction

Chance is a minimalistic library designed to simplify working with probabilities, random values, and statistical operations in JavaScript/TypeScript applications. Developed by [0xchenxuezhen](https://github.com/0xchenxuezhen), this package provides essential tools for randomization and probability-based decision making.

## Features

- Generate random numbers with various distributions
- Probability-based decision functions
- Random selection from arrays/collections
- Weighted random choices
- Basic statistical operations
- TypeScript support included

## Installation

Install via npm:

```bash
npm install @0xchenxuezhen/chance
```

Or via yarn:

```bash
yarn add @0xchenxuezhen/chance
```

## Basic Usage

```javascript
import { random, weightedChoice, chance } from '@0xchenxuezhen/chance';

// Generate random number between 1-100
const num = random(1, 100);

// 60% chance of returning true
const willHappen = chance(0.6);

// Weighted random choice
const prize = weightedChoice([
  { item: 'Gold', weight: 5 },
  { item: 'Silver', weight: 15 },
  { item: 'Bronze', weight: 80 }
]);
```

## API Reference

### Core Functions

- `random(min: number, max: number): number`  
  Returns a random number between min and max (inclusive)

- `chance(probability: number): boolean`  
  Returns true with the given probability (0-1)

- `choice<T>(items: T[]): T`  
  Returns a random element from the array

- `weightedChoice<T>(items: { item: T, weight: number }[]): T`  
  Returns an item based on weighted probability

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT © [0xchenxuezhen](https://github.com/0xchenxuezhen)
```

## 更新

feature: Implement feature improvements - 2025-03-26

```markdown
# Pull Request Description

## Overview
This PR introduces functional improvements to enhance the overall performance and user experience of the repository. The changes aim to address specific pain points and streamline existing functionalities.

## Changes
- Implemented new feature enhancements to improve functionality
- Optimized existing code for better performance
- Updated relevant documentation to reflect the changes
- Added new utility methods to support the improved features

## Testing
To verify the changes:
1. Clone the repository and checkout the `feature/update-20250326-123704` branch
2. Run the test suite using `npm test` (or the appropriate test command for the project)
3. Manually test the new features in a development environment
4. Verify that all existing functionality remains intact

## Related Issues
- N/A (or list any related issue numbers if applicable)
```