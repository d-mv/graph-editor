import { Editor } from '../Editor'
import { Toolbar } from '../Toolbar'
import classes from './SidePanel.module.css'
import { ifTrue } from '@mv-d/toolbelt'
import { sidePanelIsOpenState } from '@shared/state'
import { useRecoilState, useRecoilValue } from 'recoil'

export function SidePanel() {
  const isPanelOpen = useRecoilValue(sidePanelIsOpenState)

  return (
    <aside className={classes.container}>
      <Toolbar />
      {ifTrue(isPanelOpen, () => (
        <Editor />
      ))}
    </aside>
  )
}
