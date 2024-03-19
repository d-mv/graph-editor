import { ifTrue } from "@mv-d/toolbelt"
import { sidePanelIsOpenState } from "@shared/state"
import clsx from "clsx"
import { useRecoilValue } from "recoil"
import { SidePanelOpenToggle } from "../SidePanelOpenToggle"
import { ToolbarButtons } from "../ToolbarButtons"
import classes from "./Toolbar.module.css"

export function Toolbar() {
  const isPanelOpen = useRecoilValue(sidePanelIsOpenState)

  return (
    <div className={clsx(classes.container, !isPanelOpen && classes.closed)}>
      {ifTrue(isPanelOpen, () => (
        <ToolbarButtons />
      ))}
      <SidePanelOpenToggle />
    </div>
  )
}
