import { ifTrue } from '@mv-d/toolbelt';
import { useRecoilValue } from 'recoil';

import { Icon, inputState, useCopyCodeAsUrl, WithTooltip } from '../../../shared';
import './SaveToUrl.css';

export function SaveToUrl() {
  const value = useRecoilValue(inputState);

  const { copyNsave } = useCopyCodeAsUrl();

  const disabled = value.length < 5;

  function renderButton() {
    return (
      <button disabled={disabled} className='SaveToUrl__button' onClick={copyNsave}>
        <Icon icon='save' className='SaveToUrl__button_icon' />
        <p className='SaveToUrl__button_title'>save</p>
      </button>
    );
  }

  function renderWithTooltip() {
    return <WithTooltip tooltip={'Embed current code from editor into URL'}>{renderButton()}</WithTooltip>;
  }

  return <div className='SaveToUrl__container'>{ifTrue(disabled, renderButton, renderWithTooltip)}</div>;
}
