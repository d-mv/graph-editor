import { CSSProperties, PropsWithoutRef } from 'react';
import {
  TbExternalLink,
  TbCopy,
  TbChevronsUp,
  TbMarkdown,
  TbDownload,
  TbZoomIn,
  TbZoomCheck,
  TbZoomOut,
} from 'react-icons/tb';
import { AiOutlineGithub, AiOutlineInfoCircle, AiOutlineSave } from 'react-icons/ai';
import { ImSvg, ImFilePicture } from 'react-icons/im';
import { SiJpeg } from 'react-icons/si';
import { TiDocumentText } from 'react-icons/ti';
import { makeMatch } from '@mv-d/toolbelt';

export const Icons = makeMatch(
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
  },
  () => <div />,
);

export interface IconProps {
  icon: keyof typeof Icons;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

export function Icon({ icon, className, style, id }: PropsWithoutRef<IconProps>) {
  const Icon = Icons[icon];

  return <Icon id={id} className={className} style={style} />;
}
