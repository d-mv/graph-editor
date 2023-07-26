import { clsx } from "clsx";
import { MouseEvent, PropsWithChildren } from "react";

import { Icon, Icons } from "../Icon";

import classes from "./ButtonWithIcon.module.css";

type Props = {
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	className?: string;
	icon: Icons;
	asAnchor?: boolean;
	href?: string;
};
export function ButtonWithIcon({
	asAnchor,
	href,
	children,
	className,
	icon,
	disabled,
	onClick,
}: PropsWithChildren<Props>) {
	if (asAnchor && !href) throw new Error("href is required for anchor");
	if (!asAnchor && !onClick) throw new Error("onClick is required for button");

	const content = () => (
		<>
			<Icon icon={icon} className={classes["button_icon"]} />
			<p>{children}</p>
		</>
	);

	if (asAnchor)
		return (
			<a
				href={href}
				referrerPolicy="no-referrer"
				target="_blank"
				rel="noreferrer"
				className={clsx(classes.container, className)}
			>
				{content()}
			</a>
		);

	return (
		<button
			type="button"
			disabled={disabled}
			className={clsx(classes.container, className)}
			onClick={onClick}
		>
			{content()}
		</button>
	);
}
