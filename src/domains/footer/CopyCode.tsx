import { useRecoilValue } from "recoil";

import { Button } from "@shared/components";
import { editorInputState } from "@shared/state";

export function CopyCode() {
	const value = useRecoilValue(editorInputState);

	function handleClick() {
		navigator.clipboard.writeText(value);
	}

	return (
		<Button
			isDisabled={!value}
			onClick={handleClick}
			label="copy code"
			icon="copy"
		/>
	);
}
