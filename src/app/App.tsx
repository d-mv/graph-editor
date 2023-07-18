import { SidePanel } from '@domains/editor'
import { Footer } from '@domains/footer'

import classes from './App.module.css'
import { Main } from '@domains/diagram'
import { Header } from '@domains/header'
import { ifTrue } from '@mv-d/toolbelt'
import { sidePanelIsOpenState } from '@shared/state'
import clsx from 'clsx'
import { useRecoilValue } from 'recoil'

export function App() {
  const isSidePanelOpen = useRecoilValue(sidePanelIsOpenState)
  return (
    <div className={clsx(classes.container, ifTrue(isSidePanelOpen, classes['side-panel-open'], classes['side-panel-closed']))}>
      <Header />
      <SidePanel />
      <Main />
      <Footer />
    </div>
  )
}
