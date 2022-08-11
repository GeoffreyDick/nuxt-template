import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: [
      `./{layouts,pages,components,composables}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`,
    ],
    coverage: {
      reportsDirectory: `./tests/driver/vitest/coverage`,
    },
  },
});
