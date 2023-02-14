import { PropsWithChildren } from 'react';

export function TooltipContent({ children }: PropsWithChildren) {
  return <p className={'tooltip-content'}>{children}</p>;
}
