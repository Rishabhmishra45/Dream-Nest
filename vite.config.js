import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./",  // important for correct asset paths on Vercel
  build: {
    outDir: "dist",  // Vercel automatically expects dist
  },
  server: {
    host: '0.0.0.0', // phone से access करने के लिए
    port: 5173
  }
})
