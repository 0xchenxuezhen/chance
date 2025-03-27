# Chance

A lightweight probability and random utility library for JavaScript/TypeScript.

![npm](https://img.shields.io/npm/v/@0xchenxuezhen/chance)
![license](https://img.shields.io/npm/l/@0xchenxuezhen/chance)
![size](https://img.shields.io/bundlephobia/min/@0xchenxuezhen/chance)
![downloads](https://img.shields.io/npm/dm/@0xchenxuezhen/chance)

## Introduction

Chance is a minimalistic library designed to simplify working with probabilities, random values, and statistical operations in JavaScript/TypeScript applications. Developed by [0xchenxuezhen](https://github.com/0xchenxuezhen), this package provides essential tools for randomization and probability-based decision making.

## Features

- 🎲 Generate random numbers with various distributions (uniform, normal, etc.)
- 🎯 Probability-based decision functions
- 📊 Random selection from arrays/collections
- ⚖️ Weighted random choices with normalization
- 📈 Basic statistical operations (mean, median, mode)
- 🌱 Seeded random number generation
- 🛠 TypeScript support with full type definitions
- 🚫 Zero dependencies
- 📦 Small bundle size (<5KB minified)

## Installation

```bash
npm install @0xchenxuezhen/chance
# or
yarn add @0xchenxuezhen/chance
# or
pnpm add @0xchenxuezhen/chance
```

## Quick Start

```javascript
import { random, weightedChoice, chance, normal, seed } from '@0xchenxuezhen/chance';

// Set random seed for reproducible results
seed('my-seed');

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

// Normally distributed random number
const normalValue = normal(0, 1);
```

## API Reference

### Core Functions

| Function | Description |
|----------|-------------|
| `random(min: number, max: number): number` | Uniform random number between min and max (inclusive) |
| `chance(probability: number): boolean` | Returns true with given probability (0-1 range) |
| `choice<T>(items: T[]): T` | Random element from array |
| `weightedChoice<T>(items: { item: T, weight: number }[]): T` | Weighted random choice (auto-normalized) |
| `normal(mean?: number, stddev?: number): number` | Normally distributed random number |
| `seed(value: string \| number): void` | Set seed for reproducible sequences |

### Utility Functions

| Function | Description |
|----------|-------------|
| `shuffle<T>(array: T[]): T[]` | Shuffles array in place |
| `sample<T>(array: T[], count: number): T[]` | Samples multiple items without replacement |
| `randomString(length: number, charset?: string): string` | Generates random string |

## Examples

### Basic Usage
```javascript
import { random, chance } from '@0xchenxuezhen/chance';

// Random number between 10-20
const age = random(10, 20);

// 30% chance of success
if (chance(0.3)) {
  console.log('Success!');
}
```

### Advanced Usage
```javascript
import { seed, normal, weightedChoice } from '@0xchenxuezhen/chance';

// Reproducible results
seed(12345);

// Normally distributed values
const heights = Array(100).fill(0).map(() => normal(170, 10));

// Weighted random selection
const colors = weightedChoice([
  { item: 'red', weight: 20 },
  { item: 'blue', weight: 30 },
  { item: 'green', weight: 50 }
]);