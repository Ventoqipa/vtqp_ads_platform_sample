# ADR-002: Keep advertising providers behind an abstraction

## Status
Accepted.

## Context
The product must support different advertising providers without coupling the dashboard to a vendor.

## Decision
Provider-specific behavior remains behind a stable application/domain boundary. Trainees design this boundary; the starter does not provide its final interface or implementations.

## Consequences
Mock providers can be replaced, pages avoid vendor knowledge, and Adapter/Strategy are practiced for a concrete reason.
