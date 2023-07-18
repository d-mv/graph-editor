import { AnyValue } from '@mv-d/toolbelt';
import { MutableRefObject, useEffect } from 'react';

import { MaybeNull } from '../types'

export function useOnClickOutside(
  refs: MutableRefObject<MaybeNull<HTMLDivElement | HTMLButtonElement>>[],
  handler: (arg0: AnyValue) => void,
) {
  useEffect(() => {
    const listener = (event: AnyValue) => {
      if (refs.map(ref => !ref.current || ref.current.contains(event.target)).some(Boolean)) return;

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler]);
}
