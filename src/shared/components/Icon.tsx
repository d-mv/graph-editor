import { makeMatch } from "@mv-d/toolbelt";
import { CSSProperties, PropsWithoutRef } from "react";
import {
	AiOutlineGithub,
	AiOutlineInfoCircle,
	AiOutlineSave,
} from "react-icons/ai";
import { ImFilePicture, ImSvg } from "react-icons/im";
import { SiJpeg } from "react-icons/si";
import {
	TbChevronsLeft,
	TbChevronsRight,
	TbChevronsUp,
	TbCopy,
	TbDownload,
	TbExternalLink,
	TbMarkdown,
	TbZoomCheck,
	TbZoomIn,
	TbZoomOut,
} from "react-icons/tb";
import { TiDocumentText } from "react-icons/ti";

const Icons = makeMatch(
	{
		link: TbExternalLink,
		copy: TbCopy,
		markdown: TbMarkdown,
		download: TbDownload,
		info: AiOutlineInfoCircle,
		github: AiOutlineGithub,
		chevronUp: TbChevronsUp,
		svg: ImSvg,
		jpeg: SiJpeg,
		png: ImFilePicture,
		save: AiOutlineSave,
		docs: TiDocumentText,
		zoomIn: TbZoomIn,
		zoomCenter: TbZoomCheck,
		zoomOut: TbZoomOut,
		close: TbChevronsLeft,
		open: TbChevronsRight,
	},
	() => <div />,
);

export type Icons = keyof typeof Icons;

export interface IconProps {
	icon: keyof typeof Icons;
	className?: string;
	style?: CSSProperties;
	id?: string;
}

export function Icon({
	icon,
	className,
	style,
	id,
}: PropsWithoutRef<IconProps>) {
	const Icon = Icons[icon];

	return <Icon id={id} className={className} style={style} />;
}
