import { Docs } from '../Docs';
import { FontSize } from '../FontSize';
import './EditorConfigPanel.css';

export function EditorConfigPanel() {
  return (
    <div className='EditorConfigPanel__container'>
      <Docs />
      <FontSize />
    </div>
  );
}
