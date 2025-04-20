// src/__tests__/App.test.js
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("displays a top-level heading with the text 'Hi, I'm Mike'", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: /hi, i'm mike/i, level: 1 });
  expect(heading).toBeInTheDocument();
});

test("displays an image with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/photo of mike/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "https://via.placeholder.com/150");
});

test("displays a second-level heading with 'About Me'", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: /about me/i, level: 2 });
  expect(heading).toBeInTheDocument();
});

test("displays GitHub and LinkedIn links", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedInLink = screen.getByRole("link", { name: /linkedin/i });

  expect(githubLink).toHaveAttribute("href", "https://github.com/mikebett");
  expect(linkedInLink).toHaveAttribute("href", "https://linkedin.com/in/mikebett");
});
