import { buildIntArray, ifTrue } from '@mv-d/toolbelt'
import { clsx } from 'clsx'
import { useRef, useState } from 'react'
import { useRecoilState } from 'recoil'

import classes from './FontSize.module.css'
import { useOnClickOutside } from '@shared/hooks'
import { fontSizeState } from '@shared/state'
import { MaybeNull } from '@shared/types'

export function FontSize() {
  const [size, setSize] = useRecoilState(fontSizeState)

  const [isOpen, setIsOpen] = useState(false)

  const dropdownRef = useRef<MaybeNull<HTMLDivElement>>(null)

  const buttonRef = useRef<MaybeNull<HTMLButtonElement>>(null)

  function toggleIsOpen() {
    setIsOpen((state) => !state)
  }

  useOnClickOutside([dropdownRef, buttonRef], () => setIsOpen(false))

  function handleClick(s: number) {
    return function click() {
      setIsOpen(false)

      if (s !== size) setSize(s)
    }
  }

  function renderDropdown() {
    return (
      <div ref={dropdownRef} className={clsx(classes.dropdown, 'animate__animated animate__fadeIn')}>
        <ul className={classes.list}>
          {buildIntArray(22, 10).map((el) => (
            <button key={el} type='button' className={clsx(classes.item, { [classes.item_selected]: el === size })} onClick={handleClick(el)}>
              {el}
            </button>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <p className={classes.title}>size</p>
      <button ref={buttonRef} type='button' className={classes.button} onClick={toggleIsOpen}>
        {size}
      </button>
      {ifTrue(isOpen, renderDropdown)}
    </div>
  )
}
