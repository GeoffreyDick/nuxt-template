import { describe, it } from "vitest";
import { render } from '@testing-library/vue'
import AppHeader from "./AppHeader.vue";

describe("AppHeader", async () => {
  it("renders", async () => {
    const { getByText } = render(AppHeader)
    getByText('Insert header')
  });
});
