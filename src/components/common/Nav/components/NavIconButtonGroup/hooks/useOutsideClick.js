// Hooks
import { useEffect } from "react";

function useOutsideClick(elementRef, callback, linkKey) {
  const validateClick = (e) => {
    const isNotTarget = e.target !== elementRef.current;
    const isNotTargetChild = !elementRef.current.contains(e.target);
    const isNotLinkedWithTarget = linkKey
      ? e.target.getAttribute("data-link-key") !== linkKey
      : true;

    if (isNotTarget && isNotTargetChild && isNotLinkedWithTarget) callback();
  };

  useEffect(() => {
    if (elementRef.current !== undefined) {
      document.body.addEventListener("click", validateClick);
    }

    return () => {
      document.body.removeEventListener("click", validateClick);
    };
  }, []);
}

export default useOutsideClick;
