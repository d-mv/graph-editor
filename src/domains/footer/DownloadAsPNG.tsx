import html2canvas from "html2canvas";
import { useRecoilValue } from "recoil";

import { Button } from "@shared/components";
import { graphErrorMessageState, graphRefState } from "@shared/state";

export function DownloadAsPNG() {
	const graphRef = useRecoilValue(graphRefState);

	const message = useRecoilValue(graphErrorMessageState);

	async function handleClick() {
		if (!graphRef) return;

		const canvas = await html2canvas(graphRef, {
			removeContainer: true,
			backgroundColor: null,
		});

		const data = canvas.toDataURL("image/png");

		const link = document.createElement("a");

		if (typeof link.download === "string") {
			link.href = data;
			link.download = "diagram.png";

			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} else {
			window.open(data);
		}
	}

	return (
		<Button
			iconFill
			isDisabled={!graphRef || Boolean(message)}
			onClick={handleClick}
			// tooltip='Download diagram as PNG'
			label="PNG"
			icon="png"
		/>
	);
}
