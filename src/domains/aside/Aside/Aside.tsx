import { Editor } from '../Editor';
import { EditorConfigPanel } from '../EditorConfigPanel';
import './Aside.css';

export function Aside() {
  return (
    <aside className='Aside__container'>
      <EditorConfigPanel />
      <Editor />
    </aside>
  );
}
