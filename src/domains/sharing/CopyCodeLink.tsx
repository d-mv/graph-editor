import { useRecoilValue } from 'recoil';

import { inputState, Button, fontSizeState } from '../../shared';

export function CopyCodeLink() {
  const value = useRecoilValue(inputState);

  const fontSize = useRecoilValue(fontSizeState);

  function valueToCopylink() {
    const location = window.location.origin;

    const base64Value = btoa(value);

    navigator.clipboard.writeText(`${location}?fontSize=${fontSize}&code=${base64Value}`);
  }

  return (
    <Button isDisabled={!value} onClick={valueToCopylink} tooltip='Copy link with code' label='copy link' icon='link' />
  );
}
