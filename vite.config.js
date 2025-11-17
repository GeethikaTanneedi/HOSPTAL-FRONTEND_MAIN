import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/HOSPTAL-FRONTEND_MAIN/", 
  plugins: [react()],
})
