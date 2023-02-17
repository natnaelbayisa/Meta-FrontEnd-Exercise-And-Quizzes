import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

test("Add one", () => {
  // render the App component
  render(<App />);

  // save the heading in a variable
  const heading = screen.getByTestId("currentNumber");

  // save the button in a variable
  const btn = screen.getByTestId("addOne");

  // click the btn
  fireEvent.click(btn);

  // test assumption
  expect(heading).toHaveTextContent("2");
});
