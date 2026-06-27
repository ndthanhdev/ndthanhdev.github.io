---
name: repo-docs
description: >
  Repository documentation management. Use this skill whenever you need to
  work on the codebase — before making changes, find relevant docs first;
  after making changes, index new knowledge back into docs.
---

# repo-docs

Keeps the repository's documentation in sync with the codebase through two
complementary workflows: **Find Docs** (read before acting) and **Index Docs**
(write after acting).

## Docs Structure

Documentation lives in `docs/` at the repository root, split into four categories:

| Folder          | Purpose                                                  |
| --------------- | -------------------------------------------------------- |
| `concepts/`     | Domain concepts, mental models, and terminology          |
| `how-it-works/` | Architecture, internals, data flow, and design decisions |
| `how-tos/`      | Step-by-step guides for common tasks                     |
| `conventions/`  | Coding standards, naming rules, and patterns to follow   |

## Setup

Run the prepare script first. It creates any missing `docs/` folders and
ensures a documentation index exists at `skills/repo-docs/state/index.md`:

```bash
node skills/repo-docs/scripts/prepare.mjs
```

## Find Docs

**When**: Before making any codebase change, answering architecture questions,
or onboarding to an unfamiliar area.

Start from `skills/repo-docs/state/index.md`, then drill into the relevant
category under `docs/`. See [references/finding-docs.md](references/finding-docs.md)
for the full procedure.

## Index Docs

**When**: After a change worth documenting — a new concept, pattern,
architecture decision, or workflow.

Pick the matching category, prefer updating over duplicating, and update
`state/index.md` to reflect the docs you changed. See
[references/indexing-docs.md](references/indexing-docs.md) for the full procedure
and the doc template.
