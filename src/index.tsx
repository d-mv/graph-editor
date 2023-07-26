import { logger } from "@mv-d/toolbelt";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";

import { App } from "./app";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<RecoilRoot>
		<App />
	</RecoilRoot>,
);

reportWebVitals(logger.dir);
