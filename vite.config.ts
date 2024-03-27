// Used vitest's wrapper of vite's defineConfig
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Hardcode port 3000
  server: {
    port: 3000
  },
  test: {
    // add jsdom to vite
    environment: 'jsdom',
    setupFiles: './tests/setup.tsx',
  },
});
