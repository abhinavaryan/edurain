import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/edurain/',
  publicDir: 'public',
  build: { 
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
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


