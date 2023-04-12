import { useCallback, useEffect, useRef, useState } from 'react';
import { AnyValue } from '@mv-d/toolbelt';
import mermaid from 'mermaid';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

import './Diagram.css';
import { graphErrorMessageState, graphRefState, inputState } from '../../../shared';
import { ErrorMessage } from '../ErrorMessage';
import { Controls } from '../Controls';

mermaid.init();

export function Diagram() {
  const value = useRecoilValue(inputState);

  const setGraphRef = useSetRecoilState(graphRefState);

  const graphRef = useRef<HTMLDivElement>(null);

  const setMessage = useSetRecoilState(graphErrorMessageState);

  const clearErrorMessage = useResetRecoilState(graphErrorMessageState);

  const handleErrorMessage = useCallback(
    (err: AnyValue) => {
      setMessage(err.message);
    },
    [setMessage],
  );

  useEffect(() => {
    mermaid.setParseErrorHandler(handleErrorMessage);
  }, [handleErrorMessage, setMessage]);

  useEffect(() => {
    if (graphRef.current) setGraphRef(graphRef.current);
  }, [graphRef, setGraphRef]);

  useEffect(() => {
    async function renderDiagram() {
      clearErrorMessage();

      mermaid.contentLoaded();

      const svg = graphRef.current;

      if (svg) {
        const result = await mermaid.render('mermaid', value, svg);

        svg.innerHTML = result.svg;
      }
    }

    if (value) renderDiagram();
    else clearErrorMessage();
  }, [clearErrorMessage, value]);

  return (
    <div className='Diagram__container'>
      <TransformWrapper initialScale={3} centerZoomedOut={true} disablePadding={true}>
        {utils => (
          <>
            <Controls {...utils} />
            <TransformComponent>
              <div ref={graphRef} className='Diagram__graph' id='container' />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
      <ErrorMessage />
    </div>
  );
}
