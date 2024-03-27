import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import * as LandingTitlePageStories from "./LandingTitlePage.stories";
import { composeStories } from "@storybook/react";

const { Default: LandingTitlePage } = composeStories(LandingTitlePageStories);

describe('Landing Title Page', () => {
  beforeEach(() => {
    render(<LandingTitlePage />);
  });

  // Subject to change
  it('renders placholder text (for now)', () => {
    expect(screen.queryByText('Hello World Title Page!')).not.toBeNull();
  });
});
