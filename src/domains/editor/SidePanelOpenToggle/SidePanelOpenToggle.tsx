import { clsx } from "clsx";
import { useRecoilState } from "recoil";

import classes from "./SidePanelOpenToggle.module.css";
import { ButtonLike, Icon } from "@shared/components";
import { sidePanelIsOpenState } from "@shared/state";

export function SidePanelOpenToggle() {
	const [state, setState] = useRecoilState(sidePanelIsOpenState);

	return (
		<ButtonLike
			className={clsx(classes.container, !state && classes.closed)}
			onClick={(_) => setState(!state)}
		>
			<Icon icon="close" />
		</ButtonLike>
	);
}
