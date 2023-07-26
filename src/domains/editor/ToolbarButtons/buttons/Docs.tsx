import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { LINKS_DICTIONARY } from "../linksDictionary.data";
import { ButtonWithIcon, WithTooltip } from "@shared/components";
import { editorInputState } from "@shared/state";

export function Docs() {
	const value = useRecoilValue(editorInputState);

	const [section, setSection] = useState("");

	useEffect(() => {
		if (value) {
			const s = value.split("\n")[0].trim();

			if (s && s !== section) setSection(s);
		} else {
			if (section) setSection("");
		}
	}, [section, value]);

	return (
		<WithTooltip tooltip={`Mermaid docs${section ? ` ${section}` : ""}`}>
			<ButtonWithIcon
				asAnchor
				href={`https://mermaid.js.org/${LINKS_DICTIONARY[section]}`}
				icon="docs"
			>
				docs
			</ButtonWithIcon>
		</WithTooltip>
	);
}
