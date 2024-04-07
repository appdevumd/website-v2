import { Meta } from "@storybook/react";
import SponsorshipCard from "./SponsorshipCard";

const meta: Meta<typeof SponsorshipCard> = {
  component: SponsorshipCard,
  title: 'SponsorshipCard',
  tags: ['autodocs'],
}

export const Bronze = {
  args: {
    tier: 'Bronze',
    backgroundColor: '#DF9E5D',
    price: 100,
    benefits: [
      'Benefit 1',
      'Benefit 2',
      'Benefit 3',
    ],
    prereq: undefined,
    width: 'clamp(20rem, 30vw, 40rem)',
    aspectRatio: '1 / 1.4',
  },
};

export const Gold = {
  args: {
    tier: 'Gold',
    backgroundColor: '#FFD700',
    price: 500,
    benefits: [
      'Benefit 1',
      'Benefit 2',
      'Benefit 3',
    ],
    prereq: 'Bronze',
    width: 'clamp(20rem, 30vw, 40rem)',
    aspectRatio: '1 / 1.4',
  },
};

export const Platinum = {
  args: {
    tier: 'Platinum',
    backgroundColor: '#E5E4E2',
    price: 1000,
    benefits: [
      'Benefit 1',
      'Benefit 2',
      'Benefit 3',
    ],
    prereq: 'Gold',
    width: 'clamp(20rem, 30vw, 40rem)',
    aspectRatio: '1 / 1.4',
  },
};

export default meta;
