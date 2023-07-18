import { useRecoilValue } from 'recoil';

import { editorInputState, fontSizeState } from '../state'

export function useCopyCodeAsUrl() {
  const value = useRecoilValue(editorInputState)

  const fontSize = useRecoilValue(fontSizeState);

  function copy() {
    const location = window.location.origin;

    const base64Value = btoa(value);

    const url = `${location}?fontSize=${fontSize}&code=${base64Value}`;

    navigator.clipboard.writeText(url);
    return url;
  }

  function copyNsave() {
    const url = copy();

    window.history.pushState({}, '', url);
  }

  return { copy, copyNsave };
}
