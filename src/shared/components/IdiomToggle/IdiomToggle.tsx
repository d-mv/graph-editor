import { Idiom, idiomState } from "@shared/state"
import { useRecoilState } from "recoil"
import classes from "./IdiomToggle.module.css"

type IdiomButton = {
  idiom: Idiom
  label: string
  icon: string
}

const IDIOM_BUTTONS: IdiomButton[] = [
  { idiom: Idiom.MERMAID, label: "Mermaid", icon: "/assets/mermaid_logo.png" },
  {
    idiom: Idiom.PLANTUML,
    label: "PlantUML",
    icon: "/assets/plantuml_logo.png"
  }
]

export function IdiomToggle() {
  const [idiom, setIdiom] = useRecoilState(idiomState)

  function handleIdiomChange(i: Idiom) {
    return function click() {
      if (i !== idiom) setIdiom(i)
    }
  }

  function renderButton(button: IdiomButton) {
    return (
      <button
        type="button"
        className={idiom === button.idiom ? classes.selected : classes.regular}
        onClick={handleIdiomChange(button.idiom)}
      >
        <img src={button.icon} alt={button.label} />
        <p>{button.label}</p>
      </button>
    )
  }

  return <div className={classes.container}>{IDIOM_BUTTONS.map(renderButton)}</div>
}
