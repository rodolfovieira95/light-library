import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button, ButtonProps } from "./index";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Ghost = Template.bind({});
export const Link = Template.bind({});

Primary.args = {
  variant: "primary",
  size: "lg",
  children: "Button",
};
Secondary.args = {
  variant: "secondary",
  size: "lg",
  children: "Button",
};
Ghost.args = {
  variant: "ghost",
  size: "lg",
  children: "Button",
};
Link.args = {
  variant: "link",
  size: "lg",
  children: "Button",
};
