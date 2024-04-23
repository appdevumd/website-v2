import { composeStories } from "@storybook/react";
import * as HighlightsStories from "./Highlights.stories";
import { beforeEach, describe } from "vitest";
import { render } from "@testing-library/react";

const { Default: Highlights } = composeStories(HighlightsStories);

// TODO
describe('Highlights', () => {
  beforeEach(() => {
    render(<Highlights />);
  });
});