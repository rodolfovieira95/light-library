import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PostModal } from ".";

export default {
  title: "Components/PostModal",
  component: PostModal,
  parameters: {
    layout: "fullscreen",
  },
};

const Template: ComponentStory<typeof PostModal> = (args) => <PostModal />;

export const Primary = Template.bind({});
