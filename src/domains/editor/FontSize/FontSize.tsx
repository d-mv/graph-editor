import { clsx } from 'clsx';
import { buildIntArray, ifTrue } from '@mv-d/toolbelt';
import { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import { fontSizeState } from '../../../shared/store';
import './FontSize.css';
import { useOnClickOutside } from '../../../shared';
import { MaybeNull } from '../../../types';

export function FontSize() {
  const [size, setSize] = useRecoilState(fontSizeState);

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<MaybeNull<HTMLDivElement>>(null);

  const buttonRef = useRef<MaybeNull<HTMLButtonElement>>(null);

  function toggleIsOpen() {
    setIsOpen(state => !state);
  }

  useOnClickOutside([dropdownRef, buttonRef], () => setIsOpen(false));

  function handleClick(s: number) {
    return function click() {
      setIsOpen(false);

      if (s !== size) setSize(s);
    };
  }

  function renderDropdown() {
    return (
      <div ref={dropdownRef} className='FontSize__dropdown animate__animated animate__fadeIn'>
        <ul className='FontSize__list'>
          {buildIntArray(22, 10).map(el => (
            <button
              key={el}
              className={clsx('FontSize__item', { ['FontSize__item_selected']: el === size })}
              onClick={handleClick(el)}
            >
              {el}
            </button>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className='FontSize__container'>
      <p className='FontSize__title'>Font size</p>
      <button ref={buttonRef} className='FontSize__button' onClick={toggleIsOpen}>
        {size}
      </button>
      {ifTrue(isOpen, renderDropdown)}
    </div>
  );
}
