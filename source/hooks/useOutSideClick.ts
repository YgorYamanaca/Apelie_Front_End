import { RefObject, useEffect } from 'react';

const useOnClickOutside = (ref: RefObject<any>, handler: () => void): void => {
  useEffect(
    () => {
      const listener = (event: Event) => {
        if (ref.current.contains(event.target)) {
          return;
        }
        handler();
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    [ref, handler],
  );
};

export default useOnClickOutside;
