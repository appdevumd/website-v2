import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import * as StatsStories from "./Stats.stories";
import { composeStories } from "@storybook/react";

const { DollarsSaved: Stats } = composeStories(StatsStories);

describe("Dollars Saved Stats", () => {
  beforeEach(() => {
    render(
      <Stats
        end={StatsStories.DollarsSaved.args.end}
        prefix={StatsStories.DollarsSaved.args.prefix}
        title={StatsStories.DollarsSaved.args.title}
      />
    );
  });

  it("renders the number and description", () => {
    expect(screen.queryByText("$")).not.toBeNull();
    expect(screen.queryByText("Dollars Saved")).not.toBeNull();
  });
});
