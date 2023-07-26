import { Icon, WithTooltip } from "@shared/components";

import classes from "./Header.module.css";

export function Header() {
	return (
		<header className={classes.container}>
			<div className={classes.row}>
				<h1 className={classes.graph}>graph</h1>
				<h1 className={classes.editor}>EDITOR</h1>
				<WithTooltip tooltip="Inspired by Mermaid Live Editor, Mermaid lib v10.2.4">
					<Icon icon="info" className={classes.info} />
				</WithTooltip>
			</div>
			<WithTooltip tooltip="GitHub repository">
				<a
					href="https://github.com/d-mv/graph-editor"
					target="_blank"
					referrerPolicy="no-referrer"
					className={classes.github_button}
					rel="noreferrer"
				>
					<Icon icon="github" className={classes.github_icon} />
				</a>
			</WithTooltip>
		</header>
	);
}
