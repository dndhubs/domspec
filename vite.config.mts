import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { minifyEs } from '../../scripts/minifyEs.mjs';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['es'],
      fileName: () => `index.mjs`,
    },
    rollupOptions: {
      external: (id) => {
        if (id.includes('L1/domspec/src') || id.startsWith('.')) return false;
        return !id.startsWith('/') && !/^[A-Z]:/.test(id);
      },
      output: {
        dir: 'dist',
        preserveModules: true,
        entryFileNames: '[name].mjs',
      },
    },
    // ← Add this for better .d.ts generation
    sourcemap: true,
  },
  plugins: [
    dts({
      rollupTypes: true,
      tsconfigPath: resolve(__dirname, './tsconfig.json'),
      exclude: ['../../scripts/**'],
      // ← Force clean output
      insertTypesEntry: true,
    }),
    react(),
    minifyEs(),
  ],
});