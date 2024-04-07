import { beforeEach, describe, expect, it } from 'vitest';
import * as SponsorshipCardStories from './SponsorshipCard.stories';
import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

const { Bronze, Gold, Platinum } = composeStories(SponsorshipCardStories);

describe('Bronze', () => {
  beforeEach(() => {
    render(<Bronze />);
  });

  it('renders the title and pricing', () => {
    expect(screen.queryByText('Bronze')).not.toBeNull();
    expect(screen.queryByText('$100+')).not.toBeNull();
    expect(screen.queryByText('per year')).not.toBeNull();
  });

  it('renders the description button', () => {
    expect(screen.queryByText('Select Bronze Tier →')).not.toBeNull();
  });

  it('renders the benefits', () => {
    expect(screen.queryByText('> Benefit 1')).not.toBeNull();
    expect(screen.queryByText('> Benefit 2')).not.toBeNull();
    expect(screen.queryByText('> Benefit 3')).not.toBeNull();
  });
});

describe('Gold', () => {
  beforeEach(() => {
    render(<Gold />);
  });

  it('renders the title and pricing', () => {
    expect(screen.queryByText('Gold')).not.toBeNull();
    expect(screen.queryByText('$500+')).not.toBeNull();
    expect(screen.queryByText('per year')).not.toBeNull();
  });

  it('renders the description button', () => {
    expect(screen.queryByText('Select Gold Tier →')).not.toBeNull();
  });

  it('renders the prereq', () => {
    expect(screen.queryByText('< Everything included in Bronze, plus...')).not.toBeNull();
  });

  it('renders the benefits', () => {
    expect(screen.queryByText('> Benefit 1')).not.toBeNull();
    expect(screen.queryByText('> Benefit 2')).not.toBeNull();
    expect(screen.queryByText('> Benefit 3')).not.toBeNull();
  });
});

describe('Platinum', () => {
  beforeEach(() => {
    render(<Platinum />);
  });

  it('renders the title and pricing', () => {
    expect(screen.queryByText('Platinum')).not.toBeNull();
    expect(screen.queryByText('$1000+')).not.toBeNull();
    expect(screen.queryByText('per year')).not.toBeNull();
  });

  it('renders the description button', () => {
    expect(screen.queryByText('Select Platinum Tier →')).not.toBeNull();
  });

  it('renders the prereq', () => {
    expect(screen.queryByText('< Everything included in Gold, plus...')).not.toBeNull();
  });

  it('renders the benefits', () => {
    expect(screen.queryByText('> Benefit 1')).not.toBeNull();
    expect(screen.queryByText('> Benefit 2')).not.toBeNull();
    expect(screen.queryByText('> Benefit 3')).not.toBeNull();
  });
});
