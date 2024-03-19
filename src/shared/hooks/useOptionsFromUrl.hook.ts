import { isNilOrEmpty } from "@mv-d/toolbelt"
import {
	Idiom,
	editorInputState,
	fontSizeState,
	idiomState,
	isInitState,
	isLoadingState,
	sidePanelIsOpenState
} from "@shared/state"
import { useEffect } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"

export function useOptionsFromUrl() {
  const setValue = useSetRecoilState(editorInputState)

  const setFontSize = useSetRecoilState(fontSizeState)

  const [idiom, setIdiom] = useRecoilState(idiomState)

  const [isInit, setIsInit] = useRecoilState(isInitState)

  const setSidePanelIsOpen = useSetRecoilState(sidePanelIsOpenState)

  const setIsLoading = useSetRecoilState(isLoadingState)

  async function getFromSourceLink(url: string) {
    setIsLoading(true)
    fetch(url)
      .then((res) => res.text())
      .then((text) => setValue(text))
      .catch((e) => {
        // eslint-disable-next-line no-console -- temporary
        console.error(e)
      })
      .finally(() => {
        setIsLoading(false)
        setIsInit(true)
      })
  }

  function updateCodeState() {
    try {
      const decodedValue = atob(window.location.href.split("code=")[1])

      setValue(decodedValue)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      return ""
    } finally {
      setIsInit(true)
    }
  }

  // parse the settings from the url
  function initialize() {
    const url = new URL(window.location.href)

    const fontSize = url.searchParams.get("fontSize")

    if (fontSize) {
      const sizeFromUrl = Number(fontSize)

      if (!isNilOrEmpty(sizeFromUrl) || !isNaN(sizeFromUrl)) setFontSize(sizeFromUrl)
    }

    const mode = url.searchParams.get("mode")

    if (mode === "preview") setSidePanelIsOpen(false)

    const code = url.searchParams.get("code")

    const sourceIdiom = url.searchParams.get("idiom")

    if (sourceIdiom && sourceIdiom !== idiom) setIdiom(sourceIdiom as Idiom)

    const fromSourceLink = url.searchParams.get("url")

    if (fromSourceLink) getFromSourceLink(fromSourceLink)
    else if (code) updateCodeState()
    else {
      setIsInit(true)
    }
  }

  useEffect(() => {
    if (!isInit) initialize()

    window.addEventListener("popstate", initialize)

    return () => {
      window.removeEventListener("popstate", initialize)
    }
  }, [isInit])
}
