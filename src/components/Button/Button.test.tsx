import React from "react";
import { render, screen } from "@testing-library/react";

import { Button } from ".";

test("renders button", () => {
  render(<Button label="Button" />);
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).toBeInTheDocument();
});
