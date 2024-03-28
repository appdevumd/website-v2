import { Meta } from "@storybook/react";
import WebEventsBar from "./WebEventsBar";

const meta: Meta<typeof WebEventsBar> = {
  component: WebEventsBar,
  title: 'WebEventsBar',
  tags: ['autodocs'],
}

export const Placeholder = {
  args: {
    events: [{ title: "General Body Meeting, 3/25 8pm @ Iribe" }],
  },
}

export default meta;