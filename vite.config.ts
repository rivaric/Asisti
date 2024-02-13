import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import { mediapipe } from 'vite-plugin-mediapipe'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), mediapipe()],
  base: '/',
  server: {
    port: 3000,
    open: 'http://localhost:3000/login',
    proxy: {
      '/api/v1': {
        target: 'http://www.asisti.tech/api/v1',
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
