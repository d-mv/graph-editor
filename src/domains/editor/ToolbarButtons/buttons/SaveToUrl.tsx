import { useRecoilValue } from 'recoil'

import { ButtonWithIcon, WithTooltip } from '@shared/components'
import { useCopyCodeAsUrl } from '@shared/hooks'
import { editorInputState } from '@shared/state'

export function SaveToUrl() {
  const value = useRecoilValue(editorInputState)

  const { copyNsave } = useCopyCodeAsUrl()

  const disabled = value.length < 5

  function renderButton() {
    return (
      <ButtonWithIcon icon='save' disabled={disabled} onClick={copyNsave}>
        save
      </ButtonWithIcon>
    )
  }

  function renderWithTooltip() {
    return <WithTooltip tooltip={'Embed current code from editor into URL'}>{renderButton()}</WithTooltip>
  }

  return disabled ? renderButton() : renderWithTooltip()
}
