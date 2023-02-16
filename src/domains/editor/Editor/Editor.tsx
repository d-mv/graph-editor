import { useRef, useEffect, useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as monaco from 'monaco-editor';
import initEditor from 'monaco-mermaid';
import { AnyValue, Optional } from '@mv-d/toolbelt';

import './Editor.css';
import { fontSizeState, inputState } from '../../../shared';

// @ts-ignore -- temp
self.MonacoEnvironment = {
  getWorkerUrl: function (_moduleId: AnyValue, label: string) {
    if (label === 'json') {
      return './json.worker.bundle.js';
    }

    if (label === 'css' || label === 'scss' || label === 'less') {
      return './css.worker.bundle.js';
    }

    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return './html.worker.bundle.js';
    }

    if (label === 'typescript' || label === 'javascript') {
      return './ts.worker.bundle.js';
    }

    return './editor.worker.bundle.js';
  },
};

initEditor(monaco);

export function Editor() {
  const divEl = useRef<HTMLDivElement>(null);

  const setValue = useSetRecoilState(inputState);

  const size = useRecoilValue(fontSizeState);

  const editor = useRef<Optional<monaco.editor.IStandaloneCodeEditor>>();

  const updateValue = useCallback(() => {
    const newValue = editor.current?.getValue() ?? '';

    setValue(newValue);
  }, [setValue]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(size);
    editor.current?.updateOptions({ fontSize: size });
    editor.current?.render();
  }, [size]);

  function getValue() {
    const searchQuery = window.location.search;

    if (searchQuery[0] !== '?') return '';

    const params = searchQuery.slice(1).split('&');

    if (!params.length) return '';

    const inputCode = params[0].split('code=')[1];

    if (!inputCode) return '';

    try {
      const decodedValue = atob(inputCode);

      return decodedValue;
    } catch (err) {
      return '';
    }
  }

  useEffect(() => {
    if (divEl.current && !editor.current) {
      const preValue = getValue();

      if (preValue) setValue(preValue);

      editor.current = monaco.editor.create(divEl.current, {
        value: preValue,
        scrollBeyondLastLine: false,
        language: 'mermaid',
        minimap: { enabled: false },
        // theme: 'mermaid',
        theme: 'hc-light',
        overviewRulerLanes: 0,
        fontSize: size,
        lineNumbers: 'on',
        roundedSelection: false,
        fontFamily: 'Fira Code, monospace',
        selectionHighlight: true,
        fontLigatures: true,
        renderLineHighlight: 'line',
      });

      editor.current.onDidChangeModelContent(updateValue);
    }

    return () => {
      editor.current?.dispose();
    };
  }, [setValue, updateValue]);

  return <div className='Editor' ref={divEl}></div>;
}
