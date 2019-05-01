# @stoplight/markdown-viewer

<!-- BADGES -->

A Stoplight Markdown viewer React component

- Explore the components: [Storybook](https://stoplightio.github.io/markdown-viewer)
- View the changelog: [Releases](https://github.com/stoplightio/markdown-viewer/releases)

### Features

- Supports Stoplight markdown annotations
- MDAST-spec compliant
- Theme-able
- Renders json schema viewer for json_schema code blocks

### Installation

Supported in modern browsers.

```bash
# latest stable
yarn add @stoplight/markdown-viewer
```

### Usage

```jsx
import { MarkdownViewer, ThemeProvider } from "@stoplight/markdown-viewer";
import { dark } from "@stoplight/markdown-viewer/themes";

const markdown = `
### Features

- **Full** JSON Schema Draft 4 support, including `oneOf` and `anyOf` combiner properties
- Renders complicated nested objects to any depth
- Renders validation properties and markdown descriptions
- Theme-able
- Collapsible
`;

<ThemeProvider theme={dark}>
  <MarkdownViewer markdown={markdown} />
</ThemeProvider>
```

More examples can be find in the [Storybook stories](./src/__stories__/MarkdownViewer.tsx).

### Contributing

1. Clone repo.
2. Create / checkout `feature/{name}`, `chore/{name}`, or `fix/{name}` branch.
3. Install deps: `yarn`.
4. Make your changes.
5. Run tests: `yarn test.prod`.
6. Stage relevant files to git.
7. Commit: `yarn commit`. _NOTE: Commits that don't follow the [conventional](https://github.com/marionebl/commitlint/tree/master/%40commitlint/config-conventional) format will be rejected. `yarn commit` creates this format for you, or you can put it together manually and then do a regular `git commit`._
8. Push: `git push`.
9. Open PR targeting the `develop` branch.
