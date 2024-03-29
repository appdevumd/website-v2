import { Meta } from "@storybook/react";
import LandingProjectCard from "./Stats";
import { BrowserRouter } from "react-router-dom";
import "atropos/css";

const meta: Meta<typeof LandingProjectCard> = {
  component: LandingProjectCard,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  title: "LandingProjectCard",
  tags: ["autodocs"],
};

export const AmazonSpaceSafetyVisualizer = {
  args: {
    project: {
      id: "1234567",
      name: "Space Safety Visualizer",
      organization: "Amazon",
      description:
        "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
      members: ["1234567", "12345678"],
      cover: "null",
    },
  },
};

export default meta;
