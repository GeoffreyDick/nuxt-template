import { defineConfig } from "vitest/config";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
    include: [
      `./{layouts,pages,components,composables}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`,
    ],
    coverage: {
      reportsDirectory: `./tests/driver/vitest/coverage`,
    },
  },
});
