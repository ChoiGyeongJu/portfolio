import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/portfolio',
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/notion-api': {
        target: 'https://www.notion.so',
        changeOrigin: true,
        secure: true,
        rewrite: path => path.replace(/^\/notion-api/, ''),
      },
    },
  },
});
