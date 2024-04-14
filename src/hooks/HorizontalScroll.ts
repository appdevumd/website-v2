import React from "react";

/**
 * Backup plan for horizontal scroll, still not working 100% well
 * Don't plan on using it, but its here for now
 * The main issue is that it requires focus on the projects container
 * Another issue is that it is jittery with a scroll wheel
 */
function useHorizontalScroll() {
  const ref = React.useRef<HTMLDivElement>();

  const setRef = React.useCallback((container: HTMLDivElement) => {
    if (container) {
      const onWheel = (e: { preventDefault: () => void; deltaY: number; }) => {
        if (!(e.deltaY < 0 && container.scrollLeft === 0) && !(e.deltaY > 0 && container.scrollLeft === container.scrollWidth - container.clientWidth)) {
          e.preventDefault();
          
          container.scrollLeft += e.deltaY*0.6;
        }
      }

      container.addEventListener('wheel', onWheel);
    }

    ref.current = container;
  }, []);

  return [ref, setRef];
}

export default useHorizontalScroll;
