import { MouseEvent, PropsWithChildren } from "react";

type Props = {
	className: string;
	style: React.CSSProperties;
	id: string;
	onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};
export function ButtonLike({
	children,
	className,
	onClick,
	id,
	style,
}: PropsWithChildren<Partial<Props>>) {
	return (
		<button
			type="button"
			id={id ?? "button-like"}
			className={className}
			onClick={onClick}
			style={style}
		>
			{children}
		</button>
	);
}
