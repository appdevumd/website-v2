import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Runs a cleanup after every test
afterEach(() => {
  cleanup();
});
