import { Meta } from "@storybook/react";
import Highlights from "./Highlights";

const meta: Meta<typeof Highlights> = {
  component: Highlights,
  title: 'Highlights',
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'default',
          value: '#142062'
        }
      ]
    }
  }
};

const fillerBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar semper condimentum. Nunc volutpat lectus eget gravida posuere. Aliquam dapibus felis nulla, vitae posuere lorem rutrum nec..."

export const Default = {
  args: {
    width: "55vw",
    highlights: [
      {
        imageUrl: "https://undergrad.cs.umd.edu/sites/undergrad.cs.umd.edu/files/app-dev-club-logo.png",
        title: "Filler 1",
        body: fillerBody,
      },
      {
        imageUrl: "https://images.squarespace-cdn.com/content/v1/5a4e7dd6bff200eee880ca97/1519241131496-HC3RVZLCAVFGHRL5GNF6/Praxis+Engineering+Standard+Logo.png",
        title: "Filler 2",
        body: fillerBody,
      },
      {
        imageUrl: "https://d1.awsstatic.com/Customer%20References%20Directory%20Logos/Amazon_ProjectKuiper_Logo_Black.513344015d397c4905b25bd576386a0ab37941b3.png",
        title: "Filler 3",
        body: fillerBody,
      },
      {
        imageUrl: "https://images.squarespace-cdn.com/content/v1/5a4e7dd6bff200eee880ca97/1519241131496-HC3RVZLCAVFGHRL5GNF6/Praxis+Engineering+Standard+Logo.png",
        title: "Filler 4",
        body: fillerBody,
      },
      {
        imageUrl: "https://d1.awsstatic.com/Customer%20References%20Directory%20Logos/Amazon_ProjectKuiper_Logo_Black.513344015d397c4905b25bd576386a0ab37941b3.png",
        title: "Filler 5",
        body: fillerBody,
      },
    ]
  }
}

export default meta;
