import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Set the output directory to 'build'
    chunkSizeWarningLimit: 2000, // Adjust the limit to whatever size you deem appropriate
  },
})

