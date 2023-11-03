// Hooks
import { useEffect } from "react";

function useViewportResize(toggleMenu) {
  const resizeCallback = () => {
    if (window.innerWidth >= 740) toggleMenu();
  };

  useEffect(() => {
    window.addEventListener("resize", resizeCallback);

    return () => {
      window.removeEventListener("resize", resizeCallback);
    };
  }, []);
}

export default useViewportResize;
