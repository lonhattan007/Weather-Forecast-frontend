/// <reference types="vitest"/>>
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve('node_modules/bootstrap'),
      '@assets': path.resolve('./src/assets/'),
      '@components': path.resolve('./src/components/'),
      '@views': path.resolve('./src/views/'),
      '@mocks': path.resolve('./mocks/'),
      '@styles': path.resolve('./src/scss'),
      '@stores': path.resolve('./src/stores'),
      '@routes': path.resolve('./src/routes'),
      '@utils': path.resolve('./src/utils'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./tests/setupTest.ts'],
  },
});
