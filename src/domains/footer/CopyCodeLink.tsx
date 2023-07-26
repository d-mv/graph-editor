import { useRecoilValue } from "recoil";

import { Button } from "@shared/components";
import { useCopyCodeAsUrl } from "@shared/hooks";
import { editorInputState } from "@shared/state";

export function CopyCodeLink() {
	const value = useRecoilValue(editorInputState);

	const { copy } = useCopyCodeAsUrl();

	return (
		<Button isDisabled={!value} onClick={copy} label="copy link" icon="link" />
	);
}
