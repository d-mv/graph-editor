import { compose } from 'ramda';
import { useRecoilValue } from 'recoil';

import { inputState, Button, makeMarkdown } from '../../shared';

export function CopyMarkdown() {
  const value = useRecoilValue(inputState);

  function handleClick() {
    compose(navigator.clipboard.writeText, makeMarkdown)(value);
  }

  return (
    <Button
      isDisabled={!value}
      onClick={handleClick}
      // tooltip='Copy code as markdown'
      label='copy markdown'
      icon='markdown'
    />
  );
}
