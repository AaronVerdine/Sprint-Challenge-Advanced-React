import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("should match 'ballers'", () => {
    // const wrapper = rtl.render(<App />);
    const { getByText } = render(<App />);

    // expect("Footballers").toMatch(/ballers/);
    getByText(/ballers/i);
  });

  it("array should contain 'Ertz'", () => {
    // const wrapper = rtl.render(<App />);
    const { queryByText } = render(<App />);

    queryByText(/Ertz/i);
  });
});
