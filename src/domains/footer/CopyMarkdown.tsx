import { useRecoilValue } from "recoil";

import { Button } from "@shared/components";
import { editorInputState } from "@shared/state";
import { makeMarkdown } from "@shared/tools";

export function CopyMarkdown() {
	const value = useRecoilValue(editorInputState);

	function handleClick() {
		navigator.clipboard.writeText(makeMarkdown(value));
	}

	return (
		<Button
			isDisabled={!value}
			onClick={handleClick}
			label="copy markdown"
			icon="markdown"
		/>
	);
}
