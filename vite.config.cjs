/** @type {import('vite').UserConfig} */
export default {
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
  },
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
}
