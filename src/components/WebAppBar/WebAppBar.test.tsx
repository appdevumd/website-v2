import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import * as WebAppBarStories from "./WebAppBar.stories";
import { composeStories } from "@storybook/react";

const titles = ["About", "Sponsors", "Projects", "Our Team", "Highlights", "Contact Us"];

const { Fixed: FixedWebAppBar, Translucent: TranslucentWebAppBar } = composeStories(WebAppBarStories);

describe('FixedWebAppBar', () => {
  beforeEach(() => {
    render(
      <FixedWebAppBar
        links={titles.map(title => { return { title: title, anchor: "" } })}
      />
    );
  });

  it('renders the club name', () => {
    expect(screen.queryByText('App Dev Club')).not.toBeNull();
  });

  it('renders the correct club logo', () => {
    expect(screen.queryByAltText('adc-logo')?.getAttribute('src')).toBe('/logo256.png');
  });

  it('renders each nav section', () => {
    for (const title of titles) {
      expect(screen.queryByText(title)).not.toBeNull();
    }
  });
});

describe('FixedWebAppBar', () => {
  beforeEach(() => {
    render(
      <TranslucentWebAppBar
        links={titles.map(title => { return { title: title, anchor: "" } })}
      />
    );
  });

  it('renders the club name', () => {
    expect(screen.queryByText('App Dev Club')).not.toBeNull();
  });

  it('renders the correct club logo', () => {
    expect(screen.queryByAltText('adc-logo')?.getAttribute('src')).toBe('/logo256.png');
  });

  it('renders each nav section', () => {
    for (const title of titles) {
      expect(screen.queryByText(title)).not.toBeNull();
    }
  });
});
