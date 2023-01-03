import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Story } from ".";

export default {
  title: "Example/Stories",
  component: Story,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Story>;

const Template: ComponentStory<typeof Story> = (args) => <Story {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Rodolfo",
  img: {
    alt: "Rodolfo",
    src: "https://scontent.fssz2-1.fna.fbcdn.net/v/t39.30808-6/323551107_874582850409170_6600734580481088019_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Sdvuc1irWTIAX_YFWYq&tn=JuXjPDCb_OrkRaDN&_nc_ht=scontent.fssz2-1.fna&oh=00_AfA3wt2SALp7R-YAEySO2az_3FHMQ5y4K7bNKijpxU9qUg&oe=63B728A7",
    width: "64px",
    height: "64px",
  },
};
