# Folder Structure

- `apps/`: Contains all the applications that are developed.
  - `app/`: My personal website.
- `packages/`: Contains all the `packages` that are used in the `apps` or `packages`.
- `etc/`: Contains everything else grouped by `type`.
  - `runner/`: Contains `functions` that run an `pipeline` under `etc/scripts/pipelines/` inside `dagger` container.
  - `scripts/`
    - `utils/`: Contains utility modules for reuse in other scripts.
    - `actions/`: Contains the main scripts that perform small tasks should be able to run independently. Requires `tsx` to be installed
    - `pipelines/`: Contains the main scripts that run a series of `dagger functions`. Requires `dagger` && `tsx` to be installed.
