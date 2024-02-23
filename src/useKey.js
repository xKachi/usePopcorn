import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      // Cleanup function used to clean the event
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },

    [action, key]
  );
}
