import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Carousel } from ".";
import { CardProps } from "../Card";

export default {
  title: "Example/Carousel",
  component: Carousel,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Carousel>;

const mockCardsData: Array<CardProps> = [
  {
    title: "iPhone 11",
    description: "Smartphone da Apple",
    image: {
      src: "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1664822592112-KRZQFJ3J20V9S9DRD5GC/iPhone+14.png?format=1000w",
      height: "200px",
      width: "200px",
    },
  },
  {
    title: "iPhone 11",
    description: "Smartphone da Apple",
    image: {
      src: "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1664822592112-KRZQFJ3J20V9S9DRD5GC/iPhone+14.png?format=1000w",
      height: "200px",
      width: "200px",
    },
  },
  {
    title: "iPhone 11",
    description: "Smartphone da Apple",
    image: {
      src: "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1664822592112-KRZQFJ3J20V9S9DRD5GC/iPhone+14.png?format=1000w",
      height: "200px",
      width: "200px",
    },
  },
  {
    title: "iPhone 11",
    description: "Smartphone da Apple",
    image: {
      src: "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1664822592112-KRZQFJ3J20V9S9DRD5GC/iPhone+14.png?format=1000w",
      height: "200px",
      width: "200px",
    },
  },
  {
    title: "iPhone 11",
    description: "Smartphone da Apple",
    image: {
      src: "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1664822592112-KRZQFJ3J20V9S9DRD5GC/iPhone+14.png?format=1000w",
      height: "200px",
      width: "200px",
    },
  },
  {
    title: "iPhone 11",
    description: "Smartphone da Apple",
    image: {
      src: "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1664822592112-KRZQFJ3J20V9S9DRD5GC/iPhone+14.png?format=1000w",
      height: "200px",
      width: "200px",
    },
  },
];

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel cardsData={mockCardsData} />
);

export const Primary = Template.bind({});
Primary.args = {};
