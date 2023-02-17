import { useRecoilValue } from 'recoil';

import { inputState, Button, fontSizeState, useCopyCodeAsUrl } from '../../shared';

export function CopyCodeLink() {
  const value = useRecoilValue(inputState);

  const { copy } = useCopyCodeAsUrl();

  return (
    <Button
      isDisabled={!value}
      onClick={copy}
      // tooltip='Copy link with code'
      label='copy link'
      icon='link'
    />
  );
}
