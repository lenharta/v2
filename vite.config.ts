/// <reference types='vitest'/>

/** @type {import('vite').UserConfig} */

import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '');

  if (command === 'serve') {
    return {
      plugins: [react()],
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/tests/setup.ts',
        css: true,
      },
      server: {
        port: 3000,
        proxy: {
          '/api': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
          },
        },
      },
      resolve: {
        alias: {
          '@/*': path.resolve(__dirname, './src/'),
          '@/app': path.resolve(__dirname, './src/app/'),
          '@/data': path.resolve(__dirname, './src/data/'),
          '@/site': path.resolve(__dirname, './src/site/'),
          '@/utils': path.resolve(__dirname, './src/utils/'),
          '@/hooks': path.resolve(__dirname, './src/hooks/'),
          '@/pages': path.resolve(__dirname, './src/pages/'),
          '@/tests': path.resolve(__dirname, './src/tests/'),
          '@/types': path.resolve(__dirname, './src/types/'),
          '@/store': path.resolve(__dirname, './src/store/'),
          '@/assets': path.resolve(__dirname, './src/assets/'),
          '@/common': path.resolve(__dirname, './src/common/'),
          '@/factory': path.resolve(__dirname, './src/factory/'),
        },
      },
      define: {
        __APP_ENV__: env.APP_ENV,
      },
    };
  } else {
    return {
      plugins: [react()],
    };
  }
});
