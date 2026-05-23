# Frontend Practice Lab

![Tests](https://github.com/YOUR_USERNAME/frontend-practice-lab/actions/workflows/test.yml/badge.svg)

A daily frontend engineering practice repo focused on building technical fluency through tested coding exercises, implementation notes, and consistent iteration.
### Purpose

This repo tracks my daily frontend engineering practice across:

JavaScript fundamentals
Data transformation
Async control flow
DOM and browser APIs
React UI implementation
Accessibility patterns
Testing and debugging
Frontend architecture notes

Each practice problem is meant to include:

solution file
test file
notes file

This creates proof of both implementation ability and learning process.

Tech Stack
Vite
React
Vitest
Testing Library
GitHub Actions

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm dev
```

Run all tests once:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test:watch
```

Build the app:

```bash
npm build
```

---

## Daily Practice Rule

Minimum daily requirement:

```txt
30 minutes
1 meaningful change
1 commit
```

A valid daily commit can be:

- implementing a solution
- adding tests
- fixing a bug
- rewriting a previous solution from memory
- documenting a mistake
- adding edge cases
- improving naming or structure
- writing a pattern note

The daily goal is consistency, not perfection.

---

## Problem Folder Format

Each problem should follow this structure:

```txt
problem-name/
  solution.js
  solution.test.js
  notes.md
```

For React components:

```txt
component-name/
  Component.jsx
  Component.test.jsx
  notes.md
```

Each `notes.md` should include:

```md
# Problem Name

## Task

Brief description of the problem.

## What I got right

-

## What broke / confused me

-

## Rule learned

-

## Next rep

-
```

---

## Testing Standard

Each completed problem should have at least three tests:

```txt
1 normal case
1 edge case
1 failure or tricky case
```

Example:

```txt
groupBy
- groups values by callback result
- returns empty object for empty array
- handles object values
```

Tests are run locally with:

```bash
npm test
```

And automatically in GitHub Actions on every push and pull request.

---

## CI / GitHub Actions

This repo uses GitHub Actions to run the test suite automatically.

Workflow:

```txt
push code
↓
GitHub Actions installs dependencies
↓
tests run
↓
commit receives pass/fail status
```

A green check means the current practice code passes the test suite.

---

## Weekly Review

At the end of each week, create a review file:

```txt
weekly-reviews/week-01.md
```

Template:

```md
# Week 1 Review

## Commits completed

-

## Problems practiced

-

## Strongest improvement

-

## Repeated mistake

-

## Pattern I understand better now

-

## Next week's focus

-
```