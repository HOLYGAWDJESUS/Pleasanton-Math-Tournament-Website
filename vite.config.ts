import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserPage = repoName?.endsWith('.github.io');
const base = process.env.BASE_PATH ?? (process.env.GITHUB_ACTIONS && repoName && !isUserPage ? `/${repoName}/` : '/');

export default defineConfig(() => {
  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
