# SolidJS with Vite

```bash
pnpm create vite solid-sample --template vanilla-ts
```

```bash
cd solid-sample
```

```bash
pnpm add solid-js
# pnpm add -D cross-env
pnpm add -D vite-plugin-solid
```

Modify tsconfig.json as
```json
"compilerOptions": {
  "jsx": "preserve",
  "jsxImportSource": "solid-js",
}
```

Create vite.config.ts as
```ts
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid({ ssr: false })]
})
```

```bash
pnpm dev
```

and visit  http://localhost:5173/
