import { Docs } from '../Docs';
import { FontSize } from '../FontSize';
import { SaveToUrl } from '../SaveToUrl';
import './EditorConfigPanel.css';

export function EditorConfigPanel() {
  return (
    <div className='EditorConfigPanel__container'>
      <div className='EditorConfigPanel__row'>
        <SaveToUrl />
        <Docs />
      </div>
      <FontSize />
    </div>
  );
}
