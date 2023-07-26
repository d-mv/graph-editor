import { useRecoilValue } from "recoil";

import classes from "./ErrorMessage.module.css";
import { graphErrorMessageState } from "@shared/state";

export function ErrorMessage() {
	const message = useRecoilValue(graphErrorMessageState);

	if (!message) return null;

	return (
		<div className={classes.container}>
			<div className={classes.message}>
				{message.split("\n").map((e) => (
					<p key={String(e)}>{e}</p>
				))}
			</div>
		</div>
	);
}
