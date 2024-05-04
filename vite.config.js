import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';
import vituum from 'vituum';
import liquid from '@vituum/vite-plugin-liquid';

export default defineConfig({
  plugins: [
    shopify(),
    vituum(),
    liquid({
      data: "./src/data/main.json"
    })
  ],
  build: {
    emptyOutDir: false
  }
});
