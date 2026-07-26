import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/edurain/',
  publicDir: 'public',
  build: { outDir: 'dist' }
});
