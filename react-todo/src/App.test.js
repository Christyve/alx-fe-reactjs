// src/App.test.js
import { render, screen } from "@testing-library/react";
import App from "./App";  // ✅ default import

test("renders the todo list heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/todo list/i);
  expect(headingElement).toBeInTheDocument();
});
