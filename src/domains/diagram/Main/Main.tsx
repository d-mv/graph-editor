import { AnyValue } from "@mv-d/toolbelt";
import mermaid from "mermaid";
import { useCallback, useEffect, useRef } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";

import { Controls } from "../Controls";
import { ErrorMessage } from "../ErrorMessage";
import {
	editorInputState,
	graphErrorMessageState,
	graphRefState,
} from "@shared/state";

import classes from "./Main.module.css";

mermaid.run();

export function Main() {
	const value = useRecoilValue(editorInputState);

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
	}, [handleErrorMessage]);

	useEffect(() => {
		if (graphRef.current) setGraphRef(graphRef.current);
	}, [setGraphRef]);

	useEffect(() => {
		async function renderDiagram() {
			clearErrorMessage();

			mermaid.contentLoaded();

			const svg = graphRef.current;

			if (svg) {
				const result = await mermaid.render("mermaid", value, svg);

				svg.innerHTML = result.svg;
			}
		}

		if (value) renderDiagram();
		else clearErrorMessage();
	}, [clearErrorMessage, value]);

	return (
		<main className={classes.container}>
			<TransformWrapper
				initialScale={3}
				centerZoomedOut={true}
				disablePadding={true}
			>
				{({ zoomIn, zoomOut, resetTransform }) => {
					const zoom = () => zoomIn();
					const out = () => zoomOut();
					const reset = () => resetTransform();
					return (
						<>
							<Controls zoomIn={zoom} zoomOut={out} resetTransform={reset} />
							<TransformComponent>
								<div ref={graphRef} className={classes.graph} id="container" />
							</TransformComponent>
						</>
					);
				}}
			</TransformWrapper>
			<ErrorMessage />
		</main>
	);
}
