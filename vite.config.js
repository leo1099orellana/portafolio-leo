import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Importamos tailwind

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Agregamos el plugin acá
  ],
})