import classes from './ControlButton.module.css'
import { Icon, Icons } from '@shared/components'

interface Props {
  onClick: () => void
  icon: Icons
}

export function ControlButton({ onClick, icon }: Props) {
  return (
    <button type='button' className={classes.container} onClick={onClick}>
      <Icon icon={icon} className={classes.icon} />
    </button>
  )
}
