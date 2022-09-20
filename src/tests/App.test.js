import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../app/App";

/**
 * Which query should I use?
 * https://testing-library.com/docs/guide-which-query
 * */

describe("renders App component", () => {
  //beforeAll(() => render(<App/>))

  test("presence of static text on the page", () => {
    render(<App />);
    expect(screen.getByText("Loading countries...")).toBeVisible();
    expect(screen.getByText("Countries Search List")).toBeVisible();
  });

  test("check visibility of the input->search field", () => {
    render(<App />);
    expect(screen.getByRole("textbox")).toBeVisible();
  });

  test("check presence of placeholder text", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Search Country"));
  });
});
