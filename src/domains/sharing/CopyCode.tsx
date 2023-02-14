import { useRecoilValue } from 'recoil';

import { inputState, Button } from '../../shared';

export function CopyCode() {
  const value = useRecoilValue(inputState);

  function handleClick() {
    navigator.clipboard.writeText(value);
  }

  return (
    <Button isDisabled={!value} onClick={handleClick} tooltip='Copy code from editor' label='copy code' icon='copy' />
  );
}
