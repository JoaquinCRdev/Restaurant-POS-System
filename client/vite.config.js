import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '#components': resolve(dirname(fileURLToPath(import.meta.url)), 'src/components/layout'),
      '#pages': resolve(dirname(fileURLToPath(import.meta.url)), 'src/pages'),
      '#utils': resolve(dirname(fileURLToPath(import.meta.url)), 'src/utils'),
      '#https': resolve(dirname(fileURLToPath(import.meta.url)), 'src/https'),
      '#constants': resolve(dirname(fileURLToPath(import.meta.url)), 'src/constants'),
    }
  }
})
