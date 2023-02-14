import { CSSProperties, PropsWithoutRef } from 'react';
import { TbExternalLink, TbCopy, TbMarkdown, TbDownload } from 'react-icons/tb';
import { AiOutlineGithub, AiOutlineInfoCircle } from 'react-icons/ai';
import { makeMatch } from '@mv-d/toolbelt';

export const Icons = makeMatch(
  {
    link: TbExternalLink,
    copy: TbCopy,
    markdown: TbMarkdown,
    download: TbDownload,
    info: AiOutlineInfoCircle,
    github: AiOutlineGithub,
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
