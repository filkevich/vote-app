import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.VITE_API_PORT) || 8080,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
})
