# CV

Online CV for Otman Maowed, a Frontend Developer based in Canada

## Installation

1. Make sure [node](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/) are installed on the system.

2. Consider installing the project recommended extensions for VS Code.

3. Install packages: `yarn install`

4. Start dev server: `yarn dev`

## Scripts

```bash
# Note these scripts have only been tested on UNIX systems

# starts the website on http://localhost:3000/
yarn dev

# compile code
yarn build

# starts the compiled code on http://localhost:3000/
yarn start

# find TypeScript Errors
yarn tsc

# Run eslint and stylelint on the project concurrently
yarn lint:all

# Format project based on eslint, stylelint, and prettier rule sets
yarn format:all
```

## Linting and Formatting

```bash
# Note these scripts have only been tested on UNIX systems

# Linting
# You can use VSCode ESLint, and StyleLint Extensions for automatic Linting
yarn lint:all

yarn eslint . --ext .js,.jsx,.ts,.tsx

yarn stylelint "styles/**/*.scss"

# auto formats according to the rules
# can enable auto format for Prettier via VSCode Extensions
yarn format:all

yarn eslint . --ext .js,.jsx,.ts,.tsx --fix

yarn prettier --write .

yarn stylelint "styles/**/*.scss" --fix
```
