import { useEffect, useRef } from 'react';
import { AnyValue } from '@mv-d/toolbelt';
import mermaid from 'mermaid';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import './Diagram.css';
import { graphErrorMessageState, graphRefState, inputState } from '../../../shared';
import { ErrorMessage } from '../ErrorMessage';

mermaid.init();

export function Diagram() {
  const value = useRecoilValue(inputState);

  const setGraphRef = useSetRecoilState(graphRefState);

  const graphRef = useRef<HTMLDivElement>(null);

  const [message, setMessage] = useRecoilState(graphErrorMessageState);

  function handleErrors(err: AnyValue) {
    setMessage(err.message);
  }

  useEffect(() => {
    mermaid.setParseErrorHandler(handleErrors);
  }, []);

  useEffect(() => {
    if (graphRef.current) setGraphRef(graphRef.current);
  }, [graphRef, setGraphRef]);

  useEffect(() => {
    if (message) setMessage('');

    mermaid.contentLoaded();

    mermaid.diagrams;
  }, [value]);

  return (
    <div className='Diagram__container'>
      <div
        ref={graphRef}
        className='Diagram__graph'
        dangerouslySetInnerHTML={{ __html: `<pre class="mermaid">${value}</pre>` }}
      />
      <ErrorMessage />
    </div>
  );
}
