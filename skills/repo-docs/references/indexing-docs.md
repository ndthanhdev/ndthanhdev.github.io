# Indexing Docs

Detailed procedure for writing new knowledge back into documentation after a
change. Referenced by the "Index Docs" section of `SKILL.md`.

## Steps

1. Pick the category for the new knowledge:
   - **New domain concept or term?** → `docs/concepts/`
   - **Architecture decision, internal mechanism, or data flow?** → `docs/how-it-works/`
   - **Repeatable procedure or workflow?** → `docs/how-tos/`
   - **New coding pattern or convention established?** → `docs/conventions/`
2. Prefer updating an existing doc over creating a duplicate.
3. Write or update the doc in clear, focused markdown (see template below):
   - Use a descriptive filename (e.g., `state-management.md`, `deploy-to-prod.md`).
   - One topic per file, starting with a `# Title` heading.
   - Link to source files using relative paths where helpful.
4. If the change invalidates existing docs, update or remove them.
5. Update `skills/repo-docs/state/index.md` to list any doc you added, renamed,
   or removed, so Find Docs stays accurate.

## Doc Template

```markdown
# [Title]

Brief summary of what this document covers.

## Details

The main content goes here.

## Related

- [Link to related source files or other docs]
```
