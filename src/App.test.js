import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header", () => {
  render(<App />);
  const headerElement = screen.getByText(/ferocia take home test/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders term deposit calculator", () => {
  render(<App />);
  const calcHeader = screen.getByText(/term deposit calculator/i);
  expect(calcHeader).toBeInTheDocument();
});
