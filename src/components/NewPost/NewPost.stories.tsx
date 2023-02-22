import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NewPost } from ".";

export default {
  title: "Components/NewPost",
  component: NewPost,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof NewPost>;

const Template: ComponentStory<typeof NewPost> = (args) => <NewPost />;

export const Primary = Template.bind({});
