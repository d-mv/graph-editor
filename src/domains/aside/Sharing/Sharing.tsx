import { useRecoilValue } from 'recoil';
import { inputState } from '../../../shared';
import './Sharing.css';

export function Sharing() {
  const value = useRecoilValue(inputState);

  function valueToCopylink() {
    const location = window.location.origin;

    const base64Value = btoa(value);

    navigator.clipboard.writeText(`${location}?code=${base64Value}`);
  }

  return (
    <div className='Sharing__container'>
      <p>Sharing</p>
      <div>
        <button onClick={valueToCopylink}>copy link</button>
      </div>
    </div>
  );
}
