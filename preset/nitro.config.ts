import { fileURLToPath } from 'node:url'
import type { NitroPreset, Nitro } from 'nitropack'

export default <NitroPreset>{
  // 1. 继承基础能力
  extends: 'base-worker',

  entry: fileURLToPath(new URL("./entry.ts", import.meta.url)),

  rollupConfig: {
    output: {
      entryFileNames: 'index.mjs',
      format: 'esm',
      inlineDynamicImports: false,
    }
  },
}