import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import type { NitroPreset, Nitro } from 'nitropack'
import { writeFile } from 'node:fs/promises'

export default <NitroPreset>{
  // 1. 继承基础能力
  extends: 'base-worker',

  entry: fileURLToPath(new URL("./entry.ts", import.meta.url)),

  alias: {
    '@resvg/resvg-js': '@resvg/resvg-wasm',
  },
  rollupConfig: {
    output: {
      entryFileNames: 'index.mjs',
      format: 'esm',
      inlineDynamicImports: false,
    }
  },

  // 5. [高级] Hooks：模仿官方生成配置文件
  // 如果你的平台需要一个特定的 json 配置文件才能运行，可以在这里生成
  hooks: {
    async compiled(nitro: Nitro) {
      // 这里的逻辑会在构建完成后执行
      const configContent = {
        "entry": "server/index.mjs",
        "assets": {
          "directory": "./dist",
          "notFoundStrategy": "404Page"
        } 
      }
      
      // 写入到输出目录
      await writeFile(
        resolve(nitro.options.output.dir, 'esa.jsonc'),
        JSON.stringify(configContent, null, 2)
      )
      
      console.log('✅ Generated ESA Pages configuration.')
    }
  }
}