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
          '@/common': path.resolve(__dirname, './src/common/'),
          '@/core': path.resolve(__dirname, './src/core/'),
          '@/data': path.resolve(__dirname, './src/data/'),
          '@/demo': path.resolve(__dirname, './src/demo/'),
          '@/hooks': path.resolve(__dirname, './src/hooks/'),
          '@/pages': path.resolve(__dirname, './src/pages/'),
          '@/styles': path.resolve(__dirname, './src/styles/'),
          '@/types': path.resolve(__dirname, './src/types/'),
          '@/utils': path.resolve(__dirname, './src/utils/'),
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
