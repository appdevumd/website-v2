import { Meta } from '@storybook/react';
import LandingProjectCard from './LandingProjectCard';
import { BrowserRouter } from 'react-router-dom';
import 'atropos/css';

const meta: Meta<typeof LandingProjectCard> = {
  component: LandingProjectCard,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ],
  title: 'LandingProjectCard',
  tags: ['autodocs'],
};

export const AmazonSpaceSafetyVisualizer = {
  args: {
    project: {
      "_id": "66292f8768dc79f8d04536ad",
      "name": "Space Safety Visualizer",
      "organization": "Amazon",
      "description": "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
      "members": [
        {
          "memberInfo": {
            "_id": "66292f8768dc79f8d0453673",
            "firstName": "Samai",
            "lastName": "Patel",
            "profileUrl": "https://gravatar.com/avatar/8a7fb3e66260f050539a6d8021a733635298861369c9ba60278abeb78e8c6216"
          },
          "role": "Project Lead"
        },
        {
          "memberInfo": {
            "_id": "66292f8768dc79f8d045368b",
            "firstName": "Ishan",
            "lastName": "Revankar",
            "profileUrl": "https://gravatar.com/avatar/66e5f9478a8c5c1090326d16f13ac2f9d56540fbc38c86e0b16061dd4d6c31d9"
          },
          "role": "Full-Stack Engineer"
        },
        {
          "memberInfo": {
            "_id": "66292f8768dc79f8d045368d",
            "firstName": "Nitish",
            "lastName": "Vobilisetti",
            "profileUrl": "https://gravatar.com/avatar/eb8416def562dd101a91cb9ad66731467420be6dafff0a691f33b184d796d7f5"
          },
          "role": "Tech Lead"
        },
        {
          "memberInfo": {
            "_id": "66292f8768dc79f8d045368f",
            "firstName": "Neil",
            "lastName": "Hajela",
            "profileUrl": "https://gravatar.com/avatar/9ec79c36a878d718e93405ec8431d2f414d1e6e021376763b85ec2555418bcd2"
          },
          "role": "Engineer"
        },
        {
          "memberInfo": {
            "_id": "66292f8768dc79f8d0453691",
            "firstName": "Hadijat",
            "lastName": "Oke",
            "profileUrl": "https://gravatar.com/avatar/4e7a51f508246f5a290cd93aead661a323322a0fecc28e2ebb44714f5825a7ef"
          },
          "role": "Project Manager"
        },
        {
          "memberInfo": {
            "_id": "66292f8768dc79f8d0453693",
            "firstName": "Nand",
            "lastName": "Vinchhi",
            "profileUrl": "https://gravatar.com/avatar/5c7e99e4bd1a8bc12f56605f7ec6a09a95472ebb07dd30f4d4e1ef134655c35a"
          },
          "role": "Tech Lead"
        }
      ],
      "cover": null,
      "semester": "Fall 2023",
      "__v": 0
    }
  }
}

export default meta;
