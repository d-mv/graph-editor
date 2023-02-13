import { atom } from 'recoil';

export const fontSizeState = atom<number>({
  key: 'fontSizeState',
  default: 16,
});
