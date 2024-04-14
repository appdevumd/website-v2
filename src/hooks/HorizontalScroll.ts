import React from "react";

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
