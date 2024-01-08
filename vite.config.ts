import { URL, fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

function getCurrnetDir() {
  const url = new URL('.', import.meta.url)
  return fileURLToPath(url)
}
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(getCurrnetDir(), './src'),
    },
  },
})
