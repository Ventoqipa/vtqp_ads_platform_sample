# Contributing

All code, identifiers, comments, documentation, branches, commits and Pull Requests are written in English.

## Workflow
1. Read the challenge documentation.
2. Move the Trello card to In Progress.
3. Create a focused branch.
4. Implement a small coherent change.
5. Run local checks.
6. Review your own diff.
7. Open a Pull Request.
8. Ask your teammate for review.
9. Address review comments.

Branch examples: `feature/providers`, `feature/placements`, `feature/events`, `test/providers`, `fix/dashboard-metrics`.

Before a PR run:
```bash
npm run lint
npm run test
npm run build
```

Explain what was implemented, relevant architecture decisions, how to test it and known limitations. Do not mix unrelated changes.
