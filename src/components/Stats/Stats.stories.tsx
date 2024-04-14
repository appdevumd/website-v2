import { Meta } from "@storybook/react";
import Stats from "./Stats";
import "atropos/css";

const meta: Meta<typeof Stats> = {
  component: Stats,
  decorators: [(Story) => <Story />],
  title: "Stats",
  tags: ["autodocs"],
};

export const DollarsSaved = {
  args: {
    end: 500000,
    prefix: "$",
    title: "Dollars Saved",
    minWidth: 436,
  },
};

export default meta;
