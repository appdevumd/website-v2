import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import * as WebEventsBarStories from "./WebEventsBar.stories";
import { composeStories } from "@storybook/react";

const events = [{ title: "General Body Meeting, 3/25 8pm @ Iribe" }];

const { Placeholder: WebEventsBar } = composeStories(WebEventsBarStories);

describe('WebEventsBar', () => {
  beforeEach(() => {
    render(<WebEventsBar events={events}/>);
  });

  it('renders the event', () => {
    expect(screen.queryByText(events[0].title)).not.toBeNull();
  });

  it('stores the events-visible key in local storage', () => {
    expect(localStorage.getItem('events-visible')).not.toBeNull();
  });

  it('initializes events-visible key as true', () => {
    expect(localStorage.getItem('events-visible')).toBe('true');
  });

  it('renders the events close button', () => {
    expect(screen.queryByTestId('events-close-button')).not.toBeNull();
  });

  it('sets events-visible key to false after button click', () => {
    const eventsCloseButton = screen.getByTestId('events-close-button');
    fireEvent.click(eventsCloseButton);
    expect(localStorage.getItem('events-visible')).toBe('false');
  });
});
