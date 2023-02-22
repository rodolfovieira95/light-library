import React from "react";
import { render, screen } from "@testing-library/react";

import { Button } from ".";

test("renders button", () => {
  render(
    <Button size="sm" variant="primary">
      Button Text
    </Button>
  );
  const buttonElement = screen.getByText("Button Text");
  expect(buttonElement).not.toBeNull();
});
