import { useEffect, useRef } from 'react';
import { AnyValue } from '@mv-d/toolbelt';
import mermaid from 'mermaid';
import panzoom from 'svg-pan-zoom';
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

  useEffect(() => {
    const svgEl = graphRef.current?.childNodes[0].childNodes[0] as AnyValue;

    if (!svgEl || !value || message) return;

    panzoom(svgEl, {
      panEnabled: true,
      // controlIconsEnabled: true,
      zoomEnabled: true,
      dblClickZoomEnabled: true,
      mouseWheelZoomEnabled: true,
      preventMouseEventsDefault: true,
      zoomScaleSensitivity: 0.1,
      fit: true,
      center: true,
    });
    svgEl.setAttribute('height', '100%');
    svgEl.style.maxWidth = '100%';
  }, [message, value]);

  return (
    <div className='Diagram__container'>
      <div
        ref={graphRef}
        className='Diagram__graph'
        dangerouslySetInnerHTML={{
          __html: `<pre id="mermaid" class="mermaid">${value}</pre>`,
        }}
      />
      <ErrorMessage />
    </div>
  );
}
