import { describe, it } from "vitest";
import { render } from '@testing-library/vue'
import Default from "./default.vue";

describe("default", async () => {
  it("renders", async () => {
    const { getByText } = render(Default)
    getByText('Hello world')
  });
});
