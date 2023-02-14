import { useRecoilValue } from 'recoil';

import { inputState, Button } from '../../shared';

export function CopyCodeLink() {
  const value = useRecoilValue(inputState);

  function valueToCopylink() {
    const location = window.location.origin;

    const base64Value = btoa(value);

    navigator.clipboard.writeText(`${location}?code=${base64Value}`);
  }

  return (
    <Button isDisabled={!value} onClick={valueToCopylink} tooltip='Copy link with code' label='copy link' icon='link' />
  );
}
