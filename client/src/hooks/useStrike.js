import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useStrike = () => {
  const [strike, setStrike] = useLocalStorage("disable", false);

  useEffect(() => {
    if (strike === false) {
      document.body.classList.add("player selected");
    } else {
      document.body.classList.remove("player selected");
    }
  }, [strike]);
};

// let playerStrike = document.querySelector(".player");
console.log("Hello World");
