# Folder Structure

- `dagger`: Contains `functions` that run an `action` under `tools/scripts/actions/` inside `dagger` container.
- `etc/scripts/`
  - `utils/`: Contains utility modules for reuse in other scripts.
  - `actions/`: Contains the main scripts that perform small tasks should be able to run independently. Requires `tsx` to be installed
  - `pipelines/`: Contains the main scripts that run a series of `dagger functions`. Requires `dagger` && `tsx` to be installed.
