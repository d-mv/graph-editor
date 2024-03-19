import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"

import { ButtonWithIcon, WithTooltip } from "@shared/components"
import { Idiom, editorInputState, idiomState } from "@shared/state"
import { LINKS_DICTIONARY } from "../linksDictionary.data"

export function Docs() {
  const value = useRecoilValue(editorInputState)

  const idiom = useRecoilValue(idiomState)

  const [section, setSection] = useState("")

  useEffect(() => {
    if (value) {
      const s = value.split("\n")[0].trim()

      if (s && s !== section) setSection(s)
    } else {
      if (section) setSection("")
    }
  }, [section, value])

  return (
    <WithTooltip tooltip={`Mermaid docs${section ? ` ${section}` : ""}`}>
      <ButtonWithIcon
        asAnchor
        href={
          idiom === Idiom.MERMAID
            ? `https://mermaid.js.org/${LINKS_DICTIONARY[section]}`
            : "https://plantuml.com/news"
        }
        icon="docs"
      >
        docs
      </ButtonWithIcon>
    </WithTooltip>
  )
}
