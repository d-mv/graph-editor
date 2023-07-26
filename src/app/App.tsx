import { ifTrue } from "@mv-d/toolbelt";
import clsx from "clsx";
import { useRecoilValue } from "recoil";

import { Main } from "@domains/diagram";
import { SidePanel } from "@domains/editor";
import { Footer } from "@domains/footer";
import { Header } from "@domains/header";
import { sidePanelIsOpenState } from "@shared/state";

import classes from "./App.module.css";
import { useOptionsFromUrl } from "@shared/hooks";
// import { useFromSourceLink } from "@shared/hooks";

export function App() {
	useOptionsFromUrl();
	const isSidePanelOpen = useRecoilValue(sidePanelIsOpenState);
	return (
		<div
			className={clsx(
				classes.container,
				ifTrue(
					isSidePanelOpen,
					classes["side-panel-open"],
					classes["side-panel-closed"],
				),
			)}
		>
			<Header />
			<SidePanel />
			<Main />
			<Footer />
		</div>
	);
}
