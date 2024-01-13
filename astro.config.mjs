import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  build: {
    inlineStylesheets: 'never',
  },
  server: {
    port: 8080,
    open: true,
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[hash].[ext]',
          // chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
    },
  },
})
