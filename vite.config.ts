import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/verwaltung': {
        target: 'http://localhost:3001',
        ws: true
      },
      '/login': {
        target: 'http://localhost:3002',
        ws: true,
      },
      '/veranstaltung': {
        target: 'http://localhost:3003',
        ws: true,
      },
      '/cms': {
        target: 'http://localhost:3004',
        ws: true,
      }
    }
  }
})