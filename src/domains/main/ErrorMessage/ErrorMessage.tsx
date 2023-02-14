import { useRecoilValue } from 'recoil';

import { graphErrorMessageState } from '../../../shared';
import './ErrorMessage.css';

export function ErrorMessage() {
  const message = useRecoilValue(graphErrorMessageState);

  if (!message) return null;

  return (
    <div className='ErrorMessage__container'>
      <div className='ErrorMEssage__message'>
        {message.split('\n').map(e => (
          <p key={String(e)}>{e}</p>
        ))}
      </div>
    </div>
  );
}
