import { Icon, IconProps } from '../../../../shared';
import './ControlButton.css';

interface Props {
  onClick: () => void;
  icon: IconProps;
}

export function ControlButton({ onClick, icon }: Props) {
  return (
    <button className='ControlButton__button' onClick={() => onClick()}>
      <Icon icon={icon.icon} className='ControlButton__icon' />
    </button>
  );
}
