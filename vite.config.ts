import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    open: 'http://127.0.0.1:3000/login',
    proxy: {
      '/api/v1': {
        target: 'http://127.0.0.1:8000/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/v1/, ''),
      },
    },
  },
  build: {
    outDir: 'build',
    sourcemap: false,
  },
  preview: {
    port: 3000,
  },
})
