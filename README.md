# VTQP Ads Platform Sample

Architecture-first starter for **VTQP Technical Lab — Challenge 02**.

This repository provides the environment, boundaries, conventions, documentation and UI shell. **It does not provide the solution to the challenge.**

> Evaluation is not based on how much code you write. You should be able to explain how the solution works, why responsibilities are separated, and how an advertising provider can be replaced.

## Challenge

Build a small advertising management dashboard using mock data. The required areas are **Dashboard, Providers, Placements and Events**. The exercise is completed **as a team**.

## Stack

React · TypeScript · Vite · React Router · Vitest · Testing Library · ESLint

## Start here

1. [Architecture](docs/architecture/ARCHITECTURE.md)
2. [ADR-001: Feature-first structure](docs/architecture/decisions/ADR-001-feature-first-structure.md)
3. [ADR-002: Provider abstraction boundary](docs/architecture/decisions/ADR-002-provider-abstraction-boundary.md)
4. [References](docs/REFERENCES.md)
5. [Contributing](CONTRIBUTING.md)

## Structure

```text
src/
├── app/
├── core/
├── features/
│   ├── dashboard/
│   ├── providers/
│   ├── placements/
│   └── events/
├── shared/
└── main.tsx
```

The starter intentionally does **not** implement Adapter, Strategy, the final provider contract, concrete providers or the challenge data.

Expected conceptual direction:

```text
Page
  ↓
Feature state / hook
  ↓
Application action
  ↓
Provider abstraction
  ↓
Concrete mock provider
```

## Rules

- No real advertising SDK, credentials or backend.
- Do not hardcode business datasets inside React components.
- Keep provider-specific behavior behind a boundary.
- Implement at least two interchangeable mock providers.
- Apply Adapter and Strategy deliberately and explain why.
- Factory is optional.
- Avoid generic dumping grounds such as `utils.ts`, `helpers.ts` or `manager.ts`.
- Keep TypeScript strict.
- Do not add a global state library unless you can justify it.

## Language

All source code, identifiers, comments, technical documentation, branches, commits and Pull Requests must be written in **English**.

## Run

```bash
npm install
npm run dev
npm run lint
npm run test
npm run build
```

## Expected final delivery

A Pull Request containing the four functional areas, mock metrics/data, provider selection, placements, lifecycle events, a common provider abstraction, at least two mock provider implementations, Adapter + Strategy, basic tests and updated documentation. All checks must pass.

# VTQP Ads Platform

An ad platform dashboard built with React, TypeScript, and Vite designed to simulate ad management, provider integration, strategy selection, and real-time event tracking.

## 🚀 Features

- **Dynamic Navigation Shell:** Responsive sidebar and layout with accessible semantic HTML and ARIA labels.
- **Provider Management:** Toggle between advertising providers (Google AdMob, Meta Audience Network) with live status updates.
- **Ad Placement Simulation:** Interactive trigger controls to simulate Ad Requests, Impressions, Clicks, and Failures across different ad placements.
- **Real-Time Analytics & Logs:** Live Dashboard displaying dynamic metrics (Requests, Impressions, Clicks, Fill Rate) and chronological event logging.
- **Decoupled Architecture:** Built on top of a centralized `AdsContext` and custom hooks (`useAds`) using Strategy and Adapter patterns for ad domain logic.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd vtqp_ads_platform_sample

2. Install Dependencies
```bash
npm install
```

3. Start the Development Server
```bash
npm run dev
```

4. Open in Browser

Open your browser at `http://localhost:5173`.

## 🧪 Available Scripts

- `npm run dev` - Starts the Vite development server.
- `npm run build` - Builds the application for production.
- `npm run lint` - Runs ESLint to check for code quality and style issues.
- `npm run test` - Executes the unit test suite.

## 🏗️ Project Structure

```
src/
├── ads/                 # Core domain interfaces, adapters, strategies & context
├── app/                 # Application shell, layout, and router configuration
├── features/            # Feature-based presentation modules (Dashboard, Providers, Placements, Events)
└── shared/               # Reusable UI components and global styles
```

## 🛡️ License

This project is part of the VTQP Ads Platform challenge.