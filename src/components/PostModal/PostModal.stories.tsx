import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PostModal } from ".";

export default {
  title: "Example/PostModal",
  component: PostModal,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PostModal>;

const Template: ComponentStory<typeof PostModal> = (args) => <PostModal />;

export const Primary = Template.bind({});
