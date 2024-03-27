# Component File Structure

### Motive
To define a structured way to create, test, and document components.

### Example Component Folder

Here is an example component folder for the LandingProjectCard component:

```
.
├── LandingProjectCard.stories.tsx
├── LandingProjectCard.test.tsx
├── LandingProjectCard.tsx
├── index.tsx
└── interfaces.ts
```

Each folder largely consists of 5 parts:

1. `index.tsx`
2. `interfaces.ts`
3. `<Component>.tsx` 
4. `<Component>.stories.tsx`
5. `<Component>.test.tsx`

Let's dive more into the details...

### `index.tsx`
```javascript
// index.tsx
export { default } from "./LandingProjectCard";
```

This is an example of a barrel export. The default is the component that `<Component>.tsx` default exports. We do this to simplify imports given that we are now creating a separate folder for each component.

Without this barrel export we would have to do
```javascript
import <Component> from './LandingProjectCard/LandingProjectCard.tsx';
```

With the barrel we can import by doing
```javascript
import <Component> from './LandingProjectCard';
```

### `interfaces.ts`

```javascript
// interfaces.ts
export interface LandingProject {
  id: string,
  name: string,
  organization: string,
  description: string,
  members: string[], /* Array of MongoDB User IDs */
  cover: string, /* Cover Image URL */
}
```

For now I thought it would be useful to separate types and interface definitions from the component file itself. The reason for this is because without this separation of concerns we have to import the definitions by doing

```javascript
import { Definition } from './LandingProjectCard/LandingProjectCard.tsx';
```

With this adjustment we can do something more clean

```javascript
import { Definition } from './LandingProjectCard/interfaces.ts';
```

I am open to changes, though

### `<Component>.tsx` 

```javascript
// LandingProjectCard.tsx
import { Box, Paper, Typography } from "@mui/material";
import Atropos from "atropos/react";
import { useNavigate } from "react-router-dom";
import { LandingProject } from "./interfaces";

function LandingProjectCard(props: { project: LandingProject }) {
  const navigate = useNavigate();
  const handleCardClick = (project: LandingProject) =>
    navigate(`/project/${project.id}`);

  return (
    ...
  );
}

export default LandingProjectCard;
```

There is not much to say here

### `<Component>.stories.tsx`

```javascript
// LandingProjectCard.stories.tsx
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
      id: "1234567",
      name: "Space Safety Visualizer",
      organization: "Amazon",
      description: "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
      members: ["1234567", "12345678"],
      cover: "null",
    }
  }
}

export default meta;
```

A story consists of two main parts:

First we have the default export `meta`
```javascript
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
```
Here we provide the metadata for the stories. I'll explain some of the fields here:

- `component` This is just the component that the story uses
- `decorators` If you are familiar with Python decorators, this is basically the same thing. In this case I basically wrapped the target component with a `BrowserRouter` component in order to be able to use the `useNavigate` hook
- `title` This is the title of the story that we will see in the storybook UI
- `tags` This is just a list of tags. `autodocs` automatically creates docs for the story

Next we have the story exports
```javascript
export const AmazonSpaceSafetyVisualizer = {
  args: {
    project: {
      id: "1234567",
      name: "Space Safety Visualizer",
      organization: "Amazon",
      description: "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
      members: ["1234567", "12345678"],
      cover: "null",
    }
  }
}
```

Basically, for each story export, storybook adds the prop args defined in the `args` field to the component defined in the aforementioned `component` field

To view the stories we make, we run `npm run storybook`

### `<Component>.test.tsx`

```javascript
// LandingProjectCard.test.tsx
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
  members: ["1234567", "12345678"],
  cover: "null",
}

describe('Landing Project Card', () => {
  beforeEach(() => {
    render(
      <LandingProjectCard
        project={projectData}
      />
    );
  });

  it('renders the name, organization, and description', () => {
    // Mock useNavigate
    vi.mock('react-router-dom', async (importOriginal) => ({
      ...await importOriginal<typeof import('react-router-dom')>(),
      useNavigate: () => vi.fn(),
    }));

    expect(screen.queryByText(projectData.name)).not.toBeNull();
    expect(screen.queryByText(projectData.organization)).not.toBeNull();
    expect(screen.queryByText(projectData.description)).not.toBeNull();
  });
});
```

Here, I used a mix of `Vitest`, `React Testing Library`, and `Storybook`

First, instead of directly importing the component, we import the story component mentioned before. In this case, it is the `AmazonSpaceSafetyVisualizer` story

Now that we have the component we are testing on, we now have to actually test it.

With Vitest, we have some important functions:

- `describe`
- `beforeEach`
- `it`
- `expect`

`describe` basically creates a test suite, `beforeEach` describes behavior before every test in the test suite, `it` defines a test within that test suite, and `expect` is a way to make assertions

These are great, but we need to actually have access to the DOM to test it, which is where `jsdom` and `React Testing Library` comes into play

`jsdom` is something that I already configured, but its a way to simulate the dom in nodejs, if I am not wrong

`React Testing Library` is basically a way to render and access specific DOM elements and components

Some pretty useful functions are:

- `render`
- `screen`
  - `screen.queryByText`
  - `screen.getByText`
  - `screen.queryByTestId`
  - `screen.getByTestId`
  - `screen.queryByAltText`
  - `screen.getByAltText`
- etc.

To run tests with `vitest`, simply do `npm test`

To run tests with `storybook`, simply do `npm run test-storybook`

I am pretty certain the main difference between these two tests is that `vitest` runs with `jsdom` while `storybook` runs with `playwright`, which is a headless web browser, if I remember correctly.

The tests for `storybook` can also be run on the `storybook` UI, if I remember correctly.

I think that's most of the things I wanted to go over. I wrote this all basically in one sitting so let me know if I forgot something or mispoke about something.
