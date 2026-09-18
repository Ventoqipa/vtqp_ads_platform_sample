# Architecture

This starter establishes boundaries without solving the challenge.

## Structure

```text
src/
├── app/        # Composition, routing and shell
├── core/       # Truly cross-cutting technical contracts
├── features/   # Product capabilities
├── shared/     # Reusable presentation building blocks
└── main.tsx
```

Required features are dashboard, providers, placements and events. Introduce `domain/`, `application/`, `infrastructure/` and `presentation/` inside a feature only when responsibilities justify them. Do not create empty layers merely to match a diagram.

## Dependency direction

```text
Presentation
     |
     v
Application / Domain
     ^
     |
Infrastructure
```

## Provider boundary

Different mock advertising providers must be interchangeable. Ask: **If Provider A is replaced by Provider B, how much application code must change?** Keep that change localized.

The repository intentionally does not provide the final provider interface, Adapter, Strategy or factory. Designing those pieces is part of the exercise.

## Events

Required mock event types: Requested, Loaded, Impression, Clicked and Failed. Keep the first implementation simple. Do not build an event bus just to demonstrate a pattern.

## Rules

1. No real advertising SDKs, secrets or backend.
2. No provider-specific conditionals spread across pages.
3. No business datasets embedded directly in JSX.
4. No unnecessary generic abstractions.
5. TypeScript strict mode remains enabled.
6. Technical content is written in English.

A reviewer should be able to find where provider contracts and concrete mocks live, where the active provider is selected, where placements/events are modeled, and how pages obtain displayed information.
