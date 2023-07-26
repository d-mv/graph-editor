import { PropsWithChildren } from "react";
import { PopperOptions, usePopperTooltip } from "react-popper-tooltip";

import { TooltipContent } from "./TooltipContent";

export interface WithTooltipProps {
	containerClass?: string;
	tooltip?: string;
	delayShow?: number;
	placement?: PopperOptions["placement"];
}

export function WithTooltip({
	children,
	containerClass,
	tooltip,
	delayShow,
	placement = "bottom",
}: PropsWithChildren<WithTooltipProps>) {
	const {
		getArrowProps,
		getTooltipProps,
		setTooltipRef,
		setTriggerRef,
		visible,
	} = usePopperTooltip({
		closeOnTriggerHidden: true,
		placement,
		delayShow,
	});

	return (
		<div className={containerClass} ref={setTriggerRef}>
			{children}
			{visible && (
				<div
					ref={setTooltipRef}
					{...getTooltipProps({ className: "tooltip-container" })}
				>
					<div {...getArrowProps({ className: "tooltip-arrow" })} />
					<TooltipContent>{tooltip}</TooltipContent>
				</div>
			)}
		</div>
	);
}
