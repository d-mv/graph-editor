import { useRecoilValue } from "recoil"

import { editorInputState, fontSizeState, idiomState, sidePanelIsOpenState } from "../state"

export function useCopyCodeAsUrl() {
  const value = useRecoilValue(editorInputState)

  const sidePanelIsOpen = useRecoilValue(sidePanelIsOpenState)

  const idiom = useRecoilValue(idiomState)

  const fontSize = useRecoilValue(fontSizeState)

  function copy() {
    const location = window.location.origin

    const base64Value = btoa(value)

    let url = `${location}?fontSize=${fontSize}&idiom=${idiom}&code=${base64Value}`

    if (!sidePanelIsOpen) url = `${url}&mode=preview`

    navigator.clipboard.writeText(url)
    return url
  }

  function copyNsave() {
    const url = copy()

    window.history.pushState({}, "", url)
  }

  return { copy, copyNsave }
}
