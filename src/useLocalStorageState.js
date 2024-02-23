import { useState, useEffect } from "react";

export function useLocalStoragestate(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedvalue = localStorage.getItem(key);
    return storedvalue ? JSON.parse(storedvalue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
