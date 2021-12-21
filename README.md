# Vue 3 + Typescript + Vite (+ Electron + Eslint + Prettier)

This template is based off the default vite template for Vue 3 and Typescript. This has been further
configured to work with Electron (16) with linting and formatting by ESLint and Prettier.

## Usage

Take a look at the scripts defined in `package.json`.

### Development:

1. Run `pnpm vite:dev` to start the vite development server.
2. Run `pnpm electron:watch` to watch and compile the `src/main` code.
3. Run `pnpm electron:dev` to start the development electron instance using the output from above.

## Original Vite README

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

### Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
