import classes from "./ToolbarButtons.module.css";
import { Docs, FontSize, SaveToUrl } from "./buttons";

export function ToolbarButtons() {
	return (
		<div className={classes.container}>
			<SaveToUrl />
			<Docs />
			<FontSize />
		</div>
	);
}
