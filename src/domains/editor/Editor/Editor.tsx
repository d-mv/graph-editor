import classes from './Editor.module.css'
import { editorInputState, fontSizeState } from '@shared/state'
// import { fontSizeState, inputState } from '@shared/store'

import { AnyValue, Optional } from '@mv-d/toolbelt'
import * as monaco from 'monaco-editor'
import initEditor from 'monaco-mermaid'
import { useCallback, useEffect, useRef } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

// import { fontSizeState, inputState } from '../../../shared'
// import './Editor.css'

// @ts-ignore -- temp
// self.MonacoEnvironment = {
//   getWorkerUrl: function (_moduleId: AnyValue, label: string) {
//     if (label === 'json') {
//       return './json.worker.bundle.js';
//     }
//     if (label === 'css' || label === 'scss' || label === 'less') {
//       return './css.worker.bundle.js';
//     }
//     if (label === 'html' || label === 'handlebars' || label === 'razor') {
//       return './html.worker.bundle.js';
//     }
//     if (label === 'typescript' || label === 'javascript') {
//       return './ts.worker.bundle.js';
//     }
//     return './editor.worker.bundle.js';
//   },
// };

initEditor(monaco)

export function Editor() {
  const divEl = useRef<HTMLDivElement>(null)

  const setValue = useSetRecoilState(editorInputState)

  const size = useRecoilValue(fontSizeState)

  const setSize = useSetRecoilState(fontSizeState)

  const editor = useRef<Optional<monaco.editor.IStandaloneCodeEditor>>()

  const updateValue = useCallback(() => {
    const newValue = editor.current?.getValue() ?? ''

    setValue(newValue)
  }, [setValue])

  useEffect(() => {
    editor.current?.updateOptions({ fontSize: size })
    editor.current?.render()
  }, [size])

  function getValue() {
    const searchQuery = window.location.search

    if (searchQuery[0] !== '?') return ''

    const params = searchQuery.slice(1).split('&')

    if (!params.length) return ''

    const inputCode = params.find((p) => p.startsWith('code'))?.split('code=')[1]

    const fontSize = params.find((p) => p.startsWith('fontSize'))?.split('fontSize=')[1]

    if (fontSize) {
      const sizeFromUrl = Number(fontSize)

      if (!isNaN(sizeFromUrl)) setSize(sizeFromUrl)
    }

    if (!inputCode) return ''

    try {
      const decodedValue = atob(inputCode)

      return decodedValue
    } catch (err) {
      return ''
    }
  }

  useEffect(() => {
    if (divEl.current && !editor.current) {
      // eslint-disable-next-line no-console
      console.log('hi')

      const preValue = getValue()

      if (preValue) setValue(preValue)

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
        scrollbar: {
          verticalScrollbarSize: 10,
          horizontalScrollbarSize: 10,
        },
      })

      editor.current.onDidChangeModelContent(updateValue)
    }

    return () => {
      editor.current?.dispose()
    }
  }, [setValue, updateValue])

  return <div ref={divEl} className={classes.container} />
}
