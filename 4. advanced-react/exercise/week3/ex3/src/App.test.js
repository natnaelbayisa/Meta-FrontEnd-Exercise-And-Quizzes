import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a link that points to github", () => {
  render(<App />);
  const linkElement = screen.getByText("Github");
  expect(linkElement).toBeInTheDocument;
});
