import { useEffect } from 'react';
import mermaid from 'mermaid';
import { useRecoilValue } from 'recoil';
import './Diagram.css';
import { inputState } from '../../../shared';

mermaid.init();

export function Diagram() {
  const value = useRecoilValue(inputState);

  // blog.logrocket.com/export-react-components-as-images-html2canvas/
  // https://www.robinwieruch.de/react-component-to-image/
  useEffect(() => {
    mermaid.contentLoaded();
    mermaid.diagrams;
  }, [value]);
  // https://codesandbox.io/s/react-with-mermaid-ex9f7?file=/src/Mermaid.js
  return (
    <div className='Diagram__container' dangerouslySetInnerHTML={{ __html: `<pre class="mermaid">${value}</pre>` }} />
  );
}
