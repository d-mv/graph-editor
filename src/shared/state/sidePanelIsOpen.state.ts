import { atom } from 'recoil'

export const sidePanelIsOpenState = atom<boolean>({
  key: 'sidePanelIsOpenState',
  default: true,
})
