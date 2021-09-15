import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Gérer efficacement/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link 2", () => {
  render(<App />);
  const linkElement = screen.getByText(/Voir le stock/i);
  expect(linkElement).toBeInTheDocument();
});
