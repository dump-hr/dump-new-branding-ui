# @dump-hr/ui

Shared React UI components for dump.hr projects. Published as a private package on GitHub Packages under the `dump-hr` org.

## Local development

```bash
npm install
npm run dev       # starts the playground at http://localhost:5173
npm run build     # builds the library to ./dist
npm run typecheck
```

Playground code lives in `demo/`. Library source lives in `src/`.

## Adding a component

1. Create `src/components/<Name>/<Name>.tsx` + `<Name>.module.scss` + `index.ts`.
2. Re-export from `src/index.ts`.
3. Add a preview to `demo/App.tsx`.

## Publishing a new version

Publishing runs automatically on tag push via `.github/workflows/publish.yml`.

```bash
npm version patch   # or minor / major
git push --follow-tags
```

To publish manually from your machine:

```bash
cp .npmrc.example .npmrc
export GITHUB_TOKEN=<PAT with write:packages>
npm run build
npm publish
```

## Consuming the package from another project

1. Create a Personal Access Token (classic) at https://github.com/settings/tokens with `read:packages` scope. Make sure it's authorized for the `dump-hr` org (SSO).
2. Add a `.npmrc` at the root of the consuming project:
   ```
   @dump-hr:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
   ```
3. Add `.npmrc` to `.gitignore` if the token is inlined; otherwise commit the file with the `${GITHUB_TOKEN}` placeholder and set the env var in shell/CI.
4. Install and use:
   ```bash
   npm install @dump-hr/ui
   ```
   ```tsx
   import { Button } from '@dump-hr/ui';
   import '@dump-hr/ui/style.css';

   export const App = () => <Button>Click me</Button>;
   ```

## CI in consuming projects

In GitHub Actions, use the built-in `GITHUB_TOKEN` (requires `packages: read` permission) or an org-level PAT stored as a secret:

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: '20'
    registry-url: 'https://npm.pkg.github.com'
    scope: '@dump-hr'
- run: npm ci
  env:
    NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
