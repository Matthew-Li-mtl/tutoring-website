import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: '/tutoring-website/',
  build: {
    // Highlight-start
    outDir: 'dist', // Forces the folder to build directly at your repository root
    // Highlight-end
  }
})
