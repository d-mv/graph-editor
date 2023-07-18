import { ControlButton } from './ControlButton'

import classes from './Controls.module.css'

type Props = {
  zoomIn: () => void
  zoomOut: () => void
  resetTransform: () => void
}
export function Controls({ zoomIn, zoomOut, resetTransform }: Props) {
  return (
    <div className={classes.container}>
      <ControlButton onClick={zoomIn} icon='zoomIn' />
      <ControlButton onClick={resetTransform} icon='zoomCenter' />
      <ControlButton onClick={zoomOut} icon='zoomOut' />
    </div>
  )
}
