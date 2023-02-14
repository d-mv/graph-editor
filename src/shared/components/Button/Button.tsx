import { Icon, IconProps } from '../Icon';
import { WithTooltip } from '../Tooltip';
import './Button.css';

interface ButtonProps {
  isDisabled?: boolean;
  onClick: () => void;
  label: string;
  icon: IconProps['icon'];
  tooltip?: string;
}

export function Button({ onClick, label, icon, tooltip, isDisabled }: ButtonProps) {
  const buttonElement = (
    <button disabled={isDisabled} className='Button__container' onClick={onClick} type='button'>
      <p className='Button_label'>{label}</p>
      <Icon icon={icon} className='Button_icon' />
    </button>
  );

  if (!tooltip || isDisabled) return buttonElement;

  return (
    <WithTooltip placement='top' tooltip={tooltip}>
      {buttonElement}
    </WithTooltip>
  );
}
