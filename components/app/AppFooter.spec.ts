import { describe, it } from "vitest";
import { render } from '@testing-library/vue'
import AppFooter from "./AppFooter.vue";

describe("AppFooter", async () => {
  it("renders", async () => {
    const { getByText } = render(AppFooter)
    getByText('Insert footer')
  });
});
