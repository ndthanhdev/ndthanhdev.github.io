# `/scripts`

- `scripts/`
  - `utils/`: Contains utility modules for reuse in other scripts.
  - `actions/`: Contains the main scripts that perform small tasks should be able to run independently.
  - `pipelines/`: Contains the main scripts that run a series of `actions` inside `dagger`. They only require `dagger` && `tsx` to be installed.
