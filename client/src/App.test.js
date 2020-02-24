import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import PlayerCard from "./PlayerCard";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("should match 'ballers'", () => {
    const { getByText } = render(<App />);

    getByText(/ballers/i);
  });

  it("array should contain 'Ertz'", () => {
    const { queryByText } = render(<App />);

    queryByText(/Ertz/i);
  });
});

describe("PlayerCard", () => {
  it("renders without crashing", () => {
    render(<PlayerCard />);
  });

  it("should contain className player-list-grid-view", () => {
    const { queryByText } = render(<PlayerCard />);
    queryByText(/player-list-grid-view/i);
  });

  it("Card color is blue", () => {
    const { findByText } = render(<PlayerCard />);
    findByText(/blue/i);
  });

  it("Card Header contians className card-header", () => {
    const { findByText } = render(<PlayerCard />);
    findByText(/card-header/i);
  });
});
