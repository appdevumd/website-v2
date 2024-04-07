import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import * as LandingProjectCardStories from './LandingProjectCard.stories';
import { composeStories } from '@storybook/react';

const { AmazonSpaceSafetyVisualizer: LandingProjectCard } = composeStories(LandingProjectCardStories);

const projectData = {
  id: "1234567",
  name: "Space Safety Visualizer",
  organization: "Amazon",
  description: "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
  members: ["Samai Patel", "Ishan Revankar", "Nitish Vobilisetti", "Neil Hajela", "Hadijat Oke", "Nand Vinchhi"],
  cover: "null",
}

describe('Landing Project Card', () => {
  beforeEach(() => {
    render(
      <LandingProjectCard />
    );
    // Mock useNavigate
    vi.mock('react-router-dom', async (importOriginal) => ({
      ...await importOriginal<typeof import('react-router-dom')>(),
      useNavigate: () => vi.fn(),
    }));
  });

  it('renders the name, organization, and description', () => {
    expect(screen.queryByText(projectData.name)).not.toBeNull();
    expect(screen.queryByText(projectData.organization)).not.toBeNull();
    expect(screen.queryByText(projectData.description)).not.toBeNull();
  });

  it('renders the member chips', () => {
    for (const member of projectData.members) {
      expect(screen.queryByText(member)).not.toBeNull();
    }
  });
});
