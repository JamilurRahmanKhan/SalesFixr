import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  base: '/software-portfolio-app/',
  build: {
    outDir: fileURLToPath(new URL('../public/software-portfolio-app', import.meta.url)),
    emptyOutDir: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      // Next.js's static export silently drops any public/ file named
      // "index.html" at a non-root path, so the entry is named game.html.
      input: fileURLToPath(new URL('./game.html', import.meta.url)),
      output: {
        manualChunks: {
          three: ['three'],
        },
      },
    },
  },
});
