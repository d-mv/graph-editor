import { CopyCode } from "../CopyCode";
import { CopyCodeLink } from "../CopyCodeLink";
import { CopyMarkdown } from "../CopyMarkdown";
import { DownloadAsJPEG } from "../DownloadAsJPEG";
import { DownloadAsPNG } from "../DownloadAsPNG";
import { DownloadAsSVG } from "../DownloadAsSVG";
import { Icon } from "@shared/components";

import classes from "./Footer.module.css";

export function Footer() {
	return (
		<footer className={classes.container}>
			<div className={classes["growing-container"]}>
				<p className={classes.title}>Sharing</p>
				<Icon icon="chevronUp" className={classes.chevron} />
				<div className={classes.line}>
					<div id="sharing-group-left" className={classes.line_group}>
						<CopyCodeLink />
						<CopyCode />
						<CopyMarkdown />
					</div>
					<div id="sharing-group-right" className={classes.line_group}>
						<p className={classes.line_save}>Save as</p>
						<DownloadAsJPEG />
						<DownloadAsPNG />
						<DownloadAsSVG />
					</div>
				</div>
			</div>
		</footer>
	);
}
