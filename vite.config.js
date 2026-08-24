import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        jeecourse: resolve(__dirname, 'jeecourse.html'),
        neetcourse: resolve(__dirname, 'neetcourse.html'),
        foundationcourse: resolve(__dirname, 'foundationcourse.html'),
        thankyou: resolve(__dirname, 'thank-you.html')
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
});
