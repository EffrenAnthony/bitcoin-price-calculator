import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { configDefaults } from 'vitest/config'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    ...configDefaults,
    environment: 'happy-dom', // Simula un navegador ligero para pruebas
    setupFiles: ['./src/tests/setup.ts'], // Archivo de configuración para pruebas
    include: ['src/**/*.{test,spec}.{ts,tsx}'] // Patrón de búsqueda de tests
  }
})
