"use client";

import { useEffect } from "react";

const getLoadingCharacter = (number: number) => {
  switch (number % 4) {
    case 3:
      return "/";
    case 2:
      return "-";
    case 1:
      return "\\";
    case 0:
      return "|";
    default:
      return "";
  }
};

export default function useSpinnerTitleBarEffect() {
  useEffect(() => {
    let counter = 0;
    const intervalId = setInterval(() => {
      document.title = `${getLoadingCharacter(counter)} Mark Vu`;
      counter++;
    }, 100);

    return () => clearInterval(intervalId);
  }, []);
}
