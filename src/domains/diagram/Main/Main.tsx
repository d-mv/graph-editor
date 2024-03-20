import { AnyValue } from "@mv-d/toolbelt"
import clsx from "clsx"
import mermaid from "mermaid"
import plantUmlEncoder from "plantuml-encoder-decoder"
import { useCallback, useEffect, useMemo, useRef } from "react"
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch"
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"

import {
  Idiom,
  editorInputState,
  graphErrorMessageState,
  graphRefState,
  idiomState
} from "@shared/state"
import { Controls } from "../Controls"
import { ErrorMessage } from "../ErrorMessage"

import classes from "./Main.module.css"

mermaid.run()

export function Main() {
  const value = useRecoilValue(editorInputState)

  const idiom = useRecoilValue(idiomState)

  const isMermaid = useMemo(() => idiom === Idiom.MERMAID, [idiom])

  const setGraphRef = useSetRecoilState(graphRefState)

  const graphRef = useRef<HTMLDivElement>(null)

  const mainRef = useRef<HTMLDivElement>(null)

  const setMessage = useSetRecoilState(graphErrorMessageState)

  const clearErrorMessage = useResetRecoilState(graphErrorMessageState)

  const handleErrorMessage = useCallback(
    (err: AnyValue) => {
      setMessage(err.message)
    },
    [setMessage]
  )

  useEffect(() => {
    mermaid.setParseErrorHandler(handleErrorMessage)
  }, [handleErrorMessage])

  useEffect(() => {
    if (graphRef.current) setGraphRef(graphRef.current)
  }, [setGraphRef])

  useEffect(() => {
    async function renderMermaidDiagram() {
      clearErrorMessage()

      mermaid.contentLoaded()

      const svg = graphRef.current

      if (svg) {
        const result = await mermaid.render("mermaid", value, svg)

        svg.innerHTML = result.svg
      }
    }

    async function renderPlantUmlDiagram() {
      const encoded = plantUmlEncoder.encode(value)

      const url = "https://www.plantuml.com/plantuml/svg/" + encoded

      let svgString = ""

      try {
        const result = await fetch(url)

        svgString = await result.text()
      } catch (err) {
        // eslint-disable-next-line no-console -- TODO: replace with logger
        console.log(err)
      }

      const svg = graphRef.current

      if (svg) {
        const se = svgString.split('<?xml version="1.0" encoding="us-ascii" standalone="no"?>')[1]

        svg.innerHTML = se
      }
    }

    if (value) {
      if (isMermaid) renderMermaidDiagram()
      else renderPlantUmlDiagram()
    } else clearErrorMessage()
  }, [clearErrorMessage, value])

  return (
    <main ref={mainRef} className={classes.container}>
      <TransformWrapper initialScale={3} centerZoomedOut={true} disablePadding={true}>
        {({ zoomIn, zoomOut, resetTransform }) => {
          const zoom = () => zoomIn()

          const out = () => zoomOut()

          const reset = () => resetTransform()

          return (
            <>
              <Controls zoomIn={zoom} zoomOut={out} resetTransform={reset} />
              <TransformComponent>
                <div
                  ref={graphRef}
                  className={clsx(classes.graph, !isMermaid && classes.plantuml)}
                  id="container"
                />
              </TransformComponent>
            </>
          )
        }}
      </TransformWrapper>
      <ErrorMessage />
    </main>
  )
}
