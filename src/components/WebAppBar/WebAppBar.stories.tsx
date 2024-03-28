import { Meta } from "@storybook/react";
import WebAppBar from "./WebAppBar";
import { WebAppBarLink } from "./interfaces";
import { ThemeProvider } from "@mui/material";
import AppThemeController from "../../middleware/AppThemeController";

const meta: Meta<typeof WebAppBar> = {
  component: WebAppBar,
  decorators: [
    (Story) => (
      <ThemeProvider theme={AppThemeController.baseTheme}>
        <Story />
      </ThemeProvider>
    )
  ],
  title: 'WebAppBar',
  tags: ['autodocs'],
}

const webAppBarLinks: WebAppBarLink[] = [
  { title: "About", anchor: "" },
  { title: "Sponsors", anchor: "" },
  { title: "Projects", anchor: "" },
  { title: "Our Team", anchor: "" },
  { title: "Highlights", anchor: "" },
  { title: "Contact Us", anchor: "" },
];

export const Fixed = {
  args: {
    links: webAppBarLinks,
    fullWidth: true,
  }
}

export const Translucent = {
  args: {
    translucent: true,
    links: webAppBarLinks,
    sx: {
      zIndex: 2,
      position: "fixed",
      left: "0px",
    },
  }
}

export default meta;
