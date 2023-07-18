import { atom } from 'recoil'

export const editorInputState = atom<string>({
  key: 'editorInputState',
  default: '',
})
