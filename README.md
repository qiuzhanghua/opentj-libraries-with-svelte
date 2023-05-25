# OpenTJ Svelte Libraries

This is an opentj svelte starter.

## Using this as a template

Run the following command:

```sh
pnpx create-turbo@latest -e https://github.com/qiuzhanghua/opentj-libraries-with-svelte
```

## How to architecture it

1. Create a new repo from with-svelte

```bash
pnpx create-turbo@latest -e with-svelte opentj-libraries-with-svelte
# choose "pnpm" for "Which package manager do you want to use?"
cd opentj-libraries-with-svelte
pnpm up
```

2. Remove unused projects

```bash
rm -rf apps/docs
rm -rf apps/web
```

3. Add new projects

```bash
cd apps
pnpm create svelte@latest docs
# choose "Library project" for "Which Svelte app template?"
# choose "Yes, using TypeScript syntax" for "Add type checking with TypeScript?"
# choose "Add ESLint for code linting" and "Add Prettier for code formatting" for "Select additional options"
cd docs
pnpm dlx storybook@latest init
# choose "Y" for "Would you like to install it?"
pnpm add -D @storybook/global
cd ..
cd ..
pnpm up -Lri
pnpm add -D -w rimraf
```

4. Modify some files

...
