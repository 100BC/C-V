# CV

Online CV for Otman Maowed, a Front-End Developer based in Canada

## Installation

1. Make sure [node](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/) are installed on the system.

2. Consider installing the project recommended extensions for VS Code.

3. Install packages: `yarn install`

4. Start dev server: `yarn dev`

## Scripts

Open website on http://localhost:3000/

```
yarn dev
```

Open website on http://localhost:{PORT}/

```
yarn dev -p {PORT}
```

compile code

```
yarn build
```

start built code

```
yarn start
```

Run eslint and stylelint on the project concurrently

```
yarn lint:all
```

Lint only styles

```
yarn lint:styles
```

Lint only the code

```
yarn lint:code
```

Format project based on eslint, stylelint, and prettier rule sets

```
yarn format:all
```

Format only the styles

```
yarn format:styles
```

Format only the code

```
yarn format:code
```
