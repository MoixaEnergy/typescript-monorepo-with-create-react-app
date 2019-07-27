# Typescript monorepo (typescript project references)

## Dependencies:

- [pnpm](https://pnpm.js.org/): can be obtained through yarn on npm

## Bootstrap:

- `pnpm run workspace--install`

## When developing

Run global type checking with:

- `pnpm run workspace--start`

keep this running, since it is responsible for emitting package code.

Then start the development process for the project your are working on e.g.

- `pnpm run company--app`

See the top-level `package.json` for further examples.

## Troubleshooting

In case you would end up in a corrupted state please run:

- `pnpm run workspace--build`
