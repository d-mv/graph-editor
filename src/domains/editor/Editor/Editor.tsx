import { Optional, ifTrue } from "@mv-d/toolbelt";
import * as monaco from "monaco-editor";
import initEditor from "monaco-mermaid";
import { useCallback, useEffect, useRef } from "react";
import { PacmanLoader } from "react-spinners";
import { useRecoilState, useRecoilValue } from "recoil";

import {
	editorInputState,
	fontSizeState,
	isInitState,
	isLoadingState,
} from "@shared/state";

import classes from "./Editor.module.css";

initEditor(monaco);

export function Editor() {
	const [value, setValue] = useRecoilState(editorInputState);
	const fontSize = useRecoilValue(fontSizeState);
	const isInit = useRecoilValue(isInitState);
	const isLoading = useRecoilValue(isLoadingState);

	const editor = useRef<Optional<monaco.editor.IStandaloneCodeEditor>>();
	const divEl = useRef<HTMLDivElement>(null);

	const updateValue = useCallback(() => {
		const newValue = editor.current?.getValue() ?? "";

		setValue(newValue);
	}, [setValue]);

	useEffect(() => {
		editor.current?.updateOptions({ fontSize });
		editor.current?.render(true);
	}, [fontSize]);

	// rome-ignore lint/nursery/useExhaustiveDependencies: reduce re-renders
	useEffect(() => {
		if (isLoading) return;

		if (isInit && divEl.current && !editor.current) {
			editor.current = monaco.editor.create(divEl.current, {
				fontFamily: "Fira Code, monospace",
				fontLigatures: true,
				fontSize,
				language: "mermaid",
				lineNumbers: "on",
				minimap: { enabled: false },
				overviewRulerLanes: 0,
				renderLineHighlight: "line",
				roundedSelection: false,
				scrollBeyondLastLine: false,
				selectionHighlight: true,
				theme: "mermaid",
				value,
				scrollbar: {
					verticalScrollbarSize: 10,
					horizontalScrollbarSize: 10,
				},
			});

			editor.current.onDidChangeModelContent(updateValue);
		}

		return () => {
			editor.current?.dispose();
			editor.current = null;
		};
	}, [isLoading, isInit]);

	return (
		<div ref={divEl} className={classes.container}>
			{ifTrue(
				isLoading,
				<PacmanLoader className={classes.loader} color="#006bdb" />,
			)}
		</div>
	);
}
