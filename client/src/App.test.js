import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

it("renders without crashing", () => {
  const wrapper = rtl.render(<App />);

  console.log(wrapper.debug());
});

it("should match 'ballers'", () => {
  const wrapper = rtl.render(<App />);
  expect("Footballers").toMatch(/ballers/);
});

it("array should contain 'Ertz'", () => {
  const wrapper = rtl.render(<App />);
});
