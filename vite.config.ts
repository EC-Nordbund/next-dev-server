import { defineConfig } from "vite";
import inspect from "vite-plugin-inspect";

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
  },
  build: {
    target: [
      'chrome89', 'edge89', 'safari15.4', 'firefox96', 'opera75', 'ios15.4'
    ],
    cssTarget: [
      'chrome89', 'edge89', 'safari15.4', 'firefox96', 'opera75', 'ios15.4'
    ]
  },
  plugins: [
    inspect()
  ]
})