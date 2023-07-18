import { Icon, IconProps } from '../Icon'
import { WithTooltip } from '../Tooltip'
import './Button.css'
import { ifTrue } from '@mv-d/toolbelt'
import clsx from 'clsx'

interface ButtonProps {
  isDisabled?: boolean
  onClick: () => void
  label: string
  icon: IconProps['icon']
  tooltip?: string
  iconFill?: boolean
}

export function Button({ onClick, label, icon, tooltip, isDisabled, iconFill }: ButtonProps) {
  const buttonElement = (
    <button disabled={isDisabled} className='Button__container' onClick={onClick} type='button'>
      <p className='Button_label'>{label}</p>
      <Icon icon={icon} className={clsx('Button_icon', ifTrue(iconFill, 'Button__icon_fill', 'Button__icon_stroke'))} />
    </button>
  )

  if (!tooltip || isDisabled) return buttonElement

  return (
    <WithTooltip placement='top' tooltip={tooltip}>
      {buttonElement}
    </WithTooltip>
  )
}
