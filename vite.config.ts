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
          '@/hooks': path.resolve(__dirname, './src/hooks/'),
          '@/routes': path.resolve(__dirname, './src/routes/'),
          '@/store': path.resolve(__dirname, './src/store/'),
          '@/styles': path.resolve(__dirname, './src/styles/'),
          // '@/data': path.resolve(__dirname, './src/data/'),
          // '@/core': path.resolve(__dirname, './src/core/'),
          // '@/utils': path.resolve(__dirname, './src/utils/'),
          // '@/hooks': path.resolve(__dirname, './src/hooks/'),
          // '@/tests': path.resolve(__dirname, './src/tests/'),
          // '@/types': path.resolve(__dirname, './src/types/'),
          // '@/store': path.resolve(__dirname, './src/store/'),
          // '@/motion': path.resolve(__dirname, './src/motion/'),
          // '@/assets': path.resolve(__dirname, './src/assets/'),
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
