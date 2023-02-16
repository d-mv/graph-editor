import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { WithTooltip } from '../../../shared';
import { inputState } from '../../../shared/store';
import './Docs.css';

export function Docs() {
  const value = useRecoilValue(inputState);

  const [section, setSection] = useState('');

  useEffect(() => {
    if (value) {
      const s = value.split('\n')[0];

      if (s && s !== section) setSection(s);
    } else {
      if (section) setSection('');
    }
  }, [section, value]);

  return (
    <div className='Docs__container'>
      <WithTooltip tooltip={`Mermaid docs${section ? ' ' + section : ''}`}>
        <a
          href={section ? `https://mermaid.js.org/syntax/${section}.html` : 'https://mermaid.js.org/intro/'}
          target='blank'
          referrerPolicy='no-referrer'
          className='Docs__link'
        >
          docs
        </a>
      </WithTooltip>
    </div>
  );
}
