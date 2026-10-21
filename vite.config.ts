import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative asset paths work for both the user-site and project-site GitHub Pages URLs.
  base: './',
})
