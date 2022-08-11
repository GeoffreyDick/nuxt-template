import { describe, it } from "vitest";
import { render } from '@testing-library/vue'
import Slug from "./[...slug].vue";

describe("[...slug]", async () => {
  it("renders", async () => {
    const { getByText } = render(Slug)
    getByText('Hello world')
  });
});
