import { Editor } from '../Editor';
import { EditorConfigPanel } from '../EditorConfigPanel';
import { Sharing } from '../Sharing';
import './Aside.css';

export function Aside() {
  return (
    <aside className='Aside__container'>
      <EditorConfigPanel />
      <Editor />
      <Sharing />
    </aside>
  );
}
